import type { Topic } from '../types'

export const partP2: Topic[] = [
  {
    id: 'kreatywne-myslenie-definicja-branze',
    track: 'przygodowa',
    category: 'outdoor',
    number: 14,
    title: 'Kreatywne myslenie - definicja i branze',
    summary: 'Kreatywne myslenie to zdolnosc generowania nowych, oryginalnych i uzytecznych idei, ceniona w wielu branzach kreatywnych i turystycznych.',
    wiki: [
      {
        heading: 'Definicja',
        body: 'Kreatywne myslenie to trwala postawa czlowieka powodujaca podejmowanie dzialan przynoszacych wartosciowe nowosci. To dzialanie, ktorego celem jest zmiana stanu koniecznosci w stan wyboru. Jest to proces umyslowy prowadzacy do generowania nowych i oryginalnych idei, rozwiazan lub koncepcji, ktore sa uzyteczne i przydatne.'
      },
      {
        heading: 'Istota',
        body: 'Innymi slowy, jest to zdolnosc do myslenia nieszablonowego, wykraczajacego poza tradycyjne schematy myslenia.'
      },
      {
        heading: 'Branze, w ktorych jest atutem',
        bullets: ['filmografia', 'teatr', 'marketing', 'grafika komputerowa', 'edukacja', 'przewodnictwo i pilotaz', 'animatorka', 'projektowanie gier', 'fotografia']
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Czym jest kreatywne myslenie wedlug definicji?',
        options: [
          'Procesem umyslowym prowadzacym do generowania nowych i oryginalnych idei, ktore sa uzyteczne i przydatne',
          'Umiejetnoscia wiernego odtwarzania znanych schematow',
          'Zdolnoscia do szybkiego liczenia w pamieci',
          'Postawa unikania jakichkolwiek zmian'
        ],
        correct: 0,
        explain: 'To proces umyslowy prowadzacy do generowania nowych i oryginalnych idei, rozwiazan lub koncepcji, ktore sa uzyteczne i przydatne.'
      },
      {
        type: 'tf',
        q: 'Kreatywne myslenie zmienia stan koniecznosci w stan wyboru.',
        correct: true,
        explain: 'Wprost wynika z definicji: celem dzialania kreatywnego jest zmiana stanu koniecznosci w stan wyboru.'
      },
      {
        type: 'flash',
        front: 'Wymien przynajmniej piec branz, w ktorych kreatywne myslenie jest duzym atutem.',
        back: 'M.in.: filmografia, teatr, marketing, grafika komputerowa, edukacja, przewodnictwo i pilotaz, animatorka, projektowanie gier, fotografia.'
      }
    ]
  },
  {
    id: 'techniki-kreatywnego-myslenia',
    track: 'przygodowa',
    category: 'outdoor',
    number: 15,
    title: 'Najskuteczniejsze techniki kreatywnego myslenia',
    summary: 'Przeglad technik wspierajacych kreatywnosc: debata oksfordzka, odwrocona burza mozgow, metoda 635, 6 kapeluszy De Bono, 3 krzesla Disneya, drzewko decyzyjne, SCAMPER, diagram Ishikawy i dyskusja piramidowa.',
    wiki: [
      {
        heading: 'Techniki dyskusyjne i grupowe',
        bullets: [
          'Uproszczona debata oksfordzka - sformalizowana dyskusja, w ktorej dwie druzyny toczą spor wokol postawionej tezy; jedna strona udowadnia jej prawdziwosc, druga ja obala',
          'Odwrocona burza mozgow - zasady klasycznej burzy mozgow stosowane do wyroznienia jak najwiekszej liczby wad obiektu analizy, by je nastepnie wyeliminowac',
          'Metoda 635 - rodzaj brainwritingu: 6 uczestnikow wymysla 3 pomysly w 5 minut, zapisujac je na formularzu przekazywanym osobie po prawej',
          'Dyskusja piramidowa - przechodzenie od pracy indywidualnej, przez pary, czworki, osemki, do wspolnego stanowiska zespolu'
        ]
      },
      {
        heading: 'Metody analizy z wielu perspektyw',
        bullets: [
          'Technika 6 kapeluszy De Bono - mylenie lateralne; wcielanie sie w 6 rol (bialy - dane, czerwony - emocje, czarny - zagrozenia, zolty - korzysci, zielony - nowe pomysly, niebieski - zarzadzanie procesem)',
          'Metoda 3 krzesel Disneya - analiza z trzech perspektyw: marzyciel, realista i krytyk',
          'Drzewko decyzyjne (mind mapping) - graficzna technika wspomagania decyzji; korzen i galezie prowadzace do kolejnych wierzcholkow, ulatwia strukturyzowanie pomyslow'
        ]
      },
      {
        heading: 'Techniki modyfikacji i analizy przyczyn',
        bullets: [
          'SCAMPER - akronim siedmiu dzialan: Substitute (zastapic), Combine (polaczyc), Adapt (dostosowac), Modify (zmodyfikowac), Put to another use (zastosowac inaczej), Eliminate (usunac), Reverse (odwrocic)',
          'Diagram Ishikawy (rybia osc) - analiza przyczynowo-skutkowa; 5 skladowych: ludzie, metody, maszyny, materialy, zarzadzanie'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Na czym polega metoda 635?',
        options: [
          'Szesciu uczestnikow wymysla po trzy pomysly w ciagu pieciu minut, zapisujac je na przekazywanych formularzach',
          'Trzy osoby debatuja przez szesc rund po piec minut',
          'Szesc kapeluszy zmienia sie co trzy minuty piec razy',
          'Trzech ekspertow ocenia szesc projektow w piec dni'
        ],
        correct: 0,
        explain: 'Nazwa wynika z zasad: 6 uczestnikow, 3 pomysly, 5 minut - to rodzaj brainwritingu, w ktorym pomysly nie sa wypowiadane na glos.'
      },
      {
        type: 'abcd',
        q: 'Co oznacza litera "S" w technice SCAMPER?',
        options: ['Substitute - zastapic', 'Simplify - uproscic', 'Standardize - ujednolicic', 'Separate - rozdzielic'],
        correct: 0,
        explain: 'SCAMPER to: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse. "S" oznacza Substitute (zastapic).'
      },
      {
        type: 'tf',
        q: 'W metodzie 3 krzesel Disneya wystepuja role: marzyciel, realista i krytyk.',
        correct: true,
        explain: 'Te trzy rozne punkty widzenia uosabiaja marzyciel, realista i krytyk, co pozwala kompleksowo zbadac projekt.'
      },
      {
        type: 'flash',
        front: 'Jakie sa kolory i role kapeluszy w technice 6 kapeluszy De Bono?',
        back: 'Bialy - dane i informacje; czerwony - intuicja i emocje; czarny - zagrozenia; zolty - korzysci; zielony - nowe pomysly; niebieski - zarzadzanie procesem myslowym.'
      }
    ]
  },
  {
    id: 'cwiczenia-pobudzajace-kreatywnosc',
    track: 'przygodowa',
    category: 'outdoor',
    number: 16,
    title: 'Cwiczenia pobudzajace kreatywne myslenie',
    summary: 'Trzy przykladowe cwiczenia rozwijajace kreatywnosc: trzydziesci kolek, ciag skojarzeniowy logiczny oraz opowiesc logiczna.',
    wiki: [
      {
        heading: 'Trzydziesci kolek',
        body: 'Cwiczenie mozna wykonac indywidualnie lub w grupach. Na szablonie znajduje sie trzydziesci kolek. W jak najkrotszym czasie nalezy narysowac w kazdym cos innego, trzymajac sie jednego tematu, np. "jesien" lub "wakacje".'
      },
      {
        heading: 'Ciag skojarzeniowy logiczny',
        body: 'Nalezy wybrac dwa rzeczowniki i stworzyc ciag skojarzen, ktory logicznie prowadzi od jednego do drugiego, np.: kloda - drzewo - las - jezioro - wakacje - kolonie - nastolatki - pryszcz.'
      },
      {
        heading: 'Opowiesc logiczna',
        body: 'Polega na wymysleniu sensacyjnego naglowka (np. "Co by bylo, gdyby czlowiek polecial na Marsa") oraz absurdalnego zakonczenia (np. "i wlasnie dlatego psy nie jedza czekolady"), a nastepnie zbudowaniu sensownej opowiesci laczacej naglowek z zakonczeniem.'
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Na czym polega cwiczenie "ciag skojarzeniowy logiczny"?',
        options: [
          'Na stworzeniu ciagu skojarzen logicznie prowadzacego od jednego wybranego rzeczownika do drugiego',
          'Na narysowaniu rzeczy w trzydziestu kolkach na jeden temat',
          'Na napisaniu opowiesci laczacej naglowek z zakonczeniem',
          'Na ocenie pomyslu z trzech punktow widzenia'
        ],
        correct: 0,
        explain: 'Wybiera sie dwa rzeczowniki i buduje ciag skojarzen logicznie prowadzacy od jednego do drugiego, np. kloda - drzewo - las.'
      },
      {
        type: 'tf',
        q: 'Cwiczenie "trzydziesci kolek" mozna wykonywac zarowno indywidualnie, jak i w grupach.',
        correct: true,
        explain: 'W opisie cwiczenia wprost zaznaczono, ze mozna je wykonac zarowno indywidualnie, jak i w grupach.'
      },
      {
        type: 'flash',
        front: 'Na czym polega cwiczenie "opowiesc logiczna"?',
        back: 'Na wymysleniu sensacyjnego naglowka i absurdalnego zakonczenia, a nastepnie zbudowaniu sensownej opowiesci laczacej jedno z drugim.'
      }
    ]
  },
  {
    id: 'tramping-backpacking-hiking',
    track: 'przygodowa',
    category: 'outdoor',
    number: 17,
    title: 'Tramping, backpacking, hiking - pojecia, podobienstwa i roznice',
    summary: 'Trzy formy podrozowania: tramping (tanie wyprawy w malych grupach z planem), backpacking (indywidualne, samodzielne podroze z plecakiem) oraz hiking (krotkie, jednodniowe wedrowki).',
    wiki: [
      {
        heading: 'Tramping',
        body: 'Tramping oznacza niezalezne i tanie organizowanie wypraw w bliskim kontakcie z natura, lokalnymi kulturami i mieszkancami. Slowo pochodzi od angielskiego "to tramp" - wedrowac, wloczyc sie; termin zaczeto uzywac w Nowej Zelandii i Australii na poczatku XX wieku.',
        bullets: [
          'Podrozowanie w niewielkich grupach, zazwyczaj do 12 osob',
          'Organizacja noclegow i przejazdow przez biuro, opcje przystepne cenowo',
          'Rozne srodki transportu: pociagi, autobusy, taksowki, jeepy, lodzie, promy, riksze',
          'Noclegi w hotelach 3-gwiazdkowych, motelach, czasem jurtach, namiotach lub domach mieszkancow',
          'Trwa zazwyczaj dluzej niz tydzien; duza elastycznosc i spontanicznosc'
        ]
      },
      {
        heading: 'Backpacking',
        body: 'Forma turystyki oznaczajaca aktywnosc podroznicza na danym obszarze bez nadmiernego wydawania pieniedzy, czesto pieszo, z rzeczami w plecaku. Wymaga umiejetnosci poslugiwania sie sprzetem oraz przygotowania fizycznego i psychicznego. Backpackersi czesto okreslaja sie mianem antyturystow, podrozuja samotnie lub w malych grupach. Polska wersja backpackingu jest tramping - pojecie wprowadzone do opracowan turystycznych w 1975 roku przez Bogdana Opowicza. Roznica: tramping zazwyczaj realizowany jest w grupach i ma z gory opracowany zarys lub cel.',
        bullets: [
          'Turysta sam organizuje wyjazd, nie kupuje gotowego pakietu uslug',
          'Stoi w opozycji do turystyki masowej',
          'Szansa na realizacje idei turystyki zrownowazonej',
          'Zagrozenia: "efekt gapowicza", pobiezne poznanie kultury, pogardliwe podejscie do innych turystow'
        ]
      },
      {
        heading: 'Hiking',
        body: 'Piesza wedrowka w terenie naturalnym, zazwyczaj poza miastem, na wyznaczonych szlakach, trwajaca zazwyczaj jeden dzien. Najczesciej forma rekreacji i przyjemnego spedzania czasu na swiezym powietrzu.',
        bullets: [
          'Krotkie, zazwyczaj jednodniowe wyprawy w lasach, gorach, parkach krajobrazowych, terenach wiejskich',
          'Nie wymaga specjalnego przygotowania fizycznego ani dlugotrwalego treningu',
          'Zazwyczaj bez noclegow w terenie; dostepny dla wszystkich bez wzgledu na wiek',
          'Roznica wobec trekkingu: trekking ma wyzszy prog wejscia, odbywa sie na wymagajacych terenach i trwa kilka dni'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Czym rozni sie tramping od backpackingu?',
        options: [
          'Tramping zazwyczaj realizowany jest w grupach i ma z gory opracowany zarys lub cel',
          'Tramping jest zawsze drozszy od turystyki masowej',
          'Tramping odbywa sie wylacznie samotnie i bez planu',
          'Tramping nie wymaga zadnego transportu'
        ],
        correct: 0,
        explain: 'Tramping (polska wersja backpackingu) rozni sie tym, ze wyjazd realizowany jest w grupach oraz ma z gory opracowany zarys lub cel.'
      },
      {
        type: 'abcd',
        q: 'Ile osob liczy zazwyczaj grupa trampingowa?',
        options: ['Do 12 osob', 'Do 50 osob', 'Dokladnie 6 osob', 'Co najmniej 30 osob'],
        correct: 0,
        explain: 'Tramping to podrozowanie w niewielkich grupach, zazwyczaj do 12 osob.'
      },
      {
        type: 'tf',
        q: 'Hiking to zazwyczaj jednodniowa piesza wedrowka, ktora nie wymaga specjalnego przygotowania fizycznego.',
        correct: true,
        explain: 'Hiking to krotkie, zazwyczaj jednodniowe wyprawy na wyznaczonych szlakach, ktore nie wymagaja specjalnego przygotowania ani dlugotrwalego treningu.'
      },
      {
        type: 'flash',
        front: 'Skad pochodzi slowo "tramping" i kto wprowadzil pojecie "tramping" do polskich opracowan turystycznych?',
        back: 'Slowo pochodzi od angielskiego "to tramp" (wedrowac, wloczyc sie); termin zaczeto uzywac w Nowej Zelandii i Australii na poczatku XX wieku. Do polskich opracowan turystycznych pojecie wprowadzil Bogdan Opowicz w 1975 roku.'
      }
    ]
  },
  {
    id: 'prawne-aspekty-projektow-outdoorowych',
    track: 'przygodowa',
    category: 'outdoor',
    number: 18,
    title: 'Prawne aspekty projektow outdoorowych',
    summary: 'Projekty outdoorowe wymagaja licznych prawnych obowiazkow: pozwolen administracyjnych, zgodnosci z prawem budowlanym, ochrony srodowiska, prawa wlasnosci, bezpieczenstwa oraz zgloszen wydarzen.',
    wiki: [
      {
        body: 'Projekty outdoorowe w turystyce i rekreacji (np. trasy rowerowe, sciezki edukacyjne, wieze widokowe, miejsca piknikowe, silownie plenerowe, wypozyczalnie sprzetu wodnego) sa popularne, ale wymagaja spelnienia wielu prawnych obowiazkow ze wzgledu na lokalizacje (czesto w srodowisku naturalnym) i funkcje publiczna. Dla otwartych obiektow zalecane jest opracowanie wewnetrznego regulaminu korzystania lub posiadanie odpowiednich atestow.'
      },
      {
        heading: 'Kluczowe dokumenty i podstawy prawne',
        bullets: [
          'Pozwolenia administracyjne i planowanie przestrzenne - zgodnosc z miejscowym planem zagospodarowania przestrzennego lub decyzja o warunkach zabudowy (Ustawa z 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym)',
          'Prawo budowlane - pozwolenie na budowe (wieze widokowe, budynki zaplecza), zgloszenie budowy (wiaty, mala architektura) lub zwolnienie (np. oznakowanie szlakow) (Ustawa z 7 lipca 1994 r. - Prawo budowlane)',
          'Ochrona srodowiska i przyrody oraz wycinka drzew - lokalizacja w terenach chronionych lub lasach panstwowych wymaga zgod, np. Regionalnej Dyrekcji Ochrony Srodowiska (Ustawa z 16 kwietnia 2004 r. o ochronie przyrody)',
          'Prawo wlasnosci i dostepnosc terenu - prawo do dysponowania nieruchomoscia: wlasnosc, dzierzawa, uzyczenie (Kodeks cywilny)',
          'Bezpieczenstwo - wymogi bezpieczenstwa konstrukcyjnego, przeciwpozarowego i sanitarnego (Prawo budowlane)',
          'Zgloszenia wydarzen outdoorowych - splywy, rajdy, pikniki masowe wymagaja zgloszenia do gminy lub organow porzadkowych (Ustawa o bezpieczenstwie imprez masowych z 20 marca 2009 r.)'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ktora ustawa stanowi podstawe prawna ochrony srodowiska i przyrody przy projektach outdoorowych?',
        options: [
          'Ustawa z 16 kwietnia 2004 r. o ochronie przyrody',
          'Ustawa z 7 lipca 1994 r. - Prawo budowlane',
          'Ustawa z 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym',
          'Ustawa o bezpieczenstwie imprez masowych z 20 marca 2009 r.'
        ],
        correct: 0,
        explain: 'Ochrona srodowiska i przyrody oraz wycinka drzew opieraja sie na Ustawie z 16 kwietnia 2004 r. o ochronie przyrody.'
      },
      {
        type: 'tf',
        q: 'Organizacja masowego spływu lub rajdu moze wymagac zgloszenia do gminy lub organow porzadkowych na podstawie ustawy o bezpieczenstwie imprez masowych.',
        correct: true,
        explain: 'Zgloszenia wydarzen outdoorowych (splyw, rajd, piknik masowy) wymagaja zgloszenia do gminy lub organow porzadkowych - podstawa prawna to ustawa o bezpieczenstwie imprez masowych z 20 marca 2009 r.'
      },
      {
        type: 'flash',
        front: 'Jaki dokument reguluje prawo do dysponowania nieruchomoscia (wlasnosc, dzierzawa, uzyczenie) przy projekcie outdoorowym?',
        back: 'Kodeks cywilny - reguluje prawo do dysponowania nieruchomoscia na cele budowlane (wlasnosc, dzierzawa, uzyczenie), m.in. poprzez umowy cywilnoprawne.'
      }
    ]
  },
  {
    id: 'rodzaje-turystyki-trekkingowej',
    track: 'przygodowa',
    category: 'outdoor',
    number: 19,
    title: 'Rodzaje turystyki trekkingowej',
    summary: 'Trekking dzieli sie wg pory roku (letni, zimowy) oraz wg miejsca wyprawy: klasyczny, pustynny, tropikalny, lodowcowy, polarny, rzeczny, bagienny i wulkaniczny.',
    wiki: [
      {
        heading: 'Podzial wg pory roku',
        bullets: [
          'Trekking letni - mniej ubran i sprzetu z uwagi na wyzsza temperature, lzejszy ekwipunek; konieczna ochrona przed sloncem (kremy, czapki)',
          'Trekking zimowy - wymaga wiekszych umiejetnosci, odziezy warstwowej, specjalistycznego sprzetu (raki, czekany); wiaze sie z ryzykiem lawinowym i mrozem'
        ]
      },
      {
        heading: 'Podzial wg miejsca (m.in. wg P. Rozyckiego)',
        bullets: [
          'Klasyczny (gorski) - forma posrednia miedzy wspinaczka a turystyka piesza, wymaga przygotowania psychofizycznego, czesto trwa kilka dni',
          'Pustynny - skrajne temperatury, monotonia krajobrazu, burze piaskowe; dla doswiadczonych trekkerow, np. Wadi Rum w Jordanii',
          'Tropikalny - gęste lasy i dzungle, klimat rownikowy, wilgoc; zagrozenia: burze, ulewy, owady i choroby zakazne (malaria)',
          'Lodowcowy - niebezpieczny teren w strefach polarnych i wysokich gorach; ryzyko poslizgniecia i wpadniecia w szczeline, np. Chamonix w Alpach',
          'Polarny - ekstremalnie niskie temperatury, arktyczne tundry; cel: biegun, zorza polarna; np. Spitsbergen, polnocna Skandynawia',
          'Rzeczny (rafting) - na rwacych rzekach, na pontonach lub tratwach; ryzyko: prady wodne, sliski teren, duze predkosci; np. Lena na Syberii',
          'Bagienny - krotka wyprawa przez podmokly teren z kijkami i przewodnikiem; trudnosci: brak solidnego podloza, osuwiska, komary; np. Biebrza, Amazonka',
          'Wulkaniczny - po wygaslych (podobny do klasycznego) lub aktywnych wulkanach (czesto po zmroku); ryzyko: toksyczne gazy, erupcja, np. Teide na Teneryfie'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ktory rodzaj trekkingu znany jest rowniez jako rafting?',
        options: ['Rzeczny', 'Bagienny', 'Lodowcowy', 'Pustynny'],
        correct: 0,
        explain: 'Trekking rzeczny znany jest rowniez jako rafting - uprawiany na rwacych rzekach na pontonach lub tratwach, np. na syberyjskiej Lenie.'
      },
      {
        type: 'abcd',
        q: 'Jakie glowne zagrozenie zdrowotne wiaze sie z trekkingiem tropikalnym?',
        options: [
          'Owady i przenoszone przez nie choroby zakazne, np. malaria',
          'Ryzyko lawinowe i odmrozenia',
          'Burze piaskowe i odwodnienie',
          'Toksyczne gazy wulkaniczne'
        ],
        correct: 0,
        explain: 'W trekkingu tropikalnym niebezpieczenstwo stanowia zwierzeta, szczegolnie owady i przenoszone przez nie choroby zakazne, np. malaria.'
      },
      {
        type: 'tf',
        q: 'Trekking zimowy wymaga specjalistycznego sprzetu, takiego jak raki i czekany, oraz wiaze sie z ryzykiem lawinowym.',
        correct: true,
        explain: 'Trekking zimowy wymaga odziezy warstwowej i specjalistycznego sprzetu (raki, czekany), a takze wiaze sie z ryzykiem lawinowym i mrozem.'
      },
      {
        type: 'flash',
        front: 'Wymien rodzaje trekkingu wedlug podzialu ze wzgledu na miejsce wyprawy.',
        back: 'Klasyczny (gorski), pustynny, tropikalny, lodowcowy, polarny, rzeczny (rafting), bagienny i wulkaniczny.'
      }
    ]
  },
  {
    id: 'roznice-konflikty-kulturowe',
    track: 'przygodowa',
    category: 'outdoor',
    number: 20,
    title: 'Roznice i konflikty kulturowe we wspolczesnym swiecie',
    summary: 'Roznice kulturowe sa zrodlem bogactwa i konfliktow; ich podloze stanowia m.in. etnocentryzm, stereotypy, uprzedzenia i ksenofobia, a domenami konfliktow sa terytorium, jezyk i religia.',
    wiki: [
      {
        body: 'Roznice kulturowe sa powszechne i stanowia zarowno zrodlo bogactwa, jak i potencjalnych konfliktow. Wzrost migracji, globalizacja i wieksza swiadomosc innych kultur prowadza do wiekszej ekspozycji na roznice, ale takze do napiec. Konflikty moga wynikac ze zderzenia kultur, np. podroze w celu zobaczenia "dzikiego", spotkanie kultur religijnych, zderzenie codzienne czy zderzenie stereotypowe.'
      },
      {
        heading: 'Zjawiska prowadzace do konfliktow',
        bullets: [
          'Etnocentryzm - przekonanie, ze wlasne etno zajmuje centralne, uprzywilejowane miejsce i ocenia innych przez pryzmat wlasnych przekonan',
          'Ludzkie zoo (kanibalizm turystyczny) - traktowanie przedstawicieli innej kultury przedmiotowo, jak atrakcje',
          'Zle pojmowana autentycznosc - turysta nie dopuszcza odstepstw od swojego obrazu tubylca',
          'Stereotypy - uproszczony, emocjonalny i czesto falszywy obraz osoby lub grupy',
          'Uprzedzenie - negatywne nastawienie emocjonalne oparte na stereotypie',
          'Ksenofobia - lek przed poznawaniem nowych, nieznanych osob',
          'Dyskryminacja - skutek uprzedzen, odrzucenie osoby lub grupy',
          'Rasizm - odrzucenie ze wzgledu na kolor skory; Eksterminacja - likwidacja grupy narodowosciowej'
        ]
      },
      {
        heading: 'Zasada DIE i domeny konfliktow',
        body: 'Dla unikania konfliktow wazna jest zasada DIE: Description (opis - to co widze), Interpretation (interpretacja - to co mysle), Evaluation (ewaluacja - to co oceniam). W modelu blednym pomijamy opis i przechodzimy od razu do oceny.',
        bullets: [
          'Trzy zasadnicze domeny konfliktow kulturowych: terytorium, jezyk i religia',
          'Spory o terytorium: np. pakistansko-indyjski o Kaszmir, japonsko-rosyjski o Kuryle, argentynsko-brytyjski o Falklandy/Malwiny',
          'Spory o jezyk: np. Flamandowie w Belgii, Katalonczycy w Hiszpanii',
          'Konflikty religijne: miedzy religiami swiatowymi i w ramach odlamow (np. katolicy/protestanci w Irlandii Polnocnej)'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Co opisuje zasada DIE wspierajaca komunikacje miedzykulturowa?',
        options: [
          'Opis sytuacji, interpretacje i ewaluacje (description, interpretation, evaluation)',
          'Dialog, integracje i edukacje',
          'Decyzje, implementacje i ewaluacje',
          'Dyskryminacje, izolacje i eksterminacje'
        ],
        correct: 0,
        explain: 'Zasada DIE sklada sie z opisu sytuacji (description), interpretacji (interpretation) i ewaluacji (evaluation). Pominiecie opisu prowadzi do konfliktu.'
      },
      {
        type: 'abcd',
        q: 'Ktore sa trzy zasadnicze domeny konfliktow kulturowych?',
        options: [
          'Terytorium, jezyk i religia',
          'Ekonomia, technologia i ekologia',
          'Wiek, plec i wyksztalcenie',
          'Sport, sztuka i nauka'
        ],
        correct: 0,
        explain: 'Wyrozniamy trzy zasadnicze domeny konfliktow kulturowych: terytorium, jezyk i religia.'
      },
      {
        type: 'tf',
        q: 'Ksenofobia to lek przed poznawaniem nowych, nieznanych osob, ktory objawia sie izolacja i niecheicia.',
        correct: true,
        explain: 'Ksenofobia jest definiowana jako lek przed poznawaniem nowych nieznanych osob, objawiajacy sie izolacja i ostentacyjna niecheicia.'
      },
      {
        type: 'flash',
        front: 'Czym jest etnocentryzm?',
        back: 'Postawa i przekonanie, ze wlasne etno (spoleczenstwo) zajmuje centralne, uprzywilejowane miejsce w swiecie, a innych ocenia sie przez pryzmat wlasnych przekonan.'
      }
    ]
  },
  {
    id: 'ryzyka-projektow-turystycznych',
    track: 'przygodowa',
    category: 'outdoor',
    number: 21,
    title: 'Ryzyka projektow turystycznych',
    summary: 'Ryzyko to mozliwosc wystapienia zdarzenia negatywnie wplywajacego na cele projektu; zarzadzanie nim obejmuje identyfikacje, profilaktyke i reakcje, a ryzyka dziela sie m.in. na ekonomiczne, srodowiskowe, geopolityczne, spoleczne i technologiczne.',
    wiki: [
      {
        heading: 'Definicja i zarzadzanie ryzykiem',
        body: 'Ryzyko to mozliwosc wystapienia zdarzenia, ktore wplynie negatywnie na cele projektu. Celem zarzadzania ryzykiem jest identyfikacja zagrozen, przygotowanie sie do nich (profilaktyka, reakcja) i minimalizacja wplywu/skutkow.',
        bullets: [
          'Ustanowienie polityk, procedur, systemow i standardow oraz opracowanie dokumentacji (podreczniki, instrukcje, broszury)',
          'Wdrozenie zasad, procedur i standardow (szkolenia, cwiczenia kontrolne, audyty, przeglady)',
          'Identyfikacja ryzyk (jakie, ocena, wplyw, skutki), profilaktyka, scenariusze postepowania i monitorowanie',
          'Zasadnicze techniki: eliminacja, redukcja, transfer lub akceptacja'
        ]
      },
      {
        heading: 'Rodzaje ryzyk',
        bullets: [
          'Ekonomiczne - inflacja, spadek wartosci walut, zmiany stop procentowych, ogolna sytuacja ekonomiczna',
          'Srodowiskowe - kleski zywiolowe, zmiany klimatu, zanieczyszczenie, ochrona przyrody',
          'Geopolityczne - konflikty, napiecia polityczne, zmiany w polityce migracyjnej',
          'Spoleczne - bezpieczenstwo turystow, zmiany w zachowaniach konsumenckich, zmiany demograficzne, konflikt kulturowy',
          'Technologiczne - cyberataki, awarie systemow informacyjnych, rozwoj nowych technologii',
          'Specyficzne dla turystyki - sezonowosc, konkurencja, zmiany przepisow, jakosc uslug, marketing, bezpieczenstwo i zdrowie turystow, skutki turystyki masowej',
          'Zwiazane z lokalizacja - warunki naturalne, dostepnosc infrastruktury, poziom rozwoju spoleczno-gospodarczego, lokalne tradycje i kultura'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ktore z ponizszych to zasadnicze techniki zarzadzania ryzykiem?',
        options: [
          'Eliminacja, redukcja, transfer lub akceptacja',
          'Inflacja, deflacja, stagnacja i recesja',
          'Identyfikacja, marketing, sprzedaz i serwis',
          'Opis, interpretacja, ewaluacja i ocena'
        ],
        correct: 0,
        explain: 'Zasadnicze techniki zarzadzania ryzykiem to eliminacja, redukcja, transfer lub akceptacja.'
      },
      {
        type: 'abcd',
        q: 'Do ktorej kategorii ryzyk zalicza sie cyberataki i awarie systemow informacyjnych?',
        options: ['Technologicznych', 'Ekonomicznych', 'Srodowiskowych', 'Geopolitycznych'],
        correct: 0,
        explain: 'Ryzyka technologiczne sa zwiazane z cyberatakami, awariami systemow informacyjnych oraz rozwojem nowych technologii i ich wplywem na turystyke.'
      },
      {
        type: 'tf',
        q: 'Ryzyko definiuje sie jako mozliwosc wystapienia zdarzenia, ktore wplynie negatywnie na cele projektu.',
        correct: true,
        explain: 'Taka jest definicja ryzyka: mozliwosc wystapienia zdarzenia, ktore wplynie negatywnie na cele projektu.'
      },
      {
        type: 'flash',
        front: 'Wymien glowne rodzaje ryzyk w projektach turystycznych.',
        back: 'Ekonomiczne, srodowiskowe, geopolityczne, spoleczne, technologiczne, specyficzne dla turystyki oraz zwiazane z konkretna lokalizacja.'
      }
    ]
  },
  {
    id: 'turystyka-przygodowa-niepelnosprawnosc',
    track: 'przygodowa',
    category: 'outdoor',
    number: 22,
    title: 'Specyfika turystyki przygodowej osob z niepelnosprawnoscia',
    summary: 'Turystyka osob z niepelnosprawnoscia to dobrana do potrzeb aktywnosc, ktora wspomaga rehabilitacje i rozwoj; wymaga uwzglednienia stopni niepelnosprawnosci, dostosowania form aktywnosci oraz odpowiedniej metodyki.',
    wiki: [
      {
        heading: 'Stopnie i kategorie niepelnosprawnosci',
        body: 'W Polsce jest 3 miliony osob z prawnie potwierdzona niepelnosprawnoscia. Ustala sie trzy stopnie: znaczny (niezdolnosc do zatrudnienia lub praca w zakladzie chronionym, wymagana stala/dlugotrwala opieka), umiarkowany (praca na przystosowanym stanowisku, czesciowa/okresowa pomoc) i lekki (zdolnosc do zatrudnienia bez potrzeby pomocy).',
        bullets: ['upoSledzeni umyslowo', 'glusi', 'niewidomi', 'niedostosowani spolecznie', 'przewlekle chorzy somatycznie, nerwowo, psychicznie', 'osoby z uszkodzeniem narzadu ruchu', 'osoby z glebszymi zaburzeniami mowy']
      },
      {
        heading: 'Znaczenie i cele',
        body: 'Turystyka osob z niepelnosprawnoscia to zamierzona, celowa, dobrana do potrzeb aktywnosc fizyczna zwiazana z aktywnoscia krajoznawcza. Glownymi celami sa zmniejszenie skutkow ograniczenia aktywnosci fizycznej oraz zapelnienie czasu wolnego.',
        bullets: [
          'Wplywa na rozwoj osobowosci, wspomaga i przyspiesza rehabilitacje',
          'Podnosi samopoczucie, sprawnosc i wydolnosc fizyczna oraz przystosowanie spoleczne',
          'Pozwala przezwyciezyc leki i kompleksy, zapobiega wtornym zmianom po zabiegach',
          'Aktywnosc powinna byc: bezpieczna (dostosowana obciazeniowo), zaadaptowana (uwzgledniajaca ograniczenia) i efektywna (rozwijajaca mozliwosci)'
        ]
      },
      {
        heading: 'Czynniki przy programowaniu i metodyka',
        body: 'Programujac aktywnosc nalezy pamietac m.in. o: funkcjach ruchowych i czuciowych, ukladzie sercowo-naczyniowym, termoregulacji, ukladzie oddechowym i wydalniczo-moczowym, autonomicznej dysrefleksji, spastycznosci, stosowanych lekach, osteoporozie oraz koordynacji.',
        bullets: [
          'Wzbudzanie motywacji i entuzjazmu poprzez stymulacje zdolnosci, zainteresowan i ambicji',
          'Indywidualne traktowanie kazdego cwiczacego i znajomosc jego problemow',
          'Metody nauczania: slowne, kinestetyczne (angazowanie aktywnosci miesniowej, kojarzenie wzrokowo-ruchowe) i wzrokowe (pokaz bezposredni lub multimedialny)'
        ]
      }
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Ile stopni niepelnosprawnosci ustala sie w Polsce?',
        options: ['Trzy: znaczny, umiarkowany i lekki', 'Dwa: ciezki i lekki', 'Cztery stopnie', 'Piec stopni'],
        correct: 0,
        explain: 'Ustala sie trzy stopnie niepelnosprawnosci: znaczny, umiarkowany i lekki.'
      },
      {
        type: 'abcd',
        q: 'Jakie trzy cechy powinna miec aktywnosc turystyczna programowana dla osob z niepelnosprawnoscia?',
        options: [
          'Bezpieczna, zaadaptowana i efektywna',
          'Tania, krotka i masowa',
          'Spontaniczna, indywidualna i ryzykowna',
          'Sezonowa, lokalna i komercyjna'
        ],
        correct: 0,
        explain: 'Aktywnosc powinna byc bezpieczna (dostosowana obciazeniowo), zaadaptowana (uwzgledniajaca ograniczenia uczestnikow) i efektywna (rozwijajaca ich mozliwosci).'
      },
      {
        type: 'tf',
        q: 'Uczestnictwo osob z niepelnosprawnoscia w turystyce wspomaga i przyspiesza proces rehabilitacji.',
        correct: true,
        explain: 'Wsrod efektow uczestnictwa wymienia sie wspomaganie i przyspieszanie procesu rehabilitacji oraz podnoszenie sprawnosci i przystosowania spolecznego.'
      },
      {
        type: 'flash',
        front: 'Jakie metody nauczania wyroznia sie w pracy z osobami z niepelnosprawnoscia w turystyce?',
        back: 'Metody slowne, kinestetyczne (angazowanie aktywnosci miesniowej, np. kojarzenie wzrokowo-ruchowe) oraz wzrokowe (pokaz bezposredni lub posredni za pomoca srodkow multimedialnych).'
      }
    ]
  }
]
