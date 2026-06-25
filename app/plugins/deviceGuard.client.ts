import { getDeviceId } from '~/composables/useDeviceId'

/**
 * Enforces the "max 2 devices, evict oldest" policy on the client.
 * - On login: claims a device slot (register_device).
 * - Periodically + on focus/visibility: heartbeats (touch_device). If the slot
 *   was taken over by a newer device, the server returns false and we sign out.
 */
export default defineNuxtPlugin(() => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()
  const evicted = useState<boolean>('awf:evicted', () => false)
  const deviceId = getDeviceId()

  let timer: ReturnType<typeof setInterval> | null = null
  const HEARTBEAT_MS = 45_000

  async function register() {
    if (!user.value) return
    // Ensure the cookie session is attached before calling the authenticated RPC.
    await supabase.auth.getSession()
    const { data, error } = await supabase.rpc('register_device', {
      p_device_id: deviceId,
      p_user_agent: navigator.userAgent.slice(0, 300),
    })
    if (!error && data === false) await forceLogout()
  }

  async function heartbeat() {
    if (!user.value) return
    // Guard: never act on a result obtained without a valid session (would be a
    // false eviction). Only force logout when we are genuinely authenticated.
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return
    const { data, error } = await supabase.rpc('touch_device', { p_device_id: deviceId })
    if (!error && data === false) await forceLogout()
  }

  async function forceLogout() {
    stop()
    evicted.value = true
    await supabase.auth.signOut()
    await navigateTo('/login')
  }

  function start() {
    stop()
    timer = setInterval(heartbeat, HEARTBEAT_MS)
  }
  function stop() {
    if (timer) clearInterval(timer)
    timer = null
  }

  watch(
    user,
    async (u, prev) => {
      if (u && !prev) {
        evicted.value = false
        await register()
        start()
      } else if (!u && prev) {
        stop()
      }
    },
    { immediate: true }
  )

  if (import.meta.client) {
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) heartbeat()
    })
    window.addEventListener('focus', () => heartbeat())
  }
})
