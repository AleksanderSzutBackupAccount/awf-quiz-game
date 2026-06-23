import { topics } from '~/content/topics'
import { categories, getCategory } from '~/content/categories'
import { specializations, getSpecialization } from '~/content/specializations'
import type { SpecializationId, Topic } from '~/content/types'

export function useContent() {
  const allTopics = topics
  const allCategories = categories
  const allSpecializations = specializations

  // Topics for a specialization = common ('wszyscy') + specialization-specific.
  const topicsBySpec = (spec: SpecializationId) =>
    allTopics
      .filter((t) => t.track === 'wszyscy' || t.track === spec)
      .sort((a, b) => a.number - b.number)

  const topicById = (id: string): Topic | undefined =>
    allTopics.find((t) => t.id === id)

  const categoriesForSpec = (spec: SpecializationId) => {
    const used = new Set(topicsBySpec(spec).map((t) => t.category))
    return allCategories.filter((c) => used.has(c.id))
  }

  const countQuestions = (t: Topic) =>
    t.questions.filter((q) => q.type !== 'flash').length

  return {
    allTopics,
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
