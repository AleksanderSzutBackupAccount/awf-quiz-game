import type { Topic } from '../types'

export const partP1: Topic[] = [
  {
    id: 'uczestnicy-turystyki-przygodowej',
    track: 'przygodowa',
    category: 'outdoor',
    number: 2,
    title: 'Charakterystyka uczestników turystyki przygodowej',
    summary: 'Uczestników turystyki przygodowej napędzają emocje z przekraczania strefy komfortu, a sama przygoda ma dla nich charakter subiektywny.',
    wiki: [
      {
        heading: 'Poziomy przygody i oczekiwania',
        body: 'Wyróżnia się cztery poziomy przygody: nieszczęście, przygodę ekstremalną, przygodę i zabawę. Modelowo poziom wyzwania musi być dostosowany do poziomu uczestników, a uczestnicy powinni mieć wyrobione oczekiwania, które w efekcie aktywności mogą zostać spełnione lub osiągnięte. Uczestnik musi widzieć szansę na osiągnięcie sukcesu, dzięki czemu towarzyszy mu optymizm.'
      },
      {
        heading: 'Motywacja i subiektywność',
        body: 'Ludzi do uprawiania turystyki przygodowej skłaniają emocje wynikające z przekraczania strefy komfortu. Mogą one wynikać z szoku kulturowego lub z wykonywania czynności wymagających znacznego wysiłku fizycznego, wywołujących poczucie ryzyka (rzeczywistego lub domniemanego) lub zagrożenia fizycznego. Zaawansowanych specjalistów od masowych uczestników odróżnia poziom umiejętności oraz odległość i dostępność miejsca uprawiania turystyki, dlatego turystyka przygodowa ma charakter subiektywny.'
      },
      {
        heading: 'Wyróżniki uczestników',
        bullets: [
          'postawa akceptacji elementu ryzyka w doznaniach turystycznych',
          'zdolność do ponoszenia zwiększonego poziomu wysiłku fizycznego podczas wypraw',
          'potrzeba posiadania określonych umiejętności i nastawienia psychicznego dla powodzenia wyprawy'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ile poziomów przygody wyróżnia się w charakterystyce uczestników turystyki przygodowej?',
        options: ['Dwa', 'Cztery', 'Trzy', 'Pięć'],
        correct: 1,
        explain: 'Wyróżnia się cztery poziomy: nieszczęście, przygodę ekstremalną, przygodę i zabawę.'
      },
      {
        type: 'tf',
        q: 'Turystyka przygodowa ma dla jej uczestników charakter subiektywny.',
        correct: true,
        explain: 'O subiektywności decyduje m.in. indywidualny poziom umiejętności oraz odległość i dostępność miejsca uprawiania turystyki.'
      },
      {
        type: 'flash',
        front: 'Wymień wyróżniki uczestników turystyki przygodowej.',
        back: 'Akceptacja elementu ryzyka, zdolność do zwiększonego wysiłku fizycznego oraz potrzeba posiadania określonych umiejętności i nastawienia psychicznego dla powodzenia wyprawy.'
      }
    ]
  },
  {
    id: 'etapy-zarzadzania-projektami-turystycznymi',
    track: 'przygodowa',
    category: 'outdoor',
    number: 4,
    title: 'Etapy zarządzania projektami turystycznymi',
    summary: 'Zarządzanie projektami turystycznymi obejmuje pięć etapów: inicjację, planowanie, realizację, monitorowanie i kontrolę oraz zamknięcie.',
    wiki: [
      {
        heading: 'Pięć etapów projektu',
        body: 'Zarządzanie projektami turystycznymi składa się z pięciu głównych etapów. Każdy ma własne wyzwania i wymagania, które należy uwzględnić dla skutecznego ukończenia projektu.',
        bullets: [
          'Inicjacja: określenie celu i zakresu projektu, zdefiniowanie zespołu i głównych zadań, wstępna analiza możliwości oraz ustalenie ram wyjazdu',
          'Planowanie: szczegółowy plan z harmonogramem, budżetem, zasobami i procesami, określenie ryzyka i strategii jego zarządzania oraz przygotowanie informacji dla interesariuszy',
          'Realizacja: wykonanie zaplanowanych zadań, monitorowanie postępów, reagowanie na zmiany i problemy, zapewnienie świadczeń i sprzętu',
          'Monitorowanie: porównywanie postępów z planem, kontrola ryzyka, budżetu, harmonogramu i jakości oraz poziomu zadowolenia klienta',
          'Zamknięcie: podsumowanie wyników, ocena projektu, dokumentacja, rozliczenie finansowe, raport końcowy i wdrożenie wniosków na przyszłość'
        ]
      },
      {
        heading: 'Specyfika turystyki',
        body: 'Ważnym elementem jest zrozumienie specyfiki turystyki i dostosowanie procesu zarządzania do konkretnego typu projektu. Może to obejmować analizę rynku, określenie grupy docelowej, marketing i promocję oraz współpracę z lokalnymi dostawcami i partnerami.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który etap zarządzania projektem turystycznym obejmuje opracowanie harmonogramu, budżetu i strategii zarządzania ryzykiem?',
        options: ['Inicjacja', 'Zamknięcie', 'Realizacja', 'Planowanie'],
        correct: 3,
        explain: 'Na etapie planowania opracowuje się szczegółowy plan z harmonogramem, budżetem, zasobami oraz strategią zarządzania ryzykiem.'
      },
      {
        type: 'abcd',
        q: 'Na którym etapie projektu sporządza się raport końcowy i przeprowadza rozliczenie finansowe?',
        options: ['Zamknięcie', 'Realizacja', 'Monitorowanie', 'Inicjacja'],
        correct: 0,
        explain: 'Zamknięcie obejmuje podsumowanie wyników, ocenę, dokumentację, rozliczenie finansowe i raport końcowy.'
      },
      {
        type: 'tf',
        q: 'Zarządzanie projektami turystycznymi składa się z trzech głównych etapów.',
        correct: false,
        explain: 'Etapów jest pięć: inicjacja, planowanie, realizacja, monitorowanie i kontrola oraz zamknięcie.'
      },
      {
        type: 'flash',
        front: 'Wymień pięć etapów zarządzania projektami turystycznymi.',
        back: 'Inicjacja, planowanie, realizacja, monitorowanie i kontrola oraz zamknięcie.'
      }
    ]
  },
  {
    id: 'fotografia-dokumentalna',
    track: 'przygodowa',
    category: 'outdoor',
    number: 5,
    title: 'Fotografia dokumentalna - motywy i specyfika',
    summary: 'Fotografia dokumentalna uchwytuje prawdziwe i naturalne momenty bez pozowania, wiernie przedstawiając świat.',
    wiki: [
      {
        heading: 'Czym jest fotografia dokumentalna',
        body: 'To rodzaj fotografii, którego głównym celem jest uchwycenie prawdziwych i naturalnych momentów, bez zmian ani pozowania. Często jest używana do dokumentowania wydarzeń, miejsc, kultur lub sytuacji społecznych, politycznych i ludzkich. Obejmuje wszystkie zdjęcia próbujące wiernie przedstawić świat.'
      },
      {
        heading: 'Rola i odróżnienie od fotoreportażu',
        body: 'Zdjęcia dokumentalne, od wojennych panoram po zbliżenia ludzi na ulicy, mogą informować odbiorców o ukrytych zakamarkach współczesnego życia, a nawet stać się częścią danych historycznych. W przeciwieństwie do fotoreportażu, który ogranicza się do pojedynczej wiadomości lub wydarzenia, obrazy dokumentalne wykorzystywane są zbiorowo, aby naświetlić głębszy problem.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Co najlepiej odróżnia fotografię dokumentalną od fotoreportażu?',
        options: [
          'Fotografia dokumentalna wymaga pozowania modeli',
          'Fotoreportaż zawsze dotyczy danych historycznych',
          'Obrazy dokumentalne wykorzystywane są zbiorowo, by naświetlić głębszy problem, a fotoreportaż ogranicza się do pojedynczej wiadomości lub wydarzenia',
          'Fotografia dokumentalna dotyczy wyłącznie wydarzeń wojennych'
        ],
        correct: 2,
        explain: 'Fotoreportaż ogranicza się do pojedynczej wiadomości lub wydarzenia, a obrazy dokumentalne wykorzystywane są zbiorowo, aby naświetlić głębszy problem.'
      },
      {
        type: 'tf',
        q: 'Głównym celem fotografii dokumentalnej jest uchwycenie prawdziwych i naturalnych momentów, bez zmian ani pozowania.',
        correct: true,
        explain: 'Fotografia dokumentalna obejmuje zdjęcia próbujące wiernie przedstawić świat.'
      },
      {
        type: 'flash',
        front: 'Jaki jest główny cel fotografii dokumentalnej?',
        back: 'Uchwycenie prawdziwych i naturalnych momentów, bez zmian ani pozowania, w celu wiernego przedstawienia świata oraz dokumentowania wydarzeń, miejsc, kultur i sytuacji społecznych.'
      }
    ]
  },
  {
    id: 'fotografia-w-social-mediach',
    track: 'przygodowa',
    category: 'outdoor',
    number: 6,
    title: 'Fotografia w świecie social mediów',
    summary: 'Fotografia w mediach społecznościowych buduje wizerunek marki, zwiększa zaangażowanie i wspiera sprzedaż, będąc strategią komunikacji.',
    wiki: [
      {
        heading: 'Wpływ fotografii na social media',
        body: 'Fotografia jest kluczowym elementem mediów społecznościowych. Profesjonalnie wykonane zdjęcia przyciągają uwagę, zwiększają zaangażowanie i wspierają sprzedaż. To nie tylko estetyka, ale także strategia komunikacji pozwalająca wyróżnić się na tle konkurencji.',
        bullets: [
          'budowanie wizerunku marki i zaufania',
          'zwiększanie zaangażowania (polubienia, komentarze, udostępnienia)',
          'wspomaganie sprzedaży poprzez fotografię produktową',
          'wyróżnianie się na tle konkurencji'
        ]
      },
      {
        heading: 'Jak wykorzystać fotografię',
        bullets: [
          'dostosowanie do platformy (np. Instagram - format kwadratowy, Facebook - pionowy lub poziomy)',
          'regularność i spójność stylu oraz estetyki',
          'kreowanie historii marki i produktu',
          'wykorzystanie różnych formatów: zdjęcia, krótkie filmy, reelsy, story'
        ]
      },
      {
        heading: 'Dodatkowe wskazówki',
        bullets: [
          'dbanie o wyraźne i ostre zdjęcia (czyszczenie obiektywu, dobre oświetlenie)',
          'pilnowanie praw autorskich do publikowanych zdjęć',
          'eksperymentowanie z różnymi stylami i formatami'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który format zdjęć jest wskazany dla Instagrama według zasady dostosowania do platformy?',
        options: ['Panoramiczny 21:9', 'Wyłącznie pionowy', 'Wyłącznie poziomy', 'Kwadratowy'],
        correct: 3,
        explain: 'Instagram wymaga zdjęć w kwadratowym formacie, a Facebook w pionowym lub poziomym.'
      },
      {
        type: 'tf',
        q: 'Fotografia w social media to wyłącznie kwestia estetyki, bez znaczenia strategicznego.',
        correct: false,
        explain: 'To nie tylko estetyka, ale także strategia komunikacji pozwalająca wyróżnić się na tle konkurencji.'
      },
      {
        type: 'flash',
        front: 'Jak fotografia wpływa na social media?',
        back: 'Buduje wizerunek marki i zaufanie, zwiększa zaangażowanie, wspomaga sprzedaż oraz pomaga wyróżnić się na tle konkurencji.'
      }
    ]
  },
  {
    id: 'kompetencje-miedzykulturowe-outdoor',
    track: 'przygodowa',
    category: 'outdoor',
    number: 7,
    title: 'Kompetencje międzykulturowe w projektach outdoorowych',
    summary: 'Trzon kompetencji międzykulturowych stanowią umiejętności (skills), postawa (attitude) i wiedza (knowledge), kluczowe dla współpracy w projektach outdoorowych.',
    wiki: [
      {
        heading: 'Trzon kompetencji kulturowych',
        bullets: [
          'Skills (umiejętności) - komunikowanie się, współpraca, elastyczność, radzenie sobie w sytuacjach stresowych, aktywne słuchanie i krytyczne myślenie',
          'Attitude (postawa) - świadomość różnic, odwaga, pozytywne nastawienie i otwartość',
          'Knowledge (wiedza) - wiedza kulturowa, przygotowanie na szok kulturowy oraz wiedza z turystyki, survivalu i planowania'
        ]
      },
      {
        heading: 'Znaczenie w projektach outdoorowych',
        body: 'Kompetencje obejmują rozumienie różnic kulturowych, akceptację i szacunek dla innych kultur oraz umiejętność komunikowania się i współpracy z osobami z różnych środowisk. Pozwalają na skuteczną współpracę przez budowanie zaufania, podnoszą bezpieczeństwo i komfort dzięki lepszej adaptacji, rozwijają kompetencje uczestników i kształtują właściwą relację z innym.'
      },
      {
        heading: 'Odpowiedzialne podróżowanie',
        body: 'Kompetencje prowadzą do odpowiedzialnego podróżowania z otwartymi oczami: ludzie pamiętają, że ich obecność odciska piętno na odwiedzanych miejscach, wydają pieniądze wspierając lokalne walory, cenią dziedzictwo przyrodnicze i kulturowe, szanują lokalne zwyczaje i tradycje oraz wspierają tych, którzy dbają o dane miejsca.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który element NIE należy do trzonu kompetencji kulturowych (skills, attitude, knowledge)?',
        options: ['Skills - umiejętności', 'Attitude - postawa', 'Budget - budżet', 'Knowledge - wiedza'],
        correct: 2,
        explain: 'Trzon kompetencji kulturowych stanowią skills (umiejętności), attitude (postawa) i knowledge (wiedza); budżet nie wchodzi w jego skład.'
      },
      {
        type: 'tf',
        q: 'Komponent "knowledge" obejmuje m.in. przygotowanie na szok kulturowy oraz wiedzę z survivalu i planowania.',
        correct: true,
        explain: 'Knowledge to wiedza kulturowa, przygotowanie na szok kulturowy oraz wiedza z dziedzin potrzebnych w podróży: turystyki, survivalu i planowania.'
      },
      {
        type: 'flash',
        front: 'Co stanowi trzon kompetencji międzykulturowych?',
        back: 'Skills (umiejętności), attitude (postawa) i knowledge (wiedza).'
      }
    ]
  },
  {
    id: 'kwalifikacje-pilotow-przewodnikow-trampingowych',
    track: 'przygodowa',
    category: 'outdoor',
    number: 8,
    title: 'Kwalifikacje i kompetencje pilotów i przewodników turystyki trampingowej',
    summary: 'Piloci i przewodnicy turystyki trampingowej muszą spełniać podstawowe wymogi prawne oraz dysponować wieloma grupami kompetencji i znajomością specyfiki trampingu.',
    wiki: [
      {
        heading: 'Podstawowe wymogi',
        body: 'Podstawowe wymogi to ukończenie 18 lat, niekaralność oraz wykształcenie średnie. Przewodnik powinien posiadać wiedzę o regionie i atrakcjach, a pilot doświadczenie w organizacji i zarządzaniu wycieczkami. Obowiązki i kompetencje określa ustawa o usługach hotelarskich oraz usługach pilotów wycieczek i przewodników turystycznych z 2023 roku.'
      },
      {
        heading: 'Grupy kompetencji',
        bullets: [
          'kompetencje społeczne - elokwentność, cierpliwość, komunikatywność, empatia i elastyczność',
          'kompetencje osobiste - cierpliwość, punktualność, dokładność, znajomość dobrych manier, optymizm',
          'kompetencje menedżerskie i przywódcze - charyzma, pewność siebie, delegowanie uprawnień, umiejętność pracy w grupie',
          'kompetencje zawodowe - językowe, fachowa wiedza, sporządzanie pism, pierwsza pomoc',
          'kompetencje formalno-prawne pilota - zakres uprawnień i pełnomocnictwo do podejmowania decyzji'
        ]
      },
      {
        heading: 'Specyfika trampingu',
        body: 'W turystyce trampingowej przewodnik i pilot muszą znać teren, trasę, zagrożenia i zasady bezpieczeństwa oraz posiadać umiejętności praktyczne (obsługa sprzętu, pierwsza pomoc, planowanie). Tramping odbywa się jak najmniejszym kosztem i wymaga adaptacji pilota do otoczenia i grupy, odporności na zmienne warunki pogodowe oraz nastawienia na kontakt z lokalną ludnością i autentyczność. Treść przekazuje się przez poznawanie i doświadczanie.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Który z poniższych jest podstawowym wymogiem dla pilotów i przewodników turystyki trampingowej?',
        options: [
          'Ukończenie 16 lat',
          'Co najmniej 10 lat doświadczenia w terenie',
          'Wykształcenie wyższe kierunkowe',
          'Ukończenie 18 lat, niekaralność oraz wykształcenie średnie'
        ],
        correct: 3,
        explain: 'Podstawowe wymogi to ukończenie 18 lat, niekaralność oraz wykształcenie średnie.'
      },
      {
        type: 'tf',
        q: 'Obowiązki i kompetencje pilotów oraz przewodników określa ustawa o usługach hotelarskich oraz usługach pilotów wycieczek i przewodników turystycznych z 2023 roku.',
        correct: true,
        explain: 'To właśnie ta ustawa pozostaje podstawą określającą obowiązki i kompetencje pilotów i przewodników.'
      },
      {
        type: 'flash',
        front: 'Wymień grupy kompetencji pilotów i przewodników turystyki trampingowej.',
        back: 'Kompetencje społeczne, osobiste, menedżerskie i przywódcze, zawodowe oraz formalno-prawne pilota.'
      }
    ]
  },
  {
    id: 'ocena-tras-grupy-odbiorcow',
    track: 'przygodowa',
    category: 'outdoor',
    number: 9,
    title: 'Metody oceny atrakcyjności i trudności tras dla różnych grup odbiorców',
    summary: 'Do oceny atrakcyjności tras dla różnych grup odbiorców stosuje się m.in. szkocki formularz oceny atrakcji, testy zróżnicowania semantycznego, analizę ASEB/SWOT i kwestionariusz SERVQUAL.',
    wiki: [
      {
        heading: 'Metody jakościowe i kwestionariuszowe',
        bullets: [
          'Szkocki formularz oceny atrakcji (Scottish Tourist Board) - obserwacja uczestnicząca, ocena sześciu części atrakcji (wstęp, wejście, prezentacja tematyki, gastronomia, sklep, toalety) na skali 0-10',
          'Testy zróżnicowania semantycznego - budowanie profili semantycznych przez wybór par skrajnych cech (np. ładny - brzydki, bezpieczny - niebezpieczny)',
          'Analiza ASEB/SWOT - rozwinięcie analizy SWOT o poziomy hierarchii wymagań, skupione na potrzebach, motywach, wrażeniach i satysfakcji zwiedzających',
          'Kwestionariusz SERVQUAL - pomiar różnicy między oczekiwaniami klienta a percepcją usługi; do atrakcji przystosował go M. Nowacki'
        ]
      },
      {
        heading: 'Metody analityczne',
        bullets: [
          'Metoda bonitacji punktowej - przypisanie cechom wartości liczbowych według skali, których suma jest oceną',
          'Metoda modelowa - badanie złożonych systemów przez tworzenie ich modeli, symulacja i przewidywanie zachowań',
          'Metoda wielowymiarowej analizy porównawczej - porządkowanie jednorodnego zbioru obiektów lub cech według ustalonego kryterium, do badania zjawisk niemierzalnych bezpośrednio'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Na czym opiera się założenie kwestionariusza SERVQUAL?',
        options: [
          'Na liczbie odwiedzin atrakcji w sezonie',
          'Na pomiarze długości i przewyższeń trasy',
          'Na różnicy między oczekiwaniami klienta wobec usługi a jej percepcją',
          'Na obserwacji uczestniczącej na skali 0-10'
        ],
        correct: 2,
        explain: 'SERVQUAL zakłada, że satysfakcja z jakości usługi jest różnicą między oczekiwaniami klienta wobec niej a jej percepcją.'
      },
      {
        type: 'tf',
        q: 'Szkocki formularz oceny atrakcji ocenia sześć głównych części atrakcji na skali od 1 do 5.',
        correct: false,
        explain: 'Formularz Scottish Tourist Board stosuje jedenastostopniową skalę od 0 do 10, a nie skalę 1-5.'
      },
      {
        type: 'flash',
        front: 'Czym jest analiza ASEB/SWOT?',
        back: 'Rozwinięcie tradycyjnej analizy SWOT o dodatkowy wymiar poziomów hierarchii wymagań, skupione na potrzebach, motywach, wrażeniach i satysfakcji zwiedzających.'
      }
    ]
  },
  {
    id: 'ocena-tras-formy-przygodowe',
    track: 'przygodowa',
    category: 'outdoor',
    number: 10,
    title: 'Metody oceny atrakcyjności i trudności tras dla różnych form turystyki przygodowej',
    summary: 'Atrakcyjność tras ocenia się m.in. listami rankingowymi i narzędziami badawczymi, a trudność za pomocą wystandaryzowanych skal właściwych dla danej formy aktywności.',
    wiki: [
      {
        heading: 'Ocena atrakcyjności tras',
        body: 'Najbardziej rozpowszechnione są próby wartościowania przez listy rankingowe. W naukach geograficznych stosuje się analizy rozmieszczenia tras, a w marketingu i badaniach behawioralnych ocenia się jakość i odbiór szlaku. Wykorzystuje się skalę Likerta, Szkocki Kwestionariusz Atrakcji, Kwestionariusz Australijski, testy wiedzy, quizy, ankiety i schematy obserwacji, a coraz częściej kioski multimedialne oraz rejestrację zachowań za pomocą fotografii i nagrań.'
      },
      {
        heading: 'Ocena trudności tras',
        body: 'Należy korzystać z map, sprawdzać opis trasy, przebieg, długość i przewyższenia (np. w aplikacjach takich jak viaferrata.org), a także ustalić warunki pogodowe i możliwe trudności.'
      },
      {
        heading: 'Wystandaryzowane skale trudności',
        bullets: [
          'Skala UIAA (rzymska III-IX) oraz skala ferrat A-F dla tras wspinaczkowych',
          'Skala singletrail (S0-S5) dla tras rowerowych',
          'Skala SAC Szwajcarskiego Klubu Alpinistycznego (T1-T6) dla szlaków górskich',
          'Oznaczenia kolorystyczne tras narciarskich (niebieski - łatwe, czarny - ekstremalne)',
          'Skala szlaków kajakowych: nizinne (ZW: ZWA, ZWB, ZWC) i górskie (WW I do WW VI)'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która skala służy do oceny trudności tras rowerowych?',
        options: ['Skala UIAA', 'Skala WW I do WW VI', 'Skala SAC (T1-T6)', 'Skala singletrail (S0-S5)'],
        correct: 3,
        explain: 'Skala singletrail to system klasyfikacji trudności tras rowerowych obejmujący 6 poziomów od S0 do S5.'
      },
      {
        type: 'abcd',
        q: 'Jakim kolorem oznacza się ekstremalne trasy narciarskie?',
        options: ['Czarnym', 'Zielonym', 'Czerwonym', 'Niebieskim'],
        correct: 0,
        explain: 'Trasy łatwe oznacza się kolorem niebieskim, a trasy ekstremalne kolorem czarnym.'
      },
      {
        type: 'tf',
        q: 'Skala SAC Szwajcarskiego Klubu Alpinistycznego wykorzystuje oznaczenia od T1 do T10.',
        correct: false,
        explain: 'Skala SAC obejmuje sześć stopni — od T1 (bardzo łatwe) do T6 (najtrudniejsze szlaki alpejskie), nie sięga T10.'
      },
      {
        type: 'flash',
        front: 'Jak klasyfikuje się trudność szlaków kajakowych?',
        back: 'Szlaki nizinne ocenia się w skali ZW (ZWA, ZWB, ZWC), a górskie w skali WW (od WW I do WW VI).'
      }
    ]
  },
  {
    id: 'miekkie-formy-aktywnosci-terenowej',
    track: 'przygodowa',
    category: 'outdoor',
    number: 11,
    title: 'Miękkie formy aktywności terenowej',
    summary: 'Miękkie formy turystyki przygodowej charakteryzują się niskim ryzykiem i dostępnością bez specjalnego przygotowania; należą do nich m.in. bieg na orientację, safari, nurkowanie, narciarstwo, snowboard i surfing.',
    wiki: [
      {
        heading: 'Definicja miękkich form',
        body: 'Miękkie formy aktywności turystyki przygodowej charakteryzują się niskim stopniem ryzyka i są dostępne dla osób bez specjalnych umiejętności czy przygotowania. W przeciwieństwie do twardej turystyki przygodowej, wymagającej zaawansowanych umiejętności i wiążącej się z większym ryzykiem, koncentrują się na przeżyciu przygody w bezpieczny i relatywnie łatwy sposób.'
      },
      {
        heading: 'Przykłady miękkich form',
        bullets: [
          'Bieg na orientację (BnO) - bieg wyznaczoną trasą z mapą i kompasem do punktów kontrolnych w określonej kolejności, łączący wysiłek fizyczny i intelektualny',
          'Safari - podróż do dzikich obszarów w celu obserwacji zwierząt w naturalnym środowisku, np. Wielkiej Piątki: lwów, słoni, nosorożców, lampartów i bawołów',
          'Nurkowanie - przebywanie pod wodą ze sprzętem lub na zatrzymanym oddechu (freediving); odmiany: snorkeling, freediving, płetwonurkowanie, wrakowe, jaskiniowe',
          'Narciarstwo - przemieszczanie się na nartach; formy: klasyczne, biegi, skitouring, freeskiing, alpejskie',
          'Snowboard - jazda na desce po stoku, rozwijająca równowagę, siłę mięśni i koordynację',
          'Surfing - jazda na desce po fali morskiej; rodzaje: longboarding, shortboarding, na dużych falach, w rurkach'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Czym charakteryzuje się freediving jako odmiana nurkowania?',
        options: [
          'Nurkowanie ze sprzętem powietrznym w jaskiniach',
          'Nurkowanie na zatrzymanym oddechu, bez aparatu oddechowego',
          'Pływanie z maską wyłącznie przy powierzchni wody (snorkeling)',
          'Nurkowanie dozwolone tylko przy wrakach statków'
        ],
        correct: 1,
        explain: 'Freediving to nurkowanie na zatrzymanym oddechu, bez aparatu oddechowego; inne odmiany nurkowania to m.in. snorkeling, płetwonurkowanie, wrakowe i jaskiniowe.'
      },
      {
        type: 'abcd',
        q: 'Które zwierzęta tworzą tzw. Wielką Piątkę, będącą pożądanym celem safari?',
        options: [
          'Słonie, nosorożce, krokodyle, lwy i goryle',
          'Lwy, żyrafy, zebry, hieny i gepardy',
          'Lwy, słonie, nosorożce, lamparty i bawoły',
          'Lamparty, tygrysy, lwy, niedźwiedzie i wilki'
        ],
        correct: 2,
        explain: 'Wielką Piątkę tworzą lwy, słonie, nosorożce, lamparty i bawoły.'
      },
      {
        type: 'tf',
        q: 'Bieg na orientację wymaga zarówno sprawności fizycznej, jak i zdolności intelektualnych.',
        correct: true,
        explain: 'BnO łączy wysiłek fizyczny (bieganie, pokonywanie przeszkód) ze zdolnościami intelektualnymi (czytanie mapy, decyzje nawigacyjne).'
      },
      {
        type: 'flash',
        front: 'Wymień przykłady miękkich form aktywności terenowej.',
        back: 'Bieg na orientację, safari, nurkowanie, narciarstwo, snowboard i surfing.'
      }
    ]
  },
  {
    id: 'obszary-turystyki-przygodowej-azja',
    track: 'przygodowa',
    category: 'outdoor',
    number: 12,
    title: 'Obszary turystyki przygodowej w Azji',
    summary: 'Azja oferuje liczne obszary turystyki przygodowej, od Himalajów i Karakorum po Zatokę Halong, pustynię Gobi czy Raja Ampat.',
    wiki: [
      {
        heading: 'Obszary górskie i pustynne',
        bullets: [
          'Himalaje (Nepal i Tybet) - najwyższe pasmo świata, trekking, wspinaczka wysokogórska i narciarstwo ekstremalne',
          'Masyw Karakorum (Pakistan i Chiny) - trekking, wspinaczka i narciarstwo ekstremalne w regionie K2, przebiega tędy najwyżej położona autostrada świata',
          'Pustynia Gobi (Chiny i Mongolia) - turystyka offroadowa i rajdy quadowe, bezpieczeństwo zapewniają wieże sygnałowe GPS',
          'Jordania i jej pustynie (Petra) - imprezy sportowe, jazda tradycyjnym jeepem dzięki formacjom skalnym i antycznym zabudowaniom',
          'Wulkany archipelagu Malajskiego - wyprawy trekkingowe i wspinaczkowe na styku płyt tektonicznych'
        ]
      },
      {
        heading: 'Obszary wodne i przyrodnicze',
        bullets: [
          'Zatoka Halong (Wietnam) - setki wysepek, kajakarstwo, żeglarstwo i fotografia przygodowa',
          'Taman Negara (Malezja) - jeden z najstarszych lasów deszczowych, kładki 45 m nad ziemią, ekoturystyka',
          'Tajlandia, zatoki Phuket i Phang Nga - kajakarstwo i żeglarstwo',
          'Indonezja, Raja Ampat - nurkowanie i żeglarstwo',
          'Wietnam, delta Mekongu i Mai Chau - trasy rowerowe przez pola ryżowe',
          'Japonia - trekking, backpacking, narciarstwo (Furano, Hokkaido) i formy wodne na południu'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która forma turystyki przygodowej jest najbardziej charakterystyczna dla pustyni Gobi?',
        options: [
          'Turystyka offroadowa i rajdy quadowe',
          'Nurkowanie i żeglarstwo',
          'Wspinaczka wysokogórska',
          'Kajakarstwo'
        ],
        correct: 0,
        explain: 'Na pustyni Gobi uprawia się przede wszystkim formy turystyki offroadowej i rajdy quadowe, a bezpieczeństwo zapewniają wieże sygnałowe GPS.'
      },
      {
        type: 'tf',
        q: 'Raja Ampat w Indonezji to obszar pustynny, sprzyjający przede wszystkim wspinaczce i trekkingowi wysokogórskiemu.',
        correct: false,
        explain: 'Raja Ampat to morski archipelag sprzyjający wodnym formom turystyki — głównie nurkowaniu i żeglarstwu, a nie wspinaczce na pustyni.'
      },
      {
        type: 'flash',
        front: 'Jakie aktywności oferują Himalaje (Nepal i Tybet)?',
        back: 'Trekking, wspinaczkę wysokogórską i narciarstwo ekstremalne - to najwyższe pasmo górskie świata.'
      }
    ]
  },
  {
    id: 'obszary-turystyki-przygodowej-europa',
    track: 'przygodowa',
    category: 'outdoor',
    number: 13,
    title: 'Obszary turystyki przygodowej w Europie',
    summary: 'Europa oferuje zróżnicowane obszary turystyki przygodowej, od Tatr i Alp po Wielkie Jeziora Mazurskie, fiordy Norwegii i Islandię.',
    wiki: [
      {
        heading: 'Obszary górskie',
        bullets: [
          'Tatry (Polska i Słowacja) - wspinaczka turystyczna, wyprawy wysokogórskie, via ferraty, trekking i narciarstwo, ratownictwo TOPR',
          'Alpy (Francja, Szwajcaria, Włochy) - trekking, wspinaczka i narciarstwo, kolej zębatkowa z Zermatt na Gornergrat, ratownicy Air Zermatt, schroniska w Chamonix',
          'Fiordy Norwegii - wyprawy trekkingowe i żeglarskie wśród stromych skarp oraz trasy narciarskie',
          'Północna Szkocja - trekking, tramping, backpacking, bieg na orientację, wyprawy rowerowe, obserwacja wielorybów i wspinaczka na klifach',
          'Islandia - trekking, tramping, backpacking, biegi i wyprawy quadowe przez pola lawowe'
        ]
      },
      {
        heading: 'Obszary wodne i wybrzeża',
        bullets: [
          'Francja, rzeka Dordogne - kajakarstwo łączone z turystyką kulturową',
          'Szwecja, region Dalarna - kajakarstwo po jeziorach, wędkarstwo sportowe, bieg na orientację',
          'Polska, Wielkie Jeziora Mazurskie - żeglarstwo z rozbudowaną infrastrukturą, windsurfing, kitesurfing, obserwacja fauny i flory',
          'Grecja, Cyklady - żeglarstwo uwarunkowane kulturowo oraz formy związane z plażami i wyspami',
          'Hiszpania, Wyspy Kanaryjskie - trekking, tramping, backpacking i nurkowanie w ciepłej, przejrzystej wodzie',
          'Chorwacja, wybrzeże Dalmacji - nurkowanie, żeglarstwo i trekking'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która grupa ratownicza działa w polskich Tatrach jako udogodnienie dla turystów?',
        options: ['Air Zermatt', 'WOPR', 'GOPR Beskidy', 'TOPR'],
        correct: 3,
        explain: 'W Tatrach działa TOPR, a Air Zermatt to ratownicy z regionu Matterhornu w Alpach.'
      },
      {
        type: 'tf',
        q: 'Polskie Wielkie Jeziora Mazurskie oferują dobre warunki do żeglarstwa wraz z rozbudowaną infrastrukturą.',
        correct: true,
        explain: 'Mazury to obszar żeglarski z rozbudowaną infrastrukturą, gdzie uprawia się także windsurfing i kitesurfing.'
      },
      {
        type: 'flash',
        front: 'Jakie aktywności umożliwia francuska rzeka Dordogne?',
        back: 'Kajakarstwo łączone z turystyką kulturową - można płynąć rzeką, zatrzymując się, by spróbować lokalnej kuchni i zobaczyć sielskie miasteczka.'
      }
    ]
  }
]
