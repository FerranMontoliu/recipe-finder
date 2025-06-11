import type { ReactElement } from 'react'
import { Center, SimpleGrid, Text } from '@mantine/core'
import { RecipeGridCard } from './recipe-grid-card.tsx'
import type { Recipe } from '../../types'

interface RecipeGridProps {
  recipes: Array<Recipe>
}
export const RecipeGrid = ({ recipes }: RecipeGridProps): ReactElement => {
  if (recipes.length === 0) {
    return (
      <Center w="100%" h="300px">
        <Text size="lg" c="dimmed" fw={500}>
          No recipes found for this search
        </Text>
      </Center>
    )
  }

  return (
    <SimpleGrid
      cols={{
        base: 1,
        sm: 2,
        md: 3,
      }}
      w="100%"
      spacing="8px"
      verticalSpacing="12px"
    >
      {recipes.map((recipe) => (
        <RecipeGridCard key={recipe.recipeId} recipe={recipe} />
      ))}
    </SimpleGrid>
  )
}
