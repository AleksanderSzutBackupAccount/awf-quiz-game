import { describe, it, expect } from 'vitest'
import { topics } from '~/content/topics'
import { categories } from '~/content/categories'
import { specializations } from '~/content/specializations'
import type { Question } from '~/content/types'

// The knowledge base is data-driven and shipped to the DB by a generated
// migration. A malformed topic (bad answer index, missing category, duplicate
// id) would surface as a broken quiz in production, so we assert the invariants
// the app and the quiz engine rely on.

const VALID_TRACKS = new Set(['wszyscy', 'hotelarstwo', 'przygodowa', 'rekreacja'])
const categoryIds = new Set(categories.map((c) => c.id))
const specIds = new Set(specializations.map((s) => s.id))

describe('content: topics base', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(topics)).toBe(true)
    expect(topics.length).toBeGreaterThan(0)
  })

  it('has globally unique topic ids', () => {
    const ids = topics.map((t) => t.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('every topic has the required string fields', () => {
    for (const t of topics) {
      expect(t.id, `id on ${t.id}`).toBeTruthy()
      expect(typeof t.title, `title on ${t.id}`).toBe('string')
      expect(t.title.length, `title on ${t.id}`).toBeGreaterThan(0)
      expect(typeof t.summary, `summary on ${t.id}`).toBe('string')
      expect(typeof t.number, `number on ${t.id}`).toBe('number')
    }
  })

  it('every topic has a valid track and a known category', () => {
    for (const t of topics) {
      expect(VALID_TRACKS.has(t.track), `track '${t.track}' on ${t.id}`).toBe(true)
      expect(categoryIds.has(t.category), `category '${t.category}' on ${t.id}`).toBe(true)
    }
  })

  it('every topic has a non-empty wiki and at least one question', () => {
    for (const t of topics) {
      expect(Array.isArray(t.wiki), `wiki on ${t.id}`).toBe(true)
      expect(t.wiki.length, `wiki on ${t.id}`).toBeGreaterThan(0)
      expect(Array.isArray(t.questions), `questions on ${t.id}`).toBe(true)
      expect(t.questions.length, `questions on ${t.id}`).toBeGreaterThan(0)
    }
  })
})

describe('content: questions', () => {
  const allQuestions: { topicId: string; q: Question }[] = topics.flatMap((t) =>
    t.questions.map((q) => ({ topicId: t.id, q }))
  )

  it('every question is a known type', () => {
    for (const { topicId, q } of allQuestions) {
      expect(['abcd', 'tf', 'flash'], `type on ${topicId}`).toContain(q.type)
    }
  })

  it('abcd questions have exactly 4 options and a correct index within range', () => {
    for (const { topicId, q } of allQuestions) {
      if (q.type !== 'abcd') continue
      expect(q.options.length, `options on ${topicId}: ${q.q}`).toBe(4)
      expect(q.options.every((o) => typeof o === 'string' && o.length > 0)).toBe(true)
      expect(Number.isInteger(q.correct), `correct on ${topicId}: ${q.q}`).toBe(true)
      expect(q.correct, `correct on ${topicId}: ${q.q}`).toBeGreaterThanOrEqual(0)
      expect(q.correct, `correct on ${topicId}: ${q.q}`).toBeLessThanOrEqual(3)
      expect(typeof q.explain, `explain on ${topicId}`).toBe('string')
    }
  })

  it('tf questions have a boolean answer and an explanation', () => {
    for (const { topicId, q } of allQuestions) {
      if (q.type !== 'tf') continue
      expect(typeof q.correct, `correct on ${topicId}: ${q.q}`).toBe('boolean')
      expect(q.explain.length, `explain on ${topicId}`).toBeGreaterThan(0)
    }
  })

  it('flash questions have a front and a back', () => {
    for (const { topicId, q } of allQuestions) {
      if (q.type !== 'flash') continue
      expect(q.front.length, `front on ${topicId}`).toBeGreaterThan(0)
      expect(q.back.length, `back on ${topicId}`).toBeGreaterThan(0)
    }
  })

  it('true/false answers are not overwhelmingly skewed to one value', () => {
    // Guards the deliberate rebalance: the correct answer must not be almost
    // always "Prawda" (or always "Fałsz").
    const tf = allQuestions.filter((x) => x.q.type === 'tf') as {
      q: { type: 'tf'; correct: boolean }
    }[]
    const trueCount = tf.filter((x) => x.q.correct).length
    const ratio = trueCount / tf.length
    expect(ratio).toBeGreaterThan(0.3)
    expect(ratio).toBeLessThan(0.7)
  })
})

describe('content: specializations & per-track counts', () => {
  it('every non-common topic belongs to a real specialization track', () => {
    for (const t of topics) {
      if (t.track === 'wszyscy') continue
      expect(specIds.has(t.track), `spec track on ${t.id}`).toBe(true)
    }
  })

  it('has the expected number of topics per track', () => {
    const byTrack = topics.reduce<Record<string, number>>((acc, t) => {
      acc[t.track] = (acc[t.track] ?? 0) + 1
      return acc
    }, {})
    expect(byTrack.wszyscy).toBe(52)
    expect(byTrack.hotelarstwo).toBe(5)
    expect(byTrack.przygodowa).toBe(29)
    expect(byTrack.rekreacja).toBe(30)
  })

  it('the Rekreacja specialization topics all use the rekreacja-spec category', () => {
    const rek = topics.filter((t) => t.track === 'rekreacja')
    expect(rek.length).toBe(30)
    expect(rek.every((t) => t.category === 'rekreacja-spec')).toBe(true)
    expect(rek.every((t) => t.id.startsWith('rek-'))).toBe(true)
  })
})
