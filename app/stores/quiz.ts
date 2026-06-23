import { defineStore } from 'pinia'
import type { Question, SpecializationId } from '~/content/types'

export type QuizMode = 'abcd' | 'tf' | 'flash'

export interface SessionItem {
  topicId: string
  topicTitle: string
  question: Question
}

export interface AnswerRecord {
  // For abcd: selected index. For tf: boolean. For flash: 'known' | 'review'.
  given: number | boolean | 'known' | 'review' | null
  correct: boolean // for flash, "known" counts as correct
}

interface QuizState {
  mode: QuizMode
  scopeLabel: string
  specialization: SpecializationId | null
  items: SessionItem[]
  answers: AnswerRecord[]
  index: number
  finished: boolean
}

export const useQuizStore = defineStore('quiz', {
  state: (): QuizState => ({
    mode: 'abcd',
    scopeLabel: '',
    specialization: null,
    items: [],
    answers: [],
    index: 0,
    finished: false,
  }),
  getters: {
    current: (s) => s.items[s.index] ?? null,
    total: (s) => s.items.length,
    answered: (s) => s.answers.filter((a) => a.given !== null).length,
    score: (s) => s.answers.filter((a) => a.correct).length,
    isLast: (s) => s.index >= s.items.length - 1,
    hasSession: (s) => s.items.length > 0,
    wrongItems: (s) =>
      s.items
        .map((it, i) => ({ it, ans: s.answers[i] }))
        .filter((x) => x.ans && !x.ans.correct),
  },
  actions: {
    start(payload: {
      mode: QuizMode
      scopeLabel: string
      specialization: SpecializationId
      items: SessionItem[]
    }) {
      this.mode = payload.mode
      this.scopeLabel = payload.scopeLabel
      this.specialization = payload.specialization
      this.items = payload.items
      this.answers = payload.items.map(() => ({ given: null, correct: false }))
      this.index = 0
      this.finished = false
    },
    answer(record: AnswerRecord) {
      if (!this.answers[this.index]) return
      this.answers[this.index] = record
    },
    next() {
      if (this.index < this.items.length - 1) this.index += 1
      else this.finished = true
    },
    prev() {
      if (this.index > 0) this.index -= 1
    },
    finish() {
      this.finished = true
    },
    clear() {
      this.items = []
      this.answers = []
      this.index = 0
      this.finished = false
    },
  },
})
