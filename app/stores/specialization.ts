import { defineStore } from 'pinia'
import type { SpecializationId } from '~/content/types'

const KEY = 'awf:specialization'

export const useSpecializationStore = defineStore('specialization', {
  state: () => ({
    current: null as SpecializationId | null,
    hydrated: false,
  }),
  getters: {
    isChosen: (s) => s.current !== null,
  },
  actions: {
    hydrate() {
      if (this.hydrated || !import.meta.client) return
      const saved = localStorage.getItem(KEY) as SpecializationId | null
      if (saved === 'hotelarstwo' || saved === 'przygodowa' || saved === 'rekreacja')
        this.current = saved
      this.hydrated = true
    },
    choose(id: SpecializationId) {
      this.current = id
      if (import.meta.client) localStorage.setItem(KEY, id)
    },
    clear() {
      this.current = null
      if (import.meta.client) localStorage.removeItem(KEY)
    },
  },
})
