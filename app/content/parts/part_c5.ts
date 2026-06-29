import type { Topic } from '../types'

export const partC5: Topic[] = [
  {
    id: 'globalizacja-turystyka',
    track: 'wszyscy',
    category: 'turystyka',
    number: 49,
    title: 'Proces globalizacji w turystyce, hotelarstwie i rekreacji',
    summary: 'Globalizacja zbliża gospodarki i społeczeństwa, zwiększając dostępność i standaryzację usług turystycznych, hotelarskich i rekreacyjnych.',
    wiki: [
      {
        heading: 'Czym jest globalizacja',
        body: 'Globalizacja to proces postępującego zbliżania się społeczeństw i gospodarek świata w wyniku rozwoju technologii, transportu, komunikacji i międzynarodowej współpracy. Obejmuje m.in. swobodny przepływ ludzi, towarów, informacji, kapitału i usług.'
      },
      {
        heading: 'Globalizacja w turystyce',
        bullets: [
          'Zwiększenie dostępności podróży (tanie loty, internetowe biura podróży)',
          'Rozszerzenie oferty turystycznej na cały świat (egzotyka, nowe kierunki)',
          'Wzrost liczby podróży międzynarodowych (turystyka masowa i indywidualna)',
          'Standaryzacja stylów życia i oczekiwań turystów (np. all inclusive)',
          'Rozwój globalnych marek (TUI, Booking) i rezerwacji online'
        ]
      },
      {
        heading: 'Globalizacja w hotelarstwie',
        bullets: [
          'Powstawanie sieci hotelowych działających globalnie (Marriott, Hilton)',
          'Standaryzacja usług i wyposażenia hoteli na całym świecie',
          'Wzrost konkurencji i dostępu do informacji (portale z recenzjami)',
          'Automatyzacja usług (check-in online)'
        ]
      },
      {
        heading: 'Globalizacja w rekreacji',
        bullets: [
          'Wymiana form rekreacyjnych między krajami (joga, fitness, sporty ekstremalne)',
          'Rozwój globalnych wydarzeń sportowo-rekreacyjnych (maratony, festiwale)',
          'Nowe technologie rekreacyjne dostępne globalnie (aplikacje terenowe, fitness)',
          'Wzrost znaczenia zdrowego stylu życia'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który przykład najlepiej ilustruje globalizację w hotelarstwie?',
        options: [
          'Lokalna gospoda serwująca tylko dania regionalne',
          'Powstawanie globalnych sieci hotelowych jak Marriott czy Hilton',
          'Spadek liczby podróży międzynarodowych',
          'Zanik standaryzacji usług hotelowych'
        ],
        correct: 1,
        explain: 'Globalizacja w hotelarstwie objawia się m.in. powstawaniem sieci hotelowych działających w wielu krajach (Marriott, Hilton).'
      },
      {
        type: 'tf',
        q: 'Globalizacja w turystyce zwiększa dostępność podróży dzięki tanim lotom i internetowym biurom podróży.',
        correct: true,
        explain: 'To jeden z głównych przejawów globalizacji w turystyce wymienionych w materiale.'
      },
      {
        type: 'flash',
        front: 'Wymień przejawy globalizacji w rekreacji.',
        back: 'Wymiana form rekreacyjnych między krajami (joga, fitness), rozwój globalnych wydarzeń sportowo-rekreacyjnych, globalnie dostępne technologie rekreacyjne oraz wzrost znaczenia zdrowego stylu życia.'
      }
    ]
  },
  {
    id: 'rynek-turystyczny-elementy',
    track: 'wszyscy',
    category: 'turystyka',
    number: 50,
    title: 'Rynek turystyczny i jego elementy (popyt, podaż, cena)',
    summary: 'Rynek turystyczny to system wymiany usług między dostawcami a turystami, którego elementami są popyt, podaż i cena.',
    wiki: [
      {
        heading: 'Pojęcie rynku turystycznego',
        body: 'Rynek turystyczny to system, w którym współpracują ze sobą firmy oferujące usługi turystyczne (biura podróży, hotele, linie lotnicze) z turystami będącymi ich konsumentami. Jego celem jest wymiana dóbr i usług związanych z podróżowaniem, wypoczynkiem i rekreacją.'
      },
      {
        heading: 'Popyt turystyczny',
        body: 'Popyt turystyczny to chęć i możliwość ludzi do zakupu usług turystycznych.',
        bullets: [
          'Dochody ludności (im wyższe, tym większy popyt)',
          'Czas wolny (urlopy, ferie, wakacje)',
          'Moda i trendy (podróże egzotyczne, city break)',
          'Czynniki psychologiczne i społeczne (potrzeba odpoczynku, prestiż)',
          'Sytuacja polityczna i bezpieczeństwo'
        ]
      },
      {
        heading: 'Podaż turystyczna',
        body: 'Podaż turystyczna to wszystkie dobra i usługi oferowane turystom: miejsca noclegowe, transport, usługi gastronomiczne, atrakcje turystyczne, usługi organizacyjne.',
        bullets: [
          'Sezonowość (większa podaż w sezonie letnim)',
          'Zróżnicowanie jakościowe i cenowe',
          'Ograniczona elastyczność (trudno szybko zwiększyć liczbę miejsc w hotelu czy samolocie)'
        ]
      },
      {
        heading: 'Cena usług turystycznych',
        body: 'Cena to wartość, jaką turysta płaci za usługę. Wpływ na nią mają: relacja popytu i podaży, sezon turystyczny (szczyt sezonu = drożej), standard i jakość usług, lokalizacja oraz polityka cenowa organizatora (last minute, first minute, promocje).'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który czynnik NIE należy do czynników wpływających na popyt turystyczny?',
        options: [
          'Dochody ludności',
          'Czas wolny',
          'Sezonowość podaży miejsc noclegowych',
          'Moda i trendy'
        ],
        correct: 2,
        explain: 'Sezonowość jest cechą podaży turystycznej, a nie czynnikiem popytu. Popyt zależy m.in. od dochodów, czasu wolnego oraz mody i trendów.'
      },
      {
        type: 'tf',
        q: 'Podaż turystyczna charakteryzuje się bardzo dużą elastycznością, bo usługi można natychmiast dostosować do popytu.',
        correct: false,
        explain: 'Przeciwnie — podaż turystyczna jest mało elastyczna w krótkim czasie; liczby miejsc w hotelu czy samolocie nie da się szybko zwiększyć.'
      },
      {
        type: 'flash',
        front: 'Wymień trzy podstawowe elementy rynku turystycznego.',
        back: 'Popyt turystyczny, podaż turystyczna oraz cena usług turystycznych.'
      }
    ]
  },
  {
    id: 'ekonomiczne-znaczenie-turystyki',
    track: 'wszyscy',
    category: 'turystyka',
    number: 51,
    title: 'Ekonomiczne znaczenie turystyki i rekreacji',
    summary: 'Turystyka i rekreacja generują dochody, miejsca pracy, inwestycje i wspierają lokalne społeczności oraz bilans płatniczy państwa.',
    wiki: [
      {
        heading: 'Rola w gospodarce',
        body: 'Turystyka i rekreacja odgrywają ważną rolę w gospodarce, wpływając na różne sektory i poziomy życia społeczno-gospodarczego.'
      },
      {
        heading: 'Główne funkcje ekonomiczne',
        bullets: [
          'Źródło dochodów dla gospodarki (usługi, podatki) - np. Hiszpania, Tajlandia',
          'Tworzenie miejsc pracy, w tym sezonowych i okazjonalnych',
          'Wspieranie lokalnych społeczności (rzemiosło, rolnictwo, agroturystyka)',
          'Pobudzanie inwestycji i modernizacja infrastruktury (drogi, lotniska, dworce)',
          'Zróżnicowanie gospodarki - alternatywa dla przemysłu lub rolnictwa',
          'Poprawa bilansu płatniczego dzięki wpływom z turystyki zagranicznej',
          'Rozwój rekreacji jako sektora usług (siłownie, spa, aquaparki)'
        ]
      },
      {
        heading: 'Wpływ na bilans płatniczy',
        body: 'Wpływy z turystyki zagranicznej poprawiają saldo eksportu usług - turyści zostawiają pieniądze w odwiedzanym kraju, a turyści krajowi wspierają rodzimy rynek usług.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'W jaki sposób turystyka zagraniczna wpływa na bilans płatniczy państwa?',
        options: [
          'Poprawia saldo eksportu usług, bo turyści zostawiają pieniądze w kraju',
          'Pogarsza saldo, bo turyści wywożą pieniądze za granicę',
          'Nie ma żadnego wpływu na bilans płatniczy',
          'Zwiększa wyłącznie import towarów'
        ],
        correct: 0,
        explain: 'Wpływy z turystyki zagranicznej poprawiają saldo eksportu usług, ponieważ turyści wydają pieniądze w odwiedzanym kraju.'
      },
      {
        type: 'tf',
        q: 'Turystyka może być alternatywą dla przemysłu lub rolnictwa, zwłaszcza w regionach górskich i nadmorskich.',
        correct: true,
        explain: 'Turystyka różnicuje gospodarkę i pomaga regionom uniezależnić się od jednego sektora.'
      },
      {
        type: 'flash',
        front: 'Podaj główne funkcje ekonomiczne turystyki i rekreacji.',
        back: 'Źródło dochodów, tworzenie miejsc pracy, wspieranie lokalnych społeczności, pobudzanie inwestycji, zróżnicowanie gospodarki, poprawa bilansu płatniczego oraz rozwój rekreacji jako sektora usług.'
      }
    ]
  },
  {
    id: 'wirtualna-rzeczywistosc-turystyka',
    track: 'wszyscy',
    category: 'technologie',
    number: 52,
    title: 'Wirtualna rzeczywistość (VR) i jej wykorzystanie w turystyce',
    summary: 'VR pozwala przenieść użytkownika do wygenerowanego świata i znajduje zastosowanie w wirtualnym zwiedzaniu, prezentacji hoteli, marketingu oraz treningu rekreacyjnym.',
    wiki: [
      {
        heading: 'Czym jest VR',
        body: 'Wirtualna rzeczywistość (VR) to technologia, która pozwala użytkownikowi przenieść się do wygenerowanego świata - odwzorowującego rzeczywistość lub całkowicie fikcyjnego. Dzięki goglom VR, kontrolerom ruchu i sensorom użytkownik może oglądać, poruszać się i wchodzić w interakcje z tym światem w sposób realistyczny.'
      },
      {
        heading: 'VR w turystyce',
        bullets: [
          'Wirtualne wycieczki po atrakcjach (muzea, miasta, zabytki)',
          'Wirtualna prezentacja hoteli i kurortów przed rezerwacją (spacery po pokojach)',
          'Reklama i marketing turystyczny regionów i państw (np. Visit Dubai VR)'
        ]
      },
      {
        heading: 'VR w rekreacji',
        bullets: [
          'Wirtualny trening i ćwiczenia (FitXR, Supernatural - boks, taniec, joga)',
          'Symulatory sportowe (narty, wspinaczka, golf, pływanie)',
          'Gry i zabawy rekreacyjne w centrach VR (strzelnica, escape room, wyścigi)'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który z poniższych to przykład wykorzystania VR w turystyce?',
        options: [
          'Drukowanie papierowych folderów reklamowych',
          'Wirtualny spacer po pokojach hotelu przed rezerwacją',
          'Tradycyjna wycieczka autokarowa',
          'Telefoniczna rezerwacja noclegu'
        ],
        correct: 1,
        explain: 'Hotele i biura podróży udostępniają wirtualne spacery po pokojach i kurortach przed rezerwacją - to typowe zastosowanie VR w turystyce.'
      },
      {
        type: 'tf',
        q: 'VR umożliwia użytkownikowi interakcję z wygenerowanym światem dzięki goglom, kontrolerom ruchu i sensorom.',
        correct: true,
        explain: 'To podstawowa charakterystyka technologii VR opisana w materiale.'
      },
      {
        type: 'flash',
        front: 'Podaj trzy zastosowania VR w turystyce.',
        back: 'Wirtualne wycieczki po atrakcjach (muzea, zabytki), wirtualna prezentacja hoteli i kurortów przed rezerwacją oraz reklama i marketing turystyczny regionów (np. Visit Dubai VR).'
      }
    ]
  },
  {
    id: 'szlaki-turystyczne',
    track: 'wszyscy',
    category: 'turystyka',
    number: 53,
    title: 'Szlaki turystyczne jako specyficzny produkt krajoznawczy',
    summary: 'Szlaki turystyczne to oznakowane trasy prowadzące przez ciekawe miejsca; są produktem otwartym, łączącym walory przyrodnicze, kulturowe i edukacyjne.',
    wiki: [
      {
        heading: 'Pojęcie i rodzaje',
        body: 'Szlaki turystyczne to wyznaczone w terenie trasy prowadzące przez ciekawe miejsca przyrodnicze, historyczne lub kulturowe. Są oznaczone specjalnymi symbolami (kolorami, znakami) i służą bezpiecznemu oraz atrakcyjnemu poruszaniu się po danym obszarze.',
        bullets: [
          'Piesze (górskie, nizinne)',
          'Rowerowe',
          'Konne',
          'Kajakowe',
          'Narciarskie',
          'Tematyczne (szlak zamków gotyckich, szlak papieski)'
        ]
      },
      {
        heading: 'Dlaczego są specyficznym produktem krajoznawczym',
        bullets: [
          'Łączą walory przyrodnicze, kulturowe i edukacyjne, pozwalając aktywnie poznawać region',
          'Są produktem otwartym - nie wymagają zakupu, często bezpłatne i samodzielne',
          'Tworzą spójną, zorganizowaną ofertę turystyczną (aplikacje, przewodniki)',
          'Pobudzają rozwój lokalnych usług (noclegi, gastronomia, informacja turystyczna)',
          'Mają znaczenie edukacyjne i proekologiczne, często prowadzą przez obszary chronione'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Dlaczego szlak turystyczny uznaje się za "produkt otwarty"?',
        options: [
          'Bo zawsze wymaga wykupienia biletu wstępu',
          'Bo można z niego korzystać tylko z przewodnikiem',
          'Bo jest dostępny wyłącznie sezonowo',
          'Bo nie wymaga zakupu i często można korzystać z niego samodzielnie i bezpłatnie'
        ],
        correct: 3,
        explain: 'Szlak jest produktem otwartym, ponieważ nie wymaga zakupu - turyści korzystają z niego samodzielnie, bez przewodnika i często bezpłatnie.'
      },
      {
        type: 'tf',
        q: 'Szlaki turystyczne mogą mieć charakter tematyczny, np. szlak zamków gotyckich czy szlak papieski.',
        correct: true,
        explain: 'Szlaki tematyczne to jeden z rodzajów szlaków wymienionych w materiale.'
      },
      {
        type: 'flash',
        front: 'Wymień rodzaje szlaków turystycznych.',
        back: 'Piesze (górskie, nizinne), rowerowe, konne, kajakowe, narciarskie oraz tematyczne (np. szlak zamków gotyckich, szlak papieski).'
      }
    ]
  },
  {
    id: 'walory-krajobrazowe-unesco',
    track: 'wszyscy',
    category: 'przyroda',
    number: 56,
    title: 'Klasyfikacja walorów krajobrazowych Polski (z uwzględnieniem UNESCO)',
    summary: 'Walory krajobrazowe dzielą się na przyrodnicze i kulturowe; Polska ma 17 obiektów na Liście Światowego Dziedzictwa UNESCO i 11 rezerwatów biosfery.',
    wiki: [
      {
        heading: 'Pojęcie i podział walorów',
        body: 'Walory krajobrazowe (krajoznawcze) to cechy środowiska przyrodniczego i kulturowego decydujące o atrakcyjności obszaru. Dzieli się je na walory przyrodnicze (ukształtowanie terenu, szata roślinna, świat zwierząt, wody, zjawiska geologiczne) oraz walory kulturowe/antropogeniczne (zabytki architektury, układy urbanistyczne, obiekty przemysłowe, miejsca historyczne, krajobrazy kulturowe).'
      },
      {
        heading: 'Walory przyrodnicze Polski',
        bullets: [
          'Krajobrazy nadmorskie - wybrzeże Bałtyku, ruchome wydmy, klify, mierzeje',
          'Krajobrazy pojezierne - Pojezierze Mazurskie i Pomorskie, jeziora polodowcowe, moreny',
          'Krajobrazy nizinne - równiny, doliny rzeczne (Wisła, Biebrza), bagna i torfowiska',
          'Krajobrazy wyżynne - lessowe wąwozy, ostańce wapienne, jaskinie (Wyżyna Krakowsko-Częstochowska)',
          'Krajobrazy górskie - Tatry, Bieszczady, Karkonosze, duże deniwelacje i piętrowość'
        ]
      },
      {
        heading: 'Obiekty UNESCO w Polsce',
        body: 'Polska posiada 17 obiektów na Liście Światowego Dziedzictwa UNESCO: 15 kulturowych i 2 przyrodnicze.',
        bullets: [
          'Kulturowe m.in.: Historyczne Centrum Krakowa, kopalnie soli w Wieliczce i Bochni, Auschwitz-Birkenau, Stare Miasto w Warszawie i Zamościu, Zamek w Malborku, Toruń, Kalwaria Zebrzydowska, Kościoły Pokoju, Hala Stulecia, Tarnowskie Góry, Krzemionki',
          'Przyrodnicze: Puszcza Białowieska (ostoja żubra) oraz pierwotne i stare lasy bukowe Karpat'
        ]
      },
      {
        heading: 'Rezerwaty biosfery UNESCO',
        body: 'W ramach programu "Czlowiek i Biosfera" (MAB) Polska posiada 11 rezerwatów biosfery łączących ochronę przyrody ze zrównoważonym rozwojem, m.in. Białowieża, Babia Góra, Tatry, Karkonosze, Słowiński, Bory Tucholskie, Roztocze, Karpaty Wschodnie, Kampinos.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ile obiektów przyrodniczych z Polski znajduje się na Liście Światowego Dziedzictwa UNESCO?',
        options: [
          '15 obiektów',
          '11 obiektów',
          '2 obiekty (Puszcza Białowieska oraz lasy bukowe Karpat)',
          '17 obiektów'
        ],
        correct: 2,
        explain: 'Z 17 polskich obiektów UNESCO 15 jest kulturowych, a tylko 2 przyrodnicze: Puszcza Białowieska oraz pierwotne i stare lasy bukowe Karpat.'
      },
      {
        type: 'tf',
        q: 'Rezerwaty biosfery UNESCO funkcjonują w ramach konwencji ramsarskiej i służą wyłącznie ochronie obszarów wodno-błotnych.',
        correct: false,
        explain: 'Rezerwaty biosfery działają w ramach programu „Człowiek i Biosfera” (MAB) i łączą ochronę przyrody ze zrównoważonym rozwojem; konwencja ramsarska dotyczy odrębnie obszarów wodno-błotnych.'
      },
      {
        type: 'flash',
        front: 'Na jakie dwie główne grupy dzielimy walory krajobrazowe Polski?',
        back: 'Na walory przyrodnicze (ukształtowanie terenu, szata roślinna, świat zwierząt, wody, zjawiska geologiczne) oraz walory kulturowe/antropogeniczne (zabytki, układy urbanistyczne, obiekty przemysłowe, miejsca historyczne, krajobrazy kulturowe).'
      }
    ]
  },
  {
    id: 'przyrodnicze-walory-polski',
    track: 'wszyscy',
    category: 'przyroda',
    number: 57,
    title: 'Przyrodnicze walory Polski',
    summary: 'Polska ma zróżnicowane walory przyrodnicze: 23 parki narodowe, góry, pojezierza, wybrzeże Bałtyku, rzeki, puszcze oraz bogatą bioróżnorodność.',
    wiki: [
      {
        heading: 'Pojęcie walorów przyrodniczych',
        body: 'Walory przyrodnicze to naturalne elementy środowiska będące przedmiotem zainteresowania turysty, powstałe niezależnie od działań człowieka. Obejmują klimat, ukształtowanie terenu, wody, bogactwa naturalne, rośliny i świat zwierząt.'
      },
      {
        heading: 'Parki narodowe i góry',
        bullets: [
          'W Polsce są 23 parki narodowe',
          'Białowieski PN - ostatni naturalny las nizinny w UE, UNESCO, chroni żubra',
          'Tatrzański PN - najwyższe góry, doliny i jeziora polodowcowe (Morskie Oko)',
          'Biebrzański PN - największy PN, rzeka Biebrza, bagna i torfowiska',
          'Karpaty (Tatry z Rysami, Bieszczady) i Sudety (Śnieżka, Góry Stołowe)'
        ]
      },
      {
        heading: 'Wody i pojezierza',
        bullets: [
          'Pojezierze Mazurskie (Śniardwy, Mamry) i Pomorskie',
          'Wybrzeże Bałtyku ok. 510 km - Słowiński PN (ruchome wydmy), Mierzeja Helska',
          'Rzeki: Wisła (najdłuższa, korytarz ekologiczny), Dunajec (przełom w Pieninach)'
        ]
      },
      {
        heading: 'Lasy, formacje skalne i bioróżnorodność',
        bullets: [
          'Puszcze: Białowieska, Kampinoska, Augustowska',
          'Formacje skalne i jaskinie: Wyżyna Krakowsko-Częstochowska, Jaskinia Niedźwiedzia',
          'Bagna i mokradła: Bagna Biebrzańskie, Poleski PN',
          'Bioróżnorodność: żubry, wilki, rysie, niedźwiedzie brunatne, ponad 400 gatunków ptaków'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ile parków narodowych znajduje się w Polsce?',
        options: ['11', '23', '17', '40'],
        correct: 1,
        explain: 'W Polsce znajdują się 23 parki narodowe chroniące unikalne ekosystemy i krajobrazy.'
      },
      {
        type: 'tf',
        q: 'Tatrzański Park Narodowy jest największym parkiem narodowym w Polsce.',
        correct: false,
        explain: 'Największy jest Biebrzański Park Narodowy (rozległe bagna i torfowiska będące siedliskiem wielu ptaków), a nie Tatrzański.'
      },
      {
        type: 'flash',
        front: 'Z czego znany jest Słowiński Park Narodowy?',
        back: 'Z ruchomych wydm, które przemieszczają się pod wpływem wiatru; leży na wybrzeżu Bałtyku.'
      }
    ]
  },
  {
    id: 'style-historyczne-zabytki',
    track: 'wszyscy',
    category: 'historia',
    number: 58,
    title: 'Rozwój stylów historycznych na zabytkach Poznania (Trakt Królewsko-Cesarski)',
    summary: 'Trakt Królewsko-Cesarski w Poznaniu to przestrzenny zapis ewolucji stylów: od architektury przedromańskiej i gotyku po renesans, barok, klasycyzm, historyzm i modernizm.',
    wiki: [
      {
        heading: 'Architektura przedromańska, romańska i gotyk',
        body: 'Najstarsze zabytki na Ostrowie Tumskim wiążą się z chrystianizacją i Piastami: Palatium Mieszka I i kaplica Dobrawy (styl przedromański, surowość, łupany kamień - opus emplectum) oraz przedromańska i romańska bazylika w podziemiach katedry (masywność, monumentalizm). Gotyk (XIII-XVI w.) reprezentuje ceglana katedra na Ostrowie Tumskim - łuki ostre, sklepienia krzyżowo-żebrowe i gwiaździste, wąskie okna - oraz Psałteria (schodkowy szczyt z blendami) i Zamek Królewski na Wzgórzu Przemysła.'
      },
      {
        heading: 'Renesans i barok',
        bullets: [
          'Renesans (XVI w.) - Ratusz Jana Baptysty Quadro z loggią arkadową i attyką, Akademia Lubrańskiego, Pałac Górków',
          'Cechy renesansu: harmonia, symetria, horyzontalizm, proporcje antyczne',
          'Barok (XVII-XVIII w.) - Fara Poznańska (Jezuici, pseudokorynckie kolumny, freski Dankwarta), kościół św. Antoniego',
          'Cechy baroku: dynamizm, teatralność, iluzjonizm, theatrum sacrum'
        ]
      },
      {
        heading: 'Klasycyzm, rokoko i historyzm',
        bullets: [
          'Klasycyzm (XVIII w.) - Odwach (portyk toskański) i Pałac Działyńskich (tympanon)',
          'Rokoko - detale rzeźbiarskie, motyw muszli (rocaille), lekkość, złocenia',
          'Historyzm (XIX-XX w.) w Dzielnicy Cesarskiej - Zamek Cesarski (neoromanizm), Teatr Wielki (neoklasycyzm), Collegium Minus (neorenesans), Złota Kaplica (neobizantynizm)'
        ]
      },
      {
        heading: 'Modernizm i postmodernizm',
        body: 'Modernizm reprezentuje Okrąglak (Marek Leykam, 1948-1954) - walec z betonowych prefabrykatów, zasada "forma wynika z funkcji". Postmodernizm/dekonstruktywizm to Brama Poznania ICHB (2014) - betonowy sześcian "przecięty" przeszkloną szczeliną kadrującą widok na gotycką katedrę, dialog współczesności z historią.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'W jakim stylu architekt Jan Baptysta Quadro przebudował poznański Ratusz?',
        options: ['Gotyk', 'Barok', 'Renesans', 'Klasycyzm'],
        correct: 2,
        explain: 'Ratusz uchodzi za jedno z najwspanialszych dzieł renesansu na północ od Alp; Quadro dodał trójkondygnacyjną loggię arkadową i attykę.'
      },
      {
        type: 'tf',
        q: 'Zamek Cesarski w Poznaniu zbudowano w stylu gotyckim, wzorując się na średniowiecznych katedrach.',
        correct: false,
        explain: 'Zamek Cesarski (proj. Franz Schwechten, 1910) powstał w stylu neoromańskim, by nawiązać do tradycji cesarskiej i legitymizować pruskie panowanie — nie w gotyku.'
      },
      {
        type: 'flash',
        front: 'Jakie cechy stylu gotyckiego widać w katedrze na Ostrowie Tumskim?',
        back: 'Czerwona cegła (gotyk ceglany), strzeliste łuki ostre, sklepienia krzyżowo-żebrowe i gwiaździste oraz wysokie, wąskie okna z witrażami.'
      }
    ]
  },
  {
    id: 'planowanie-przestrzenne',
    track: 'wszyscy',
    category: 'historia',
    number: 59,
    title: 'System planowania przestrzennego w Polsce',
    summary: 'To trójstopniowy, hierarchiczny system kształtowania przestrzeni dla ochrony ładu przestrzennego i zrównoważonego rozwoju; kluczowy jest poziom gminny i władztwo planistyczne.',
    wiki: [
      {
        heading: 'Istota i cele',
        body: 'System planowania przestrzennego to zespół narzędzi prawnych, instytucjonalnych i organizacyjnych służących zrównoważonemu kształtowaniu przestrzeni. Głównym celem jest ochrona ładu przestrzennego i zrównoważonego rozwoju. Podstawą prawną jest ustawa z 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym.'
      },
      {
        heading: 'Struktura hierarchiczna (trójstopniowa)',
        bullets: [
          'Poziom krajowy - dokument strategiczny (osie rozwoju, sieć osadnicza, korytarze transportowe), nie jest aktem prawa miejscowego',
          'Poziom regionalny - Plan zagospodarowania przestrzennego województwa (PZPW), uchwala sejmik, nie wiąże właścicieli nieruchomości',
          'Poziom lokalny (gminny) - kluczowy, tu zapadają decyzje wiążące dla obywatela',
          'Zasada hierarchicznej zgodności - dokumenty niższego szczebla nie mogą być sprzeczne z wyższymi'
        ]
      },
      {
        heading: 'Akty na poziomie gminy (po reformie 2023)',
        bullets: [
          'Plan Ogólny Gminy - akt prawa miejscowego, obowiązkowy, dzieli gminę na strefy planistyczne (zastąpił dawne Studium)',
          'Miejscowy Plan Zagospodarowania Przestrzennego (MPZP) - akt prawa miejscowego, fakultatywny, podstawa pozwoleń na budowę',
          'Zintegrowany Plan Inwestycyjny (ZPI) - szczególna forma MPZP w ramach partnerstwa publiczno-prywatnego',
          'Gmina ma władztwo planistyczne - autonomiczne prawo kształtowania polityki przestrzennej'
        ]
      },
      {
        heading: 'Dualizm systemu i problemy',
        body: 'Gdy nie ma MPZP, inwestor występuje o decyzję o Warunkach Zabudowy (WZ) opartą na zasadzie dobrego sąsiedztwa. Nadużywanie decyzji WZ prowadziło do rozlewania się miast (urban sprawl) i chaosu przestrzennego. Główne problemy: niski stopień pokrycia kraju planami (ok. 30-35%), koszty finansowe gmin, chaos przestrzenny i konflikty funkcji.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Na jakiej podstawie inwestor może budować, gdy na danym terenie nie ma uchwalonego MPZP?',
        options: [
          'Na podstawie Planu zagospodarowania przestrzennego województwa',
          'Na podstawie decyzji o Warunkach Zabudowy (WZ) i zasady dobrego sąsiedztwa',
          'Na podstawie koncepcji rozwoju kraju',
          'Bez żadnego dokumentu administracyjnego'
        ],
        correct: 1,
        explain: 'W braku MPZP stosuje się ścieżkę decyzyjną - decyzję o Warunkach Zabudowy opartą na zasadzie dobrego sąsiedztwa (analiza urbanistyczna).'
      },
      {
        type: 'tf',
        q: 'Władztwo planistyczne oznacza, że to wojewoda (administracja rządowa) decyduje o przeznaczeniu gruntów w gminie.',
        correct: false,
        explain: 'Władztwo planistyczne przysługuje samorządowi gminnemu — to gmina, nie wojewoda, autonomicznie decyduje o polityce przestrzennej na swoim obszarze.'
      },
      {
        type: 'flash',
        front: 'Jakie trzy akty planistyczne funkcjonują na poziomie gminy po reformie z 2023 r.?',
        back: 'Plan Ogólny Gminy (zastąpił Studium), Miejscowy Plan Zagospodarowania Przestrzennego (MPZP) oraz Zintegrowany Plan Inwestycyjny (ZPI).'
      }
    ]
  },
  {
    id: 'zagospodarowanie-turystyczne-formy',
    track: 'wszyscy',
    category: 'turystyka',
    number: 60,
    title: 'Zagospodarowanie turystyczne ze względu na formy turystyki',
    summary: 'Zagospodarowanie turystyczne to ogół obiektów i urządzeń obsługi ruchu turystycznego, dostosowany do potrzeb różnych form turystyki.',
    wiki: [
      {
        heading: 'Pojęcie',
        body: 'Zagospodarowanie turystyczne to ogół obiektów i urządzeń służących obsłudze ruchu turystycznego, dostosowany do potrzeb różnych form turystyki. Infrastruktura i usługi różnią się zakresem, funkcją oraz lokalizacją.'
      },
      {
        heading: 'Formy turystyki i ich zaplecze',
        bullets: [
          'Turystyka kulturowa - muzea, galerie, zabytki, trasy tematyczne, przewodnicy miejscy',
          'Turystyka miejska - baza noclegowa, restauracje, kluby, komunikacja miejska, obiekty rozrywki',
          'Turystyka biznesowa - centra kongresowe, sale konferencyjne, hotele średniej i wysokiej klasy',
          'Turystyka religijna - obiekty sakralne, domy pielgrzyma, punkty obsługi, parkingi',
          'Agroturystyka - pokoje gościnne, domy wiejskie, warsztaty, produkty regionalne',
          'Turystyka przyrodnicza - ścieżki edukacyjne, wieże widokowe, tablice, ograniczona baza (kempingi, schroniska)',
          'Turystyka aktywna i przygodowa - oznakowanie szlaków, punkty ratunkowe, wypożyczalnie sprzętu, specjalistyczni przewodnicy'
        ]
      },
      {
        heading: 'Infrastruktura wspólna',
        body: 'Zagospodarowanie obejmuje również infrastrukturę wspólną: bazę noclegową, gastronomiczną, sanitarną, transportową oraz punkty informacyjne. Dobrze rozwinięte zaplecze zwiększa atrakcyjność regionu i sprzyja zrównoważonemu rozwojowi turystyki.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Jakie zaplecze jest charakterystyczne dla turystyki biznesowej?',
        options: [
          'Ścieżki edukacyjne i wieże widokowe',
          'Domy pielgrzyma i obiekty sakralne',
          'Centra kongresowe, sale konferencyjne i hotele średniej oraz wysokiej klasy',
          'Pokoje gościnne w gospodarstwach rolnych'
        ],
        correct: 2,
        explain: 'Turystyka biznesowa wymaga infrastruktury konferencyjnej (hale, sale, centra kongresowe) oraz hoteli średniej i wysokiej klasy.'
      },
      {
        type: 'tf',
        q: 'Turystyka przyrodnicza wymaga m.in. tworzenia ścieżek edukacyjnych, punktów obserwacyjnych i ograniczonej bazy noclegowej jak kempingi czy schroniska.',
        correct: true,
        explain: 'Turystyka przyrodnicza odbywa się na obszarach chronionych i wymaga infrastruktury ochrony przyrody oraz ograniczonej bazy noclegowej.'
      },
      {
        type: 'flash',
        front: 'Co obejmuje infrastruktura wspólna w zagospodarowaniu turystycznym?',
        back: 'Bazę noclegową, gastronomiczną, sanitarną, transportową oraz punkty informacyjne - wspólne dla różnych form turystyki.'
      }
    ]
  }
]
