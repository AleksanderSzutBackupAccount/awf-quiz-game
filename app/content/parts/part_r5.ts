import type { Topic } from '../types'

export const partR5: Topic[] = [
  {
    id: 'rek-pomiar-aktywnosci-i-sprawnosci-fizycznej',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 21,
    title: 'Metody pomiaru aktywności i sprawności fizycznej w różnych grupach wiekowych',
    summary: 'Aktywność fizyczną mierzy się metodami obiektywnymi i subiektywnymi, a sprawność fizyczną zestawami testów dobranymi do wieku, takimi jak HBSC, IPAQ, Eurofit czy Senior fitness test.',
    wiki: [
      {
        heading: 'Aktywność a sprawność fizyczna',
        body: 'Aktywność fizyczna to ruch ciała wykonywany przez mięśnie szkieletowe, stanowiący element zdrowego stylu życia związany z rozwojem, zdrowiem i dobrym samopoczuciem. Jest ona aktywnością ruchową, ale nie każda aktywność ruchowa jest aktywnością fizyczną. Sprawność fizyczna to umiejętność rozwiązywania konkretnych zadań ruchowych oraz zdolność do efektywnego i ekonomicznego wykonywania pracy mięśniowej.'
      },
      {
        heading: 'Metody pomiaru aktywności fizycznej',
        bullets: [
          'obiektywne: bezpośrednie (np. kalorymetria bezpośrednia) i pośrednie (np. metoda podwójnie znakowanej wody, pomiar HR, kalorymetria pośrednia)',
          'subiektywne: badania kwestionariuszowe oraz pisemna relacja',
          'test IPAQ wyraża aktywność w jednostkach MET-min./tydzień, kwalifikując do aktywności niewystarczającej (poniżej 600), dostatecznej (600-1500) lub wysokiej (powyżej 1500)'
        ]
      },
      {
        heading: 'Narzędzia dobrane do grup wiekowych',
        bullets: [
          'dzieci: HBSC (badanie WHO co 4 lata wśród uczniów w wieku 11, 13 i 15 lat) oraz PAR oceniający wsparcie rodziców',
          'dorośli (16-65 lat): IPAQ (aktywność w pracy, transporcie, rekreacji i obowiązkach domowych z ostatnich 7 dni) oraz Eurobarometr',
          'osoby starsze: ADAPT (dzienniczek aktywności) oraz CHAMPS (samoocena aktywności seniorów)'
        ]
      },
      {
        heading: 'Testy sprawności fizycznej',
        bullets: [
          'Indeks Sprawności Fizycznej K. Zuchory - ocenia 6 cech motorycznych bez skomplikowanej aparatury',
          'Eurofit - dla dzieci i młodzieży w wieku szkolnym 6-18 lat, bateria 9 prób',
          'Alpha-fit - testy terenowe dla dorosłych Europejczyków w wieku 18-69 lat',
          'Senior fitness test - wielowymiarowa ocena sprawności osób powyżej 60 r.ż.'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Które badanie aktywności fizycznej koordynowane przez WHO przeprowadza się co 4 lata wśród uczniów w wieku 11, 13 i 15 lat?',
        options: ['IPAQ', 'Eurobarometr', 'HBSC', 'CHAMPS'],
        correct: 2,
        explain: 'HBSC (Health Behaviour in School-aged Children) to międzynarodowe badanie WHO realizowane co 4 lata wśród uczniów w wieku 11, 13 i 15 lat.'
      },
      {
        type: 'abcd',
        q: 'Dla jakiej grupy wiekowej przeznaczony jest Senior fitness test?',
        options: ['Dla osób powyżej 60 r.ż.', 'Dla dzieci 6-18 lat', 'Dla dorosłych 18-69 lat', 'Dla uczniów 11-15 lat'],
        correct: 0,
        explain: 'Senior fitness test służy wielowymiarowej ocenie sprawności fizycznej osób w starszym wieku, powyżej 60 r.ż.'
      },
      {
        type: 'tf',
        q: 'Test IPAQ wyraża aktywność fizyczną w jednostkach MET-min./tydzień i pozwala zakwalifikować ją do jednej z trzech kategorii.',
        correct: true,
        explain: 'IPAQ wyraża aktywność w MET-min./tydzień, dzieląc ją na niewystarczającą (poniżej 600), dostateczną (600-1500) i wysoką (powyżej 1500).'
      },
      {
        type: 'flash',
        front: 'Wymień narzędzia pomiaru aktywności fizycznej przeznaczone dla dorosłych (16-65 lat).',
        back: 'IPAQ - kwestionariusz oceniający aktywność w pracy, transporcie, rekreacji i obowiązkach domowych z ostatnich 7 dni, oraz Eurobarometr - badanie opinii publicznej w krajach UE.'
      }
    ]
  },
  {
    id: 'rek-efekty-treningu-zdrowotnego',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 22,
    title: 'Pożądane efekty treningu zdrowotnego w trzech płaszczyznach',
    summary: 'Regularny trening zdrowotny przynosi korzyści w płaszczyźnie psychicznej, społecznej i fizycznej, od poprawy nastroju po redukcję ryzyka chorób przewlekłych.',
    wiki: [
      {
        heading: 'Czym jest trening zdrowotny',
        body: 'Trening zdrowotny to trening skupiony na utrzymaniu lub poprawie zdrowia ćwiczącego. Wykonywany regularnie niesie za sobą szereg korzyści fizycznych, psychicznych oraz społecznych.'
      },
      {
        heading: 'Płaszczyzna psychiczna',
        bullets: [
          'poprawa nastroju i redukcja stresu',
          'zwiększenie samooceny i pewności siebie',
          'łagodzenie objawów depresji',
          'zwiększenie motywacji do działania',
          'poprawa funkcji poznawczych: pamięci i koncentracji'
        ]
      },
      {
        heading: 'Płaszczyzna społeczna',
        bullets: [
          'budowanie relacji i poczucia przynależności poprzez treningi grupowe',
          'poprawa komunikacji i umiejętności interpersonalnych',
          'redukcja poczucia samotności i izolacji, szczególnie istotna dla osób starszych'
        ]
      },
      {
        heading: 'Płaszczyzna fizyczna',
        bullets: [
          'wzmacnianie układu kostno-mięśniowego',
          'poprawa wydolności krążeniowo-oddechowej',
          'regulacja masy ciała i zapobieganie otyłości',
          'redukcja ryzyka chorób przewlekłych (serca, cukrzycy typu 2, osteoporozy, nadciśnienia, niektórych nowotworów)',
          'poprawa jakości snu'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który z poniższych efektów treningu zdrowotnego należy do płaszczyzny społecznej?',
        options: ['Redukcja poczucia samotności i izolacji', 'Poprawa jakości snu', 'Wzmacnianie układu kostno-mięśniowego', 'Łagodzenie objawów depresji'],
        correct: 0,
        explain: 'Redukcja poczucia samotności i izolacji to efekt w płaszczyźnie społecznej; jakość snu i układ kostno-mięśniowy są fizyczne, a łagodzenie depresji psychiczne.'
      },
      {
        type: 'tf',
        q: 'Poprawa wydolności krążeniowo-oddechowej jest zaliczana do efektów treningu zdrowotnego w płaszczyźnie psychicznej.',
        correct: false,
        explain: 'Poprawa wydolności krążeniowo-oddechowej należy do płaszczyzny fizycznej, a nie psychicznej.'
      },
      {
        type: 'flash',
        front: 'Wymień przynajmniej trzy pożądane efekty treningu zdrowotnego w płaszczyźnie fizycznej.',
        back: 'Wzmacnianie układu kostno-mięśniowego, poprawa wydolności krążeniowo-oddechowej, regulacja masy ciała, redukcja ryzyka chorób przewlekłych oraz poprawa jakości snu.'
      }
    ]
  },
  {
    id: 'rek-rekreacja-a-rozwiazywanie-konfliktow',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 23,
    title: 'Wpływ rekreacji na rozwiązywanie konfliktów społecznych i zawodowych',
    summary: 'Dzięki funkcji katartycznej i budowaniu relacji rekreacja sprzyja zdrowej komunikacji oraz radzeniu sobie ze stresem, co ułatwia rozwiązywanie konfliktów.',
    wiki: [
      {
        heading: 'Funkcja katartyczna',
        body: 'Funkcja katartyczna (oczyszczająca) odnosi się do możliwości emocjonalnego odreagowania napięć i stresów poprzez aktywność fizyczną lub inne formy rekreacji. Jest to proces uwalniania negatywnych emocji prowadzący do odprężenia i poprawy samopoczucia, ważny dla zachowania równowagi psychicznej i fizycznej. Pozwala na odprężenie i redukcję stresu (ruch uwalnia endorfiny), uwolnienie emocji oraz katharsis, czyli oczyszczenie następujące po uwolnieniu napięć.'
      },
      {
        heading: 'Wpływ na konflikty społeczne',
        bullets: [
          'poprawa komunikacji poprzez wspólny sport i gry zespołowe',
          'budowanie relacji, zaufania i empatii',
          'redukcja stresu i napięcia towarzyszącego konfliktom',
          'wzrost umiejętności negocjacyjnych dzięki grom zespołowym',
          'tworzenie pozytywnej atmosfery wzajemnego szacunku'
        ]
      },
      {
        heading: 'Wpływ na konflikty zawodowe',
        bullets: [
          'budowanie zespołu poprzez wyjazdy integracyjne',
          'poprawa komunikacji w zespole',
          'redukcja stresu w pracy',
          'rozwijanie umiejętności rozwiązywania konfliktów wymagających współpracy i negocjacji'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Jak nazywa się funkcja rekreacji pozwalająca na emocjonalne oczyszczenie i odreagowanie napięć?',
        options: ['Funkcja integracyjna', 'Funkcja negocjacyjna', 'Funkcja motywacyjna', 'Funkcja katartyczna'],
        correct: 3,
        explain: 'Funkcja katartyczna (oczyszczająca) pozwala na odreagowanie napięć i stresów oraz uwolnienie negatywnych emocji.'
      },
      {
        type: 'tf',
        q: 'Wyjazdy integracyjne i inne formy rekreacji mogą pomóc w budowaniu silnego zespołu, co zapobiega konfliktom zawodowym.',
        correct: true,
        explain: 'Budowanie zespołu poprzez wyjazdy integracyjne sprawia, że pracownicy chętniej współpracują, co przeciwdziała konfliktom zawodowym.'
      },
      {
        type: 'flash',
        front: 'W jaki sposób rekreacja wpływa na rozwiązywanie konfliktów społecznych?',
        back: 'Poprawia komunikację, buduje relacje oparte na zaufaniu i empatii, redukuje stres, zwiększa umiejętności negocjacyjne i tworzy pozytywną atmosferę wzajemnego szacunku.'
      }
    ]
  },
  {
    id: 'rek-tance-regionalne-a-narodowe',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 24,
    title: 'Różnice pomiędzy tańcami regionalnymi a narodowymi',
    summary: 'Tańce regionalne związane są z konkretnym, niewielkim obszarem i tradycją lokalną, podczas gdy tańce narodowe reprezentują cały naród; w Polsce jest ich pięć.',
    wiki: [
      {
        heading: 'Definicje',
        bullets: [
          'tańce regionalne - tańczone w określonym regionie kraju (np. Śląsk, Mazury), jak Hajduk na Żywiecczyźnie czy Wełto na Kaszubach',
          'tańce narodowe - tańczone przez cały naród; w Polsce wyróżnia się 5 tańców narodowych',
          'polskie tańce narodowe: polonez, mazur, krakowiak, kujawiak i oberek'
        ]
      },
      {
        heading: 'Główne różnice',
        bullets: [
          'strój - tańce regionalne mają charakterystyczne stroje związane z danym regionem',
          'lokalizacja - regionalne na małym obszarze, narodowe reprezentują cały kraj',
          'różnorodność - regionalne cechuje różnorodność ruchów, narodowe ich jednolitość',
          'okoliczności - narodowe tańczono na salonach, regionalne głównie podczas obrzędów',
          'historia - regionalne związane z tradycją lokalną, narodowe z całym narodem',
          'w tańcach regionalnych stosuje się przyśpiewki'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ile tańców narodowych wyróżnia się w Polsce?',
        options: ['Trzy', 'Pięć', 'Cztery', 'Siedem'],
        correct: 1,
        explain: 'W Polsce wyróżnia się 5 tańców narodowych: polonez, mazur, krakowiak, kujawiak i oberek.'
      },
      {
        type: 'tf',
        q: 'Tańce narodowe cechuje różnorodność ruchów, a tańce regionalne ich jednolitość.',
        correct: false,
        explain: 'Jest odwrotnie: to tańce regionalne cechuje różnorodność ruchów, a tańce narodowe ich jednolitość, bo wszędzie wyglądają tak samo.'
      },
      {
        type: 'flash',
        front: 'Wymień pięć polskich tańców narodowych.',
        back: 'Polonez, mazur, krakowiak, kujawiak i oberek.'
      }
    ]
  },
  {
    id: 'rek-imprezy-rekreacyjne-promocja-zdrowia',
    track: 'rekreacja',
    category: 'rekreacja-spec',
    number: 25,
    title: 'Rola imprez rekreacyjnych w promocji zdrowego stylu życia',
    summary: 'Imprezy rekreacyjne to widowiska i zawody organizowane dla wypoczynku i rozwoju psychofizycznego, które motywują do aktywności, budują nawyki i sprzyjają profilaktyce zdrowotnej.',
    wiki: [
      {
        heading: 'Czym jest impreza rekreacyjna',
        body: 'Impreza rekreacyjna to widowisko, koncert, zabawa lub zawody sportowe organizowane dla wypoczynku, rozrywki oraz podwyższania umiejętności i zdolności psychofizycznych uczestników. Jest to przedsięwzięcie dla dużej grupy odbiorców, jednorazowe lub cykliczne, w którym podstawowym środkiem działania programowego jest aktywność ruchowa oraz kulturalno-rozrywkowa.'
      },
      {
        heading: 'Cele imprez rekreacyjnych',
        bullets: [
          'popularyzacja rekreacyjnych form ruchowych',
          'zaspokajanie potrzeb różnych środowisk w zakresie wzorów rekreacji ruchowej',
          'rozbudzenie zainteresowań aktywnym wypoczynkiem',
          'tworzenie warunków dla pozytywnie rozumianego współzawodnictwa',
          'umożliwienie oceny sprawności fizycznej uczestników'
        ]
      },
      {
        heading: 'Korzyści dla zdrowego stylu życia',
        bullets: [
          'motywowanie do aktywności fizycznej i wykształcanie potrzeby ruchu',
          'budowanie nawyków oraz uczenie dyscypliny i systematyczności',
          'promowanie zdrowego odżywiania, snu i radzenia sobie ze stresem',
          'integracja społeczna i budowanie poczucia wspólnoty',
          'zabawa, radość i działanie na rzecz profilaktyki zdrowotnej'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Co jest podstawowym środkiem działania programowego imprezy rekreacyjnej?',
        options: ['Aktywność ruchowa oraz kulturalno-rozrywkowa', 'Wyłącznie rywalizacja sportowa wyczynowa', 'Bierny odpoczynek uczestników', 'Indywidualna terapia medyczna'],
        correct: 0,
        explain: 'W imprezie rekreacyjnej podstawowym środkiem działania programowego jest aktywność ruchowa oraz kulturalno-rozrywkowa.'
      },
      {
        type: 'tf',
        q: 'Imprezy rekreacyjne mają działać na rzecz profilaktyki zdrowotnej, zapobiegając chorobom związanym z brakiem ruchu.',
        correct: true,
        explain: 'Wśród korzyści wymienia się działanie na rzecz profilaktyki zdrowotnej poprzez zapobieganie chorobom z braku ruchu oraz promowanie zdrowego odżywiania.'
      },
      {
        type: 'flash',
        front: 'Wymień przynajmniej trzy cele imprez rekreacyjnych.',
        back: 'Popularyzacja rekreacyjnych form ruchowych, zaspokajanie potrzeb różnych środowisk, rozbudzenie zainteresowań aktywnym wypoczynkiem, tworzenie warunków dla pozytywnego współzawodnictwa oraz umożliwienie oceny sprawności fizycznej.'
      }
    ]
  }
]
