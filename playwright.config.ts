import { defineConfig, devices } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import { APP_PORT, APP_URL, SUPABASE_URL, SUPABASE_ANON_KEY } from './tests/e2e-full/local-supabase'

// All e2e runs against a LOCAL Supabase (`supabase start`). The app needs a
// reachable backend to server-render at all (an unreachable/dummy Supabase
// makes SSR throw), so both the public-surface smoke specs (tests/e2e) and the
// full authenticated journey (tests/e2e-full) share one real backend.
// global-setup seeds an approved test user used by the journey test.
export default defineConfig({
  testDir: './tests',
  testMatch: ['e2e/**/*.spec.ts', 'e2e-full/**/*.spec.ts'],
  globalSetup: fileURLToPath(new URL('./tests/e2e-full/global-setup.ts', import.meta.url)),
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: APP_URL,
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  // Serve the production build (built against the local Supabase). CI builds
  // first; locally run `npm run build` with the local SUPABASE_URL/KEY first.
  webServer: {
    command: 'node .output/server/index.mjs',
    url: APP_URL,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
    env: {
      SUPABASE_URL,
      SUPABASE_KEY: SUPABASE_ANON_KEY,
      SITE_URL: APP_URL,
      NITRO_PORT: String(APP_PORT),
      PORT: String(APP_PORT),
    },
  },
})
