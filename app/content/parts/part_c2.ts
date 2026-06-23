import type { Topic } from '../types'

export const partC2: Topic[] = [
  {
    id: 'ladowe-ekosystemy-swiata',
    track: 'wszyscy',
    category: 'przyroda',
    number: 15,
    title: 'Lądowe ekosystemy świata: bioróżnorodność, problemy środowiskowe',
    summary: 'Charakterystyka głównych ekosystemów lądowych, ich bioróżnorodności oraz zagrożeń środowiskowych.',
    wiki: [
      {
        heading: 'Bioróżnorodność',
        body: 'Bioróżnorodność (różnorodność biologiczna) to całe bogactwo form życia na Ziemi: gatunki zwierząt, roślin i mikroorganizmów, ich zróżnicowanie genetyczne oraz ekosystemy, w których funkcjonują.',
        bullets: [
          'Genetyczna - np. rasy psów, różne odmiany jabłoni',
          'Gatunkowa - liczba i rodzaje gatunków (ptaki, ssaki, rośliny) w danym ekosystemie',
          'Ekosystemowa - lasy, łąki, bagna, pustynie'
        ]
      },
      {
        heading: 'Główne ekosystemy lądowe',
        bullets: [
          'Lasy równikowe (deszczowe, tropikalne) - najbogatszy ekosystem Ziemi, liczne gatunki endemiczne; zagrożenia: wycinka, rolnictwo (soja, palma olejowa), zmiany klimatu',
          'Lasy liściaste strefy umiarkowanej - różnorodne drzewa liściaste, bogata fauna; zagrożenia: zanieczyszczenia powietrza, intensywna gospodarka leśna, fragmentacja siedlisk',
          'Tajga - dominują drzewa iglaste, fauna chłodnego klimatu (łosie, wilki, niedźwiedzie); zagrożenia: wycinka przemysłowa, topnienie wiecznej zmarzliny, pożary',
          'Pustynie - sukulenty, gady, drobne ssaki; zagrożenia: zmiany klimatu, nadużywanie wód podziemnych',
          'Tundra - niska roślinność (mchy, porosty), lisy polarne, sowy śnieżne, renifery; zagrożenia: eksploatacja surowców, ocieplenie klimatu',
          'Sawanna - obszary trawiaste z rozproszonymi drzewami, dużo ssaków; zagrożenia: nadmierny wypas, kłusownictwo, wypalanie traw',
          'Stepy i prerie - trawiaste równiny (trawy, gryzonie, sokoły, dzikie konie); zagrożenia: przekształcanie w tereny rolnicze, erozja gleby'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który ekosystem lądowy jest uznawany za najbogatszy pod względem bioróżnorodności?',
        options: ['Tundra', 'Lasy równikowe (deszczowe)', 'Pustynie', 'Stepy i prerie'],
        correct: 1,
        explain: 'Lasy równikowe (tropikalne) to najbogatszy ekosystem Ziemi z ogromną liczbą gatunków, w tym licznymi endemitami.'
      },
      {
        type: 'abcd',
        q: 'Ile rodzajów bioróżnorodności wyróżniono w materiale?',
        options: ['2 - genetyczna i gatunkowa', '3 - genetyczna, gatunkowa, ekosystemowa', '4 - z dodatkiem krajobrazowej', '5'],
        correct: 1,
        explain: 'Wyróżniono trzy rodzaje: genetyczną, gatunkową i ekosystemową.'
      },
      {
        type: 'tf',
        q: 'Topnienie wiecznej zmarzliny jest jednym z problemów środowiskowych tajgi.',
        correct: true,
        explain: 'W tajdze zagrożeniem są wycinka przemysłowa, zmiany klimatyczne (topnienie wiecznej zmarzliny) oraz pożary.'
      },
      {
        type: 'flash',
        front: 'Wymień przykładowe problemy środowiskowe lasów równikowych.',
        back: 'Wycinka lasów, rolnictwo (uprawa soi, palmy olejowej) prowadzące do utraty siedlisk i spadku bioróżnorodności, oraz zmiany klimatyczne przesuszające lasy.'
      }
    ]
  },
  {
    id: 'wodne-ekosystemy-swiata',
    track: 'wszyscy',
    category: 'przyroda',
    number: 17,
    title: 'Wodne ekosystemy świata: bioróżnorodność, problemy środowiskowe',
    summary: 'Charakterystyka ekosystemów słodkowodnych i morskich, ich bioróżnorodności, zagrożeń oraz sposobów ochrony.',
    wiki: [
      {
        heading: 'Rodzaje wodnych ekosystemów',
        body: 'Ekosystemy wodne są kluczowe dla życia na Ziemi - stanowią siedliska milionów gatunków oraz pełnią funkcję filtracyjną i klimatyczną.',
        bullets: [
          'Słodkowodne - rzeki, jeziora, bagna, mokradła; ryby (pstrągi, sumy), płazy (żaby, salamandry), gady (żółwie, krokodyle), rośliny wodne, ptaki wodne',
          'Morskie - oceany, morza, rafy koralowe; od planktonu i koralowców po drapieżniki jak rekiny',
          'Rafy koralowe - zajmują niewielką powierzchnię, ale są siedliskiem dla około 25% wszystkich gatunków morskich'
        ]
      },
      {
        heading: 'Problemy środowiskowe',
        bullets: [
          'Zanieczyszczenia wód - ścieki przemysłowe i rolnicze, pestycydy; eutrofizacja (namnażanie glonów przez nadmiar azotu, deficyt tlenu); plastik w oceanach',
          'Zmiany klimatu i globalne ocieplenie - zakwaszenie oceanu, wzrost poziomu wody, zmiany zasolenia przez topnienie lodowców',
          'Nadmierna eksploatacja - budowa i regulacja rzek ograniczająca migrację ryb',
          'Zanieczyszczenie siedlisk - osuszanie bagien i mokradeł, utrata siedlisk ptaków wodnych i płazów'
        ]
      },
      {
        heading: 'Ochrona wodnych ekosystemów',
        bullets: [
          'Zrównoważone rybołówstwo',
          'Ochrona siedlisk i gatunków',
          'Działania na rzecz klimatu',
          'Redukcja zanieczyszczeń'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Jaki odsetek wszystkich gatunków morskich znajduje siedlisko w rafach koralowych?',
        options: ['Około 5%', 'Około 10%', 'Około 25%', 'Około 50%'],
        correct: 2,
        explain: 'Rafy koralowe zajmują niewielką powierzchnię, lecz są siedliskiem dla około 25% wszystkich gatunków morskich.'
      },
      {
        type: 'abcd',
        q: 'Czym jest eutrofizacja?',
        options: [
          'Zakwaszeniem oceanu przez wzrost temperatury',
          'Przyspieszonym namnażaniem glonów spowodowanym nadmiarem azotu, prowadzącym do deficytu tlenu',
          'Topnieniem lodowców i wzrostem poziomu wód',
          'Migracją ryb między rzekami'
        ],
        correct: 1,
        explain: 'Eutrofizacja to przyspieszone namnażanie glonów wskutek nadmiaru azotu, co prowadzi do deficytu tlenu i śmierci organizmów wodnych.'
      },
      {
        type: 'tf',
        q: 'Osuszanie bagien i mokradeł przyczynia się do utraty siedlisk ptaków wodnych i płazów.',
        correct: true,
        explain: 'Osuszanie bagien i mokradeł to zanieczyszczenie/niszczenie siedlisk skutkujące utratą siedlisk ptaków wodnych i płazów.'
      },
      {
        type: 'flash',
        front: 'Wymień sposoby ochrony wodnych ekosystemów.',
        back: 'Zrównoważone rybołówstwo, ochrona siedlisk i gatunków, działania na rzecz klimatu oraz redukcja zanieczyszczeń.'
      }
    ]
  },
  {
    id: 'zalety-statystyki-w-turystyce',
    track: 'wszyscy',
    category: 'technologie',
    number: 19,
    title: 'Zalety stosowania statystyki w turystyce',
    summary: 'Co najmniej trzy zalety wykorzystania statystyki w planowaniu, ocenie wpływu gospodarczego i decyzjach biznesowych w turystyce.',
    wiki: [
      {
        heading: 'Lepsze planowanie i zarządzanie turystyką',
        body: 'Statystyka dostarcza danych o tym, ilu turystów przyjeżdża, skąd pochodzą, jak długo zostają i z jakich usług korzystają.',
        bullets: [
          'Efektywne planowanie rozwoju infrastruktury (noclegi, drogi, atrakcje)',
          'Dostosowanie oferty usługowej i zarządzanie zasobami',
          'Np. dane o szczycie w lipcu i sierpniu pozwalają z wyprzedzeniem zwiększyć liczbę pracowników i rozbudować bazę',
          'Zmniejszenie ryzyka przeciążenia miejsc i niezadowolenia turystów'
        ]
      },
      {
        heading: 'Monitorowanie wpływu gospodarczego',
        body: 'Statystyka pozwala ocenić, jak turystyka wpływa na gospodarkę: ile pieniędzy wydają turyści, które branże zyskują (hotele, restauracje, transport), ile miejsc pracy tworzy turystyka. Pomaga to władzom lokalnym podejmować świadome decyzje rozwojowe.'
      },
      {
        heading: 'Trafne decyzje biznesowe i prognozowanie trendów',
        body: 'Analiza statystyczna pomaga przewidzieć przyszłe zachowania turystów, co jest istotne przy planowaniu reklam, inwestycji i planów rozwoju. Branża może szybciej reagować na problemy, takie jak spadek liczby odwiedzających lub zmiana zainteresowań.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która z poniższych jest zaletą stosowania statystyki w turystyce wymienioną w materiale?',
        options: [
          'Eliminacja sezonowości ruchu turystycznego',
          'Lepsze planowanie i zarządzanie turystyką',
          'Likwidacja kosztów infrastruktury',
          'Gwarancja stałej liczby turystów'
        ],
        correct: 1,
        explain: 'Pierwszą wymienioną zaletą jest lepsze planowanie i zarządzanie turystyką dzięki danym o ruchu turystycznym.'
      },
      {
        type: 'tf',
        q: 'Statystyka pozwala ocenić wpływ turystyki na gospodarkę, np. ile pieniędzy wydają turyści i ile miejsc pracy tworzy turystyka.',
        correct: true,
        explain: 'Monitorowanie wpływu gospodarczego to jedna z głównych zalet - statystyka ujawnia wydatki turystów, zyski branż i liczbę miejsc pracy.'
      },
      {
        type: 'flash',
        front: 'Podaj trzy zalety stosowania statystyki w turystyce.',
        back: 'Lepsze planowanie i zarządzanie turystyką, monitorowanie wpływu gospodarczego oraz podejmowanie trafnych decyzji biznesowych i prognozowanie trendów.'
      }
    ]
  },
  {
    id: 'pojecie-i-funkcje-zarzadzania',
    track: 'wszyscy',
    category: 'zarzadzanie',
    number: 21,
    title: 'Pojęcie i funkcje zarządzania',
    summary: 'Definicja zarządzania oraz jego podstawowe funkcje: planowanie, organizowanie, przewodzenie i kontrolowanie.',
    wiki: [
      {
        heading: 'Pojęcie zarządzania',
        body: 'Zarządzanie to proces planowania, organizowania, przewodzenia i kontrolowania zasobów organizacji w celu osiągnięcia określonych celów. Jest kluczowym elementem funkcjonowania każdej organizacji, niezależnie od jej wielkości czy branży.'
      },
      {
        heading: 'Podstawowe funkcje zarządzania',
        bullets: [
          'Planowanie - określanie celów i sposobów ich realizacji; analiza sytuacji, prognozowanie i opracowanie strategii',
          'Organizowanie - przydzielanie zadań, zasobów i odpowiedzialności; tworzenie struktur organizacyjnych',
          'Przewodzenie - motywowanie i prowadzenie zespołu, komunikacja, rozwiązywanie problemów i podejmowanie decyzji',
          'Kontrolowanie - monitorowanie postępów i porównywanie z celami; wprowadzanie korekt'
        ]
      },
      {
        body: 'W modelu Henriego Fayola wyróżnia się 5. funkcję: koordynowanie.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która funkcja zarządzania polega na monitorowaniu postępów i porównywaniu ich z założonymi celami?',
        options: ['Planowanie', 'Organizowanie', 'Przewodzenie', 'Kontrolowanie'],
        correct: 3,
        explain: 'Kontrolowanie to monitorowanie postępów i porównywanie ich z celami oraz wprowadzanie korekt.'
      },
      {
        type: 'abcd',
        q: 'Jaką piątą funkcję zarządzania dodał Henri Fayol?',
        options: ['Koordynowanie', 'Delegowanie', 'Negocjowanie', 'Raportowanie'],
        correct: 0,
        explain: 'W modelu Henriego Fayola piątą funkcją jest koordynowanie.'
      },
      {
        type: 'tf',
        q: 'Przewodzenie obejmuje motywowanie zespołu, komunikację i podejmowanie decyzji.',
        correct: true,
        explain: 'Przewodzenie dotyczy motywowania i prowadzenia zespołu, w tym komunikacji, rozwiązywania problemów i podejmowania decyzji.'
      },
      {
        type: 'flash',
        front: 'Wymień cztery podstawowe funkcje zarządzania.',
        back: 'Planowanie, organizowanie, przewodzenie i kontrolowanie (w modelu Fayola dodatkowo koordynowanie).'
      }
    ]
  },
  {
    id: 'determinizm-i-wolna-wola',
    track: 'wszyscy',
    category: 'historia',
    number: 22,
    title: 'Problem determinizmu i wolnej woli. Czy człowiek jest wolny?',
    summary: 'Pojęcia determinizmu i wolnej woli oraz trzy główne stanowiska filozoficzne wobec pytania o wolność człowieka.',
    wiki: [
      {
        heading: 'Pojęcia',
        bullets: [
          'Determinizm - pogląd, że wszystko, co się dzieje, ma swoją przyczynę; znając prawa natury i warunki początkowe można przewidzieć każde zdarzenie, także ludzkie decyzje',
          'Wolna wola - przekonanie, że człowiek może samodzielnie wybierać, co oznacza odpowiedzialność za swoje decyzje'
        ]
      },
      {
        heading: 'Problem',
        body: 'Jeśli wszystko jest z góry zdeterminowane, to być może nasze decyzje są jedynie skutkiem genów, wychowania i innych wpływów. Powstaje pytanie, czy mamy wtedy wolną wolę i czy jesteśmy za coś odpowiedzialni.'
      },
      {
        heading: 'Trzy główne podejścia filozoficzne',
        bullets: [
          'Twardy determinizm - nie ma wolnej woli; wolność to tylko nasze wrażenie, a nie prawda',
          'Libertarianizm - wolna wola istnieje, świat nie jest całkowicie zdeterminowany; człowiek może działać inaczej i ponosi odpowiedzialność',
          'Kompatybilizm - wolna wola i determinizm mogą współistnieć; człowiek jest wolny, jeśli działa zgodnie ze swoimi przekonaniami, a nie pod przymusem'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które stanowisko głosi, że wolna wola i determinizm mogą działać razem?',
        options: ['Twardy determinizm', 'Libertarianizm', 'Kompatybilizm', 'Indeterminizm'],
        correct: 2,
        explain: 'Kompatybilizm zakłada, że wolna wola i determinizm mogą współistnieć - człowiek jest wolny, jeśli działa zgodnie ze swoimi przekonaniami, a nie pod przymusem.'
      },
      {
        type: 'abcd',
        q: 'Co głosi twardy determinizm w kwestii wolności człowieka?',
        options: [
          'Człowiek jest w pełni wolny',
          'Wolność to iluzja, wolnej woli nie ma',
          'Wolność zależy od wychowania',
          'Wolna wola istnieje obok determinizmu'
        ],
        correct: 1,
        explain: 'Według twardego determinizmu wolności nie ma - jest ona tylko iluzją, a wszystko dzieje się, bo musiało się tak stać.'
      },
      {
        type: 'tf',
        q: 'Determinizm to pogląd, że wszystko, co się dzieje, ma swoją przyczynę.',
        correct: true,
        explain: 'Tak brzmi definicja determinizmu - każde zdarzenie ma swoją przyczynę, a znając prawa natury i warunki początkowe można je przewidzieć.'
      },
      {
        type: 'flash',
        front: 'Wymień trzy główne podejścia filozoficzne do problemu determinizmu i wolnej woli.',
        back: 'Twardy determinizm (brak wolnej woli), libertarianizm (wolna wola istnieje) oraz kompatybilizm (wolna wola i determinizm współistnieją).'
      }
    ]
  },
  {
    id: 'e-marketing-w-turystyce-i-rekreacji',
    track: 'wszyscy',
    category: 'marketing',
    number: 23,
    title: 'E-marketing w turystyce i rekreacji: pojęcie, narzędzia, znaczenie',
    summary: 'Definicja e-marketingu, jego najważniejsze narzędzia cyfrowe oraz znaczenie dla promocji oferty turystycznej i rekreacyjnej.',
    wiki: [
      {
        heading: 'Pojęcie',
        body: 'E-marketing to wykorzystywanie cyfrowych kanałów komunikacji do prezentowania oferty turystycznej, interakcji z klientami oraz monitorowania skuteczności działań. Kluczowym celem jest dotarcie do potencjalnych turystów i rekreantów w sposób atrakcyjny, spersonalizowany i mierzalny.'
      },
      {
        heading: 'Narzędzia e-marketingu',
        bullets: [
          'Strony internetowe i blogi - atrakcyjne strony ze zdjęciami i opisami, blogi budujące zaufanie',
          'SEO - optymalizacja treści pod wyszukiwarki, by strona pojawiała się wyżej w wynikach',
          'SEM - płatne reklamy (np. Google Ads) docierające do osób szukających konkretnych usług',
          'Media społecznościowe - Instagram, Facebook itp. do prezentacji oferty i interakcji',
          'E-mail marketing - newslettery i oferty specjalne utrzymujące kontakt z klientami',
          'Content marketing - wartościowe treści: artykuły, filmy, infografiki',
          'Mobile marketing - dostosowanie treści i reklam do urządzeń mobilnych',
          'Reklamy graficzne i wideo - atrakcyjny wizualny sposób prezentacji oferty'
        ]
      },
      {
        heading: 'Znaczenie',
        bullets: [
          'Globalny zasięg - prezentacja ofert na całym świecie 24/7',
          'Niższe koszty - reklama tańsza i bardziej efektywna',
          'Dostosowanie do klienta - dzięki analizie danych oferta dopasowana indywidualnie',
          'Szybka analiza wyników - bieżące śledzenie skuteczności kampanii'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które narzędzie e-marketingu polega na płatnych reklamach docierających do osób szukających konkretnych usług turystycznych?',
        options: ['SEO', 'SEM (np. Google Ads)', 'Newsletter', 'Blog'],
        correct: 1,
        explain: 'SEM (marketing w wyszukiwarkach) to płatne reklamy, np. Google Ads, docierające do osób szukających konkretnych usług turystycznych.'
      },
      {
        type: 'abcd',
        q: 'Co jest kluczowym celem e-marketingu w turystyce?',
        options: [
          'Wyłącznie obniżenie kosztów drukowania ulotek',
          'Dotarcie do turystów w sposób atrakcyjny, spersonalizowany i mierzalny',
          'Zastąpienie pracowników biur podróży',
          'Rezygnacja z analizy danych o klientach'
        ],
        correct: 1,
        explain: 'Celem e-marketingu jest dotarcie do potencjalnych turystów i rekreantów w sposób atrakcyjny, spersonalizowany oraz mierzalny.'
      },
      {
        type: 'tf',
        q: 'Globalny zasięg i dostępność oferty 24/7 to jedno ze znaczeń e-marketingu w turystyce.',
        correct: true,
        explain: 'Globalny zasięg - prezentowanie ofert na całym świecie przez całą dobę - to jedna z kluczowych zalet e-marketingu.'
      },
      {
        type: 'flash',
        front: 'Wymień co najmniej cztery narzędzia e-marketingu w turystyce.',
        back: 'Strony internetowe i blogi, SEO, SEM (Google Ads), media społecznościowe, e-mail marketing, content marketing, mobile marketing oraz reklamy graficzne i wideo.'
      }
    ]
  },
  {
    id: 'rola-managera-w-turystyce',
    track: 'wszyscy',
    category: 'zarzadzanie',
    number: 24,
    title: 'Rola managera w turystyce',
    summary: 'Kluczowa rola i główne obowiązki managera zarządzającego firmami turystycznymi.',
    wiki: [
      {
        heading: 'Rola managera',
        body: 'Manager w turystyce odgrywa kluczową rolę w zarządzaniu działalnością firm turystycznych, takich jak biura podróży, hotele i organizatorzy wycieczek. Jego główne zadania obejmują planowanie, organizowanie, kierowanie i kontrolowanie działań związanych z oferowaniem usług turystycznych.'
      },
      {
        heading: 'Kluczowe obowiązki',
        bullets: [
          'Zarządzanie zespołem - rekrutacja, motywowanie, przydzielanie zadań, monitorowanie',
          'Planowanie i rozwój oferty turystycznej - tworzenie atrakcyjnych pakietów, analiza trendów rynkowych, wprowadzanie nowych produktów',
          'Relacje z klientami - wysoka jakość obsługi, rozwiązywanie problemów, reagowanie na opinie',
          'Marketing i promocja - opracowywanie strategii, wykorzystywanie narzędzi e-marketingu',
          'Zarządzanie finansami - budżetowanie, kontrola kosztów, analiza wyników i działania korygujące',
          'Współpraca z partnerami - kontakt z dostawcami usług (hotele, przewodnicy), budowanie relacji biznesowych',
          'Zapewnienie zgodności z przepisami - przestrzeganie regulacji prawnych i monitorowanie ich zmian'
        ]
      },
      {
        body: 'W dynamicznie zmieniającej się branży manager musi być elastyczny i otwarty na innowacje, aby spełniać oczekiwania klientów i sprostać wyzwaniom rynkowym.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które zadanie należy do kluczowych obowiązków managera w turystyce?',
        options: [
          'Osobiste oprowadzanie wszystkich wycieczek',
          'Zarządzanie zespołem: rekrutacja, motywowanie, przydzielanie zadań',
          'Zakaz korzystania z e-marketingu',
          'Ignorowanie opinii klientów'
        ],
        correct: 1,
        explain: 'Zarządzanie zespołem - rekrutacja, motywowanie, przydzielanie zadań i monitorowanie - to jeden z kluczowych obowiązków managera.'
      },
      {
        type: 'tf',
        q: 'W dynamicznie zmieniającej się branży turystycznej manager powinien być elastyczny i otwarty na innowacje.',
        correct: true,
        explain: 'Materiał wskazuje, że manager musi być elastyczny i otwarty na innowacje, aby sprostać oczekiwaniom klientów i wyzwaniom rynku.'
      },
      {
        type: 'flash',
        front: 'Wymień przykładowe obowiązki managera w turystyce.',
        back: 'Zarządzanie zespołem, planowanie i rozwój oferty, relacje z klientami, marketing i promocja, zarządzanie finansami, współpraca z partnerami oraz zapewnienie zgodności z przepisami.'
      }
    ]
  },
  {
    id: 'badania-pierwotne-a-wtorne-rynku-turystycznego',
    track: 'wszyscy',
    category: 'marketing',
    number: 25,
    title: 'Różnice między badaniami pierwotnymi a wtórnymi rynku turystycznego',
    summary: 'Porównanie badań pierwotnych i wtórnych rynku turystycznego pod kątem źródeł danych, metod oraz zalet i wad.',
    wiki: [
      {
        heading: 'Badania pierwotne',
        body: 'Polegają na zbieraniu nowych, niepublikowanych wcześniej danych bezpośrednio od źródła.',
        bullets: [
          'Metody: wywiady indywidualne, ankiety i kwestionariusze, grupy fokusowe, obserwacje',
          'Zalety: aktualność danych, dostosowanie do potrzeb badania, kontrola jakości',
          'Wady: kosztowność, czasochłonność, wymagana infrastruktura i zasoby'
        ]
      },
      {
        heading: 'Badania wtórne',
        body: 'Polegają na analizie już istniejących danych, zebranych i opublikowanych wcześniej przez inne podmioty.',
        bullets: [
          'Źródła: raporty branżowe, dane statystyczne urzędów, artykuły naukowe i publikacje, bazy danych',
          'Zalety: oszczędność czasu i kosztów, szeroki zakres informacji, łatwość porównania danych historycznych',
          'Wady: brak aktualności, ograniczona elastyczność (dane zebrane w innym celu), niepewna jakość'
        ]
      },
      {
        heading: 'Najważniejsze różnice',
        body: 'Oba podejścia różnią się metodologią zbierania danych, źródłami informacji oraz zastosowaniem. Pierwotne dają świeże, dopasowane dane kosztem czasu i pieniędzy; wtórne są tańsze i szybsze, lecz mniej aktualne i mniej elastyczne.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Co jest cechą badań pierwotnych rynku turystycznego?',
        options: [
          'Analiza danych opublikowanych wcześniej przez inne podmioty',
          'Zbieranie nowych, niepublikowanych danych bezpośrednio od źródła',
          'Korzystanie wyłącznie z raportów branżowych',
          'Brak możliwości dostosowania do potrzeb badania'
        ],
        correct: 1,
        explain: 'Badania pierwotne polegają na zbieraniu nowych, niepublikowanych wcześniej danych bezpośrednio od źródła (np. ankiety, wywiady).'
      },
      {
        type: 'abcd',
        q: 'Która z poniższych jest zaletą badań wtórnych?',
        options: [
          'Pełna aktualność danych',
          'Oszczędność czasu i kosztów',
          'Możliwość bezpośredniej kontroli jakości zbierania danych',
          'Pełne dostosowanie do potrzeb konkretnego badania'
        ],
        correct: 1,
        explain: 'Zaletą badań wtórnych jest oszczędność czasu i kosztów, bo dane są już dostępne i nie trzeba zbierać ich od podstaw.'
      },
      {
        type: 'tf',
        q: 'Wadą badań wtórnych może być brak aktualności i niepewna jakość danych.',
        correct: true,
        explain: 'Dane wtórne bywają stare i zebrane w innym celu, a brak kontroli nad procesem ich zbierania powoduje niepewną jakość.'
      },
      {
        type: 'flash',
        front: 'Czym różnią się badania pierwotne od wtórnych rynku turystycznego?',
        back: 'Pierwotne to zbieranie nowych danych bezpośrednio od źródła (aktualne, dopasowane, ale drogie i czasochłonne); wtórne to analiza istniejących, opublikowanych danych (tańsze i szybsze, ale mniej aktualne i elastyczne).'
      }
    ]
  },
  {
    id: 'znaczenie-kultury-w-turystyce',
    track: 'wszyscy',
    category: 'historia',
    number: 26,
    title: 'Znaczenie kultury w turystyce',
    summary: 'Rola kultury jako atrakcji i elementu doświadczenia turystycznego oraz wzajemny wpływ turystyki i kultury lokalnej.',
    wiki: [
      {
        body: 'Kultura odgrywa kluczową rolę w turystyce - wpływa na motywację podróżnych i rozwój destynacji. Jest jednym z głównych czynników przyciągających turystów oraz kształtującym dla nich doświadczeniem.'
      },
      {
        heading: 'Kultura jako atrakcja i doświadczenie',
        bullets: [
          'Kultura jako atrakcja - wiele osób podróżuje, by poznać dziedzictwo kulturowe; popularne są zabytki, muzea, festiwale, sztuka, muzyka, tradycje',
          'Kultura jako element doświadczenia - turystyka kulturowa pozwala poznawać nowe języki, zwyczaje i style życia; lokalne potrawy, rękodzieło i obyczaje czynią podróż bardziej autentyczną'
        ]
      },
      {
        heading: 'Wpływ turystyki na kulturę lokalną',
        bullets: [
          'Pozytywny - wspieranie zachowania i promocji dziedzictwa; dochody finansują renowację zabytków i wydarzenia kulturowe',
          'Negatywny - konflikty społeczne, zanikanie autentyczności (kultura na pokaz), komercjalizacja pod turystów'
        ]
      },
      {
        heading: 'Kultura a zrównoważona turystyka',
        bullets: [
          'Ochrona lokalnych tradycji i dziedzictwa jest kluczowa dla zrównoważonego rozwoju',
          'Edukacja turystów w zakresie poszanowania miejscowej kultury pomaga zachować jej unikalny charakter'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który przykład ilustruje kulturę jako atrakcję turystyczną?',
        options: [
          'Darmowe wi-fi w hotelu',
          'Zabytki, muzea, festiwale, sztuka i tradycje',
          'Transfer z lotniska',
          'Ubezpieczenie podróży'
        ],
        correct: 1,
        explain: 'Popularne atrakcje kulturowe to zabytki, muzea, festiwale, sztuka, muzyka i tradycje - to one przyciągają turystów.'
      },
      {
        type: 'tf',
        q: 'Rozwój turystyki może prowadzić do komercjalizacji i zanikania autentyczności kultury lokalnej.',
        correct: true,
        explain: 'Turystyka bywa źródłem konfliktów społecznych oraz komercjalizacji - kultura "robi się na pokaz", co osłabia jej autentyczność.'
      },
      {
        type: 'flash',
        front: 'Jakie znaczenie odgrywa kultura w turystyce?',
        back: 'Jest atrakcją przyciągającą turystów (zabytki, festiwale, tradycje) i elementem doświadczenia (języki, potrawy, zwyczaje); turystyka wzajemnie wpływa na kulturę lokalną - wspiera dziedzictwo, ale może je komercjalizować. Ochrona tradycji i edukacja turystów wspierają zrównoważony rozwój.'
      }
    ]
  }
]
