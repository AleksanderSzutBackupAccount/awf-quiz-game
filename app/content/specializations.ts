import type { Specialization } from './types'

export const specializations: Specialization[] = [
  {
    id: 'hotelarstwo',
    name: 'Hotelarstwo',
    short: 'Hotelarstwo',
    tagline: 'Obsługa gościa • obiekty • biuro podróży',
    description:
      'Zagadnienia wspólne dla wszystkich + specjalizacja hotelarska: procedury check-in/check-out, rodzaje i kategoryzacja obiektów hotelarskich oraz obsługa klienta w biurze podróży.',
    accent: 'linear-gradient(120deg, #6d5efc, #2bd2ff)',
    icon: '🏨',
  },
  {
    id: 'przygodowa',
    name: 'Turystyka Przygodowa',
    short: 'Przygodówka',
    tagline: 'Outdoor • edukacja przygodowa • projekty',
    description:
      'Zagadnienia wspólne dla wszystkich + specjalizacja przygodowa: projekty outdoorowe, charakterystyka uczestników i edukacja przygodowa.',
    accent: 'linear-gradient(120deg, #ff6ad5, #fbbf24)',
    icon: '🧗',
  },
]

export const getSpecialization = (id: string) =>
  specializations.find((s) => s.id === id)
