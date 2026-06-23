import { useContent } from '~/composables/useContent'
import { useProgressStore } from '~/stores/progress'
import type { SpecializationId, Topic } from '~/content/types'

export type LevelState = 'locked' | 'unlocked' | 'completed'

export interface Level {
  id: string // stable: `${spec}:${category}`
  index: number
  number: number // 1-based for display
  categoryId: string
  title: string
  icon: string
  topics: Topic[]
  masteredCount: number
  total: number
  state: LevelState
  isCurrent: boolean
}

/**
 * Builds the gamified learning path for a specialization:
 * topics grouped into ordered levels (by category), with locked/unlocked/completed
 * state derived from mastery. A level unlocks when the previous one is completed.
 */
export function useLevels(spec: Ref<SpecializationId | null>) {
  const { topicsBySpec, categoriesForSpec, getCategory } = useContent()
  const progress = useProgressStore()

  const levels = computed<Level[]>(() => {
    if (!spec.value) return []
    const cats = categoriesForSpec(spec.value) // already in global category order
    const topics = topicsBySpec(spec.value)

    // first pass: build raw levels
    const raw = cats.map((cat, i) => {
      const catTopics = topics.filter((t) => t.category === cat.id)
      const masteredCount = progress.masteredCount(catTopics.map((t) => t.id))
      return {
        id: `${spec.value}:${cat.id}`,
        index: i,
        number: i + 1,
        categoryId: cat.id,
        title: cat.name,
        icon: cat.icon,
        topics: catTopics,
        masteredCount,
        total: catTopics.length,
        completed: catTopics.length > 0 && masteredCount === catTopics.length,
      }
    })

    // second pass: derive lock/unlock/current state
    let currentAssigned = false
    return raw.map((lvl, i) => {
      const prevCompleted = i === 0 || raw[i - 1]!.completed
      let state: LevelState
      if (lvl.completed) state = 'completed'
      else if (prevCompleted) state = 'unlocked'
      else state = 'locked'

      const isCurrent = !currentAssigned && state === 'unlocked'
      if (isCurrent) currentAssigned = true

      return { ...lvl, state, isCurrent }
    })
  })

  const completedLevels = computed(() => levels.value.filter((l) => l.state === 'completed'))
  const totalTopics = computed(() => levels.value.reduce((n, l) => n + l.total, 0))
  const masteredTopics = computed(() =>
    levels.value.reduce((n, l) => n + l.masteredCount, 0)
  )

  return { levels, completedLevels, totalTopics, masteredTopics, getCategory }
}
