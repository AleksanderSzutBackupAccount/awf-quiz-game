import type { Topic } from '../types'

export const partR3: Topic[] = [
  {
    id: 'rek-cwiczenia-nadmierna-masa-ciala',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 11,
    title: 'Ćwiczenia i aktywność dla osób z nadmierną masą ciała',
    summary:
      'Najistotniejsze zasady doboru ćwiczeń oraz zalecane formy aktywności fizycznej dla osób z nadwagą i otyłością, od konsultacji lekarskiej po dobór wysiłku tlenowego.',
    wiki: [
      {
        heading: 'Definicja i ocena',
        body: 'Nadwaga i otyłość to nieprawidłowe lub nadmierne gromadzenie się tłuszczu, które stanowi zagrożenie dla zdrowia i zwiększa ryzyko wielu chorób niezakaźnych (cukrzyca, choroby sercowo-naczyniowe, niektóre nowotwory). Powszechnym wskaźnikiem oceny jest BMI, obrazujący stosunek masy ciała do wzrostu. Według klasyfikacji WHO osoby dorosłe z BMI 30 lub więcej są uznawane za otyłe, a z wynikiem 25 lub więcej — za osoby z nadwagą.',
      },
      {
        heading: 'Zasady doboru ćwiczeń',
        bullets: [
          'przed rozpoczęciem aktywności konieczna jest konsultacja lekarska w celu diagnozy chorób i przeciwwskazań',
          'dobór ćwiczeń indywidualny — na podstawie możliwości, zdrowia, upodobań i stopnia otyłości',
          'ćwiczenia powinny być dla pacjenta przyjemne i niesprawiające trudności, angażujące jak najwięcej grup mięśniowych',
          'zajęcia grupowe motywują do systematyczności i poprawiają aspekt psychiczny i społeczny',
          'w pierwszej kolejności zaleca się ćwiczenia w wodzie oraz jazdę na rowerze, które odciążają stawy kończyn dolnych i kręgosłup',
          'podczas ćwiczeń nie wolno wstrzymywać oddechu — należy oddychać wolno i głęboko',
        ],
      },
      {
        heading: 'Formy i intensywność aktywności',
        body: 'Aktywność dzieli się na codzienną (każda forma ruchu, np. wchodzenie po schodach, unikanie wind, pieszy spacer) oraz planowaną. Według Brownella aktywność planowana powinna uwzględniać rodzaj, intensywność, czas trwania i częstotliwość. Typowe są ćwiczenia ogólnokondycyjne o średniej lub niskiej intensywności, angażujące duże grupy mięśniowe i wykonywane cyklicznie. Tętno docelowe do spalania tkanki tłuszczowej to 60-70% tętna maksymalnego. Zaleca się co najmniej 30 minut ćwiczeń o średniej intensywności dziennie, w miarę możliwości codziennie.',
        bullets: [
          'metoda walk and talk: możliwość prowadzenia rozmowy podczas wysiłku świadczy o jego tlenowym charakterze',
          'obowiązuje zasada, że jakakolwiek aktywność fizyczna jest lepsza niż żadna',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Jaki zakres tętna maksymalnego stanowi tętno docelowe do ćwiczeń na spalanie tkanki tłuszczowej?',
        options: ['40-50%', '50-60%', '60-70%', '80-90%'],
        correct: 2,
        explain:
          'Według źródła tętno docelowe do ćwiczeń na spalanie tkanki tłuszczowej to 60-70% tętna maksymalnego.',
      },
      {
        type: 'abcd',
        q: 'Jaką wartość BMI WHO przyjmuje jako granicę otyłości u osób dorosłych?',
        options: ['25 lub więcej', '28 lub więcej', '30 lub więcej', '35 lub więcej'],
        correct: 2,
        explain:
          'Według klasyfikacji WHO osoby dorosłe z BMI wynoszącym 30 lub więcej są uznawane za otyłe, a z wynikiem 25 lub więcej — za osoby z nadwagą.',
      },
      {
        type: 'tf',
        q: 'Osoby z nadwagą i otyłością przed przystąpieniem do aktywności fizycznej powinny udać się na konsultację lekarską.',
        correct: true,
        explain:
          'Źródło wskazuje, że w pierwszej kolejności należy udać się na konsultację lekarską w celu diagnozy chorób i przeciwwskazań do konkretnych aktywności.',
      },
      {
        type: 'flash',
        front: 'Wymień cechy ćwiczeń ogólnokondycyjnych stosowanych w leczeniu otyłości.',
        back:
          'Średni lub niski poziom intensywności (zakres docelowego tętna treningowego), efektywne zużycie tlenu przez pracujące mięśnie, angażowanie dużych grup mięśniowych kurczących się naprzemiennie oraz cykliczność i możliwość długotrwałego wysiłku bez przerw.',
      },
    ],
  },
  {
    id: 'rek-planowanie-dzialalnosci-rekreacyjnej',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 12,
    title: 'Planowanie działalności rekreacyjnej w różnych środowiskach',
    summary:
      'Zasady planowania i programowania działalności rekreacyjnej dostosowanej do specyfiki miejsca zamieszkania, ośrodka wczasowego, zakładu pracy i hotelu.',
    wiki: [
      {
        heading: 'Podstawy planowania',
        body: 'W planowaniu i programowaniu działalności rekreacyjnej ważne są: analiza rynku, zapewnienie bogatej oferty usług rekreacyjnych oraz działania marketingowe. Ofertę zawsze dostosowuje się do specyfiki środowiska i grupy odbiorców.',
      },
      {
        heading: 'Miejsce zamieszkania i ośrodek wczasowy',
        bullets: [
          'na osiedlu: wieczorne aktywności dla osób pracujących (8-16) oraz poranne dla kobiet w ciąży, z dziećmi i seniorów',
          'stałe zajęcia ruchowe (fitness, nordic walking, joga) i wydarzenia (pikniki, spartakiady); przykładem jest program Trener Osiedlowy',
          'ośrodek wczasowy: uwzględnia sezonowość (np. nad morzem duże obłożenie latem) oraz przedział wiekowy gości',
          'rodziny potrzebują animacji dla dzieci i basenów, seniorzy spokojniejszych zajęć i opieki medycznej, osoby aktywne — wypożyczalni rowerów i sportów wodnych',
          'krótkie turnusy wymagają intensywnego, atrakcyjnego i elastycznego programu rozrywkowo-sportowego',
        ],
      },
      {
        heading: 'Zakład pracy i hotel',
        bullets: [
          'zakład pracy: aktywności w czasie przerw lunchowych lub po godzinach pracy (tzw. 9-5 job)',
          'w trakcie pracy warto zadbać o krótkie ćwiczenia rozluźniające i gimnastykę',
          'hotel: sezonowość zależna od funkcjonowania hotelu oraz duża rotacja gości (pobyty 1-2 tygodnie)',
          'oferta hotelowa powinna być bardzo atrakcyjna i nastawiona na „tu i teraz”, np. pakiety wellness z jogą, wstępem na basen lub siłownię',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Co — według źródła — jest ważne w planowaniu i programowaniu działalności rekreacyjnej?',
        options: [
          'analiza rynku, bogata oferta usług i działania marketingowe',
          'wyłącznie obniżanie cen biletów',
          'rezygnacja z działań marketingowych',
          'jednolita oferta niezależna od środowiska',
        ],
        correct: 0,
        explain:
          'Źródło wymienia trzy elementy: analizę rynku, zapewnienie bogatej oferty usług rekreacyjnych oraz działania marketingowe.',
      },
      {
        type: 'abcd',
        q: 'Jaki czynnik trzeba szczególnie uwzględnić, planując działalność w ośrodku wczasowym nad morzem?',
        options: [
          'brak jakiejkolwiek sezonowości',
          'sezonowość — duże obłożenie w sezonie letnim i niemal zerowe poza nim',
          'wyłącznie ofertę dla seniorów',
          'całkowitą rezygnację z animacji dla dzieci',
        ],
        correct: 1,
        explain:
          'Funkcjonowanie ośrodka zależy od gości — nad polskim morzem oznacza to duże obłożenie latem i niemal zerowe poza sezonem.',
      },
      {
        type: 'tf',
        q: 'Oferta rekreacyjna w hotelu powinna być nastawiona na długofalowe budowanie sylwetki do kolejnego lata.',
        correct: false,
        explain:
          'Przeciwnie — przez dużą rotację gości oferta hotelowa ma być atrakcyjna i nastawiona na „tu i teraz”, a nie na budowanie sylwetki do kolejnego lata.',
      },
      {
        type: 'flash',
        front: 'Jak rozplanować aktywności rekreacyjne dla mieszkańców osiedla?',
        back:
          'Wieczorne aktywności dla większości osób pracujących w godzinach 8-16 oraz poranne dla kobiet w ciąży, z dziećmi i seniorów; do tego dostęp do terenów rekreacyjnych, stałe zajęcia ruchowe (fitness, nordic walking, joga) i wydarzenia (pikniki, spartakiady).',
      },
    ],
  },
  {
    id: 'rek-pomiary-antropometryczne',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 13,
    title: 'Zasady wykonywania pomiarów antropometrycznych',
    summary:
      'Najważniejsze zasady prawidłowego wykonywania pomiarów antropometrycznych — od znajomości punktów ciała po dokładność zapisu.',
    wiki: [
      {
        heading: 'Najważniejsze zasady',
        bullets: [
          'znajomość punktów antropometrycznych ciała',
          'właściwa postawa ciała — w Polsce pomiary wykonuje się po lewej stronie ciała',
          'odpowiedni strój, najlepiej sportowy, przylegający do ciała',
          'dokładność odpowiednia do skali instrumentarium pomiarowego',
          'odpowiednia pora wykonywania pomiarów',
          'dokładność w zapisywaniu pomiarów',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Po której stronie ciała wykonuje się w Polsce pomiary antropometryczne?',
        options: ['po prawej stronie', 'po lewej stronie', 'naprzemiennie po obu stronach', 'wyłącznie z przodu ciała'],
        correct: 1,
        explain:
          'Według źródła w Polsce pomiary antropometryczne wykonuje się po lewej stronie ciała przy zachowaniu właściwej postawy.',
      },
      {
        type: 'tf',
        q: 'Do pomiarów antropometrycznych zaleca się luźny, nieprzylegający strój, aby nie krępować ruchów.',
        correct: false,
        explain:
          'Przeciwnie — źródło zaleca odpowiedni strój sportowy, najlepiej przylegający do ciała, oraz dokładność dostosowaną do skali instrumentarium pomiarowego.',
      },
      {
        type: 'flash',
        front: 'Wymień najważniejsze zasady wykonywania pomiarów antropometrycznych.',
        back:
          'Znajomość punktów antropometrycznych ciała, właściwa postawa (w Polsce po lewej stronie), odpowiedni przylegający strój sportowy, dokładność odpowiednia do skali instrumentarium, odpowiednia pora pomiarów oraz dokładność w zapisywaniu wyników.',
      },
    ],
  },
  {
    id: 'rek-zabawy-gry-ruchowe-seniorzy',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 14,
    title: 'Rola zabaw i gier ruchowych w sprawności osób starszych',
    summary:
      'Funkcje, cele i zasady prowadzenia zabaw oraz gier ruchowych podtrzymujących ogólną sprawność fizyczną osób w wieku starszym.',
    wiki: [
      {
        heading: 'Funkcje zabaw i gier ruchowych',
        bullets: [
          'kompensacyjna — rekompensuje ograniczenia wynikające z wieku',
          'regeneracyjna — umożliwia aktywny odpoczynek, relaks i odbudowę sił psychicznych',
          'rozrywkowa — dostarcza pozytywnych emocji, ważna wobec rosnącego ryzyka izolacji i smutku',
          'antyinwolucyjna — przeciwdziała procesom starzenia się organizmu',
          'kreacyjna — pozwala na kreatywność i rozwijanie pasji',
          'afiliacyjna — sprzyja tworzeniu więzi i przynależności w grupie seniorów',
          'integracyjna — aktywizuje seniorów z innymi grupami wiekowymi',
        ],
      },
      {
        heading: 'Cele',
        bullets: [
          'zapobieganie niepełnosprawności i chorobom wieku starczego (serca, narządu ruchu, metabolicznym)',
          'poprawa odporności, koordynacji, czasu reakcji i siły, wzmocnienie mięśni',
          'poprawa umiejętności motorycznych, zdrowia fizycznego i psychicznego oraz pracy mózgu',
          'zabawa i rozrywka',
        ],
      },
      {
        heading: 'Zasady prowadzenia zajęć',
        bullets: [
          'pod kontrolą lekarską, z uwzględnieniem stanu zdrowia, oraz indywidualizacja zajęć',
          'kameralna atmosfera i stosowanie łatwych przyborów',
          'wprowadzanie ćwiczeń oddechowych w zwiększonym zakresie',
          'mniejsze tempo ćwiczeń (temporalność) oraz urozmaicone, lecz stabilne pozycje wyjściowe',
          'zadania o charakterze praktycznym',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która funkcja zabaw i gier ruchowych polega na przeciwdziałaniu procesom starzenia się organizmu?',
        options: ['kompensacyjna', 'rozrywkowa', 'afiliacyjna', 'antyinwolucyjna'],
        correct: 3,
        explain:
          'Funkcja antyinwolucyjna przeciwdziała procesom starzenia się organizmu, dzięki czemu seniorzy zachowują lepszą kondycję.',
      },
      {
        type: 'tf',
        q: 'Zajęcia ruchowe dla seniorów należy prowadzić w jak najszybszym tempie, aby maksymalnie obciążyć organizm.',
        correct: false,
        explain:
          'Wręcz przeciwnie — źródło zaleca mniejsze tempo ćwiczeń (temporalność, realizacja zadań w wolniejszym tempie) oraz prowadzenie zajęć pod kontrolą lekarską.',
      },
      {
        type: 'tf',
        q: 'Funkcja afiliacyjna zabaw i gier ruchowych sprzyja tworzeniu więzi i poczucia przynależności w grupie seniorów.',
        correct: true,
        explain:
          'Źródło opisuje funkcję afiliacyjną jako sprzyjającą tworzeniu więzi i przynależności wewnątrz grupy seniorów oraz przeciwdziałającą samotności i wykluczeniu.',
      },
      {
        type: 'flash',
        front: 'Wymień zasady prowadzenia zajęć ruchowych dla osób starszych.',
        back:
          'Kontrola lekarska i uwzględnienie stanu zdrowia, indywidualizacja zajęć, kameralna atmosfera, łatwe przybory, zwiększony zakres ćwiczeń oddechowych, mniejsze tempo (temporalność), urozmaicone, lecz stabilne pozycje wyjściowe oraz zadania o charakterze praktycznym.',
      },
    ],
  },
  {
    id: 'rek-miejska-turystyka-rowerowa',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 15,
    title: 'Walory miejskiej turystyki rowerowej',
    summary:
      'Miejska turystyka rowerowa jako sposób spędzania wolnego czasu i źródło korzyści zdrowotnych, ekonomicznych, społecznych oraz ekologicznych.',
    wiki: [
      {
        heading: 'Czym jest miejska turystyka rowerowa',
        body: 'Miejska turystyka rowerowa to przede wszystkim korzyści zdrowotne i metoda spędzania wolnego czasu. Zakłada podróżowanie rowerem po terenach miejskich w celach rekreacyjnych i turystycznych.',
      },
      {
        heading: 'Walory',
        bullets: [
          'poprawa kondycji i lepsze samopoczucie',
          'profilaktyka zdrowotna',
          'oszczędność kosztów oraz unikanie korków w mieście',
          'kontakt z miastem i odkrywanie go z innej perspektywy',
          'integracja społeczna, np. gdy zabieramy ze sobą bliskich',
          'ochrona środowiska i promocja kultury rowerowej',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który z poniższych walorów wprost wynika z poruszania się rowerem zamiast samochodem w mieście?',
        options: [
          'unikanie korków w mieście i oszczędność kosztów',
          'zwiększenie emisji spalin',
          'wzrost wydatków na paliwo',
          'pogorszenie kondycji fizycznej',
        ],
        correct: 0,
        explain:
          'Źródło wymienia wśród walorów oszczędność kosztów oraz unikanie korków w mieście, a także ochronę środowiska.',
      },
      {
        type: 'tf',
        q: 'Miejska turystyka rowerowa sprzyja integracji społecznej, np. gdy zabieramy ze sobą bliskich.',
        correct: true,
        explain:
          'Integracja społeczna — np. wspólne wyprawy z bliskimi — jest wymieniona w źródle jako jeden z walorów miejskiej turystyki rowerowej.',
      },
      {
        type: 'flash',
        front: 'Wymień walory miejskiej turystyki rowerowej.',
        back:
          'Poprawa kondycji, lepsze samopoczucie, profilaktyka zdrowotna, oszczędność kosztów, unikanie korków, kontakt z miastem i odkrywanie go z innej perspektywy, integracja społeczna, ochrona środowiska oraz promocja kultury rowerowej.',
      },
    ],
  },
]
