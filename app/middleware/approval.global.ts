/**
 * Access gate: a logged-in user without an approved profile may only see
 * /pending. Approved users are kept out of /pending. Public auth routes pass.
 */
export default defineNuxtRouteMiddleware(async (to) => {
  const PUBLIC = ['/login', '/confirm']
  if (PUBLIC.includes(to.path)) return

  const user = useSupabaseUser()
  if (!user.value) return // @nuxtjs/supabase middleware handles redirect to /login

  const supabase = useSupabaseClient()
  const { data: sessionData } = await supabase.auth.getSession()
  const uid = sessionData.session?.user?.id
  if (!uid) return

  const { data } = await supabase
    .from('profiles')
    .select('approved')
    .eq('user_id', uid)
    .maybeSingle()
  const approved = !!data?.approved

  if (to.path === '/pending') {
    if (approved) return navigateTo('/')
    return
  }
  if (!approved) return navigateTo('/pending')
})
