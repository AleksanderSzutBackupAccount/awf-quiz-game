import type { Topic } from '../types'

export const partC4: Topic[] = [
  {
    id: 'uniwersalne-zasady-sporzadzania-listu',
    track: 'wszyscy',
    category: 'zarzadzanie',
    number: 38,
    title: 'Uniwersalne zasady sporzadzania listu',
    summary: 'Omowienie ukladu, stylu i jezyka oraz rodzajow listow.',
    wiki: [
      {
        heading: 'Uklad listu',
        body: 'Poprawnie sporzadzony list ma stala, logiczna strukture, ktora porzadkuje przekaz.',
        bullets: [
          'Naglowek - dane nadawcy oraz data',
          'Adresat - imie, nazwisko lub nazwa firmy i adres',
          'Zwrot grzecznosciowy - formalny (Szanowna Pani) lub nieformalny (Droga Anno, czesc)',
          'Tresc - logiczna, podzielona na akapity, jasna i poprawna',
          'Zakonczenie - podsumowanie, prosba o odpowiedz lub podziekowanie',
          'Zwrot koncowy i podpis - formalny (Z wyrazami szacunku) lub nieformalny (pozdrawiam serdecznie)'
        ]
      },
      {
        heading: 'Styl i jezyk',
        bullets: [
          'Dostosowanie do odbiorcy - styl formalny lub nieformalny',
          'Jasnosc i zwiezlosc - unikamy dygresji, mowimy konkretnie',
          'Poprawnosc jezykowa - brak bledow ortograficznych i stylistycznych',
          'Uprzejmosc - nawet w skargach zachowujemy uprzejmy i rzeczowy ton'
        ]
      },
      {
        heading: 'Rodzaje listow',
        bullets: [
          'Formalny - do urzedow i firm, oficjalny styl (list motywacyjny, reklamacje)',
          'Nieformalny - do znajomych i rodziny, swobodny styl',
          'Biznesowy - elementy formalne, ale bardziej elastyczny ton (oferta, podziekowania dla klienta)'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ktory element listu zawiera dane nadawcy oraz date?',
        options: ['Adresat', 'Naglowek', 'Zwrot koncowy', 'Tresc'],
        correct: 1,
        explain: 'Naglowek listu zawiera dane nadawcy plus date.'
      },
      {
        type: 'tf',
        q: 'Nawet w listach ze skarga nalezy zachowac uprzejmy i rzeczowy ton.',
        correct: true,
        explain: 'Uprzejmosc to jedna z zasad stylu - obowiazuje takze w skargach.'
      },
      {
        type: 'flash',
        front: 'Wymien rodzaje listow.',
        back: 'Formalny (urzedy, firmy), nieformalny (znajomi, rodzina) oraz biznesowy (elementy formalne, lecz bardziej elastyczny ton).'
      }
    ]
  },
  {
    id: 'bariery-komunikacji-miedzykulturowej',
    track: 'wszyscy',
    category: 'zarzadzanie',
    number: 41,
    title: 'Cechy charakteru i bariery wewnetrzne utrudniajace komunikacje miedzykulturowa',
    summary: 'Cechy charakteru oraz bariery wewnetrzne uniemozliwiajace dobra komunikacje miedzykulturowa.',
    wiki: [
      {
        heading: 'Cechy charakteru utrudniajace komunikacje',
        bullets: [
          'Egocentryzm - skupienie na sobie utrudnia dostrzeganie odmiennych sposobow wyrazania mysli, emocji i wartosci',
          'Brak empatii - niezdolnosc do postawienia sie w sytuacji drugiej osoby ogranicza rozumienie jej perspektywy kulturowej',
          'Niskie umiejetnosci spoleczne - trudnosci w nawiazywaniu relacji i adaptacji do nowych sytuacji kulturowych',
          'Zamkniecie na zmiany - przywiazanie do jedynie slusznych norm utrudnia adaptacje do nowych kontekstow kulturowych'
        ]
      },
      {
        heading: 'Bariery wewnetrzne',
        bullets: [
          'Lek i niepewnosc - obawa przed niezrozumieniem lub byciem ocenianym prowadzi do wycofania z komunikacji',
          'Stereotypy i uprzedzenia - automatyczne przypisywanie cech osobom z danej kultury prowadzi do bledow i konfliktow',
          'Szok kulturowy - intensywne przezycia w nowej kulturze moga wywolac frustracje, lek i odrzucenie odmiennych norm',
          'Brak samoswiadomosci i tozsamosci kulturowej - nieznajomosc wlasnych uwarunkowan utrudnia zrozumienie roznic',
          'Etnocentryzm - przekonanie, ze wlasna kultura jest lepsza',
          'Nietolerancja oraz brak kompetencji kulturowych'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Jak nazywa sie przekonanie, ze wlasna kultura jest lepsza od innych?',
        options: ['Etnocentryzm', 'Egocentryzm', 'Empatia', 'Sensualizm'],
        correct: 0,
        explain: 'Etnocentryzm to przekonanie o wyzszosci wlasnej kultury - bariera komunikacji miedzykulturowej.'
      },
      {
        type: 'tf',
        q: 'Brak empatii ulatwia zrozumienie perspektywy kulturowej drugiej osoby.',
        correct: false,
        explain: 'Przeciwnie - brak empatii ogranicza zrozumienie perspektywy kulturowej innej osoby.'
      },
      {
        type: 'flash',
        front: 'Czym jest szok kulturowy jako bariera komunikacji?',
        back: 'Intensywne przezycia zwiazane z wejsciem w nowa kulture, ktore moga wywolac frustracje, lek i odrzucenie odmiennych norm.'
      }
    ]
  },
  {
    id: 'pozytywne-skutki-wielkich-odkryc-geograficznych',
    track: 'wszyscy',
    category: 'historia',
    number: 42,
    title: 'Pozytywne skutki Epoki Wielkich Odkryc Geograficznych',
    summary: 'Korzysci, jakie Epoka Wielkich Odkryc Geograficznych przyniosla swiatu i ludzkosci.',
    wiki: [
      {
        heading: 'Czym byly Wielkie Odkrycia Geograficzne',
        body: 'Epoka Wielkich Odkryc Geograficznych (XV-XVII wiek) to okres dalekich wypraw morskich Europejczykow w celu poznania nowych ladow i znalezienia nowych szlakow handlowych. Najwazniejsi odkrywcy to m.in. Krzysztof Kolumb, Vasco da Gama oraz Ferdynand Magellan.'
      },
      {
        heading: 'Wiedza, nauka i nawigacja',
        bullets: [
          'Poznanie nowych kontynentow i oceanow oraz dokladniejsze mapowanie swiata',
          'Udowodnienie mozliwosci oplyniecia Ziemi',
          'Rozwoj kartografii, geografii i astronomii',
          'Doskonalenie instrumentow nawigacyjnych (kompas, astrolabium) i budowy statkow'
        ]
      },
      {
        heading: 'Gospodarka i wymiana',
        bullets: [
          'Powstanie nowych szlakow handlowych laczacych Europe, Afryke, Azje i Ameryke',
          'Rozwoj portow, miast handlowych i transportu morskiego',
          'Wymiana kolumbijska - do Europy trafily ziemniaki, kukurydza, pomidory, kakao i tyton; do Ameryki konie, bydlo, pszenica i trzcina cukrowa',
          'Wzrost produkcji zywnosci, ograniczenie glodu i wzrost liczby ludnosci',
          'Pobudzenie kapitalizmu handlowego, bankowosci i podstaw gospodarki globalnej'
        ]
      },
      {
        heading: 'Kontakty miedzykulturowe',
        body: 'Mimo licznych konfliktow doszlo do poznawania nowych kultur i tradycji, wymiany wiedzy i doswiadczen oraz wzrostu zainteresowania roznorodnoscia swiata. Dzieki odkryciom swiat stal sie bardziej polaczony gospodarczo, kulturowo i komunikacyjnie, co stworzylo podstawy wspolczesnej globalizacji.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ktore rosliny w ramach tzw. wymiany kolumbijskiej trafily do Europy?',
        options: ['Pszenica i trzcina cukrowa', 'Len i konopie', 'Ryz i jeczmien', 'Ziemniaki i kukurydza'],
        correct: 3,
        explain: 'Do Europy trafily m.in. ziemniaki, kukurydza, pomidory, kakao i tyton; pszenice i trzcine cukrowa przywieziono do Ameryki.'
      },
      {
        type: 'tf',
        q: 'Wielkie odkrycia geograficzne przyczynily sie do rozwoju kapitalizmu handlowego i podstaw gospodarki globalnej.',
        correct: true,
        explain: 'Odkrycia pobudzily kapitalizm handlowy, bankowosc i stworzyly podstawy gospodarki globalnej.'
      },
      {
        type: 'flash',
        front: 'Wymien trzech najwazniejszych odkrywcow Epoki Wielkich Odkryc Geograficznych.',
        back: 'Krzysztof Kolumb, Vasco da Gama oraz Ferdynand Magellan.'
      }
    ]
  },
  {
    id: 'zasady-zachowania-zdrowia',
    track: 'wszyscy',
    category: 'zywienie',
    number: 43,
    title: 'Glowne zasady zachowania zdrowia',
    summary: 'Najwazniejsze zasady sluzace zachowaniu zdrowia fizycznego i psychicznego.',
    wiki: [
      {
        heading: 'Czym jest zdrowie',
        body: 'Zdrowie to pelny dobrostan fizyczny, psychiczny i spoleczny, a nie tylko brak choroby lub niepelnosprawnosci. Czlowiek zdrowy nie tylko nie choruje, ale tez dobrze sie czuje, ma energie, sprawnie funkcjonuje w spoleczenstwie i radzi sobie z codziennymi wyzwaniami.'
      },
      {
        heading: 'Glowne zasady',
        bullets: [
          'Zdrowe odzywianie - warzywa i owoce, unikanie fast foodow, slodyczy i nadmiaru soli, picie 1,5-2 l wody dziennie, regularne posilki (3-5 razy dziennie)',
          'Sen i odpoczynek - 7-9 h snu dla doroslych, 8-10 h dla mlodziezy; sen wspomaga regeneracje i zdrowie psychiczne',
          'Aktywnosc fizyczna - co najmniej 30 min dziennie; poprawia krazenie, odpornosc, nastroj i kondycje',
          'Unikanie uzywek - alkohol, papierosy i inne srodki szkodza zdrowiu fizycznemu i psychicznemu',
          'Higiena osobista - mycie rak, codzienna kapiel, czyste ubrania, dbanie o otoczenie',
          'Zdrowie psychiczne - radzenie sobie ze stresem, wspierajace relacje, rozwijanie pasji',
          'Profilaktyka zdrowotna - regularne wizyty u lekarza i stomatologa, badania okresowe, szczepienia ochronne'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ile wody dziennie zaleca sie wypijac w ramach zdrowego odzywiania?',
        options: ['okolo 1,5-2 l', 'okolo 0,5 l', 'okolo 3-4 l', 'okolo 5 l'],
        correct: 0,
        explain: 'Zaleca sie picie okolo 1,5-2 l wody dziennie.'
      },
      {
        type: 'tf',
        q: 'Doroslym zaleca sie 4-5 godzin snu na dobe.',
        correct: false,
        explain: 'Zalecane jest 7-9 h snu dla doroslych (a dla mlodziezy 8-10 h); 4-5 h to zbyt malo dla zdrowia.'
      },
      {
        type: 'flash',
        front: 'Podaj minimalna dzienna dawke aktywnosci fizycznej wedlug zasad zachowania zdrowia.',
        back: 'Co najmniej 30 minut dziennie (np. spacer, jazda na rowerze, plywanie, taniec).'
      }
    ]
  },
  {
    id: 'zrodla-informacji-geograficzno-turystycznej-mapy',
    track: 'wszyscy',
    category: 'turystyka',
    number: 44,
    title: 'Zrodla informacji geograficzno-turystycznej i znaczenie map',
    summary: 'Rodzaje zrodel informacji turystycznej oraz znaczenie map w badaniach srodowiska i dzialalnosci turystyczno-rekreacyjnej.',
    wiki: [
      {
        heading: 'Zrodla informacji geograficzno-turystycznej',
        bullets: [
          'Mapy i atlasy turystyczne - ukształtowanie terenu, szlaki, obiekty przyrodnicze i kulturowe',
          'Przewodniki turystyczne - opisy atrakcji, szlakow, propozycje tras, informacje praktyczne',
          'Informatory i foldery - krotkie broszury promujace region, wydarzenia i miejsca',
          'Internet - strony, blogi podroznicze, aplikacje (Google Maps, Booking, TripAdvisor)',
          'Lokalne centra informacji turystycznej - aktualne dane i materialy promocyjne',
          'Filmy dokumentalne i programy podroznicze - krajobraz, kultura i przyroda',
          'Dane statystyczne i raporty - ruch turystyczny, liczba turystow, wplyw na srodowisko'
        ]
      },
      {
        heading: 'Znaczenie map w badaniach srodowiska geograficznego',
        bullets: [
          'Orientacja w terenie - planowanie trasy, polozenie atrakcji, wyznaczenie kierunku',
          'Analiza srodowiska - mapy topograficzne, klimatyczne i hydrograficzne pozwalaja badac cechy srodowiska',
          'Bezpieczenstwo - unikanie trudnych lub niebezpiecznych terenow, szczegolnie w gorach i lasach',
          'Planowanie infrastruktury - projektowanie szlakow pieszych, rowerowych, miejsc wypoczynkowych',
          'Lokalizacja atrakcji i infrastruktury - rozmieszczenie hoteli, restauracji, zabytkow'
        ]
      },
      {
        heading: 'Znaczenie map w dzialalnosci turystyczno-rekreacyjnej',
        bullets: [
          'Ulatwiaja nawigacje, szczegolnie w gorach, lasach i terenach nieznanych',
          'Pomagaja odkryc nowe, mniej znane atrakcje',
          'Wspieraja rozwoj ekoturystyki - tworzenie tras zgodnych z ochrona przyrody',
          'Pomagaja w promocji regionow - sa uzywane w kampaniach informacyjnych i marketingowych'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ktory rodzaj map sluzy do badania cech srodowiska przyrodniczego?',
        options: ['Mapy polityczne', 'Mapy topograficzne, klimatyczne i hydrograficzne', 'Mapy administracyjne', 'Mapy drogowe miast'],
        correct: 1,
        explain: 'Mapy tematyczne - topograficzne, klimatyczne i hydrograficzne - pozwalaja badac cechy srodowiska przyrodniczego.'
      },
      {
        type: 'tf',
        q: 'Lokalne centra informacji turystycznej sa jednym ze zrodel informacji geograficzno-turystycznej.',
        correct: true,
        explain: 'Lokalne centra informacji turystycznej dostarczaja aktualne dane i materialy promocyjne.'
      },
      {
        type: 'flash',
        front: 'Wymien co najmniej trzy zrodla informacji geograficzno-turystycznej.',
        back: 'M.in. mapy i atlasy, przewodniki turystyczne, informatory i foldery, Internet, lokalne centra informacji turystycznej, filmy dokumentalne, dane statystyczne i raporty.'
      }
    ]
  },
  {
    id: 'wartosci-zdrowotne-gier-terenowych-bieg-na-orientacje',
    track: 'wszyscy',
    category: 'fizjologia',
    number: 45,
    title: 'Wartosci zdrowotne i edukacyjne gier terenowych na przykladzie biegu na orientacje',
    summary: 'Wartosci zdrowotne, edukacyjne oraz wielostronne oddzialywanie biegu na orientacje na organizm rekreanta i turysty.',
    wiki: [
      {
        heading: 'Przyklad: bieg na orientacje',
        body: 'Bieg na orientacje to popularna na calym swiecie gra sportowo-rekreacyjna, polegajaca na odnalezieniu wyznaczonych punktow kontrolnych w terenie przy pomocy mapy i kompasu. Moze byc rozgrywana indywidualnie lub w zespolach - w lesie, parku, gorach czy terenie miejskim.'
      },
      {
        heading: 'Wartosci zdrowotne',
        bullets: [
          'Rozwijanie kondycji fizycznej - bieganie lub szybki marsz w zroznicowanym terenie',
          'Poprawa wydolnosci oddechowo-krazeniowej, sily i koordynacji',
          'Dotlenienie organizmu - aktywnosc na swiezym powietrzu',
          'Zmniejszenie stresu i napiecia psychicznego - kontakt z natura dziala uspokajajaco'
        ]
      },
      {
        heading: 'Wartosci edukacyjne',
        bullets: [
          'Nauka orientacji w terenie',
          'Myslenie przestrzenne i szybkie podejmowanie decyzji',
          'Poznawanie srodowiska geograficznego i przyrodniczego',
          'Samodzielnosc i odpowiedzialnosc - uczestnik sam planuje trase i tempo'
        ]
      },
      {
        heading: 'Wielostronne oddzialywanie na organizm',
        bullets: [
          'Fizyczne - poprawa sprawnosci ogolnej, rownowagi i refleksu',
          'Psychiczne - rozwoj koncentracji, logicznego myslenia i odpornosci na stres',
          'Spoleczne - integracja w grupie i zdrowa rywalizacja (w wersjach druzynowych)',
          'Emocjonalne - poczucie przygody, adrenalina, satysfakcja z ukonczenia trasy'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Za pomoca jakich narzedzi rekreant odnajduje punkty kontrolne w biegu na orientacje?',
        options: ['Telefonu i zegarka', 'Lornetki i busoli satelitarnej', 'Mapy i kompasu', 'Wylacznie znakow szlaku'],
        correct: 2,
        explain: 'Bieg na orientacje polega na odnalezieniu punktow kontrolnych przy pomocy mapy i kompasu.'
      },
      {
        type: 'tf',
        q: 'Bieg na orientacje moze byc rozgrywany wylacznie indywidualnie.',
        correct: false,
        explain: 'Moze byc rozgrywany indywidualnie lub w zespolach, w roznych typach terenu.'
      },
      {
        type: 'flash',
        front: 'Wymien obszary wielostronnego oddzialywania biegu na orientacje na organizm.',
        back: 'Fizyczne, psychiczne, spoleczne oraz emocjonalne.'
      }
    ]
  },
  {
    id: 'epoki-historyczne-chronologicznie',
    track: 'wszyscy',
    category: 'historia',
    number: 46,
    title: 'Epoki historyczne w ukladzie chronologicznym - kultura i sztuka',
    summary: 'Chronologiczny przeglad epok historycznych wraz z osiagnieciami i przemianami w kulturze i sztuce.',
    wiki: [
      {
        heading: 'Od prehistorii do starozytnosci',
        bullets: [
          'Prehistoria (do ok. 4000-3500 p.n.e.) - rewolucja neolityczna, malarstwo jaskiniowe (Lascaux, Altamira), wenus paleolityczne, architektura megalityczna (Stonehenge)',
          'Starozytnosc (do 476 n.e.) - wynalezienie pisma, demokracja i filozofia w Grecji, prawo rzymskie; piramidy w Gizie, greckie porzadki architektoniczne, rzymski beton (Panteon, Koloseum)'
        ]
      },
      {
        heading: 'Sredniowiecze, renesans, barok',
        bullets: [
          'Sredniowiecze (476-1453/1492) - teocentryzm, scholastyka, pierwsze uniwersytety; styl romanski i gotycki (sklepienie krzyzowo-zebrowe, witraze)',
          'Renesans (XV-XVI w.) - humanizm i antropocentryzm, druk Gutenberga, heliocentryzm Kopernika; perspektywa linearna, Leonardo da Vinci, Michal Aniol, Rafael',
          'Barok (koniec XVI - polowa XVIII w.) - kontrreformacja, dynamizm i swiatlocien (Caravaggio), opera Monteverdiego, Bernini, Rembrandt, Rubens'
        ]
      },
      {
        heading: 'Oswiecenie, romantyzm, pozytywizm',
        bullets: [
          'Oswiecenie (XVIII w.) - "wiek rozumu", racjonalizm, Wielka Rewolucja Francuska (1789); rokoko i klasycyzm, Mozart, Haydn, bajki Krasickiego',
          'Romantyzm (koniec XVIII - polowa XIX w.) - bunt przeciw racjonalizmowi, kult jednostki, mesjanizm; Mickiewicz, Slowacki, Chopin, neogotyk',
          'Pozytywizm i realizm (2. polowa XIX w.) - scjentyzm, ewolucjonizm, praca u podstaw; powiesc realistyczna (Prus, Sienkiewicz), narodziny impresjonizmu (Monet)'
        ]
      },
      {
        heading: 'Modernizm i wspolczesnosc',
        bullets: [
          'Przelom wiekow / Mloda Polska (ok. 1890-1918) - dekadentyzm, Nietzsche, psychoanaliza Freuda; symbolizm, secesja (Klimt, Mucha)',
          'Dwudziestolecie miedzywojenne (1918-1939) - awangarda: kubizm, futuryzm, dadaizm, surrealizm, abstrakcjonizm; funkcjonalizm (Bauhaus)',
          'Wspolczesnosc (od 1939) - kryzys humanizmu, rewolucja cyfrowa, postmodernizm; pop-art (Warhol), konceptualizm, happening i performance'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ktora epoka nazywana jest "wiekiem rozumu" i wiaze sie z Wielka Rewolucja Francuska?',
        options: ['Oswiecenie', 'Barok', 'Renesans', 'Romantyzm'],
        correct: 0,
        explain: 'Oswiecenie (XVIII w.) nazywano "wiekiem rozumu"; doprowadzilo m.in. do Wielkiej Rewolucji Francuskiej (1789).'
      },
      {
        type: 'tf',
        q: 'Cecha charakterystyczna sredniowiecza byl antropocentryzm.',
        correct: false,
        explain: 'Sredniowiecze cechowal teocentryzm (Bog osrodkiem wszystkiego); antropocentryzm — czlowiek w centrum — to cecha renesansu.'
      },
      {
        type: 'flash',
        front: 'Wymien chronologicznie epoki od renesansu do dwudziestolecia miedzywojennego.',
        back: 'Renesans, barok, oswiecenie, romantyzm, pozytywizm i realizm, Mloda Polska (modernizm), dwudziestolecie miedzywojenne.'
      }
    ]
  },
  {
    id: 'rekreacyjne-rodzaje-koszykowki',
    track: 'wszyscy',
    category: 'fizjologia',
    number: 47,
    title: 'Rekreacyjne rodzaje koszykowki',
    summary: 'Charakterystyka podstawowych rekreacyjnych odmian koszykowki wraz z ich zasadami.',
    wiki: [
      {
        heading: 'Wprowadzenie',
        body: 'Koszykowka to dynamiczna gra zespolowa, ktora doczekala sie wielu rekreacyjnych odmian. Ich celem jest uproszczenie zasad, zwiekszenie dostepnosci oraz umozliwienie gry w mniejszych grupach i na ograniczonej przestrzeni.'
      },
      {
        heading: 'Streetball (koszykowka uliczna 3x3)',
        bullets: [
          'Najbardziej znana rekreacyjna odmiana koszykowki',
          'Gra najczesciej na polowie boiska',
          'Zespoly po 3 zawodnikow na boisku (moga byc rezerwowi)',
          'Gra do 21 punktow lub przez okreslony czas',
          'Rzut z dystansu (zza luku 6,75 m) za 2 punkty, inne rzuty 1 punkt',
          'Po zdobyciu punktu druzyna przeciwna wyprowadza pilke z linii za lukiem',
          'Gra jest bardziej dynamiczna i mniej formalna niz tradycyjna koszykowka'
        ]
      },
      {
        heading: 'Koszykowka 1x1',
        bullets: [
          'Gra indywidualna - jeden zawodnik przeciwko drugiemu',
          'Skupienie na technice i umiejetnosciach indywidualnych',
          'Gra do okreslonej liczby punktow',
          'Mozliwe zasady: "kto zdobywa punkt, ten zostaje z pilka" lub zamiana',
          'Rzuty punktowane wedlug ustalen graczy (1 lub 2 pkt)'
        ]
      },
      {
        heading: 'Horse (gra w konia)',
        bullets: [
          'Gra polega na nasladowaniu ruchow przeciwnika',
          'Idealna dla dwoch lub wiecej graczy',
          'Pierwszy gracz wykonuje dowolny rzut',
          'Kto nie trafi, dostaje kolejna litere ze slowa HORSE',
          'Przegrywa gracz, ktory pierwszy uzbiera cale slowo'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ilu zawodnikow gra na boisku w jednej druzynie w streetballu?',
        options: ['2', '4', '3', '5'],
        correct: 2,
        explain: 'Streetball to koszykowka 3x3 - po 3 zawodnikow na boisku w kazdej druzynie.'
      },
      {
        type: 'tf',
        q: 'W grze Horse przegrywa gracz, ktory jako pierwszy uzbiera cale slowo HORSE.',
        correct: true,
        explain: 'Za kazdy nietrafiony rzut gracz dostaje litere; przegrywa ten, kto pierwszy uzbiera cale slowo HORSE.'
      },
      {
        type: 'flash',
        front: 'Wymien trzy podstawowe rekreacyjne rodzaje koszykowki.',
        back: 'Streetball (3x3), koszykowka 1x1 oraz Horse (gra w konia).'
      }
    ]
  }
]
