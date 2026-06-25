import { defineStore } from 'pinia'

/** The caller's display name (for the leaderboard). Set via the set_display_name
 *  RPC; read from the user's own profile row (RLS: own row only). */
export const useProfileStore = defineStore('profile', {
  state: () => ({
    displayName: null as string | null,
    loaded: false,
  }),
  getters: {
    hasName: (s) => !!s.displayName,
  },
  actions: {
    async loadProfile() {
      const supabase = useSupabaseClient()
      const { data: { session } } = await supabase.auth.getSession()
      const uid = session?.user?.id
      if (!uid) return
      const { data } = await supabase
        .from('profiles')
        .select('display_name')
        .eq('user_id', uid)
        .maybeSingle()
      this.displayName = ((data as any)?.display_name as string | null) ?? null
      this.loaded = true
    },
    async setName(name: string) {
      const supabase = useSupabaseClient()
      const { data, error } = await supabase.rpc('set_display_name', { p_name: name })
      if (error) throw error
      this.displayName = (data as string | null) ?? null
      this.loaded = true
      return this.displayName
    },
    clear() {
      this.displayName = null
      this.loaded = false
    },
  },
})
