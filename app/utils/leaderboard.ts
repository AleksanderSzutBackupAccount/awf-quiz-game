export interface LeaderRow {
  display_name: string
  xp: number
  is_me: boolean
}

/** Names the caller overtook: those who were ahead (xp > xpBefore) and are now
 *  behind (xp < xpAfter). Excludes self and ties. */
export function computeOvertaken(rows: LeaderRow[], xpBefore: number, xpAfter: number): string[] {
  if (xpAfter <= xpBefore) return []
  return rows
    .filter((r) => !r.is_me && r.xp > xpBefore && r.xp < xpAfter)
    .map((r) => r.display_name)
}
