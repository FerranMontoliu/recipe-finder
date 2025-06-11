import { expect, test } from '@playwright/test'

const URL = '/favorites'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Favorite recipes/)
})
