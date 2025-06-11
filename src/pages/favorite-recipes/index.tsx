import type { ReactElement } from 'react'
import { Header } from './sections/header.tsx'
import { Stack } from '@mantine/core'
import { RecipeGrid } from '../../components/recipe-grid/recipe-grid.tsx'
import { getFavoriteRecipes } from '../../utils/favorite-utils.ts'

export const FavoriteRecipesPage = (): ReactElement => {
  const favoriteRecipes = getFavoriteRecipes()

  return (
    <Stack justify="center" align="center" gap="16px">
      <Header />

      <RecipeGrid recipes={favoriteRecipes} />
    </Stack>
  )
}
