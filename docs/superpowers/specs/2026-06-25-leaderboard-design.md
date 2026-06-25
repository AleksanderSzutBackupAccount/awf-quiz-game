# Ranking graczy + powiadomienia o wyprzedzeniu — spec

Data: 2026-06-25
Status: zatwierdzony projekt (do planu wdrożenia)

## Cel

Dodać ranking użytkowników i informować gracza, gdy w wyniku quizu **wyprzedzi**
inną osobę w rankingu.

## Decyzje (zatwierdzone)

1. **Zakres: ranking per specjalizacja** (Hotelarstwo, Przygodowa) — osobne tabele.
2. **Widoczność: pełna tabela** — każdy zatwierdzony, nazwany user widzi listę
   wszystkich: pozycja, nazwa, ranga, XP.
3. **Nazwa: zawsze z modala** — ignorujemy dane z Google; każdy ustawia własną
   nazwę. Modal **nieblokujący**; bez ustawionej nazwy user nie jest w rankingu
   (i nie dostaje powiadomień o wyprzedzeniu).
4. **Powiadomienie: modal po quizie** na ekranie wyników (nie real-time).
5. **Globalny pasek XP zostaje bez zmian**; ranking dostaje **osobne XP per
   specjalizacja** (`xpBySpec`).

## Model danych

### XP per specjalizacja (klient)
Do `useProgressStore` dochodzi `xpBySpec: Record<SpecializationId, number>`
(domyślnie `{ hotelarstwo: 0, przygodowa: 0 }`). Globalne `xp` (ranga na stronie
głównej) zostaje nietknięte.

- **Atrybucja:** XP z quizu trafia do `quiz.specialization` (także za tematy
  „wszyscy"). `recordAnswer(topicId, correct, spec)` przy poprawnej odpowiedzi
  robi `xp += 10` (jak teraz) **oraz** `xpBySpec[spec] += 10`.
- `persist` / `snapshot` / `applySnapshot` / `hydrate` / `setUser` / `clearUser` /
  `reset` obejmują `xpBySpec`.
- **Sync chmury** (`progressSync`): typ `Snap` + `merge()` scalają `xpBySpec`
  przez `max` per specjalizacja (spójnie z `xp`). Brak `xpBySpec` w starym
  snapshocie ⇒ traktowane jako 0 (bez migracji danych).

### Schemat bazy (nowa migracja, dokładająca — `20260625160000_leaderboard.sql`)

```sql
alter table public.profiles add column if not exists display_name text;

-- Ustawienie własnej nazwy. profiles celowo nie ma polityki UPDATE dla userów,
-- więc robimy to przez SECURITY DEFINER (flaga approved pozostaje nietykalna).
create or replace function public.set_display_name(p_name text)
returns text language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); clean text;
begin
  if uid is null then raise exception 'not authenticated'; end if;
  clean := nullif(btrim(p_name), '');
  if clean is not null then clean := left(clean, 40); end if;
  update public.profiles set display_name = clean where user_id = uid;
  return clean;
end; $$;
grant execute on function public.set_display_name(text) to authenticated;

-- Ranking dla specjalizacji: tylko zatwierdzeni userzy z ustawioną nazwą,
-- sortowani po XP tej specjalizacji. NIE eksponuje e-maili/uuid/szczegółów postępu.
create or replace function public.get_leaderboard(p_spec text)
returns table (display_name text, xp int, is_me boolean)
language sql stable security definer set search_path = public as $$
  select p.display_name,
         coalesce(nullif(up.data->'xpBySpec'->>p_spec, '')::int, 0) as xp,
         (p.user_id = auth.uid()) as is_me
  from public.profiles p
  left join public.user_progress up on up.user_id = p.user_id
  where public.is_approved()           -- caller musi być zatwierdzony
    and p.approved = true
    and p.display_name is not null
  order by xp desc, p.display_name asc;
$$;
grant execute on function public.get_leaderboard(text) to authenticated;
```

Migracja jest **data/struktura dokładająca** — nie rusza istniejących wierszy ani
RLS na innych tabelach; komponuje się bezpiecznie z warstwą on-demand.

## Komponenty (warstwa klienta)

Każda jednostka ma jeden cel i jasny interfejs:

- **`useProfileStore`** (Pinia): `displayName: string | null`, `loaded: boolean`.
  - `loadProfile()` — `select display_name from profiles` (RLS: własny wiersz).
  - `setName(name)` — RPC `set_display_name`, aktualizuje stan lokalny.
  - Reset przy wylogowaniu.
- **`useLeaderboard()`** (composable): `fetchLeaderboard(spec)` → RPC
  `get_leaderboard` → `Array<{ display_name; xp; is_me }>`.
- **`NameModal.vue`**: pokazywany gdy `profile.loaded && displayName === null`.
  Pole nazwy + „Zapisz" / „Pomiń". „Pomiń" ⇒ flaga w `useState` na sesję (nie
  nagabuje przy każdej nawigacji); zawsze otwieralny z nagłówka. Montowany w
  `layouts/default.vue`.
- **`AppHeader.vue`**: link „Ranking" (do `/ranking`) + przycisk nazwy/avatara
  (otwiera `NameModal` do ustawienia/zmiany nazwy).
- **`pages/ranking.vue`**: przełącznik specjalizacji (domyślnie bieżąca z
  `useSpecializationStore`), tabela: pozycja, nazwa (własny wiersz podświetlony),
  ranga (z progów `RANKS` po XP), XP. Stan pusty gdy nikt nie ma nazwy.
- **`OvertakeModal.vue`** (wzorzec `LevelUpModal.vue`): props = lista nazw
  wyprzedzonych; treść „Awansowałeś! Wyprzedziłeś: …".

## Przepływ — wykrycie wyprzedzenia (na `pages/quiz/results.vue`)

Po zakończeniu quizu, gdy XP zostało już dodane i wypchnięte do chmury:

1. `spec = quiz.specialization`; pomiń całość gdy brak nazwy (`displayName === null`).
2. `xpAfter = progress.xpBySpec[spec]`; `xpGained = quiz.score * XP_PER_CORRECT`;
   `xpBefore = xpAfter - xpGained`.
3. `rows = await fetchLeaderboard(spec)`.
4. `overtaken = rows.filter(r => !r.is_me && r.xp > xpBefore && r.xp < xpAfter)`
   `.map(r => r.display_name)`.
5. Jeśli `overtaken.length > 0` → pokaż `OvertakeModal` (po ewentualnym
   `LevelUpModal`, żeby nie nakładać modali).

Uzasadnienie warunku: byłem na `xpBefore`, jestem na `xpAfter`; każdy, czyje XP
leży w `(xpBefore, xpAfter)`, był nade mną, a teraz jest pode mną → wyprzedzony.
XP innych z rankingu traktujemy jako stałe podczas mojego quizu (akceptowalne
przybliżenie).

## Obsługa błędów / przypadki brzegowe

- **Brak nazwy** → user nie w rankingu, brak modala wyprzedzenia, `NameModal`
  zachęca do ustawienia.
- **Błąd RPC** (sieć) → ranking pokazuje stan błędu/pusty; modal wyprzedzenia po
  prostu się nie pojawia (cicho). Postęp i quiz działają niezależnie.
- **Remisy XP** → sortowanie wtórne po nazwie; pozycja = indeks+1.
- **Userzy z 0 XP w danej specjalizacji** (nazwani, nie grali) — pojawiają się na
  końcu listy. Akceptowalne; ewentualne filtrowanie `xp > 0` to późniejsze YAGNI.
- **Tryb fiszek** — `score` liczy „umiem", XP naliczane normalnie, wyprzedzenie
  działa tak samo.

## Bezpieczeństwo / prywatność

- `get_leaderboard` eksponuje **tylko** `(nazwa, xp, is_me)` zatwierdzonych,
  nazwanych userów — bez e-maili, uuid, szczegółów postępu. Bramkowane
  `is_approved()`. Spójne z pracą nad ochroną danych (`SECURITY.md`).
- Nazwy są **wybierane przez userów** (modal), nie pobierane z providera — niższe
  ryzyko ujawnienia PII.
- Każdy ustawia tylko **własną** nazwę (`set_display_name` po `auth.uid()`); flaga
  `approved` pozostaje nietykalna.

## Znane ograniczenia (świadome)

- **XP liczone po stronie klienta** (jak cały dotychczasowy postęp) — ranking
  opiera się na self-reported XP; ktoś zdeterminowany może je podrasować edytując
  własny `user_progress`. Dla aplikacji do nauki akceptowalne; bez walidacji
  serwerowej (YAGNI).
- Powiadomienie jest **po quizie**, nie real-time.

## Testowanie

- **DB (lokalnie, `db reset` + curl z tokenem):** `set_display_name` ustawia/czyści
  nazwę tylko własną; `get_leaderboard` zwraca tylko nazwanych zatwierdzonych,
  posortowanych malejąco; anon/niezatwierdzony → pusto; `approved` nietykalne.
- **Sync:** `merge` zachowuje `xpBySpec` przez `max`; stary snapshot bez
  `xpBySpec` nie wywala (0).
- **E2E (przeglądarka):** modal nazwy po pierwszym logowaniu; ustawienie nazwy →
  obecność w `/ranking`; zagranie quizu podbija XP per specjalizacja; drugi user
  z niższym XP zostaje wyprzedzony → `OvertakeModal` z jego nazwą.
