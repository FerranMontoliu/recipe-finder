import { expect, test } from '@playwright/test'

const URL = 'https://localhost:5173/favorites'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Favorite recipes/)
})
