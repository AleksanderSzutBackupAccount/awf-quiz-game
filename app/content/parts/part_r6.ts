import type { Topic } from '../types'

export const partR6: Topic[] = [
  {
    id: 'rek-zabawy-kreglarskie',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 26,
    title: 'Zabawy kręglarskie w rekreacji ruchowej',
    summary: 'Zabawy kręglarskie, takie jak Milionówka, Wyrzucany, Czarna kula, Gra rumuńska i Labinet, urozmaicają rekreację ruchową i często wywodzą się z treningu kręglarskiego.',
    wiki: [
      {
        heading: 'Milionówka i Wyrzucany',
        body: 'Milionówka bierze nazwę od maksymalnej liczby punktów możliwych do uzyskania (999 999, czyli prawie milion). Liczba uczestników jest dowolna, a każdy po wylosowaniu kolejności wykonuje sześć rzutów, kolejno po jednym, wpisując wynik do jednej z sześciu rubryk. Wygrywa ten, kto ułoży wynik najbliższy milionowi. W Wyrzucanym liczba graczy jest dowolna; każdy stara się uzyskać rezultat lepszy od poprzednika w kolejce, a wynik gorszego przeciwnika się skreśla. Po ustalonej liczbie skreśleń gracz odpada, a wygrywa ten, kto ma ich najmniej.'
      },
      {
        heading: 'Czarna kula i Gra rumuńska',
        body: 'Czarna kula stosowana jest głównie jako trening w grze do uliczek. Grają dwie pięcioosobowe drużyny, każda na jednym torze, a w połowie gry następuje zmiana torów; ustawia się układy trzech kręgli (np. 1, 2, 4 lub 1, 3, 6). Wygrywa drużyna, która straci najwięcej układów „trójek”, a nazwa pochodzi od poznańskiego klubu „Czarna kula”. Gra rumuńska, wylansowana przez kręglarzy rumuńskich na torach klasycznych jako trening do zbieranych, daje na strącenie dziewięciu kręgli maksymalnie sześć rzutów, lecz punkty przyznaje tylko za strącenie „dziewiątki” w najwyżej trzech rzutach; pozostałe rzuty powodują odliczanie.'
      },
      {
        heading: 'Labinet',
        body: 'W Labinecie liczba graczy jest nieograniczona, a każdy oddaje kolejno po jednym rzucie. Na początku każdy otrzymuje 50 punktów minusowych i stara się je odrobić, a następnie nadrobić punkty plusowe. Wygrywa zawodnik, który pierwszy osiągnie 50 punktów na plus, czyli łącznie 100 punktów.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Od czego pochodzi nazwa zabawy Milionówka?',
        options: [
          'Od liczby uczestników biorących udział w grze',
          'Od maksymalnej liczby punktów możliwych do uzyskania (999 999)',
          'Od liczby sześciu rzutów wykonywanych przez gracza',
          'Od nazwy klubu kręglarskiego, w którym powstała'
        ],
        correct: 1,
        explain: 'Nazwa pochodzi od maksymalnej liczby punktów (999 999, czyli prawie milion), jaką można zapisać w trakcie zabawy.'
      },
      {
        type: 'tf',
        q: 'W zabawie Labinet każdy gracz rozpoczyna od 50 punktów minusowych, a do zwycięstwa musi osiągnąć łącznie 100 punktów.',
        correct: true,
        explain: 'Grający startuje z 50 punktami minusowymi, odrabia je i nadrabia plusy; wygrywa pierwszy, kto osiągnie 50 plusów, czyli łącznie 100 punktów.'
      },
      {
        type: 'tf',
        q: 'W Czarnej kuli uczestniczą dwie dziesięcioosobowe drużyny grające bez zmiany torów.',
        correct: false,
        explain: 'W Czarnej kuli grają dwie pięcioosobowe drużyny, a w połowie gry następuje zmiana torów.'
      },
      {
        type: 'flash',
        front: 'Na czym polega Gra rumuńska?',
        back: 'To trening do zbieranych na torach klasycznych: na strącenie dziewięciu kręgli gracz ma maksymalnie sześć rzutów, ale punkty zdobywa tylko za strącenie „dziewiątki” w najwyżej trzech rzutach; pozostałe rzuty powodują odliczanie. Wygrywa zawodnik z najwyższą liczbą punktów.'
      }
    ]
  },
  {
    id: 'rek-zachowania-zdrowotne',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 27,
    title: 'Zachowania zdrowotne: prozdrowotne i ryzykowne',
    summary: 'Zachowania zdrowotne to działania i nawyki wpływające na zdrowie pozytywnie (prozdrowotne) lub negatywnie (ryzykowne), a o samym zdrowiu najsilniej decyduje styl życia.',
    wiki: [
      {
        heading: 'Pojęcie zdrowia i jego uwarunkowania',
        body: 'Zdrowie to nie tylko brak choroby czy kalectwa, ale stan pełnego dobrostanu fizycznego, umysłowego i społecznego. Obejmuje wymiary: fizyczny, psychiczny, społeczny, umysłowy, duchowy i seksualny. Na zdrowie najmocniej wpływa styl życia (50%), następnie czynniki genetyczne (20%), środowisko fizyczne i społeczne (20%) oraz służba zdrowia (10%). Kluczowe są też zdolność organizmu do utrzymania homeostazy oraz zasady salutogenezy, koncentrującej się na czynnikach sprzyjających zdrowiu.'
      },
      {
        heading: 'Zachowania prozdrowotne',
        bullets: [
          'aktywność fizyczna – regularne uprawianie sportu lub innej aktywności ruchowej',
          'zdrowe odżywianie – posiłki bogate w warzywa, owoce, produkty pełnoziarniste, chude białko i zdrowe tłuszcze',
          'unikanie używek oraz dbanie o higienę osobistą',
          'regularne profilaktyczne wizyty u lekarza',
          'wystarczająca ilość snu (7–8 h)',
          'radzenie sobie ze stresem poprzez techniki relaksacyjne i aktywność fizyczną'
        ]
      },
      {
        heading: 'Zachowania ryzykowne',
        bullets: [
          'palenie tytoniu i nadużywanie alkoholu',
          'niezdrowe odżywianie – dieta bogata w tłuszcze i cukry',
          'brak aktywności fizycznej oraz stosowanie używek',
          'zaniedbywanie zdrowia – brak wizyt u lekarza, ignorowanie objawów, samoleczenie',
          'nadmierny, długotrwały stres',
          'zbyt długie przesiadywanie z telefonem, komputerem lub telewizorem'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który czynnik w największym stopniu wpływa na zdrowie człowieka?',
        options: [
          'Styl życia (ok. 50%)',
          'Czynniki genetyczne (ok. 20%)',
          'Środowisko fizyczne i społeczne (ok. 20%)',
          'Służba zdrowia (ok. 10%)'
        ],
        correct: 0,
        explain: 'Według podanych proporcji styl życia odpowiada za około 50% wpływu na zdrowie, najwięcej spośród wszystkich czynników.'
      },
      {
        type: 'tf',
        q: 'Zbyt długie przesiadywanie z telefonem, komputerem lub telewizorem zaliczane jest do zachowań prozdrowotnych.',
        correct: false,
        explain: 'To zachowanie ryzykowne; do zachowań prozdrowotnych należą m.in. aktywność fizyczna, zdrowe odżywianie, unikanie używek i wystarczająca ilość snu (7–8 h).'
      },
      {
        type: 'tf',
        q: 'Salutogeneza koncentruje się głównie na poszukiwaniu czynników chorobotwórczych i przyczyn chorób.',
        correct: false,
        explain: 'Salutogeneza koncentruje się na poszukiwaniu czynników sprzyjających zdrowiu i budowaniu zasobów pomagających adaptować się do stresorów.'
      },
      {
        type: 'flash',
        front: 'Wymień przykładowe zachowania ryzykowne zagrażające zdrowiu.',
        back: 'Palenie tytoniu, nadużywanie alkoholu, niezdrowe odżywianie (dieta bogata w tłuszcze i cukry), brak aktywności fizycznej, stosowanie używek, zaniedbywanie zdrowia, nadmierny długotrwały stres oraz zbyt długie przesiadywanie z telefonem, komputerem lub telewizorem.'
      }
    ]
  },
  {
    id: 'rek-funkcje-rekreacji-niepelnosprawni',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 28,
    title: 'Funkcje rekreacji osób z niepełnosprawnością',
    summary: 'Rekreacja ruchowa osób z niepełnosprawnością pełni funkcje: leczniczą, pedagogiczno-psychologiczną, estetyczną, społeczną i ekonomiczną, co ilustrują konkretne formy zajęć.',
    wiki: [
      {
        heading: 'Funkcja lecznicza i pedagogiczno-psychologiczna',
        body: 'Funkcja lecznicza stanowi część programu leczniczego: poprawia ekonomikę wysiłku, obniża wydatek energetyczny przy czynnościach i bywa substytutem środków farmakologicznych bez skutków ubocznych – jak hipoterapia (terapeutyczna jazda konna), w której ruchy konia korygują postawę, równowagę, koordynację i zmniejszają spastyczność mięśni. Funkcja pedagogiczno-psychologiczna kształtuje więzi społeczne i normuje postępowanie w grupie; przykładem są Olimpiady Specjalne, których celem nie jest wyłonienie mistrza, lecz danie możliwości przeżycia własnego startu – każdy startujący jest zwycięzcą.'
      },
      {
        heading: 'Funkcja estetyczna i społeczna',
        body: 'Funkcja estetyczna usprawnia ruch i kształtuje jego estetykę, maskując dysfunkcję ruchową oraz zaspokajając potrzebę piękna i harmonii; przykładem są zajęcia taneczne dla osób na wózkach inwalidzkich. Funkcja społeczna daje możliwość kontaktu z innymi ludźmi i tworzy pozytywne postawy społeczne wobec osób z niepełnosprawnością; ilustruje ją hortiterapia – prace w ogrodzie dające korzyści fizyczne oraz społeczne, takie jak otwartość na kontakt, współdziałanie i akceptacja społeczna.'
      },
      {
        heading: 'Funkcja ekonomiczna',
        body: 'Funkcja ekonomiczna zwiększa potencjał aktywności poprzez ogólne usprawnienie fizyczne oraz ekonomikę usprawnienia ruchowego. Przykładem jest udział osób z niepełnosprawnością w programach aktywizacji zawodowej obejmujących zajęcia rekreacyjne, co poprawia kondycję fizyczną, a tym samym zwiększa zdolność do podjęcia pracy i samodzielnego funkcjonowania w społeczeństwie.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która funkcja rekreacji osób z niepełnosprawnością jest ilustrowana przykładem hipoterapii?',
        options: [
          'Funkcja społeczna',
          'Funkcja estetyczna',
          'Funkcja lecznicza',
          'Funkcja ekonomiczna'
        ],
        correct: 2,
        explain: 'Hipoterapia to przykład funkcji leczniczej – ruchy konia korygują postawę, równowagę i koordynację oraz zmniejszają spastyczność mięśni.'
      },
      {
        type: 'tf',
        q: 'Celem Olimpiad Specjalnych jest wyłonienie mistrza uzyskującego najlepsze wyniki w danej konkurencji.',
        correct: false,
        explain: 'Celem Olimpiad Specjalnych nie jest wyłonienie mistrza, lecz danie możliwości przeżycia własnego startu – każdy startujący jest zwycięzcą.'
      },
      {
        type: 'tf',
        q: 'Hortiterapia, czyli prace w ogrodzie, jest przykładem społecznej funkcji rekreacji.',
        correct: true,
        explain: 'Hortiterapia ilustruje funkcję społeczną – oprócz korzyści fizycznych daje otwartość na kontakt, współdziałanie i akceptację społeczną.'
      },
      {
        type: 'flash',
        front: 'Wymień podstawowe funkcje rekreacji osób z niepełnosprawnością.',
        back: 'Lecznicza, pedagogiczno-psychologiczna, estetyczna, społeczna oraz ekonomiczna.'
      }
    ]
  },
  {
    id: 'rek-zabawy-gry-zdolnosci-motoryczne',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 29,
    title: 'Zabawy i gry kształtujące zdolności motoryczne',
    summary: 'Różne rodzaje zabaw i gier ruchowych – ze śpiewem, orientacyjno-porządkowe, na czworakach, bieżne, rzutne, skoczne, kopne i słowne – kształtują wybrane zdolności motoryczne człowieka.',
    wiki: [
      {
        heading: 'Zabawy ze śpiewem oraz orientacyjno-porządkowe',
        body: 'Zabawy ze śpiewem interesują dzieci w wieku 3–8 lat i osoby starsze; harmonizują ruch z rytmem i tempem muzyki, wywołują uśmiech i mają walor integracyjny (np. „Nitka”), wspierając poczucie rytmu, równowagi i orientację w przestrzeni. Gry orientacyjno-porządkowe stosuje się w grupach dzieci młodszych; uczą skupienia uwagi, słuchania poleceń, zasad fair play i porozumiewania się znakami, kształtując szybką i celową reakcję, spostrzegawczość oraz orientację (np. „Złośliwy wąż”).'
      },
      {
        heading: 'Zabawy na czworakach, bieżne i rzutne',
        body: 'Zabawy na czworakach (np. „Pieski na spacer – pieski do domu”) stosuje się głównie u dzieci przedszkolnych i wczesnoszkolnych, bo sprzyjają kształtowaniu fizjologicznych krzywizn kręgosłupa, wzmacniają aparat kostno-stawowo-więzadłowy i siłę. Zabawy bieżne (np. „Lawina”) kształtują szybkość i wytrzymałość, a często też zręczność, i mogą być stosowane od wczesnej młodości do wieku podeszłego. Zabawy rzutne (np. „Zaganianie piłki świnki”) wymagają wstępnej nauki i rozwijają siłę, szybkość, koordynację oraz zręczność manualną.'
      },
      {
        heading: 'Zabawy skoczne, kopne i słowne',
        body: 'Zabawy skoczne opierają się na podskokach, skokach, wyskokach, przeskokach i doskokach (np. „Skoki konika”); rozwijają zwinność, szybkość i koordynację oraz wzmacniają stawy kończyn dolnych, lecz nie powinny być wykonywane przez osoby starsze. Zabawy kopne (np. „Piłkarska sztafeta wahadłowa”) interesują głównie chłopców i mężczyzn, kształtują zręczność, siłę i szybkość oraz angażują cały organizm poza kończynami górnymi. Zabawy słowne rozwijają kulturę słowa mówionego, angażują intelekt i można je łączyć z innymi grami ruchowymi.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Dlaczego zabawy i gry na czworakach stosuje się głównie u dzieci przedszkolnych i wczesnoszkolnych?',
        options: [
          'Ponieważ rozwijają przede wszystkim wytrzymałość biegową',
          'Ponieważ kształtują kulturę słowa mówionego',
          'Ponieważ harmonizują ruch z rytmem muzyki',
          'Ponieważ sprzyjają kształtowaniu fizjologicznych krzywizn kręgosłupa'
        ],
        correct: 3,
        explain: 'Zabawy na czworakach sprzyjają kształtowaniu fizjologicznych krzywizn kręgosłupa i prawidłowej postawy ciała oraz wzmacniają aparat kostno-stawowo-więzadłowy.'
      },
      {
        type: 'abcd',
        q: 'Które zdolności motoryczne kształtują przede wszystkim zabawy i gry bieżne?',
        options: [
          'Szybkość i wytrzymałość, a często też zręczność',
          'Wyłącznie siłę kończyn górnych',
          'Tylko poczucie rytmu',
          'Wyłącznie precyzję ruchów rzutu'
        ],
        correct: 0,
        explain: 'Zabawy i gry bieżne sprzyjają kształtowaniu szybkości i wytrzymałości, ale często też zręczności, w zależności od rodzaju zadania.'
      },
      {
        type: 'tf',
        q: 'Zabawy i gry skoczne są zalecane szczególnie dla osób w wieku starszym.',
        correct: false,
        explain: 'Zabawy skoczne wzmacniają sprawność głównie dzieci i młodzieży i nie powinny być wykonywane przez osoby w wieku starszym.'
      },
      {
        type: 'flash',
        front: 'Wymień rodzaje zabaw i gier ruchowych kształtujących zdolności motoryczne.',
        back: 'Zabawy ze śpiewem, orientacyjno-porządkowe, na czworakach, bieżne, rzutne, skoczne, kopne oraz słowne.'
      }
    ]
  },
  {
    id: 'rek-folklor-kaszuby',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 30,
    title: 'Folklor i region folklorystyczny – Kaszuby',
    summary: 'Folklor to ogół tradycji, wierzeń, obyczajów, pieśni, tańców i opowieści kultury ludowej danej społeczności, a jednym z bogatych regionów folklorystycznych w Polsce są Kaszuby.',
    wiki: [
      {
        heading: 'Pojęcie folkloru',
        body: 'Folklor to ogół tradycji, wierzeń, obyczajów, pieśni, tańców, opowieści i innych przejawów kultury ludowej charakterystycznych dla danej społeczności lub regionu. Jednym z bogatych regionów folklorystycznych w Polsce są Kaszuby, położone na Pomorzu.'
      },
      {
        heading: 'Folklor Kaszub',
        bullets: [
          'język kaszubski – odrębny język słowiański używany przez Kaszubów',
          'stroje ludowe – bogata ornamentyka i kolorystyka z charakterystycznymi haftami; niebieski związany z morzem, a także czerwony, żółty i czarny',
          'tańce i muzyka – m.in. taniec Wełtok (podobny do trojaka) oraz instrumenty ludowe, jak diabelskie skrzypce i burczybas (rodzaj bębna)',
          'legendy i podania – opowieści o morskich potworach i tajemniczych postaciach',
          'obrzędy i zwyczaje – związane z cyklem życia (chrzciny, wesela) i kalendarzem (sobótka, dożynki)',
          'sztuka ludowa i kuchnia – rzeźba w drewnie, haft, ceramika oraz potrawy z ryb, ziemniaków i kapusty'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który element najlepiej oddaje definicję folkloru?',
        options: [
          'Wyłącznie współczesna muzyka rozrywkowa danego kraju',
          'Ogół tradycji, wierzeń, obyczajów, pieśni, tańców i opowieści kultury ludowej',
          'Zbiór przepisów prawnych regulujących życie społeczności',
          'Zestaw dyscyplin sportowych uprawianych w danym regionie'
        ],
        correct: 1,
        explain: 'Folklor to ogół tradycji, wierzeń, obyczajów, pieśni, tańców, opowieści i innych przejawów kultury ludowej charakterystycznych dla danej społeczności lub regionu.'
      },
      {
        type: 'tf',
        q: 'Język kaszubski jest odrębnym językiem słowiańskim używanym przez Kaszubów.',
        correct: true,
        explain: 'W folklorze Kaszub wskazuje się język kaszubski jako odrębny język słowiański używany przez Kaszubów.'
      },
      {
        type: 'tf',
        q: 'Charakterystyczny dla kaszubskich strojów ludowych kolor niebieski jest związany z górami.',
        correct: false,
        explain: 'W kaszubskich strojach kolor niebieski związany jest z morzem; występują też czerwony, żółty i czarny.'
      },
      {
        type: 'flash',
        front: 'Podaj charakterystyczne elementy folkloru kaszubskiego.',
        back: 'Język kaszubski, stroje ludowe o bogatej ornamentyce, tańce i muzyka (taniec Wełtok, instrumenty: diabelskie skrzypce i burczybas), legendy i podania, obrzędy i zwyczaje, sztuka ludowa oraz kuchnia oparta na rybach, ziemniakach i kapuście.'
      }
    ]
  }
]
