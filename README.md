# AWF Licencjat — baza wiedzy & quizy

Nowoczesna aplikacja (glassmorphism + GSAP) do nauki na licencjat AWF.
Wybierasz **specjalizację**, uczysz się z **wiki**, a następnie sprawdzasz wiedzę w **quizach**.
Na ekranie wyników każdy błąd jest pokazywany od razu i prowadzi linkiem do właściwego
zagadnienia w bazie wiedzy.

## Stack
- **Nuxt 4** (Vue 3, SSR)
- **Pinia** — stan (wybrana specjalizacja, postęp nauki, sesja quizu) z zapisem w `localStorage`
- **GSAP + ScrollTrigger** — animacje (hero, reveal przy scrollu, flip fiszek); z poszanowaniem `prefers-reduced-motion`
- Własny CSS (glassmorphism) — bez frameworka UI

## Uruchomienie
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build produkcyjny
npm run preview    # podgląd buildu
```

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
