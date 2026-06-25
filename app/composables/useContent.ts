import { categories, getCategory } from '~/content/categories'
import { specializations, getSpecialization } from '~/content/specializations'
import { useTopicsStore } from '~/stores/topics'
import type { SpecializationId, TopicMeta } from '~/content/types'

/**
 * Reads knowledge-base metadata from the topics store (fetched from Supabase as
 * a lightweight list). Full wiki bodies and questions are loaded on demand by
 * the store (loadTopic / loadQuestions), not here.
 * Categories/specializations are non-sensitive labels and stay local.
 */
export function useContent() {
  const store = useTopicsStore()
  const allCategories = categories
  const allSpecializations = specializations

  // Topics for a specialization = common ('wszyscy') + specialization-specific.
  const topicsBySpec = (spec: SpecializationId) =>
    store.meta
      .filter((t) => t.track === 'wszyscy' || t.track === spec)
      .sort((a, b) => a.number - b.number)

  const topicById = (id: string): TopicMeta | undefined =>
    store.meta.find((t) => t.id === id)

  const categoriesForSpec = (spec: SpecializationId) => {
    const used = new Set(topicsBySpec(spec).map((t) => t.category))
    return allCategories.filter((c) => used.has(c.id))
  }

  // Non-flash question count (abcd + tf), straight from the metadata counts.
  const countQuestions = (t: TopicMeta) => t.abcdCount + t.tfCount

  return {
    get allTopics() {
      return store.meta
    },
    allCategories,
    allSpecializations,
    topicsBySpec,
    topicById,
    categoriesForSpec,
    countQuestions,
    getCategory,
    getSpecialization,
  }
}
