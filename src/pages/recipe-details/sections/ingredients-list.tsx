import type { ReactElement } from 'react'
import { Paper, Stack, Title } from '@mantine/core'

interface IngredientsListProps {
  ingredients: Array<{
    name: string
    measure: string
  }>
}
export const IngredientsList = ({
  ingredients,
}: IngredientsListProps): ReactElement => (
  <Paper test-id="recipe-ingredients-list">
    <Stack gap="16px">
      <Title order={2}>Ingredients</Title>

      {ingredients.map((item, index) => (
        <Stack key={index} gap="2px" test-id="recipe-ingredients-list-item">
          <strong>{item.name}</strong>
          <span>{item.measure}</span>
        </Stack>
      ))}
    </Stack>
  </Paper>
)
