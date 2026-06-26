import { describe, it, expect } from 'vitest'
import { rankNameForXp, RANKS, XP_PER_LEVEL, XP_PER_CORRECT } from '~/stores/progress'

// Rank/XP thresholds drive the gamified learning path. Importing the store
// module is safe: the exported helpers are pure and don't touch Supabase.

describe('rankNameForXp', () => {
  it('starts at the first rank with zero xp', () => {
    expect(rankNameForXp(0)).toBe(RANKS[0])
  })

  it('advances one rank per XP_PER_LEVEL', () => {
    expect(rankNameForXp(XP_PER_LEVEL)).toBe(RANKS[1])
    expect(rankNameForXp(XP_PER_LEVEL * 2)).toBe(RANKS[2])
  })

  it('clamps to the top rank for very high xp', () => {
    expect(rankNameForXp(XP_PER_LEVEL * 9999)).toBe(RANKS[RANKS.length - 1])
  })

  it('rounds down within a level band', () => {
    expect(rankNameForXp(XP_PER_LEVEL + XP_PER_CORRECT)).toBe(RANKS[1])
    expect(rankNameForXp(XP_PER_LEVEL - 1)).toBe(RANKS[0])
  })

  it('exposes sane constants', () => {
    expect(RANKS.length).toBeGreaterThan(1)
    expect(XP_PER_CORRECT).toBeGreaterThan(0)
    expect(XP_PER_LEVEL).toBeGreaterThan(0)
  })
})
