import type { Topic } from '../types'

export const partR4: Topic[] = [
  {
    id: 'rek-ksztalcenie-motoryczne-okresy-rozwojowe',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 16,
    title: 'Proces kształcenia motorycznego w rekreacji fizycznej wg okresów rozwojowych',
    summary:
      'Kształcenie motoryczne przebiega odmiennie w kolejnych okresach życia człowieka — od burzliwego rozwoju motoryki w niemowlęctwie, przez dwa apogea motoryczności w dzieciństwie, kryzys w okresie pokwitania, aż po regres w starości.',
    wiki: [
      {
        heading: 'Wczesne dzieciństwo',
        body: 'Okres niemowlęctwa cechuje się dużym tempem rozwoju motoryki: unoszenie głowy z tułowiem (ok. 3-4 miesiąca), obracanie się, ruchy chwytne i manipulacyjne, raczkowanie (od 5 do 7 miesiąca), siadanie (6-9 miesiąca) oraz pierwsze kroki (10-12 miesiąca). W okresie poniemowlęcym dziecko swobodnie chodzi, biega, doskonali równowagę, skacze, rzuca i kopie piłkę.',
      },
      {
        heading: 'Apogea motoryczności',
        bullets: [
          'I apogeum motoryczności — ok. 5 roku życia (okres przedszkolny), tzw. złoty okres motoryczności: rozrzutność ruchowa, przewaga procesów pobudzania nad hamowaniem, ruchy płynne, celowe i swobodne.',
          'II apogeum motoryczności — okres młodszy szkolny: u dziewcząt w wieku 10-11 lat, u chłopców w wieku 12-13 lat. Dynamiczny rozwój wszystkich zdolności motorycznych i wyjątkowa łatwość uczenia się nowych, skomplikowanych ruchów (tzw. uczenie się z miejsca).',
        ],
      },
      {
        heading: 'Pokwitanie, młodzieńczość i dorosłość',
        body: 'Okres pokwitania to okres krytyczny w rozwoju motoryczności — pojawia się niezręczność w harmonii, dokładności i rytmie ruchu, szczególnie w ćwiczeniach gimnastycznych na przyrządach (ruchy acykliczne), przy ruchach precyzyjnych, kombinowanych oraz przy uczeniu nowych ruchów. W okresie młodzieńczym u osób nietrenujących występują maksymalne wartości większości zdolności motorycznych (zwłaszcza koordynacyjnych), kształtuje się indywidualny styl motoryczny i rozchodzą się linie rozwojowe kobiety i mężczyzny. Wiek dorosły i dojrzały nie sprzyja już rozwojowi motoryki.',
      },
      {
        heading: 'Starość',
        bullets: [
          'Wczesna starość: 60-75 rok życia; późna starość: powyżej 75 roku życia.',
          'Zanik potrzeby ruchu i neofobia (strach przed uczeniem się nowego ruchu).',
          'Zmniejszenie tempa ruchu, wydłużenie czasu reakcji, sztywność aparatu ruchu.',
          'Sarkopenia — zanik włókien mięśniowych, spadek masy mięśniowej i obniżenie siły.',
          'Obniżenie poziomu koordynacji ruchowej i ograniczenie ruchomości w stawach.',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'W którym roku życia przypada I apogeum motoryczności, zwane złotym okresem motoryczności?',
        options: ['Ok. 3 roku życia', 'Ok. 5 roku życia', 'Ok. 7 roku życia', 'Ok. 10 roku życia'],
        correct: 1,
        explain: 'I apogeum motoryczności (złoty okres) przypada na ok. 5 rok życia, w okresie przedszkolnym.',
      },
      {
        type: 'abcd',
        q: 'W jakim wieku przypada II apogeum motoryczności u chłopców?',
        options: ['10-11 lat', '8-9 lat', '12-13 lat', '14-15 lat'],
        correct: 2,
        explain: 'II apogeum motoryczności występuje u dziewcząt w wieku 10-11 lat, a u chłopców w wieku 12-13 lat.',
      },
      {
        type: 'tf',
        q: 'Okres pokwitania określa się jako okres krytyczny w rozwoju motoryczności, w którym pojawia się niezręczność ruchowa.',
        correct: true,
        explain: 'Pokwitanie to okres krytyczny — występują zakłócenia w harmonii, dokładności i rytmie ruchu, zwłaszcza przy ruchach acyklicznych i precyzyjnych.',
      },
      {
        type: 'flash',
        front: 'Wymień charakterystyczne cechy motoryczności w okresie starości.',
        back: 'Zanik potrzeby ruchu, neofobia, zmniejszenie tempa ruchu, wydłużenie czasu reakcji, sztywność aparatu ruchu, sarkopenia (zanik włókien i spadek masy mięśniowej), obniżenie koordynacji oraz ograniczenie ruchomości w stawach.',
      },
    ],
  },
  {
    id: 'rek-recepta-ruchowa-niepelnosprawni',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 17,
    title: 'Recepta ruchowa — ramowy program zajęć rekreacji dla osób z niepełnosprawnością',
    summary:
      'Ramowy program zajęć rekreacji fizycznej dla osób z niepełnosprawnością, zwany receptą ruchową, powinien zawierać konkretne kategorie informacji: od wskazań i przeciwwskazań, przez modyfikacje i techniki adaptacyjne, po dawkowanie wysiłku i metody samokontroli.',
    wiki: [
      {
        heading: 'Czym jest recepta ruchowa',
        body: 'Recepta ruchowa to ramowy program zajęć rekreacji fizycznej przygotowany z myślą o osobach z niepełnosprawnością. Określa, jak bezpiecznie i skutecznie dobrać oraz dawkować aktywność ruchową w zależności od rodzaju dysfunkcji uczestnika.',
      },
      {
        heading: 'Kategorie informacji w recepcie ruchowej',
        bullets: [
          'Szczegółowe wskazania i przeciwwskazania do wykonywania poszczególnych zadań ruchowych.',
          'Modyfikacja sposobu wykonywania zadań ruchowych w zależności od rodzaju występującej dysfunkcji.',
          'Możliwości stosowania różnych technik adaptacyjnych w poszczególnych formach ruchu.',
          'Optymalna częstotliwość i czas trwania zajęć rekreacyjnych.',
          'Informacja o korzyściach płynących z danej formy rekreacji dla usprawniania leczniczego pacjenta.',
          'Metody samokontroli tolerancji wysiłkowej pacjenta (zmęczenie, ból, tętno wysiłkowe itp.).',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który z elementów NIE należy do kategorii informacji recepty ruchowej?',
        options: [
          'Wskazania i przeciwwskazania do zadań ruchowych',
          'Techniki adaptacyjne w formach ruchu',
          'Lista nagród za udział w zajęciach',
          'Metody samokontroli tolerancji wysiłkowej',
        ],
        correct: 2,
        explain: 'Recepta ruchowa obejmuje wskazania/przeciwwskazania, modyfikacje, techniki adaptacyjne, dawkowanie, korzyści i samokontrolę — nie zawiera listy nagród.',
      },
      {
        type: 'tf',
        q: 'Recepta ruchowa powinna zawierać metody samokontroli tolerancji wysiłkowej pacjenta, takie jak obserwacja zmęczenia, bólu czy tętna wysiłkowego.',
        correct: true,
        explain: 'Zgodnie ze źródłem recepta podaje metody samokontroli tolerancji wysiłkowej (zmęczenie, ból, tętno wysiłkowe itp.).',
      },
      {
        type: 'tf',
        q: 'Recepta ruchowa zaleca jednakowy sposób wykonywania zadań ruchowych dla wszystkich, niezależnie od rodzaju dysfunkcji.',
        correct: false,
        explain: 'Przeciwnie — recepta wymaga modyfikacji sposobu wykonywania zadań ruchowych w zależności od rodzaju występującej dysfunkcji.',
      },
      {
        type: 'flash',
        front: 'Wymień kategorie informacji, które powinna zawierać recepta ruchowa.',
        back: 'Wskazania i przeciwwskazania, modyfikacje zadań zależnie od dysfunkcji, techniki adaptacyjne, optymalna częstotliwość i czas trwania zajęć, informacja o korzyściach leczniczych oraz metody samokontroli tolerancji wysiłkowej.',
      },
    ],
  },
  {
    id: 'rek-piersieniowka-promocja-regionu',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 18,
    title: 'Pierścieniówka jako polski sport promujący region turystyczny',
    summary:
      'Pierścieniówka to polska gra tradycyjna zbliżona do siatkówki, wymyślona w latach 30. XX wieku przez Władysława Robakowskiego. Dzięki obecności na festynach i imprezach integracyjnych stanowi element promujący region turystyczny.',
    wiki: [
      {
        heading: 'Zasady gry',
        body: 'Pierścieniówka to polska gra tradycyjna, w której dwie drużyny (zazwyczaj 4 na 4) rywalizują, oburęcznie przerzucając piłkę przez siatkę z trzema otworami; środkowy otwór jest większy niż boczne. Można w nią grać na polu do siatkówki, potrzebna jest jednak specjalna siatka. Sport ten wymyślił w latach 30. XX wieku nauczyciel gimnastyki Władysław Robakowski.',
      },
      {
        heading: 'Dostępność i promocja regionu',
        body: 'Pierścieniówka to dynamiczna gra odpowiednia zarówno dla dzieci i młodzieży, jak i dorosłych, a także dla osób niepełnosprawnych, co udowodniło Stowarzyszenie Sportowo-Rehabilitacyjne START z Poznania. Bywa rozgrywana podczas festynów, imprez integracyjnych i świąt, takich jak Majówka, Dzień Dziecka, Jarmark Świętojański czy Festiwal Integracje w Poznaniu. Od momentu przywrócenia do życia jest coraz częściej pokazywana podczas ważnych imprez sportowych, w tym Światowych Igrzysk Sportów Tradycyjnych.',
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Kto wymyślił pierścieniówkę w latach 30. XX wieku?',
        options: [
          'Władysław Robakowski',
          'James Naismith',
          'William G. Morgan',
          'Stowarzyszenie START z Poznania',
        ],
        correct: 0,
        explain: 'Pierścieniówkę wymyślił w latach 30. XX wieku nauczyciel gimnastyki Władysław Robakowski.',
      },
      {
        type: 'abcd',
        q: 'Ile otworów ma siatka używana w pierścieniówce?',
        options: ['Dwa', 'Cztery', 'Trzy', 'Jeden'],
        correct: 2,
        explain: 'Siatka w pierścieniówce ma trzy otwory, przy czym środkowy jest większy niż boczne.',
      },
      {
        type: 'tf',
        q: 'Pierścieniówka jest grą, w którą mogą grać także osoby niepełnosprawne, co udowodniło Stowarzyszenie Sportowo-Rehabilitacyjne START z Poznania.',
        correct: true,
        explain: 'Źródło wskazuje, że pierścieniówka jest dostępna dla osób niepełnosprawnych, co potwierdziło poznańskie Stowarzyszenie START.',
      },
      {
        type: 'flash',
        front: 'Na czym polega gra w pierścieniówkę?',
        back: 'Dwie drużyny (zazwyczaj 4 na 4) oburęcznie przerzucają piłkę przez siatkę z trzema otworami (środkowy większy niż boczne). Grać można na boisku do siatkówki, potrzebna jest jednak specjalna siatka.',
      },
    ],
  },
  {
    id: 'rek-gry-terenowe-miejskie-grupy-wiekowe',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 19,
    title: 'Gry terenowe i miejskie dla różnych grup wiekowych i ich charakter edukacyjny',
    summary:
      'Gry terenowe i miejskie angażują wszystkie grupy wiekowe — od dzieci po seniorów — i pełnią funkcję edukacyjną: uczą korzystania z mapy i kompasu, współpracy, spostrzegawczości oraz poznawania przyrody i lokalnej kultury.',
    wiki: [
      {
        heading: 'Dzieci (6-12 lat)',
        bullets: [
          'Skarb piratów — mapa z drogą do skarbu i zadaniami po drodze; uczy korzystania z mapy i współpracy.',
          'Spacer po lesie — uzupełnianie zielnika w trakcie spaceru; łączy spacer z poznawaniem przyrody.',
        ],
      },
      {
        heading: 'Młodzież (13-18 lat)',
        bullets: [
          'Skarb piratów z trudniejszymi zadaniami — uczy korzystania z mapy, kompasu i współpracy.',
          'Podchody — podział na grupę „uciekającą” i „goniącą”; uczy poznawania obszaru, kreatywnego myślenia i współpracy.',
        ],
      },
      {
        heading: 'Dorośli (18+ lat)',
        bullets: [
          'Geocaching — poszukiwanie ukrytych skrytek za pomocą telefonu; uczy cierpliwości, spostrzegawczości i poznawania terenu (skrytki zawierają notatki i ciekawostki o miejscu).',
          'Bieg na orientację — bieg z mapą i kompasem do punktów kontrolnych; uczy planowania trasy i wpływa na sprawność fizyczną.',
        ],
      },
      {
        heading: 'Seniorzy (60+)',
        bullets: [
          'Gra miejska — spacer po mieście z mapą i prostymi zadaniami związanymi z lokalną kulturą i przyrodą; aktywizuje ruchowo i umysłowo, trenuje pamięć i orientację oraz integruje uczestników.',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która gra terenowa jest proponowana w źródle jako odpowiednia dla dorosłych (18+)?',
        options: ['Podchody', 'Spacer po lesie', 'Skarb piratów', 'Geocaching'],
        correct: 3,
        explain: 'Dla dorosłych proponuje się geocaching oraz bieg na orientację; podchody i Skarb piratów to propozycje dla młodzieży/dzieci.',
      },
      {
        type: 'abcd',
        q: 'Czego głównie uczy gra miejska proponowana dla seniorów?',
        options: [
          'Aktywizacji ruchowej i umysłowej, treningu pamięci i orientacji oraz integracji',
          'Wyłącznie maksymalnego wysiłku fizycznego',
          'Obsługi specjalistycznego sprzętu wspinaczkowego',
          'Rywalizacji dwóch drużyn na czas',
        ],
        correct: 0,
        explain: 'Gra miejska dla seniorów ma na celu aktywizację ruchową i umysłową, trening pamięci i orientacji oraz integrację z innymi uczestnikami.',
      },
      {
        type: 'tf',
        q: 'Gra „Skarb piratów” uczy korzystania z mapy i współpracy między uczestnikami.',
        correct: true,
        explain: 'Zgodnie ze źródłem Skarb piratów uczy korzystania z mapy oraz współpracy (u młodzieży dodatkowo kompasu).',
      },
      {
        type: 'flash',
        front: 'Podaj przykład gry terenowej dla dzieci (6-12 lat) i wskaż jej walory edukacyjne.',
        back: 'Spacer po lesie z uzupełnianiem zielnika — łączy spacer z poznawaniem przyrody. Alternatywnie Skarb piratów, który uczy korzystania z mapy i współpracy.',
      },
    ],
  },
  {
    id: 'rek-snooker-bilard-roznice',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 20,
    title: 'Snooker i bilard — charakterystyka i różnice',
    summary:
      'Bilard i snooker to gry stołowe polegające na uderzaniu bil kijem i wbijaniu ich do otworów. Snooker wywodzi się z tradycyjnego bilarda, lecz różni się liczbą i wielkością bil, rozmiarem stołu, terminologią oraz bardziej zaawansowaną punktacją.',
    wiki: [
      {
        heading: 'Bilard',
        body: 'Bilard to gra stołowa polegająca na uderzaniu bil za pomocą kija i wbijaniu ich do łuz. Używa się 16 bil — białej i 15 kolorowych. Może być grany pomiędzy dwoma graczami lub drużynami. Bile są ustawione w trójkąt, przy czym bile kolorowe i połówkowe są wymieszane.',
      },
      {
        heading: 'Snooker',
        body: 'Snooker to gra bilardowa wywodząca się od tradycyjnego bilarda. Grana jest na większym stole o tym samym kształcie, pomiędzy dwoma zawodnikami lub drużynami. Używa się 22 bil (15 czerwonych, 6 kolorowych i 1 biała). Bile czerwone są rozstawione w trójkąt, a kolorowe ustawione w określonych punktach na stole.',
      },
      {
        heading: 'Najważniejsze różnice',
        bullets: [
          'Liczba bil: w snookerze 22 (15 czerwonych, 6 kolorowych, 1 biała), w bilardzie 16 (15 kolorowych, 1 biała).',
          'Wielkość bil: w snookerze są mniejsze; w snookerze nie ma numerków.',
          'Terminologia: w snookerze „kieszenie”, w bilardzie „łuzy”.',
          'Kij: w snookerze cieńszy; stół w snookerze większy (3,6 m wobec 2,8 m w bilardzie).',
          'Punktacja: w snookerze bardziej zaawansowana — bile mają wartość od 2 do 7 pkt, w bilardzie po jednym punkcie (oprócz czarnej, która kończy rozgrywkę).',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ilu bil używa się w snookerze?',
        options: ['16 bil', '22 bile', '15 bil', '21 bil'],
        correct: 1,
        explain: 'W snookerze używa się 22 bil: 15 czerwonych, 6 kolorowych i 1 białej. W bilardzie jest ich 16.',
      },
      {
        type: 'abcd',
        q: 'Jak nazywa się otwory, do których wbija się bile, w terminologii bilardowej?',
        options: ['Kieszenie', 'Bramki', 'Łuzy', 'Otwory'],
        correct: 2,
        explain: 'W bilardzie używa się terminu „łuzy”, natomiast w snookerze mówi się o „kieszeniach”.',
      },
      {
        type: 'tf',
        q: 'W snookerze stół jest większy niż w bilardzie, a kij cieńszy.',
        correct: true,
        explain: 'Zgodnie ze źródłem stół snookerowy jest większy (3,6 m wobec 2,8 m), a kij w snookerze jest cieńszy.',
      },
      {
        type: 'tf',
        q: 'W snookerze każda bila warta jest tyle samo punktów, podobnie jak w prostej punktacji bilardowej.',
        correct: false,
        explain: 'Przeciwnie — punktacja w snookerze jest bardziej zaawansowana: bile mają wartość od 2 do 7 punktów, podczas gdy w bilardzie liczone są po jednym punkcie.',
      },
    ],
  },
]
