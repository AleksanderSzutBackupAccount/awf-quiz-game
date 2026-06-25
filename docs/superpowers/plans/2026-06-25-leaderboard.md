# Ranking + powiadomienia o wyprzedzeniu — plan implementacji

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Dodać ranking graczy per specjalizacja oraz modal informujący gracza, gdy w wyniku quizu wyprzedził inne osoby.

**Architecture:** Klient liczy XP per specjalizacja (`xpBySpec`) i synchronizuje je do `user_progress` (chmura). Dwa nowe RPC (`SECURITY DEFINER`, bramkowane `is_approved()`) eksponują/zapisują tylko nazwę i XP. Nazwy ustawiane przez nieblokujący modal. Wyprzedzenie liczone na ekranie wyników po zdobyciu XP.

**Tech Stack:** Nuxt 4 + Vue 3 (`<script setup>`), Pinia (options stores), Supabase (Postgres + RLS + RPC), istniejący komponent `GlassCard`, GSAP/`useCelebration`.

## Global Constraints

- UI/teksty: **po polsku**. Kod, komentarze, nazwy migracji: po angielsku (jak w repo).
- Pinia: **options stores** (`defineStore` z `state/getters/actions`), jak istniejące.
- Importy: stores/composables/utils importowane jawnie z aliasem `~`; built-iny Vue/Nuxt (`ref`, `computed`, `watch`, `onMounted`, `useState`, `useSupabaseClient`, `useSupabaseUser`, `navigateTo`) są auto-importowane — **nie** importować ich ręcznie.
- Migracje: **dokładające**, nowy timestamp `20260625160000`. Nie modyfikować już wdrożonych migracji.
- Prywatność: `get_leaderboard` zwraca wyłącznie `(display_name, xp, is_me)` zatwierdzonych, nazwanych userów. Bez e-maili/uuid/szczegółów postępu. Flaga `approved` pozostaje nietykalna (zmiana nazwy tylko przez `set_display_name` po `auth.uid()`).
- XP per specjalizacja: typy `SpecializationId = 'hotelarstwo' | 'przygodowa'`; `XP_PER_CORRECT = 10`, `XP_PER_LEVEL = 100`, `RANKS` — z `app/stores/progress.ts`.
- Lokalny test bazy: `supabase db reset`; kontener psql: `docker exec -i $(docker ps --format '{{.Names}}' | grep supabase_db) psql -U postgres -d postgres`. Anon/SR key i token usera jak w sesji (`apps@caredo.pl` / `Awf-Test-2026!`).

## Plik — struktura zmian

| Plik | Rola | Akcja |
|---|---|---|
| `supabase/migrations/20260625160000_leaderboard.sql` | `display_name` + RPC `set_display_name`, `get_leaderboard` | Create |
| `app/stores/progress.ts` | `xpBySpec` + `recordAnswer(spec)` + getter `xpForSpec` | Modify |
| `app/utils/progressMerge.ts` | czysta funkcja `mergeProgress` (z `xpBySpec`) | Create |
| `app/plugins/progressSync.client.ts` | użycie `mergeProgress`, snapshot z `xpBySpec` | Modify |
| `app/pages/quiz/run.vue` | przekazanie specjalizacji do `recordAnswer` | Modify |
| `app/stores/profile.ts` | `displayName`, `loadProfile`, `setName`, `clear` | Create |
| `app/plugins/profile.client.ts` | load przy logowaniu / clear przy wylogowaniu | Create |
| `app/utils/leaderboard.ts` | typ `LeaderRow` + czysta `computeOvertaken` | Create |
| `app/composables/useLeaderboard.ts` | `fetchLeaderboard(spec)` | Create |
| `app/composables/useNameModal.ts` | współdzielony stan modala nazwy | Create |
| `app/components/NameModal.vue` | modal ustawienia nazwy | Create |
| `app/components/OvertakeModal.vue` | modal wyprzedzenia | Create |
| `app/layouts/default.vue` | montaż `NameModal` | Modify |
| `app/components/AppHeader.vue` | link „Ranking" + przycisk nazwy | Modify |
| `app/pages/ranking.vue` | strona rankingu | Create |
| `app/pages/quiz/results.vue` | wykrycie wyprzedzenia + `OvertakeModal` | Modify |

---

### Task 1: Migracja bazy — display_name + RPC

**Files:**
- Create: `supabase/migrations/20260625160000_leaderboard.sql`

**Interfaces:**
- Produces: kolumna `public.profiles.display_name text`; RPC `set_display_name(p_name text) returns text`; RPC `get_leaderboard(p_spec text) returns table(display_name text, xp int, is_me boolean)`.

- [ ] **Step 1: Napisz weryfikację (oczekiwany FAIL — RPC jeszcze nie istnieją)**

Plik `/private/tmp/.../scratchpad/lb-check.sh` (ścieżkę scratchpada weź z env sesji):

```bash
#!/usr/bin/env bash
set -u
ANON="<anon key z supabase status>"; SR="<service_role z supabase status>"; API="http://127.0.0.1:54321"
DB=$(docker ps --format '{{.Names}}' | grep supabase_db | head -1)
# upewnij się że user istnieje + zatwierdzony + ma progress z xpBySpec
curl -s -X POST "$API/auth/v1/admin/users" -H "apikey: $SR" -H "Authorization: Bearer $SR" -H "Content-Type: application/json" -d '{"email":"apps@caredo.pl","password":"Awf-Test-2026!","email_confirm":true}' >/dev/null
docker exec -i "$DB" psql -U postgres -d postgres -At -c "update public.profiles set approved=true where email='apps@caredo.pl';" >/dev/null
TOK=$(curl -s -X POST "$API/auth/v1/token?grant_type=password" -H "apikey: $ANON" -H "Content-Type: application/json" -d '{"email":"apps@caredo.pl","password":"Awf-Test-2026!"}' | python3 -c "import sys,json;print(json.load(sys.stdin).get('access_token',''))")
auth(){ curl -s -H "apikey: $ANON" -H "Authorization: Bearer $1" "${@:2}"; }
echo "[set_name] $(auth "$TOK" -X POST "$API/rest/v1/rpc/set_display_name" -H 'Content-Type: application/json' -d '{"p_name":"  Tester One  "}')"
echo "[leaderboard] $(auth "$TOK" -X POST "$API/rest/v1/rpc/get_leaderboard" -H 'Content-Type: application/json' -d '{"p_spec":"hotelarstwo"}')"
echo "[approved untouched] $(docker exec -i "$DB" psql -U postgres -d postgres -At -c "select approved from public.profiles where email='apps@caredo.pl';")"
```

- [ ] **Step 2: Uruchom — oczekuj braku funkcji**

Run: `bash lb-check.sh`
Expected: `[set_name]` i `[leaderboard]` zwracają błąd „Could not find function … in the schema cache".

- [ ] **Step 3: Napisz migrację**

```sql
-- ============================================================================
-- Leaderboard: per-user display name + a per-specialization ranking RPC.
-- Additive; touches no existing rows or other tables' RLS. Exposes ONLY
-- (display_name, xp, is_me) for approved, named users.
-- ============================================================================

alter table public.profiles add column if not exists display_name text;

-- Set the caller's own display name (profiles has no user UPDATE policy by
-- design; SECURITY DEFINER keeps the approved flag untouchable). Trims, caps at
-- 40 chars, empty -> null (removes the name).
create or replace function public.set_display_name(p_name text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  clean text;
begin
  if uid is null then raise exception 'not authenticated'; end if;
  clean := nullif(btrim(p_name), '');
  if clean is not null then clean := left(clean, 40); end if;
  update public.profiles set display_name = clean where user_id = uid;
  return clean;
end;
$$;

grant execute on function public.set_display_name(text) to authenticated;

-- Per-specialization leaderboard. Caller must be approved. Returns only approved
-- users who have set a name, ordered by that specialization's XP (read from the
-- client-authored user_progress snapshot). is_me marks the caller's own row.
create or replace function public.get_leaderboard(p_spec text)
returns table (display_name text, xp int, is_me boolean)
language sql
stable
security definer
set search_path = public
as $$
  select p.display_name,
         coalesce(nullif(up.data->'xpBySpec'->>p_spec, '')::int, 0) as xp,
         (p.user_id = auth.uid()) as is_me
  from public.profiles p
  left join public.user_progress up on up.user_id = p.user_id
  where public.is_approved()
    and p.approved = true
    and p.display_name is not null
  order by xp desc, p.display_name asc;
$$;

grant execute on function public.get_leaderboard(text) to authenticated;
```

- [ ] **Step 4: Zastosuj i uruchom weryfikację**

Run: `supabase db reset && bash lb-check.sh`
Expected:
- `[set_name]` → `"Tester One"` (przycięte spacje).
- `[leaderboard]` → tablica z wierszem `{"display_name":"Tester One","xp":0,"is_me":true}`.
- `[approved untouched]` → `t`.

- [ ] **Step 5: Sprawdź bramkę anona (MUST be empty)**

Run:
```bash
ANON="<anon>"; curl -s -H "apikey: $ANON" -X POST "http://127.0.0.1:54321/rest/v1/rpc/get_leaderboard" -H 'Content-Type: application/json' -d '{"p_spec":"hotelarstwo"}'
```
Expected: `[]` (anon nie jest approved).

- [ ] **Step 6: Commit**

```bash
git add supabase/migrations/20260625160000_leaderboard.sql
git commit -m "DB: display_name column + set_display_name/get_leaderboard RPCs"
```

---

### Task 2: Progress store — XP per specjalizacja

**Files:**
- Modify: `app/stores/progress.ts`

**Interfaces:**
- Consumes: `XP_PER_CORRECT`, `SpecializationId`.
- Produces: state `xpBySpec: Record<SpecializationId, number>`; getter `xpForSpec(spec): number`; zmieniona sygnatura `recordAnswer(topicId: string, correct: boolean, spec?: SpecializationId)`.

- [ ] **Step 1: Dodaj `xpBySpec` do typu i stanu**

W `interface ProgressState` dodaj po `xp: number` (luźny `Record<string, number>` — spójny z `ProgressSnap` z Taska 3 i bez importu aliasu `~` w czystym utilu):
```ts
  xpBySpec: Record<string, number>
```
W `state: (): ProgressState => ({ ... })` dodaj po `xp: 0,`:
```ts
    xpBySpec: { hotelarstwo: 0, przygodowa: 0 },
```

- [ ] **Step 2: Dodaj getter `xpForSpec`**

W `getters` dodaj:
```ts
    xpForSpec: (s) => (spec: SpecializationId) => s.xpBySpec[spec] ?? 0,
```

- [ ] **Step 3: Rozszerz `recordAnswer` o specjalizację**

Zamień całą akcję `recordAnswer`:
```ts
    recordAnswer(topicId: string, correct: boolean, spec?: SpecializationId) {
      const m = this.mastery[topicId] ?? { correct: 0, seen: 0 }
      m.seen += 1
      if (correct) {
        m.correct += 1
        this.xp += XP_PER_CORRECT
        if (spec) this.xpBySpec[spec] = (this.xpBySpec[spec] ?? 0) + XP_PER_CORRECT
      }
      this.mastery[topicId] = m
      this.persist()
    },
```

- [ ] **Step 4: Uwzględnij `xpBySpec` w hydrate / persist / setUser / clearUser / applySnapshot / reset**

W `hydrate()` po `this.xp = parsed.xp ?? 0`:
```ts
          this.xpBySpec = parsed.xpBySpec ?? { hotelarstwo: 0, przygodowa: 0 }
```
W `persist()` w obiekcie JSON po `xp: this.xp,`:
```ts
          xpBySpec: this.xpBySpec,
```
W `setUser()` i `clearUser()` po linii `this.xp = 0` dodaj (w obu):
```ts
      this.xpBySpec = { hotelarstwo: 0, przygodowa: 0 }
```
W `applySnapshot(...)` rozszerz typ argumentu i dodaj przypisanie. Zamień sygnaturę i ciało na:
```ts
    applySnapshot(s: Partial<Pick<ProgressState, 'mastery' | 'history' | 'xp' | 'xpBySpec' | 'celebratedLevels'>>) {
      if (s.mastery) this.mastery = s.mastery
      if (s.history) this.history = s.history
      if (typeof s.xp === 'number') this.xp = s.xp
      if (s.xpBySpec) this.xpBySpec = s.xpBySpec
      if (s.celebratedLevels) this.celebratedLevels = s.celebratedLevels
      this.persist()
    },
```
W `reset()` po `this.xp = 0`:
```ts
      this.xpBySpec = { hotelarstwo: 0, przygodowa: 0 }
```

- [ ] **Step 5: Zbuduj — sprawdź kompilację**

Run: `npx nuxi build 2>&1 | tail -5`
Expected: `✨ Build complete!` bez błędów typów.

- [ ] **Step 6: Commit**

```bash
git add app/stores/progress.ts
git commit -m "progress: track XP per specialization (xpBySpec)"
```

---

### Task 3: Czysty merge progresu + podpięcie sync

**Files:**
- Create: `app/utils/progressMerge.ts`
- Modify: `app/plugins/progressSync.client.ts`

**Interfaces:**
- Produces: `interface ProgressSnap`; `mergeProgress(local, server): ProgressSnap`.
- Consumes (sync): `progress.xpBySpec`.

- [ ] **Step 1: Napisz skrypt testowy (oczekiwany FAIL — util nie istnieje)**

Plik `app/_merge-test.mjs` (tymczasowy, w katalogu projektu by jiti znalazł zależności):
```js
import { createJiti } from 'jiti'
const jiti = createJiti(import.meta.url)
const { mergeProgress } = await jiti.import('./app/utils/progressMerge.ts')
const local = { xp: 50, xpBySpec: { hotelarstwo: 50, przygodowa: 0 }, mastery: { a: { correct: 2, seen: 3 } }, history: [{ id: 'r1' }], celebratedLevels: ['x'] }
const server = { xp: 30, xpBySpec: { hotelarstwo: 20, przygodowa: 70 }, mastery: { a: { correct: 1, seen: 5 } }, history: [{ id: 'r2' }], celebratedLevels: ['y'] }
const m = mergeProgress(local, server)
const assert = (c, msg) => { if (!c) { console.error('FAIL:', msg); process.exit(1) } }
assert(m.xpBySpec.hotelarstwo === 50, 'hotelarstwo = max(50,20)=50')
assert(m.xpBySpec.przygodowa === 70, 'przygodowa = max(0,70)=70')
assert(m.xp === 50, 'global xp = max(50,30)')
assert(m.mastery.a.correct === 2 && m.mastery.a.seen === 5, 'mastery merged by max')
assert(m.history.length === 2, 'history deduped by id')
assert(m.celebratedLevels.length === 2, 'celebrated union')
// brak xpBySpec w starym snapshocie -> 0
const m2 = mergeProgress({ xp: 10 }, {})
assert(m2.xpBySpec.hotelarstwo === 0 && m2.xpBySpec.przygodowa === 0, 'missing xpBySpec defaults to 0')
console.log('OK: all merge assertions passed')
```

- [ ] **Step 2: Uruchom — oczekuj FAIL (brak modułu)**

Run: `node app/_merge-test.mjs`
Expected: błąd „Cannot find … progressMerge".

- [ ] **Step 3: Napisz util**

`app/utils/progressMerge.ts`:
```ts
// Pure merge of two progress snapshots — "keep the best of both". No Nuxt/Vue
// deps so it is unit-testable in isolation. Used by progressSync.client.ts.

export interface ProgressSnap {
  mastery: Record<string, { correct: number; seen: number }>
  history: any[]
  xp: number
  xpBySpec: Record<string, number>
  celebratedLevels: string[]
}

const SPECS = ['hotelarstwo', 'przygodowa'] as const

export function mergeProgress(
  local: Partial<ProgressSnap>,
  server: Partial<ProgressSnap>
): ProgressSnap {
  const mastery: ProgressSnap['mastery'] = { ...(server.mastery ?? {}) }
  for (const [id, m] of Object.entries(local.mastery ?? {})) {
    const s = mastery[id]
    mastery[id] = s
      ? { correct: Math.max(s.correct, m.correct), seen: Math.max(s.seen, m.seen) }
      : m
  }

  const seen = new Set<string>()
  const history: any[] = []
  for (const h of [...(server.history ?? []), ...(local.history ?? [])]) {
    if (h?.id && !seen.has(h.id)) {
      seen.add(h.id)
      history.push(h)
    }
  }

  const xpBySpec: Record<string, number> = {}
  for (const sp of SPECS) {
    xpBySpec[sp] = Math.max(local.xpBySpec?.[sp] ?? 0, server.xpBySpec?.[sp] ?? 0)
  }

  return {
    mastery,
    xp: Math.max(local.xp ?? 0, server.xp ?? 0),
    xpBySpec,
    celebratedLevels: Array.from(
      new Set([...(local.celebratedLevels ?? []), ...(server.celebratedLevels ?? [])])
    ),
    history: history.slice(-50),
  }
}
```

- [ ] **Step 4: Uruchom — oczekuj PASS, potem usuń skrypt**

Run: `node app/_merge-test.mjs && rm app/_merge-test.mjs`
Expected: `OK: all merge assertions passed`.

- [ ] **Step 5: Podpięcie w `progressSync.client.ts`**

Na górze pliku dodaj import:
```ts
import { mergeProgress, type ProgressSnap } from '~/utils/progressMerge'
```
Usuń lokalny `type Snap = {...}` oraz całą lokalną funkcję `function merge(local, server) { ... }`. Zamień użycia `Snap` na `ProgressSnap`. Zmień `snapshot()` aby zawierał `xpBySpec`:
```ts
  const snapshot = (): ProgressSnap => ({
    mastery: progress.mastery,
    history: progress.history,
    xp: progress.xp,
    xpBySpec: progress.xpBySpec,
    celebratedLevels: progress.celebratedLevels,
  })
```
W `pullMergePush()` zamień `const merged = merge(snapshot(), ...)` na:
```ts
    const merged = mergeProgress(snapshot(), (data?.data as Partial<ProgressSnap>) ?? {})
```

- [ ] **Step 6: Zbuduj**

Run: `npx nuxi build 2>&1 | tail -5`
Expected: `✨ Build complete!`.

- [ ] **Step 7: Commit**

```bash
git add app/utils/progressMerge.ts app/plugins/progressSync.client.ts
git commit -m "sync: extract pure mergeProgress and merge xpBySpec by max"
```

---

### Task 4: Quiz przekazuje specjalizację do XP

**Files:**
- Modify: `app/pages/quiz/run.vue`

**Interfaces:**
- Consumes: `recordAnswer(topicId, correct, spec?)`, `quiz.specialization`.

- [ ] **Step 1: Przekaż specjalizację w `commit`**

W `app/pages/quiz/run.vue` zamień funkcję `commit`:
```ts
function commit(given: number | boolean | 'known' | 'review', correct: boolean) {
  quiz.answer({ given, correct })
  if (item.value) progress.recordAnswer(item.value.topicId, correct, quiz.specialization ?? undefined)
}
```

- [ ] **Step 2: Zbuduj**

Run: `npx nuxi build 2>&1 | tail -5`
Expected: `✨ Build complete!`.

- [ ] **Step 3: Commit**

```bash
git add app/pages/quiz/run.vue
git commit -m "quiz: attribute earned XP to the active specialization"
```

---

### Task 5: Profile store + plugin

**Files:**
- Create: `app/stores/profile.ts`
- Create: `app/plugins/profile.client.ts`

**Interfaces:**
- Produces: `useProfileStore` z `displayName: string|null`, `loaded: boolean`, getter `hasName`, akcje `loadProfile()`, `setName(name): Promise<string|null>`, `clear()`.

- [ ] **Step 1: Napisz store**

`app/stores/profile.ts`:
```ts
import { defineStore } from 'pinia'

/** The caller's display name (for the leaderboard). Set via the set_display_name
 *  RPC; read from the user's own profile row (RLS: own row only). */
export const useProfileStore = defineStore('profile', {
  state: () => ({
    displayName: null as string | null,
    loaded: false,
  }),
  getters: {
    hasName: (s) => !!s.displayName,
  },
  actions: {
    async loadProfile() {
      const supabase = useSupabaseClient()
      const { data: { session } } = await supabase.auth.getSession()
      const uid = session?.user?.id
      if (!uid) return
      const { data } = await supabase
        .from('profiles')
        .select('display_name')
        .eq('user_id', uid)
        .maybeSingle()
      this.displayName = ((data as any)?.display_name as string | null) ?? null
      this.loaded = true
    },
    async setName(name: string) {
      const supabase = useSupabaseClient()
      const { data, error } = await supabase.rpc('set_display_name', { p_name: name })
      if (error) throw error
      this.displayName = (data as string | null) ?? null
      this.loaded = true
      return this.displayName
    },
    clear() {
      this.displayName = null
      this.loaded = false
    },
  },
})
```

- [ ] **Step 2: Napisz plugin (load na login, clear na logout)**

`app/plugins/profile.client.ts`:
```ts
import { useProfileStore } from '~/stores/profile'

/** Loads the account's display name on login and clears it on logout. */
export default defineNuxtPlugin(() => {
  const user = useSupabaseUser()
  const profile = useProfileStore()

  watch(
    user,
    async (u, prev) => {
      if (u && !prev) await profile.loadProfile()
      else if (!u && prev) profile.clear()
    },
    { immediate: true }
  )
})
```

- [ ] **Step 3: Zbuduj**

Run: `npx nuxi build 2>&1 | tail -5`
Expected: `✨ Build complete!`.

- [ ] **Step 4: Commit**

```bash
git add app/stores/profile.ts app/plugins/profile.client.ts
git commit -m "profile: store + plugin for the user's display name"
```

---

### Task 6: useLeaderboard + computeOvertaken

**Files:**
- Create: `app/utils/leaderboard.ts`
- Create: `app/composables/useLeaderboard.ts`

**Interfaces:**
- Produces: `interface LeaderRow { display_name: string; xp: number; is_me: boolean }`; `computeOvertaken(rows, xpBefore, xpAfter): string[]`; `useLeaderboard().fetchLeaderboard(spec): Promise<LeaderRow[]>`.

- [ ] **Step 1: Napisz skrypt testowy dla `computeOvertaken` (oczekiwany FAIL)**

`app/_overtake-test.mjs`:
```js
import { createJiti } from 'jiti'
const jiti = createJiti(import.meta.url)
const { computeOvertaken } = await jiti.import('./app/utils/leaderboard.ts')
const rows = [
  { display_name: 'Me', xp: 70, is_me: true },
  { display_name: 'A', xp: 80, is_me: false },   // wyżej niż xpAfter -> NIE
  { display_name: 'B', xp: 65, is_me: false },   // w (50,70) -> wyprzedzony
  { display_name: 'C', xp: 55, is_me: false },   // w (50,70) -> wyprzedzony
  { display_name: 'D', xp: 50, is_me: false },   // == xpBefore -> NIE
  { display_name: 'E', xp: 70, is_me: false },   // == xpAfter -> NIE (remis)
]
const out = computeOvertaken(rows, 50, 70)
const assert = (c, m) => { if (!c) { console.error('FAIL:', m); process.exit(1) } }
assert(JSON.stringify(out) === JSON.stringify(['B', 'C']), 'overtaken = B,C; got ' + JSON.stringify(out))
assert(computeOvertaken(rows, 70, 70).length === 0, 'no gain -> none')
console.log('OK: overtaken assertions passed')
```

- [ ] **Step 2: Uruchom — oczekuj FAIL**

Run: `node app/_overtake-test.mjs`
Expected: błąd braku modułu.

- [ ] **Step 3: Napisz util**

`app/utils/leaderboard.ts`:
```ts
export interface LeaderRow {
  display_name: string
  xp: number
  is_me: boolean
}

/** Names the caller overtook: those who were ahead (xp > xpBefore) and are now
 *  behind (xp < xpAfter). Excludes self and ties. */
export function computeOvertaken(rows: LeaderRow[], xpBefore: number, xpAfter: number): string[] {
  if (xpAfter <= xpBefore) return []
  return rows
    .filter((r) => !r.is_me && r.xp > xpBefore && r.xp < xpAfter)
    .map((r) => r.display_name)
}
```

- [ ] **Step 4: Uruchom — oczekuj PASS, usuń skrypt**

Run: `node app/_overtake-test.mjs && rm app/_overtake-test.mjs`
Expected: `OK: overtaken assertions passed`.

- [ ] **Step 5: Napisz composable**

`app/composables/useLeaderboard.ts`:
```ts
import type { LeaderRow } from '~/utils/leaderboard'

/** Fetches the per-specialization leaderboard via the get_leaderboard RPC. */
export function useLeaderboard() {
  const supabase = useSupabaseClient()

  async function fetchLeaderboard(spec: string): Promise<LeaderRow[]> {
    const { data, error } = await supabase.rpc('get_leaderboard', { p_spec: spec })
    if (error) throw error
    return (data ?? []) as LeaderRow[]
  }

  return { fetchLeaderboard }
}
```

- [ ] **Step 6: Zbuduj + commit**

Run: `npx nuxi build 2>&1 | tail -5`
Expected: `✨ Build complete!`.
```bash
git add app/utils/leaderboard.ts app/composables/useLeaderboard.ts
git commit -m "leaderboard: fetch composable + pure computeOvertaken"
```

---

### Task 7: Modal nazwy + współdzielony stan + montaż w layoucie

**Files:**
- Create: `app/composables/useNameModal.ts`
- Create: `app/components/NameModal.vue`
- Modify: `app/layouts/default.vue`

**Interfaces:**
- Produces: `useNameModal()` → `{ open: Ref<boolean>, dismissed: Ref<boolean> }`.
- Consumes: `useProfileStore` (`displayName`, `loaded`, `setName`).

- [ ] **Step 1: Współdzielony stan modala**

`app/composables/useNameModal.ts`:
```ts
/** Shared open/dismissed state for the display-name modal (header + layout). */
export function useNameModal() {
  const open = useState<boolean>('awf:nameModalOpen', () => false)
  const dismissed = useState<boolean>('awf:nameModalDismissed', () => false)
  return { open, dismissed }
}
```

- [ ] **Step 2: Komponent `NameModal.vue`**

`app/components/NameModal.vue`:
```vue
<script setup lang="ts">
import { useProfileStore } from '~/stores/profile'

const emit = defineEmits<{ close: [] }>()
const profile = useProfileStore()

const name = ref(profile.displayName ?? '')
const saving = ref(false)
const error = ref('')

async function save() {
  const v = name.value.trim()
  if (!v) { error.value = 'Podaj nazwę.'; return }
  saving.value = true
  error.value = ''
  try {
    await profile.setName(v)
    emit('close')
  } catch (e: any) {
    error.value = e?.message || 'Nie udało się zapisać nazwy.'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="overlay" role="dialog" aria-modal="true" aria-label="Ustaw nazwę" @click.self="emit('close')">
    <div class="glass glass-strong card">
      <p class="eyebrow">Ranking</p>
      <h2 class="title">Jak Cię pokazać w rankingu?</h2>
      <p class="muted">Wybierz nazwę widoczną dla innych graczy. Możesz ją później zmienić.</p>
      <input
        v-model="name"
        type="text"
        maxlength="40"
        placeholder="np. Ania, Kuba94…"
        class="name-input"
        @keyup.enter="save"
      />
      <p v-if="error" class="err">{{ error }}</p>
      <div class="actions">
        <button class="btn btn-ghost" @click="emit('close')">Pomiń</button>
        <button class="btn btn-primary" :disabled="saving" @click="save">{{ saving ? '…' : 'Zapisz' }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed; inset: 0; z-index: 200;
  display: grid; place-items: center; padding: 1.5rem;
  background: rgba(5, 8, 18, 0.72);
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
}
.card { max-width: 440px; width: 100%; text-align: center; padding: var(--sp-5); display: flex; flex-direction: column; gap: 0.8rem; align-items: stretch; }
.title { font-size: var(--fs-xl); }
.name-input {
  width: 100%; min-height: 52px; padding: 0 1rem; font-size: var(--fs-lg);
  border-radius: var(--radius); border: 1px solid var(--glass-border);
  background: rgba(255,255,255,0.04); color: var(--text-1);
}
.name-input:focus-visible { border-color: var(--accent); box-shadow: 0 0 0 4px rgba(124,139,255,0.18); }
.err { color: var(--bad); font-size: var(--fs-sm); }
.actions { display: flex; gap: 0.6rem; justify-content: flex-end; margin-top: 0.4rem; }
</style>
```

- [ ] **Step 3: Montaż w `layouts/default.vue`**

Zamień całą zawartość `<template>`/`<script>` początku pliku — dodaj script i warunkowy modal. Nowy plik:
```vue
<script setup lang="ts">
import { useProfileStore } from '~/stores/profile'
import { useNameModal } from '~/composables/useNameModal'

const profile = useProfileStore()
const { open, dismissed } = useNameModal()

// Auto-pokaż gdy zalogowany user nie ma jeszcze nazwy i jej nie pominął.
const showName = computed(() => open.value || (profile.loaded && !profile.displayName && !dismissed.value))
function closeName() {
  open.value = false
  dismissed.value = true
}
</script>

<template>
  <div class="layout">
    <AppHeader />
    <main id="main" class="main">
      <slot />
    </main>
    <footer class="ftr">
      <div class="container ftr-inner">
        <span class="dim">AWF Licencjat — baza wiedzy i quizy do nauki.</span>
        <span class="dim">Materiały opracowane na podstawie zagadnień egzaminacyjnych.</span>
      </div>
    </footer>
    <NameModal v-if="showName" @close="closeName" />
  </div>
</template>

<style scoped>
.layout { display: flex; flex-direction: column; min-height: 100dvh; }
.main { flex: 1; }
.ftr { padding: var(--sp-5) 0 var(--sp-4); margin-top: var(--sp-6); border-top: 1px solid var(--glass-border); }
.ftr-inner { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; justify-content: space-between; font-size: var(--fs-xs); }
</style>
```

- [ ] **Step 4: Zbuduj + commit**

Run: `npx nuxi build 2>&1 | tail -5`
Expected: `✨ Build complete!`.
```bash
git add app/composables/useNameModal.ts app/components/NameModal.vue app/layouts/default.vue
git commit -m "ui: non-blocking display-name modal (auto-prompt + dismiss)"
```

---

### Task 8: Nagłówek — link „Ranking" + przycisk nazwy

**Files:**
- Modify: `app/components/AppHeader.vue`

**Interfaces:**
- Consumes: `useProfileStore`, `useNameModal`.

- [ ] **Step 1: Importy + stan w `<script setup>`**

W `app/components/AppHeader.vue` po istniejących importach dodaj:
```ts
import { useProfileStore } from '~/stores/profile'
import { useNameModal } from '~/composables/useNameModal'
```
Po `const user = useSupabaseUser()` dodaj:
```ts
const profile = useProfileStore()
const { open: nameModalOpen } = useNameModal()
function openName() { nameModalOpen.value = true }
```

- [ ] **Step 2: Dodaj „Ranking" do `links`**

Zamień tablicę `links`:
```ts
const links = [
  { to: '/', label: 'Start' },
  { to: '/wiki', label: 'Baza wiedzy' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/ranking', label: 'Ranking' },
]
```

- [ ] **Step 3: Przycisk nazwy w nawigacji**

W `<template>`, w `<nav>`, bezpośrednio przed przyciskiem `<button v-if="user" ... class="logout-btn" ...>` wstaw:
```vue
        <button
          v-if="user"
          type="button"
          class="name-btn chip"
          :title="profile.displayName || 'Ustaw nazwę w rankingu'"
          @click="openName"
        >
          <span aria-hidden="true">🏷️</span>
          {{ profile.displayName || 'Nazwa' }}
        </button>
```

- [ ] **Step 4: Styl przycisku nazwy**

W `<style scoped>` dodaj na końcu (przed media query):
```css
.name-btn {
  margin-left: 0.4rem; cursor: pointer; font: inherit;
  font-size: var(--fs-xs); font-weight: 600; color: var(--text-1);
  display: inline-flex; align-items: center; gap: 0.35rem;
}
.name-btn:hover { color: var(--accent); }
```

- [ ] **Step 5: Zbuduj + commit**

Run: `npx nuxi build 2>&1 | tail -5`
Expected: `✨ Build complete!`.
```bash
git add app/components/AppHeader.vue
git commit -m "header: Ranking link + display-name button"
```

---

### Task 9: Strona rankingu

**Files:**
- Create: `app/pages/ranking.vue`

**Interfaces:**
- Consumes: `useLeaderboard().fetchLeaderboard`, `LeaderRow`, `RANKS`, `XP_PER_LEVEL`, `useSpecializationStore`.

- [ ] **Step 1: Napisz stronę**

`app/pages/ranking.vue`:
```vue
<script setup lang="ts">
import { useSpecializationStore } from '~/stores/specialization'
import { useLeaderboard } from '~/composables/useLeaderboard'
import type { LeaderRow } from '~/utils/leaderboard'
import { RANKS, XP_PER_LEVEL } from '~/stores/progress'
import type { SpecializationId } from '~/content/types'

const spec = useSpecializationStore()
const { fetchLeaderboard } = useLeaderboard()

const SPECS: { id: SpecializationId; label: string }[] = [
  { id: 'hotelarstwo', label: 'Hotelarstwo' },
  { id: 'przygodowa', label: 'Przygodowa' },
]

const active = ref<SpecializationId>('hotelarstwo')
const rows = ref<LeaderRow[]>([])
const loading = ref(false)
const error = ref('')

function rankName(xp: number) {
  return RANKS[Math.min(RANKS.length - 1, Math.floor(xp / XP_PER_LEVEL))] ?? RANKS[0]
}

async function load() {
  loading.value = true
  error.value = ''
  try {
    rows.value = await fetchLeaderboard(active.value)
  } catch (e: any) {
    error.value = e?.message || 'Nie udało się wczytać rankingu.'
    rows.value = []
  } finally {
    loading.value = false
  }
}

watch(active, load)
onMounted(() => {
  spec.hydrate()
  if (spec.current) active.value = spec.current
  load()
})
</script>

<template>
  <section class="section container">
    <ClientOnly>
      <header class="rk-head">
        <div>
          <p class="eyebrow">Ranking</p>
          <h1>Tabela wyników</h1>
        </div>
        <div class="rk-tabs">
          <button
            v-for="s in SPECS"
            :key="s.id"
            class="chip filter"
            :class="{ active: active === s.id }"
            @click="active = s.id"
          >
            {{ s.label }}
          </button>
        </div>
      </header>

      <p v-if="loading" class="muted">Ładowanie…</p>
      <p v-else-if="error" class="muted">{{ error }}</p>
      <p v-else-if="!rows.length" class="muted">
        Brak graczy z nazwą w tej specjalizacji. Ustaw swoją nazwę i zacznij zdobywać XP!
      </p>

      <GlassCard v-else strong class="rk-card">
        <ol class="rk-list">
          <li
            v-for="(r, i) in rows"
            :key="i"
            class="rk-row"
            :class="{ me: r.is_me }"
          >
            <span class="rk-pos">{{ i + 1 }}</span>
            <span class="rk-name">{{ r.display_name }}<span v-if="r.is_me" class="rk-you"> (Ty)</span></span>
            <span class="rk-rank dim">{{ rankName(r.xp) }}</span>
            <span class="rk-xp">{{ r.xp }} XP</span>
          </li>
        </ol>
      </GlassCard>

      <template #fallback>
        <div class="empty glass"><p class="muted">Ładowanie rankingu…</p></div>
      </template>
    </ClientOnly>
  </section>
</template>

<style scoped>
.rk-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1rem; margin-bottom: var(--sp-4); }
.rk-tabs { display: flex; gap: 0.5rem; }
.filter { cursor: pointer; transition: 0.2s; }
.filter.active { background: var(--accent-strong); border-color: transparent; color: #fff; }
.rk-list { list-style: none; display: flex; flex-direction: column; gap: 0.3rem; }
.rk-row {
  display: grid; grid-template-columns: 2.2rem 1fr auto auto; align-items: center; gap: 0.8rem;
  padding: 0.7rem 0.9rem; border-radius: var(--radius); border: 1px solid transparent;
}
.rk-row:nth-child(odd) { background: var(--glass-bg); }
.rk-row.me { border-color: var(--accent); background: rgba(124,139,255,0.1); }
.rk-pos { font-weight: 800; color: var(--text-3); text-align: center; }
.rk-name { font-weight: 700; }
.rk-you { color: var(--accent); font-weight: 600; }
.rk-rank { font-size: var(--fs-sm); }
.rk-xp { font-weight: 800; color: var(--aurora-2); }
.empty { text-align: center; max-width: 480px; margin: var(--sp-6) auto; padding: var(--sp-5); }
</style>
```

- [ ] **Step 2: Zbuduj + commit**

Run: `npx nuxi build 2>&1 | tail -5`
Expected: `✨ Build complete!`.
```bash
git add app/pages/ranking.vue
git commit -m "ranking: per-specialization leaderboard page"
```

---

### Task 10: Modal wyprzedzenia + integracja z wynikami

**Files:**
- Create: `app/components/OvertakeModal.vue`
- Modify: `app/pages/quiz/results.vue`

**Interfaces:**
- Consumes: `useLeaderboard().fetchLeaderboard`, `computeOvertaken`, `useProfileStore`, `progress.xpForSpec`, `quiz.specialization`, `quiz.score`, `XP_PER_CORRECT`.

- [ ] **Step 1: Komponent `OvertakeModal.vue`**

`app/components/OvertakeModal.vue`:
```vue
<script setup lang="ts">
import { useCelebration } from '~/composables/useCelebration'

const props = defineProps<{ names: string[] }>()
const emit = defineEmits<{ close: [] }>()

const { confetti } = useCelebration()

const label = computed(() =>
  props.names.length === 1
    ? `Wyprzedziłeś: ${props.names[0]}!`
    : `Wyprzedziłeś ${props.names.length} osoby w rankingu!`
)

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' || e.key === 'Enter') emit('close')
}
onMounted(() => {
  confetti({ count: 120, power: 1 })
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="overlay" role="dialog" aria-modal="true" aria-label="Awans w rankingu" @click.self="emit('close')">
    <div class="glass glass-strong card">
      <div class="badge" aria-hidden="true">🚀</div>
      <p class="eyebrow">Awans w rankingu</p>
      <h2 class="title gradient-text">{{ label }}</h2>
      <ul v-if="names.length > 1" class="names">
        <li v-for="n in names" :key="n">{{ n }}</li>
      </ul>
      <button class="btn btn-primary btn-lg" @click="emit('close')">Świetnie →</button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed; inset: 0; z-index: 210;
  display: grid; place-items: center; padding: 1.5rem;
  background: rgba(5, 8, 18, 0.72);
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
}
.card { max-width: 440px; width: 100%; text-align: center; padding: var(--sp-5); display: flex; flex-direction: column; gap: 0.8rem; align-items: center; }
.badge {
  width: 96px; height: 96px; border-radius: 50%; display: grid; place-items: center; font-size: 2.6rem;
  background: linear-gradient(135deg, var(--aurora-1), var(--aurora-2));
  box-shadow: 0 0 0 8px rgba(124,139,255,0.18), 0 18px 40px -10px var(--accent-strong);
}
.title { font-size: var(--fs-xl); }
.names { list-style: none; display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; }
.names li { padding: 0.25rem 0.7rem; border-radius: var(--radius-full); background: var(--glass-bg); font-weight: 600; font-size: var(--fs-sm); }
.card .btn { margin-top: 0.6rem; }
</style>
```

- [ ] **Step 2: Integracja w `results.vue` — importy i stan**

W `app/pages/quiz/results.vue` po istniejących importach dodaj:
```ts
import { useProfileStore } from '~/stores/profile'
import { useLeaderboard } from '~/composables/useLeaderboard'
import { computeOvertaken } from '~/utils/leaderboard'
```
Po `const { confetti } = useCelebration()` dodaj:
```ts
const profile = useProfileStore()
const { fetchLeaderboard } = useLeaderboard()
const overtaken = ref<string[]>([])
const showOvertake = ref(false)
```

- [ ] **Step 3: Oblicz wyprzedzonych w `onMounted`**

W `onMounted(() => { ... })` w `results.vue`, na samym końcu ciała funkcji (po bloku `if (fresh.length) {...} else if (...) {...}`), dodaj wywołanie:
```ts
  void detectOvertaken()
```
i dodaj nową funkcję tuż pod `onMounted`:
```ts
async function detectOvertaken() {
  const spec = quiz.specialization
  if (!profile.displayName || !spec) return
  const xpAfter = progress.xpForSpec(spec)
  const xpBefore = xpAfter - quiz.score * XP_PER_CORRECT
  try {
    const rows = await fetchLeaderboard(spec)
    const names = computeOvertaken(rows, xpBefore, xpAfter)
    if (names.length) {
      overtaken.value = names
      showOvertake.value = true
    }
  } catch {
    /* silent — ranking errors must not break the results screen */
  }
}
```

- [ ] **Step 4: Pokaż modal (po level-up, bez nakładania)**

W `<template>` `results.vue`, tuż przed zamykającym `</section>` (po istniejącym `<LevelUpModal ... />`), dodaj:
```vue
    <OvertakeModal
      v-if="showOvertake && !currentLevelUp"
      :names="overtaken"
      @close="showOvertake = false"
    />
```

- [ ] **Step 5: Zbuduj**

Run: `npx nuxi build 2>&1 | tail -5`
Expected: `✨ Build complete!`.

- [ ] **Step 6: E2E w przeglądarce (dwóch userów)**

Przygotowanie danych (drugi user z nazwą i niższym XP w hotelarstwie):
```bash
# user2 z nazwą "Rywal" i xpBySpec.hotelarstwo = 20
SR="<service_role>"; API="http://127.0.0.1:54321"; DB=$(docker ps --format '{{.Names}}' | grep supabase_db | head -1)
U2=$(curl -s -X POST "$API/auth/v1/admin/users" -H "apikey: $SR" -H "Authorization: Bearer $SR" -H "Content-Type: application/json" -d '{"email":"rywal@awf.local","password":"Rywal-2026!","email_confirm":true}' | python3 -c "import sys,json;print(json.load(sys.stdin)['id'])")
docker exec -i "$DB" psql -U postgres -d postgres -At -c "update public.profiles set approved=true, display_name='Rywal' where user_id='$U2';"
docker exec -i "$DB" psql -U postgres -d postgres -c "insert into public.user_progress(user_id,data) values ('$U2','{\"xpBySpec\":{\"hotelarstwo\":20,\"przygodowa\":0}}') on conflict (user_id) do update set data=excluded.data;"
```
Następnie w przeglądarce jako `apps@caredo.pl`:
1. Zaloguj się → pojawia się `NameModal` → ustaw nazwę „Tester".
2. Wejdź na `/ranking` (Hotelarstwo) → widać „Rywal 20 XP" i „Tester 0 XP (Ty)".
3. Zagraj quiz ABCD w specjalizacji Hotelarstwo, odpowiedz poprawnie ≥3 razy (≥30 XP > 20).
4. Na ekranie wyników pojawia się `OvertakeModal` z tekstem „Wyprzedziłeś: Rywal!".
5. `/ranking` → „Tester" jest teraz nad „Rywal".

Expected: wszystkie kroki jak wyżej; brak błędów w konsoli (`read_console_messages` z `onlyErrors`).

- [ ] **Step 7: Commit**

```bash
git add app/components/OvertakeModal.vue app/pages/quiz/results.vue
git commit -m "results: notify when the user overtakes others in the ranking"
```

---

## Po wykonaniu

- Deploy: migracja `20260625160000_leaderboard.sql` jest dokładająca i niezależna od cutover-u revoke — można aplikować w dowolnym pushu.
- Zaktualizuj `SECURITY.md` o nowy wektor ekspozycji (nazwa + XP w `get_leaderboard`) — opcjonalnie, jako oddzielny commit.
