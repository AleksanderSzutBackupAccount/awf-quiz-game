import { defineStore } from 'pinia'
import type { Topic } from '~/content/types'

/**
 * Knowledge-base content fetched from Supabase at runtime. RLS only returns rows
 * to authenticated + approved users, so the content is never in the client bundle
 * and is unavailable without an active account.
 */
export const useTopicsStore = defineStore('topics', {
  state: () => ({
    topics: [] as Topic[],
    loaded: false,
    loading: false,
  }),
  actions: {
    async load(force = false) {
      if ((this.loaded || this.loading) && !force) return
      this.loading = true
      try {
        const supabase = useSupabaseClient()
        const { data, error } = await supabase
          .from('topics')
          .select('id, track, category, number, title, summary, wiki, questions')
          .order('number')
        if (error) throw error
        this.topics = (data ?? []) as unknown as Topic[]
        this.loaded = true
      } catch (e) {
        console.error('[topics] load failed:', (e as any)?.message ?? e)
      } finally {
        this.loading = false
      }
    },
    clear() {
      this.topics = []
      this.loaded = false
    },
  },
})
