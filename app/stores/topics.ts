import { defineStore } from 'pinia'
import type { Question, Topic, TopicMeta } from '~/content/types'

/**
 * Knowledge-base content fetched from Supabase at runtime, on demand:
 *   - `meta`  : lightweight list (no wiki/questions) from the `topics_meta` view.
 *   - `full`  : per-topic cache of full topics (wiki + questions) via `get_topic`.
 *   - questions for a quiz are pulled per session via the `get_questions` RPC.
 * RLS only returns rows to authenticated + approved users, so the content is
 * never in the client bundle and is unavailable without an active account. The
 * whole base is never dumped in a single query.
 */
export const useTopicsStore = defineStore('topics', {
  state: () => ({
    meta: [] as TopicMeta[],
    full: {} as Record<string, Topic>,
    loaded: false,
    loading: false,
  }),
  actions: {
    /** Load the lightweight topic list (titles, categories, question counts). */
    async loadMeta(force = false) {
      if ((this.loaded || this.loading) && !force) return
      this.loading = true
      try {
        const supabase = useSupabaseClient()
        const { data, error } = await supabase
          .from('topics_meta')
          .select('id, track, category, number, title, summary, abcd_count, tf_count, flash_count')
          .order('number')
        if (error) throw error
        this.meta = (data ?? []).map((r: any) => ({
          id: r.id,
          track: r.track,
          category: r.category,
          number: r.number,
          title: r.title,
          summary: r.summary,
          abcdCount: r.abcd_count ?? 0,
          tfCount: r.tf_count ?? 0,
          flashCount: r.flash_count ?? 0,
        }))
        this.loaded = true
      } catch (e) {
        console.error('[topics] meta load failed:', (e as any)?.message ?? e)
      } finally {
        this.loading = false
      }
    },

    /** Load one full topic (wiki + questions) on demand, cached after first fetch. */
    async loadTopic(id: string): Promise<Topic | null> {
      if (this.full[id]) return this.full[id]!
      try {
        const supabase = useSupabaseClient()
        const { data, error } = await supabase.rpc('get_topic', { p_id: id })
        if (error) throw error
        const row = ((data ?? []) as Topic[])[0]
        if (!row) return null
        this.full[row.id] = row
        return row
      } catch (e) {
        console.error('[topics] topic load failed:', (e as any)?.message ?? e)
        return null
      }
    },

    /**
     * Load questions for a set of topics (quiz building). Batched so a single
     * request never pulls the whole base (the RPC caps each call at 60 ids).
     * Returns a map of topicId -> questions.
     */
    async loadQuestions(ids: string[]): Promise<Record<string, Question[]>> {
      const out: Record<string, Question[]> = {}
      if (!ids.length) return out
      const supabase = useSupabaseClient()
      const CHUNK = 50
      for (let i = 0; i < ids.length; i += CHUNK) {
        const slice = ids.slice(i, i + CHUNK)
        const { data, error } = await supabase.rpc('get_questions', { p_ids: slice })
        if (error) throw error
        for (const row of (data ?? []) as { id: string; questions: Question[] }[]) {
          out[row.id] = row.questions
        }
      }
      return out
    },

    clear() {
      this.meta = []
      this.full = {}
      this.loaded = false
    },
  },
})
