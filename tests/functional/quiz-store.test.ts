import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useQuizStore, type SessionItem } from '~/stores/quiz'
import type { AbcdQuestion } from '~/content/types'

function abcd(q: string, correct: number): AbcdQuestion {
  return { type: 'abcd', q, options: ['a', 'b', 'c', 'd'], correct, explain: 'x' }
}

function makeItems(n: number): SessionItem[] {
  return Array.from({ length: n }, (_, i) => ({
    topicId: `t${i}`,
    topicTitle: `Topic ${i}`,
    question: abcd(`Q${i}`, i % 4),
  }))
}

describe('quiz store session lifecycle', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('starts a session with one blank answer per item', () => {
    const quiz = useQuizStore()
    quiz.start({ mode: 'abcd', scopeLabel: 'all', specialization: 'rekreacja', items: makeItems(3) })
    expect(quiz.total).toBe(3)
    expect(quiz.answered).toBe(0)
    expect(quiz.score).toBe(0)
    expect(quiz.hasSession).toBe(true)
    expect(quiz.current?.question.q).toBe('Q0')
  })

  it('records answers and counts the score', () => {
    const quiz = useQuizStore()
    quiz.start({ mode: 'abcd', scopeLabel: 'all', specialization: 'rekreacja', items: makeItems(3) })
    quiz.answer({ given: 0, correct: true })
    quiz.next()
    quiz.answer({ given: 2, correct: false })
    expect(quiz.answered).toBe(2)
    expect(quiz.score).toBe(1)
  })

  it('navigates forward and finishes on the last item', () => {
    const quiz = useQuizStore()
    quiz.start({ mode: 'abcd', scopeLabel: 'all', specialization: 'rekreacja', items: makeItems(2) })
    expect(quiz.isLast).toBe(false)
    quiz.next()
    expect(quiz.isLast).toBe(true)
    expect(quiz.finished).toBe(false)
    quiz.next() // past the last → finished
    expect(quiz.finished).toBe(true)
  })

  it('does not move before the first item', () => {
    const quiz = useQuizStore()
    quiz.start({ mode: 'abcd', scopeLabel: 'all', specialization: 'rekreacja', items: makeItems(2) })
    quiz.prev()
    expect(quiz.index).toBe(0)
  })

  it('exposes only the wrong answers for "repeat mistakes"', () => {
    const quiz = useQuizStore()
    quiz.start({ mode: 'abcd', scopeLabel: 'all', specialization: 'rekreacja', items: makeItems(3) })
    quiz.answer({ given: 0, correct: true })
    quiz.next()
    quiz.answer({ given: 1, correct: false })
    quiz.next()
    quiz.answer({ given: 3, correct: false })
    const wrong = quiz.wrongItems
    expect(wrong.length).toBe(2)
    expect(wrong.map((w) => w.it.question.q)).toEqual(['Q1', 'Q2'])
  })

  it('clears the session', () => {
    const quiz = useQuizStore()
    quiz.start({ mode: 'abcd', scopeLabel: 'all', specialization: 'rekreacja', items: makeItems(2) })
    quiz.clear()
    expect(quiz.hasSession).toBe(false)
    expect(quiz.total).toBe(0)
  })
})
