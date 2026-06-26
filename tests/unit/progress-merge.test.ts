import { describe, it, expect } from 'vitest'
import { mergeProgress } from '~/utils/progressMerge'

// mergeProgress is "keep the best of both" — used when a logged-in user's cloud
// progress meets their local progress. It must never lose XP or mastery.

describe('mergeProgress', () => {
  it('takes the max xp of local and server', () => {
    expect(mergeProgress({ xp: 30 }, { xp: 80 }).xp).toBe(80)
    expect(mergeProgress({ xp: 120 }, { xp: 80 }).xp).toBe(120)
  })

  it('merges xpBySpec per specialization including rekreacja', () => {
    const merged = mergeProgress(
      { xpBySpec: { hotelarstwo: 50, rekreacja: 10 } },
      { xpBySpec: { hotelarstwo: 20, przygodowa: 90, rekreacja: 40 } }
    )
    expect(merged.xpBySpec).toEqual({ hotelarstwo: 50, przygodowa: 90, rekreacja: 40 })
  })

  it('keeps the higher correct/seen counts per topic', () => {
    const merged = mergeProgress(
      { mastery: { a: { correct: 3, seen: 5 }, b: { correct: 1, seen: 1 } } },
      { mastery: { a: { correct: 1, seen: 8 } } }
    )
    expect(merged.mastery.a).toEqual({ correct: 3, seen: 8 })
    expect(merged.mastery.b).toEqual({ correct: 1, seen: 1 })
  })

  it('dedupes history by id and caps at 50 entries', () => {
    const server = Array.from({ length: 40 }, (_, i) => ({ id: `s${i}` }))
    const local = Array.from({ length: 40 }, (_, i) => ({ id: `l${i}` }))
    const dup = [{ id: 's0' }] // already in server
    const merged = mergeProgress({ history: [...local, ...dup] }, { history: server })
    expect(merged.history.length).toBe(50)
    const ids = merged.history.map((h) => h.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('unions celebratedLevels without duplicates', () => {
    const merged = mergeProgress(
      { celebratedLevels: ['x', 'y'] },
      { celebratedLevels: ['y', 'z'] }
    )
    expect([...merged.celebratedLevels].sort()).toEqual(['x', 'y', 'z'])
  })

  it('handles empty/partial snapshots without throwing', () => {
    const merged = mergeProgress({}, {})
    expect(merged.xp).toBe(0)
    expect(merged.history).toEqual([])
    expect(merged.mastery).toEqual({})
  })
})
