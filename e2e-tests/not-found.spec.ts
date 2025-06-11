import { expect, test } from '@playwright/test'

const URL = 'https://localhost:5173/this-is-a-random-url'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Page not found/)
})

test('has content', async ({ page }) => {
  await page.goto(URL)

  const notFoundPageContainer = page.locator('not-found-page')
  await expect(notFoundPageContainer).toBeVisible()
})
