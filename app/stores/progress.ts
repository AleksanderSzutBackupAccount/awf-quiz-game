import { defineStore } from 'pinia'
import type { SpecializationId } from '~/content/types'

// localStorage cache is namespaced per account so progress never leaks between users.
const keyFor = (userId: string | null) => `awf:progress:${userId ?? 'guest'}`

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

/** Rank title for an arbitrary XP total (shared by the leaderboard views). */
export function rankNameForXp(xp: number): string {
  return RANKS[Math.min(RANKS.length - 1, Math.floor(xp / XP_PER_LEVEL))] ?? RANKS[0]!
}

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
  xpBySpec: Record<string, number>
  celebratedLevels: string[]
  hydrated: boolean
  userId: string | null
}

export const useProgressStore = defineStore('progress', {
  state: (): ProgressState => ({
    mastery: {},
    history: [],
    xp: 0,
    xpBySpec: { hotelarstwo: 0, przygodowa: 0, rekreacja: 0 },
    celebratedLevels: [],
    hydrated: false,
    userId: null,
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
    xpForSpec: (s) => (spec: SpecializationId) => s.xpBySpec[spec] ?? 0,
    isLevelCelebrated: (s) => (levelId: string) => s.celebratedLevels.includes(levelId),
  },
  actions: {
    hydrate() {
      if (this.hydrated || !import.meta.client) return
      try {
        const raw = localStorage.getItem(keyFor(this.userId))
        if (raw) {
          const parsed = JSON.parse(raw)
          this.mastery = parsed.mastery ?? {}
          this.history = parsed.history ?? []
          this.xp = parsed.xp ?? 0
          this.xpBySpec = parsed.xpBySpec ?? { hotelarstwo: 0, przygodowa: 0, rekreacja: 0 }
          this.celebratedLevels = parsed.celebratedLevels ?? []
        }
      } catch {
        /* ignore corrupt storage */
      }
      this.hydrated = true
    },
    // Bind progress to a logged-in account: load that account's local cache.
    setUser(userId: string) {
      if (this.userId === userId && this.hydrated) return
      this.userId = userId
      this.mastery = {}
      this.history = []
      this.xp = 0
      this.xpBySpec = { hotelarstwo: 0, przygodowa: 0, rekreacja: 0 }
      this.celebratedLevels = []
      this.hydrated = false
      this.hydrate()
    },
    // On logout: forget the account's progress from memory + cache key.
    clearUser() {
      this.userId = null
      this.mastery = {}
      this.history = []
      this.xp = 0
      this.xpBySpec = { hotelarstwo: 0, przygodowa: 0, rekreacja: 0 }
      this.celebratedLevels = []
      this.hydrated = false
    },
    persist() {
      if (!import.meta.client) return
      localStorage.setItem(
        keyFor(this.userId),
        JSON.stringify({
          mastery: this.mastery,
          history: this.history.slice(-50),
          xp: this.xp,
          xpBySpec: this.xpBySpec,
          celebratedLevels: this.celebratedLevels,
        })
      )
    },
    recordAnswer(topicId: string, correct: boolean, spec?: SpecializationId) {
      const m = this.mastery[topicId] ?? { correct: 0, seen: 0 }
      m.seen += 1
      if (correct) {
        m.correct += 1
        this.xp += XP_PER_CORRECT
        if (spec) this.xpBySpec[spec] = (this.xpBySpec[spec] ?? 0) + XP_PER_CORRECT
      }
      this.mastery[topicId] = m
      this.persist()
    },
    recordRun(run: QuizRun) {
      this.history.push(run)
      this.persist()
    },
    // Replace state from a (merged) snapshot — used by cloud sync.
    applySnapshot(s: Partial<Pick<ProgressState, 'mastery' | 'history' | 'xp' | 'xpBySpec' | 'celebratedLevels'>>) {
      if (s.mastery) this.mastery = s.mastery
      if (s.history) this.history = s.history
      if (typeof s.xp === 'number') this.xp = s.xp
      if (s.xpBySpec) this.xpBySpec = s.xpBySpec
      if (s.celebratedLevels) this.celebratedLevels = s.celebratedLevels
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
      this.xpBySpec = { hotelarstwo: 0, przygodowa: 0, rekreacja: 0 }
      this.celebratedLevels = []
      this.persist()
    },
  },
})
