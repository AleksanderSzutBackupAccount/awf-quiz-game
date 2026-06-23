import type { Topic } from './types'
import { partC1 } from './parts/part_c1'
import { partC2 } from './parts/part_c2'
import { partC3 } from './parts/part_c3'
import { partC4 } from './parts/part_c4'
import { partC5 } from './parts/part_c5'
import { partH1 } from './parts/part_h1'
import { partP1 } from './parts/part_p1'
import { partP2 } from './parts/part_p2'
import { partP3 } from './parts/part_p3'

/**
 * Treść zagadnień opracowana na podstawie materiałów źródłowych z folderu `baza/`.
 * Każde zagadnienie: artykuł wiki (bloki) + pytania ABCD / Prawda-Fałsz / fiszki.
 * Model jest sterowany danymi — kolejne zagadnienia dodajemy tutaj bez zmian w kodzie.
 */
const core: Topic[] = [
  /* ============================ REKREACJA / TURYSTYKA ============================ */
  {
    id: 'funkcje-czasu-wolnego',
    track: 'wszyscy',
    category: 'rekreacja',
    number: 1,
    title: 'Funkcje czasu wolnego i ich potencjał wychowawczy',
    summary:
      'Siedem funkcji czasu wolnego oraz jak dobrze zorganizowany czas wolny wspiera rozwój osobisty, społeczny i moralny.',
    wiki: [
      {
        body: 'Czas wolny pełni szereg funkcji, które razem wspierają regenerację, rozwój i relacje człowieka. Dobrze zorganizowany czas wolny ma także silny potencjał wychowawczy.',
      },
      {
        heading: 'Funkcje czasu wolnego',
        bullets: [
          'Regeneracyjna — odpoczynek fizyczny i psychiczny po wysiłku, stresie i obowiązkach.',
          'Rekreacyjna — rozrywka, relaks i miłe spędzanie czasu.',
          'Rozwojowa — poszerzanie wiedzy, rozwijanie zainteresowań, nowe umiejętności (kursy, książki, warsztaty).',
          'Kompensacyjna — wyrównuje braki z innych sfer życia (aktywność, kontakt społeczny, kreatywność).',
          'Kreacyjna — twórcza realizacja przez sztukę, muzykę, pisanie, rękodzieło.',
          'Katartyczna — oczyszcza emocje, rozładowuje stres i napięcie.',
          'Społeczna — budowanie relacji, współpraca i integracja z grupą.',
        ],
      },
      {
        heading: 'Potencjał wychowawczy',
        body: 'Polega na wykorzystaniu czasu wolnego do wspierania rozwoju osobistego, społecznego i moralnego dzieci i młodzieży — to nie tylko odpoczynek, ale i szansa na wychowanie.',
        bullets: [
          'Rozwija zainteresowania i pasje — dziecko odkrywa, co lubi i w czym jest dobre.',
          'Buduje relacje społeczne oraz więzi rodzinne i rówieśnicze.',
          'Kształtuje wartości: empatię, współpracę, szacunek, zasady fair play.',
          'Chroni przed zachowaniami ryzykownymi — zorganizowany czas wolny ogranicza nudę i negatywne wpływy.',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która funkcja czasu wolnego pełni rolę oczyszczającą emocje i rozładowującą napięcie?',
        options: ['Kompensacyjna', 'Katartyczna', 'Kreacyjna', 'Regeneracyjna'],
        correct: 1,
        explain:
          'Funkcja katartyczna oczyszcza emocje oraz rozładowuje stres i napięcie.',
      },
      {
        type: 'abcd',
        q: 'Funkcja kompensacyjna czasu wolnego polega na:',
        options: [
          'twórczej realizacji przez sztukę i rękodzieło',
          'wyrównywaniu braków i niedostatków z innych sfer życia',
          'odpoczynku po wysiłku fizycznym',
          'budowaniu relacji w grupie',
        ],
        correct: 1,
        explain:
          'Funkcja kompensacyjna uzupełnia braki z innych stref życia (np. aktywność fizyczna, kontakt społeczny).',
      },
      {
        type: 'tf',
        q: 'Dobrze zorganizowany czas wolny zmniejsza podatność na nudę i chroni przed zachowaniami ryzykownymi.',
        correct: true,
        explain:
          'To jeden z elementów potencjału wychowawczego czasu wolnego.',
      },
      {
        type: 'flash',
        front: 'Wymień 7 funkcji czasu wolnego.',
        back: 'Regeneracyjna, rekreacyjna, rozwojowa, kompensacyjna, kreacyjna, katartyczna, społeczna.',
      },
    ],
  },
  {
    id: 'koncepcje-motywacyjne',
    track: 'wszyscy',
    category: 'rekreacja',
    number: 2,
    title: 'Koncepcje motywacyjne udziału w aktywności rekreacyjno-turystycznej',
    summary:
      'Motywacja jako wewnętrzny stan pobudzający do działania, piramida Maslowa, teoria autodeterminacji oraz motywacja wewnętrzna i zewnętrzna.',
    wiki: [
      {
        body: 'Motywacja to wewnętrzny stan pobudzający jednostkę do działania; kieruje zachowaniem oraz wpływa na to, jak długo i jak intensywnie coś wykonujemy. Powstaje z różnych potrzeb i może mieć charakter rodzinny, poznawczy, historyczny, zdrowotny, społeczny, estetyczny lub duchowy.',
      },
      {
        heading: 'Piramida potrzeb Maslowa',
        bullets: [
          'Fizjologiczne — odpoczynek, sen, jedzenie (wakacje zaspokajają te potrzeby).',
          'Bezpieczeństwa — podróże w spokojne miejsca, oderwanie od stresu.',
          'Przynależności — wyjazdy z rodziną i przyjaciółmi, budowanie relacji.',
          'Uznania — zdobywanie i dzielenie się nowymi doświadczeniami.',
          'Samorealizacji — poznawanie świata, rozwój osobisty, duchowy, edukacyjny.',
        ],
      },
      {
        heading: 'Teoria autodeterminacji (Ryan i Deci)',
        body: 'Wskazuje 3 kluczowe potrzeby psychologiczne: autonomię (decydowanie o sobie), kompetencję (poczucie sprawności) oraz relacje z innymi. Rekreacja pomaga je zaspokoić, dając poczucie spełnienia.',
      },
      {
        heading: 'Motywacja wewnętrzna i zewnętrzna',
        bullets: [
          'Wewnętrzna — wynika z osobistych potrzeb i przyjemności (bieganie dla satysfakcji, podróże dla poznawania świata).',
          'Zewnętrzna — związana z nagrodą lub uniknięciem kary (udział w zawodach dla medalu).',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które trzy potrzeby psychologiczne wskazuje teoria autodeterminacji Ryana i Deciego?',
        options: [
          'Fizjologiczne, bezpieczeństwa, uznania',
          'Autonomia, kompetencja, relacje z innymi',
          'Poznawcza, estetyczna, duchowa',
          'Regeneracja, kompensacja, kreacja',
        ],
        correct: 1,
        explain:
          'Teoria autodeterminacji opiera się na autonomii, kompetencji i relacjach z innymi.',
      },
      {
        type: 'abcd',
        q: 'Bieganie dla własnej satysfakcji to przykład motywacji:',
        options: ['zewnętrznej', 'wewnętrznej', 'kontrolnej', 'formalnej'],
        correct: 1,
        explain:
          'Motywacja wewnętrzna wynika z osobistych potrzeb i przyjemności z działania.',
      },
      {
        type: 'tf',
        q: 'W piramidzie Maslowa potrzeba samorealizacji znajduje się na najwyższym poziomie.',
        correct: true,
        explain:
          'Maslow uporządkował potrzeby od podstawowych (fizjologiczne) do najwyższych (samorealizacja).',
      },
      {
        type: 'flash',
        front: 'Czym różni się motywacja wewnętrzna od zewnętrznej?',
        back: 'Wewnętrzna wynika z osobistych potrzeb i przyjemności; zewnętrzna z oczekiwania nagrody lub uniknięcia kary.',
      },
    ],
  },
  {
    id: 'witaminy-antyoksydacyjne',
    track: 'wszyscy',
    category: 'zywienie',
    number: 7,
    title: 'Witaminy antyoksydacyjne i ich funkcje w organizmie',
    summary:
      'Witaminy A, C, E oraz koenzym Q10 chronią komórki przed wolnymi rodnikami; ich źródła i funkcje.',
    wiki: [
      {
        body: 'Witaminy antyoksydacyjne pomagają chronić komórki przed uszkodzeniem przez wolne rodniki — cząsteczki, które mogą sprzyjać chorobom (nowotwory, choroby serca i mózgu). Organizm broni się sam, a witaminy dodatkowo go wspierają.',
      },
      {
        heading: 'Witamina A (retinol, beta-karoten)',
        body: 'Źródła: marchew, dynia, bataty, szpinak, jarmuż.',
        bullets: [
          'Neutralizuje wolne rodniki, chroni błony komórkowe.',
          'Wspiera zdrowie skóry i błon śluzowych.',
          'Niezbędna do prawidłowego widzenia i odporności.',
        ],
      },
      {
        heading: 'Witamina C (kwas askorbinowy)',
        body: 'Źródła: cytrusy, papryka, pietruszka, truskawki, kiwi.',
        bullets: [
          'Silny antyoksydant działający w środowisku wodnym.',
          'Wspomaga syntezę kolagenu i gojenie ran.',
          'Zwiększa przyswajanie żelaza niehemowego, wzmacnia odporność.',
        ],
      },
      {
        heading: 'Witamina E (tokoferole)',
        body: 'Źródła: oleje roślinne, orzechy, nasiona, zielone warzywa.',
        bullets: [
          'Chroni błony komórkowe przed uszkodzeniami oksydacyjnymi.',
          'Wspomaga układ krwionośny, zmniejsza ryzyko miażdżycy.',
          'Poprawia stan skóry i wspiera układ nerwowy.',
        ],
      },
      {
        heading: 'Koenzym Q10',
        body: 'Nie jest witaminą, ale ma silne działanie antyoksydacyjne. Źródła: ryby, mięso, orzechy, oleje roślinne. Bierze udział w produkcji energii w mitochondriach.',
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która witamina antyoksydacyjna działa głównie w środowisku wodnym organizmu?',
        options: ['Witamina A', 'Witamina C', 'Witamina E', 'Koenzym Q10'],
        correct: 1,
        explain:
          'Witamina C jest silnym antyoksydantem neutralizującym wolne rodniki w środowisku wodnym.',
      },
      {
        type: 'abcd',
        q: 'Dobrym źródłem witaminy A (beta-karotenu) jest:',
        options: ['cytryna', 'marchew', 'olej słonecznikowy', 'ryba'],
        correct: 1,
        explain:
          'Witamina A / beta-karoten występuje m.in. w marchwi, dyni, batatach i jarmużu.',
      },
      {
        type: 'tf',
        q: 'Koenzym Q10 jest witaminą antyoksydacyjną.',
        correct: false,
        explain:
          'Koenzym Q10 nie jest witaminą, choć ma silne działanie antyoksydacyjne i uczestniczy w produkcji energii w mitochondriach.',
      },
      {
        type: 'flash',
        front: 'Czym są wolne rodniki i dlaczego są groźne?',
        back: 'To cząsteczki uszkadzające komórki; mogą sprzyjać chorobom (nowotwory, choroby serca i mózgu). Witaminy antyoksydacyjne pomagają je neutralizować.',
      },
    ],
  },
  {
    id: 'blonnik-pokarmowy',
    track: 'wszyscy',
    category: 'zywienie',
    number: 8,
    title: 'Funkcje błonnika pokarmowego w organizmie',
    summary:
      'Błonnik rozpuszczalny i nierozpuszczalny — funkcje, źródła, zalecane spożycie i skutki nadmiaru.',
    wiki: [
      {
        body: 'Błonnik pokarmowy to część roślin, która nie ulega strawieniu i wchłonięciu w przewodzie pokarmowym. Choć nie dostarcza energii, usprawnia pracę jelit, wspiera odchudzanie i pomaga regulować poziom cukru we krwi.',
      },
      {
        heading: 'Błonnik rozpuszczalny',
        body: 'W kontakcie z wodą pęcznieje i tworzy żel. Spowalnia wchłanianie węglowodanów (stabilizuje glukozę) i obniża poziom cholesterolu.',
        bullets: ['Źródła: płatki owsiane, rośliny strączkowe, siemię lniane, jabłka, cytrusy.'],
      },
      {
        heading: 'Błonnik nierozpuszczalny',
        body: 'Działa jak „szczotka” w jelitach — zwiększa objętość stolca i przyspiesza pasaż jelitowy, zapobiegając zaparciom.',
        bullets: ['Źródła: produkty pełnoziarniste, otręby, orzechy, skórki warzyw i owoców.'],
      },
      {
        heading: 'Zalecenia i nadmiar',
        bullets: [
          'Dorośli: 25–40 g błonnika dziennie.',
          'Nadmiar może powodować biegunkę i zaburzać wchłanianie składników mineralnych (żelaza, wapnia, cynku).',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który rodzaj błonnika w kontakcie z wodą tworzy żel i obniża poziom cholesterolu?',
        options: ['Nierozpuszczalny', 'Rozpuszczalny', 'Oba tak samo', 'Żaden'],
        correct: 1,
        explain:
          'Błonnik rozpuszczalny pęcznieje, tworzy żel, stabilizuje glukozę i obniża cholesterol.',
      },
      {
        type: 'abcd',
        q: 'Jakie jest zalecane dzienne spożycie błonnika u dorosłych?',
        options: ['5–10 g', '10–20 g', '25–40 g', '50–70 g'],
        correct: 2,
        explain: 'Zalecenie dla dorosłych to 25–40 g błonnika dziennie.',
      },
      {
        type: 'tf',
        q: 'Błonnik nierozpuszczalny przyspiesza pasaż jelitowy i zapobiega zaparciom.',
        correct: true,
        explain:
          'Działa jak „szczotka”, zwiększa objętość stolca i przyspiesza pasaż jelitowy.',
      },
      {
        type: 'flash',
        front: 'Jakie są skutki nadmiaru błonnika?',
        back: 'Biegunka oraz zaburzenia wchłaniania składników mineralnych (żelaza, wapnia, cynku).',
      },
    ],
  },
  {
    id: 'przystosowania-do-wysilku',
    track: 'wszyscy',
    category: 'fizjologia',
    number: 14,
    title: 'Fizjologiczne przystosowania organizmu do wysiłku fizycznego',
    summary:
      'Adaptacje do treningu wytrzymałościowego, siłowego, gibkościowego, niskiej intensywności oraz interwałowego.',
    wiki: [
      {
        body: 'Adaptacje organizmu zależą od rodzaju, intensywności, czasu trwania i częstotliwości treningu. Regularny wysiłek prowadzi do zmian czynnościowych zwiększających wydolność i sprawność.',
      },
      {
        heading: 'Trening wytrzymałościowy (bieganie, kolarstwo)',
        bullets: [
          'Wzrost pojemności minutowej serca i objętości wyrzutowej.',
          'Więcej i wydolniejsze mitochondria, wzrost VO₂ max.',
          'Lepsze ukrwienie tkanek, obniżenie tętna spoczynkowego.',
        ],
      },
      {
        heading: 'Trening siłowy (ciężary, masa ciała)',
        bullets: [
          'Hipertrofia mięśni — wzrost przekroju poprzecznego włókien.',
          'Wzrost siły i gęstości mięśniowej oraz gęstości mineralnej kości.',
          'Lepsza rekrutacja jednostek motorycznych i kontrola mięśni.',
        ],
      },
      {
        heading: 'Trening gibkości i równowagi (joga, rozciąganie)',
        bullets: [
          'Większy zakres ruchu w stawach, mniejsze ryzyko kontuzji.',
          'Relaks mięśni, lepsza koordynacja i równowaga.',
        ],
      },
      {
        heading: 'Niska intensywność oraz trening interwałowy',
        bullets: [
          'Niska intensywność: wzrost wydolności tlenowej, obniżenie kortyzolu, kontrola masy ciała.',
          'Interwały / sporty zespołowe: szybka adaptacja układu krążenia do zmiennego obciążenia, poprawa systemu tlenowego i beztlenowego.',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Hipertrofia mięśni jest charakterystyczną adaptacją dla treningu:',
        options: ['wytrzymałościowego', 'siłowego', 'gibkościowego', 'o niskiej intensywności'],
        correct: 1,
        explain:
          'Hipertrofia (wzrost przekroju włókien) to typowa adaptacja do treningu siłowego.',
      },
      {
        type: 'abcd',
        q: 'Wzrost liczby i wydolności mitochondriów oraz VO₂ max to efekt treningu:',
        options: ['siłowego', 'wytrzymałościowego', 'gibkościowego', 'oporowego'],
        correct: 1,
        explain:
          'Adaptacje tlenowe (mitochondria, VO₂ max) są typowe dla treningu wytrzymałościowego.',
      },
      {
        type: 'tf',
        q: 'Regularny trening wytrzymałościowy obniża tętno spoczynkowe.',
        correct: true,
        explain:
          'Serce pracuje efektywniej, pompując więcej krwi przy każdym skurczu, więc tętno spoczynkowe spada.',
      },
      {
        type: 'flash',
        front: 'Wymień trzy systemy energetyczne pracującego mięśnia.',
        back: 'System fosfagenowy (ATP), glikoliza beztlenowa (mleczan) i metabolizm tlenowy (mitochondria).',
      },
    ],
  },
  {
    id: 'style-kierowania',
    track: 'wszyscy',
    category: 'zarzadzanie',
    number: 16,
    title: 'Style kierowania',
    summary:
      'Trzy główne style kierowania: autokratyczny, demokratyczny i liberalny — ich zalety i wady.',
    wiki: [
      {
        body: 'Styl kierowania to sposób, w jaki kierownik zarządza zespołem: jak podejmuje decyzje, komunikuje się i wpływa na pracę. Wyróżnia się trzy główne style.',
      },
      {
        heading: 'Styl autokratyczny',
        body: 'Kierownik sam podejmuje wszystkie decyzje i ma pełną kontrolę. Sprawdza się przy dużej wiedzy kierownika i konieczności szybkich decyzji, ale z czasem obniża zaangażowanie i motywację pracowników.',
      },
      {
        heading: 'Styl demokratyczny',
        body: 'Kierownik konsultuje decyzje z pracownikami, którzy mogą wyrażać opinie. Działa dobrze przy kompetentnym i zaangażowanym zespole, ale podejmowanie decyzji bywa wolniejsze.',
      },
      {
        heading: 'Styl liberalny',
        body: 'Kierownik daje dużą swobodę — pracownicy sami decydują i wykonują zadania. Dobre przy kompetentnym, zmotywowanym zespole, ale może prowadzić do chaosu i braku kontroli. W praktyce kierownicy łączą style zależnie od sytuacji.',
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który styl kierowania zakłada konsultowanie decyzji z pracownikami?',
        options: ['Autokratyczny', 'Demokratyczny', 'Liberalny', 'Dyrektywny'],
        correct: 1,
        explain:
          'W stylu demokratycznym kierownik konsultuje się z zespołem przed podjęciem decyzji.',
      },
      {
        type: 'abcd',
        q: 'Główną wadą stylu liberalnego może być:',
        options: [
          'spadek motywacji wynikający z nadmiernej kontroli',
          'chaos i brak kontroli',
          'zbyt wolne podejmowanie decyzji przez konsultacje',
          'traktowanie pracowników jak narzędzia',
        ],
        correct: 1,
        explain:
          'Duża swoboda w stylu liberalnym może z czasem prowadzić do chaosu i braku kontroli.',
      },
      {
        type: 'tf',
        q: 'Styl autokratyczny może być skuteczny, gdy decyzje muszą być podejmowane szybko.',
        correct: true,
        explain:
          'Sprawdza się, gdy kierownik ma dużą wiedzę i potrzebne są szybkie decyzje.',
      },
      {
        type: 'flash',
        front: 'Wymień trzy główne style kierowania.',
        back: 'Autokratyczny, demokratyczny i liberalny.',
      },
    ],
  },
  {
    id: 'produkt-turystyczny',
    track: 'wszyscy',
    category: 'turystyka',
    number: 18,
    title: 'Produkt turystyczny — koncepcje, struktura i przykłady',
    summary:
      'Definicje produktu turystycznego z perspektywy firmy i turysty, elementy materialne i niematerialne oraz rodzaje produktów.',
    wiki: [
      {
        body: 'Produkt turystyczny to zestaw dóbr i usług zaspokajających potrzeby turysty związane z podróżą i pobytem. Z perspektywy przedsiębiorstwa to zestaw usług i dóbr do sprzedaży; z perspektywy turysty — zestaw przeżyć, doświadczeń i korzyści.',
      },
      {
        heading: 'Elementy materialne',
        bullets: [
          'Infrastruktura turystyczna.',
          'Baza noclegowa (hotele, pensjonaty).',
          'Gastronomia (restauracje, bary).',
          'Transport (loty, pociągi, autobusy), sprzęt, pamiątki.',
        ],
      },
      {
        heading: 'Elementy niematerialne',
        bullets: [
          'Usługi przewodnickie i informacyjne.',
          'Przeżycia emocjonalne i duchowe.',
          'Wizerunek miejsca, atmosfera, klimat i pogoda.',
          'Nowe kontakty i relacje społeczne.',
        ],
      },
      {
        heading: 'Rodzaje produktów',
        bullets: [
          'Produkty proste — pojedyncze dobra/usługi (bilet, nocleg, przewodnik).',
          'Produkty złożone (pakiety) — kombinacje usług i atrakcji (imprezy turystyczne).',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Z perspektywy turysty (konsumenta) produkt turystyczny to przede wszystkim:',
        options: [
          'zestaw usług i dóbr oferowanych do sprzedaży',
          'zestaw przeżyć, doświadczeń i korzyści',
          'wyłącznie baza noclegowa',
          'tylko transport i gastronomia',
        ],
        correct: 1,
        explain:
          'Dla turysty produkt to zestaw przeżyć, doświadczeń i korzyści; perspektywa firmy to zestaw usług/dóbr do sprzedaży.',
      },
      {
        type: 'abcd',
        q: 'Który z elementów jest niematerialnym składnikiem produktu turystycznego?',
        options: ['Baza noclegowa', 'Atmosfera i wizerunek miejsca', 'Transport', 'Sprzęt turystyczny'],
        correct: 1,
        explain:
          'Elementy niematerialne to m.in. atmosfera, wizerunek miejsca, przeżycia i relacje społeczne.',
      },
      {
        type: 'tf',
        q: 'Impreza turystyczna (pakiet) jest przykładem złożonego produktu turystycznego.',
        correct: true,
        explain:
          'Produkty złożone to kombinacje usług i atrakcji, np. imprezy turystyczne.',
      },
      {
        type: 'flash',
        front: 'Podaj dwie definicje produktu turystycznego (firma vs turysta).',
        back: 'Firma: zestaw usług i dóbr oferowanych do sprzedaży. Turysta: zestaw przeżyć, doświadczeń i korzyści.',
      },
    ],
  },
  {
    id: 'formy-ochrony-przyrody',
    track: 'wszyscy',
    category: 'przyroda',
    number: 54,
    title: 'Formy ochrony przyrody w Polsce',
    summary:
      'Parki narodowe, parki krajobrazowe, rezerwaty, Natura 2000, pomniki przyrody i pozostałe formy ochrony.',
    wiki: [
      {
        heading: 'Główne formy ochrony',
        bullets: [
          'Parki narodowe — najwyższa forma ochrony; duże obszary, surowe zakazy (np. Białowieski, Tatrzański).',
          'Parki krajobrazowe — chronią krajobraz i przyrodę z mniejszymi ograniczeniami; dopuszczalna działalność gospodarcza nieszkodliwa dla środowiska.',
          'Rezerwaty przyrody — mniejsze obszary; ścisłe (zakaz ingerencji) lub częściowe (ograniczone działania ochronne).',
          'Natura 2000 — sieć europejskich terenów chroniących zagrożone gatunki i siedliska.',
          'Pomnik przyrody — pojedyncze obiekty (drzewa, głazy, jaskinie), np. Dąb Bartek.',
        ],
      },
      {
        heading: 'Pozostałe formy',
        bullets: [
          'Użytki ekologiczne — niewielkie cenne tereny (oczka wodne, bagna, torfowiska).',
          'Zespoły przyrodniczo-krajobrazowe — obszary cenne krajobrazowo i kulturowo.',
          'Stanowiska dokumentacyjne — miejsca ważne geologicznie.',
          'Ochrona gatunkowa — roślin, zwierząt i grzybów.',
          'UNESCO — lista światowego dziedzictwa (np. Wieliczka, stare miasto w Krakowie).',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która forma ochrony przyrody w Polsce jest uznawana za najwyższą?',
        options: ['Park krajobrazowy', 'Pomnik przyrody', 'Park narodowy', 'Użytek ekologiczny'],
        correct: 2,
        explain:
          'Park narodowy to najwyższa forma ochrony — duże obszary i surowe zakazy.',
      },
      {
        type: 'abcd',
        q: 'Dąb Bartek to przykład:',
        options: ['parku narodowego', 'pomnika przyrody', 'rezerwatu ścisłego', 'użytku ekologicznego'],
        correct: 1,
        explain:
          'Pojedyncze obiekty przyrodnicze (drzewa, głazy) to pomniki przyrody — np. Dąb Bartek.',
      },
      {
        type: 'tf',
        q: 'Natura 2000 to sieć europejskich terenów chroniących zagrożone gatunki i siedliska.',
        correct: true,
        explain:
          'Natura 2000 to europejska sieć obszarów chroniących zagrożone gatunki i siedliska.',
      },
      {
        type: 'flash',
        front: 'Czym różni się rezerwat ścisły od częściowego?',
        back: 'Ścisły — całkowity zakaz ingerencji człowieka; częściowy — możliwe ograniczone działania ochronne.',
      },
    ],
  },

  /* ============================ HOTELARSTWO ============================ */
  {
    id: 'check-in-check-out',
    track: 'hotelarstwo',
    category: 'hotelarstwo',
    number: 37,
    title: 'Procedura check-in i check-out gościa hotelowego',
    summary:
      'Kroki zameldowania (check-in) i wymeldowania (check-out) gościa w hotelu.',
    wiki: [
      {
        heading: 'Check-in (zameldowanie)',
        body: 'Proces rejestracji gościa w hotelu.',
        bullets: [
          'Powitanie gościa — uprzejmie i profesjonalnie.',
          'Weryfikacja rezerwacji w systemie (imię, nazwisko, data).',
          'Prośba o dokument tożsamości (paszport / dowód).',
          'Wypełnienie karty rejestracyjnej.',
          'Autoryzacja płatności — depozyt lub preautoryzacja karty.',
          'Przekazanie klucza/karty, informacja o numerze pokoju i godzinach wymeldowania.',
          'Dodatkowe informacje (śniadanie, wifi, siłownia) i ewentualna pomoc bagażowa.',
        ],
      },
      {
        heading: 'Check-out (wymeldowanie)',
        body: 'Proces zakończenia pobytu i rozliczenia gościa.',
        bullets: [
          'Sprawdzenie tożsamości gościa (nazwisko / numer pokoju).',
          'Weryfikacja opłat — czy usługi dodatkowe (minibar, restauracja) doliczono.',
          'Rozliczenie płatności (gotówka, karta, inna metoda).',
          'Wystawienie faktury/paragonu na życzenie gościa.',
          'Zwrot depozytu i klucza/karty do pokoju.',
          'Zapytanie o opinię oraz uprzejme pożegnanie i zaproszenie ponownie.',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który krok należy do procedury check-in?',
        options: [
          'Zwrot depozytu',
          'Autoryzacja płatności / preautoryzacja karty',
          'Wystawienie faktury końcowej',
          'Zwrot klucza do pokoju',
        ],
        correct: 1,
        explain:
          'Autoryzacja płatności (depozyt lub preautoryzacja karty) to element zameldowania (check-in).',
      },
      {
        type: 'tf',
        q: 'Weryfikacja, czy usługi z minibaru zostały doliczone do rachunku, należy do check-out.',
        correct: true,
        explain:
          'Weryfikacja opłat za usługi dodatkowe to krok procedury wymeldowania (check-out).',
      },
      {
        type: 'flash',
        front: 'Wymień pierwsze trzy kroki procedury check-in.',
        back: 'Powitanie gościa, weryfikacja rezerwacji, prośba o dokument tożsamości.',
      },
    ],
  },
  {
    id: 'obiekty-hotelarskie',
    track: 'hotelarstwo',
    category: 'hotelarstwo',
    number: 48,
    title: 'Rodzaje obiektów hotelarskich i kategoryzacja w Polsce',
    summary:
      'Obiekty kategoryzowane i nieskategoryzowane oraz system gwiazdek (1–5) w Polsce.',
    wiki: [
      {
        heading: 'Obiekty kategoryzowane',
        bullets: [
          'Hotel — min. 10 pokoi, szeroki zakres usług (nocleg, wyżywienie, sprzątanie).',
          'Motel — przy trasach, parking i udogodnienia dla zmotoryzowanych, min. 10 pokoi.',
          'Pensjonat — nocleg i pełne wyżywienie, mniejszy zakres usług, min. 7 pokoi.',
          'Dom wycieczkowy, schronisko młodzieżowe, schronisko górskie, pola namiotowe/kempingi.',
        ],
      },
      {
        heading: 'Obiekty nieskategoryzowane',
        body: 'Nie muszą mieć gwiazdek, ale muszą spełniać wymagania sanitarne i techniczne.',
        bullets: [
          'Pola biwakowe, kwatery prywatne.',
          'Ośrodki wczasowe/wypoczynkowe/szkoleniowe, agroturystyka.',
        ],
      },
      {
        heading: 'System gwiazdek (1–5)',
        bullets: [
          'Hotele, motele, pensjonaty: gwiazdki 1–5; campingi 1–4.',
          '1* minimalne wyposażenie; 3* własna łazienka, TV, gastronomia; 5* luksus, recepcja 24h.',
          'Kategorię przyznaje marszałek województwa po kontroli (ustawa z 19 sierpnia 2004 r.).',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Kto przyznaje kategorię (gwiazdki) obiektowi hotelarskiemu w Polsce?',
        options: [
          'Minister sportu',
          'Marszałek województwa',
          'Burmistrz gminy',
          'Polska Izba Hotelarstwa',
        ],
        correct: 1,
        explain:
          'Kategorię nadaje marszałek województwa na wniosek właściciela po kontroli zgodności z wymaganiami.',
      },
      {
        type: 'abcd',
        q: 'Ile minimum pokoi musi mieć hotel?',
        options: ['5', '7', '10', '15'],
        correct: 2,
        explain: 'Hotel to obiekt z minimum 10 pokojami; pensjonat — min. 7.',
      },
      {
        type: 'tf',
        q: 'Agroturystyka jest obiektem kategoryzowanym gwiazdkowo.',
        correct: false,
        explain:
          'Agroturystyka należy do obiektów nieskategoryzowanych (bez gwiazdek, ale ze spełnieniem wymagań sanitarnych i technicznych).',
      },
      {
        type: 'flash',
        front: 'Czym różni się pensjonat od hotelu?',
        back: 'Pensjonat oferuje nocleg i pełne wyżywienie, ma mniejszy zakres usług i min. 7 pokoi; hotel min. 10 pokoi i szerszy zakres usług.',
      },
    ],
  },
  {
    id: 'obsluga-klienta-biuro-podrozy',
    track: 'hotelarstwo',
    category: 'hotelarstwo',
    number: 39,
    title: 'Obsługa klienta w biurze podróży i rozmowa sprzedażowa',
    summary:
      'Etapy obsługi klienta: powitanie, badanie potrzeb, prezentacja oferty, obsługa obiekcji, finalizacja i pożegnanie.',
    wiki: [
      {
        heading: 'Etapy rozmowy sprzedażowej',
        bullets: [
          'Powitanie — uśmiech, profesjonalny wygląd, aktywne słuchanie.',
          'Badanie potrzeb — pytania otwarte o miejsce, termin, budżet, liczbę osób, standard.',
          'Prezentacja oferty — kilka opcji, kluczowe informacje (cena, program, ubezpieczenia), korzyści.',
          'Obsługa obiekcji — słuchanie wątpliwości, jasne odpowiedzi, alternatywy.',
          'Finalizacja — szczegóły rezerwacji i płatności, umowa, potwierdzenie.',
          'Pożegnanie i opieka posprzedażowa — podziękowanie, kontakt, opinia po powrocie.',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Na którym etapie obsługi klienta zadajemy pytania otwarte o budżet i preferencje?',
        options: [
          'Finalizacja sprzedaży',
          'Badanie potrzeb',
          'Obsługa obiekcji',
          'Pożegnanie',
        ],
        correct: 1,
        explain:
          'Pytania otwarte o miejsce, termin, budżet i standard zadaje się na etapie badania potrzeb.',
      },
      {
        type: 'tf',
        q: 'Opieka posprzedażowa obejmuje zapytanie klienta o opinię po powrocie z wyjazdu.',
        correct: true,
        explain:
          'Pożegnanie i opieka posprzedażowa obejmują kontakt oraz zapytanie o opinię i sugestie po powrocie.',
      },
      {
        type: 'flash',
        front: 'Wymień sześć etapów obsługi klienta w biurze podróży.',
        back: 'Powitanie, badanie potrzeb, prezentacja oferty, obsługa obiekcji, finalizacja sprzedaży, pożegnanie i opieka posprzedażowa.',
      },
    ],
  },

  /* ============================ PRZYGODÓWKA ============================ */
  {
    id: 'cechy-projektu-outdoorowego',
    track: 'przygodowa',
    category: 'outdoor',
    number: 1,
    title: 'Cechy projektu outdoorowego',
    summary:
      'Czynniki kształtujące outdoor, jego aspekt emocjonalny i kulturowy oraz główne aspekty projektów outdoorowych.',
    wiki: [
      {
        body: 'Projekty outdoorowe nie muszą skupiać się na silnych emocjach ani ryzyku uszczerbku na zdrowiu. Outdoor to szerszy obszar niż turystyka — wyróżnia się outdoor recreation, education i activities. Często łączy się z turystyką miejską (np. spływ tratwami, jazda konna, narciarstwo, trekking, birdwatching).',
      },
      {
        heading: 'Czynniki kształtujące outdoor',
        bullets: [
          'Otwarta przestrzeń — miejska lub wiejska, przystosowana i bezpieczna.',
          'Integracja z otoczeniem — przestrzeń zagospodarowana, interakcja ze środowiskiem.',
          'Integracja i interakcja z uczestnikami — wycieczki, warsztaty, gry, wspólne oglądanie.',
          'Warunki atmosferyczne — pogoda jako przeszkoda lub zaleta.',
          'Element edukacji — zamierzony lub jako efekt działania.',
        ],
      },
      {
        heading: 'Główne aspekty projektów outdoorowych',
        bullets: [
          'Promocja dziedzictwa kulturowego i naturalnego.',
          'Podniesienie znaczenia lokalnej ludności i jej tożsamości.',
          'Budowanie kompetencji międzykulturowych.',
          'Budowanie obustronnego szacunku do miejsca.',
          'Tworzenie sztuki w przestrzeni i innych wytworów.',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który czynnik NIE jest typowym wyróżnikiem projektu outdoorowego?',
        options: [
          'Otwarta przestrzeń przystosowana i bezpieczna',
          'Wysokie ryzyko uszczerbku na zdrowiu jako cel',
          'Integracja z otoczeniem',
          'Interakcja z uczestnikami',
        ],
        correct: 1,
        explain:
          'Outdoor nie skupia się na dużym ryzyku — kładzie nacisk na wątki kulturowe i interakcję z otoczeniem.',
      },
      {
        type: 'tf',
        q: 'Outdoor zawęża się wyłącznie do turystyki.',
        correct: false,
        explain:
          'Outdoor to szerszy obszar; wyróżnia się outdoor recreation, education i activities.',
      },
      {
        type: 'flash',
        front: 'Wymień trzy rodzaje outdooru.',
        back: 'Outdoor recreation, outdoor education i outdoor activities.',
      },
    ],
  },
  {
    id: 'edukacja-przygodowa',
    track: 'przygodowa',
    category: 'outdoor',
    number: 3,
    title: 'Edukacja przygodowa — specyfika i charakterystyka',
    summary:
      'Outdoor education, jej trzy komponenty oraz model adventure education według Priesta i Gassa (cel, proces, wynik).',
    wiki: [
      {
        body: 'Edukacja przygodowa opiera się na uczeniu przez doświadczenie i relacji człowieka z naturą. Pojęcie outdoor education jest szerokie — obejmuje ekstremalne wyprawy, lekcje w terenie i percepcyjne obcowanie z przyrodą (pol. edukacja plenerowa).',
      },
      {
        heading: 'Trzy komponenty outdoor education',
        bullets: ['Ekologia.', 'Rozwój umiejętności fizycznych.', 'Relacje interpersonalne.'],
      },
      {
        heading: 'Adventure education wg Priesta i Gassa',
        bullets: [
          'Cel — uświadomienie uczestnikowi możliwości zmiany na lepsze (samoocena, relacje społeczne).',
          'Proces — aktywności grupowe/indywidualne wymagające decyzyjności, rozwiązywania problemów, komunikacji, współpracy, zaufania i ryzyka (emocjonalnego, społecznego, fizycznego).',
          'Wynik — samodoskonalenie; zmierzenie się z ograniczeniami i rozwój potencjału, poprawa relacji z innymi i sobą.',
        ],
      },
      {
        body: 'Adventure education i environmental education zawierają się w szerszym ujęciu outdoor education. Na zachodzie rozwinęły się dwa nurty: pedagogika przygody (kraje anglosaskie) oraz pedagogika przeżyć (m.in. Niemcy, Czechy).',
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które trzy komponenty łączą działania outdoor education?',
        options: [
          'Ekonomia, marketing, logistyka',
          'Ekologia, rozwój umiejętności fizycznych, relacje interpersonalne',
          'Ryzyko, rywalizacja, nagroda',
          'Historia, kultura, sztuka',
        ],
        correct: 1,
        explain:
          'Outdoor education łączy ekologię, rozwój umiejętności fizycznych oraz relacje interpersonalne.',
      },
      {
        type: 'abcd',
        q: 'Według Priesta i Gassa wynikiem adventure education jest:',
        options: ['zysk finansowy', 'samodoskonalenie', 'zdobycie certyfikatu', 'wygrana w rywalizacji'],
        correct: 1,
        explain:
          'Wynik to samodoskonalenie — rozwój potencjału i poprawa relacji z innymi i sobą.',
      },
      {
        type: 'tf',
        q: 'Pedagogika przeżyć rozwinęła się głównie w krajach anglosaskich.',
        correct: false,
        explain:
          'W krajach anglosaskich rozwinęła się pedagogika przygody; pedagogika przeżyć — m.in. w Niemczech i Czechach.',
      },
      {
        type: 'flash',
        front: 'Opisz model adventure education wg Priesta i Gassa.',
        back: 'Cel (zmiana na lepsze), proces (aktywności wymagające decyzyjności, współpracy i ryzyka) oraz wynik (samodoskonalenie).',
      },
    ],
  },
]

// Pełny zestaw = zagadnienia bazowe + opracowane partiami (sterowane danymi).
export const topics: Topic[] = [
  ...core,
  ...partC1,
  ...partC2,
  ...partC3,
  ...partC4,
  ...partC5,
  ...partH1,
  ...partP1,
  ...partP2,
  ...partP3,
]
