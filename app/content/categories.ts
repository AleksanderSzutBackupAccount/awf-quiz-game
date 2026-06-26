import type { Category } from './types'

export const categories: Category[] = [
  { id: 'rekreacja', name: 'Rekreacja i czas wolny', icon: '🌿' },
  { id: 'fizjologia', name: 'Fizjologia i trening', icon: '💪' },
  { id: 'zywienie', name: 'Żywienie', icon: '🥗' },
  { id: 'turystyka', name: 'Turystyka i hotelarstwo', icon: '🧭' },
  { id: 'zarzadzanie', name: 'Zarządzanie i komunikacja', icon: '🗂️' },
  { id: 'marketing', name: 'Marketing i rynek', icon: '📈' },
  { id: 'przyroda', name: 'Przyroda i ekosystemy', icon: '🌍' },
  { id: 'historia', name: 'Historia, kultura i architektura', icon: '🏛️' },
  { id: 'technologie', name: 'Technologie', icon: '💻' },
  { id: 'hotelarstwo', name: 'Hotelarstwo i biuro podróży', icon: '🏨' },
  { id: 'outdoor', name: 'Outdoor i edukacja przygodowa', icon: '🏕️' },
  { id: 'rekreacja-spec', name: 'Rekreacja (specjalność)', icon: '🤸' },
]

export const getCategory = (id: string) => categories.find((c) => c.id === id)
