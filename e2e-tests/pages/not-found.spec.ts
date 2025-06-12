import { expect, test } from '@playwright/test'
import { getByTestId } from '../helpers.ts'

const URL = '/this-is-a-random-url'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Page not found/)
})

test('has content', async ({ page }) => {
  await page.goto(URL)

  const notFoundPageContainer = getByTestId(page, 'not-found-page')
  await expect(notFoundPageContainer).toBeVisible()
})
