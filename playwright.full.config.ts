import { defineConfig, devices } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import { APP_PORT, APP_URL, SUPABASE_URL, SUPABASE_ANON_KEY } from './tests/e2e-full/local-supabase'

// FULL authenticated e2e: drives the whole user journey (login → choose the
// Rekreacja specialization → wiki → quiz → results) against a LOCAL Supabase
// with a seeded, approved test user. Heavier than the smoke suite — needs
// `supabase start` (Docker) and the content migrations applied. Runs on a
// separate port from the smoke server so the two never collide locally.
export default defineConfig({
  testDir: './tests/e2e-full',
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
