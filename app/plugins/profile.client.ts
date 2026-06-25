import { useProfileStore } from '~/stores/profile'

/** Loads the account's display name on login and clears it on logout. */
export default defineNuxtPlugin(() => {
  const user = useSupabaseUser()
  const profile = useProfileStore()

  watch(
    user,
    async (u, prev) => {
      if (u && !prev) await profile.loadProfile()
      else if (!u && prev) profile.clear()
    },
    { immediate: true }
  )
})
