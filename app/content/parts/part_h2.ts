import type { Topic } from '../types'

/**
 * Specjalizacja HOTELARSTWO — "Grupa przedmiotów specjalnościowych:
 * Menedżer hotelarstwa i gastronomii" (30 zagadnień, numeracja 1–30).
 * Opracowane na podstawie materiału źródłowego baza/hotelarstwo.pdf.
 * Sterowane danymi — kolejne zagadnienia dodajemy tutaj bez zmian w kodzie.
 */
export const partH2: Topic[] = [
    {
      "id": "hot-etyka-pracownika",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 1,
      "title": "Etyka pracownika hotelu",
      "summary": "Etyka pracownika hotelu obejmuje zbiór wartości, postaw i zasad zachowania (uczciwość, dyskrecja, szacunek, profesjonalizm i lojalność), którymi hotelarz kieruje się w relacjach z gośćmi, pracodawcą i zespołem.",
      "wiki": [
        {
          "heading": "Fundament: wartości i cechy osobowe",
          "body": "Etyka zawodowa hotelarza opiera się na zestawie wartości, które budują zaufanie gościa i pracodawcy. Pracownik powinien działać sumiennie, zgodnie z wytycznymi obiektu, oraz nieustannie podnosić swoje kwalifikacje.",
          "bullets": [
            "Uczciwość i rzetelność – zakaz oszukiwania gości i pracodawcy, przywłaszczania rzeczy oraz przyjmowania łapówek",
            "Szacunek i wysoka kultura osobista wobec gości, współpracowników i przełożonych",
            "Dyskrecja i lojalność – zakaz rozpowszechniania danych osobowych gości i informacji wewnętrznych",
            "Życzliwość, uprzejmość i elastyczność – obsługa z uśmiechem nawet w trudnych sytuacjach",
            "Odpowiedzialność, punktualność i efektywne zarządzanie czasem",
            "Dążenie do rozwoju zawodowego przez szkolenia i kursy"
          ]
        },
        {
          "heading": "Relacje z gościem",
          "body": "Centralnym obowiązkiem jest dbałość o komfort, bezpieczeństwo i zadowolenie gościa przez cały okres pobytu. Obsługa ma być pomocna, szybka, profesjonalna i spokojna.",
          "bullets": [
            "Równe traktowanie i zakaz dyskryminacji oraz faworyzowania",
            "Poszanowanie odmienności kulturowej gości",
            "Stała troska o wygodę i bezpieczeństwo podczas całego pobytu"
          ]
        },
        {
          "heading": "Wygląd i zachowanie służbowe",
          "body": "Profesjonalizm objawia się także w aparycji i komunikacji. Obowiązuje nienaganny, schludny wygląd oraz czysty i kompletny uniform, a kontakty z gośćmi utrzymuje się wyłącznie na stopie służbowej.",
          "bullets": [
            "Nienaganna aparycja i obowiązkowy strój służbowy (uniform)",
            "Przepisowe witanie gości (np. „Dzień dobry, Hotel Moderno, mówi Anna”)",
            "Asertywność i dystans służbowy – opanowanie nawet wobec tzw. trudnego gościa"
          ]
        },
        {
          "heading": "Obowiązki wobec pracodawcy i zespołu",
          "body": "Lojalność wobec firmy i współpraca w zespole są równie istotne jak relacje z gościem. Pracownik wykonuje polecenia przełożonych zgodnie z regulaminami i wspiera kolegów w sytuacjach kryzysowych.",
          "bullets": [
            "Posłuszeństwo służbowe – sprawne wykonywanie poleceń zgodnie ze standardami hotelu",
            "Zakaz negatywnego wyrażania się o współpracownikach i firmie",
            "Gra zespołowa – budowanie relacji bez konfliktów i wzajemne wsparcie",
            "Gotowość do natychmiastowej pomocy w sytuacjach nagłych"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Która postawa najlepiej oddaje zasadę dyskrecji i lojalności pracownika hotelu?",
          "options": [
            "Komentowanie pobytu znanego gościa w mediach społecznościowych",
            "Nieujawnianie danych osobowych gości i informacji wewnętrznych hotelu",
            "Dzielenie się szczegółami rezerwacji z zaprzyjaźnionymi gośćmi",
            "Publiczne ocenianie zachowania trudnych gości"
          ],
          "correct": 1,
          "explain": "Dyskrecja i lojalność oznaczają zakaz rozpowszechniania danych osobowych gości oraz wewnętrznych informacji o funkcjonowaniu hotelu."
        },
        {
          "type": "abcd",
          "q": "Jak zgodnie z etyką zawodową hotelarz powinien reagować na tzw. trudnego gościa?",
          "options": [
            "Odpowiedzieć równie stanowczo i emocjonalnie",
            "Zachować spokój, opanowanie i dystans służbowy",
            "Natychmiast odmówić dalszej obsługi",
            "Faworyzować go, by uniknąć konfliktu"
          ],
          "correct": 1,
          "explain": "Asertywność i dystans służbowy wymagają spokojnych, wyważonych i opanowanych reakcji nawet w kontakcie z trudnym gościem."
        },
        {
          "type": "tf",
          "q": "Przyjmowanie napiwków w formie łapówek oraz przywłaszczanie rzeczy gości jest dopuszczalne, o ile nie wpływa na jakość obsługi.",
          "correct": false,
          "explain": "Zasada uczciwości i rzetelności wprowadza absolutny zakaz przyjmowania łapówek i przywłaszczania cudzych rzeczy."
        },
        {
          "type": "flash",
          "front": "Wymień trzy obowiązki etyczne pracownika hotelu wobec pracodawcy i zespołu.",
          "back": "Posłuszeństwo służbowe (wykonywanie poleceń zgodnie z regulaminami), lojalność i nieoczernianie firmy oraz współpracowników, a także współpraca zespołowa i gotowość do pomocy w sytuacjach kryzysowych."
        }
      ]
    },
    {
      "id": "hot-agroturystyka",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 2,
      "title": "Otwarcie gospodarstwa agroturystycznego – ramy administracyjno-prawne",
      "summary": "Gospodarstwo agroturystyczne można prowadzić bezformalnościowo w ramach gospodarstwa rolnego (do 5 pokoi, dochód zwolniony z podatku) albo jako zarejestrowaną działalność gospodarczą, przy spełnieniu obowiązków ewidencyjnych, sanitarnych i środowiskowych.",
      "wiki": [
        {
          "heading": "Czym jest agroturystyka i dwie ścieżki jej prowadzenia",
          "body": "Gospodarstwo agroturystyczne to funkcjonujące gospodarstwo rolne, które poza tradycyjną produkcją roślinną lub zwierzęcą prowadzi dodatkowo działalność turystyczną (nocleg, wyżywienie, rekreacja). Wybór formy prawnej zależy przede wszystkim od skali biznesu: można działać jako rolnik bez zakładania firmy albo jako przedsiębiorca rejestrujący działalność gospodarczą."
        },
        {
          "heading": "Działalność w ramach gospodarstwa rolnego (bez rejestracji)",
          "body": "To najprostsza opcja na start, bez formalności – dochody z niej są zwolnione z podatku. Trzeba jednak spełnić łącznie kilka warunków:",
          "bullets": [
            "wynajem maksymalnie 5 pokoi",
            "pokoje w budynkach mieszkalnych lub gospodarczych na terenie własnego gospodarstwa",
            "usługa świadczona przez osobę fizyczną, a nie przez firmę",
            "goście to osoby prywatne (nie firmy ani zorganizowane grupy biznesowe)",
            "wyżywienie wyłącznie dla osób nocujących w gospodarstwie"
          ]
        },
        {
          "heading": "Działalność gospodarcza i formy prawne",
          "body": "Rejestracja firmy jest konieczna, gdy planujemy więcej niż 5 pokoi, dodatkowe usługi (wyżywienie, SPA), oferty dla firm (szkolenia, konferencje), korzystanie z ulg i rozliczanie VAT lub większe inwestycje.",
          "bullets": [
            "Jednoosobowa działalność gospodarcza (JDG) – najczęstsza, najprostsza i najtańsza; bezpłatna rejestracja online w CEIDG, z wyborem formy opodatkowania (skala, podatek liniowy, ryczałt)",
            "Spółka cywilna – dla dwóch lub więcej osób; wymaga umowy spółki i rejestracji w CEIDG przez każdego wspólnika, którzy ponoszą jednakową odpowiedzialność",
            "Spółka z o.o. – forma bezpieczniejsza, chroni majątek prywatny wspólników; wymaga rejestracji w KRS, pełnej księgowości i płaci podatek CIT"
          ]
        },
        {
          "heading": "Dodatkowe obowiązki administracyjne",
          "bullets": [
            "Zgłoszenie obiektu do ewidencji noclegowej – obowiązek każdego świadczącego usługi noclegowe; bezpłatne, na podstawie wniosku",
            "Wymogi sanitarne i przeciwpożarowe – pozytywna opinia sanepidu, ewentualne dostosowanie obiektu do norm (zwłaszcza przy gastronomii i imprezach)",
            "Ochrona środowiska – segregacja odpadów, wywóz śmieci, utylizacja resztek; gospodarstwo nie może szkodzić otoczeniu",
            "Możliwość korzystania z dofinansowań na remonty, wyposażenie i infrastrukturę rekreacyjną"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Ile maksymalnie pokoi można wynajmować w ramach gospodarstwa rolnego bez rejestrowania działalności gospodarczej?",
          "options": [
            "3 pokoje",
            "5 pokoi",
            "8 pokoi",
            "10 pokoi"
          ],
          "correct": 1,
          "explain": "Bezformalnościowa agroturystyka w ramach gospodarstwa rolnego dopuszcza wynajem maksymalnie 5 pokoi, a uzyskany dochód jest zwolniony z podatku."
        },
        {
          "type": "abcd",
          "q": "Która forma prawna prowadzenia agroturystyki chroni majątek prywatny wspólników przed zobowiązaniami firmy?",
          "options": [
            "Spółka cywilna",
            "Jednoosobowa działalność gospodarcza",
            "Spółka z ograniczoną odpowiedzialnością",
            "Działalność rolnicza bez rejestracji"
          ],
          "correct": 2,
          "explain": "W spółce z o.o. wspólnicy nie odpowiadają majątkiem prywatnym za zobowiązania firmy, dlatego jest to forma bezpieczniejsza, choć wymaga rejestracji w KRS i pełnej księgowości."
        },
        {
          "type": "tf",
          "q": "W ramach niezarejestrowanej działalności agroturystycznej można serwować posiłki także gościom, którzy nie nocują w gospodarstwie.",
          "correct": false,
          "explain": "Wyżywienie wolno oferować wyłącznie osobom nocującym w gospodarstwie – to jeden z warunków zwolnienia z podatku i braku konieczności rejestracji firmy."
        },
        {
          "type": "flash",
          "front": "Jaki obowiązek – niezależnie od wybranej formy działalności – ma każdy podmiot świadczący usługi noclegowe?",
          "back": "Zgłoszenie obiektu do ewidencji noclegowej (prowadzonej przez gminę) – jest bezpłatne i odbywa się na podstawie wniosku."
        }
      ]
    },
    {
      "id": "hot-rekreacja-standaryzacja",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 3,
      "title": "Usługi rekreacyjne a standaryzacja obiektów noclegowych",
      "summary": "Usługi rekreacyjne są jednym z kryteriów kategoryzacji obiektów hotelarskich, dlatego dla hoteli wyższej klasy stają się wymogiem, a dla pozostałych czynnikiem przewagi konkurencyjnej.",
      "wiki": [
        {
          "heading": "Rekreacja jako kryterium kategoryzacji",
          "body": "Relacja między usługami rekreacyjnymi a standaryzacją obiektów noclegowych jest ścisła, ponieważ oferta rekreacyjna należy do kluczowych elementów wpływających na kategoryzację, czyli liczbę przyznawanych gwiazdek. Wymagania dla obiektów hotelarskich w Polsce określa rozporządzenie Ministra Sportu i Turystyki z 2011 roku w sprawie obiektów hotelarskich i innych obiektów, w których są świadczone usługi hotelarskie. Standaryzacja wyznacza poziom komfortu i obsługi, a usługi rekreacyjne naturalnie uzupełniają i wzbogacają ofertę noclegową (komplementarność)."
        },
        {
          "heading": "Wymagania według kategorii",
          "bullets": [
            "Hotele 4★ i 5★ – muszą zapewnić co najmniej jedną formę rekreacji (np. sala fitness lub siłownia, basen, sauna, jacuzzi, korty tenisowe, SPA & Wellness, usługi masażu, strefy relaksu).",
            "Hotele 1–3★ – nie muszą posiadać rozbudowanej oferty rekreacyjnej.",
            "Jeśli niższe kategorie ją oferują, mogą podnieść atrakcyjność rynkową, uzyskać wyższą ocenę w systemach rezerwacyjnych i przyciągnąć szersze grupy klientów (rodziny, osoby aktywne, seniorzy)."
          ]
        },
        {
          "heading": "Znaczenie relacji dla obiektu i gościa",
          "bullets": [
            "Pewność i lojalność – klasyfikacja buduje zaufanie do jakości, dzięki czemu goście chętniej wracają.",
            "Marketing i promocja – gwarantowana jakość ułatwia budowę marki i promowanie usług rekreacyjnych.",
            "Czynnik różnicujący – w warunkach konkurencji rekreacja wyróżnia ofertę i wpływa na lojalność.",
            "Elastyczność – standardy nie wykluczają różnorodności; obiekt może dobierać atrakcje pod konkretne grupy klientów."
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Które kategorie hoteli są zobowiązane do zapewnienia co najmniej jednej formy rekreacji?",
          "options": [
            "Hotele 1★ i 2★",
            "Hotele 2★ i 3★",
            "Hotele 3★ i 4★",
            "Hotele 4★ i 5★"
          ],
          "correct": 3,
          "explain": "Wymóg co najmniej jednej formy rekreacji (np. basen, siłownia, SPA) dotyczy hoteli czterogwiazdkowych i pięciogwiazdkowych."
        },
        {
          "type": "abcd",
          "q": "Który akt prawny określa wymagania dla obiektów hotelarskich, w tym powiązane z usługami rekreacyjnymi?",
          "options": [
            "Ustawa o kulturze fizycznej z 1996 r.",
            "Rozporządzenie Ministra Sportu i Turystyki z 2011 r. w sprawie obiektów hotelarskich",
            "Rozporządzenie Ministra Zdrowia z 2005 r.",
            "Kodeks cywilny z 1964 r."
          ],
          "correct": 1,
          "explain": "Standardy obiektów hotelarskich, w których świadczone są usługi hotelarskie, reguluje rozporządzenie Ministra Sportu i Turystyki z 2011 roku."
        },
        {
          "type": "tf",
          "q": "Hotele kategorii 1–3 gwiazdek są prawnie zobowiązane do posiadania rozbudowanej oferty rekreacyjnej.",
          "correct": false,
          "explain": "Hotele 1–3★ nie muszą oferować rozbudowanej rekreacji, choć jej posiadanie podnosi ich atrakcyjność i ocenę rynkową."
        },
        {
          "type": "flash",
          "front": "Jakimi udogodnieniami rekreacyjnymi hotel 4★ lub 5★ może spełnić wymóg co najmniej jednej formy rekreacji?",
          "back": "Np. salą fitness lub siłownią, basenem, sauną, jacuzzi, kortami tenisowymi, strefą SPA & Wellness, usługami masażu lub strefą relaksu."
        }
      ]
    },
    {
      "id": "hot-skladowe-uslug-rekreacyjnych",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 4,
      "title": "Składowe usług rekreacyjnych",
      "summary": "Usługa rekreacyjna powstaje z połączenia kilku składowych: bazy materialnej i sprzętu, kadry, programu zajęć, gastronomii, warunków środowiskowych oraz systemu bezpieczeństwa, które razem umożliwiają aktywny wypoczynek i regenerację gości.",
      "wiki": [
        {
          "heading": "Czym są składowe usług rekreacyjnych",
          "body": "Składowe usług rekreacyjnych to wszystkie elementy tworzące ofertę, która umożliwia gościom aktywny wypoczynek, relaks, rozrywkę oraz regenerację sił fizycznych i psychicznych. W hotelarstwie i turystyce dzieli się je na kilka współzależnych kategorii — żadna z nich z osobna nie wystarcza, dopiero ich połączenie daje kompletny produkt rekreacyjny."
        },
        {
          "heading": "Baza materialna: obiekty, infrastruktura i sprzęt",
          "body": "Materialny fundament usługi to obiekty i infrastruktura oraz przypisany do nich sprzęt.",
          "bullets": [
            "Infrastruktura sportowo-basenowa: baseny, aquaparki, jacuzzi, sale fitness i siłownie",
            "Infrastruktura terenowa i szlaki: boiska, korty, kręgielnie, trasy rowerowe, piesze i narciarskie",
            "Strefy relaksu: SPA, sauny, groty solne; miejsca rozrywki: parki linowe, place zabaw",
            "Sprzęt i wyposażenie: rowery, kajaki, narty, rakiety, liny oraz stroje i akcesoria ochronne (kaski, obuwie)"
          ]
        },
        {
          "heading": "Kadra, program i gastronomia",
          "body": "O jakości doświadczenia decydują ludzie i konkretna oferta zajęć, wsparte usługami żywieniowymi.",
          "bullets": [
            "Personel i kadra: instruktorzy sportu i rekreacji, ratownicy wodni, animatorzy czasu wolnego, fizjoterapeuci i masażyści, przewodnicy",
            "Program i oferta: zajęcia fitness, jogi, turnieje, wycieczki krajoznawcze, ekoturystyka, turystyka ekstremalna, imprezy kulturalne, spa & wellness, warsztaty, animacje dla dzieci",
            "Gastronomia: restauracje, kawiarnie, food trucki, festiwale kulinarne, degustacje produktów regionalnych"
          ]
        },
        {
          "heading": "Warunki środowiskowe oraz bezpieczeństwo",
          "body": "Dwie składowe spinają całość: otoczenie obiektu i system bezpieczeństwa.",
          "bullets": [
            "Warunki środowiskowe i lokalizacja: położenie (nad jeziorem, w górach), klimat i jakość powietrza, walory przyrodnicze, dostępność terenów zielonych, wód i szlaków",
            "Bezpieczeństwo i dostępność: oznaczenia i regulaminy, nadzór personelu, ubezpieczenia i środki pierwszej pomocy, przystosowanie do potrzeb osób z niepełnosprawnością"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Do której składowej usług rekreacyjnych zalicza się ratownika wodnego oraz animatora czasu wolnego?",
          "options": [
            "Obiekty i infrastruktura rekreacyjna",
            "Personel i kadra rekreacyjna",
            "Program i oferta rekreacyjna",
            "Warunki środowiskowe i lokalizacja"
          ],
          "correct": 1,
          "explain": "Ratownicy wodni i animatorzy czasu wolnego to ludzie odpowiedzialni za organizację, bezpieczeństwo i animację, czyli składowa personel i kadra rekreacyjna."
        },
        {
          "type": "abcd",
          "q": "Który element należy do składowej 'warunki środowiskowe i lokalizacja'?",
          "options": [
            "Sauny i groty solne",
            "Liny wspinaczkowe i kaski",
            "Położenie nad jeziorem oraz walory przyrodnicze",
            "Degustacje produktów regionalnych"
          ],
          "correct": 2,
          "explain": "Warunki środowiskowe i lokalizacja obejmują naturalne i przestrzenne uwarunkowania, np. położenie obiektu, klimat, walory przyrodnicze i dostępność wód czy szlaków."
        },
        {
          "type": "tf",
          "q": "Gastronomia (restauracje, food trucki, festiwale kulinarne, degustacje) jest jedną ze składowych usług rekreacyjnych.",
          "correct": true,
          "explain": "Gastronomia stanowi odrębną składową usług rekreacyjnych, zapewniając doświadczenia kulinarne wspierające pobyt rekreacyjny."
        },
        {
          "type": "flash",
          "front": "Wymień składową usług rekreacyjnych odpowiedzialną za ochronę uczestników i podaj jej przykładowe elementy.",
          "back": "Bezpieczeństwo i dostępność — obejmuje oznaczenia i regulaminy, nadzór personelu, ubezpieczenia, środki pierwszej pomocy oraz przystosowanie do potrzeb osób z niepełnosprawnością."
        }
      ]
    },
    {
      "id": "hot-jakosc-uslug-hotelarskich",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 5,
      "title": "Jakość w usługach hotelarskich",
      "summary": "Jakość w hotelarstwie to stopień, w jakim świadczona usługa spełnia oczekiwania gościa i obowiązujące standardy, obejmując obsługę, komfort pobytu, czystość, gastronomię i bezpieczeństwo oraz mierzona m.in. metodą tajemniczego klienta i certyfikatami.",
      "wiki": [
        {
          "heading": "Czym jest jakość w hotelarstwie",
          "body": "Jakość w usługach hotelarskich to stopień, w jakim świadczona usługa spełnia oczekiwania klienta oraz odpowiada przyjętym standardom (kategoryzacja hoteli, procedury obsługi). Usługi hotelarskie mają specyficzny charakter: są niematerialne, nietrwałe (trudne do magazynowania) i silnie zależne od poziomu obsługi, dlatego jakość trzeba rozpatrywać wieloaspektowo. Decyduje ona o zadowoleniu gości i przekłada się bezpośrednio na sukces obiektu na rynku."
        },
        {
          "heading": "Składowe jakości pobytu",
          "bullets": [
            "Obsługa klienta: kompetencje i kultura osobista personelu, szybkość reakcji, personalizacja usług, uprzejmość i życzliwość",
            "Komfortowe warunki pobytu: czysty i wygodny pokój, klimatyzacja, nowoczesne wyposażenie (WiFi, TV, minibar), estetyka wystroju",
            "Czystość i higiena: codzienne sprzątanie, dbałość o części wspólne (lobby, baseny), przestrzeganie norm sanitarnych",
            "Oferta gastronomiczna: smak i jakość potraw, opcje dla diet i alergików, szybkość obsługi, atmosfera restauracji",
            "Dodatkowe udogodnienia: strefa SPA i rekreacji, pralnia, parking, room service, infrastruktura biznesowa",
            "Bezpieczeństwo gości: monitoring, zamki elektroniczne i sejfy, systemy alarmowe oraz instrukcje na wypadek zagrożenia"
          ]
        },
        {
          "heading": "Jak mierzyć jakość usług",
          "body": "Jakość ocenia się m.in. metodą tajemniczego klienta (Mystery Shopper) – niezależnym audytem, w którym osoba udająca zwykłego gościa kontroluje przestrzeganie procedur. Ważnym źródłem wiedzy jest analiza satysfakcji oparta na ankietach i opiniach na portalach typu Booking czy TripAdvisor. Poziom jakości potwierdzają także certyfikaty i standardy międzynarodowe, takie jak ISO 9001 (system zarządzania jakością gwarantujący powtarzalność usług) oraz HACCP (bezpieczeństwo żywności w hotelowej gastronomii)."
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Na czym polega metoda tajemniczego klienta (Mystery Shopper) w ocenie jakości usług hotelarskich?",
          "options": [
            "Na analizie ankiet wypełnianych przez gości po wymeldowaniu",
            "Na niezależnym audycie prowadzonym przez osobę udającą zwykłego gościa",
            "Na obowiązkowej certyfikacji ISO każdego hotelu",
            "Na codziennej kontroli czystości pokoi przez housekeeping"
          ],
          "correct": 1,
          "explain": "Tajemniczy klient to zewnętrzny, niezależny audyt jakości, w którym kontroler udaje zwykłego gościa, by sprawdzić przestrzeganie procedur."
        },
        {
          "type": "abcd",
          "q": "Który międzynarodowy standard potwierdza powtarzalność i wysoki poziom zarządzania jakością świadczonych usług?",
          "options": [
            "HACCP",
            "HALAL",
            "ISO 9001",
            "ISO 14001"
          ],
          "correct": 2,
          "explain": "ISO 9001 to prestiżowy standard zarządzania jakością potwierdzający powtarzalność i wysoki poziom usług, podczas gdy HACCP dotyczy bezpieczeństwa żywności."
        },
        {
          "type": "tf",
          "q": "Usługi hotelarskie są niematerialne i nietrwałe (trudne do magazynowania), dlatego ich jakość silnie zależy od poziomu obsługi.",
          "correct": true,
          "explain": "Niematerialność i nietrwałość usług powodują, że jakość tworzy się w bezpośrednim kontakcie z personelem podczas świadczenia usługi."
        },
        {
          "type": "flash",
          "front": "Jakie metody i narzędzia służą do pomiaru jakości usług hotelarskich?",
          "back": "Tajemniczy klient (Mystery Shopper), analiza satysfakcji gości (ankiety, opinie na Booking/TripAdvisor) oraz certyfikaty i standardy międzynarodowe, zwłaszcza ISO 9001 i HACCP."
        }
      ]
    },
    {
      "id": "hot-menu-inzynieria",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 6,
      "title": "Menu – definicja, funkcje i inżynieria menu",
      "summary": "Menu to zestaw potraw i napojów oferowanych przez zakład gastronomiczny, będący podstawowym narzędziem komunikacji z gościem, którego rentowność i strukturę optymalizuje się metodą inżynierii menu.",
      "wiki": [
        {
          "heading": "Definicja menu",
          "body": "Menu to zestaw potraw i napojów oferowanych przez zakład gastronomiczny, najczęściej z podanymi cenami. Może mieć formę karty dań, tablicy, ekranu lub innej prezentacji. Stanowi podstawowe narzędzie komunikacji pomiędzy lokalem a gościem oraz wizytówkę zakładu – jego forma i sposób prezentacji potraw świadczą o standardzie obiektu i wpływają na wielkość sprzedaży."
        },
        {
          "heading": "Funkcje menu",
          "bullets": [
            "Informacyjna – informuje gości o dostępnych daniach, napojach i ich cenach, umożliwiając świadomy wybór.",
            "Sprzedażowa – wpływa na decyzje zakupowe, zachęcając do wyboru droższych lub bardziej dochodowych pozycji.",
            "Promocyjna – eksponuje specjalności, dania dnia, menu degustacyjne, oferty sezonowe i nowości.",
            "Organizacyjna – ułatwia planowanie pracy kuchni oraz zarządzanie zapasami i zakupami składników.",
            "Psychologiczna – wygląd, opisy i dobór słów kształtują wrażenie estetyczne i postrzeganie lokalu.",
            "Wizerunkowa i badawcza – pokazuje specyfikę zakładu oraz pozwala monitorować zapotrzebowanie na potrawy."
          ]
        },
        {
          "heading": "Inżynieria menu",
          "body": "Inżynieria menu to proces analizy oferty gastronomicznej w celu zwiększenia rentowności i efektywności sprzedaży. Polega na klasyfikowaniu dań według ich popularności (wielkości sprzedaży) oraz dochodowości (zyskowności), a następnie na takim układzie karty, by zachęcić gości do wyboru pozycji o wyższej marży lub najlepiej odpowiadających strategii lokalu. Pomaga zdecydować, które potrawy promować, zmienić lub usunąć, uchwytując zależność między kosztem (ceną żywności i pracą personelu) a zyskiem ze sprzedaży."
        },
        {
          "heading": "Klasyfikacja dań (macierz popularność × dochodowość)",
          "bullets": [
            "Gwiazdy – wysoka dochodowość i wysoka sprzedaż; popularne i tanie w przygotowaniu, generują duże zyski.",
            "Znaki zapytania (zagadki) – wysoka dochodowość, niska sprzedaż; tanie w produkcji, ale słabo sprzedawane, z perspektywą stania się gwiazdami.",
            "Dojne krowy (konie pociągowe) – niska dochodowość, wysoka sprzedaż; klasyki lubiane przez gości, dające zysk z ilości, a nie z marży.",
            "Psy (przegrane) – niska dochodowość i niska sprzedaż; pozycje, które nie przyciągają gości, kandydaci do usunięcia."
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "W inżynierii menu danie o wysokiej dochodowości i wysokiej sprzedaży zalicza się do kategorii:",
          "options": [
            "Dojne krowy",
            "Psy",
            "Gwiazdy",
            "Znaki zapytania"
          ],
          "correct": 2,
          "explain": "Gwiazdy są popularne i jednocześnie tanie w przygotowaniu, więc generują największe zyski."
        },
        {
          "type": "abcd",
          "q": "Według jakich dwóch kryteriów inżynieria menu klasyfikuje dania?",
          "options": [
            "Kaloryczności i sezonowości",
            "Popularności (sprzedaży) i dochodowości (zyskowności)",
            "Czasu przygotowania i wielkości porcji",
            "Ceny składników i lokalizacji lokalu"
          ],
          "correct": 1,
          "explain": "Macierz inżynierii menu zestawia wielkość sprzedaży danego dania z jego zyskownością."
        },
        {
          "type": "tf",
          "q": "W inżynierii menu \"dojne krowy\" to dania popularne, lecz o niskiej dochodowości, których zysk wynika z liczby sprzedanych porcji, a nie z wysokiej marży.",
          "correct": true,
          "explain": "Dojne krowy mają wysoką sprzedaż i niską dochodowość, dlatego zarabiają ilością, a nie marżą."
        },
        {
          "type": "flash",
          "front": "Wymień trzy podstawowe funkcje menu jako narzędzia komunikacji między lokalem a gościem.",
          "back": "Informacyjna (informuje o daniach i cenach), sprzedażowa (wpływa na decyzje zakupowe) oraz promocyjna (eksponuje specjalności i oferty)."
        }
      ]
    },
    {
      "id": "hot-metody-obslugi-gastronomicznej",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 7,
      "title": "Metody i rodzaje obsługi w zakładzie gastronomicznym",
      "summary": "Przegląd metod obsługi gości (bezpośredniej, samoobsługowej i mieszanej) oraz standardowych rodzajów serwisu kelnerskiego: niemieckiego, francuskiego, angielskiego i rosyjskiego.",
      "wiki": [
        {
          "heading": "Metody obsługi",
          "body": "W gastronomii wyróżnia się trzy podstawowe metody obsługi gości, dobierane w zależności od charakteru lokalu i natężenia ruchu konsumentów.",
          "bullets": [
            "Metoda bezpośrednia (kelnerska) – tradycyjna forma, w której kelner podaje do stołu wcześniej zamówione potrawy i napoje; zapewnia wysoki komfort, lecz jest pracochłonna, czasochłonna i wymaga kwalifikacji.",
            "Obsługa samoobsługowa – gość sam przynosi z bufetu wybrane potrawy i napoje; stosowana przy dużym natężeniu ruchu konsumentów.",
            "Obsługa mieszana – połączenie obsługi barmana z obsługą kelnerską; goście sami przenoszą np. sałatki i desery, a pozostałe dania i napoje podaje kelner."
          ]
        },
        {
          "heading": "Rodzaje obsługi kelnerskiej (według standardu)",
          "body": "Profesjonalny serwis kelnerski dzieli się na cztery standardy różniące się sposobem prezentacji i podawania potraw oraz okazją, na jaką są stosowane.",
          "bullets": [
            "Serwis niemiecki (talerzowy, metoda amerykańska) – najczęstszy w restauracjach i hotelach; gotowe, wyporcjowane i udekorowane dania podaje się i zabiera z prawej strony, poruszając się w lewo wokół stołu.",
            "Serwis francuski (półmiskowy) – potrawy na półmiskach wieloporcjowych; kelner podchodzi z lewej strony i nakłada potrawę lub robi to gość; elegancki i bardzo czasochłonny, stosowany na przyjęciach.",
            "Serwis angielski – podawanie z wózka kelnerskiego lub stolika dostawczego z prezentacją, porcjowaniem i flambirowaniem; obsługa z prawej według hierarchii gości, na oficjalnych, kameralnych przyjęciach.",
            "Serwis rosyjski (rodzinny) – zimne zakąski, sery, desery i wina wyłożone na stół do końca przyjęcia; goście obsługują się sami, kelner donosi gorące dania; typowy dla wesel i imprez okolicznościowych."
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Z której strony gościa kelner podaje i zabiera talerze w serwisie niemieckim (talerzowym)?",
          "options": [
            "Z lewej strony",
            "Z prawej strony",
            "Z przodu, ponad stołem",
            "Zza pleców gościa"
          ],
          "correct": 1,
          "explain": "W serwisie niemieckim talerze podaje się i zabiera z prawej strony, przemieszczając się w lewo wokół stołu."
        },
        {
          "type": "abcd",
          "q": "Który rodzaj obsługi kelnerskiej charakteryzuje się flambirowaniem potraw przy wózku lub stoliku dostawczym?",
          "options": [
            "Serwis niemiecki",
            "Serwis francuski",
            "Serwis angielski",
            "Serwis rosyjski"
          ],
          "correct": 2,
          "explain": "Serwis angielski polega na prezentacji, porcjowaniu i flambirowaniu potraw przy wózku kelnerskim."
        },
        {
          "type": "tf",
          "q": "Obsługa mieszana łączy obsługę barmana z obsługą kelnerską przy stołach.",
          "correct": true,
          "explain": "W obsłudze mieszanej część potraw goście biorą sami, a pozostałe dania i napoje podaje kelner zgodnie z zamówieniem."
        },
        {
          "type": "flash",
          "front": "Na czym polega serwis rosyjski (rodzinny) i kiedy się go stosuje?",
          "back": "Wszystkie zimne zakąski, sery, desery i wina są wyłożone na stół do końca przyjęcia, goście obsługują się sami, a kelner donosi gorące dania; stosowany na weselach, komuniach i rodzinnych imprezach okolicznościowych."
        }
      ]
    },
    {
      "id": "hot-motywacja-pracownikow-gastronomia",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 8,
      "title": "Motywacja pracowników w zakładzie gastronomicznym",
      "summary": "Motywowanie personelu gastronomicznego opiera się na czynnikach finansowych i pozafinansowych, które przekładają się na jakość obsługi, wydajność pracy i niższą rotację zespołu.",
      "wiki": [
        {
          "heading": "Dlaczego motywacja jest kluczowa",
          "body": "W branży gastronomicznej motywacja pracowników bezpośrednio decyduje o wysokiej jakości obsługi, zadowoleniu gości oraz sprawnym funkcjonowaniu lokalu. Skuteczne motywowanie wymaga indywidualnego podejścia, które uwzględnia potrzeby, aspiracje i oczekiwania konkretnego pracownika, aby zbudować pozytywną atmosferę i utrzymać wysoki standard obsługi klienta."
        },
        {
          "heading": "Główne czynniki motywujące",
          "body": "Czynniki motywacyjne dzielą się na finansowe (płacowe) oraz pozafinansowe (pozapłacowe), które razem tworzą spójny system zachęt.",
          "bullets": [
            "Wynagrodzenie: adekwatna płaca, premie, napiwki, dodatki za nadgodziny i pracę w weekendy",
            "Elastyczny grafik pracy umożliwiający naukę lub życie osobiste",
            "Możliwość awansu i rozwoju: szkolenia, kursy baristyczne, kelnerskie i kucharskie",
            "Stabilność zatrudnienia: umowa o pracę, jasne zasady, terminowe wypłaty",
            "Uznanie i docenianie: pochwały, nagrody, certyfikat pracownika miesiąca",
            "Dobre relacje w zespole, komunikacja i wzajemne wsparcie",
            "Warunki pracy: przyjazna atmosfera, ergonomiczne stanowiska, odpowiednie wyposażenie kuchni i sali",
            "Zaangażowanie przełożonych: lider, który wspiera i rozwiązuje konflikty"
          ]
        },
        {
          "heading": "Efekty zmotywowanego zespołu",
          "body": "Zmotywowani pracownicy lepiej obsługują klientów, pracują wydajniej i z większym zaangażowaniem, a także rzadziej zmieniają pracę, co obniża rotację w zespole. Tworzą też dobrą atmosferę w miejscu pracy, co wzmacnia wizerunek lokalu."
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Który z poniższych czynników motywacyjnych ma charakter pozapłacowy (pozafinansowy)?",
          "options": [
            "Dodatek za pracę w weekendy",
            "Premia uznaniowa",
            "Certyfikat pracownika miesiąca",
            "Napiwki od gości"
          ],
          "correct": 2,
          "explain": "Certyfikat pracownika miesiąca to forma uznania i docenienia, czyli motywator pozafinansowy, w odróżnieniu od premii, dodatków i napiwków."
        },
        {
          "type": "abcd",
          "q": "Co według źródła jest bezpośrednim efektem posiadania zmotywowanego zespołu w gastronomii?",
          "options": [
            "Wyższe ceny w menu",
            "Niższa rotacja pracowników",
            "Skrócenie godzin otwarcia lokalu",
            "Rezygnacja z systemu napiwków"
          ],
          "correct": 1,
          "explain": "Zmotywowani pracownicy rzadziej zmieniają pracę, co zmniejsza rotację w zespole."
        },
        {
          "type": "tf",
          "q": "Skuteczne motywowanie pracowników gastronomii wymaga indywidualnego podejścia uwzględniającego ich potrzeby, aspiracje i oczekiwania.",
          "correct": true,
          "explain": "Źródło wprost podkreśla konieczność indywidualnego podejścia dla zapewnienia dobrej atmosfery i wysokiej jakości obsługi."
        },
        {
          "type": "flash",
          "front": "Wymień co najmniej trzy pozafinansowe czynniki motywujące pracownika zakładu gastronomicznego.",
          "back": "Możliwość awansu i rozwoju (szkolenia, kursy), uznanie i docenianie (pochwały, certyfikat pracownika miesiąca), dobre relacje w zespole, elastyczny grafik, dobre warunki i atmosfera pracy oraz zaangażowanie przełożonych."
        }
      ]
    },
    {
      "id": "hot-sluzby-hotelowe",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 9,
      "title": "Organizacja pracy służb hotelowych",
      "summary": "Służby hotelowe to współpracujące zespoły (recepcja, służba pięter, gastronomia, służby techniczne i administracja), których dobra organizacja zapewnia gościom komfortowy pobyt i sprawne zarządzanie operacyjne obiektu.",
      "wiki": [
        {
          "heading": "Czym są służby hotelowe",
          "body": "Służby hotelowe to zespoły pracowników odpowiedzialnych za sprawne funkcjonowanie obiektu i zapewnienie wysokiego poziomu obsługi gości. Dobra organizacja ich pracy decyduje o pozytywnym wrażeniu klienta, dlatego poszczególne działy muszą działać według jasnego podziału obowiązków i ściśle ze sobą współpracować."
        },
        {
          "heading": "Główne działy i ich zadania",
          "bullets": [
            "Recepcja (front office): rezerwacja pokoi, meldowanie i wymeldowanie, informacja o usługach, obsługa płatności i dokumentacji – pierwszy kontakt z gościem, tworzący wizerunek hotelu.",
            "Służba pięter (housekeeping): sprzątanie pokoi i pomieszczeń ogólnodostępnych, uzupełnianie pościeli, ręczników i środków higienicznych, kontrola stanu pokoju, współpraca z recepcją w zakresie dostępności pokoi.",
            "Dział gastronomiczny: przygotowanie i serwowanie posiłków (restauracja, bar, room service), organizacja śniadań i imprez okolicznościowych, obsługa konferencji.",
            "Służby techniczne: utrzymanie sprawności technicznej, naprawa awarii, przeglądy urządzeń, nadzór nad systemami bezpieczeństwa i ogrzewania.",
            "Administracja i kierownictwo (ewentualnie dział marketingu): zarządzanie personelem, kontrola jakości, dokumentacja, nadzór finansowy, marketing i kontakt z kontrahentami."
          ]
        },
        {
          "heading": "Zasady dobrej organizacji pracy",
          "bullets": [
            "Jasny podział obowiązków oraz harmonogramy i grafik zmianowy.",
            "Współpraca między działami (np. housekeeping–recepcja w zakresie gotowości pokoi).",
            "System kontroli jakości: check-listy i inspekcje.",
            "Szkolenie personelu i motywacja.",
            "Sprawna komunikacja i szybkie reagowanie na potrzeby gości."
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Który dział służb hotelowych odpowiada za rezerwację pokoi oraz meldowanie i wymeldowanie gości?",
          "options": [
            "Służba pięter (housekeeping)",
            "Recepcja (front office)",
            "Służby techniczne",
            "Dział gastronomiczny"
          ],
          "correct": 1,
          "explain": "Recepcja, czyli front office, prowadzi rezerwacje, meldunek i wymeldowanie oraz stanowi pierwszy kontakt gościa z hotelem."
        },
        {
          "type": "abcd",
          "q": "Które zadanie należy do służby pięter (housekeeping)?",
          "options": [
            "Naprawa awarii i przegląd urządzeń",
            "Serwowanie posiłków w room service",
            "Uzupełnianie pościeli, ręczników i środków higienicznych",
            "Prowadzenie nadzoru finansowego hotelu"
          ],
          "correct": 2,
          "explain": "Służba pięter sprząta pokoje i uzupełnia pościel, ręczniki oraz środki higieniczne, kontrolując stan pokoju."
        },
        {
          "type": "tf",
          "q": "Współpraca między działami, np. między służbą pięter a recepcją w zakresie dostępności pokoi, jest jedną z zasad dobrej organizacji pracy służb hotelowych.",
          "correct": true,
          "explain": "Współdziałanie działów, m.in. housekeepingu i recepcji co do gotowości pokoi, jest wymienianą zasadą sprawnej organizacji."
        },
        {
          "type": "flash",
          "front": "Wymień główne działy służb hotelowych.",
          "back": "Recepcja (front office), służba pięter (housekeeping), dział gastronomiczny, służby techniczne oraz administracja/kierownictwo (ewentualnie dział marketingu)."
        }
      ]
    },
    {
      "id": "hot-planowanie-projektu",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 10,
      "title": "Planowanie realizacji projektu",
      "summary": "Planowanie realizacji projektu to proces opracowania szczegółowego planu działań prowadzących do osiągnięcia celów projektu w określonym czasie i budżecie, oparty na celach typu SMART i kolejnych etapach od określenia celu po dokumentację i komunikację.",
      "wiki": [
        {
          "heading": "Istota planowania i cel SMART",
          "body": "Planowanie realizacji projektu to kluczowy proces obejmujący opracowanie szczegółowego planu działań, który ma doprowadzić do osiągnięcia określonych celów projektu w wyznaczonym czasie i założonym budżecie. Punktem wyjścia jest poprawnie sformułowany cel, który powinien spełniać kryteria SMART.",
          "bullets": [
            "S – konkretny (Specific)",
            "M – mierzalny (Measurable)",
            "A – osiągalny (Achievable)",
            "R – istotny / realistyczny (Relevant)",
            "T – określony w czasie (Time-bound)"
          ]
        },
        {
          "heading": "Etapy planowania realizacji projektu",
          "body": "Proces planowania przebiega w siedmiu następujących po sobie etapach, prowadzących od zdefiniowania celu aż po ustalenie zasad komunikacji.",
          "bullets": [
            "1. Określenie celu projektu – co i dlaczego chcemy osiągnąć",
            "2. Analiza potrzeb i zasobów – środki ludzkie, finansowe, materialne oraz ograniczenia",
            "3. Opracowanie harmonogramu – rozpisanie zadań w czasie z terminami etapów",
            "4. Przydzielenie zadań i odpowiedzialności – podział ról w zespole projektowym",
            "5. Określenie budżetu – szacowanie kosztów i ustalenie źródeł finansowania",
            "6. Ocena ryzyka – identyfikacja problemów i opracowanie planów awaryjnych",
            "7. Dokumentacja i komunikacja – spisanie planu oraz zasad raportowania postępów"
          ]
        },
        {
          "heading": "Dlaczego planowanie jest ważne",
          "body": "Dobrze przeprowadzone planowanie przekłada się na sprawniejszą realizację przedsięwzięcia.",
          "bullets": [
            "Pozwala uniknąć chaosu i opóźnień",
            "Ułatwia kontrolę nad projektem",
            "Zwiększa szanse na osiągnięcie celów",
            "Umożliwia efektywne wykorzystanie zasobów"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Co oznacza litera „T” w kryteriach celu SMART?",
          "options": [
            "Tani w realizacji",
            "Określony w czasie",
            "Techniczny",
            "Trwały"
          ],
          "correct": 1,
          "explain": "W modelu SMART litera „T” (Time-bound) oznacza cel określony w czasie, z wyznaczonym terminem realizacji."
        },
        {
          "type": "abcd",
          "q": "Który etap planowania realizacji projektu obejmuje identyfikację potencjalnych problemów i opracowanie planów awaryjnych?",
          "options": [
            "Opracowanie harmonogramu",
            "Określenie budżetu",
            "Ocena ryzyka",
            "Analiza potrzeb i zasobów"
          ],
          "correct": 2,
          "explain": "Ocena ryzyka polega na identyfikacji potencjalnych problemów oraz przygotowaniu planów awaryjnych."
        },
        {
          "type": "tf",
          "q": "Opracowanie harmonogramu projektu polega na rozpisaniu działań i zadań w czasie oraz ustaleniu terminów rozpoczęcia i zakończenia każdego etapu.",
          "correct": true,
          "explain": "Harmonogram porządkuje zadania w czasie, wyznaczając terminy startu i zakończenia poszczególnych etapów."
        },
        {
          "type": "flash",
          "front": "Wymień etap planowania projektu, na którym szacuje się koszty i ustala źródła finansowania.",
          "back": "Określenie budżetu – obejmuje szacowanie kosztów oraz ustalenie źródeł finansowania projektu."
        }
      ]
    },
    {
      "id": "hot-obowiazki-prawne-hotelarza",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 11,
      "title": "Podstawowe obowiązki prawne w zawodzie hotelarza",
      "summary": "Wykonywanie zawodu hotelarza wiąże się z obowiązkami prawnymi w sześciu obszarach: prowadzenia działalności, relacji z gośćmi, wymogów sanitarno-przeciwpożarowych, zobowiązań podatkowo-finansowych, prawa pracy oraz ochrony środowiska.",
      "wiki": [
        {
          "heading": "Działalność, klasyfikacja i obowiązki wobec gości",
          "body": "Prowadzenie obiektu hotelarskiego rozpoczyna się od rejestracji działalności gospodarczej (np. jednoosobowa działalność lub spółka) oraz wpisu obiektu do właściwej ewidencji obiektów noclegowych, jeśli spełnia on określone kryteria. Hotelarz musi przestrzegać wymagań klasyfikacyjnych przewidzianych dla hoteli, moteli i pensjonatów. Wobec gości ciążą na nim obowiązki zapewnienia bezpieczeństwa i odpowiedniego standardu usług, przestrzegania praw konsumenta (w tym dotyczących reklamacji), ochrony danych osobowych zgodnie z RODO oraz pobierania opłat zgodnie z cennikiem wraz z wystawianiem rachunków i faktur.",
          "bullets": [
            "Rejestracja działalności i wpis do ewidencji obiektów noclegowych",
            "Przestrzeganie wymagań klasyfikacyjnych (hotele, motele, pensjonaty)",
            "Prawa konsumenta i procedury reklamacyjne",
            "Ochrona danych osobowych gości (RODO)",
            "Pobieranie opłat wg cennika oraz rachunki/faktury"
          ]
        },
        {
          "heading": "Wymogi sanitarne i przeciwpożarowe",
          "body": "Hotelarz odpowiada za utrzymanie czystości i higieny zgodnie z przepisami sanitarnymi, co jest szczególnie istotne w części gastronomicznej i pokojowej obiektu. Musi też spełniać wymogi bezpieczeństwa przeciwpożarowego, takie jak wyposażenie w gaśnice oraz oznakowanie dróg ewakuacyjnych.",
          "bullets": [
            "Czystość i higiena zgodnie z przepisami sanitarnymi",
            "Wyposażenie ppoż.: gaśnice, oznakowanie dróg ewakuacyjnych"
          ]
        },
        {
          "heading": "Obowiązki podatkowe, pracownicze i środowiskowe",
          "body": "W sferze finansowej hotelarz płaci podatki (VAT, CIT lub PIT zależnie od formy firmy, podatek od nieruchomości), prowadzi księgowość zgodnie z przepisami, a w gminach, które ją wprowadziły, pobiera od gości opłatę miejscową lub klimatyczną. Wobec pracowników zobowiązany jest przestrzegać prawa pracy (umowy, wynagrodzenia, czas pracy) oraz zapewnić bezpieczne i higieniczne warunki pracy (BHP). W zakresie ochrony środowiska prowadzi gospodarkę odpadami (segregacja, utylizacja), a realizując politykę ekologiczną ogranicza zużycie wody i energii.",
          "bullets": [
            "Podatki: VAT, CIT/PIT, podatek od nieruchomości; prowadzenie księgowości",
            "Opłata miejscowa lub klimatyczna – tylko jeśli obowiązuje w danej gminie",
            "Prawo pracy oraz BHP wobec pracowników",
            "Gospodarka odpadami i ograniczanie zużycia wody i energii"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Do której grupy obowiązków hotelarza zalicza się pobieranie od gości opłaty miejscowej (klimatycznej)?",
          "options": [
            "Obowiązki sanitarne i przeciwpożarowe",
            "Obowiązki podatkowe i finansowe",
            "Obowiązki wobec pracowników",
            "Obowiązki w zakresie ochrony środowiska"
          ],
          "correct": 1,
          "explain": "Opłata miejscowa lub klimatyczna należy do obowiązków podatkowo-finansowych obiektu hotelarskiego."
        },
        {
          "type": "abcd",
          "q": "Ochrona danych osobowych gości zgodnie z RODO mieści się w obowiązkach hotelarza:",
          "options": [
            "wobec gości",
            "sanitarnych",
            "podatkowych",
            "środowiskowych"
          ],
          "correct": 0,
          "explain": "RODO chroni dane osobowe gości, więc jest to obowiązek wobec gości obiektu."
        },
        {
          "type": "tf",
          "q": "Opłatę miejscową (klimatyczną) hotelarz pobiera od gości obowiązkowo we wszystkich gminach w Polsce.",
          "correct": false,
          "explain": "Opłatę miejscową lub klimatyczną pobiera się tylko wtedy, gdy obowiązuje ona w danej gminie."
        },
        {
          "type": "flash",
          "front": "Jakie dwa przykładowe wymogi obejmują przeciwpożarowe obowiązki hotelarza?",
          "back": "Wyposażenie obiektu w gaśnice oraz czytelne oznakowanie dróg (ewakuacyjnych)."
        }
      ]
    },
    {
      "id": "hot-klasyfikacja-zakladow-gastronomicznych",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 12,
      "title": "Klasyfikacja zakładów gastronomicznych",
      "summary": "Zakłady gastronomiczne klasyfikuje się według kryteriów GUS (restauracje, bary, stołówki, punkty gastronomiczne), według kryteriów operacyjnych (dostępność i czas działania) oraz według Polskiej Klasyfikacji Działalności (PKD).",
      "wiki": [
        {
          "heading": "Klasyfikacja według GUS",
          "body": "Główny Urząd Statystyczny wyróżnia cztery podstawowe rodzaje obiektów gastronomicznych, definiowane na podstawie zakresu świadczonych usług oraz oferowanego asortymentu.",
          "bullets": [
            "Restauracje – lokale ogólnodostępne z pełną obsługą kelnerską i szerokim asortymentem potraw i napojów serwowanych z karty (menu).",
            "Bary – charakter zbliżony do restauracji, lecz ograniczony asortyment i tzw. towary popularne; należą tu m.in. jadłodajnie, bary uniwersalne, fast food, przekąskowe, mleczne, bistra, kawiarnie, herbaciarnie, winiarnie, piwiarnie (puby).",
            "Stołówki – zakłady żywienia zbiorowego zapewniające regularne posiłki ściśle określonym grupom konsumentów w instytucjach (szkoły, szpitale, zakłady pracy).",
            "Punkty gastronomiczne – ograniczona działalność: smażalnie, pijalnie, lodziarnie, punkty z goframi, bufety (np. w kinach lub na stadionach)."
          ]
        },
        {
          "heading": "Kryteria operacyjne",
          "body": "Placówki gastronomiczne, zarówno stałe, jak i ruchome, dzieli się dodatkowo pod kątem dostępności dla klienta oraz czasu trwania działalności.",
          "bullets": [
            "Dostępność: otwarte – dla wszystkich klientów (restauracja, bar, kawiarnia); zamknięte – tylko dla określonych grup (stołówka szkolna dla uczniów, kuchnia szpitalna dla pacjentów).",
            "Czas działania: stałe – funkcjonujące przez cały rok kalendarzowy; sezonowe – uruchamiane okresowo, działające nie dłużej niż sześć miesięcy w roku (np. smażalnia nad morzem, punkt z goframi)."
          ]
        },
        {
          "heading": "Klasyfikacja według PKD",
          "body": "Gastronomia należy do Sekcji I „Zakwaterowanie i wyżywienie” Polskiej Klasyfikacji Działalności i dzieli się na kategorie według formy świadczenia usług.",
          "bullets": [
            "56.10.A – restauracje i inne stałe placówki gastronomiczne (kawiarnie, fast foody, bary mleczne, lodziarnie, pizzerie, cukiernie), w tym gastronomia w środkach transportu (wagony restauracyjne i barowe).",
            "56.10.B – ruchome placówki gastronomiczne: food trucki, przyczepy i wózki, obwoźni sprzedawcy lodów, sprzedaż na straganach.",
            "56.21.Z – catering na określone uroczystości (wesela, bankiety); 56.29.Z – pozostała działalność (catering kontraktowy lotniczy/kolejowy, prowadzenie stołówek i kawiarni w instytucjach).",
            "56.30.Z – przygotowanie i podawanie napojów: bary, puby, tawerny, koktajlbary, dyskoteki, piwiarnie, pijalnie soków."
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Które cztery rodzaje zakładów gastronomicznych wyróżnia klasyfikacja GUS?",
          "options": [
            "Restauracje, bary, stołówki, punkty gastronomiczne",
            "Restauracje, hotele, motele, schroniska",
            "Bary, puby, dyskoteki, koktajlbary",
            "Catering, stołówki, food trucki, bufety"
          ],
          "correct": 0,
          "explain": "GUS dzieli obiekty gastronomiczne na cztery podstawowe rodzaje: restauracje, bary, stołówki i punkty gastronomiczne."
        },
        {
          "type": "abcd",
          "q": "Pod którym kodem PKD klasyfikuje się ruchome placówki gastronomiczne, takie jak food trucki i wózki gastronomiczne?",
          "options": [
            "56.10.A",
            "56.10.B",
            "56.21.Z",
            "56.30.Z"
          ],
          "correct": 1,
          "explain": "Kod 56.10.B obejmuje gastronomię mobilną – food trucki, przyczepy i wózki gastronomiczne oraz obwoźnych sprzedawców."
        },
        {
          "type": "tf",
          "q": "Sezonowy zakład gastronomiczny to taki, który działa nie dłużej niż sześć miesięcy w roku kalendarzowym.",
          "correct": true,
          "explain": "Według kryterium czasu działania placówka sezonowa funkcjonuje okresowo, nie dłużej niż sześć miesięcy w roku."
        },
        {
          "type": "flash",
          "front": "Czym różni się zakład gastronomiczny otwarty od zamkniętego?",
          "back": "Otwarty jest dostępny dla wszystkich klientów (np. restauracja, kawiarnia), a zamknięty obsługuje tylko określone grupy (np. stołówka szkolna dla uczniów, kuchnia szpitalna dla pacjentów)."
        }
      ]
    },
    {
      "id": "hot-dobor-win-do-dan",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 13,
      "title": "Optymalny dobór win w zależności od typu dań",
      "summary": "Dobór wina do potraw (food pairing) opiera się na zasadach harmonii i kontrastu oraz na dopasowaniu rodzaju wina (białe, czerwone, różowe, musujące, słodkie) do charakteru, intensywności i temperatury podania dania.",
      "wiki": [
        {
          "heading": "Dwie filozofie food pairingu",
          "body": "Dobór wina do potraw opiera się na dwóch głównych podejściach. Harmonia oznacza, że smaki wina i potrawy uzupełniają się i mają podobny „ciężar”. Kontrast polega na zestawieniu smaków przeciwstawnych, które balansują się nawzajem – np. wysoka kwasowość wina przełamuje tłuszcz w daniu. Nadrzędną regułą pozostaje dopasowanie intensywności wina do intensywności potrawy.",
          "bullets": [
            "Harmonia – podobny ciężar i charakter smaków",
            "Kontrast – kwasowość wina przełamuje tłuszcz potrawy",
            "Intensywność wina dobiera się do intensywności dania"
          ]
        },
        {
          "heading": "Rodzaje win i ich potrawy",
          "body": "Każdy typ wina pasuje do innej kategorii dań, co wiąże się z jego ciężarem, kwasowością i obecnością tanin.",
          "bullets": [
            "Białe (podawane schłodzone 8–12°C) – ryby, owoce morza, drób, dania wegańskie, sałatki, sery miękkie, białe sosy",
            "Czerwone (lekko schłodzone lub w temperaturze pokojowej, taniny ze skórek) – czerwone mięsa, wołowina, dziczyzna, grill, makarony z sosem pomidorowym, dojrzałe twarde sery",
            "Różowe (dobrze schłodzone, smak pośredni) – sałatki, grillowane warzywa, makaron z pesto, drób, łosoś, pizza, kuchnia śródziemnomorska",
            "Musujące/wytrawne białe jako aperitif – bąbelki i kwasowość „czyszczą” podniebienie",
            "Słodkie do deserów – wino powinno być słodsze niż deser, by nie smakowało gorzko"
          ]
        },
        {
          "heading": "Trzy złote zasady sommeliera",
          "body": "Praktyczne reguły porządkujące dobór wina.",
          "bullets": [
            "Parowanie regionalne – „co rośnie razem, pasuje do siebie” (np. włoski makaron z sosem pomidorowym i Chianti)",
            "Dopasuj do sosu, nie do mięsa – decyduje najcięższy element dania (np. ciężki sos z gorgonzoli)",
            "Unikaj konfliktów – potrawy bardzo kwaśne (ocet) lub ekstremalnie słone niszczą smak win i potęgują gorycz"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "W jakiej temperaturze podaje się wino białe, aby w pełni wydobyć jego smak i aromat?",
          "options": [
            "18–22°C (temperatura pokojowa)",
            "8–12°C (schłodzone)",
            "0–4°C (mocno zmrożone)",
            "14–16°C (lekko schłodzone)"
          ],
          "correct": 1,
          "explain": "Białe wino jest lżejsze i świeższe, dlatego podaje się je schłodzone do 8–12°C."
        },
        {
          "type": "abcd",
          "q": "Według zasady sommeliera, jeśli podajesz pierś z kurczaka w ciężkim sosie z gorgonzoli, do czego dobierasz wino?",
          "options": [
            "Do delikatnego drobiu – lekkie białe",
            "Do koloru talerza",
            "Do ciężkiego sosu – ciężkie białe lub lekkie czerwone",
            "Zawsze do czerwonego mięsa"
          ],
          "correct": 2,
          "explain": "Zasada „dopasuj do sosu, nie do mięsa” nakazuje dobierać wino do najcięższego elementu dania, czyli sosu."
        },
        {
          "type": "tf",
          "q": "Do deserów dobiera się wino, które powinno być słodsze niż sam deser, aby nie smakowało gorzko.",
          "correct": true,
          "explain": "Gdy wino jest mniej słodkie niż deser, wydaje się kwaśne lub gorzkie, dlatego do słodkich potraw podaje się jeszcze słodsze wina."
        },
        {
          "type": "flash",
          "front": "Dlaczego wina musujące (np. Szampan, Cava) i wytrawne białe sprawdzają się jako aperitif?",
          "back": "Ich wysoka kwasowość i bąbelki „czyszczą” podniebienie i pobudzają apetyt przed daniem głównym."
        }
      ]
    },
    {
      "id": "hot-rodzaje-sniadan-hotelowych",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 14,
      "title": "Rodzaje śniadań hotelowych i ich menu",
      "summary": "Charakterystyka głównych typów śniadań serwowanych w hotelach – kontynentalnego, wiedeńskiego, angielskiego i amerykańskiego – wraz z typowym składem ich menu.",
      "wiki": [
        {
          "heading": "Śniadanie kontynentalne i wiedeńskie",
          "body": "Śniadanie kontynentalne, zwane też prostym lub francuskim, wywodzi się z południa Europy. Jest lekkie, nieskomplikowane i zaprojektowane tak, by można je było szybko podać i zjeść. Stanowi bazę, na której opierają się inne, bogatsze zestawy. Śniadanie wiedeńskie rozbudowuje tę bazę o elegancko podane jajka po wiedeńsku, a w wersji wzmocnionej (okolicznościowej) także o półmisek wędlin i serów.",
          "bullets": [
            "Kontynentalne: gorące napoje (kawa, herbata, kakao), sok owocowy, pieczywo (croissanty, bagietka, tosty), masło, dżem, miód, marmolada",
            "Wiedeńskie: baza kontynentalna + jajka po wiedeńsku (dwa jajka na miękko, bez skorupek, w szklance z masłem) i kawa z mlekiem (Melange)",
            "Wiedeńskie wzmocnione: baza wiedeńska + półmisek wędlin i serów"
          ]
        },
        {
          "heading": "Śniadanie angielskie i amerykańskie",
          "body": "Śniadanie angielskie (breakfast) jest przeciwieństwem kontynentalnego – bardzo sycące, ciężkie i wysokokaloryczne, oparte na potrawach smażonych i pieczonych. Śniadanie amerykańskie, popularne w hotelach wyższej kategorii, łączy elementy angielskiego z tradycyjnymi słodkimi elementami kuchni amerykańskiej; jego wyznacznikiem jest szeroki wybór potraw z jajek przygotowywanych na życzenie gościa.",
          "bullets": [
            "Angielskie: jajka sadzone lub jajecznica, chrupiący bekon, kiełbaski (sausages), czasem black pudding, smażone pieczarki, grillowane pomidory, baked beans, tosty, mocna herbata",
            "Amerykańskie: jajka na życzenie (sadzone, jajecznica, omlet), bekon, parówki, hash browns, ciepłe naleśniki (pancakes) lub gofry z syropem klonowym, kawa przelewowa"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Który element jest obowiązkową, słodką wizytówką śniadania amerykańskiego?",
          "options": [
            "Black pudding (kaszanka)",
            "Naleśniki lub gofry z syropem klonowym",
            "Jajka po wiedeńsku w szklance",
            "Półmisek wędlin i serów"
          ],
          "correct": 1,
          "explain": "Wizytówką zestawu amerykańskiego są ciepłe naleśniki (pancakes) lub gofry podawane obowiązkowo z syropem klonowym."
        },
        {
          "type": "abcd",
          "q": "Co charakteryzuje sposób podania jajek w śniadaniu wiedeńskim?",
          "options": [
            "Dwa jajka na miękko, bez skorupek, w szklance z masłem",
            "Jajka sadzone smażone na bekonie",
            "Omlet z serem i warzywami na życzenie",
            "Jajecznica z kiełbaskami i baked beans"
          ],
          "correct": 0,
          "explain": "Jajka po wiedeńsku to dwa jajka ugotowane na miękko, podane bez skorupek w szklance z odrobiną masła."
        },
        {
          "type": "tf",
          "q": "Śniadanie kontynentalne jest również nazywane śniadaniem prostym lub francuskim i jest lekkie oraz nieskomplikowane.",
          "correct": true,
          "explain": "Kontynentalne, zwane prostym lub francuskim, wywodzi się z południa Europy i jest celowo lekkie, by szybko je podać i zjeść."
        },
        {
          "type": "flash",
          "front": "Jakie składniki wyróżniają tradycyjne śniadanie angielskie?",
          "back": "Chrupiący bekon, kiełbaski (sausages), czasem black pudding, jajka sadzone lub jajecznica, smażone pieczarki, grillowane pomidory, baked beans, tosty i mocna czarna herbata."
        }
      ]
    },
    {
      "id": "hot-haccp",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 15,
      "title": "System HACCP w gastronomii hotelowej",
      "summary": "HACCP to system zapewniania bezpieczeństwa żywności oparty na identyfikacji i kontrolowaniu zagrożeń biologicznych, chemicznych i fizycznych w krytycznych punktach procesu produkcji potraw.",
      "wiki": [
        {
          "heading": "Czym jest HACCP",
          "body": "HACCP (Hazard Analysis and Critical Control Points – Analiza Zagrożeń i Krytycznych Punktów Kontroli) to system zapewniania bezpieczeństwa żywności. Polega on na identyfikowaniu zagrożeń na każdym etapie produkcji oraz kontrolowaniu ich w kluczowych momentach, aby zapobiec zagrożeniom dla zdrowia konsumenta. Analizowane są trzy rodzaje zagrożeń:",
          "bullets": [
            "biologiczne – bakterie, wirusy, pleśnie",
            "chemiczne – np. resztki pestycydów, środki czystości",
            "fizyczne – kawałki szkła, metalu i inne ciała obce"
          ]
        },
        {
          "heading": "Siedem elementów (zasad) systemu",
          "bullets": [
            "Identyfikacja zagrożeń – ustalenie, co może zagrozić bezpieczeństwu żywności",
            "Wyznaczenie Krytycznych Punktów Kontroli (CCP), w których można zapobiec zagrożeniu lub je zminimalizować (np. temperatura gotowania, chłodzenia)",
            "Ustalenie limitów krytycznych – granic bezpieczeństwa, np. gotowanie mięsa do min. 75°C",
            "Monitorowanie CCP – regularny pomiar temperatury, wilgotności, kontrola opakowań",
            "Działania naprawcze – szybka reakcja, gdy limit zostaje przekroczony (np. wycofanie lub ponowna obróbka produktu)",
            "Weryfikacja systemu – okresowe testy, kontrole i audyty potwierdzające skuteczność",
            "Dokumentacja i rejestracja danych – zapisy co, kiedy i kto sprawdzał oraz jakie działania podjęto"
          ]
        },
        {
          "heading": "Warunki wstępne wdrożenia",
          "body": "Zanim firma wdroży HACCP, musi spełnić tzw. programy wstępne, które tworzą bazę higieniczną dla całego systemu.",
          "bullets": [
            "Dobra Praktyka Higieniczna (GHP) – czystość sprzętu i pomieszczeń, higiena pracowników, właściwe przechowywanie żywności",
            "Dobra Praktyka Produkcyjna (GMP) – kontrola jakości surowców, bezpieczne procesy, ochrona przed zanieczyszczeniami",
            "Dobra Praktyka Dystrybucyjna – prawidłowy transport i magazynowanie, kontrola temperatury w lodówkach i zamrażarkach",
            "Szkolenia pracowników z zasad HACCP, higieny i bezpieczeństwa żywności",
            "Dokumentacja wszystkich etapów związanych z jakością i bezpieczeństwem"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Czym jest Krytyczny Punkt Kontroli (CCP) w systemie HACCP?",
          "options": [
            "Pomieszczenie magazynowe o kontrolowanej wilgotności",
            "Stanowisko, na którym pracownik myje ręce",
            "Etap procesu, w którym można zapobiec zagrożeniu lub je zminimalizować",
            "Dokument rejestrujący temperaturę w lodówce"
          ],
          "correct": 2,
          "explain": "CCP to miejsce lub etap (np. gotowanie, chłodzenie), w którym kontrola pozwala zapobiec zagrożeniu lub je zredukować."
        },
        {
          "type": "abcd",
          "q": "Który z poniższych jest przykładem limitu krytycznego w HACCP?",
          "options": [
            "Przeszkolenie pracowników z zasad higieny",
            "Gotowanie mięsa do temperatury minimum 75°C",
            "Prowadzenie dokumentacji monitorowania CCP",
            "Audyt skuteczności systemu raz w roku"
          ],
          "correct": 1,
          "explain": "Limit krytyczny to mierzalna granica bezpieczeństwa, jak wymagana minimalna temperatura obróbki termicznej mięsa."
        },
        {
          "type": "tf",
          "q": "Wdrożenie systemu HACCP wymaga wcześniejszego spełnienia programów wstępnych, takich jak Dobra Praktyka Higieniczna (GHP) i Dobra Praktyka Produkcyjna (GMP).",
          "correct": true,
          "explain": "GHP i GMP są warunkami wstępnymi, które tworzą bazę higieniczno-produkcyjną konieczną do działania HACCP."
        },
        {
          "type": "flash",
          "front": "Jakie trzy rodzaje zagrożeń żywności analizuje się w systemie HACCP?",
          "back": "Zagrożenia biologiczne (bakterie, wirusy, pleśnie), chemiczne (np. pestycydy) oraz fizyczne (np. szkło, metal)."
        }
      ]
    },
    {
      "id": "hot-uzdrowiska",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 16,
      "title": "Ważniejsze uzdrowiska w Polsce",
      "summary": "Przegląd najważniejszych polskich uzdrowisk, ich naturalnych surowców leczniczych oraz profili leczniczych, od solankowego Ciechocinka po nadmorski Kołobrzeg.",
      "wiki": [
        {
          "heading": "Czym jest uzdrowisko",
          "body": "Uzdrowiska to miejscowości, w których leczy się różne schorzenia z wykorzystaniem naturalnych zasobów leczniczych: wód mineralnych, borowiny, gazu leczniczego oraz korzystnego klimatu. Ze względu na położenie geograficzne dzieli się je na uzdrowiska nizinne, nadmorskie, podgórskie i górskie. W Polsce funkcjonuje 45 gmin uzdrowiskowych.",
          "bullets": [
            "Surowce lecznicze: wody mineralne, borowina (peloid), gaz leczniczy, korzystny mikroklimat",
            "Typy położenia: nizinne, nadmorskie, podgórskie, górskie",
            "Standardowe formy lecznictwa: kąpiele mineralne i solankowe, okłady borowinowe, kuracja pitna (pijalnie wód)"
          ]
        },
        {
          "heading": "Najważniejsze uzdrowiska – przegląd",
          "bullets": [
            "Ciechocinek (kujawsko-pomorskie, nad Wisłą) – słynie z tężni solankowych tworzących leczniczy mikroklimat bogaty w jod; leczy choroby układu oddechowego, reumatyczne i krążenia",
            "Krynica-Zdrój (małopolskie, Beskid Sądecki) – „perła polskich uzdrowisk”, znana z wód mineralnych (Zuber, Jan); leczy choroby układu pokarmowego, moczowego i metabolicznego (cukrzyca)",
            "Busko-Zdrój (świętokrzyskie) – wody siarczkowe, jedne z najsilniejszych w Europie; leczy choroby reumatyczne, neurologiczne i skóry (łuszczyca)",
            "Kołobrzeg (zachodniopomorskie, nadmorskie) – klimat bogaty w jod, solanki i borowina; leczy choroby układu oddechowego, reumatyczne i serca",
            "Nałęczów (lubelskie) – specjalizuje się w leczeniu chorób serca i układu krążenia, a także nerwic i stresu",
            "Szczawnica (małopolskie, Pieniny) – unikalny mikroklimat; leczy astmę, alergie, choroby płuc i układu trawiennego (atrakcja: spływ Dunajcem)",
            "Polanica-Zdrój (dolnośląskie) – główne uzdrowisko „Trójmiasta Kłodzkiego”; leczy choroby serca, układu pokarmowego i oddechowego"
          ]
        },
        {
          "heading": "Surowce a profile lecznicze",
          "body": "Profil leczniczy uzdrowiska wynika z dostępnego surowca: tężnie i solanki (Ciechocinek, Kołobrzeg) wspomagają układ oddechowy i rehabilitację, wody siarczkowe (Busko-Zdrój) działają na schorzenia reumatyczne i skórne, a wody mineralne pitne (Krynica-Zdrój) wspierają układ pokarmowy i przemianę materii. Uzdrowiskom towarzyszy infrastruktura zdrojowa: parki zdrojowe, pijalnie wód oraz obiekty sanatoryjne i kulturalne (np. Festiwal im. Jana Kiepury w Krynicy)."
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Które polskie uzdrowisko słynie z tężni solankowych tworzących leczniczy mikroklimat bogaty w jod?",
          "options": [
            "Krynica-Zdrój",
            "Nałęczów",
            "Ciechocinek",
            "Szczawnica"
          ],
          "correct": 2,
          "explain": "Ciechocinek nad Wisłą znany jest z wysokich drewnianych tężni, po których spływa solanka."
        },
        {
          "type": "abcd",
          "q": "Które uzdrowisko nazywane jest „perłą polskich uzdrowisk” i słynie z wód mineralnych Zuber i Jan?",
          "options": [
            "Polanica-Zdrój",
            "Kołobrzeg",
            "Busko-Zdrój",
            "Krynica-Zdrój"
          ],
          "correct": 3,
          "explain": "Krynica-Zdrój w Beskidzie Sądeckim słynie z silnie leczniczych wód mineralnych, m.in. Zubera i Jana."
        },
        {
          "type": "tf",
          "q": "Busko-Zdrój to uzdrowisko nadmorskie położone nad Morzem Bałtyckim.",
          "correct": false,
          "explain": "Busko-Zdrój leży w woj. świętokrzyskim i słynie z wód siarczkowych, a typowym uzdrowiskiem nadmorskim jest Kołobrzeg."
        },
        {
          "type": "flash",
          "front": "W leczeniu jakich schorzeń specjalizuje się uzdrowisko Nałęczów?",
          "back": "W leczeniu chorób serca i układu krążenia, a także nerwic i stresu."
        }
      ]
    },
    {
      "id": "hot-przyjecie-koktajlowe",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 17,
      "title": "Zasady przyjęcia koktajlowego",
      "summary": "Przyjęcie koktajlowe to elegancka, nieformalna forma spotkania \"na stojąco\", służąca integracji i networkingowi przy lekkich, zimnych przekąskach i drinkach, rządząca się własnymi zasadami stroju, menu i etykiety.",
      "wiki": [
        {
          "heading": "Charakter i cel przyjęcia",
          "body": "Przyjęcie koktajlowe (cocktail party) to elegancka, lecz nieformalna forma spotkania towarzyskiego lub biznesowego. Odbywa się zazwyczaj między godziną 17:00 a 20:00 i trwa od 2 do 4 godzin. Jest mniej zobowiązujące niż bal czy bankiet - obowiązuje tu stylowa, ale niezobowiązująca elegancja.",
          "bullets": [
            "Cel: integracja gości i networking (nawiązywanie kontaktów)",
            "Swobodna atmosfera przy lekkich przekąskach i drinkach",
            "Okazje: rocznica firmy, premiera produktu, otwarcie wystawy, spotkanie branżowe, zaręczyny czy eleganckie urodziny"
          ]
        },
        {
          "heading": "Styl \"na stojąco\" i menu",
          "body": "Cechą charakterystyczną jest brak miejsc siedzących - goście swobodnie poruszają się po sali i zmieniają grupy rozmówców. Ustawia się wysokie stoliki koktajlowe (cocktail tables) do odkładania kieliszków i przekąsek, a kelnerzy serwują napoje oraz przekąski. Nie podaje się pełnych dań gorących.",
          "bullets": [
            "Wyłącznie dania zimne oraz drobne przekąski jedzone bez sztućców (finger food, mini kanapki, tartinki, krewetki, mini tarty, sery, owoce)",
            "Słodkości bez rozpływających się kremów (krojony sernik, babka, ciasteczka)",
            "Napoje: koktajle alkoholowe i bezalkoholowe (Martini, Mojito, Whisky sour), wina, szampan, prosecco oraz soki i woda"
          ]
        },
        {
          "heading": "Zachowanie i etykieta",
          "body": "Gospodarze witają gości przy wejściu, a uścisk dłoni jest wystarczający. Na początku nie wypada od razu rozmawiać o biznesie. Należy swobodnie przechodzić między grupami i nie spędzać całego wieczoru z jedną osobą.",
          "bullets": [
            "Tematy lekkie (hobby, podróże, kultura); unikać polityki, religii i kontrowersji",
            "Kieliszek trzymamy w lewej ręce, by prawa pozostała wolna do uścisku dłoni",
            "Jeść i pić z umiarem; nie napełniać talerza jak na weselu",
            "Pożegnać się z gospodarzem, dziękując za zaproszenie; nie zabierać jedzenia na wynos i nie wychodzić nagle"
          ]
        },
        {
          "heading": "Strój (dress code)",
          "body": "Obowiązuje strój elegancki, ale nie przesadnie formalny. Kobiety zakładają sukienkę koktajlową (do kolan lub nieco powyżej) albo elegancki garnitur damski z delikatną biżuterią i szpilkami. Mężczyźni - garnitur (często bez krawata) lub elegancką marynarkę z koszulą, spodnie materiałowe lub chinosy oraz półbuty; jeansy nie są odpowiednie."
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "W jakich godzinach najczęściej odbywa się przyjęcie koktajlowe?",
          "options": [
            "Między 17:00 a 20:00",
            "Między 8:00 a 11:00",
            "Między 12:00 a 14:00",
            "Po godzinie 23:00"
          ],
          "correct": 0,
          "explain": "Przyjęcie koktajlowe odbywa się zazwyczaj między 17:00 a 20:00 i trwa od 2 do 4 godzin."
        },
        {
          "type": "abcd",
          "q": "Które danie NIE pasuje do menu przyjęcia koktajlowego?",
          "options": [
            "Mini kanapki i tartinki",
            "Pełny gorący obiad z zupą",
            "Krewetki i mini tarty",
            "Sery, owoce i finger food"
          ],
          "correct": 1,
          "explain": "Na przyjęciu koktajlowym nie serwuje się pełnych dań gorących - tylko dania zimne i drobne przekąski jedzone bez sztućców."
        },
        {
          "type": "tf",
          "q": "Na przyjęciu koktajlowym kieliszek należy trzymać w lewej ręce, aby prawa pozostała wolna do uścisku dłoni.",
          "correct": true,
          "explain": "Trzymanie kieliszka w lewej dłoni pozwala zachować prawą rękę wolną i suchą do powitań."
        },
        {
          "type": "flash",
          "front": "Co jest cechą charakterystyczną stylu przyjęcia koktajlowego?",
          "back": "Forma \"na stojąco\" - brak miejsc siedzących; goście swobodnie poruszają się po sali, a do odkładania kieliszków służą wysokie stoliki koktajlowe."
        }
      ]
    },
    {
      "id": "hot-produkt-agroturystyczny",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 18,
      "title": "Składniki i poziomy produktu agroturystycznego",
      "summary": "Produkt agroturystyczny to kompleksowa oferta pobytu na wsi, na którą składa się pięć grup elementów i którą analizuje się w czterech poziomach: podstawowym, rzeczywistym, poszerzonym i potencjalnym.",
      "wiki": [
        {
          "heading": "Czym jest produkt agroturystyczny",
          "body": "Produkt agroturystyczny to kompleksowa oferta turystyczna związana z pobytem na wsi i korzystaniem z jej zasobów przyrodniczych, kulturowych i rolniczych. To nie tylko zakwaterowanie i wyżywienie, ale całe doświadczenie życia wiejskiego: tradycja, kontakt z naturą i aktywność na świeżym powietrzu. Obejmuje wszystko, co gospodarstwo oferuje, aby zaspokoić potrzeby turysty w zakresie noclegu, jedzenia, wypoczynku oraz kontaktu z naturą i kulturą."
        },
        {
          "heading": "Składniki produktu agroturystycznego",
          "bullets": [
            "Zakwaterowanie – pokoje gościnne, domki drewniane, apartamenty w stodole, pole namiotowe",
            "Wyżywienie – domowe posiłki przygotowane z lokalnych produktów",
            "Usługi dodatkowe – przejażdżki konne, ognisko, warsztaty, wędkarstwo, Wi-Fi",
            "Otoczenie i środowisko – wieś, gospodarstwo, przyroda, spokój",
            "Kultura lokalna – obyczaje, rękodzieło, kuchnia regionalna, święta ludowe"
          ]
        },
        {
          "heading": "Cztery poziomy produktu",
          "body": "Produkt agroturystyczny analizuje się w czterech warstwach. Produkt podstawowy (rdzeń) to korzyść główna i motyw przyjazdu – kontakt z naturą, oderwanie od miejskiego zgiełku, poznanie życia na wsi, zdrowie i regeneracja. Produkt rzeczywisty to konkretne usługi i atrakcje, jakie turysta faktycznie otrzymuje: standard pokoi, domowe wyżywienie, jazda konna, kontakt z gospodarzami, infrastruktura rekreacyjna oraz udział w pracach gospodarskich. Produkt poszerzony to dodatki zwiększające wartość oferty – unikalne doświadczenia (nocleg w stodole, udział w dożynkach), wellness i relaks (sauna, kąpiele borowinowe, ziołolecznictwo), edukacja i ekologia (certyfikaty BIO, warsztaty) oraz pakiety tematyczne dla rodzin, seniorów i firm. Produkt potencjalny to możliwe przyszłe ulepszenia i innowacje, np. aplikacje z planem atrakcji dla dzieci czy personalizowane pakiety rodzinne."
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Do którego poziomu produktu agroturystycznego należy „korzyść główna”, czyli motyw przyjazdu turysty, np. kontakt z naturą?",
          "options": [
            "Produkt podstawowy",
            "Produkt rzeczywisty",
            "Produkt poszerzony",
            "Produkt potencjalny"
          ],
          "correct": 0,
          "explain": "Produkt podstawowy to rdzeń oferty – korzyść główna i motywacja przyjazdu, jak kontakt z naturą czy oderwanie od miasta."
        },
        {
          "type": "abcd",
          "q": "Nocleg w stodole, kąpiele borowinowe oraz udział w dożynkach to przykłady elementów którego poziomu produktu?",
          "options": [
            "Produktu podstawowego",
            "Produktu rzeczywistego",
            "Produktu poszerzonego",
            "Produktu potencjalnego"
          ],
          "correct": 2,
          "explain": "Produkt poszerzony obejmuje dodatki zwiększające wartość: unikalne doświadczenia, wellness, edukację i pakiety tematyczne."
        },
        {
          "type": "tf",
          "q": "„Kultura lokalna” – obyczaje, rękodzieło, kuchnia regionalna i święta ludowe – jest jednym ze składników produktu agroturystycznego.",
          "correct": true,
          "explain": "Kultura lokalna to jeden z pięciu składników obok zakwaterowania, wyżywienia, usług dodatkowych oraz otoczenia i środowiska."
        },
        {
          "type": "flash",
          "front": "Co obejmuje produkt potencjalny w modelu poziomów produktu agroturystycznego?",
          "back": "Możliwe przyszłe ulepszenia i innowacje, np. aplikacje z planem atrakcji dla dzieci czy personalizowane pakiety rodzinne."
        }
      ]
    },
    {
      "id": "hot-turystyka-zdrowotna-uzdrowiskowa",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 19,
      "title": "Turystyka zdrowotna a turystyka uzdrowiskowa",
      "summary": "Turystyka zdrowotna to szerokie pojęcie obejmujące wszystkie podróże związane z leczeniem, profilaktyką i regeneracją, a turystyka uzdrowiskowa jest jej podkategorią opartą na leczeniu naturalnymi surowcami leczniczymi.",
      "wiki": [
        {
          "heading": "Turystyka zdrowotna – pojęcie szerokie",
          "body": "Turystyka zdrowotna to świadome i dobrowolne udanie się poza miejsce zamieszkania w czasie wolnym od pracy w celu regeneracji ustroju dzięki aktywnemu wypoczynkowi fizycznemu i psychicznemu. Jest to szerokie pojęcie obejmujące wszystkie podróże związane z leczeniem, profilaktyką zdrowotną i rehabilitacją oraz poprawą kondycji fizycznej i psychicznej. Może dotyczyć zarówno wyjazdów do placówek medycznych (szpitale, kliniki, sanatoria), jak i ośrodków wellness & spa oraz uzdrowisk.",
          "bullets": [
            "Turystyka medyczna – leczenie specjalistyczne: operacje, diagnostyka, zabiegi estetyczne i ambulatoryjne, stomatologia, in vitro",
            "Turystyka wellness & spa – profilaktyka, relaks i regeneracja: zabiegi pielęgnacyjne, masaże, sauny, odnowa biologiczna",
            "Turystyka uzdrowiskowa – leczenie organizmu w oparciu o naturalne surowce lecznicze"
          ]
        },
        {
          "heading": "Turystyka uzdrowiskowa – podkategoria",
          "body": "Turystyka uzdrowiskowa to specyficzna forma (podkategoria) turystyki zdrowotnej. Koncentruje się na leczeniu i regeneracji organizmu w oparciu o naturalne surowce lecznicze, takie jak wody mineralne, borowiny czy mikroklimat. Podstawą są pobyty w uzdrowiskach i sanatoriach – miejscowościach posiadających status uzdrowiska – gdzie prowadzone są terapie wspomagające leczenie chorób przewlekłych układu oddechowego, krążenia, a także schorzeń reumatycznych, neurologicznych i metabolicznych.",
          "bullets": [
            "Kąpiele solankowe i siarczkowe – działanie przeciwzapalne, poprawa krążenia",
            "Borowina – działanie przeciwbólowe, poprawa kondycji skóry, schorzenia stawów",
            "Inhalacja solankowa – astma i schorzenia układu oddechowego"
          ]
        },
        {
          "heading": "Najważniejsze różnice",
          "bullets": [
            "Turystyka zdrowotna – szeroki zakres usług, pobyt zarówno krótki, jak i długoterminowy",
            "Turystyka uzdrowiskowa – nastawiona na leczenie chorób przewlekłych, pobyt kilkutygodniowy",
            "Uzdrowiskowa opiera się na naturalnych surowcach leczniczych, podczas gdy zdrowotna obejmuje też medycynę specjalistyczną i wellness"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Która forma turystyki zdrowotnej koncentruje się na leczeniu specjalistycznym, takim jak operacje, diagnostyka czy in vitro?",
          "options": [
            "Turystyka uzdrowiskowa",
            "Turystyka medyczna",
            "Turystyka wellness & spa",
            "Turystyka kwalifikowana"
          ],
          "correct": 1,
          "explain": "Turystyka medyczna obejmuje wyjazdy związane z leczeniem specjalistycznym, m.in. operacjami, diagnostyką, zabiegami estetycznymi i in vitro."
        },
        {
          "type": "abcd",
          "q": "Jaka relacja zachodzi między turystyką uzdrowiskową a turystyką zdrowotną?",
          "options": [
            "Są to pojęcia tożsame (synonimy)",
            "Turystyka zdrowotna jest podkategorią uzdrowiskowej",
            "Turystyka uzdrowiskowa jest podkategorią turystyki zdrowotnej",
            "Są to całkowicie odrębne i niepowiązane segmenty"
          ],
          "correct": 2,
          "explain": "Turystyka uzdrowiskowa to specyficzna forma (podkategoria) turystyki zdrowotnej, oparta na naturalnych surowcach leczniczych."
        },
        {
          "type": "tf",
          "q": "Borowina stosowana w lecznictwie uzdrowiskowym działa przeciwbólowo oraz wspomaga leczenie schorzeń stawów i poprawia kondycję skóry.",
          "correct": true,
          "explain": "Według źródła borowina ma działanie przeciwbólowe, poprawia kondycję skóry i wspomaga leczenie schorzeń stawów."
        },
        {
          "type": "flash",
          "front": "Na jakich naturalnych surowcach leczniczych opiera się turystyka uzdrowiskowa?",
          "back": "Na wodach mineralnych, borowinach i mikroklimacie (oraz solankach), wykorzystywanych m.in. w kąpielach solankowych, borowinowych i inhalacjach."
        }
      ]
    },
    {
      "id": "hot-finanse-rachunkowosc",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 20,
      "title": "Istota finansów i rachunkowości w obiektach hotelarsko-gastronomicznych",
      "summary": "Finanse zarządzają pieniędzmi obiektu, by zapewnić rentowność i płynność, a rachunkowość rejestruje i porządkuje operacje finansowe, dostarczając danych do świadomych decyzji biznesowych.",
      "wiki": [
        {
          "heading": "Finanse - zarządzanie pieniędzmi",
          "body": "Finanse to zarządzanie pieniędzmi w przedsiębiorstwie: planowanie, pozyskiwanie i wydawanie środków tak, aby obiekt był rentowny i utrzymywał płynność finansową (skąd wziąć pieniądze i jak je wykorzystać). Właściwe zarządzanie finansami umożliwia nie tylko rentowność, lecz także rozwój obiektu i jego konkurencyjność na rynku.",
          "bullets": [
            "Zarządzanie przychodami z noclegów, gastronomii, SPA i konferencji oraz optymalizacja cen wobec popytu, konkurencji i sezonowości (dynamiczne taryfy dla klientów indywidualnych i grupowych)",
            "Planowanie finansowe i budżetowe: prognozy obejmujące wydatki operacyjne (żywność, wynagrodzenia) i inwestycyjne (modernizacja pokoi)",
            "Kontrola kosztów stałych (czynsz, personel) i zmiennych (surowce, media)",
            "Utrzymanie płynności finansowej, by regulować zobowiązania nawet przy spadku obłożenia",
            "Decyzje o źródłach kapitału: kredyt, leasing, kapitał własny, inwestycje i modernizacje"
          ]
        },
        {
          "heading": "Wskaźniki finansowe branży",
          "bullets": [
            "RevPAR - przychód przypadający na dostępny pokój (niezależnie od tego, czy został sprzedany)",
            "ADR - średnia cena za pokój faktycznie wynajęty",
            "GOPPAR - zysk operacyjny na dostępny pokój, uwzględniający koszty (prąd, serwis, wynagrodzenia)",
            "Food Cost - udział kosztów żywności w przychodach gastronomii"
          ]
        },
        {
          "heading": "Rachunkowość - rejestracja operacji",
          "body": "Rachunkowość to system rejestrowania i analizowania wszystkich operacji finansowych zgodnie z przepisami; dzięki niej menedżerowie hotelu i restauracji podejmują świadome decyzje biznesowe.",
          "bullets": [
            "Ewidencja przychodów i kosztów: każda transakcja (sprzedaż usług, zakup surowców) jest księgowana",
            "Rozliczanie kosztów stałych i zmiennych oraz ich klasyfikacja",
            "Amortyzacja sprzętu, mebli i urządzeń rozkładająca koszt zakupu w czasie",
            "Sporządzanie sprawozdań finansowych: bilans oraz rachunek zysków i strat",
            "Podatki i regulacje: obliczanie VAT, deklaracje podatkowe, zgodność z przepisami"
          ]
        },
        {
          "heading": "Rachunkowość vs finanse",
          "body": "Rachunkowość zbiera, porządkuje i dostarcza dane: rejestruje wydatki i przychody, identyfikuje strukturę kosztów i monitoruje przepływy finansowe. Finanse te dane analizują - planują zarządzanie przychodami, kontrolują koszty, dbają o płynność i prognozują przyszłe zapotrzebowanie firmy na kapitał, aby osiągnąć jej cele."
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Co wyraża wskaźnik RevPAR stosowany w hotelarstwie?",
          "options": [
            "Średnią cenę za faktycznie wynajęty pokój",
            "Przychód przypadający na dostępny pokój",
            "Zysk operacyjny na dostępny pokój",
            "Udział kosztów żywności w przychodach"
          ],
          "correct": 1,
          "explain": "RevPAR to przychód na dostępny pokój, liczony niezależnie od tego, czy pokój został sprzedany."
        },
        {
          "type": "abcd",
          "q": "Czym jest wskaźnik Food Cost w gastronomii?",
          "options": [
            "Kosztem wyposażenia kuchni",
            "Średnim rachunkiem gościa restauracji",
            "Udziałem kosztów żywności w przychodach gastronomii",
            "Zyskiem operacyjnym lokalu"
          ],
          "correct": 2,
          "explain": "Food Cost określa, jaką część przychodów gastronomii pochłaniają koszty żywności (surowców)."
        },
        {
          "type": "tf",
          "q": "Płynność finansowa oznacza zdolność obiektu do terminowego regulowania bieżących zobowiązań (wypłat, faktur, VAT) nawet przy chwilowym spadku obłożenia.",
          "correct": true,
          "explain": "Utrzymanie płynności to posiadanie środków na spłatę zobowiązań niezależnie od wahań obłożenia."
        },
        {
          "type": "flash",
          "front": "Czym różni się rachunkowość od finansów w obiekcie hotelarsko-gastronomicznym?",
          "back": "Rachunkowość rejestruje, porządkuje i dostarcza dane o operacjach (m.in. bilans i rachunek zysków i strat), a finanse te dane analizują, planują zarządzanie przychodami i kosztami, dbają o płynność oraz prognozują zapotrzebowanie na kapitał."
        }
      ]
    },
    {
      "id": "hot-segmentacja-rynku",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 21,
      "title": "Segmentacja rynku hotelarskiego i gastronomicznego",
      "summary": "Segmentacja rynku to podział klientów na mniejsze, jednorodne grupy o podobnych potrzebach, by dopasować do nich ofertę, ceny i działania marketingowe w hotelarstwie i gastronomii.",
      "wiki": [
        {
          "heading": "Czym jest segmentacja i po co ją stosować",
          "body": "Segmentacja rynku to podział rynku na mniejsze grupy klientów (segmenty), które łączą podobne potrzeby, cechy, zachowania lub oczekiwania. Celem jest lepsze poznanie klientów (seniorzy szukają ciszy, młodzież atrakcji, biznesmeni sal konferencyjnych), dopasowanie oferty oraz precyzyjne kierowanie reklamy do konkretnego segmentu zamiast 'strzelania na oślep'.",
          "bullets": [
            "Hotel/restauracja działa efektywniej, bo wie kto jest klientem i czego oczekuje",
            "Unika się strat z nietrafionej reklamy i usług bez odbiorcy",
            "Łatwiej budować lojalność, gdy oferta jest dopasowana",
            "Możliwe lepsze zarządzanie cenami (inne stawki dla klientów indywidualnych, grup, firm)"
          ]
        },
        {
          "heading": "Kryteria segmentacji",
          "bullets": [
            "Demograficzne (kto to jest?): wiek, płeć, dochód, wykształcenie, wielkość rodziny, stan cywilny",
            "Geograficzne (skąd pochodzi?): kraj, region, miasto/wieś, strefa klimatyczna, turyści krajowi/zagraniczni",
            "Psychograficzne (jaki styl życia, osobowość?): styl życia, osobowość, zainteresowania, wyznawane wartości",
            "Behawioralne (jak się zachowuje?): cel podróży, częstotliwość wizyt, lojalność i udział w programach lojalnościowych"
          ]
        },
        {
          "heading": "Etapy i zastosowanie w praktyce",
          "body": "Proces segmentacji obejmuje: analizę rynku konsumentów, wybór kryteriów, podział na segmenty, ocenę atrakcyjności segmentów (liczebność, lojalność), wybór segmentu docelowego i dostosowanie do niego oferty. W praktyce hotel tworzy ofertę dla rodzin z dziećmi (pokoje rodzinne, menu dziecięce, animacje), restauracja promuje się wśród wegan lub osób na diecie, a obiekt konferencyjny kieruje pakiety biznesowe do firm."
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Do której grupy kryteriów segmentacji należy 'cel podróży' (wypoczynek, biznes, zdrowie, rozrywka)?",
          "options": [
            "Demograficzne",
            "Geograficzne",
            "Behawioralne",
            "Psychograficzne"
          ],
          "correct": 2,
          "explain": "Cel podróży opisuje zachowanie klienta, więc jest kryterium behawioralnym."
        },
        {
          "type": "abcd",
          "q": "Co jest ostatnim etapem procesu segmentacji rynku w obiekcie hotelarskim?",
          "options": [
            "Dostosowanie oferty do wybranego segmentu docelowego",
            "Analiza rynku konsumentów",
            "Wybór kryteriów segmentacji",
            "Podział klientów na segmenty"
          ],
          "correct": 0,
          "explain": "Proces segmentacji kończy się wyborem segmentu docelowego i dopasowaniem do niego oferty; analiza rynku i wybór kryteriów to etapy początkowe."
        },
        {
          "type": "tf",
          "q": "Strefa klimatyczna, z której pochodzi klient, jest przykładem kryterium geograficznego segmentacji.",
          "correct": true,
          "explain": "Strefa klimatyczna należy do kryteriów geograficznych obok kraju, regionu i podziału na turystów krajowych i zagranicznych."
        },
        {
          "type": "flash",
          "front": "Jak hotel praktycznie wykorzystuje segmentację — podaj przykłady dopasowania oferty do segmentów.",
          "back": "Dla rodzin z dziećmi: pokoje rodzinne, menu dziecięce i animacje; dla firm: pakiety konferencyjne i sale; dla seniorów: ciche pokoje i spokojny wypoczynek."
        }
      ]
    },
    {
      "id": "hot-zespol-projektowy-wymagania",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 22,
      "title": "Wymagania dotyczące uczestników zespołu projektowego",
      "summary": "Skuteczność zespołu projektowego w obiekcie hotelarsko-gastronomicznym zależy od kompetencji twardych i miękkich, cech osobowościowych, jasno przypisanych ról oraz spełnienia wymagań formalno-organizacyjnych jego członków.",
      "wiki": [
        {
          "heading": "Czym jest zespół projektowy",
          "body": "Zespół projektowy to celowo powołana grupa osób, najczęściej specjalistów z różnych dziedzin, która realizuje wspólne, unikalne i ograniczone w czasie zadanie. Jego skuteczność opiera się na trzech filarach: kompetencjach poszczególnych członków, jakości ich wzajemnej współpracy oraz organizacji całego zespołu. W hotelarstwie i gastronomii takim projektem może być otwarcie nowego obiektu, wdrożenie systemu HACCP czy uruchomienie usługi spa."
        },
        {
          "heading": "Kompetencje twarde i miękkie",
          "body": "Wobec członków zespołu stawia się dwa rodzaje kompetencji, które powinny się uzupełniać.",
          "bullets": [
            "Kompetencje merytoryczne (twarde): wiedza branżowa i znajomość regulacji, umiejętności techniczne, doświadczenie zawodowe, znajomość metod zarządzania projektami oraz zdolności analityczne i decyzyjne.",
            "Kompetencje miękkie: komunikatywność i aktywne słuchanie, praca zespołowa i dzielenie się wiedzą, zarządzanie czasem, elastyczność, kreatywność oraz umiejętność dogadywania się z klientami i dostawcami.",
            "Cechy osobowościowe: odpowiedzialność i zaangażowanie, samodzielność, odporność na stres, otwartość na krytykę i gotowość do nauki."
          ]
        },
        {
          "heading": "Role w zespole i ich specyfika",
          "body": "W zespole projektowym wyodrębnia się role, z których każda niesie odmienne wymagania.",
          "bullets": [
            "Kierownik zespołu – przywództwo, doświadczenie, decyzyjność i znajomość metodologii zarządzania projektami.",
            "Eksperci techniczni – wiedza fachowa i znajomość narzędzi.",
            "Specjalista finansów – budżetowanie i analiza kosztów.",
            "Specjalista marketingu i PR – kreatywność oraz narzędzia marketingowe.",
            "Analityk biznesowy – analiza potrzeb klienta i komunikatywność."
          ]
        },
        {
          "heading": "Wymagania formalne i organizacyjne",
          "body": "Oprócz kompetencji członek zespołu musi spełnić warunki formalne i organizacyjne: posiadać certyfikaty oraz uprawnienia zawodowe (np. budowlane, IT), zapewnić dostępność czasową na realizację zadań oraz dostosować się do struktury organizacyjnej i zasad obowiązujących w firmie."
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Do której grupy kompetencji członka zespołu projektowego zalicza się aktywne słuchanie i dzielenie się wiedzą?",
          "options": [
            "Kompetencji merytorycznych (twardych)",
            "Kompetencji miękkich",
            "Wymagań formalnych",
            "Uprawnień zawodowych"
          ],
          "correct": 1,
          "explain": "Komunikatywność, aktywne słuchanie oraz dzielenie się wiedzą należą do kompetencji miękkich."
        },
        {
          "type": "abcd",
          "q": "Która rola w zespole projektowym odpowiada przede wszystkim za budżetowanie i analizę kosztów?",
          "options": [
            "Analityk biznesowy",
            "Specjalista marketingu i PR",
            "Specjalista finansów",
            "Kierownik zespołu"
          ],
          "correct": 2,
          "explain": "Specjalista finansów zajmuje się budżetowaniem oraz analizą kosztów projektu."
        },
        {
          "type": "tf",
          "q": "Skuteczność zespołu projektowego opiera się wyłącznie na kompetencjach twardych jego członków.",
          "correct": false,
          "explain": "Skuteczność zależy od trzech filarów: kompetencji członków, jakości współpracy i organizacji zespołu, a same kompetencje twarde nie wystarczą."
        },
        {
          "type": "flash",
          "front": "Jakie cztery cechy kojarzy się przede wszystkim z rolą kierownika zespołu projektowego?",
          "back": "Przywództwo, doświadczenie, decyzyjność oraz znajomość metodologii zarządzania projektami."
        }
      ]
    },
    {
      "id": "hot-promotion-mix",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 23,
      "title": "Instrumenty promocji (promotion-mix) w hotelarstwie i gastronomii",
      "summary": "Promotion-mix to zestaw pięciu narzędzi komunikacji z rynkiem — reklama, promocja sprzedaży, PR, sprzedaż osobista i marketing bezpośredni — wykorzystywanych do informowania gości, zachęcania do zakupu usług hotelarskich i gastronomicznych oraz budowania pozytywnego wizerunku firmy.",
      "wiki": [
        {
          "heading": "Czym jest promocja i promotion-mix",
          "body": "Promocja to działanie mające na celu poinformowanie klientów o ofercie, zachęcenie ich do zakupu oraz budowanie pozytywnego wizerunku firmy. Jest jednym z czterech elementów klasycznego marketingu mix 4P (Product, Price, Place, Promotion). Promotion-mix (zestaw instrumentów promocji) to narzędzia, którymi przedsiębiorstwo komunikuje się z rynkiem, aby przyciągnąć uwagę gości, skłonić ich do skorzystania z usług i wzmocnić markę."
        },
        {
          "heading": "Pięć podstawowych instrumentów promocji",
          "bullets": [
            "Reklama – płatna forma prezentacji oferty w mediach masowych (telewizja, internet, prasa, radio), docierająca do masowego odbiorcy.",
            "Promocja sprzedaży – krótkoterminowe działania zachęcające do zakupu: rabaty, kupony, degustacje, oferty specjalne (np. drugi obiad za pół ceny, happy hours).",
            "Public Relations (PR) – budowanie dobrego wizerunku i relacji z otoczeniem poprzez wydarzenia i sponsoring.",
            "Sprzedaż osobista – bezpośredni kontakt przedstawiciela firmy z klientem: rozmowa, doradztwo, prezentacja oferty.",
            "Marketing bezpośredni – kontakt z klientem przez e-mail, SMS, katalogi, newslettery lub social media."
          ]
        },
        {
          "heading": "Zastosowanie w hotelarstwie i gastronomii",
          "body": "Ze względu na niematerialność usług branża intensywnie korzysta z całego promotion-mix. Reklamę stanowi spot hotelu w radiu, ogłoszenie restauracji w lokalnej prasie czy banery w internecie. Promocję sprzedaży tworzą happy hours i degustacje. PR realizuje się przez sponsorowanie lokalnej imprezy lub udział restauracji w akcji charytatywnej. Marketing bezpośredni to np. newsletter ze świąteczną ofertą albo SMS przypominający o rezerwacji."
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Happy hours, degustacje oraz oferta „drugi obiad za pół ceny” to przykłady którego instrumentu promocji?",
          "options": [
            "Reklamy",
            "Promocji sprzedaży",
            "Public Relations",
            "Sprzedaży osobistej"
          ],
          "correct": 1,
          "explain": "Promocja sprzedaży to krótkoterminowe działania (rabaty, kupony, degustacje, happy hours) zachęcające do natychmiastowego zakupu."
        },
        {
          "type": "abcd",
          "q": "Który instrument promocji polega na bezpośrednim kontakcie przedstawiciela firmy z gościem — rozmowie, doradztwie i prezentacji oferty?",
          "options": [
            "Marketing bezpośredni",
            "Reklama",
            "Sprzedaż osobista",
            "Promocja sprzedaży"
          ],
          "correct": 2,
          "explain": "Sprzedaż osobista opiera się na osobistym kontakcie pracownika z klientem, podczas gdy marketing bezpośredni używa e-maila, SMS-a czy newslettera."
        },
        {
          "type": "tf",
          "q": "Sponsorowanie lokalnej imprezy przez hotel oraz udział restauracji w akcji charytatywnej to działania z zakresu Public Relations (PR).",
          "correct": true,
          "explain": "PR buduje pozytywny wizerunek i relacje z otoczeniem właśnie poprzez sponsoring oraz zaangażowanie w wydarzenia i wolontariat."
        },
        {
          "type": "flash",
          "front": "Wymień pięć podstawowych instrumentów promotion-mix w hotelarstwie i gastronomii.",
          "back": "Reklama, promocja sprzedaży, public relations (PR), sprzedaż osobista oraz marketing bezpośredni."
        }
      ]
    },
    {
      "id": "hot-marketing-mix-7p",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 24,
      "title": "Komponenty marketingu mix (koncepcja 7P) w hotelarstwie i gastronomii",
      "summary": "Marketing mix 7P to rozszerzenie klasycznego modelu 4P (produkt, cena, dystrybucja, promocja) o trzy elementy istotne dla usług — ludzi, proces i otoczenie fizyczne — które pozwalają hotelom i zakładom gastronomicznym kształtować ofertę i postrzeganie marki.",
      "wiki": [
        {
          "heading": "Od 4P do 7P",
          "body": "Marketing mix to zestaw narzędzi, którymi przedsiębiorstwo kształtuje swoją ofertę i wpływa na postrzeganie marki przez klientów. Klasyczny model obejmuje cztery elementy (4P): produkt, cenę, dystrybucję i promocję. W usługach, takich jak hotelarstwo i gastronomia, model ten rozszerza się do siedmiu elementów (7P) o ludzi, proces i otoczenie fizyczne. Rozszerzenie to jest kluczowe ze względu na specyfikę branży, przede wszystkim niematerialność usług — klient nie może ocenić usługi przed jej skonsumowaniem, więc o jego wrażeniu decydują także personel, sprawność obsługi i widoczne elementy otoczenia."
        },
        {
          "heading": "Cztery klasyczne elementy (4P)",
          "bullets": [
            "Produkt (Product) – to, co oferujemy klientowi: rodzaje pokoi (standard, premium, apartament), menu (dania regionalne, wegetariańskie, dziecięce), usługi dodatkowe (SPA, room service).",
            "Cena (Price) – wartość usługi i strategia jej ustalania: ceny sezonowe i poza sezonem, rabaty dla stałych klientów.",
            "Dystrybucja (Place) – miejsce i sposób, w jaki klient może kupić usługę: lokalizacja (hotel w centrum lub przy dworcu), rezerwacja przez stronę WWW lub portal typu Booking.",
            "Promocja (Promotion) – działania informujące o ofercie i zachęcające do skorzystania: reklama w internecie i social mediach, happy hours, ulotki restauracji."
          ]
        },
        {
          "heading": "Trzy dodatkowe elementy usługowe",
          "bullets": [
            "Ludzie (People) – osoby świadczące usługę, ich wygląd i kultura osobista, np. kelner doradzający w wyborze dań czy recepcjonistka mówiąca w języku obcym.",
            "Proces (Process) – przebieg realizacji usługi, sprawność obsługi i procedury wewnętrzne, np. szybki check-in czy krótki czas oczekiwania na posiłek.",
            "Otoczenie fizyczne (Physical evidence) – wszystko, co klient widzi i co wpływa na ocenę jakości: wystrój wnętrz, czystość pokoi i sali, eleganckie menu, logo i wizytówki hotelu."
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Który element NIE należy do klasycznego modelu 4P, lecz dopiero do rozszerzonego 7P?",
          "options": [
            "Produkt",
            "Cena",
            "Proces",
            "Promocja"
          ],
          "correct": 2,
          "explain": "Proces (Process) to jeden z trzech elementów dodanych w modelu 7P, obok ludzi i otoczenia fizycznego."
        },
        {
          "type": "abcd",
          "q": "Co jest przykładem otoczenia fizycznego (physical evidence) w hotelu lub restauracji?",
          "options": [
            "Rabat dla stałych klientów",
            "Wystrój wnętrz i czystość sali",
            "Sprawny i szybki check-in",
            "Recepcjonistka mówiąca w języku obcym"
          ],
          "correct": 1,
          "explain": "Otoczenie fizyczne to widoczne elementy wpływające na ocenę jakości, takie jak wystrój i czystość, podczas gdy pozostałe odpowiedzi dotyczą ceny, procesu i ludzi."
        },
        {
          "type": "tf",
          "q": "Koncepcję 7P tworzy się przez rozszerzenie klasycznego modelu 4P o trzy elementy: ludzi, proces i otoczenie fizyczne.",
          "correct": true,
          "explain": "Model 7P dodaje do produktu, ceny, dystrybucji i promocji trzy elementy usługowe: People, Process i Physical evidence."
        },
        {
          "type": "flash",
          "front": "Dlaczego w hotelarstwie i gastronomii stosuje się rozszerzony model 7P zamiast 4P?",
          "back": "Ze względu na specyfikę usług, zwłaszcza ich niematerialność — klient ocenia usługę także przez personel (ludzie), sprawność obsługi (proces) i widoczne otoczenie fizyczne, dlatego te trzy elementy dodano do klasycznych 4P."
        }
      ]
    },
    {
      "id": "hot-systemy-hotelowe",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 25,
      "title": "Systemy hotelowe w Polsce i na świecie",
      "summary": "System hotelowy to zorganizowana sieć hoteli działających pod wspólną marką, z powtarzalnym standardem obsługi, dzieląca się na systemy krajowe i międzynarodowe oraz działająca w różnych formach prawno-organizacyjnych.",
      "wiki": [
        {
          "heading": "Czym jest system hotelowy",
          "body": "System hotelowy to zorganizowana sieć hoteli działających pod wspólną marką, z powtarzalnym standardem obsługi i zarządzania. Celem systemu jest zapewnienie rozpoznawalności marki, budowanie zaufania klientów oraz utrzymanie stałego, przewidywalnego poziomu usług.",
          "bullets": [
            "Jednolity wygląd pokoi, standard obsługi i czystości",
            "Wspólny (często globalny) system rezerwacji z bazą danych gości",
            "Program lojalnościowy nagradzający stałych klientów"
          ]
        },
        {
          "heading": "Systemy międzynarodowe",
          "body": "To globalne sieci posiadające hotele w wielu krajach i na różnych kontynentach. Cechują je standaryzacja jakości niezależnie od kraju, globalny system rezerwacji, silny marketing i prestiż marki oraz programy lojalnościowe.",
          "bullets": [
            "Marriott International (USA) – m.in. Marriott, Sheraton, Ritz-Carlton, Courtyard; ponad 30 marek, lider pod względem liczby pokoi",
            "Accor (Francja) – m.in. Ibis, Ibis budget, Novotel, Sofitel, Mercure; silna pozycja w Europie i ponad 80 hoteli w Polsce",
            "Hilton Hotels & Resorts – m.in. Hilton, DoubleTree, Hampton; jedna z pierwszych firm z programem lojalnościowym"
          ]
        },
        {
          "heading": "Systemy krajowe",
          "body": "Działają głównie na terenie Polski, opierają się zwykle na polskim kapitale, są elastyczniejsze i lepiej dostosowane do lokalnych potrzeb. Często funkcjonują w mniejszych miejscowościach, regionach wypoczynkowych oraz w stylu butikowym, historycznym lub rodzinnym.",
          "bullets": [
            "Grupa Arche – sieć w zabytkowych budynkach, znana z rewitalizacji obiektów",
            "Gromada – jedna z najstarszych polskich sieci, ponad 85 lat na rynku",
            "Focus Hotels – hotele miejskie w standardzie 3–4 gwiazdki, zwykle w centrach miast"
          ]
        },
        {
          "heading": "Formy działania w ramach systemu",
          "body": "Hotel może być powiązany z marką sieci na kilka sposobów, różniących się zakresem własności i odpowiedzialności za zarządzanie.",
          "bullets": [
            "Franczyza – niezależny hotel działa pod marką znanej sieci (np. Ibis)",
            "Własność sieci – hotel należy do sieci i jest przez nią zarządzany (np. Marriott Warszawa)",
            "Zarządzanie (kontrakt menedżerski) – właściciel zleca prowadzenie hotelu sieci (np. Hilton)",
            "Stowarzyszenie – niezależne hotele współpracujące pod wspólnym szyldem (np. Polish Prestige Hotels)"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Która forma działania w systemie hotelowym polega na tym, że właściciel obiektu zleca jego prowadzenie profesjonalnej sieci, pozostając inwestorem?",
          "options": [
            "Franczyza",
            "Własność sieci",
            "Zarządzanie (kontrakt menedżerski)",
            "Stowarzyszenie niezależnych hoteli"
          ],
          "correct": 2,
          "explain": "W kontrakcie menedżerskim sieć (np. Hilton) zarządza hotelem, choć obiekt należy do niezależnego inwestora."
        },
        {
          "type": "abcd",
          "q": "Do którego międzynarodowego systemu hotelowego należą marki Ibis, Novotel, Sofitel i Mercure?",
          "options": [
            "Marriott International",
            "Accor",
            "Hilton Hotels & Resorts",
            "Grupa Arche"
          ],
          "correct": 1,
          "explain": "Ibis, Novotel, Sofitel i Mercure to marki francuskiej grupy Accor."
        },
        {
          "type": "tf",
          "q": "Grupa Arche to przykład polskiego (krajowego) systemu hotelowego, znanego z rewitalizacji i wykorzystywania zabytkowych budynków.",
          "correct": true,
          "explain": "Arche to dynamiczna polska sieć lokująca hotele często w odnawianych obiektach zabytkowych."
        },
        {
          "type": "flash",
          "front": "Wymień cztery formy działania hotelu w ramach systemu hotelowego.",
          "back": "Franczyza, własność sieci, zarządzanie (kontrakt menedżerski) oraz stowarzyszenie niezależnych hoteli."
        }
      ]
    },
    {
      "id": "hot-srodki-gospodarcze",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 26,
      "title": "Środki gospodarcze w obiekcie hotelarsko-gastronomicznym",
      "summary": "Środki gospodarcze to wszystkie zasoby potrzebne do funkcjonowania hotelu i restauracji, dzielone na środki trwałe, obrotowe, finansowe oraz wartości niematerialne i prawne.",
      "wiki": [
        {
          "heading": "Czym są środki gospodarcze",
          "body": "Środki gospodarcze to wszystko, co jest potrzebne do funkcjonowania obiektu hotelarsko-gastronomicznego — zarówno rzeczy trwałe (budynek, meble), jak i zasoby zużywające się na bieżąco (żywność, detergenty). W tej branży gospodarowanie nimi jest kluczowe ze względu na wysokie koszty inwestycyjne związane z budową, wyposażeniem, personelem i marketingiem. Środki gospodarcze dzielimy na cztery podstawowe grupy: środki trwałe, środki obrotowe, środki finansowe oraz wartości niematerialne i prawne."
        },
        {
          "heading": "Środki trwałe",
          "body": "Środki trwałe służą dłużej niż rok i nie zużywają się od razu — stanowią fundament funkcjonowania obiektu, są używane długoterminowo, wymagają ewidencji oraz często podlegają amortyzacji.",
          "bullets": [
            "Budynki i lokale: hotele, restauracje, zaplecza, magazyny",
            "Wyposażenie pokoi: łóżka, szafy, telewizory, sejfy",
            "Wyposażenie gastronomiczne: piece, zmywarki, lodówki, kuchenki",
            "Środki transportu: samochody służbowe, wózki bagażowe",
            "Systemy informatyczne: komputery, terminale, programy do rezerwacji"
          ]
        },
        {
          "heading": "Środki obrotowe",
          "body": "Środki obrotowe zużywają się szybko, w trakcie bieżącej działalności. Są używane codziennie, wymagają regularnych dostaw oraz są często kupowane hurtowo i magazynowane.",
          "bullets": [
            "Produkty spożywcze: warzywa, mięso, przyprawy, napoje",
            "Artykuły higieniczne: mydło, papier toaletowy, szampony dla gości",
            "Tekstylia użytkowe: ręczniki, pościel, serwetki, obrusy",
            "Środki czystości: płyny do dezynfekcji, do szyb, detergenty",
            "Drobne naczynia i sztućce, które łatwo się zużywają lub gubią"
          ]
        },
        {
          "heading": "Środki finansowe oraz wartości niematerialne i prawne",
          "body": "Środki finansowe to pieniądze pozwalające firmie działać: gotówka w kasie, środki na koncie oraz przychody ze sprzedaży usług i noclegów — służą opłacaniu kosztów bieżących, zapewniają płynność finansową i mogą być przeznaczone na inwestycje. Wartości niematerialne i prawne nie są namacalne, ale mają wartość rynkową: licencje na oprogramowanie hotelowe, prawo do znaku firmowego i nazwy, know-how (procedury obsługi gościa, standardy pracy), znaki towarowe oraz prawa autorskie i majątkowe."
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Który z wymienionych zasobów zalicza się do środków trwałych obiektu hotelarsko-gastronomicznego?",
          "options": [
            "Pościel i ręczniki",
            "Zmywarka gastronomiczna",
            "Detergenty do dezynfekcji",
            "Świeże warzywa"
          ],
          "correct": 1,
          "explain": "Zmywarka służy dłużej niż rok i podlega amortyzacji, więc jest środkiem trwałym, podczas gdy pościel, detergenty i warzywa to środki obrotowe."
        },
        {
          "type": "abcd",
          "q": "Co jest cechą charakterystyczną środków obrotowych w zakładzie gastronomicznym?",
          "options": [
            "Służą dłużej niż rok i podlegają amortyzacji",
            "Stanowią trwały fundament funkcjonowania obiektu",
            "Zużywają się szybko i wymagają regularnych dostaw",
            "Są wyłącznie wartościami niematerialnymi i prawnymi"
          ],
          "correct": 2,
          "explain": "Środki obrotowe, np. żywność i środki czystości, zużywają się w bieżącej działalności, dlatego trzeba je regularnie dostarczać i magazynować."
        },
        {
          "type": "tf",
          "q": "Produkty spożywcze oraz środki czystości to przykłady środków trwałych obiektu hotelarsko-gastronomicznego.",
          "correct": false,
          "explain": "Produkty spożywcze i środki czystości zużywają się na bieżąco, więc należą do środków obrotowych, a nie trwałych."
        },
        {
          "type": "flash",
          "front": "Wymień cztery podstawowe grupy środków gospodarczych w obiekcie hotelarsko-gastronomicznym.",
          "back": "Środki trwałe, środki obrotowe, środki finansowe oraz wartości (środki) niematerialne i prawne."
        }
      ]
    },
    {
      "id": "hot-zrodla-finansowania",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 27,
      "title": "Źródła finansowania działalności hotelarsko-gastronomicznej",
      "summary": "Finansowanie obiektów hotelarsko-gastronomicznych dzieli się na kapitał własny (zysk netto, amortyzacja, kapitał zakładowy) i kapitał obcy (kredyty, leasing, fundusze unijne i zalążkowe oraz model condo).",
      "wiki": [
        {
          "heading": "Dlaczego finansowanie jest kluczowe",
          "body": "Branża hotelarsko-gastronomiczna wiąże się z wysokimi kosztami inwestycyjnymi: budową i wyposażeniem obiektu, zatrudnieniem personelu oraz marketingiem. Dlatego dobór odpowiednich źródeł finansowania decyduje o powstaniu i rozwoju hotelu czy restauracji. Środki na działalność dzieli się na kapitał własny i kapitał obcy."
        },
        {
          "heading": "Kapitał własny",
          "body": "To środki należące do firmy, których nie trzeba nikomu zwracać – uznawane za najbezpieczniejsze źródło finansowania.",
          "bullets": [
            "Zysk netto – zysk pozostający po opodatkowaniu, przeznaczany na rozwój (remont hotelu, nowa restauracja)",
            "Amortyzacja – rozłożenie w czasie kosztu zakupionego sprzętu, dzięki czemu więcej gotówki zostaje w firmie",
            "Kapitał zakładowy (założycielski) – pieniądze lub rzeczy wnoszone przez właścicieli na start, konieczne zwłaszcza w spółkach"
          ]
        },
        {
          "heading": "Kapitał obcy",
          "body": "To środki pozyskiwane z zewnątrz, zwykle wymagające spłaty lub oddania udziałów.",
          "bullets": [
            "Kredyty bankowe – najczęstsze źródło finansowania inwestycji; mają termin spłaty, oprocentowanie i wymagają zdolności kredytowej oraz zabezpieczenia",
            "Leasing – korzystanie z drogiego sprzętu (piece, lodówki, samochody) za miesięczne raty, z opcją wykupu po umowie",
            "Fundusze unijne – dofinansowanie modernizacji i rozwoju, często bezzwrotne, ważne dla małych i średnich firm",
            "Fundusze zalążkowe (seed) – pieniądze inwestorów w zamian za udziały w firmie",
            "Model condo (mieszany) – sprzedaż pokoi prywatnym inwestorom, którymi nadal zarządza operator hotelu"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Specyficzna dla hotelarstwa forma finansowania, polegająca na sprzedaży pokoi prywatnym inwestorom, którymi nadal zarządza operator obiektu, to:",
          "options": [
            "Leasing operacyjny",
            "Franczyza hotelowa",
            "Model condo (mieszany)",
            "Faktoring należności"
          ],
          "correct": 2,
          "explain": "W modelu condo hotel pozyskuje środki ze sprzedaży pokoi inwestorom, a operator zarządza całością i dzieli się z nimi zyskiem, unikając kredytu."
        },
        {
          "type": "abcd",
          "q": "Korzystanie z drogiego sprzętu gastronomicznego za miesięczne raty, bez jego zakupu i z opcją późniejszego wykupu, to:",
          "options": [
            "Amortyzacja",
            "Leasing",
            "Kredyt obrotowy",
            "Dotacja unijna"
          ],
          "correct": 1,
          "explain": "Leasing pozwala używać sprzętu należącego formalnie do firmy leasingowej w zamian za raty, z możliwością wykupu po zakończeniu umowy."
        },
        {
          "type": "tf",
          "q": "Fundusze unijne zalicza się do kapitału własnego, który zawsze trzeba zwrócić wraz z oprocentowaniem.",
          "correct": false,
          "explain": "Fundusze unijne to kapitał obcy, często bezzwrotny lub częściowo zwrotny, a nie oprocentowany kapitał własny."
        },
        {
          "type": "flash",
          "front": "Czym są fundusze zalążkowe (seed) jako źródło finansowania obiektu hotelarsko-gastronomicznego?",
          "back": "To pieniądze od inwestorów wspierających nowe lub rozwijające się firmy, którzy w zamian otrzymują udziały i stają się współwłaścicielami – dobre dla firm z ciekawym pomysłem, lecz bez własnych środków."
        }
      ]
    },
    {
      "id": "hot-savoir-vivre-przy-stole",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 28,
      "title": "Podstawowe zasady zachowania przy stole (savoir-vivre)",
      "summary": "Polska etykieta stołowa opiera się na szacunku do gospodarza i gości oraz kulturze spożywania posiłków, obejmując zasady od przygotowania i zachowania przy stole po właściwe obsługiwanie się sztućcami i zwyczaje w restauracji.",
      "wiki": [
        {
          "heading": "Przygotowanie i początek posiłku",
          "body": "Polska etykieta stołowa wynika z zasad dobrego wychowania i szacunku do gospodarza oraz pozostałych gości. Przed posiłkiem obowiązuje punktualność, stosowny ubiór (strój elegancki na uroczyste obiady i kolacje, schludny wygląd na co dzień) oraz umyte ręce.",
          "bullets": [
            "Nie siadamy pierwsi – czekamy, aż gospodarze wskażą miejsce lub sami usiądą",
            "Nie zaczynamy jeść przed innymi – w Polsce rozpoczyna gospodarz albo wszyscy razem",
            "Zwyczajowo (choć nieobowiązkowo) wypada powiedzieć „Smacznego”"
          ]
        },
        {
          "heading": "Zachowanie podczas jedzenia",
          "body": "Sztućce trzymamy w klasycznym układzie: widelec w lewej, nóż w prawej ręce. Jemy cicho i kulturalnie, nie bawimy się jedzeniem i nie mówimy z pełnymi ustami.",
          "bullets": [
            "Nie kroimy całej porcji od razu – kroimy stopniowo, w trakcie jedzenia",
            "Chleb łamiemy palcami, a nie kroimy nożem",
            "Nie sięgamy przez cały stół – prosimy sąsiada o podanie",
            "Nie opieramy łokci na stole; wykałaczek używamy poza stołem"
          ]
        },
        {
          "heading": "Napoje, alkohol i zakończenie posiłku",
          "body": "Nie pijemy przed toastem, a w sytuacjach formalnych nie stukamy się kieliszkami, lecz unosimy je prosto. Alkohol spożywa się powoli i z umiarem. Po posiłku dziękujemy gospodarzowi, a sztućce odkładamy na talerz; nie wstajemy pierwsi bez potrzeby.",
          "bullets": [
            "W restauracji kelnera przywołujemy kontaktem wzrokowym lub uniesieniem ręki, a nie krzykiem",
            "Nie gestykulujemy sztućcami – w trakcie rozmowy odkładamy je na talerz",
            "W Polsce przyjęte jest zostawienie napiwku w wysokości ok. 10% wartości rachunku"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Zgodnie z polską etykietą stołową, jak należy postąpić z chlebem podczas posiłku?",
          "options": [
            "Kroić go nożem na równe kromki",
            "Łamać palcami na mniejsze kawałki",
            "Nabijać kawałki na widelec",
            "Kroić go widelcem i nożem"
          ],
          "correct": 1,
          "explain": "Według zasad savoir-vivre chleb się łamie palcami, a nie kroi nożem."
        },
        {
          "type": "abcd",
          "q": "Jaki napiwek jest zwyczajowo przyjęty w polskich restauracjach?",
          "options": [
            "Stała kwota 5 zł niezależnie od rachunku",
            "Napiwek nie jest w Polsce praktykowany",
            "Około 10% wartości rachunku",
            "Około 25% wartości rachunku"
          ],
          "correct": 2,
          "explain": "W Polsce przyjęte jest pozostawienie napiwku w wysokości około 10% wartości rachunku."
        },
        {
          "type": "tf",
          "q": "W sytuacjach formalnych przy toaście należy energicznie stukać się kieliszkami z innymi gośćmi.",
          "correct": false,
          "explain": "W sytuacjach formalnych kieliszków się nie stuka, lecz unosi prosto, a pić zaczynamy dopiero po toaście."
        },
        {
          "type": "flash",
          "front": "Jak należy obsłużyć się sztućcami i co sygnalizujemy ich położeniem po jedzeniu?",
          "back": "Widelec trzymamy w lewej, a nóż w prawej ręce; po zakończeniu jedzenia sztućce odkładamy razem na talerz."
        }
      ]
    },
    {
      "id": "hot-interesariusze-projektu",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 29,
      "title": "Zarządzanie interesariuszami projektu",
      "summary": "Zarządzanie interesariuszami projektu to identyfikacja, analiza, planowanie komunikacji, angażowanie i monitorowanie wszystkich osób i grup wpływających na projekt (np. otwarcie hotelu czy restauracji) lub przez niego dotkniętych.",
      "wiki": [
        {
          "heading": "Kim są interesariusze",
          "body": "Interesariusze projektu to wszystkie osoby, grupy i podmioty, które mają wpływ na projekt lub na które projekt oddziałuje. Ich nastawienie może być pozytywne lub negatywne. W projekcie hotelarsko-gastronomicznym (np. otwarcie nowej restauracji czy modernizacja hotelu) zarządzanie nimi polega na tym, by poznać ich tożsamość, rozumieć ich potrzeby i oczekiwania, utrzymywać z nimi kontakt, korzystać z ich wsparcia i unikać konfliktów.",
          "bullets": [
            "Wewnętrzni: kierownik projektu, zespół projektowy, sponsor projektu, zarząd firmy",
            "Zewnętrzni: klienci (goście), dostawcy, podwykonawcy, inwestorzy, urząd miasta"
          ]
        },
        {
          "heading": "Etapy zarządzania interesariuszami",
          "body": "Proces przebiega w pięciu następujących po sobie krokach.",
          "bullets": [
            "1. Identyfikacja – ustalenie, kto ma związek z projektem; nie można nikogo pominąć, bo nawet pośredni wpływ ma znaczenie",
            "2. Analiza – ocena siły wpływu, nastawienia (pozytywne/negatywne), potrzeb i stopnia zaangażowania, by wiedzieć, kogo zaangażować, a komu jedynie wysyłać raporty",
            "3. Planowanie – ustalenie, co, jak i jak często komunikować każdemu interesariuszowi (spotkania, maile, raporty)",
            "4. Angażowanie i realizacja planu (zarządzanie relacjami) – bieżący kontakt, informowanie o postępach, konsultowanie decyzji, odpowiadanie na pytania",
            "5. Monitorowanie – ocena skuteczności działań: czy interesariusze są zadowoleni, czy ktoś się wycofał, co poprawić w komunikacji"
          ]
        },
        {
          "heading": "Po co to robić",
          "body": "Świadome zarządzanie interesariuszami zmniejsza ryzyko porażki przedsięwzięcia.",
          "bullets": [
            "Aby projekt nie został wycofany przez niezadowolone osoby",
            "Aby unikać nieporozumień i konfliktów",
            "Aby zyskać wsparcie tam, gdzie jest potrzebne",
            "Aby zwiększyć szanse na dobre przyjęcie i pełną realizację projektu"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Który z wymienionych jest interesariuszem WEWNĘTRZNYM projektu hotelarsko-gastronomicznego?",
          "options": [
            "Dostawca produktów spożywczych",
            "Urząd miasta",
            "Sponsor projektu",
            "Klient (gość)"
          ],
          "correct": 2,
          "explain": "Sponsor projektu należy do interesariuszy wewnętrznych, podobnie jak kierownik, zespół projektowy i zarząd firmy."
        },
        {
          "type": "abcd",
          "q": "Na którym etapie zarządzania interesariuszami ocenia się siłę ich wpływu oraz to, czy są nastawieni pozytywnie czy negatywnie?",
          "options": [
            "Identyfikacja interesariuszy",
            "Analiza interesariuszy",
            "Planowanie zarządzania interesariuszami",
            "Monitorowanie"
          ],
          "correct": 1,
          "explain": "To na etapie analizy ocenia się wpływ, nastawienie, potrzeby i stopień zaangażowania poszczególnych interesariuszy."
        },
        {
          "type": "tf",
          "q": "Podczas identyfikacji interesariuszy można pominąć osoby, które mają na projekt jedynie pośredni wpływ.",
          "correct": false,
          "explain": "Nie można nikogo pominąć, ponieważ nawet pośredni wpływ może okazać się istotny dla powodzenia projektu."
        },
        {
          "type": "flash",
          "front": "Wymień pięć etapów zarządzania interesariuszami projektu.",
          "back": "1) Identyfikacja, 2) Analiza, 3) Planowanie zarządzania, 4) Angażowanie i realizacja planu (zarządzanie relacjami), 5) Monitorowanie."
        }
      ]
    },
    {
      "id": "hot-odpowiedzialnosc-cywilna-hotelarza",
      "track": "hotelarstwo",
      "category": "hotelarstwo-spec",
      "number": 30,
      "title": "Zasady odpowiedzialności cywilnej hotelarza",
      "summary": "Hotelarz odpowiada na gruncie Kodeksu cywilnego za rzeczy wniesione i oddane na przechowanie przez gościa oraz za szkody na osobie, z określonymi granicami odszkodowania i przesłankami zwolnienia z odpowiedzialności.",
      "wiki": [
        {
          "heading": "Podstawa prawna i zakres",
          "body": "Odpowiedzialność cywilną hotelarza w Polsce reguluje przede wszystkim Kodeks cywilny. Hotelarz odpowiada za utratę, uszkodzenie lub zniszczenie rzeczy wniesionych przez gościa, przy czym odpowiedzialność powstaje już z chwilą przekroczenia progu budynku, a nie dopiero od zameldowania w recepcji.",
          "bullets": [
            "Rzeczy wniesione: bagaż, odzież, sprzęt elektroniczny przyniesiony przez gościa",
            "Rzeczy oddane do przechowania: sejf hotelowy, przechowalnia bagażu",
            "Odpowiedzialność biegnie od wejścia gościa do obiektu, niezależnie od formalnego zameldowania"
          ]
        },
        {
          "heading": "Granice odpowiedzialności i rzeczy wartościowe",
          "body": "Wysokość odszkodowania za rzeczy wniesione jest ograniczona do 100-krotności ceny za dobę pobytu. Ograniczenie to nie obowiązuje, gdy rzeczy zostały oddane na przechowanie – wówczas hotelarz ponosi pełną odpowiedzialność. Hotel może jednak odmówić przyjęcia rzeczy szczególnie wartościowych.",
          "bullets": [
            "Limit zwykłej odpowiedzialności: 100-krotność ceny za dobę pobytu",
            "Rzeczy oddane na przechowanie: pełna odpowiedzialność bez limitu",
            "Hotel może odmówić przyjęcia rzeczy o szczególnej wartości: biżuterii, pieniędzy, dokumentów, drogiego sprzętu elektronicznego"
          ]
        },
        {
          "heading": "Zwolnienie z odpowiedzialności",
          "body": "Istnieją okoliczności, w których hotelarz zostaje zwolniony z odpowiedzialności za rzeczy gościa.",
          "bullets": [
            "Siła wyższa – powódź, pożar, trzęsienie ziemi",
            "Wyłączna wina gościa – np. pozostawienie rzeczy bez nadzoru w miejscu ogólnodostępnym",
            "Właściwości samej rzeczy – np. zepsucie się żywności"
          ]
        },
        {
          "heading": "Odpowiedzialność deliktowa",
          "body": "Niezależnie od odpowiedzialności za rzeczy, hotel odpowiada za szkody na osobie gościa (odpowiedzialność deliktowa). Co do zasady gość powinien udowodnić, że szkoda powstała wskutek niedopatrzenia lub zaniedbania hotelu. Wyjątkiem są szkody wyrządzone przez działanie prądu, gazu lub windy, za które hotel ponosi odpowiedzialność niejako automatycznie.",
          "bullets": [
            "Przykłady: poślizgnięcie na mokrej podłodze lub schodach",
            "Porażenie prądem z niesprawnego urządzenia",
            "Zatrucie pokarmowe po posiłku w hotelowej restauracji"
          ]
        }
      ],
      "questions": [
        {
          "type": "abcd",
          "q": "Do jakiej kwoty ograniczona jest odpowiedzialność hotelarza za utratę rzeczy wniesionych przez gościa, jeśli nie zostały one oddane na przechowanie?",
          "options": [
            "do 10-krotności ceny za dobę pobytu",
            "do 50-krotności ceny za dobę pobytu",
            "do 100-krotności ceny za dobę pobytu",
            "bez ograniczeń, do pełnej wartości rzeczy"
          ],
          "correct": 2,
          "explain": "Odpowiedzialność za zwykłe rzeczy wniesione ogranicza się do 100-krotności ceny za dobę, a pełna odpowiedzialność dotyczy rzeczy oddanych na przechowanie."
        },
        {
          "type": "abcd",
          "q": "Od którego momentu hotelarz odpowiada za rzeczy wniesione przez gościa?",
          "options": [
            "od chwili zameldowania w recepcji",
            "od momentu przekroczenia przez gościa progu budynku",
            "od wydania gościowi klucza do pokoju",
            "od podpisania umowy o usługę hotelarską"
          ],
          "correct": 1,
          "explain": "Odpowiedzialność powstaje już z chwilą przekroczenia progu budynku, a nie dopiero od zameldowania."
        },
        {
          "type": "tf",
          "q": "Hotelarz może odmówić przyjęcia na przechowanie rzeczy szczególnie wartościowych, takich jak biżuteria, pieniądze czy dokumenty.",
          "correct": true,
          "explain": "Kodeks cywilny pozwala hotelarzowi odmówić przyjęcia rzeczy o szczególnie wysokiej wartości."
        },
        {
          "type": "flash",
          "front": "Wymień okoliczności, które zwalniają hotelarza z odpowiedzialności za rzeczy wniesione przez gościa.",
          "back": "Siła wyższa (np. powódź, pożar, trzęsienie ziemi), wyłączna wina gościa oraz właściwości samej rzeczy (np. psucie się żywności)."
        }
      ]
    }
  ]
