import type { Topic } from '../types'

export const partC1: Topic[] = [
  {
    id: 'obowiazki-pracownika-pracodawcy',
    track: 'wszyscy',
    category: 'zarzadzanie',
    number: 3,
    title: 'Omów podstawowe obowiązki pracownika i pracodawcy',
    summary: 'Wzajemne obowiązki stron stosunku pracy wynikające z umowy i prawa pracy.',
    wiki: [
      {
        heading: 'Obowiązki pracownika',
        bullets: [
          'Sumienne wykonywanie pracy - rzetelnie, zgodnie z zaleceniami przełożonych, instrukcją i harmonogramem',
          'Przestrzeganie przepisów BHP oraz regulaminu pracy, utrzymywanie porządku i higieny dla bezpieczeństwa swojego i innych',
          'Dbanie o mienie pracodawcy - szanowanie sprzętu, narzędzi i materiałów, używanie ich zgodnie z przeznaczeniem',
          'Zachowanie tajemnicy - danych firmy, klientów i informacji chronionych',
          'Zachowanie kultury osobistej - unikanie konfliktów, poszanowanie innych, współpraca i komunikacja',
        ],
      },
      {
        heading: 'Obowiązki pracodawcy',
        bullets: [
          'Zapewnienie bezpiecznych i higienicznych warunków pracy (sprawny sprzęt, szkolenia BHP)',
          'Terminowe i uczciwe wynagrodzenie',
          'Szacunek dla godności pracownika - zakaz dyskryminacji i mobbingu',
          'Dbanie o rozwój zawodowy pracownika',
          'Przestrzeganie przepisów prawa pracy (czas pracy, urlopy)',
        ],
      },
      {
        body: 'Podstawą wzajemnych obowiązków są umowa o pracę oraz przepisy prawa pracy, które określają normy i regulacje związane z zatrudnieniem.',
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który z poniższych jest obowiązkiem pracodawcy, a nie pracownika?',
        options: [
          'Dbanie o mienie pracodawcy',
          'Zachowanie tajemnicy firmy',
          'Zapewnienie bezpiecznych i higienicznych warunków pracy',
          'Przestrzeganie regulaminu pracy',
        ],
        correct: 2,
        explain: 'Zapewnienie bezpiecznych i higienicznych warunków pracy spoczywa na pracodawcy; pozostałe to obowiązki pracownika.',
      },
      {
        type: 'tf',
        q: 'Zakaz dyskryminacji i mobbingu należy do obowiązków pracodawcy.',
        correct: true,
        explain: 'Pracodawca ma obowiązek szanować godność pracownika, co obejmuje zakaz dyskryminacji i mobbingu.',
      },
      {
        type: 'flash',
        front: 'Wymień podstawowe obowiązki pracownika.',
        back: 'Sumienne wykonywanie pracy, przestrzeganie BHP i regulaminu, dbanie o mienie pracodawcy, zachowanie tajemnicy oraz kultury osobistej.',
      },
    ],
  },
  {
    id: 'teorie-potrzeb-rekreacja',
    track: 'wszyscy',
    category: 'rekreacja',
    number: 4,
    title: 'Omów teorie wyjaśniające znaczenie potrzeb w życiu człowieka biorącego udział w aktywnościach rekreacyjnych',
    summary: 'Rekreacja zaspokaja potrzeby człowieka, co tłumaczą m.in. piramida Maslowa i teoria autodeterminacji.',
    wiki: [
      {
        body: 'Rekreacja pełni funkcję zaspokajania potrzeb rekreacyjnych, zdrowotnych, poznawczych, kulturowych i społecznych. Uczestnik angażuje się nie tylko dla ruchu, ale też dla poprawy kondycji, poznawania nowych treści, integracji i relaksu.',
      },
      {
        heading: 'Piramida potrzeb Maslowa',
        body: 'Maslow uporządkował potrzeby od najbardziej podstawowych do najwyższych:',
        bullets: [
          'Fizjologiczne - ruch, odpoczynek, regeneracja (gimnastyka, spacery)',
          'Bezpieczeństwa - bezpieczne warunki zajęć, nadzór trenera, struktura treningu',
          'Przynależności i akceptacji - zajęcia grupowe, integracja, gry zespołowe',
          'Uznania - pochwały, osiągnięcia, testy sprawnościowe',
          'Samorealizacji - nowe wyzwania, rozwój kompetencji, kreatywność',
        ],
      },
      {
        heading: 'Teoria autodeterminacji (Ryan i Deci)',
        body: 'Wskazuje 3 kluczowe potrzeby psychologiczne, których zaspokojenie daje poczucie spełnienia i radości:',
        bullets: [
          'Autonomia - decydowanie samemu o sobie',
          'Kompetencja - poczucie sprawności i rozwijanie umiejętności',
          'Relacje - posiadanie dobrych więzi z innymi',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które trzy potrzeby psychologiczne wyróżnia teoria autodeterminacji Ryana i Deciego?',
        options: [
          'Poznawcze, kulturowe, zdrowotne',
          'Fizjologiczne, bezpieczeństwa, uznania',
          'Ruch, odpoczynek, regeneracja',
          'Autonomia, kompetencja, relacje',
        ],
        correct: 3,
        explain: 'Teoria autodeterminacji opiera się na potrzebie autonomii, kompetencji i relacji z innymi.',
      },
      {
        type: 'tf',
        q: 'Według piramidy Maslowa potrzeba samorealizacji znajduje się na najwyższym poziomie.',
        correct: true,
        explain: 'Maslow uporządkował potrzeby od fizjologicznych (najniższe) do samorealizacji (najwyższe).',
      },
      {
        type: 'flash',
        front: 'Jak rekreacja realizuje potrzebę przynależności wg Maslowa?',
        back: 'Poprzez zajęcia grupowe, integrację, gry zespołowe i wspólne wyprawy.',
      },
    ],
  },
  {
    id: 'komunikowanie-w-organizacji',
    track: 'wszyscy',
    category: 'zarzadzanie',
    number: 5,
    title: 'Omów zagadnienie - Komunikowanie się w organizacji',
    summary: 'Komunikacja to proces wymiany informacji w organizacji, pełniący funkcje informacyjną, motywacyjną, kontrolną i społeczną.',
    wiki: [
      {
        body: 'Komunikacja w organizacji to proces wymiany informacji, idei, opinii i instrukcji między członkami organizacji, odgrywający kluczową rolę w jej efektywnym funkcjonowaniu.',
      },
      {
        heading: 'Funkcje komunikacji',
        bullets: [
          'Informacyjna - przekazywanie danych, instrukcji, celów',
          'Motywacyjna - zachęcanie pracowników do działania',
          'Kontrolna - monitorowanie zadań i przestrzeganie zasad',
          'Emocjonalno-społeczna - budowanie zaufania, atmosfery i relacji',
        ],
      },
      {
        heading: 'Rodzaje komunikacji',
        bullets: [
          'Formalna - oficjalne komunikaty, maile, spotkania, dokumenty',
          'Nieformalna - codzienne rozmowy',
          'Pionowa - polecenia przełożonych, raporty pracowników',
          'Pozioma - między pracownikami tego samego szczebla',
        ],
      },
      {
        heading: 'Rola lidera i bariery',
        body: 'Lider przekazuje jasne informacje, udziela informacji zwrotnej, rozwiązuje konflikty, słucha, motywuje i prowadzi dialog. Bariery komunikacyjne to m.in. różnice międzykulturowe i wiekowe, brak jasnych kanałów oraz nieefektywne przekazywanie informacji.',
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Komunikacja między pracownikami tego samego szczebla to komunikacja:',
        options: ['Pionowa', 'Pozioma', 'Formalna', 'Kontrolna'],
        correct: 1,
        explain: 'Komunikacja pozioma zachodzi między pracownikami na tym samym szczeblu, w odróżnieniu od pionowej (przełożony-podwładny).',
      },
      {
        type: 'tf',
        q: 'Funkcja motywacyjna komunikacji polega na monitorowaniu zadań i przestrzegania zasad.',
        correct: false,
        explain: 'Monitorowanie zadań to funkcja kontrolna; funkcja motywacyjna polega na zachęcaniu pracowników do działania.',
      },
      {
        type: 'flash',
        front: 'Za co odpowiada lider w komunikacji w organizacji?',
        back: 'Za przekazywanie jasnych informacji, udzielanie informacji zwrotnej, rozwiązywanie konfliktów, słuchanie, motywowanie i prowadzenie otwartego dialogu.',
      },
    ],
  },
  {
    id: 'rodzina-jako-mala-grupa',
    track: 'wszyscy',
    category: 'rekreacja',
    number: 6,
    title: 'Rodzina jako mała grupa społeczna uczestnicząca w turystyce i rekreacji',
    summary: 'Rodzina to mała grupa o własnych rolach i zasadach, której uczestnictwo w turystyce ma motywy integracyjne, wychowawcze, edukacyjne i zdrowotne.',
    wiki: [
      {
        body: 'Rodzina to grupa społeczna składająca się z bliskich osób - najczęściej rodziców i dzieci, czasem dziadków. Jej członkowie dobrze się znają i spędzają razem dużo czasu, a grupa - choć niewielka - ma swoje zasady i role.',
      },
      {
        heading: 'Motywy uczestnictwa rodziny w turystyce i rekreacji',
        bullets: [
          'Integracyjny - wspólne spędzanie czasu, oderwanie od codzienności, wzmacnianie więzi',
          'Wychowawczy - dzieci uczą się przez obserwację zasad społecznych, współpracy i kultury',
          'Edukacyjny - poznawanie nowych miejsc, kultury i historii',
          'Zdrowotny - aktywność fizyczna (spacery, rower, pływanie) wspiera zdrowie całej rodziny',
        ],
      },
      {
        heading: 'Planowanie wyjazdu',
        body: 'Wyjazd to często wspólna decyzja - rodzice wybierają miejsce, ale uwzględniają sugestie dzieci. Wybór zależy od możliwości finansowych, zainteresowań i potrzeb. Trudności mogą wynikać z różnic pokoleniowych, ograniczeń finansowych oraz zmieniających się potrzeb rodziny.',
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który motyw uczestnictwa rodziny w turystyce wiąże się z uczeniem dzieci zasad społecznych przez obserwację?',
        options: ['Wychowawczy', 'Zdrowotny', 'Integracyjny', 'Edukacyjny'],
        correct: 0,
        explain: 'Motyw wychowawczy polega na tym, że dzieci uczą się zasad społecznych, współpracy i kultury przez obserwację i uczestnictwo.',
      },
      {
        type: 'tf',
        q: 'Planowanie wyjazdu rodzinnego nigdy nie napotyka problemów wynikających z różnic pokoleniowych.',
        correct: false,
        explain: 'Różnice pokoleniowe (inne zainteresowania), ograniczenia finansowe i zmiany potrzeb mogą utrudniać planowanie wyjazdu.',
      },
      {
        type: 'flash',
        front: 'Wymień motywy uczestnictwa rodziny w turystyce i rekreacji.',
        back: 'Integracyjny, wychowawczy, edukacyjny i zdrowotny.',
      },
    ],
  },
  {
    id: 'zabawa-rozrywka-grupy-wiekowe',
    track: 'wszyscy',
    category: 'rekreacja',
    number: 9,
    title: 'Zabawa i rozrywka w kontekście czasu wolnego różnych grup wiekowych',
    summary: 'Zabawa i rozrywka pełnią różne funkcje w czasie wolnym dzieci, młodzieży i dorosłych.',
    wiki: [
      {
        body: 'Czas wolny to czas bez obowiązków zawodowych, szkolnych czy domowych, przeznaczony na odpoczynek, regenerację i samorealizację. Zabawa to spontaniczna aktywność dająca radość i rozwijająca umiejętności, a rozrywka to szeroko pojęte formy spędzania czasu wolnego (fizyczne, kulturowe, rekreacyjne).',
      },
      {
        heading: 'Dzieci (wiek przedszkolny i wczesnoszkolny)',
        bullets: [
          'Zabawy ruchowe - rozwijają sprawność fizyczną (bieganie, plac zabaw)',
          'Zabawy konstrukcyjne - wspierają logiczne myślenie (klocki, układanki)',
          'Zabawy fabularne i tematyczne - rozwijają wyobraźnię (dom, sklep)',
          'Gry planszowe - ćwiczą pamięć i koncentrację',
        ],
      },
      {
        heading: 'Młodzież',
        bullets: [
          'Sport - kondycja i zdrowie (siłownia, sporty drużynowe, taniec)',
          'Kultura - muzyka, kino, teatr',
          'Internet i gry komputerowe, media społecznościowe',
          'Podróże oraz wolontariat (poczucie sensu, odpowiedzialność)',
        ],
      },
      {
        heading: 'Dorośli',
        bullets: [
          'Relaks - redukcja stresu (książki, film)',
          'Aktywność fizyczna (siłownia, joga, fitness)',
          'Spotkania towarzyskie i hobby/pasje',
          'Rozwój zawodowy i nauka',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który rodzaj zabawy dzieci szczególnie wspiera logiczne myślenie?',
        options: ['Zabawy ruchowe', 'Zabawy tematyczne', 'Zabawy fabularne', 'Zabawy konstrukcyjne'],
        correct: 3,
        explain: 'Zabawy konstrukcyjne (klocki, układanki) wspierają logiczne myślenie.',
      },
      {
        type: 'tf',
        q: 'Czas wolny dorosłych jest zazwyczaj mocno ograniczony przez dużą ilość obowiązków.',
        correct: true,
        explain: 'Według materiału czas wolny dorosłych jest dość mocno ograniczony przez liczne obowiązki.',
      },
      {
        type: 'flash',
        front: 'Czym różni się zabawa od rozrywki?',
        back: 'Zabawa to spontaniczna aktywność dająca radość i rozwijająca umiejętności; rozrywka to szeroko pojęte formy spędzania czasu wolnego - fizyczne, kulturowe i rekreacyjne.',
      },
    ],
  },
  {
    id: 'zasady-prezentacji-powerpoint',
    track: 'wszyscy',
    category: 'technologie',
    number: 10,
    title: 'Podaj 5 zasad dobrze przygotowanej prezentacji w PowerPoint',
    summary: 'Dobra prezentacja opiera się na logicznej strukturze, minimalizmie, spójnym stylu, wspierającej grafice i interakcji z odbiorcami.',
    wiki: [
      {
        heading: 'Pięć zasad',
        bullets: [
          'Logiczna struktura i płynność - jasny podział na wstęp, rozwinięcie i zakończenie, start od tytułu i spisu treści, logiczna kolejność slajdów',
          'Przejrzystość i minimalizm - jeden slajd to jedna myśl, hasła i punkty zamiast długich zdań, czytelna czcionka (Arial, Calibri)',
          'Styl graficzny - jedna kolorystyka i czcionka, maksymalnie 2-3 kolory, unikanie nadmiaru efektów specjalnych',
          'Grafika i wspierające treści - każdy element graficzny coś tłumaczy, obrazy dobrej jakości i czytelne',
          'Interakcja i dopasowanie do słuchaczy - mówienie swobodne zamiast czytania slajdów, angażowanie pytaniami i przykładami, dostosowanie języka do odbiorców',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ile kolorów zaleca się stosować w spójnym stylu graficznym prezentacji?',
        options: ['Dowolnie wiele', 'Co najmniej 5', 'Maksymalnie 2-3', 'Tylko czarny i biały'],
        correct: 2,
        explain: 'Zasada stylu graficznego zaleca używanie maksymalnie 2-3 kolorów dla zachowania spójności.',
      },
      {
        type: 'tf',
        q: 'Zgodnie z dobrymi zasadami prezentacji należy odczytywać tekst ze slajdów słowo w słowo.',
        correct: false,
        explain: 'Zasada interakcji mówi, by nie czytać slajdów, lecz mówić swobodnie i rozwijać hasła.',
      },
      {
        type: 'flash',
        front: 'Na czym polega zasada przejrzystości i minimalizmu?',
        back: 'Każdy slajd to jedna myśl - krótko i konkretnie; zamiast długich zdań stosuje się hasła i punkty oraz czytelną czcionkę odpowiedniej wielkości.',
      },
    ],
  },
  {
    id: 'fizjologiczne-podstawy-treningu',
    track: 'wszyscy',
    category: 'fizjologia',
    number: 11,
    title: 'Przedstaw fizjologiczne podstawy treningu fizycznego człowieka',
    summary: 'Trening wywołuje adaptacje fizjologiczne w wielu układach organizmu, opierając się na trzech systemach energetycznych.',
    wiki: [
      {
        body: 'Trening fizyczny wpływa na organizm poprzez adaptacje fizjologiczne zwiększające wydolność, siłę i sprawność. Jego podstawą jest zdolność organizmu do adaptacji do obciążeń wysiłkowych.',
      },
      {
        heading: 'Źródła energii podczas wysiłku',
        bullets: [
          'System fosfagenowy (ATP) - dostarcza energii bardzo szybko, do krótkich intensywnych wysiłków',
          'Glikoliza beztlenowa - rozkład glukozy bez tlenu, energia od kilkudziesięciu sekund do minut, produktem jest mleczan',
          'Metabolizm tlenowy - zachodzi w mitochondriach, wykorzystuje węglowodany i tłuszcze, do długotrwałych wysiłków',
        ],
      },
      {
        heading: 'Adaptacje układów',
        bullets: [
          'Mięśniowy - hipertrofia, wzrost wytrzymałości, więcej mitochondriów, lepsza koordynacja nerwowo-mięśniowa',
          'Krążenia - wzrost objętości wyrzutowej i minutowej serca, spadek tętna spoczynkowego, więcej naczyń włosowatych, obniżenie ciśnienia i poziomu LDL',
          'Oddechowy - większa pojemność płuc, lepsza wymiana gazowa, silniejsze mięśnie oddechowe',
          'Nerwowy - lepsza koordynacja i czas reakcji, więcej endorfin',
          'Metaboliczny i hormonalny - lepsze spalanie tłuszczów, większa wrażliwość na insulinę, wzrost testosteronu',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który system energetyczny dostarcza energii najszybciej, w krótkich i intensywnych wysiłkach?',
        options: ['Metabolizm tlenowy', 'System fosfagenowy (ATP)', 'Glikoliza beztlenowa', 'Lipoliza'],
        correct: 1,
        explain: 'System fosfagenowy (ATP) dostarcza energii bardzo szybko i jest wykorzystywany w krótkich intensywnych wysiłkach.',
      },
      {
        type: 'tf',
        q: 'Regularny trening prowadzi do spadku tętna spoczynkowego.',
        correct: true,
        explain: 'Adaptacja układu krążenia obejmuje spadek tętna spoczynkowego - serce bije wolniej i bardziej efektywnie.',
      },
      {
        type: 'flash',
        front: 'Jakie zmiany w układzie mięśniowym wywołuje trening?',
        back: 'Hipertrofia (wzrost masy i siły), wzrost wytrzymałości, większa liczba mitochondriów oraz lepsza koordynacja nerwowo-mięśniowa.',
      },
    ],
  },
  {
    id: 'segmentacja-rynku-turystycznego',
    track: 'wszyscy',
    category: 'marketing',
    number: 12,
    title: 'Przedstaw segmentację rynku turystycznego/rekreacyjnego - pojęcie, kryteria i przykłady',
    summary: 'Segmentacja to podział klientów na grupy o podobnych cechach, co pozwala lepiej dopasować ofertę.',
    wiki: [
      {
        body: 'Segmentacja rynku to podział dużej grupy klientów na mniejsze segmenty o podobnych cechach, potrzebach lub zachowaniach. Dzięki temu firmy turystyczne lepiej dopasowują oferty do konkretnej grupy, zwiększając jej zadowolenie i skuteczność marketingu.',
      },
      {
        heading: 'Kryteria segmentacji',
        bullets: [
          'Demograficzne - wiek, płeć, dochód, stan cywilny, wykształcenie',
          'Geograficzne - miejsce zamieszkania, klimat, odległość od destynacji',
          'Psychograficzne - styl życia, wartości, osobowość, zainteresowania',
          'Behawioralne - motywacje, lojalność, częstotliwość podróżowania',
        ],
      },
      {
        heading: 'Segmentacja wg celu podróży i aktywności',
        bullets: [
          'Cel podróży: wypoczynkowa, biznesowa, zdrowotna (spa, wellness), kulturowa',
          'Rodzaj aktywności: sportowa, ekoturystyka, rozrywkowa',
        ],
      },
      {
        heading: 'Przykładowe segmenty',
        bullets: [
          'Rodziny z dziećmi - atrakcje dla najmłodszych',
          'Młodzi dorośli - przygody, życie nocne, aktywny odpoczynek',
          'Seniorzy - spokój i dostęp do opieki medycznej',
          'Turyści biznesowi - szybki transport i dogodności do pracy',
          'Miłośnicy przygód - ekoturystyka, natura',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Styl życia, wartości i zainteresowania to kryterium segmentacji:',
        options: ['Psychograficzne', 'Geograficzne', 'Demograficzne', 'Behawioralne'],
        correct: 0,
        explain: 'Kryterium psychograficzne obejmuje styl życia, wartości, osobowość i zainteresowania.',
      },
      {
        type: 'tf',
        q: 'Segmentacja rynku pozwala firmom turystycznym lepiej dopasować ofertę do konkretnej grupy klientów.',
        correct: true,
        explain: 'To główny cel segmentacji - dopasowanie oferty zwiększa zadowolenie klientów i skuteczność działań marketingowych.',
      },
      {
        type: 'flash',
        front: 'Wymień cztery kryteria segmentacji rynku turystycznego.',
        back: 'Demograficzne, geograficzne, psychograficzne i behawioralne.',
      },
    ],
  },
  {
    id: 'czynniki-zachowania-wolnoczasowe',
    track: 'wszyscy',
    category: 'rekreacja',
    number: 13,
    title: 'Scharakteryzuj czynniki determinujące zachowanie wolnoczasowe',
    summary: 'Wybór form spędzania czasu wolnego zależy od czynników demograficznych, ekonomicznych, społecznych, psychologicznych, kulturowo-technologicznych i środowiskowych.',
    wiki: [
      {
        body: 'Zachowanie wolnoczasowe to sposoby, w jakie ludzie spędzają swój czas wolny. Wybór aktywności zależy od wielu czynników.',
      },
      {
        heading: 'Czynniki demograficzne',
        bullets: [
          'Wiek - dzieci preferują zabawy ruchowe, młodzież gry i sport, dorośli rekreację i turystykę, seniorzy spokojne formy (spacery)',
          'Płeć - mężczyźni częściej sport i rywalizację, kobiety częściej zajęcia relaksacyjne, kulturowe i społeczne',
          'Stan cywilny i sytuacja rodzinna - osoby samotne wybierają podróże i spotkania, rodziny z dziećmi rekreację dla najmłodszych',
        ],
      },
      {
        heading: 'Pozostałe czynniki',
        bullets: [
          'Ekonomiczne - dochód i dostępność urlopu wpływają na wybór (droższe vs darmowe formy)',
          'Społeczne - wpływ rodziny i znajomych, trendy i moda na zdrowy styl życia',
          'Psychologiczne - motywacje, osobowość (introwertyk vs ekstrawertyk), stan zdrowia',
          'Kulturowe i technologiczne - internet, gry online, urbanizacja i infrastruktura miast',
          'Środowiskowe - infrastruktura, walory naturalne (góry, jeziora, lasy), dostępność komunikacyjna i bezpieczeństwo',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Różnica między introwertykami a ekstrawertykami w wyborze form czasu wolnego należy do czynników:',
        options: ['Ekonomicznych', 'Demograficznych', 'Psychologicznych', 'Środowiskowych'],
        correct: 2,
        explain: 'Osobowość (introwertyk vs ekstrawertyk) to czynnik psychologiczny.',
      },
      {
        type: 'tf',
        q: 'Bliskość gór, jezior i lasów to przykład czynnika środowiskowego determinującego zachowanie wolnoczasowe.',
        correct: true,
        explain: 'Walory naturalne, takie jak bliskość gór, jezior i lasów, zaliczane są do czynników środowiskowych.',
      },
      {
        type: 'flash',
        front: 'Wymień główne grupy czynników determinujących zachowanie wolnoczasowe.',
        back: 'Demograficzne, ekonomiczne, społeczne, psychologiczne, kulturowo-technologiczne oraz środowiskowe.',
      },
    ],
  },
]
