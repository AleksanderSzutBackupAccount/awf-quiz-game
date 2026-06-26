import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProgressStore, XP_PER_CORRECT, XP_PER_LEVEL, RANKS } from '~/stores/progress'

// recordAnswer drives XP, per-specialization XP and topic mastery. persist()
// short-circuits off-client, so no localStorage is touched in tests.

describe('progress store recordAnswer', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('awards XP for a correct answer and tracks it per specialization', () => {
    const p = useProgressStore()
    p.recordAnswer('rek-folklor-kaszuby', true, 'rekreacja')
    expect(p.xp).toBe(XP_PER_CORRECT)
    expect(p.xpBySpec.rekreacja).toBe(XP_PER_CORRECT)
    expect(p.xpBySpec.przygodowa).toBe(0)
  })

  it('awards no XP for a wrong answer but still counts it as seen', () => {
    const p = useProgressStore()
    p.recordAnswer('rek-folklor-kaszuby', false, 'rekreacja')
    expect(p.xp).toBe(0)
    expect(p.mastery['rek-folklor-kaszuby']).toEqual({ correct: 0, seen: 1 })
  })

  it('accumulates mastery across repeated answers', () => {
    const p = useProgressStore()
    p.recordAnswer('t1', true, 'rekreacja')
    p.recordAnswer('t1', false, 'rekreacja')
    p.recordAnswer('t1', true, 'rekreacja')
    expect(p.mastery.t1).toEqual({ correct: 2, seen: 3 })
    expect(p.xp).toBe(XP_PER_CORRECT * 2)
  })

  it('raises the rank level once enough XP is earned', () => {
    const p = useProgressStore()
    const needed = XP_PER_LEVEL / XP_PER_CORRECT
    for (let i = 0; i < needed; i++) p.recordAnswer(`t${i}`, true, 'rekreacja')
    expect(p.xp).toBe(XP_PER_LEVEL)
    expect(p.rankLevel).toBe(1)
    expect(p.rankName).toBe(RANKS[1])
  })
})
