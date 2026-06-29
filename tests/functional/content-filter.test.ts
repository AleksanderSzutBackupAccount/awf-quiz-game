import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useContent } from '~/composables/useContent'
import { useTopicsStore } from '~/stores/topics'
import { topics } from '~/content/topics'
import type { TopicMeta } from '~/content/types'

// useContent derives the per-specialization topic list from the metadata the
// topics store fetched from Supabase. We seed that store from the real content
// so the filtering logic is exercised against the actual data shape.

function metaFromTopics(): TopicMeta[] {
  return topics.map((t) => ({
    id: t.id,
    track: t.track,
    category: t.category,
    number: t.number,
    title: t.title,
    summary: t.summary,
    abcdCount: t.questions.filter((q) => q.type === 'abcd').length,
    tfCount: t.questions.filter((q) => q.type === 'tf').length,
    flashCount: t.questions.filter((q) => q.type === 'flash').length,
  }))
}

describe('useContent.topicsBySpec', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    useTopicsStore().meta = metaFromTopics()
  })

  it('shows shared + specialization topics, never another spec', () => {
    const { topicsBySpec } = useContent()
    const rek = topicsBySpec('rekreacja')
    const tracks = new Set(rek.map((t) => t.track))
    expect(tracks).toEqual(new Set(['wszyscy', 'rekreacja']))
    // 55 shared + 30 rekreacja
    expect(rek.length).toBe(85)
    expect(rek.some((t) => t.track === 'przygodowa')).toBe(false)
    expect(rek.some((t) => t.track === 'hotelarstwo')).toBe(false)
  })

  it('gives each specialization its shared base plus its own topics', () => {
    const { topicsBySpec } = useContent()
    expect(topicsBySpec('hotelarstwo').length).toBe(90) // 55 + 35
    expect(topicsBySpec('przygodowa').length).toBe(84) // 55 + 29
    expect(topicsBySpec('rekreacja').length).toBe(85) // 55 + 30
  })

  it('sorts topics by number', () => {
    const { topicsBySpec } = useContent()
    const nums = topicsBySpec('rekreacja').map((t) => t.number)
    const sorted = [...nums].sort((a, b) => a - b)
    expect(nums).toEqual(sorted)
  })

  it('only surfaces categories actually used by the spec', () => {
    const { categoriesForSpec } = useContent()
    const cats = categoriesForSpec('rekreacja').map((c) => c.id)
    expect(cats).toContain('rekreacja-spec')
    // categories exclusive to other specs must not appear
    expect(cats).not.toContain('outdoor')
    expect(cats).not.toContain('hotelarstwo')
  })
})
