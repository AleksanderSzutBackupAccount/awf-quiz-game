# Bezpieczeństwo — ochrona przed kradzieżą danych

Ten dokument opisuje model ochrony danych w projekcie oraz **checklistę hardeningu**,
którą trzeba ustawić ręcznie w produkcyjnym Dashboardzie Supabase (CI celowo **nie**
pushuje `supabase/config.toml`, bo trzyma on ustawienia lokalne/localhost).

## Co chronimy

1. **Bazę wiedzy** (treść wiki + pytania) — główna wartość intelektualna.
2. **Dane użytkowników** — postęp nauki, e-maile, profile.
3. **Sekrety** — klucze serwisowe, hasło bazy, sekrety OAuth.

## Co jest egzekwowane w bazie (RLS) — nie polegamy na UI

- **`topics`** — bezpośredni `select` odebrany klientom. Treść tylko przez:
  - `topics_meta` (lekka lista, bez wiki/pytań) — gated `is_approved()`,
  - `get_topic(id)` — pełny pojedynczy temat na żądanie,
  - `get_questions(ids[])` — pytania dla quizu, limit 60 ID na wywołanie.
  Cała baza nigdy nie jest zrzucana w jednym zapytaniu ani w bundlu klienta.
- **`profiles`** — użytkownik widzi tylko swój wiersz; **brak** polityki insert/update,
  więc nikt nie zatwierdzi się sam. Zatwierdza admin (service role / Dashboard).
- **`user_progress`** — RLS „tylko własne wiersze" (select/insert/update).
- **`device_sessions`** — RLS „tylko własne"; limit 2 urządzeń egzekwowany w RPC
  `register_device` (SECURITY DEFINER).
- Wszystkie funkcje `SECURITY DEFINER` mają `set search_path = public`.

## Checklista hardeningu — Dashboard produkcyjny

> Project Settings → Authentication (oraz Authentication → Providers / Rate Limits).

- [ ] **Hasła:** minimalna długość ≥ 10, włącz wymagania złożoności
      (`lower_upper_letters_digits` lub mocniejsze).
- [ ] **Leaked Password Protection** (HaveIBeenPwned) — włącz (wymaga planu Pro).
- [ ] **Email confirmations** — włącz „Confirm email" (żeby nie dało się
      zarejestrować na cudzy e-mail). Lokalnie jest wyłączone dla wygody.
- [ ] **CAPTCHA** (hCaptcha lub Turnstile) na signup/sign-in — blokuje masowe,
      automatyczne zakładanie kont.
- [ ] **Rate limits** — zostaw restrykcyjne limity na sign-up/sign-in i token refresh.
- [ ] **Sesje:** ustaw `timebox` (np. 24h) i `inactivity_timeout` (np. 8h),
      żeby porzucone sesje wygasały.
- [ ] **Redirect URLs / Site URL** — tylko domena produkcyjna (bez localhost).
- [ ] **MFA dla konta admina** zatwierdzającego użytkowników (konto Supabase,
      w którym klikasz `profiles.approved = true`).
- [ ] **Realtime** — wyłącz, jeśli aplikacja go nie używa (mniejsza powierzchnia).

## Operacyjne

- **Repozytorium musi pozostać prywatne.** Pełna treść (`app/content/topics.ts`,
  migracja z danymi) oraz materiały źródłowe w `baza/` są w gicie — przy publicznym
  repo cała ochrona RLS jest omijana. Nie udostępniaj repo ani nie dodawaj
  współpracowników bez potrzeby.
- **Klucz `anon` jest publiczny z założenia** — chroni go wyłącznie RLS. Nigdy nie
  umieszczaj klucza `service_role` w kodzie klienta ani w repo.
- **Rotacja:** jeśli `SUPABASE_DB_PASSWORD` / `SUPABASE_ACCESS_TOKEN` / sekret OAuth
  kiedykolwiek wyciekną — zrotuj je w Dashboardzie i zaktualizuj GitHub Secrets.
- **Zatwierdzanie kont** — nowe konta są nieaktywne do ręcznego zatwierdzenia
  (`profiles.approved`). Trzymaj listę zatwierdzonych pod kontrolą.

## Znane ograniczenia (świadome kompromisy)

- **Zatwierdzony użytkownik może pobrać treść, do której ma dostęp.** Quiz po całej
  bazie wymaga pobrania pytań — limit 60 ID/zapytanie to spowalniacz, nie twarda
  granica. Ochrona działa wobec **niezatwierdzonych** i przed zrzutem całości naraz.
- **`device_id` jest generowany po stronie klienta** — limit 2 urządzeń da się obejść
  podmianą ID. To kontrola współdzielenia konta, nie wektor kradzieży danych
  (RLS i tak chroni dane per-użytkownik).
