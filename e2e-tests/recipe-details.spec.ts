import { expect, test } from '@playwright/test'

const URL = '/recipe/53065'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Sushi/)
})

test('has header', async ({ page }) => {
  await page.goto(URL)

  const headerTitle = page.locator('header-title')
  await expect(headerTitle).toBeVisible()
  await expect(headerTitle).toHaveText('Sushi')
})

test('has recipe details', async ({ page }) => {
  await page.goto(URL)

  const recipeDetails = page.locator('recipe-details')
  await expect(recipeDetails).toBeVisible()

  await expect(recipeDetails).toContainText('Category')
  await expect(recipeDetails).toContainText('Cuisine')
  await expect(recipeDetails).toContainText('Ingredients')
  await expect(recipeDetails).toContainText('Steps')
})

test('has recipe image', async ({ page }) => {
  await page.goto(URL)

  const recipeImage = page.locator('recipe-image')
  await expect(recipeImage).toBeVisible()

  const imageElement = recipeImage.locator('img')
  await expect(imageElement).toBeVisible()
})

test('has recipe ingredients list', async ({ page }) => {
  await page.goto(URL)

  const ingredientsList = page.locator('recipe-ingredients-list')
  await expect(ingredientsList).toBeVisible()

  const ingredientsItems = ingredientsList.locator(
    'recipe-ingredients-list-item',
  )
  await expect(ingredientsItems).toHaveCount(7)
})

test('has recipe steps list', async ({ page }) => {
  await page.goto(URL)

  const stepsList = page.locator('recipe-steps-list')
  await expect(stepsList).toBeVisible()

  const stepsItems = stepsList.locator('recipe-steps-list-item')
  await expect(stepsItems).toHaveCount(22)
})

test('the recipe can be favorited and un-favorited', async ({ page }) => {
  await page.goto(URL)

  const favoriteButton = page.locator('favorite-button')
  await expect(favoriteButton).toBeVisible()

  // Initial state should be not favorited
  await expect(favoriteButton).toHaveText('Add to favorites')

  // Click to favorite
  await favoriteButton.click()
  await expect(favoriteButton).toHaveText('Favorited')

  // Click to un-favorite
  await favoriteButton.click()
  await expect(favoriteButton).toHaveText('Add to favorites')
})
