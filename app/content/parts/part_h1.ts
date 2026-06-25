import type { Topic } from '../types'

export const partH1: Topic[] = [
  {
    id: 'pilot-wycieczek',
    track: 'hotelarstwo',
    category: 'hotelarstwo',
    number: 34,
    title: 'Obowiązki i prawa pilota wycieczek',
    summary:
      'Pilot wycieczek w imieniu organizatora nadzoruje program imprezy i sprawuje opiekę nad uczestnikami — jego obowiązki i prawa.',
    wiki: [
      {
        body: 'Pilot wycieczek to osoba, która w imieniu organizatora nadzoruje realizację programu imprezy turystycznej i sprawuje opiekę nad uczestnikami. Marszałek województwa ma prawo kontrolować pilotów wycieczek.',
      },
      {
        heading: 'Obowiązki pilota',
        bullets: [
          'Działa na podstawie pisemnego zlecenia organizatora; musi znać język kraju docelowego.',
          'Czuwa nad realizacją świadczeń — sprawdza jakość usług (nocleg, wyżywienie, transport) i ich zgodność z umową.',
          'Sprawuje opiekę nad turystami, zapewnia pomoc medyczną i reaguje na problemy (zgubione dokumenty, konflikty z prawem).',
          'Przekazuje informacje o trasie, krajach i atrakcjach oraz tłumaczy rozmowy z obsługą.',
          'Pełni obowiązki handlowe (interesy organizatora, faktury) i obywatelskie (szacunek dla lokalnych przepisów i zwyczajów).',
        ],
      },
      {
        heading: 'Prawa pilota',
        bullets: [
          'Reprezentuje organizatora — kontaktuje się z kontrahentami i koordynuje program.',
          'Podejmuje decyzje organizacyjne związane z przebiegiem imprezy.',
          'Wydaje uczestnikom polecenia organizacyjne.',
        ],
      },
      {
        body: 'Uwaga: w niektórych krajach (np. Francja, Włochy) pilot nie może oprowadzać po obiektach bez lokalnej licencji przewodnika. Częsty jest też dylemat pilota: opieka nad uczestnikami czy realizacja programu (stan wyższej konieczności).',
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Kto ma prawo kontrolować pilotów wycieczek?',
        options: ['Minister sportu', 'Izba Turystyki', 'Prezydent miasta', 'Marszałek województwa'],
        correct: 3,
        explain: 'Zgodnie z materiałem, prawo kontroli pilotów wycieczek ma marszałek województwa.',
      },
      {
        type: 'tf',
        q: 'W niektórych krajach (np. Francja, Włochy) pilot nie może oprowadzać turystów bez lokalnej licencji.',
        correct: true,
        explain:
          'W części krajów oprowadzanie po obiektach wymaga lokalnej licencji przewodnika — pilot nie może jej zastąpić.',
      },
      {
        type: 'flash',
        front: 'Na czym polega dylemat pilota „opieka czy program"?',
        back: 'W sytuacji wyższej konieczności pilot musi zdecydować, czy realizować zaplanowany program, czy zająć się opieką nad uczestnikiem — opieka i bezpieczeństwo mają pierwszeństwo.',
      },
    ],
  },
  {
    id: 'programowanie-imprez-turystycznych',
    track: 'hotelarstwo',
    category: 'hotelarstwo',
    number: 40,
    title: 'Programowanie imprez turystycznych dla różnych grup docelowych',
    summary:
      'Etapy tworzenia imprezy turystycznej (analiza destynacji, współpraca z usługodawcami, kreowanie programu i kalkulacja ceny) z dopasowaniem do grupy docelowej.',
    wiki: [
      {
        body: 'Programowanie imprezy turystycznej to proces planowania kompleksowej oferty odpowiadającej potrzebom rynku i konkretnej grupy docelowej. Kluczowe jest dopasowanie oferty do specyfiki klientów (rodziny z dziećmi, seniorzy, młodzież, VIP).',
      },
      {
        heading: '1. Analiza destynacji',
        bullets: [
          'Rozpoznanie atrakcji (przyrodniczych, kulturowych, rozrywkowych).',
          'Ocena infrastruktury (baza noclegowa, gastronomiczna, transportowa) i lokalnych usługodawców.',
          'Sprawdzenie, czy miejsce spełnia wymagania grupy docelowej.',
        ],
      },
      {
        heading: '2. Współpraca z usługodawcami',
        body: 'Touroperator ustala ceny, terminy i standardy. Dwie formy zakupu usług:',
        bullets: [
          'Allotment — rezerwacja usług z możliwością zwrotu do wyznaczonego terminu (lepszy dla indywidualnych i seniorów).',
          'Czarter — wynajęcie całej usługi na własne ryzyko (sprawdza się przy młodzieży i grupach szkolnych).',
        ],
      },
      {
        heading: '3. Program i kalkulacja ceny',
        bullets: [
          'Ustala się trasę/miejsce, terminy, standard usług, atrakcje, transport i cenę.',
          'Program dopasowany do grupy: seniorzy — krótsze trasy; młodzież — intensywny program; VIP — usługi premium.',
          'Kalkulacja: koszty stałe + koszty zmienne + marża + prowizje; w turystyce obowiązuje VAT od marży.',
        ],
      },
    ],
    questions: [
      {
        type: 'abcd',
        q: 'Która forma zakupu usług pozwala zwrócić niewykorzystane miejsca do określonego terminu?',
        options: ['Czarter', 'Allotment', 'Leasing', 'Franczyza'],
        correct: 1,
        explain:
          'Allotment to rezerwacja z możliwością zwrotu do wyznaczonego terminu; czarter to wynajem na własne ryzyko.',
      },
      {
        type: 'abcd',
        q: 'Które koszty imprezy są niezależne od liczby uczestników?',
        options: ['Koszty stałe', 'Koszty zmienne', 'Prowizje agentów', 'Bilety wstępu'],
        correct: 0,
        explain:
          'Koszty stałe (np. wynagrodzenie pilota, rezerwacje) nie zależą od liczby uczestników; nocleg czy bilety to koszty zmienne.',
      },
      {
        type: 'tf',
        q: 'Czarter sprawdza się szczególnie przy grupach młodzieżowych i szkolnych.',
        correct: true,
        explain:
          'Czarter (całość usługi na własne ryzyko) jest opłacalny przy dużych, pewnych grupach — np. szkolnych.',
      },
      {
        type: 'flash',
        front: 'Jaki system VAT obowiązuje w turystyce przy imprezach?',
        back: 'System VAT od marży — podatek nalicza się od marży touroperatora, a nie od całej wartości imprezy.',
      },
    ],
  },
]
