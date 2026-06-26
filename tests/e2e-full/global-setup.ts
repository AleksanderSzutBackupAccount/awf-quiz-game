import { createClient } from '@supabase/supabase-js'
import {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  TEST_USER,
} from './local-supabase'

// Seeds an APPROVED test account before the full e2e run. New accounts are
// inactive by default (profiles.approved = false → RLS hides all content), so
// the flow test needs a pre-approved user to get past the /pending gate and
// load topics/questions. Idempotent: safe to run against an already-seeded DB.
export default async function globalSetup() {
  const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  // 1) Ensure the auth user exists (email pre-confirmed).
  let userId: string | undefined
  const created = await admin.auth.admin.createUser({
    email: TEST_USER.email,
    password: TEST_USER.password,
    email_confirm: true,
  })
  if (created.data?.user) {
    userId = created.data.user.id
  } else if (created.error && !/already|registered|exists/i.test(created.error.message)) {
    throw created.error
  }
  if (!userId) {
    const { data, error } = await admin.auth.admin.listUsers()
    if (error) throw error
    userId = data.users.find((u) => u.email === TEST_USER.email)?.id
  }
  if (!userId) throw new Error(`Could not resolve test user id for ${TEST_USER.email}`)

  // 2) Approve the profile (the insert trigger created it as unapproved).
  const { error: upErr } = await admin
    .from('profiles')
    .upsert({ user_id: userId, email: TEST_USER.email, approved: true }, { onConflict: 'user_id' })
  if (upErr) throw upErr

  // 3) Sanity: content must be present, otherwise the quiz has nothing to load.
  const { count, error: cErr } = await admin
    .from('topics')
    .select('id', { count: 'exact', head: true })
  if (cErr) throw cErr
  if (!count || count < 1) {
    throw new Error(
      'No topics in the local database. Run `supabase db reset` (or `supabase migration up`) before the full e2e run.'
    )
  }
}
