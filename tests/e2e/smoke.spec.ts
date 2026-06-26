import { test, expect } from '@playwright/test'

// Smoke tests over the public surface of the app. They confirm the production
// build boots and that the Supabase auth gate funnels unauthenticated visitors
// to /login — without needing a real Supabase backend or an approved account.

test('login page renders its form', async ({ page }) => {
  await page.goto('/login')
  await expect(page.getByRole('heading', { name: 'Zaloguj się' })).toBeVisible()
  await expect(page.locator('input[type="email"]')).toBeVisible()
  await expect(page.locator('input[type="password"]')).toBeVisible()
})

test('unauthenticated root redirects to login', async ({ page }) => {
  await page.goto('/')
  await page.waitForURL(/\/login/)
  expect(page.url()).toContain('/login')
  await expect(page.getByRole('heading', { name: 'Zaloguj się' })).toBeVisible()
})

test('a protected route redirects to login when logged out', async ({ page }) => {
  await page.goto('/wiki')
  await page.waitForURL(/\/login/)
  expect(page.url()).toContain('/login')
})

test('login page has no fatal render error', async ({ page }) => {
  const pageErrors: string[] = []
  page.on('pageerror', (err) => pageErrors.push(err.message))
  await page.goto('/login')
  await expect(page.getByRole('heading', { name: 'Zaloguj się' })).toBeVisible()
  expect(pageErrors, pageErrors.join('\n')).toEqual([])
})
