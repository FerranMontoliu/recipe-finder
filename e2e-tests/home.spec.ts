import { expect, test } from '@playwright/test'
import { getByTestId } from './helpers.ts'

const URL = '/'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Recipe finder/)
})

test('has header', async ({ page }) => {
  await page.goto(URL)

  const headerTitle = getByTestId(page, 'header-title')
  await expect(headerTitle).toBeVisible()
  await expect(headerTitle).toHaveText('Recipe finder')
})

test('has filters', async ({ page }) => {
  await page.goto(URL)

  const filtersSection = getByTestId(page, 'filters-section')
  await expect(filtersSection).toBeVisible()

  const searchBar = getByTestId(filtersSection, 'search-bar-input')
  await expect(searchBar).toBeVisible()

  const ingredientsFilter = getByTestId(
    filtersSection,
    'ingredients-filter-select',
  )
  await expect(ingredientsFilter).toBeVisible()

  const cuisinesFilter = getByTestId(filtersSection, 'cuisines-filter-select')
  await expect(cuisinesFilter).toBeVisible()

  const categoriesFilter = getByTestId(
    filtersSection,
    'categories-filter-select',
  )
  await expect(categoriesFilter).toBeVisible()
})

test('has recipe grid', async ({ page }) => {
  await page.goto(URL)

  const recipeGrid = getByTestId(page, 'recipe-grid')
  await expect(recipeGrid).toBeVisible()

  const recipeGridCards = getByTestId(recipeGrid, 'recipe-grid-card')
  await expect(recipeGridCards).toHaveCount(25)
})

test('recipe grid cards are clickable', async ({ page }) => {
  await page.goto(URL)

  const recipeGrid = getByTestId(page, 'recipe-grid')
  const firstRecipeCard = getByTestId(recipeGrid, 'recipe-grid-card').first()

  await expect(firstRecipeCard).toBeVisible()
  await firstRecipeCard.click()

  await expect(page).toHaveURL(/\/recipe\/\d+/)
  await expect(page).not.toHaveTitle(/Recipe finder/)

  const recipeDetailsPage = getByTestId(page, 'recipe-details-page')
  await expect(recipeDetailsPage).toBeVisible()
})

test('recipe grid cards can be favorited and un-favorited', async ({
  page,
}) => {
  await page.goto(URL)

  const recipeGrid = getByTestId(page, 'recipe-grid')
  const firstRecipeCard = getByTestId(recipeGrid, 'recipe-grid-card').first()

  await expect(firstRecipeCard).toBeVisible()

  const favoriteButton = getByTestId(firstRecipeCard, 'favorite-button')
  await expect(favoriteButton).toBeVisible()

  // Click to favorite
  await favoriteButton.click()
  await expect(favoriteButton).toHaveClass(/favorited/)

  // Click to unfavorite
  await favoriteButton.click()
  await expect(favoriteButton).not.toHaveClass(/favorited/)
})

test('recipe grid shows empty state when no recipes found', async ({
  page,
}) => {
  await page.goto(URL)

  const recipeGrid = getByTestId(page, 'recipe-grid')
  await expect(recipeGrid).toBeVisible()

  const filtersSection = getByTestId(page, 'filters-section')
  const searchBar = getByTestId(filtersSection, 'search-bar-input')

  await searchBar.fill('nonexistentrecipe')

  const emptyState = getByTestId(page, 'recipe-grid--empty')
  await expect(emptyState).toBeVisible()
})
