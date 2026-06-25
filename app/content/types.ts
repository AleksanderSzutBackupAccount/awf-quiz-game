/** Choosable specializations. */
export type SpecializationId = 'hotelarstwo' | 'przygodowa'

/** Which study track a topic belongs to: common for everyone, or a specialization. */
export type TrackId = 'wszyscy' | SpecializationId

export interface Specialization {
  id: SpecializationId
  name: string
  short: string
  tagline: string
  description: string
  accent: string // gradient css
  icon: string // emoji / glyph
}

export interface Category {
  id: string
  name: string
  icon: string
}

export interface WikiBlock {
  heading?: string
  body?: string
  bullets?: string[]
}

export interface AbcdQuestion {
  type: 'abcd'
  q: string
  options: string[]
  correct: number // index 0-3
  explain: string
}

export interface TrueFalseQuestion {
  type: 'tf'
  q: string
  correct: boolean
  explain: string
}

export interface FlashQuestion {
  type: 'flash'
  front: string
  back: string
}

export type Question = AbcdQuestion | TrueFalseQuestion | FlashQuestion

export interface Topic {
  id: string
  /** 'wszyscy' = common for all specializations; otherwise specialization-specific. */
  track: TrackId
  category: string
  number: number
  title: string
  summary: string
  wiki: WikiBlock[]
  questions: Question[]
}

/**
 * Lightweight topic descriptor used for lists/navigation. Fetched from the
 * `topics_meta` view — it carries NO wiki bodies and NO question payloads, only
 * per-type question counts. The heavy `wiki`/`questions` are loaded on demand
 * (get_topic / get_questions) so the whole knowledge base is never dumped at once.
 */
export interface TopicMeta {
  id: string
  track: TrackId
  category: string
  number: number
  title: string
  summary: string
  abcdCount: number
  tfCount: number
  flashCount: number
}
