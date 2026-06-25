// Pure merge of two progress snapshots — "keep the best of both". No Nuxt/Vue
// deps so it is unit-testable in isolation. Used by progressSync.client.ts.

export interface ProgressSnap {
  mastery: Record<string, { correct: number; seen: number }>
  history: any[]
  xp: number
  xpBySpec: Record<string, number>
  celebratedLevels: string[]
}

const SPECS = ['hotelarstwo', 'przygodowa'] as const

export function mergeProgress(
  local: Partial<ProgressSnap>,
  server: Partial<ProgressSnap>
): ProgressSnap {
  const mastery: ProgressSnap['mastery'] = { ...(server.mastery ?? {}) }
  for (const [id, m] of Object.entries(local.mastery ?? {})) {
    const s = mastery[id]
    mastery[id] = s
      ? { correct: Math.max(s.correct, m.correct), seen: Math.max(s.seen, m.seen) }
      : m
  }

  const seen = new Set<string>()
  const history: any[] = []
  for (const h of [...(server.history ?? []), ...(local.history ?? [])]) {
    if (h?.id && !seen.has(h.id)) {
      seen.add(h.id)
      history.push(h)
    }
  }

  const xpBySpec: Record<string, number> = {}
  for (const sp of SPECS) {
    xpBySpec[sp] = Math.max(local.xpBySpec?.[sp] ?? 0, server.xpBySpec?.[sp] ?? 0)
  }

  return {
    mastery,
    xp: Math.max(local.xp ?? 0, server.xp ?? 0),
    xpBySpec,
    celebratedLevels: Array.from(
      new Set([...(local.celebratedLevels ?? []), ...(server.celebratedLevels ?? [])])
    ),
    history: history.slice(-50),
  }
}
