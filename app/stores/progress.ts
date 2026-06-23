import { defineStore } from 'pinia'
import type { SpecializationId } from '~/content/types'

const KEY = 'awf:progress'

export const XP_PER_CORRECT = 10
export const XP_PER_LEVEL = 100 // XP needed per rank

export const RANKS = [
  'Nowicjusz',
  'Adept',
  'Praktyk',
  'Specjalista',
  'Ekspert',
  'Mistrz',
  'Legenda',
]

export interface QuizRun {
  id: string
  specialization: SpecializationId
  mode: 'abcd' | 'tf' | 'flash'
  scopeLabel: string
  total: number
  correct: number
  date: number
}

interface ProgressState {
  mastery: Record<string, { correct: number; seen: number }>
  history: QuizRun[]
  xp: number
  celebratedLevels: string[]
  hydrated: boolean
}

export const useProgressStore = defineStore('progress', {
  state: (): ProgressState => ({
    mastery: {},
    history: [],
    xp: 0,
    celebratedLevels: [],
    hydrated: false,
  }),
  getters: {
    topicMastery: (s) => (topicId: string) => s.mastery[topicId] ?? { correct: 0, seen: 0 },
    isTopicMastered: (s) => (topicId: string) => {
      const m = s.mastery[topicId]
      return !!m && m.seen > 0 && m.correct / m.seen >= 0.8
    },
    runsForSpec: (s) => (spec: SpecializationId) =>
      s.history.filter((r) => r.specialization === spec),
    masteredCount: (s) => (topicIds: string[]) =>
      topicIds.filter((id) => {
        const m = s.mastery[id]
        return m && m.seen > 0 && m.correct / m.seen >= 0.8
      }).length,
    // rank derived from total XP
    rankLevel: (s) => Math.min(RANKS.length - 1, Math.floor(s.xp / XP_PER_LEVEL)),
    rankName(): string {
      return RANKS[this.rankLevel] ?? RANKS[0]!
    },
    xpIntoRank: (s) => s.xp % XP_PER_LEVEL,
    xpForNextRank: () => XP_PER_LEVEL,
    isLevelCelebrated: (s) => (levelId: string) => s.celebratedLevels.includes(levelId),
  },
  actions: {
    hydrate() {
      if (this.hydrated || !import.meta.client) return
      try {
        const raw = localStorage.getItem(KEY)
        if (raw) {
          const parsed = JSON.parse(raw)
          this.mastery = parsed.mastery ?? {}
          this.history = parsed.history ?? []
          this.xp = parsed.xp ?? 0
          this.celebratedLevels = parsed.celebratedLevels ?? []
        }
      } catch {
        /* ignore corrupt storage */
      }
      this.hydrated = true
    },
    persist() {
      if (!import.meta.client) return
      localStorage.setItem(
        KEY,
        JSON.stringify({
          mastery: this.mastery,
          history: this.history.slice(-50),
          xp: this.xp,
          celebratedLevels: this.celebratedLevels,
        })
      )
    },
    recordAnswer(topicId: string, correct: boolean) {
      const m = this.mastery[topicId] ?? { correct: 0, seen: 0 }
      m.seen += 1
      if (correct) {
        m.correct += 1
        this.xp += XP_PER_CORRECT
      }
      this.mastery[topicId] = m
      this.persist()
    },
    recordRun(run: QuizRun) {
      this.history.push(run)
      this.persist()
    },
    markLevelCelebrated(levelId: string) {
      if (!this.celebratedLevels.includes(levelId)) {
        this.celebratedLevels.push(levelId)
        this.persist()
      }
    },
    reset() {
      this.mastery = {}
      this.history = []
      this.xp = 0
      this.celebratedLevels = []
      this.persist()
    },
  },
})
