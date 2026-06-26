// Connection details + test credentials for the FULL authenticated e2e run.
// These point at a LOCAL Supabase (`supabase start`). The anon/service keys are
// the standard local-development demo keys — identical on every local install
// and on CI's `supabase start`, so they are NOT secrets. All overridable by env.

export const SUPABASE_URL = process.env.SUPABASE_URL ?? 'http://127.0.0.1:54321'

export const SUPABASE_ANON_KEY =
  process.env.SUPABASE_KEY ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

export const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'

export const TEST_USER = {
  email: process.env.E2E_USER_EMAIL ?? 'e2e@awf.test',
  password: process.env.E2E_USER_PASSWORD ?? 'e2e-test-pass-123',
}

export const APP_PORT = Number(process.env.E2E_PORT ?? 3100)
export const APP_URL = `http://127.0.0.1:${APP_PORT}`
