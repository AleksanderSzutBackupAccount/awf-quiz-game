import type { Topic } from '../types'

export const partR1: Topic[] = [
  {
    id: 'rek-wskaznik-antropometryczny',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 1,
    title: 'Wskaźniki antropometryczne i ich zastosowanie',
    summary: 'Wskaźnik antropometryczny to stosunek dwóch lub więcej pomiarów ciała, który pozwala ocenić jego proporcje, stan odżywienia lub ryzyko chorób.',
    wiki: [
      {
        heading: 'Czym jest wskaźnik antropometryczny',
        body: 'Wskaźnik antropometryczny to stosunek dwóch lub więcej pomiarów ciała, które pozwalają ocenić proporcje ciała, stan odżywienia lub ryzyko chorób. Zasadą tworzenia wskaźników jest ustosunkowanie pomiaru o mniejszej liczbowo wartości do cechy o wartości większej.'
      },
      {
        heading: 'Wysokość ciała w ergonomii',
        body: 'Wysokość ciała to cecha wykorzystywana w ergonomii. Właściwości budowy ciała człowieka warunkują kształtowanie struktury przestrzennej miejsca pracy oraz jej elementów składowych: rozmiarów siedzisk i urządzeń pracowniczych oraz optymalnego rozmieszczenia tych elementów względem siebie i względem użytkownika. Pomiary antropometryczne opisują sylwetkę wyprostowaną (antropometria klasyczna: statyczna i dynamiczna) oraz naturalną, jaką przyjmuje człowiek podczas wykonywanej czynności (antropometria ergonomiczna).'
      },
      {
        heading: 'BMI (Indeks Masy Ciała)',
        body: 'BMI (Body Mass Index) to popularny wskaźnik, który pomaga ocenić proporcje masy ciała do wzrostu i jest stosunkowo łatwy w obliczeniach. Uzyskany wynik porównuje się z tabelą i kwalifikuje do jednej z czterech kategorii: niedowaga, waga prawidłowa, nadwaga lub otyłość.',
        bullets: [
          'ocena masy ciała',
          'rozpoznanie otyłości',
          'pomoc dla specjalistów w planowaniu diety i treningów'
        ]
      },
      {
        heading: 'Ograniczenia BMI',
        body: 'Przy BMI należy pamiętać, że nie rozróżnia on masy mięśniowej od masy tłuszczowej. Przez to wynik BMI osoby ćwiczącej profesjonalnie, na przykład kulturysty, może wskazywać otyłość, choć w rzeczywistości nią nie jest.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Do ilu kategorii kwalifikuje się wynik BMI?',
        options: ['Do trzech', 'Do pięciu', 'Do dwóch', 'Do czterech'],
        correct: 3,
        explain: 'Wynik BMI kwalifikuje się do jednej z czterech kategorii: niedowaga, waga prawidłowa, nadwaga lub otyłość.'
      },
      {
        type: 'tf',
        q: 'BMI rozróżnia masę mięśniową od masy tłuszczowej.',
        correct: false,
        explain: 'BMI nie rozróżnia masy mięśniowej od tłuszczowej, dlatego u kulturysty może błędnie wskazywać otyłość.'
      },
      {
        type: 'tf',
        q: 'Zasadą tworzenia wskaźników antropometrycznych jest ustosunkowanie pomiaru o mniejszej wartości liczbowej do cechy o wartości większej.',
        correct: true,
        explain: 'To właśnie ta zasada leży u podstaw konstruowania wskaźników antropometrycznych.'
      },
      {
        type: 'flash',
        front: 'Czym jest wskaźnik antropometryczny?',
        back: 'To stosunek dwóch lub więcej pomiarów ciała, pozwalający ocenić proporcje ciała, stan odżywienia lub ryzyko chorób.'
      }
    ]
  },
  {
    id: 'rek-nordic-walking-wszechstronnosc',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 2,
    title: 'Wszechstronność nordic walking',
    summary: 'Nordic walking jest wszechstronną formą aktywności, ponieważ angażuje niemal wszystkie mięśnie ciała, poprawia wydolność oraz wzmacnia stawy i kręgosłup.',
    wiki: [
      {
        heading: 'Dlaczego nordic walking jest wszechstronny',
        body: 'Nordic walking jest wszechstronną formą aktywności ruchowej, ponieważ angażuje niemal wszystkie mięśnie ciała, poprawia wydolność, wzmacnia stawy i kręgosłup, a także pozytywnie wpływa na samopoczucie. To kompleksowa forma aktywności, która przynosi liczne korzyści zdrowotne i może być uprawiana przez każdego, niezależnie od wieku czy poziomu sprawności.'
      },
      {
        heading: 'Główne korzyści',
        bullets: [
          'aktywacja mięśni — angażuje aż do 90% mięśni ciała, w tym rąk, barków, nóg i tułowia, znacznie więcej niż zwykły spacer',
          'poprawa wydolności tlenowej, pracy serca i układu krążenia oraz spalanie kalorii',
          'wzmocnienie stawów i kości — kijki odciążają stawy kolanowe i biodrowe, wzmacniając kości i zapobiegając osteoporozie',
          'poprawa koordynacji i równowagi dzięki skoordynowanemu ruchowi rąk i nóg',
          'redukcja stresu — ruch na świeżym powietrzu sprzyja produkcji endorfin'
        ]
      },
      {
        heading: 'Dostępność i rehabilitacja',
        body: 'Nordic walking jest odpowiedni dla osób w każdym wieku i o różnym poziomie sprawności, a jedyny potrzebny sprzęt to kije i wygodne buty. Może być również pomocny w procesie rehabilitacji po urazach lub operacjach, ponieważ odciąża stawy i pozwala na stopniowy powrót do aktywności fizycznej.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Jaki odsetek mięśni ciała angażuje nordic walking?',
        options: ['Aż do 90%', 'Około 50%', 'Aż do 70%', 'Około 30%'],
        correct: 0,
        explain: 'Nordic walking angażuje aż do 90% mięśni ciała, znacznie więcej niż zwykły spacer.'
      },
      {
        type: 'tf',
        q: 'Chodzenie z kijkami obciąża stawy kolanowe i biodrowe bardziej niż zwykły spacer.',
        correct: false,
        explain: 'Przeciwnie — kijki odciążają stawy kolanowe i biodrowe, jednocześnie wzmacniając kości.'
      },
      {
        type: 'tf',
        q: 'Nordic walking może być pomocny w procesie rehabilitacji po urazach lub operacjach.',
        correct: true,
        explain: 'Odciąża stawy i pozwala na stopniowy powrót do aktywności fizycznej, dlatego bywa wykorzystywany w rehabilitacji.'
      },
      {
        type: 'flash',
        front: 'Jaki sprzęt jest potrzebny do uprawiania nordic walking?',
        back: 'Jedynie kije do nordic walking oraz wygodne buty.'
      }
    ]
  },
  {
    id: 'rek-sport-zjawisko-spoleczne',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 3,
    title: 'Sport jako zjawisko społeczne',
    summary: 'Sport jest złożonym fenomenem kulturowo-społecznym, który od ponad 2000 lat towarzyszy relacjom społecznym i spełnia wiele funkcji.',
    wiki: [
      {
        heading: 'Sport w świetle ustawy o sporcie',
        body: 'Zgodnie z ustawą z dnia 25 czerwca 2010 r. o sporcie, sportem są wszelkie formy aktywności fizycznej, które przez uczestnictwo doraźne lub zorganizowane wpływają na wypracowanie lub poprawienie kondycji fizycznej i psychicznej, rozwój stosunków społecznych lub osiągnięcie wyników sportowych na wszelkich poziomach. Za sport uważa się również współzawodnictwo oparte na aktywności intelektualnej, którego celem jest osiągnięcie wyniku sportowego.'
      },
      {
        heading: 'Sport a kultura fizyczna',
        body: 'Sport wraz z wychowaniem fizycznym i rehabilitacją ruchową składa się na kulturę fizyczną, czyli ogół zachowań przebiegających według przyjętych w danym środowisku reguł i norm, mających na celu dbałość o zdrowie człowieka, poprawę jego postawy i prawidłowy rozwój psychofizyczny. Sport to z założenia pokojowe współzawodnictwo prowadzone zgodnie z zasadami fair play, rozwijające cechy osobowości, takie jak wytrwałość, silna wola, zdyscyplinowanie oraz poczucie solidarności i koleżeństwa.'
      },
      {
        heading: 'Funkcje i znaczenie społeczne',
        bullets: [
          'spełnia wiele funkcji: wychowawczą, integracyjną, zdrowotną, rozrywkową, edukacyjną i terapeutyczną',
          'jest ważnym czynnikiem integrującym różne środowiska społeczne o zasięgu lokalnym, regionalnym i międzynarodowym',
          'przyczynił się do rozwoju budownictwa sportowego oraz przemysłowej produkcji sprzętu',
          'od ponad 2000 lat towarzyszy relacjom społecznym i kulturowym, stając się ich nieodłączną częścią'
        ]
      },
      {
        heading: 'Sport jako przedmiot badań',
        body: 'Sport nie jest jedynie aktywnością fizyczną, lecz złożonym fenomenem kulturowo-społecznym. Analizowany jest przez wiele nauk społecznych i humanistycznych: socjologię, filozofię, psychologię, pedagogikę, historię, politologię, a nawet prawo i ekonomię. Filozofia sportu analizuje jego sens, wartości i bytowość (ontologia), a socjologia bada jego wpływ na strukturę społeczną, role społeczne i tożsamość jednostek.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które elementy razem ze sportem składają się na kulturę fizyczną?',
        options: ['Turystyka i rekreacja', 'Wychowanie fizyczne i rehabilitacja ruchowa', 'Edukacja i rozrywka', 'Polityka i ekonomia'],
        correct: 1,
        explain: 'Sport wraz z wychowaniem fizycznym i rehabilitacją ruchową składa się na kulturę fizyczną.'
      },
      {
        type: 'tf',
        q: 'Zgodnie z ustawą o sporcie za sport uważa się również współzawodnictwo oparte na aktywności intelektualnej.',
        correct: true,
        explain: 'Ustawa uznaje za sport współzawodnictwo intelektualne, którego celem jest osiągnięcie wyniku sportowego.'
      },
      {
        type: 'tf',
        q: 'Sport towarzyszy relacjom społecznym i kulturowym dopiero od około 200 lat.',
        correct: false,
        explain: 'Sport jest trwale wpisany w życie społeczne od ponad 2000 lat, a nie od 200 lat.'
      },
      {
        type: 'flash',
        front: 'Jakie nauki analizują zjawisko sportu?',
        back: 'Socjologia, filozofia, psychologia, pedagogika, historia, politologia, a nawet prawo i ekonomia.'
      }
    ]
  },
  {
    id: 'rek-narciarstwo-grupy-wiekowe',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 4,
    title: 'Nauczanie narciarstwa w różnych grupach wiekowych',
    summary: 'Zadania w nauce narciarstwa stopniuje się według wieku i poziomu uczestników — od zabawowego oswajania ze sprzętem u dzieci po spokojne, asekurowane ćwiczenia seniorów.',
    wiki: [
      {
        heading: 'Dzieci (3–12 lat)',
        body: 'Zajęcia rozpoczynają się oswojeniem ze sprzętem: chodzeniem w butach narciarskich, utrzymaniem równowagi i prostymi ślizgami w pług na płaskim terenie. Nauka odbywa się przez zabawę, z krótkimi seriami ćwiczeń (10–15 min) i częstymi przerwami. Trudność stopniuje się od niemal płaskiego terenu do bardzo łagodnych wzniesień, zawsze z asekuracją. Grupy są małe (4–6 osób), a ze względu na wrażliwość na zimno i słabiej rozwinięte mięśnie konieczne są ciepłe przerwy oraz lekki sprzęt.'
      },
      {
        heading: 'Młodzież (13–18 lat)',
        body: 'Nastolatki zaczynają od przypomnienia podstaw, przechodząc do ćwiczeń technicznych: płużnych skrętów, slalomu między pachołkami i muld. Nauka odbywa się na stokach zielonych i łatwych niebieskich, z naciskiem na kontrolę prędkości, samodzielne hamowanie i refleks. Po opanowaniu podstaw wprowadza się elementy współzawodnictwa, np. slalom na czas. Grupy liczą 6–10 osób.'
      },
      {
        heading: 'Dorośli (19–60 lat)',
        body: 'Lekcję rozpoczyna omówienie sprzętu i zasad bezpieczeństwa (numery GOPR), a następnie demonstracja podstaw: pozycji, trzymania kijków i wstawania z upadku. Ćwiczenia na śniegu prowadzi się stopniowo — od ześlizgu w pług po jazdę łukiem płużnym — z przerwami na stretching. Grupy są małe (4–6 osób), dobrane według kondycji i poziomu lęku, a metoda demonstracyjna i analityczna pozwala na logiczną rozbiórkę ruchu.'
      },
      {
        heading: 'Seniorzy (60+)',
        body: 'Zajęcia zaczynają się od łagodnej rozgrzewki stawów, a następnie spokojnych, powtarzanych ćwiczeń na łagodnym stoku, w tym ćwiczeń równowagi. Każdy ruch wykonuje się wolno, z asekuracją i przerwami na kontrolę pulsu oraz ogrzanie. Grupy są bardzo małe (2–4 osoby) lub zajęcia są indywidualne. Ze względu na wolniejszy czas reakcji i pogorszenie równowagi unika się gwałtownych ruchów i nadmiernej prędkości, a przerwy z ciepłymi napojami są obowiązkowe.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ilu osób liczą zwykle grupy seniorów (60+) na zajęciach narciarskich?',
        options: ['6–10 osób', '4–6 osób', '2–4 osoby lub zajęcia indywidualne', '10–15 osób'],
        correct: 2,
        explain: 'Grupy seniorów są bardzo małe — 2–4 osoby — lub zajęcia prowadzone są indywidualnie.'
      },
      {
        type: 'tf',
        q: 'U dzieci naukę narciarstwa prowadzi się głównie przez zabawę, z krótkimi seriami ćwiczeń i częstymi przerwami.',
        correct: true,
        explain: 'Dzieci uczą się przez zabawę, w krótkich seriach 10–15 min, z częstymi i ciepłymi przerwami.'
      },
      {
        type: 'tf',
        q: 'U seniorów ćwiczenia kładą nacisk na gwałtowne ruchy i jazdę z dużą prędkością.',
        correct: false,
        explain: 'U seniorów unika się gwałtownych ruchów i nadmiernej prędkości, stawiając na spokojne, asekurowane ćwiczenia.'
      },
      {
        type: 'flash',
        front: 'Na jakich stokach uczy się narciarstwa młodzież (13–18 lat)?',
        back: 'Na stokach zielonych i łatwych niebieskich, z naciskiem na kontrolę prędkości i samodzielne hamowanie.'
      }
    ]
  },
  {
    id: 'rek-gry-miejskie-produkt-turystyczny',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 5,
    title: 'Gry miejskie jako produkt turystyczny',
    summary: 'Gry miejskie to innowacyjna, aktywna alternatywa dla tradycyjnego zwiedzania z przewodnikiem, łącząca poznawanie miasta z integracją i wykonywaniem zadań.',
    wiki: [
      {
        heading: 'Czym są gry miejskie',
        body: 'Gry miejskie są wykorzystywane w branży turystycznej jako bardziej interesująca alternatywa dla tradycyjnego zwiedzania miasta z przewodnikiem. Zakładają aktywne zwiedzanie miasta, włączając w to integrację uczestników. Posługując się przygotowaną przez organizatora mapą z wyznaczoną trasą, uczestnicy mają za cel zdobycie jak największej liczby punktów za wykonane zadania. Gra może mieć bardzo różną formę, np. strategicznej rozgrywki, zabawy integracyjnej, survivalu czy poszukiwania skarbów.'
      },
      {
        heading: 'Przykłady poznańskich gier miejskich',
        bullets: [
          'gry nawiązujące do wydarzeń historycznych — o początkach Państwa Polskiego („Poznań poza Czasem”)',
          'gry o II wojnie światowej („Łamacze szyfrów”, „Enigma”, „Aresztuj Generała”, „Bitwa o Poznań”)',
          'gra o okresie stanu wojennego („Raport z oblężonego miasta”)',
          'gry związane z bieżącymi wydarzeniami, np. Mistrzostwami Europy w Piłce Nożnej 2012 („POZnań 2012”)'
        ]
      },
      {
        heading: 'Projekt „Zwiedzaj grając – graj zwiedzając”',
        body: 'Poznański zespół gramiejska.pl we współpracy z Poznańską Lokalną Organizacją Turystyczną realizuje projekt „Zwiedzaj grając – graj zwiedzając”. Oferta skierowana jest głównie do turystów, ale także do mieszkańców, by promować różne części miasta. Należą do niej m.in. „Pierwszy stopień poznania” (śladami zabytków Ostrowa Tumskiego i Śródki), „Czas patriotów” (szlakiem miejsc Powstania Wielkopolskiego) oraz „Poznań poza czasem” (w obrębie Traktu Królewsko-Cesarskiego).'
      },
      {
        heading: 'Atuty gier miejskich',
        body: 'Gry miejskie wkraczają w fazę dynamicznego rozwoju jako alternatywa dla zwiedzania z przewodnikiem. Rozwiązywanie zadań dodatkowo motywuje do dokładnego poznawania miejsc. Dodatkowym atutem jest zejście z uczęszczanych ścieżek oraz interakcje z lokalnymi mieszkańcami, co raczej nie jest możliwe przy tradycyjnym przewodniku. Dzięki dobrze zaprojektowanej grze miasto może wzmocnić swój przekaz o historii i współczesności.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Co jest głównym celem uczestników gry miejskiej?',
        options: ['Jak najszybsze ukończenie trasy', 'Spotkanie z przewodnikiem', 'Zdobycie jak największej liczby punktów za wykonane zadania', 'Zwiedzanie wyłącznie głównych zabytków'],
        correct: 2,
        explain: 'Uczestnicy, korzystając z mapy z wyznaczoną trasą, dążą do zdobycia jak największej liczby punktów za wykonane zadania.'
      },
      {
        type: 'tf',
        q: 'Gry miejskie umożliwiają zejście z uczęszczanych ścieżek oraz interakcje z lokalnymi mieszkańcami.',
        correct: true,
        explain: 'To jeden z atutów gier miejskich, trudny do osiągnięcia przy tradycyjnym zwiedzaniu z przewodnikiem.'
      },
      {
        type: 'tf',
        q: 'Projekt „Zwiedzaj grając – graj zwiedzając” jest skierowany wyłącznie do mieszkańców Poznania.',
        correct: false,
        explain: 'Oferta skierowana jest głównie do turystów, ale także do mieszkańców miasta.'
      },
      {
        type: 'flash',
        front: 'Jaką formę mogą przyjmować gry miejskie?',
        back: 'Np. strategicznej rozgrywki, zabawy integracyjnej, survivalu czy poszukiwania skarbów.'
      }
    ]
  }
]
