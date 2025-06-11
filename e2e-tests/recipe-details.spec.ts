import { expect, test } from '@playwright/test'
import { getByTestId } from './helpers.ts'

const URL = '/recipe/53065'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Sushi/)
})

test('has header', async ({ page }) => {
  await page.goto(URL)

  const headerTitle = getByTestId(page, 'header-title')
  await expect(headerTitle).toBeVisible()
  await expect(headerTitle).toHaveText('Sushi')
})

test('has recipe details', async ({ page }) => {
  await page.goto(URL)

  const recipeDetails = getByTestId(page, 'recipe-details')
  await expect(recipeDetails).toBeVisible()

  await expect(recipeDetails).toContainText('Category')
  await expect(recipeDetails).toContainText('Cuisine')
  await expect(recipeDetails).toContainText('Ingredients')
  await expect(recipeDetails).toContainText('Steps')
})

test('has recipe image', async ({ page }) => {
  await page.goto(URL)

  const recipeImage = getByTestId(page, 'recipe-image')
  await expect(recipeImage).toBeVisible()

  const imageElement = recipeImage.locator('img')
  await expect(imageElement).toBeVisible()
})

test('has recipe ingredients list', async ({ page }) => {
  await page.goto(URL)

  const ingredientsList = getByTestId(page, 'recipe-ingredients-list')
  await expect(ingredientsList).toBeVisible()

  const ingredientsItems = getByTestId(
    ingredientsList,
    'recipe-ingredients-list-item',
  )
  await expect(ingredientsItems).toHaveCount(7)
})

test('has recipe steps list', async ({ page }) => {
  await page.goto(URL)

  const stepsList = getByTestId(page, 'recipe-steps-list')
  await expect(stepsList).toBeVisible()

  const stepsItems = getByTestId(stepsList, 'recipe-steps-list-item')
  await expect(stepsItems).toHaveCount(22)
})

test('the recipe can be favorited and un-favorited', async ({ page }) => {
  await page.goto(URL)

  const favoriteButton = getByTestId(page, 'favorite-button')
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
