import { defineConfig, devices } from '@playwright/test'

// Smoke e2e: the whole app is gated behind Supabase login + account approval,
// so these tests deliberately stay on the PUBLIC surface — they boot the built
// app against a dummy Supabase config and assert that unauthenticated users are
// correctly funnelled to /login and that the login page renders without errors.
// (Deeper, authenticated flows would need a live Supabase + seeded approved
// user; out of scope here.)
const PORT = 3000
const BASE_URL = `http://127.0.0.1:${PORT}`

// Dummy Supabase values: the @nuxtjs/supabase module only needs the env vars to
// be present to boot. No real backend is contacted by the smoke tests.
const dummyEnv = {
  SUPABASE_URL: 'https://dummy.supabase.co',
  SUPABASE_KEY: 'dummy-anon-key-for-smoke-tests',
  SITE_URL: BASE_URL,
}

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  // Serve the production build. Run `npm run build` first (CI does this).
  webServer: {
    command: 'node .output/server/index.mjs',
    url: BASE_URL,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
    env: { ...dummyEnv, NITRO_PORT: String(PORT), PORT: String(PORT) },
  },
})
