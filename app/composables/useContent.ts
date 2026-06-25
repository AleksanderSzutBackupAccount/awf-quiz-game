import { categories, getCategory } from '~/content/categories'
import { specializations, getSpecialization } from '~/content/specializations'
import { useTopicsStore } from '~/stores/topics'
import type { SpecializationId, Topic } from '~/content/types'

/**
 * Reads knowledge-base content from the topics store (fetched from Supabase).
 * Categories/specializations are non-sensitive labels and stay local.
 */
export function useContent() {
  const store = useTopicsStore()
  const allCategories = categories
  const allSpecializations = specializations

  // Topics for a specialization = common ('wszyscy') + specialization-specific.
  const topicsBySpec = (spec: SpecializationId) =>
    store.topics
      .filter((t) => t.track === 'wszyscy' || t.track === spec)
      .sort((a, b) => a.number - b.number)

  const topicById = (id: string): Topic | undefined =>
    store.topics.find((t) => t.id === id)

  const categoriesForSpec = (spec: SpecializationId) => {
    const used = new Set(topicsBySpec(spec).map((t) => t.category))
    return allCategories.filter((c) => used.has(c.id))
  }

  const countQuestions = (t: Topic) =>
    t.questions.filter((q) => q.type !== 'flash').length

  return {
    get allTopics() {
      return store.topics
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
