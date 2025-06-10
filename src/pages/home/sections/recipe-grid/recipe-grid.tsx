import type { ReactElement } from 'react'
import { SimpleGrid } from '@mantine/core'
import { RecipeGridCard } from './recipe-grid-card.tsx'
import type { Recipe } from '../../../../types.ts'

type RecipeGridProps = {
  recipes: Array<Recipe>
}
export const RecipeGrid = ({ recipes }: RecipeGridProps): ReactElement => (
  <SimpleGrid
    cols={{
      base: 1,
      sm: 2,
      md: 3,
      lg: 4,
    }}
  >
    {recipes.map((recipe, index) => (
      <RecipeGridCard key={index} recipe={recipe} />
    ))}
  </SimpleGrid>
)
