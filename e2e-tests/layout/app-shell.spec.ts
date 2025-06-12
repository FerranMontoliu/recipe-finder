import { expect, test } from '@playwright/test'
import { getByTestId } from '../helpers.ts'

test('all pages have app shell', async ({ page }) => {
  for (const path of [
    '/',
    '/recipe/53065',
    '/favorites',
    '/this-is-a-random-url',
  ]) {
    await page.goto(path)

    const appShell = getByTestId(page, 'app-shell')
    await expect(appShell).toBeVisible()

    const header = getByTestId(appShell, 'app-shell-header')
    await expect(header).toBeVisible()

    const footer = getByTestId(appShell, 'app-shell-footer')
    await expect(footer).toBeVisible()
  }
})

test('clicking the header title navigates to home', async ({ page }) => {
  await page.goto('/favorites')

  const headerTitle = getByTestId(page, 'app-shell-header-title')
  await expect(headerTitle).toBeVisible()
  await expect(headerTitle).toHaveText('Recipe finder')

  // Click the header title
  await headerTitle.click()

  // Verify that the URL is still the home page
  await expect(page).toHaveURL('/')
})

test('clicking the header link navigates to favorites', async ({ page }) => {
  await page.goto('/')

  let headerLinksTestId = 'app-shell-header-links'
  try {
    const hamburgerMenu = getByTestId(page, 'app-shell-header-hamburger-button')
    await expect(hamburgerMenu).toBeVisible()
    await hamburgerMenu.click()

    // Wait for the animation to complete
    await page.waitForTimeout(500)
    headerLinksTestId += '--mobile'
  } catch {
    console.log('Hamburger menu not found, assuming desktop view')
    headerLinksTestId += '--desktop'
  }

  const headerLinks = getByTestId(page, headerLinksTestId)
  await expect(headerLinks).toBeVisible()

  const favoritesLink = getByTestId(
    headerLinks,
    'app-shell-header-favorites-link',
  )
  await expect(favoritesLink).toBeVisible()
  await expect(favoritesLink).toHaveText('Favorites')

  // Click the favorites link
  await favoritesLink.click()

  // Verify that the URL is the favorites page
  await expect(page).toHaveURL('/favorites')
})

test('clicking the header link navigates to home', async ({ page }) => {
  await page.goto('/favorites')

  let headerLinksTestId = 'app-shell-header-links'
  try {
    const hamburgerMenu = getByTestId(page, 'app-shell-header-hamburger-button')
    await expect(hamburgerMenu).toBeVisible()
    await hamburgerMenu.click()

    // Wait for the animation to complete
    await page.waitForTimeout(500)
    headerLinksTestId += '--mobile'
  } catch {
    console.log('Hamburger menu not found, assuming desktop view')
    headerLinksTestId += '--desktop'
  }

  const headerLinks = getByTestId(page, headerLinksTestId)
  await expect(headerLinks).toBeVisible()

  const homeLink = getByTestId(headerLinks, 'app-shell-header-home-link')
  await expect(homeLink).toBeVisible()
  await expect(homeLink).toHaveText('Home')

  // Click the home link
  await homeLink.click()

  // Verify that the URL is the home page
  await expect(page).toHaveURL('/')
})
