import { expect, test } from '@playwright/test'
import { getByTestId } from '../helpers.ts'

const URL = '/favorites'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Favorite recipes/)
})

test('has header', async ({ page }) => {
  await page.goto(URL)

  const headerTitle = getByTestId(page, 'header-title')
  await expect(headerTitle).toBeVisible()
  await expect(headerTitle).toHaveText('Favorite recipes')
})

test('is initially empty', async ({ page }) => {
  await page.goto(URL)

  const emptyRecipeGrid = getByTestId(page, 'recipe-grid--empty')
  await expect(emptyRecipeGrid).toBeVisible()
})

test('favoriting a recipe adds it to favorites', async ({ page }) => {
  // Navigate to a recipe page
  await page.goto('/recipe/53065') // Sushi recipe URL

  // Click the favorite button
  const favoriteButton = getByTestId(page, 'favorite-button')
  await expect(favoriteButton).toBeVisible()
  await favoriteButton.click()

  // Navigate to the favorites page
  await page.goto(URL)

  // Check if the recipe is now in the favorites
  const favoriteRecipe = getByTestId(page, 'recipe-grid-card').first()
  await expect(favoriteRecipe).toBeVisible()
  await expect(favoriteRecipe).toContainText('Sushi')
})
