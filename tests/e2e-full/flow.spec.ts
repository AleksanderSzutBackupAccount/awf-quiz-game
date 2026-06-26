import { test, expect } from '@playwright/test'
import { TEST_USER } from './local-supabase'

// The whole journey, end to end, against a real (local) Supabase:
//   login → pick the Rekreacja specialization → open the knowledge base →
//   set up and play an ABCD quiz → land on the results screen.
// The approved test user is seeded by global-setup.ts.

test('full journey: login → Rekreacja → wiki → quiz → results', async ({ page }) => {
  // 1) LOG IN ----------------------------------------------------------------
  await page.goto('/login')
  await page.locator('input[type="email"]').fill(TEST_USER.email)
  await page.locator('input[type="password"]').fill(TEST_USER.password)
  await page.locator('button[type="submit"]').click()

  // Approved user → leaves /login for the specialization picker.
  await expect(page.getByRole('heading', { name: /Wybierz swoją/ })).toBeVisible({ timeout: 15_000 })

  // New accounts get a one-time "set your ranking name" modal that overlays the
  // page. Set a name so it persists (DB-backed) and won't reappear after the
  // full-reload navigations later in the flow. On reruns the name is already
  // set, so the modal never shows — hence the soft wait.
  const nameModal = page.locator('[aria-label="Ustaw nazwę"]')
  if (await nameModal.isVisible().catch(() => false)) {
    await nameModal.locator('input.name-input').fill('E2E Tester')
    await nameModal.getByRole('button', { name: 'Zapisz' }).click()
    await expect(nameModal).toBeHidden()
  }

  // 2) PICK THE REKREACJA SPECIALIZATION ------------------------------------
  const rekCard = page
    .locator('.spec-card')
    .filter({ has: page.getByRole('heading', { name: 'Rekreacja', exact: true }) })
  await expect(rekCard).toBeVisible()
  await rekCard.click()

  // Dashboard now reflects the chosen specialization.
  await expect(page.getByRole('heading', { name: /Rekreacja/ })).toBeVisible()
  await expect(page.getByRole('link', { name: /Rozpocznij quiz/ })).toBeVisible()

  // 3) KNOWLEDGE BASE (wiki) -------------------------------------------------
  await page.getByRole('link', { name: /Otwórz bazę wiedzy/ }).click()
  await page.waitForURL(/\/wiki$/)
  // Some Rekreacja-specialization article should be listed (titles start with
  // the topics we authored, e.g. nordic walking / folklor / antropometria).
  await expect(page.locator('body')).toContainText(/Rekreacja|antropometr|nordic|folklor/i)

  // 4) SET UP THE QUIZ -------------------------------------------------------
  await page.goto('/quiz')
  // The specialization-specific category must be offered as a scope chip —
  // proof the Rekreacja content actually loaded for this user.
  await expect(page.getByText('Rekreacja (specjalność)')).toBeVisible({ timeout: 15_000 })
  // ABCD mode + "whole base" scope are the defaults; just start.
  await page.getByRole('button', { name: /Rozpocznij/ }).click()
  await page.waitForURL(/\/quiz\/run/)

  // 5) PLAY THROUGH THE QUIZ -------------------------------------------------
  for (let i = 0; i < 20; i++) {
    // Settle into the next stable state: either the results page, or a freshly
    // mounted question with enabled options (the outgoing/revealed question's
    // options are disabled during the transition). This avoids racing the
    // in-flight navigation triggered by the final "Zobacz wyniki →" click.
    await page.waitForFunction(
      () =>
        window.location.pathname === '/quiz/results' ||
        !!document.querySelector('.opt:not([disabled])')
    )
    if (new URL(page.url()).pathname === '/quiz/results') break
    await page.locator('.opt:not([disabled])').first().click()
    await page.locator('.fb-next').click()
  }

  // 6) RESULTS ---------------------------------------------------------------
  await page.waitForURL(/\/quiz\/results/)
  await expect(page.locator('.ring-num')).toContainText('%')
  await expect(page.getByRole('heading', { name: /Przegląd odpowiedzi/ })).toBeVisible()
})
