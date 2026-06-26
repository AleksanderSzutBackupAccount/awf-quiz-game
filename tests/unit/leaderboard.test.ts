import { describe, it, expect } from 'vitest'
import { medalFor, computeOvertaken, type LeaderRow } from '~/utils/leaderboard'

describe('medalFor', () => {
  it('returns medals for the podium and nothing beyond', () => {
    expect(medalFor(0)).toBe('🥇')
    expect(medalFor(1)).toBe('🥈')
    expect(medalFor(2)).toBe('🥉')
    expect(medalFor(3)).toBe('')
    expect(medalFor(99)).toBe('')
  })
})

describe('computeOvertaken', () => {
  const rows: LeaderRow[] = [
    { display_name: 'Ala', xp: 100, is_me: false },
    { display_name: 'Bartek', xp: 70, is_me: false },
    { display_name: 'Me', xp: 65, is_me: true },
    { display_name: 'Celina', xp: 50, is_me: false },
  ]

  it('lists people who were ahead and are now behind', () => {
    // climbed from 60 to 90: passes Bartek (70) but not Ala (100)
    expect(computeOvertaken(rows, 60, 90)).toEqual(['Bartek'])
  })

  it('returns empty when xp did not increase', () => {
    expect(computeOvertaken(rows, 90, 90)).toEqual([])
    expect(computeOvertaken(rows, 90, 80)).toEqual([])
  })

  it('never includes self, even when leaping past everyone', () => {
    const result = computeOvertaken(rows, 10, 200)
    expect(result).not.toContain('Me')
    // everyone else who sat between 10 and 200 xp, in leaderboard order
    expect(result).toEqual(['Ala', 'Bartek', 'Celina'])
  })
})
