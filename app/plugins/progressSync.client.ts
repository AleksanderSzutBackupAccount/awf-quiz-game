import { mergeProgress, type ProgressSnap } from '~/utils/progressMerge'
import { useProgressStore } from '~/stores/progress'
import { useTopicsStore } from '~/stores/topics'

/**
 * Syncs the learning-progress store with Supabase (table user_progress).
 * On login: pull the cloud copy, merge with local (keep the best of both),
 * then push the merged result. While logged in: push debounced on changes.
 */
export default defineNuxtPlugin(() => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()
  const progress = useProgressStore()

  let ready = false
  let debounce: ReturnType<typeof setTimeout> | null = null

  // Reliable authenticated user id (useSupabaseUser().id can be empty right after load).
  async function authUid(): Promise<string | null> {
    const { data } = await supabase.auth.getSession()
    return data.session?.user?.id ?? null
  }

  const snapshot = (): ProgressSnap => ({
    mastery: progress.mastery,
    history: progress.history,
    xp: progress.xp,
    xpBySpec: progress.xpBySpec,
    celebratedLevels: progress.celebratedLevels,
  })

  async function push(snap: ProgressSnap) {
    const uid = await authUid()
    if (!uid) return
    const { error } = await supabase
      .from('user_progress')
      .upsert({ user_id: uid, data: snap }, { onConflict: 'user_id' })
    if (error) console.error('[progressSync] push failed:', error.message)
  }

  async function pullMergePush() {
    const uid = await authUid()
    if (!uid) return
    progress.setUser(uid) // load this account's local cache (per-user key)
    const { data } = await supabase
      .from('user_progress')
      .select('data')
      .eq('user_id', uid)
      .maybeSingle()
    const merged = mergeProgress(snapshot(), (data?.data as Partial<ProgressSnap>) ?? {})
    progress.applySnapshot(merged)
    await push(merged)
    ready = true
  }

  watch(
    user,
    async (u, prev) => {
      if (u && !prev) {
        ready = false
        await pullMergePush()
      } else if (!u && prev) {
        ready = false
        progress.clearUser()
        useTopicsStore().clear()
      }
    },
    { immediate: true }
  )

  progress.$subscribe(() => {
    if (!ready || !user.value) return
    if (debounce) clearTimeout(debounce)
    debounce = setTimeout(() => push(snapshot()), 1500)
  })
})
