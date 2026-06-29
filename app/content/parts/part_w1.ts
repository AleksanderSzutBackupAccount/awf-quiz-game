import type { Topic } from '../types'

// Brakujące zagadnienia wspólne (track 'wszyscy') z listy egzaminacyjnej 1–60,
// opracowane na podstawie materiałów źródłowych z folderu `baza/`
// (Licencjat — zagadnienia #20, #27, #55).
export const partW1: Topic[] = [
  {
    id: 'model-zachowan-rynkowych-konsumentow',
    track: 'wszyscy',
    category: 'marketing',
    number: 20,
    title: 'Model zachowań rynkowych konsumentów i ich uwarunkowania',
    summary:
      'Konsument jako uczestnik rynku, modele jego zachowań (ekonomiczny, psychologiczny, socjologiczny, behawioralny), proces podejmowania decyzji oraz uwarunkowania makro- i mikroekonomiczne.',
    wiki: [
      {
        body: 'Konsument to uczestnik rynku, finalny odbiorca i użytkownik dobra lub usługi, który zaspokaja swoje potrzeby poprzez spożycie nabywanych dóbr i usług. Jego zachowania rynkowe opisuje się modelami i analizuje w kontekście uwarunkowań makro- i mikroekonomicznych.',
      },
      {
        heading: 'Mikro- i makroekonomia',
        bullets: [
          'Mikroekonomia — bada pojedyncze jednostki gospodarujące (przedsiębiorstwa, gospodarstwa domowe) i ich decyzje dotyczące produkcji oraz wymiany.',
          'Makroekonomia — bada wielkości zagregowane w skali całej gospodarki: podaż, popyt, zatrudnienie, inwestycje, dochód narodowy.',
        ],
      },
      {
        heading: 'Modele zachowań rynkowych konsumenta',
        bullets: [
          'Ekonomiczny — konsument działa racjonalnie i wybiera produkt o największej wartości przy najniższym koszcie.',
          'Psychologiczny — decyzje wynikają z emocji, motywacji, osobowości i percepcji.',
          'Socjologiczny — na wybory wpływają grupy społeczne, kultura i trendy.',
          'Behawioralny — decyzje są wynikiem doświadczeń, nawyków i bodźców marketingowych.',
        ],
      },
      {
        heading: 'Proces podejmowania decyzji',
        bullets: [
          'Rozpoznanie potrzeby — uświadomienie sobie braku lub potrzeby (np. potrzeba odpoczynku).',
          'Poszukiwanie informacji — ze źródeł wewnętrznych (doświadczenia) i zewnętrznych (opinie, reklamy, recenzje).',
          'Ocena alternatyw — porównanie opcji wg ceny, jakości, opinii, dostępności.',
          'Decyzja zakupowa — wybór i zakup konkretnego produktu/usługi.',
          'Zachowanie po zakupie — ocena zadowolenia, rekomendacja lub rezygnacja z ponownego zakupu.',
        ],
      },
      {
        heading: 'Uwarunkowania',
        bullets: [
          'Makroekonomiczne — dochód narodowy, inflacja, rynek pracy, trendy społeczne, ograniczenia w podróżowaniu.',
          'Mikroekonomiczne — dochód i fundusz swobodnej decyzji klienta, preferencje, styl życia, stan zdrowia, marketing i reklama, czynniki demograficzne.',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który model zachowań zakłada, że konsument działa racjonalnie i wybiera produkt o największej wartości przy najniższym koszcie?',
        options: ['Psychologiczny', 'Socjologiczny', 'Ekonomiczny', 'Behawioralny'],
        correct: 2,
        explain:
          'Model ekonomiczny zakłada racjonalny wybór — najwyższa wartość przy najniższym koszcie.',
      },
      {
        type: 'abcd',
        q: 'Na którym etapie procesu decyzyjnego konsument porównuje opcje według ceny, jakości i opinii?',
        options: [
          'Rozpoznanie potrzeby',
          'Ocena alternatyw',
          'Poszukiwanie informacji',
          'Zachowanie po zakupie',
        ],
        correct: 1,
        explain:
          'Ocena alternatyw to porównanie różnych opcji wg kryteriów takich jak cena, jakość, opinie i dostępność.',
      },
      {
        type: 'tf',
        q: 'Inflacja i dochód narodowy to mikroekonomiczne uwarunkowania zachowań konsumenta.',
        correct: false,
        explain:
          'Inflacja i dochód narodowy to wielkości zagregowane — uwarunkowania makroekonomiczne, nie mikroekonomiczne.',
      },
      {
        type: 'flash',
        front: 'Czym różni się mikroekonomia od makroekonomii?',
        back: 'Mikroekonomia bada pojedyncze jednostki gospodarujące i ich decyzje; makroekonomia — wielkości zagregowane (podaż, popyt, dochód narodowy) w skali całej gospodarki.',
      },
    ],
  },
  {
    id: 'mobbing-osobowosc-autorytarna',
    track: 'wszyscy',
    category: 'zarzadzanie',
    number: 27,
    title: 'Mobbing i jego związek z osobowością autorytarną',
    summary:
      'Mobbing jako systematyczne, długotrwałe nękanie w miejscu pracy, jego typowe akty oraz powiązanie z cechami osobowości autorytarnej.',
    wiki: [
      {
        body: 'Mobbing to systematyczne, długotrwałe nękanie lub zastraszanie danej osoby w miejscu pracy przez przełożonego, współpracowników lub grupę pracowników. Jego celem jest poniżenie, izolowanie, a czasem wypchnięcie ofiary z organizacji. Charakteryzuje się powtarzalnością aktów agresji psychicznej.',
      },
      {
        heading: 'Typowe akty mobbingu',
        bullets: [
          'Upokarzanie lub szykanowanie pracownika.',
          'Publiczne lub prywatne zawstydzanie.',
          'Izolowanie od zespołu i kluczowych informacji.',
          'Podważanie kompetencji i wartości zawodowej.',
          'Zadawanie zbyt trudnych lub niewykonalnych zadań.',
          'Odmowa wsparcia lub zasobów niezbędnych do pracy.',
        ],
      },
      {
        heading: 'Związek z osobowością autorytarną',
        bullets: [
          'Potrzeba kontroli — silna potrzeba panowania nad otoczeniem prowadzi do nadmiernego nadzoru i krytyki.',
          'Lęk i manipulacja — używane jako narzędzia sprawowania władzy.',
          'Brak empatii — mniejsza wrażliwość na potrzeby i uczucia ofiar.',
          'Wyolbrzymione poczucie własnej wartości — przekonanie o prawie do kontroli nad innymi.',
          'Brak akceptacji słabszych — tolerowanie lub ignorowanie mobbingu wobec osób postrzeganych jako słabe.',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Czym jest mobbing?',
        options: [
          'Jednorazowym konfliktem między dwoma pracownikami',
          'Systematycznym, długotrwałym nękaniem osoby w miejscu pracy',
          'Formą oceny okresowej pracownika',
          'Premią uznaniową za wyniki',
        ],
        correct: 1,
        explain:
          'Mobbing to systematyczne, długotrwałe nękanie lub zastraszanie w miejscu pracy — kluczowa jest powtarzalność, nie jednorazowość.',
      },
      {
        type: 'abcd',
        q: 'Która cecha osobowości autorytarnej szczególnie sprzyja stosowaniu mobbingu?',
        options: [
          'Wysoka empatia',
          'Skłonność do kompromisu',
          'Silna potrzeba kontroli nad otoczeniem',
          'Otwartość na krytykę',
        ],
        correct: 2,
        explain:
          'Silna potrzeba kontroli prowadzi do nadmiernego nadzorowania i krytykowania podwładnych, co sprzyja mobbingowi.',
      },
      {
        type: 'tf',
        q: 'Izolowanie pracownika od zespołu i kluczowych informacji jest jednym z typowych aktów mobbingu.',
        correct: true,
        explain:
          'Izolowanie od zespołu i informacji to jeden z powtarzających się aktów agresji psychicznej składających się na mobbing.',
      },
      {
        type: 'flash',
        front: 'Jaki jest cel mobbingu wobec ofiary?',
        back: 'Poniżenie, izolowanie, a czasem wypchnięcie ofiary z organizacji — poprzez powtarzające się akty agresji psychicznej.',
      },
    ],
  },
  {
    id: 'uwarunkowania-rozwoju-turystyki',
    track: 'wszyscy',
    category: 'turystyka',
    number: 55,
    title: 'Uwarunkowania rozwoju turystyki',
    summary:
      'Najważniejsze grupy uwarunkowań rozwoju turystyki: ekonomiczne, społeczne, polityczne, kulturowe i przyrodnicze.',
    wiki: [
      {
        body: 'Rozwój turystyki zależy od wielu współgrających ze sobą uwarunkowań. Najczęściej grupuje się je w pięć kategorii: ekonomiczne, społeczne, polityczne, kulturowe i przyrodnicze.',
      },
      {
        heading: 'Ekonomiczne',
        bullets: [
          'Ceny usług turystycznych i kursy walut.',
          'Poziom dochodów — wzrost dochodów zwiększa skłonność do podróżowania.',
          'Rozwój infrastruktury turystycznej.',
        ],
      },
      {
        heading: 'Społeczne',
        bullets: [
          'Ilość czasu wolnego.',
          'Urbanizacja i zmiany demograficzne (starzenie się społeczeństwa).',
          'Moda, trendy oraz poziom wykształcenia.',
        ],
      },
      {
        heading: 'Polityczne',
        bullets: [
          'Stabilność polityczna kraju i bezpieczeństwo turystów.',
          'Polityka państwa wobec turystyki i stosunki międzynarodowe.',
          'Polityka wizowa — zaostrzona ogranicza ruch turystyczny.',
        ],
      },
      {
        heading: 'Kulturowe',
        bullets: [
          'Dziedzictwo kulturowe (zabytki, muzea, tradycje).',
          'Dostępność kultury (festiwale, wydarzenia).',
          'Poziom tolerancji i otwartości oraz bariery językowe.',
        ],
      },
      {
        heading: 'Przyrodnicze',
        bullets: [
          'Walory przyrodnicze — krajobraz, parki narodowe, unikalne ekosystemy.',
          'Klimat danego regionu.',
          'Ochrona środowiska oraz zagrożenia naturalne (trzęsienia ziemi, tsunami).',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Kursy walut, poziom dochodów i ceny usług to uwarunkowania rozwoju turystyki o charakterze:',
        options: ['Społecznym', 'Politycznym', 'Ekonomicznym', 'Przyrodniczym'],
        correct: 2,
        explain:
          'Ceny usług, kursy walut i poziom dochodów to typowe uwarunkowania ekonomiczne rozwoju turystyki.',
      },
      {
        type: 'abcd',
        q: 'Które z poniższych jest uwarunkowaniem przyrodniczym rozwoju turystyki?',
        options: [
          'Polityka wizowa',
          'Klimat i walory krajobrazowe',
          'Poziom wykształcenia',
          'Dziedzictwo kulturowe',
        ],
        correct: 1,
        explain:
          'Klimat, walory krajobrazowe i ekosystemy to uwarunkowania przyrodnicze; polityka wizowa jest polityczna, a dziedzictwo — kulturowe.',
      },
      {
        type: 'tf',
        q: 'Stabilność polityczna kraju i polityka wizowa to polityczne uwarunkowania rozwoju turystyki.',
        correct: true,
        explain:
          'Stabilność polityczna, bezpieczeństwo turystów i polityka wizowa należą do uwarunkowań politycznych.',
      },
      {
        type: 'flash',
        front: 'Wymień pięć grup uwarunkowań rozwoju turystyki.',
        back: 'Ekonomiczne, społeczne, polityczne, kulturowe i przyrodnicze.',
      },
    ],
  },
]
