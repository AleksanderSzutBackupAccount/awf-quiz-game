import type { Topic } from '../types'

export const partP3: Topic[] = [
  {
    id: 'turystyka-przygodowa-dzieci',
    track: 'przygodowa',
    category: 'outdoor',
    number: 24,
    title: 'Turystyka przygodowa dzieci',
    summary: 'Organizacja wypoczynku dzieci i młodzieży, obowiązki kadry oraz cele i formy turystyki przygodowej.',
    wiki: [
      {
        heading: 'Podstawa prawna',
        body: 'Organizację wypoczynku dla dzieci i młodzieży określają przepisy ustawy z dnia 7 września 1991 r. o systemie oświaty oraz Rozporządzenie Ministra Edukacji Narodowej z dnia 30 czerwca 2016 r. w sprawie wypoczynku dzieci i młodzieży.',
        bullets: [
          'termin złożenia zgłoszenia wypoczynku oraz przekazania karty wypoczynku',
          'liczba uczestników w grupie pod opieką jednego wychowawcy',
          'obowiązki kierownika i wychowawcy wypoczynku, w tym prowadzenie dziennika zajęć',
          'program kursów na kierownika albo wychowawcę wypoczynku, wzór karty kwalifikacyjnej i zaświadczenia',
        ],
      },
      {
        heading: 'Limity liczebności grup i terminy zgłoszeń',
        bullets: [
          'liczba uczestników pod opieką jednego wychowawcy nie może przekraczać 20 osób',
          'dla grupy z dziećmi do 10. roku życia (lub grupy mieszanej z takimi dziećmi) limit wynosi 15 osób',
          'dopuszcza się udział nie więcej niż 2 uczestników niepełnosprawnych lub przewlekle chorych w grupie jednego wychowawcy',
          'zgłoszenie wypoczynku składa się nie później niż na 21 dni przed terminem rozpoczęcia, a dla półkolonii lub wypoczynku za granicą — nie później niż na 14 dni',
        ],
      },
      {
        heading: 'Obowiązki kierownika i wychowawcy',
        body: 'Kierownik kieruje wypoczynkiem, opracowuje plan pracy i rozkład dnia, przydziela zadania kadrze i kontroluje ich wykonanie, zapewnia opiekę od przejęcia dzieci od rodziców do przekazania ich z powrotem oraz nadzoruje bezpieczne i higieniczne warunki. Wychowawca zapoznaje się z kartami kwalifikacyjnymi uczestników, informuje kierownika o ich specjalnych potrzebach, prowadzi dziennik zajęć, opracowuje plan pracy grupy i realizuje program zgodnie z rozkładem dnia.',
      },
      {
        heading: 'Cele i formy turystyki przygodowej dzieci',
        body: 'Realizowane cele dzieli się na poznawczo-kształtujące, wychowawcze oraz rekreacyjno-zdrowotne (m.in. wypoczynkowe, restytucyjne, zabawowe, kondycyjne).',
        bullets: [
          'wycieczki: lekcje (spacery), programowo-dydaktyczne, krajobrazowe, turystyczno-krajoznawcze',
          'turystyka kwalifikowana: piesza, rowerowa, żeglarska, narciarska, motorowa, kajakowa',
          'imprezy turystyki kwalifikowanej: rajd, spływ, rejs, zlot, złaz, biwak, kolonie, imprezy na orientację, obozy wędrowne i stałe',
          'szkoły: zielona, biała/zimowa, ekologiczna',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ilu uczestników może maksymalnie pozostawać pod opieką jednego wychowawcy w grupie mieszanej z dziećmi do 10. roku życia?',
        options: ['10 osób', '15 osób', '20 osób', '25 osób'],
        correct: 1,
        explain: 'Standardowy limit to 20 osób, ale dla grup z dziećmi do 10. roku życia oraz grup mieszanych z takimi dziećmi limit wynosi 15 osób.',
      },
      {
        type: 'tf',
        q: 'Do obowiązków wychowawcy wypoczynku należy prowadzenie dziennika zajęć realizowanych podczas wypoczynku.',
        correct: true,
        explain: 'Rozporządzenie nakłada na wychowawcę obowiązek prowadzenia dziennika zajęć, którego wzór określa załącznik nr 5.',
      },
      {
        type: 'flash',
        front: 'Jakie akty prawne regulują organizację wypoczynku dzieci i młodzieży?',
        back: 'Ustawa z 7 września 1991 r. o systemie oświaty oraz Rozporządzenie MEN z 30 czerwca 2016 r. w sprawie wypoczynku dzieci i młodzieży.',
      },
      {
        type: 'flash',
        front: 'Wymień trzy grupy celów turystyki przygodowej dzieci i młodzieży.',
        back: 'Cele poznawczo-kształtujące, wychowawcze oraz rekreacyjno-zdrowotne.',
      },
    ],
  },
  {
    id: 'typologia-form-aktywnosci-terenowej',
    track: 'przygodowa',
    category: 'outdoor',
    number: 25,
    title: 'Typologia form aktywności terenowej — twarde i miękkie formy',
    summary: 'Podział aktywności terenowej według poziomu ryzyka na formy miękkie i twarde oraz inne typologie.',
    wiki: [
      {
        heading: 'Podział według poziomu ryzyka',
        body: 'Na podstawie poziomu ryzyka wyróżniono formy twarde i miękkie aktywności terenowej. Formy miękkie uprawiają osoby zainteresowane przeżyciem przygody o niewielkim stopniu ryzyka. Formy twarde charakteryzują się wysokim poziomem ryzyka — np. ryzykiem poważnych obrażeń ciała, a nawet śmierci. Odczucie ryzyka jest jednak pojęciem subiektywnym.',
      },
      {
        heading: 'Formy miękkie i twarde',
        bullets: [
          'miękkie: backpacking, birdwatching, camping, kajakarstwo, wędkarstwo, trekking, bieg na orientację, safari, nurkowanie',
          'twarde: speleologia, wspinaczka skałkowa, wspinaczka lodowa, trekking w niebezpiecznym terenie, spadochroniarstwo, paralotniarstwo',
        ],
      },
      {
        heading: 'Inne typologie',
        bullets: [
          'według skali: formy małej skali (elementy ekoturystyki), średniej skali (elementy sportowe), dużej skali (cechy turystyki masowej)',
          'według przestrzeni realizacji: w powietrzu (loty balonem), na wodzie (windsurfing), na lądzie (wyprawy rowerowe)',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która z wymienionych aktywności należy do form twardych aktywności terenowej?',
        options: ['Birdwatching', 'Camping', 'Wspinaczka lodowa', 'Wędkarstwo'],
        correct: 2,
        explain: 'Wspinaczka lodowa charakteryzuje się wysokim poziomem ryzyka, więc zaliczana jest do form twardych; pozostałe to formy miękkie.',
      },
      {
        type: 'tf',
        q: 'Odczucie ryzyka w aktywności terenowej jest pojęciem obiektywnym, jednakowym dla wszystkich uczestników.',
        correct: false,
        explain: 'Odczucie ryzyka jest pojęciem subiektywnym i różni się w zależności od uczestnika.',
      },
      {
        type: 'flash',
        front: 'Według jakiego kryterium dzieli się aktywności terenowe na twarde i miękkie?',
        back: 'Według poziomu ryzyka — formy miękkie mają niewielki stopień ryzyka, twarde wysoki (zagrożenie poważnymi obrażeniami, a nawet śmiercią).',
      },
    ],
  },
  {
    id: 'wyprawy-trampingowe-zasady-organizacji',
    track: 'przygodowa',
    category: 'outdoor',
    number: 26,
    title: 'Wyprawy trampingowe — zasady organizacji',
    summary: 'Zasady przygotowania i prowadzenia wyprawy trampingowej: informacje, kontakty lokalne, program i rola pilota.',
    wiki: [
      {
        heading: 'Baza informacji i kontakty lokalne',
        body: 'Podstawą organizacji wypraw trampingowych jest zgromadzenie dużej bazy informacji o miejscu podróży — zarówno o atrakcjach turystycznych, jak i o warunkach panujących w przestrzeni (bezpieczeństwo, pogoda, opłaty). Organizator musi nawiązać kontakty z lokalnymi przedsiębiorcami, aby zorganizować nocleg, transport lub inne usługi.',
      },
      {
        heading: 'Program i informacje praktyczne',
        body: 'Program wycieczki powinien być elastyczny i dopasowany do możliwości grupy, która się zgłosi; należy zaznaczyć wymagany poziom sprawności fizycznej i zastrzec sobie prawo do zmian w sytuacjach nieprzewidzianych. Przygotowuje się informacje praktyczne o charakterze wyprawy, przelotach, zakwaterowaniu, transporcie, klimacie, wyżywieniu, ubezpieczeniu, przepisach rezygnacji i kosztach (w tym dodatkowych). Analizuje się dystans i przewyższenia trasy, by oszacować czas potrzebny na pokonanie szlaku, oraz weryfikuje zagrożenia i np. wymagane szczepionki.',
      },
      {
        heading: 'Specyfika trampingu i rola pilota',
        body: 'W trampingu dąży się do ograniczenia kosztów — korzysta się z noclegów o niższym standardzie, a wyprawy projektuje dla mniejszych grup. Ważny jest aspekt kulturowy: prawdziwy kontakt uczestników ze społecznością i miejscem. Najważniejszym ogniwem jest rola pilota wyprawy — musi być elastyczny i sprawny w kontaktach międzyludzkich, jest pośrednikiem między turystami, biurem a lokalną społecznością. Tramping wymaga otwartości na dialog międzykulturowy oraz znoszenia trudów podróży, a grupa często wspólnie decyduje o organizacji wyżywienia i mniej istotnych punktów programu.',
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Co jest podstawą organizacji wyprawy trampingowej?',
        options: [
          'Wykupienie noclegów o najwyższym standardzie',
          'Zgromadzenie dużej bazy informacji o miejscu podróży',
          'Zaplanowanie sztywnego, niezmiennego programu',
          'Ograniczenie kontaktu z lokalną społecznością',
        ],
        correct: 1,
        explain: 'Podstawą jest zgromadzenie dużej bazy informacji o miejscu — o atrakcjach oraz o warunkach (bezpieczeństwo, pogoda, opłaty).',
      },
      {
        type: 'tf',
        q: 'W trampingu dąży się do ograniczenia kosztów, dlatego korzysta się z noclegów o niższym standardzie.',
        correct: true,
        explain: 'Tramping nastawiony jest na ograniczenie kosztów — stąd tańsze noclegi i mniejsze grupy.',
      },
      {
        type: 'flash',
        front: 'Jaka jest rola pilota w wyprawie trampingowej?',
        back: 'Pilot to najważniejsze ogniwo wyprawy — elastyczny pośrednik między turystami, biurem a lokalną społecznością, dobrze odnajdujący się w kontaktach międzyludzkich.',
      },
    ],
  },
  {
    id: 'wyprawy-trekkingowe-przygotowanie-sprzet',
    track: 'przygodowa',
    category: 'outdoor',
    number: 27,
    title: 'Wyprawy trekkingowe — przygotowanie, zasady organizacji, sprzęt',
    summary: 'Przygotowanie fizyczne i psychiczne do trekkingu, zasady organizacji wyprawy oraz niezbędny sprzęt.',
    wiki: [
      {
        heading: 'Przygotowanie do trekkingu',
        body: 'Najlepiej zacząć od zdobycia wiedzy merytorycznej o miejscu docelowym (inaczej przygotujemy się na trekking po Saharze, a inaczej na Kilimandżaro). Konieczne jest przygotowanie fizyczne i psychiczne organizmu. W początkowych fazach prowadzi się trening kondycyjny (bieganie wytrzymałościowe, marszobiegi, interwały), zaleca się podstawowe badania (morfologia krwi, badanie moczu, EKG serca), a także ćwiczenia siłowe na duże partie mięśniowe (plecy, brzuch, nogi), ćwiczenia oddechowe i rozciągające. Ważna jest odpowiednia dieta (białko, tłuszcze, węglowodany, witaminy i minerały) oraz równowaga wodno-elektrolitowa. Zdrowie psychiczne buduje się przez stawianie sobie celów i rozwój cech wolicjonalnych.',
      },
      {
        heading: 'Zasady organizacji',
        bullets: [
          'analiza dystansu i przewyższenia — oszacowanie czasu potrzebnego na pokonanie szlaku',
          'powiadomienie osoby bliskiej o celu wyprawy i planowanych ścieżkach',
          'dostosowanie ekwipunku do rodzaju wyprawy (inny zimą, inny latem) — dobór obuwia, plecaka, odzieży',
          'weryfikacja zagrożeń na trasie i poza nią oraz wymaganych szczepionek',
          'dostosowanie kijów trekkingowych do wysokości ciała',
          'dwukrotne sprawdzenie prognoz pogody (na tydzień przed i potwierdzenie dzień przed wylotem)',
          'uwzględnienie kondycji, wieku i poziomu zaawansowania uczestników',
        ],
      },
      {
        heading: 'Niezbędny sprzęt',
        bullets: [
          'wodoodporny plecak ze stelażem o dużej pojemności; kurtka i spodnie z membraną; odzież termiczna szybkoschnąca',
          'bukłak z wodą (z filtrem lub tabletkami uzdatniającymi), termos, karimata, śpiwór dobrany do miejsca',
          'okulary przeciwsłoneczne, kremy z filtrem, latarka zwykła i czołowa, nóż wielofunkcyjny, ciepłe nakrycie głowy',
          'składane, regulowane kije trekkingowe, mapa i kompas, apteczka, lornetka',
          'buty za kostkę z membraną o sztywnej podeszwie (rozchodzone przed wyjazdem), skarpetki trekkingowe',
          'batony energetyczne i żele, namiot, worki na śmieci, ręcznik szybkoschnący',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które z poniższych badań zaleca się wykonać przed trekkingiem, aby wykluczyć przeciwwskazania ze strony układu krążenia?',
        options: ['Tylko pomiar wzrostu i wagi', 'EKG serca', 'Badanie wzroku', 'Test sprawności fizycznej Coopera'],
        correct: 1,
        explain: 'Zaleca się podstawowe badania: morfologię krwi, badanie moczu oraz EKG serca, by upewnić się, że nie ma przeciwwskazań związanych z niewydolnością układu krążenia.',
      },
      {
        type: 'tf',
        q: 'Buty trekkingowe za kostkę powinny być rozchodzone przed wyjazdem.',
        correct: true,
        explain: 'Buty za kostkę z membraną i sztywną podeszwą należy rozchodzić przed wyjazdem, by uniknąć otarć i kontuzji na szlaku.',
      },
      {
        type: 'flash',
        front: 'Dlaczego prognozę pogody przed trekkingiem sprawdza się dwukrotnie?',
        back: 'Sprawdza się ją na tydzień poprzedzający i na tydzień planowanego wyjścia, a następnie potwierdza dzień przed wylotem — to dwukrotna weryfikacja zwiększająca bezpieczeństwo.',
      },
    ],
  },
  {
    id: 'zagospodarowanie-kajaki-zeglarstwo-nurkowanie',
    track: 'przygodowa',
    category: 'outdoor',
    number: 28,
    title: 'Zagospodarowanie turystyczne dla turystyki kajakowej, żeglarskiej, nurkowania',
    summary: 'Wymagania infrastrukturalne akwenów wodnych dla kajakarstwa, żeglarstwa i nurkowania oraz zasady planowania przestrzennego.',
    wiki: [
      {
        heading: 'Kajakarstwo',
        body: 'Dla wszystkich typów kluczowa jest dostępność akwenów wodnych i odpowiednie zaplecze. Warunki dla kajakarstwa zmieniają się co sezon, a brak infrastruktury może zniechęcić turystów — ważne, by szlaki zachowały naturalność.',
        bullets: [
          'dostępność i oznakowanie szlaków wodnych dla bezpieczeństwa',
          'miejsca wodowania i wyciągania kajaków',
          'biwaki i pola namiotowe przy trasach wraz z informacją o nich',
          'wypożyczalnie sprzętu i parkingi; spławność rzeki (odpowiednia głębokość i szerokość)',
          'przykłady: Krutynia, Czarna Hańcza, Dordogne we Francji, Abel Tasman National Park w Nowej Zelandii',
        ],
      },
      {
        heading: 'Żeglarstwo',
        body: 'Wymagania infrastrukturalne dla żeglarstwa są bardzo wysokie i kosztowne.',
        bullets: [
          'porty i przystanie żeglarskie, serwis techniczny i tankowanie',
          'miejsca do cumowania i slipy; szkoły żeglarskie i kapitanaty portów oraz wypożyczalnie sprzętu',
          'punkty gastronomiczne (rejsy trwają kilka dni) oraz informacje pogodowe',
          'przykłady: Wielkie Jeziora Mazurskie, Cyklady (Santorini, Mykonos), Brytyjskie Wyspy Dziewicze na Karaibach',
        ],
      },
      {
        heading: 'Nurkowanie i planowanie przestrzenne',
        body: 'Nurkowanie wymaga specyficznej infrastruktury. Planując przestrzennie dla środowiska naturalnego, należy unikać konfliktów użytkowania przestrzeni, utrzymywać zgodność z planami zagospodarowania i dążyć do zrównoważonego rozwoju. Wyzwaniami pozostają kwestie ekonomiczne, sezonowość, zagrożenia środowiskowe oraz balans między komercjalizacją a ochroną.',
        bullets: [
          'bazy nurkowe z wypożyczalniami sprzętu; dostęp do łodzi nurkowych z odpowiednią burtą',
          'zaplecze ratunkowe i dekompresyjne; punkty szkoleniowe i certyfikacyjne (PADI, CMAS)',
          'przykłady: Morze Czerwone (Sharm El Sheikh), Wyspy Kanaryjskie (Lanzarote, Teneryfa), Blue Hole na Malcie',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które organizacje wymieniono jako wystawiające certyfikaty w nurkowaniu?',
        options: ['IATA i UNWTO', 'PADI i CMAS', 'PZŻ i ISO', 'FIFA i UEFA'],
        correct: 1,
        explain: 'W zagospodarowaniu dla nurkowania wymieniono punkty szkoleniowe i certyfikacyjne PADI oraz CMAS.',
      },
      {
        type: 'tf',
        q: 'Wymagania infrastrukturalne dla żeglarstwa są bardzo wysokie i kosztowne.',
        correct: true,
        explain: 'Żeglarstwo wymaga portów, serwisu, slipów, szkół, kapitanatów i gastronomii, co czyni infrastrukturę bardzo wysoką i kosztowną.',
      },
      {
        type: 'flash',
        front: 'Co decyduje o spławności rzeki dla kajakarstwa?',
        back: 'Odpowiednia głębokość i szerokość rzeki — tak, aby dało się nią płynąć.',
      },
    ],
  },
  {
    id: 'zagospodarowanie-turystyka-rowerowa',
    track: 'przygodowa',
    category: 'outdoor',
    number: 29,
    title: 'Zagospodarowanie turystyczne dla turystyki rowerowej',
    summary: 'Infrastruktura turystyki rowerowej, różnica między ścieżką a szlakiem oraz jej rola w zrównoważonym rozwoju.',
    wiki: [
      {
        heading: 'Potrzebna infrastruktura',
        bullets: [
          'miejsca postoju rowerów (bezpieczne pozostawienie roweru) oraz wypożyczalnie dostarczające jednolity sprzęt grupom',
          'miejsca obsługi technicznej: serwisy, sklepy z narzędziami, punkty na szlakach (np. do dopompowania kół)',
          'miejsca odpoczynku z właściwym oznakowaniem oraz oznakowane szlaki rowerowe z tabliczkami edukacyjnymi',
          'bazy noclegowe i gastronomiczne przy dłuższych wyprawach',
          'informacje o pogodzie i atrakcjach regionu, ścieżki i wydzielone pasy dla rowerów oraz oświetlenie szlaków na zmrok',
        ],
      },
      {
        heading: 'Ścieżka a szlak; MTB i downhill',
        body: 'Nie każda ścieżka rowerowa to szlak rowerowy i nie każdy szlak to ścieżka — ścieżka to droga przeznaczona dla komunikacji. W przypadku jazdy MTB oraz downhill potrzebne są dodatkowo miejsca wypożyczenia sprzętu, specjalne trasy z zabezpieczeniami, zabezpieczenie medyczne oraz wyciągi linowe. Przykłady zagospodarowania: Nadwarciański Szlak Rowerowy w Polsce, Cape Epic w RPA, Mai Chau w Wietnamie, Alpe-Adria (Włochy, Austria).',
      },
      {
        heading: 'Rola w zrównoważonym rozwoju',
        body: 'Turystyka rowerowa sprzyja zrównoważonemu rozwojowi — ogranicza negatywny wpływ na środowisko, a tablice przy szlakach podnoszą świadomość ekologiczną i umożliwiają współpracę z lokalnymi społecznościami. Dobrze zaprojektowana infrastruktura podnosi bezpieczeństwo i komfort podróży, promuje walory przestrzeni, zachęca do aktywności fizycznej oraz zwiększa ochronę środowiska.',
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Co jest potrzebne w turystyce rowerowej obejmującej jazdę MTB oraz downhill, czego zwykle nie wymaga zwykła turystyka rowerowa?',
        options: [
          'Tylko oznakowane miejsca odpoczynku',
          'Specjalne trasy z zabezpieczeniami, zabezpieczenie medyczne oraz wyciągi linowe',
          'Wyłącznie bazy gastronomiczne',
          'Jedynie informacje o pogodzie',
        ],
        correct: 1,
        explain: 'Dla MTB i downhill potrzebne są dodatkowo miejsca wypożyczenia sprzętu, specjalne trasy z zabezpieczeniami, zabezpieczenie medyczne oraz wyciągi linowe.',
      },
      {
        type: 'tf',
        q: 'Każda ścieżka rowerowa jest jednocześnie szlakiem rowerowym.',
        correct: false,
        explain: 'Nie każda ścieżka rowerowa to szlak rowerowy i odwrotnie — ścieżka to droga przeznaczona dla komunikacji.',
      },
      {
        type: 'flash',
        front: 'W jaki sposób turystyka rowerowa sprzyja zrównoważonemu rozwojowi?',
        back: 'Ogranicza negatywny wpływ na środowisko, tablice przy szlakach podnoszą świadomość ekologiczną, a sama turystyka umożliwia współpracę z lokalnymi społecznościami.',
      },
    ],
  },
  {
    id: 'fotografia-przygodowa-zasady-techniki',
    track: 'przygodowa',
    category: 'outdoor',
    number: 30,
    title: 'Zasady i techniki fotografii przygodowej',
    summary: 'Czym jest fotografia przygodowa oraz jej kluczowe zasady kompozycji, ustawień aparatu i techniki wykonania.',
    wiki: [
      {
        heading: 'Czym jest fotografia przygodowa',
        body: 'Fotografia przygodowa skupia się na zdjęciach plenerowych — oszałamiających krajobrazach i zapierających dech sytuacjach — oraz na uchwyceniu sportów ekstremalnych (narciarstwo, wspinaczka górska, kajakarstwo). Kluczowe elementy to dobra kompozycja, świadome użycie światła, wybór odpowiednich ustawień aparatu oraz praktyka i cierpliwość.',
      },
      {
        heading: 'Zasady dobrej fotografii',
        bullets: [
          'zasada trójpodziału — podział kadru na trzy części i umieszczenie elementów na liniach podziału',
          'linie wiodące — prowadzenie wzroku widza ku głównemu obiektowi',
          'ramy — kadrowanie obiektu naturalnymi elementami; zrównoważenie kompozycji',
          'światło naturalne (wschód i zachód słońca) oraz dbałość o kontrast i cień dla głębi i emocji',
          'tryb manualny i kontrola ekspozycji, dobór ISO (unikanie szumu), czasu naświetlania i przysłony (głębia ostrości)',
        ],
      },
      {
        heading: 'Techniki fotografii przygodowej',
        bullets: [
          'panoramowanie — ruch aparatem do uchwycenia ruchu i dynamiki',
          'długie naświetlanie — efekt rozmycia i zamrażania światła (np. w nocy)',
          'HDR — uchwycenie większego zakresu tonalnego i szczegółów',
          'zamrażanie ruchu — krótki czas naświetlania lub lampa błyskowa',
          'malowanie światłem — kreatywne, artystyczne efekty nocne',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Na czym polega zasada trójpodziału w fotografii przygodowej?',
        options: [
          'Na ustawieniu aparatu na trzy różne wartości ISO',
          'Na podziale kadru na trzy równe części i umieszczeniu głównych elementów na liniach podziału',
          'Na wykonaniu trzech zdjęć tego samego ujęcia',
          'Na użyciu trzech źródeł światła jednocześnie',
        ],
        correct: 1,
        explain: 'Zasada trójpodziału polega na podziale kadru na trzy równe części (poziomo i pionowo) i umieszczeniu głównych elementów na liniach przecięcia, co daje dynamiczniejszą kompozycję.',
      },
      {
        type: 'tf',
        q: 'Technika HDR służy do uchwycenia większego zakresu tonalnego i szczegółów w zdjęciach.',
        correct: true,
        explain: 'HDR (High Dynamic Range) pozwala uchwycić szerszy zakres tonalny i więcej szczegółów.',
      },
      {
        type: 'flash',
        front: 'Jak ustawienie przysłony wpływa na głębię ostrości?',
        back: 'Szersza przysłona daje mniejszą głębię ostrości, a mniejsza przysłona — większą głębię ostrości.',
      },
    ],
  },
]
