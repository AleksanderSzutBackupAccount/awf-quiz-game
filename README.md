# AWF Licencjat — baza wiedzy & quizy

Nowoczesna aplikacja (glassmorphism + GSAP) do nauki na licencjat AWF.
Wybierasz **specjalizację**, uczysz się z **wiki**, a następnie sprawdzasz wiedzę w **quizach**.
Na ekranie wyników każdy błąd jest pokazywany od razu i prowadzi linkiem do właściwego
zagadnienia w bazie wiedzy.

## Stack
- **Nuxt 4** (Vue 3, SSR)
- **Supabase** — logowanie (Google + e-mail/hasło), limit urządzeń, synchronizacja postępu
- **Pinia** — stan (specjalizacja, postęp nauki, sesja quizu) z zapisem w `localStorage` + sync do chmury
- **GSAP + ScrollTrigger** — animacje (hero, reveal, flip fiszek, konfetti); `prefers-reduced-motion`
- Własny CSS (glassmorphism) — bez frameworka UI

## Uruchomienie (lokalnie)
Wymaga **Docker Desktop** (dla lokalnego Supabase).
```bash
npm install
supabase start                 # uruchamia lokalny Supabase (Postgres, Auth, Studio)
cp .env.example .env           # i wpisz SUPABASE_URL + SUPABASE_KEY z `supabase start`
npm run dev                    # http://localhost:3000

# pomocne:
supabase status                # adresy/klucze; Studio: http://127.0.0.1:54323
supabase db reset              # odtworzenie bazy z migracji (supabase/migrations)
npm run build                  # build produkcyjny
```

## Logowanie i limit urządzeń (Supabase)
- **Pełna ochrona**: każda strona wymaga logowania (middleware `@nuxtjs/supabase`); publiczne są tylko `/login` i `/confirm`.
- **Metody**: Google OAuth oraz e-mail + hasło (lokalnie bez potwierdzania e-maila).
- **Limit 2 urządzeń, wyloguj najstarsze**: każde urządzenie ma stałe `device_id` (localStorage).
  Przy logowaniu wywoływane jest `register_device` (RPC), które zostawia 2 najaktywniejsze
  urządzenia i usuwa najstarsze. Każde urządzenie co ~45 s (oraz przy powrocie do karty) robi
  `touch_device`; jeśli zostało wyparte (zwraca `false`), klient się wylogowuje i pokazuje komunikat.
  Logika w `supabase/migrations/*_init_auth_sessions.sql`, klient w `app/plugins/deviceGuard.client.ts`.
- **Synchronizacja postępu**: XP/opanowanie/historia trzymane w `user_progress` (JSONB, RLS per użytkownik);
  przy logowaniu scalane z lokalnym stanem (`app/plugins/progressSync.client.ts`).
- **Aktywacja konta (ręczna)**: nowe konta są **nieaktywne** (`profiles.approved = false`, tworzone
  automatycznie triggerem). Niezatwierdzony użytkownik po zalogowaniu widzi `/pending` z instrukcją
  kontaktu (e-mail **contact@szut.software** / SMS **793448398**, podając swój adres e-mail).
  Gate: `app/middleware/approval.global.ts`. Użytkownicy nie mogą sami się zatwierdzić (brak polityki
  UPDATE; zmiana tylko przez service role/admina).

  **Aktywacja przez admina** — w Supabase Studio (lub SQL) ustaw `approved = true`:
  ```sql
  update public.profiles set approved = true where email = 'osoba@example.com';
  ```

### Google OAuth
1. W Google Cloud Console utwórz **OAuth Client (Web)**.
2. Authorized redirect URIs: `http://127.0.0.1:54321/auth/v1/callback` (lokalnie) oraz
   `https://<PROJECT_REF>.supabase.co/auth/v1/callback` (produkcja).
3. Wpisz `SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_ID` i `..._SECRET` do `.env`,
   w `supabase/config.toml` ustaw `[auth.external.google] enabled = true`, potem `supabase stop && supabase start`.
   (E-mail/hasło działa od razu, bez tego kroku.)

## Wdrożenie na produkcję (CI/CD)
GitHub Actions (`.github/workflows/supabase-deploy.yml`) przy pushu do `main` (zmiany w `supabase/**`)
loguje się do projektu i robi `supabase db push` + `supabase config push`.
Jednorazowa konfiguracja:
1. Utwórz produkcyjny projekt na https://supabase.com (zapisz **Project ref** i hasło bazy).
2. Wygeneruj **Access Token**: https://supabase.com/dashboard/account/tokens
3. W repo → Settings → Secrets and variables → Actions dodaj sekrety:
   `SUPABASE_ACCESS_TOKEN`, `SUPABASE_PROJECT_REF`, `SUPABASE_DB_PASSWORD`.
4. W produkcyjnym projekcie (dashboard) włącz Google provider i ustaw Site URL na adres hostingu.
5. Frontend (Nuxt) hostuj osobno (np. Vercel/Netlify/Cloudflare) z env `SUPABASE_URL`, `SUPABASE_KEY`, `SITE_URL`.

## Funkcje
- **Wybór specjalizacji na starcie**: **Hotelarstwo** oraz **Turystyka Przygodowa**.
  Zagadnienia wspólne (track `wszyscy`, plik „Licencjat — wszyscy”) widać w obu
  specjalizacjach, a do nich dochodzą zagadnienia specjalizacyjne. Można zmienić w nagłówku.
- **Grywalizacja — ścieżka nauki**: poziomy (kolejne kategorie) z odblokowywaniem,
  stanami zablokowany / aktywny / ukończony, paskiem XP i rangami. Postępy zwieńczone
  animacjami (konfetti przy poprawnej odpowiedzi, modal „Poziom ukończony” z konfetti,
  licznik XP). Wszystko z poszanowaniem `prefers-reduced-motion`. Postęp wspólnych kategorii
  przenosi się między specjalizacjami.
- **Baza wiedzy (wiki)**: wyszukiwarka, filtr po kategoriach, artykuły ze spisem treści,
  nawigacja poprzednie/następne i przycisk „Sprawdź się z tego zagadnienia”.
- **Quizy — 3 tryby (wybór na początku)**: Wielokrotny wybór (ABCD), Prawda/Fałsz, Fiszki.
  Zakres: cała baza / kategoria / pojedyncze zagadnienie. Skróty klawiszowe (1–4, A–D, P/F, Enter).
- **Wyniki**: wynik %, przegląd odpowiedzi, każdy błąd z poprawną odpowiedzią, wyjaśnieniem
  i linkiem „Przejdź do wiki →”. Przycisk „Powtórz błędne”.
- **Postęp nauki** zapisywany lokalnie (opanowane zagadnienia, historia).

## Jak dodać kolejne zagadnienia
Treść jest sterowana danymi — **nie trzeba zmieniać kodu**. Edytuj pliki w `app/content/`:
- `topics.ts` — dodaj obiekt `Topic`. Pole **`track`**: `'wszyscy'` (wspólne dla wszystkich
  specjalizacji), `'hotelarstwo'` lub `'przygodowa'`. Dalej `category`, `wiki[]` oraz
  `questions[]` (typy `abcd` / `tf` / `flash`).
- `categories.ts` — kategorie (= poziomy ścieżki nauki, w kolejności), `specializations.ts` — specjalizacje.

Materiały źródłowe w `baza/`: `Licencjat - wszyscy.pdf` (wspólne), `specjalizacja hotelarstwo.pdf`,
`specjalizacja przygodowa.docx`. Opracowano **86 zagadnień** (52 wspólne + 5 hotelarstwo +
29 przygodowa). Bazowe zagadnienia są w `topics.ts`, reszta w plikach `app/content/parts/*.ts`
(importowane i scalane na końcu `topics.ts`). Hotelarstwo widzi 57 zagadnień, Przygodowa — 81.

## Struktura
```
app/
  assets/css/main.css      # design system (tokeny, glass, animacje)
  components/              # GlassCard, AppHeader, TopicCard, WikiArticle, quiz/*
  composables/             # useContent (zapytania), useReveal (GSAP scroll reveal)
  content/                 # topics.ts, categories.ts, specializations.ts, types.ts
  pages/                   # index, wiki/, quiz/ (index, run, results)
  plugins/gsap.client.ts   # rejestracja GSAP + ScrollTrigger
  stores/                  # specialization, progress, quiz (Pinia)
baza/                      # materiały źródłowe (PDF/DOCX)
```
