import type { Topic } from '../types'

export const partC3: Topic[] = [
  {
    id: 'ocena-wydolnosci-fizycznej',
    track: 'wszyscy',
    category: 'fizjologia',
    number: 28,
    title: 'Sposoby oceny wydolności fizycznej',
    summary: 'Wydolność fizyczną ocenia się metodami laboratoryjnymi i terenowymi, mierząc m.in. VO2max, tętno i parametry beztlenowe.',
    wiki: [
      {
        heading: 'Czym jest wydolność fizyczna',
        body: 'Wydolność fizyczna to zdolność organizmu do wykonywania wysiłku o określonej intensywności i czasie trwania bez nadmiernego zmęczenia oraz z możliwością szybkiej regeneracji. Ocenia się ją metodami laboratoryjnymi i terenowymi.'
      },
      {
        heading: 'Metody laboratoryjne (bezpośrednie)',
        body: 'Najdokładniejsze, prowadzone w warunkach kontrolowanych przy użyciu specjalistycznego sprzętu (bieżnia, cykloergometr).',
        bullets: [
          'Pomiar VO2max - maksymalna ilość tlenu, jaką organizm może pobrać, przetransportować i zużyć; najlepszy wskaźnik wydolności tlenowej',
          'Test progowy (próg mleczanowy) - ocena stężenia mleczanu we krwi przy rosnącej intensywności',
          'Ergometria wysiłkowa - bieżnia, cykloergometr, ergometr wioślarski; ocena tętna, ciśnienia, EKG, poboru tlenu',
          'CPET (sercowo-płucny test wysiłkowy), spirometria, EKG wysiłkowe'
        ]
      },
      {
        heading: 'Testy terenowe i metody pośrednie',
        body: 'Łatwiejsze i tańsze do przeprowadzenia; metody pośrednie szacują VO2max na podstawie reakcji tętna.',
        bullets: [
          'Test Coopera - bieg przez 12 min, mierzony dystans; im większy, tym lepsza wydolność',
          'Test Ruffiera - tętno przed wysiłkiem, po 30 przysiadach i po minucie odpoczynku',
          'Test Astranda - cykloergometr, obciążenie submaksymalne, ocena na podstawie tętna',
          'Test Harwardzki - wchodzenie i schodzenie ze stopnia, analiza szybkości powrotu tętna'
        ]
      },
      {
        heading: 'Wydolność beztlenowa i ocena subiektywna',
        bullets: [
          'Test Wingate - 30 s maksymalnego wysiłku na cykloergometrze; ocenia moc maksymalną, pojemność beztlenową i odporność na zmęczenie',
          'Próg przemian beztlenowych - inwazyjnie (pomiar mleczanu), nieinwazyjnie (test Conconiego, próg wentylacji)',
          'Skala Borga - subiektywna ocena odczuwanego zmęczenia podczas wysiłku'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który test polega na przebiegnięciu jak najdłuższego dystansu w ciągu 12 minut?',
        options: ['Test Ruffiera', 'Test Astranda', 'Test Wingate', 'Test Coopera'],
        correct: 3,
        explain: 'Test Coopera to bieg przez 12 minut, w którym mierzy się pokonany dystans pozwalający oszacować VO2max.'
      },
      {
        type: 'tf',
        q: 'VO2max jest uznawany za najlepszy wskaźnik wydolności tlenowej.',
        correct: true,
        explain: 'VO2max określa największą ilość tlenu, jaką organizm może pobrać i zużyć, i jest najlepszym wskaźnikiem wydolności aerobowej.'
      },
      {
        type: 'tf',
        q: 'Test Wingate służy do oceny wydolności tlenowej (aerobowej).',
        correct: false,
        explain: 'Test Wingate (30 s maksymalnego wysiłku) ocenia wydolność beztlenową: moc maksymalną, pojemność beztlenową i odporność na zmęczenie.'
      },
      {
        type: 'flash',
        front: 'Wymień i scharakteryzuj sposoby oceny wydolności fizycznej.',
        back: 'Metody laboratoryjne (VO2max, próg mleczanowy, ergometria, CPET); testy terenowe (Cooper, Ruffier, Astrand, Harwardzki); ocena parametrów fizjologicznych (tętno, ciśnienie, czas regeneracji); wydolność beztlenowa (test Wingate); ocena subiektywna (skala Borga).'
      }
    ]
  },
  {
    id: 'typy-wykresow-dochod-firmy',
    track: 'wszyscy',
    category: 'technologie',
    number: 29,
    title: 'Trzy typy wykresów do prezentacji dochodu firmy w 5 kolejnych latach',
    summary: 'Dochód firmy w czasie najlepiej prezentują wykres kolumnowy, liniowy oraz kołowy (do proporcji).',
    wiki: [
      {
        heading: 'Typy wykresów',
        bullets: [
          'Wykres kolumnowy (słupkowy) - przedstawia dochód jako pionowe lub poziome słupki, których wysokość odpowiada wartości w danym roku; czytelny, ułatwia porównanie danych',
          'Wykres liniowy - prezentuje zmiany dochodu w czasie linią łączącą punkty z kolejnych lat; przydatny do analizy trendów, wzrostu lub spadku',
          'Wykres kołowy (pierścieniowy) - pokazuje procentowy udział dochodu z każdego roku w dochodzie całkowitym; sprawdza się gdy chcemy zobrazować proporcje zamiast zmian w czasie'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który wykres jest najlepszy do analizy trendu wzrostu lub spadku dochodu w czasie?',
        options: ['Wykres kołowy', 'Wykres liniowy', 'Wykres pierścieniowy', 'Wykres bąbelkowy'],
        correct: 1,
        explain: 'Wykres liniowy łączy punkty z kolejnych lat, dzięki czemu dobrze obrazuje trendy oraz wzrost i spadek dochodu.'
      },
      {
        type: 'tf',
        q: 'Wykres liniowy najlepiej nadaje się do pokazania procentowego udziału dochodów poszczególnych lat w dochodzie całkowitym.',
        correct: false,
        explain: 'Do proporcji (udziału w całości) służy wykres kołowy; wykres liniowy obrazuje zmiany wartości w czasie, a nie udziały procentowe.'
      },
      {
        type: 'flash',
        front: 'Wymień 3 typy wykresów do prezentacji dochodu firmy w 5 kolejnych latach.',
        back: 'Wykres kolumnowy (słupkowy), wykres liniowy oraz wykres kołowy (pierścieniowy).'
      }
    ]
  },
  {
    id: 'redukcja-stresu-rekreacja-turystyka',
    track: 'wszyscy',
    category: 'rekreacja',
    number: 30,
    title: 'Radzenie sobie ze stresem przez działalność rekreacyjno-turystyczną',
    summary: 'Aktywność rekreacyjno-turystyczna obniża poziom stresu poprzez ruch, kontakt z naturą, zmianę otoczenia i relacje społeczne.',
    wiki: [
      {
        heading: 'Rekreacja i turystyka jako forma redukcji stresu',
        body: 'Stres jest naturalną reakcją organizmu, ale jego nadmiar prowadzi do problemów zdrowotnych i psychicznych. Aktywność rekreacyjno-turystyczna umożliwia odpoczynek, regenerację i oderwanie od codziennych obowiązków.',
        bullets: [
          'Aktywność fizyczna (spacery, pływanie, jazda na rowerze) obniża poziom kortyzolu i poprawia samopoczucie',
          'Kontakt z naturą (góry, las, morze) działa uspokajająco i zmniejsza napięcie psychiczne',
          'Zmiana otoczenia pozwala oderwać się od stresujących sytuacji',
          'Społeczny aspekt turystyki (wyjazdy z rodziną, znajomymi) wzmacnia relacje międzyludzkie'
        ]
      },
      {
        heading: 'Formy pomagające w redukcji stresu',
        bullets: [
          'Rekreacja ruchowa - bieganie, joga, fitness, siłownia pobudzają wydzielanie endorfin',
          'Turystyka wypoczynkowa - morze, uzdrowiska, spa - relaks i regeneracja',
          'Turystyka aktywna - wędrówki górskie, kajakarstwo, nurkowanie wymagają skupienia',
          'Turystyka kulturowa - muzea, koncerty, festiwale jako źródło przyjemności'
        ]
      },
      {
        heading: 'Korzyści psychofizyczne',
        bullets: [
          'Lepsza odporność na stres dzięki regularnej aktywności',
          'Poprawa jakości snu - ruch na świeżym powietrzu wspomaga regenerację',
          'Wzrost poziomu energii i motywacji'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Jaki efekt fizjologiczny daje aktywność fizyczna w kontekście redukcji stresu?',
        options: ['Podnosi poziom kortyzolu', 'Pogarsza jakość snu', 'Zwiększa napięcie psychiczne', 'Obniża poziom kortyzolu'],
        correct: 3,
        explain: 'Aktywność fizyczna obniża poziom kortyzolu (hormonu stresu) i poprawia samopoczucie.'
      },
      {
        type: 'tf',
        q: 'Kontakt z naturą podczas turystyki działa uspokajająco i zmniejsza napięcie psychiczne.',
        correct: true,
        explain: 'Przebywanie w górach, lesie czy nad morzem działa uspokajająco i redukuje napięcie psychiczne.'
      },
      {
        type: 'flash',
        front: 'Jakie korzyści psychofizyczne daje aktywność rekreacyjno-turystyczna?',
        back: 'Lepsza odporność na stres, poprawa jakości snu (ruch na świeżym powietrzu wspomaga regenerację) oraz wzrost poziomu energii i motywacji.'
      }
    ]
  },
  {
    id: 'podzial-pozycji-wyjsciowych',
    track: 'wszyscy',
    category: 'fizjologia',
    number: 31,
    title: 'Podział pozycji wyjściowych do ćwiczeń kształtujących',
    summary: 'Pozycje wyjściowe dzieli się na wysokie, półwysokie, niskie, izolowane i równoważne.',
    wiki: [
      {
        heading: 'Podział podstawowy',
        bullets: [
          'Pozycje wysokie - pozycje w staniu oraz we wspięciu (np. postawa, wykrok, rozkrok, wypady, pozycje wspięte)',
          'Pozycje półwysokie - półprzysiady, przysiady, klęki (np. przysiad obunóż, klęk prosty, klęk podparty)',
          'Pozycje niskie - siady, podpory, leżenia (np. siad prosty, siad skrzyżny, podpór leżąc, leżenie tyłem)'
        ]
      },
      {
        heading: 'Pozycje specjalne',
        bullets: [
          'Pozycje izolowane - ruch odbywa się w jednym stawie i angażuje jedną grupę mięśniową przy minimalnym udziale innych mięśni (np. pozycja w siadzie skrzyżnym)',
          'Pozycje równoważne - wymagają współdziałania całego ciała i układu ruchowego w celu zachowania równowagi'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Do której grupy pozycji wyjściowych zaliczamy siady, podpory i leżenia?',
        options: ['Pozycje wysokie', 'Pozycje niskie', 'Pozycje półwysokie', 'Pozycje równoważne'],
        correct: 1,
        explain: 'Pozycje niskie obejmują siady, podpory i leżenia.'
      },
      {
        type: 'tf',
        q: 'Pozycje izolowane to takie, w których ruch odbywa się w wielu stawach jednocześnie i angażuje wiele grup mięśniowych.',
        correct: false,
        explain: 'Odwrotnie — w pozycjach izolowanych ruch odbywa się w jednym stawie i angażuje jedną grupę mięśniową; praca wielu stawów cechuje ćwiczenia złożone (wielostawowe).'
      },
      {
        type: 'flash',
        front: 'Dokonaj podziału pozycji wyjściowych do ćwiczeń kształtujących.',
        back: 'Pozycje wysokie (stanie, wspięcie), półwysokie (półprzysiady, przysiady, klęki), niskie (siady, podpory, leżenia), izolowane (ruch w jednym stawie) oraz równoważne (współdziałanie całego ciała dla zachowania równowagi).'
      }
    ]
  },
  {
    id: 'funkcje-dysfunkcje-turystyki',
    track: 'wszyscy',
    category: 'turystyka',
    number: 32,
    title: 'Funkcje i dysfunkcje współczesnej turystyki',
    summary: 'Turystyka pełni m.in. funkcje wypoczynkową, zdrowotną, edukacyjną i ekonomiczną, ale powoduje też dysfunkcje, jak przeludnienie i wzrost cen.',
    wiki: [
      {
        heading: 'Funkcje turystyki',
        body: 'Turystyka jako zjawisko społeczne i gospodarcze przyczynia się do rozwoju społecznego, kulturalnego i ekonomicznego.',
        bullets: [
          'Wypoczynkowa - odpoczynek od obowiązków i regeneracja',
          'Zdrowotna - poprawa stanu zdrowia turystów',
          'Edukacyjna i kulturowa - poszerzanie wiedzy o kulturach, tradycjach, zwyczajach',
          'Wychowawcza - rozwija odpowiedzialność i umiejętność współpracy w grupie',
          'Ekonomiczna - generuje dochody, tworzy miejsca pracy, stymuluje lokalne gospodarki',
          'Urbanistyczna/miastotwórcza, polityczna, etniczna oraz ekologiczna'
        ]
      },
      {
        heading: 'Dysfunkcje turystyki',
        body: 'Rozwój turystyki niesie również negatywne skutki dla środowiska i społeczeństwa.',
        bullets: [
          'Przeludnienie popularnych miejsc - tłok, hałas, problemy z infrastrukturą',
          'Wzrost cen towarów, usług i mieszkań uciążliwy dla mieszkańców',
          'Uzależnienie lokalnej gospodarki od turystyki (wrażliwość na kryzysy)',
          'Degradacja kultury - tradycje stają się pokazami dla turystów i tracą autentyczność',
          'Zjawiska patologiczne (alkoholizm, prostytucja) oraz konflikty społeczne'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która z poniższych jest dysfunkcją, a nie funkcją turystyki?',
        options: ['Funkcja zdrowotna', 'Funkcja edukacyjna', 'Degradacja kultury', 'Funkcja ekonomiczna'],
        correct: 2,
        explain: 'Degradacja kultury (utrata autentyczności tradycji) to dysfunkcja; pozostałe to funkcje turystyki.'
      },
      {
        type: 'tf',
        q: 'Uzależnienie lokalnej gospodarki wyłącznie od turystyki czyni ją wrażliwą na kryzysy.',
        correct: true,
        explain: 'Gdy gospodarka opiera się głównie na turystyce, kryzys może bardzo negatywnie wpłynąć na region - to dysfunkcja turystyki.'
      },
      {
        type: 'flash',
        front: 'Wymień funkcje współczesnej turystyki.',
        back: 'Wypoczynkowa, zdrowotna, edukacyjna i kulturowa, wychowawcza, ekonomiczna, urbanistyczna/miastotwórcza, polityczna, etniczna i ekologiczna.'
      }
    ]
  },
  {
    id: 'trendy-tworzenia-stron-www',
    track: 'wszyscy',
    category: 'technologie',
    number: 33,
    title: 'Obecne trendy przy tworzeniu stron internetowych',
    summary: 'Współczesne strony stawiają na dostępność, szybkość, minimalizm, podejście mobile-first, AI i intuicyjną nawigację.',
    wiki: [
      {
        heading: 'Najważniejsze trendy',
        body: 'Strony internetowe coraz bardziej skupiają się na wygodzie użytkownika, aby były łatwe, szybkie i przyjemne w obsłudze.',
        bullets: [
          'Projektowanie z myślą o dostępności - zrozumiałe dla wszystkich, w tym osób z niepełnosprawnościami',
          'Szybkość działania - użytkownicy oczekują szybkiego ładowania strony',
          'Minimalistyczny wygląd z trybem ciemnym - większa czytelność, lepszy dla oczu, oszczędza baterię',
          'Personalizacja i AI - chatboty, spersonalizowane rekomendacje, dynamiczne treści'
        ]
      },
      {
        heading: 'Pozostałe trendy',
        bullets: [
          'Efekty 3D i animacja - ruchome elementy przyciągające uwagę',
          'Projektowanie mobile-first - najpierw smartfony, potem komputery',
          'Prosta nawigacja i menu rozwijane (np. hamburger, menu pełnoekranowe)',
          'Wysokiej jakości, autorskie materiały graficzne zamiast standardowych zdjęć',
          'Powiadomienia push - z możliwością ich wyłączenia'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Co oznacza podejście mobile-first przy tworzeniu stron internetowych?',
        options: [
          'Tworzenie osobnej aplikacji zamiast strony',
          'Strona dostępna tylko na komputerach',
          'Rezygnacja z wersji mobilnej',
          'Strona tworzona najpierw z myślą o smartfonach, a potem dopasowana do komputerów'
        ],
        correct: 3,
        explain: 'Mobile-first oznacza projektowanie najpierw pod smartfony, a następnie dopasowanie do komputerów, bo coraz więcej osób przegląda internet przez telefon.'
      },
      {
        type: 'tf',
        q: 'Tryb ciemny jest obecnie popularnym trendem, ponieważ jest lepszy dla oczu i oszczędza baterię.',
        correct: true,
        explain: 'Minimalistyczny wygląd z trybem ciemnym poprawia czytelność, jest łagodniejszy dla oczu i oszczędza baterię.'
      },
      {
        type: 'flash',
        front: 'Wymień obecne trendy przy tworzeniu stron internetowych.',
        back: 'Dostępność, szybkość działania, minimalizm z trybem ciemnym, personalizacja i AI, efekty 3D i animacje, mobile-first, prosta nawigacja (menu rozwijane), autorskie materiały graficzne, powiadomienia push.'
      }
    ]
  },
  {
    id: 'metody-badania-rynku-turystycznego',
    track: 'wszyscy',
    category: 'marketing',
    number: 35,
    title: 'Metody i techniki badania rynku turystycznego',
    summary: 'Rynek turystyczny bada się metodami ilościowymi i jakościowymi, w oparciu o dane pierwotne i wtórne.',
    wiki: [
      {
        heading: 'Istota badań',
        body: 'Badanie rynku turystycznego to proces zbierania informacji o konkurencji i turystach, ich potrzebach, zachowaniach i oczekiwaniach.'
      },
      {
        heading: 'Badania ilościowe',
        body: 'Celem jest uzyskanie konkretnych, liczbowych danych, które można analizować statystycznie.',
        bullets: [
          'Ankiety i kwestionariusze (pytania zamknięte, skale ocen; online, telefonicznie, osobiście)',
          'Badania opinii turystów (formularze oceny usług)',
          'Badania popytu turystycznego (liczba turystów, cel podróży, długość pobytu, wydatki)',
          'Zalety: duża próba, możliwość wnioskowania statystycznego. Wady: nie pokazują motywów i emocji turystów'
        ]
      },
      {
        heading: 'Badania jakościowe',
        body: 'Celem jest zrozumienie motywacji, potrzeb, opinii i zachowań turystów; dane opisowe, mniejsza liczba osób.',
        bullets: [
          'Wywiady pogłębione - indywidualne rozmowy z uczestnikami rynku',
          'Grupy fokusowe - dyskusje w małych grupach o usługach i preferencjach',
          'Obserwacja uczestnicząca - badacz angażuje się w działanie grupy',
          'Zalety: głębokie zrozumienie zachowań. Wady: trudne do uogólnienia, wymagają czasu i zasobów'
        ]
      },
      {
        heading: 'Źródła danych',
        bullets: [
          'Badania pierwotne - dane zbierane samodzielnie od respondentów (ankieta, wywiad, obserwacja)',
          'Badania wtórne - wykorzystanie istniejących danych, raportów, statystyk i publikacji'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która metoda należy do badań jakościowych rynku turystycznego?',
        options: ['Grupa fokusowa', 'Ankieta zamknięta', 'Analiza danych liczbowych ze statystyk', 'Badanie popytu turystycznego'],
        correct: 0,
        explain: 'Grupa fokusowa to badanie jakościowe; pozostałe wymienione to metody ilościowe.'
      },
      {
        type: 'tf',
        q: 'Badania wtórne polegają na samodzielnym zbieraniu nowych danych w terenie, np. przez ankiety.',
        correct: false,
        explain: 'To opis badań pierwotnych; badania wtórne opierają się na już istniejących danych, raportach i statystykach.'
      },
      {
        type: 'flash',
        front: 'Omów podstawowe metody i techniki badania rynku turystycznego.',
        back: 'Badania ilościowe (ankiety, badania opinii i popytu - dane liczbowe) oraz jakościowe (wywiady pogłębione, grupy fokusowe, obserwacja uczestnicząca - zrozumienie motywacji). Obie grupy prowadzi się jako badania pierwotne (zbierane samodzielnie) lub wtórne (istniejące dane).'
      }
    ]
  },
  {
    id: 'zalozenia-metodyczne-rekreacja',
    track: 'wszyscy',
    category: 'rekreacja',
    number: 36,
    title: 'Założenia metodyczne w rekreacji fizycznej - formy, metody i środki',
    summary: 'Instruktor rekreacji wykorzystuje różne formy, metody nauczania i treningowe, środki oraz zasady metodyczne, by osiągnąć cele zajęć.',
    wiki: [
      {
        heading: 'Formy rekreacji fizycznej',
        body: 'Założenie metodyczne to pomysł na to, jak poprowadzić zajęcia, by osiągnąć cel. Formy to rodzaje zajęć ruchowych poprawiających kondycję, zdrowie, samopoczucie i integrację.',
        bullets: [
          'Formy organizacyjne: indywidualna (jogging), zespołowe (siatkówka), grupowe (fitness, taniec), masowe (biegi uliczne)',
          'Formy dydaktyczne: zabawowa, naśladowcza, zadaniowa, improwizacyjna, ścisła, programowa, współzawodnictwo'
        ]
      },
      {
        heading: 'Metody działania instruktora',
        bullets: [
          'Metody nauczania czynności ruchowych: poglądowa (pokaz), słowa (objaśnienia), praktyczna (wykonywanie ćwiczeń)',
          'Metody treningowe ciągłe: jednostajna (stała intensywność), zmienna (zmiana tempa)',
          'Metody treningowe przerywane: interwałowa, powtórzeniowa, ekstensywna, intensywna',
          'Metody socjotechniczne: informacyjna, poradnictwo, animacja, programowanie',
          'Metody wychowawcze: wpływu osobistego, sytuacyjnego, społecznego, kierowania samowychowaniem'
        ]
      },
      {
        heading: 'Środki w rekreacji fizycznej',
        body: 'Narzędzia uatrakcyjniające i ułatwiające zajęcia.',
        bullets: [
          'Sprzęt sportowy, muzyka, przestrzeń',
          'Przyrządy intensyfikujące - hantle, stepy',
          'Metody intensyfikacji - praca w parach, zmiany tempa, dodatkowe powtórzenia'
        ]
      },
      {
        heading: 'Zasady metodyczne (dydaktyczne)',
        bullets: [
          'Świadomość i aktywność - uczestnik wie po co ćwiczy i chce to robić',
          'Systematyczność',
          'Dostępność - dostosowanie do wieku i możliwości',
          'Utrwalenie - powtarzanie dla lepszego zapamiętania',
          'Wszechstronność - rozwój siły, wytrzymałości i zręczności'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Do której grupy zalicza się metoda jednostajna i zmienna?',
        options: ['Metody nauczania czynności ruchowych', 'Metody wychowawcze', 'Metody socjotechniczne', 'Metody treningowe ciągłe'],
        correct: 3,
        explain: 'Metoda jednostajna (stała intensywność) i zmienna (zmiana tempa) to metody treningowe ciągłe.'
      },
      {
        type: 'tf',
        q: 'Zasada dostępności oznacza dostosowanie zajęć do wieku i możliwości uczestników.',
        correct: true,
        explain: 'Zasada dostępności wymaga, by zajęcia były dostosowane do wieku i możliwości ćwiczących.'
      },
      {
        type: 'flash',
        front: 'Wymień metody działania instruktora rekreacji.',
        back: 'Metody nauczania czynności ruchowych (poglądowa, słowa, praktyczna), metody treningowe (ciągłe: jednostajna, zmienna; przerywane: interwałowa, powtórzeniowa, ekstensywna, intensywna), metody socjotechniczne (informacyjna, poradnictwo, animacja, programowanie) oraz metody wychowawcze (wpływu osobistego, sytuacyjnego, społecznego, kierowania samowychowaniem).'
      }
    ]
  }
]
