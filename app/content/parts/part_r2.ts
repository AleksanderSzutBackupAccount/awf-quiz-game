import type { Topic } from '../types'

export const partR2: Topic[] = [
  {
    id: 'rek-impreza-rekreacyjna-istota-etapy',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 6,
    title: 'Istota imprezy rekreacyjnej i etapy jej organizacji',
    summary: 'Impreza rekreacyjna to wydarzenie organizowane w celu promocji aktywności fizycznej podejmowanej w wolnym czasie, a jej przygotowanie przebiega według kolejnych etapów organizacyjnych.',
    wiki: [
      {
        heading: 'Czym jest impreza rekreacyjna',
        body: 'Impreza rekreacyjna to wydarzenie organizowane w celu promocji aktywności fizycznej podejmowanej w wolnym czasie. Jej organizacja to złożony proces, który wymaga zaangażowania wielu osób, a skuteczna realizacja przyczynia się do pozytywnego doświadczenia uczestników oraz budowania pozytywnego wizerunku organizatora.'
      },
      {
        heading: 'Istota imprez rekreacyjnych',
        bullets: [
          'Rozrywka – poczucie przyjemności odczuwane przez uczestników poprzez udział w wydarzeniu',
          'Relaks – możliwość odpoczynku od ciągłego pełnienia roli w społeczeństwie, czas dla siebie',
          'Integracja społeczna – kontakt z innymi ludźmi o podobnych celach',
          'Aktywność fizyczna – każda dodatkowa ilość ruchu w tygodniu pozytywnie wpływa na organizm',
          'Edukacja – promowanie zdrowego stylu życia i zachęcanie do zdrowych wyborów'
        ]
      },
      {
        heading: 'Etapy organizacji imprezy',
        bullets: [
          'Pomysł na imprezę – określenie celu i tematu przewodniego wydarzenia',
          'Zdobycie budżetu i pozyskanie sponsorów – kluczowy punkt finansujący przedsięwzięcie',
          'Stworzenie zespołu – podział na grupy oraz podział zadań i odpowiedzialności',
          'Przygotowanie programu i atrakcji – jednocześnie zabezpieczenie medyczne, regulamin oraz promocja i marketing',
          'Koordynacja w dniu imprezy',
          'Podsumowanie imprezy – zebranie opinii, ocena realizacji celów i wnioski na przyszłość'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'W jakim celu organizuje się imprezę rekreacyjną?',
        options: [
          'Promocji aktywności fizycznej podejmowanej w wolnym czasie',
          'Wyłonienia mistrza w danej dyscyplinie sportu',
          'Wyłącznie pozyskania środków finansowych dla organizatora',
          'Przeprowadzenia badań naukowych nad uczestnikami'
        ],
        correct: 0,
        explain: 'Impreza rekreacyjna to wydarzenie organizowane w celu promocji aktywności fizycznej podejmowanej w wolnym czasie.'
      },
      {
        type: 'tf',
        q: 'Zdobycie budżetu i pozyskanie sponsorów to ostatni etap organizacji imprezy rekreacyjnej.',
        correct: false,
        explain: 'Zdobycie budżetu i pozyskanie sponsorów to jeden z wczesnych etapów; ostatnim etapem jest podsumowanie imprezy.'
      },
      {
        type: 'flash',
        front: 'Wymień elementy stanowiące istotę imprez rekreacyjnych.',
        back: 'Rozrywka, relaks, integracja społeczna, aktywność fizyczna oraz edukacja.'
      },
      {
        type: 'flash',
        front: 'Co dzieje się na etapie podsumowania imprezy?',
        back: 'Zebranie opinii, ocena realizacji celów oraz wyciągnięcie wniosków na przyszłość.'
      }
    ]
  },
  {
    id: 'rek-walory-poznawcze-narciarstwa-snowboardu',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 7,
    title: 'Walory poznawcze narciarstwa i snowboardu',
    summary: 'Uprawianie narciarstwa i snowboardu niesie liczne walory poznawcze i turystyczne – od poznawania nowych obszarów po rozwijanie umiejętności i przezwyciężanie własnych słabości.',
    wiki: [
      {
        heading: 'Walory poznawcze i turystyczne',
        bullets: [
          'Poznawanie nowych obszarów oraz obcowanie z naturą',
          'Nauka lub rozwijanie umiejętności jazdy, koordynacji ruchowej i równowagi',
          'Rozwijanie umiejętności analitycznych i nawigacyjnych – planowanie trasy, ocena warunków, szybkie podejmowanie decyzji podczas zjazdów',
          'Przezwyciężanie słabości – zjazdy z trudnych i stromych stoków w trudnych warunkach',
          'Walory zdrowotne – ruch na świeżym powietrzu w połączeniu z krajobrazem gór wpływa pozytywnie także na zdrowie psychiczne',
          'Integracja z bliskimi i innymi ludźmi',
          'Doświadczanie radości i przyjemności z ruchu'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które umiejętności rozwija planowanie trasy i ocena warunków podczas jazdy?',
        options: [
          'Wyłącznie umiejętności językowe',
          'Umiejętności analityczne i nawigacyjne',
          'Wyłącznie siłę mięśniową',
          'Umiejętności kulinarne'
        ],
        correct: 1,
        explain: 'Planowanie trasy i ocena warunków rozwijają umiejętności analityczne i nawigacyjne oraz szybkie podejmowanie decyzji podczas zjazdów.'
      },
      {
        type: 'tf',
        q: 'Ruch na świeżym powietrzu w górach pozytywnie wpływa także na zdrowie psychiczne.',
        correct: true,
        explain: 'Do walorów zdrowotnych zalicza się ruch na świeżym powietrzu, który w połączeniu z krajobrazem gór wpływa pozytywnie również na zdrowie psychiczne.'
      },
      {
        type: 'flash',
        front: 'Na czym polega walor poznawczy "przezwyciężanie słabości" w narciarstwie i snowboardzie?',
        back: 'Na podejmowaniu zjazdów z trudnych i bardziej stromych stoków oraz w trudnych warunkach.'
      }
    ]
  },
  {
    id: 'rek-zaleznosci-rekreacja-praca',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 8,
    title: 'Zależności pomiędzy rekreacją a pracą',
    summary: 'Rekreacja i praca są ze sobą powiązane w sposób wpływający na efektywność i samopoczucie – rekreacja redukuje stres, ale nadmierne skupienie na pracy ogranicza czas na odpoczynek.',
    wiki: [
      {
        heading: 'Wzajemne powiązanie',
        body: 'Rekreacja i praca są ze sobą powiązane w sposób, który może wpływać na efektywność i samopoczucie. Z jednej strony rekreacja pomaga w redukcji stresu i wypalenia zawodowego, co przekłada się na większą wydajność w pracy. Z drugiej strony nadmierne skupienie na pracy może ograniczać czas na aktywności rekreacyjne, co negatywnie wpływa na zdrowie psychiczne i fizyczne.'
      },
      {
        heading: 'Zależności między pracą a rekreacją',
        bullets: [
          'Redukcja stresu i wypalenia zawodowego',
          'Poprawa koncentracji i kreatywności dzięki regeneracji umysłu',
          'Wzrost motywacji i zaangażowania dzięki równowadze praca–życie prywatne',
          'Poprawa zdrowia psychicznego i fizycznego',
          'Budowanie relacji społecznych',
          'Zwiększenie produktywności',
          'Rozwój osobisty i większa satysfakcja z życia',
          'Odskocznia od rutyny i codziennych obowiązków'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Jaki wpływ na pracę ma redukcja stresu osiągana dzięki rekreacji?',
        options: [
          'Obniża wydajność w pracy',
          'Nie ma żadnego wpływu na pracę',
          'Przekłada się na większą wydajność w pracy',
          'Powoduje wypalenie zawodowe'
        ],
        correct: 2,
        explain: 'Rekreacja pomaga w redukcji stresu i wypalenia zawodowego, co przekłada się na większą wydajność w pracy.'
      },
      {
        type: 'tf',
        q: 'Nadmierne skupienie na pracy korzystnie zwiększa ilość czasu przeznaczanego na aktywności rekreacyjne.',
        correct: false,
        explain: 'Przeciwnie – nadmierne skupienie na pracy ogranicza czas na aktywności rekreacyjne, co negatywnie wpływa na zdrowie psychiczne i fizyczne.'
      },
      {
        type: 'flash',
        front: 'W jaki sposób odpoczynek i aktywność rekreacyjna wpływają na umysł pracownika?',
        back: 'Sprzyjają regeneracji umysłu, co przekłada się na lepszą koncentrację i kreatywność w pracy.'
      },
      {
        type: 'flash',
        front: 'Dlaczego rekreacja sprzyja budowaniu relacji społecznych?',
        back: 'Czas wolny spędzany z rodziną i przyjaciółmi oraz udział w zajęciach rekreacyjnych w grupie sprzyja budowaniu i wzmacnianiu relacji, co jest ważne dla dobrostanu.'
      }
    ]
  },
  {
    id: 'rek-zasady-ekonomiczne-w-rekreacji',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 9,
    title: 'Zasady ekonomiczne w rekreacji',
    summary: 'Ekonomika rekreacji analizuje mechanizmy rządzące wykorzystaniem czasu wolnego i świadczeniem usług rekreacyjnych, czerpiąc z ekonomiki przedsiębiorstw.',
    wiki: [
      {
        heading: 'Ekonomika rekreacji',
        body: 'Ekonomika rekreacji analizuje zasady i mechanizmy rządzące wykorzystaniem czasu wolnego oraz świadczeniem usług rekreacyjnych. Jej podstawy teoretyczne czerpią z ekonomiki przedsiębiorstw.'
      },
      {
        heading: 'Zasady ekonomiczne w rekreacji',
        bullets: [
          'Prawo popytu i podaży – im wyższa cena, tym mniejszy popyt, a większa podaż',
          'Zasada ograniczoności zasobów – zasoby są rzadkie, więc trzeba odpowiadać na pytania: co, jak, ile i dla kogo produkować',
          'Zasada racjonalnego gospodarowania – maksymalizacja efektu przy danych nakładach lub minimalizacja nakładów przy danych efektach',
          'Zasada kosztu alternatywnego – koszt utraconych możliwości wynikający z wyboru jednego dobra zamiast innego',
          'Zasada równowagi – przy pełnym wykorzystaniu zasobów zachodzi równość między podażą dóbr i usług a popytem na nie'
        ]
      },
      {
        heading: 'Przykłady zastosowania',
        body: 'Przykładem prawa popytu i podaży jest klub fitness, który po podniesieniu ceny karnetu uruchamia dodatkowe zajęcia wieczorne. Kosztem alternatywnym płatnych zajęć jogi w sobotę rano jest rezygnacja z bezpłatnego spaceru z rodziną – nie tylko pieniądze, ale i czas. Zasadę równowagi ilustruje gmina ustalająca opłatę za wejście do parku tak, by pokryć koszty utrzymania bez nadwyżki ani deficytu.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Z czego czerpie swoje podstawy teoretyczne ekonomika rekreacji?',
        options: [
          'Z biologii sportu',
          'Z psychologii społecznej',
          'Z teorii prawa pracy',
          'Z ekonomiki przedsiębiorstw'
        ],
        correct: 3,
        explain: 'Podstawy teoretyczne ekonomiki rekreacji czerpią z ekonomiki przedsiębiorstw.'
      },
      {
        type: 'tf',
        q: 'Charakterystyczną cechą zasobów jest ich rzadkość, dlatego trzeba nimi umiejętnie gospodarować.',
        correct: true,
        explain: 'Zasada ograniczoności zasobów wskazuje, że zasoby są rzadkie i ich ilość jest ograniczona, więc społeczeństwo musi nimi umiejętnie gospodarować.'
      },
      {
        type: 'abcd',
        q: 'Czego dotyczy zasada kosztu alternatywnego?',
        options: [
          'Ilości innego dobra, którego nie można uzyskać wskutek wyboru danego dobra',
          'Łącznej sumy wszystkich kosztów stałych przedsiębiorstwa',
          'Maksymalnej ceny, jaką klient zapłaci za usługę',
          'Liczby pracowników potrzebnych do realizacji usługi'
        ],
        correct: 0,
        explain: 'Koszt alternatywny danego dobra to ilość innego dobra, którego nie można uzyskać, ponieważ podjęto decyzję o wyborze tego pierwszego; bywa nazywany kosztem utraconych możliwości.'
      },
      {
        type: 'flash',
        front: 'Na czym polega zasada racjonalnego gospodarowania?',
        back: 'Na alokowaniu ograniczonych zasobów tak, by zmaksymalizować efekt przy założonych nakładach lub zminimalizować nakłady przy założonych efektach.'
      }
    ]
  },
  {
    id: 'rek-niska-temperatura-gory-wysilek',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 10,
    title: 'Znaczenie niskiej temperatury w górach podczas wysiłku',
    summary: 'W warunkach górskich organizm broni temperatury ciała poprzez obwodową wazokonstrykcję i termogenezę, jednak chłód obniża funkcje mięśni, koordynację i sprawność umysłową oraz grozi hipotermią.',
    wiki: [
      {
        heading: 'Reakcje obronne organizmu',
        body: 'Pierwszą reakcją na zimno jest obwodowa wazokonstrykcja – skurcz naczyń w skórze, a przy większym wychłodzeniu także w mięśniach i narządach wewnętrznych. Powoduje to centralizację krążenia, czyli kierowanie przepływu krwi do najważniejszych narządów: mózgu, serca i płuc, kosztem kończyn. Skóra wraz z podskórną tkanką tłuszczową tworzy izolujący "płaszcz" ograniczający utratę ciepła.'
      },
      {
        heading: 'Termogeneza',
        body: 'Gdy ochłodzenie postępuje, pojawia się termogeneza drżeniowa – mimowolne drżenie mięśni, które nawet 2,5-krotnie podnosi tempo metabolizmu i może zwiększyć spalanie węglowodanów niemal sześciokrotnie. Równocześnie termogeneza bezdrżeniowa, pobudzona wzrostem poziomu noradrenaliny, adrenaliny, glukagonu i trijodotyroniny, przyspiesza metabolizm bez drżeń. Szybkie zużycie glikogenu podczas wielogodzinnego wysiłku może jednak prowadzić do nagłego spadku sił.'
      },
      {
        heading: 'Wpływ na mięśnie i koordynację',
        bullets: [
          'Dyskomfort zaczyna się przy temperaturze skóry poniżej 25 °C',
          'Siła mięśni spada o około 3% na każdy spadek temperatury ciała o 1 °C, a mięśnie stają się sztywne',
          'Chłód wydłuża czas przewodzenia nerwowego – pojawiają się zaburzenia koordynacji i wolniejsze reakcje',
          'Mimo chłodu dochodzi do odwodnienia – przez pocenie, suche powietrze i zwiększoną diurezę'
        ]
      },
      {
        heading: 'Zagrożenia i przeciwdziałanie',
        body: 'Długotrwałe przebywanie w niskiej temperaturze i wilgoci grozi hipotermią (spadek temperatury ciała poniżej 35 °C) oraz odmrożeniami, najczęściej palców rąk i stóp, nosa i małżowin usznych. Zimno obniża też sprawność umysłową: orientację w terenie, pamięć i szybkość decyzji. Aby temu przeciwdziałać, należy stosować odzież wielowarstwową i termoaktywną, dbać o regularne nawadnianie oraz planować tempo i przerwy umożliwiające regenerację.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Na czym polega centralizacja krążenia będąca reakcją organizmu na zimno?',
        options: [
          'Na kierowaniu przepływu krwi do mózgu, serca i płuc kosztem kończyn',
          'Na rozszerzeniu naczyń krwionośnych w skórze',
          'Na całkowitym zatrzymaniu przepływu krwi do mózgu',
          'Na równomiernym rozprowadzeniu krwi po całym ciele'
        ],
        correct: 0,
        explain: 'Na skutek skurczu naczyń krew kierowana jest do najważniejszych narządów – mózgu, serca i płuc – kosztem mniej istotnych części ciała, np. kończyn.'
      },
      {
        type: 'tf',
        q: 'Siła mięśni rośnie o około 3% na każdy spadek temperatury ciała o 1 °C.',
        correct: false,
        explain: 'Jest odwrotnie – siła mięśni spada o około 3% na każdy spadek temperatury ciała o 1 °C, a mięśnie stają się sztywne i mniej elastyczne.'
      },
      {
        type: 'tf',
        q: 'Mimo chłodu w górach może dochodzić do odwodnienia organizmu.',
        correct: true,
        explain: 'Intensywne pocenie podczas podejścia, wysuszające powietrze oraz zwiększona diureza prowadzą do odwodnienia mimo niskiej temperatury.'
      },
      {
        type: 'flash',
        front: 'Jak należy przeciwdziałać skutkom niskiej temperatury podczas wysiłku w górach?',
        back: 'Stosować odzież wielowarstwową i termoaktywną, dbać o regularne nawadnianie oraz planować tempo i przerwy umożliwiające regenerację i utrzymanie temperatury ciała.'
      }
    ]
  }
]
