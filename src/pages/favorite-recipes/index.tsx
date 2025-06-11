import type { ReactElement } from 'react'
import { Header } from './sections/header.tsx'
import { Stack } from '@mantine/core'
import { RecipeGrid } from '../../components/recipe-grid/recipe-grid.tsx'
import { getFavoriteRecipes } from '../../utils/favorite-utils.ts'
import { useWindowTitle } from '../../hooks/use-window-title.ts'

export const FavoriteRecipesPage = (): ReactElement => {
  useWindowTitle('Favorite recipes')

  const favoriteRecipes = getFavoriteRecipes()

  return (
    <Stack
      justify="center"
      align="center"
      gap="16px"
      test-id="favorite-recipes-page"
    >
      <Header />

      <RecipeGrid recipes={favoriteRecipes} />
    </Stack>
  )
}
