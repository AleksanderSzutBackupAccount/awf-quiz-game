export interface LeaderRow {
  display_name: string
  xp: number
  is_me: boolean
}

/** Medal emoji for a podium position (0-indexed); '' beyond the top three. */
export const RANK_MEDALS = ['🥇', '🥈', '🥉'] as const
export function medalFor(index: number): string {
  return RANK_MEDALS[index] ?? ''
}

/** Names the caller overtook: those who were ahead (xp > xpBefore) and are now
 *  behind (xp < xpAfter). Excludes self and ties. */
export function computeOvertaken(rows: LeaderRow[], xpBefore: number, xpAfter: number): string[] {
  if (xpAfter <= xpBefore) return []
  return rows
    .filter((r) => !r.is_me && r.xp > xpBefore && r.xp < xpAfter)
    .map((r) => r.display_name)
}
