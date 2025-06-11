import type { ReactElement } from 'react'
import { Select } from '@mantine/core'
import { useGetIngredients } from './hooks/use-get-ingredients.ts'
import type { Ingredient } from '../../../../../types'

interface IngredientsFilterControllerProps {
  selectedIngredient: string | null
  onIngredientSelect: (ingredient: string | null) => void
  disabled?: boolean
}
export const IngredientsFilterController = ({
  selectedIngredient,
  onIngredientSelect,
  disabled = false,
}: IngredientsFilterControllerProps): ReactElement => {
  const ingredientsResult = useGetIngredients()

  if (ingredientsResult.isLoading || ingredientsResult.isError) {
    return (
      <IngredientsFilter
        ingredients={[]}
        selectedIngredient={null}
        onIngredientSelect={() => {}}
        disabled
      />
    )
  }

  return (
    <IngredientsFilter
      ingredients={ingredientsResult.data ?? []}
      selectedIngredient={selectedIngredient}
      onIngredientSelect={onIngredientSelect}
      disabled={disabled}
    />
  )
}

interface IngredientsFilterProps {
  ingredients: Array<Ingredient>
  selectedIngredient: string | null
  onIngredientSelect: (ingredient: string | null) => void
  disabled?: boolean
}
const IngredientsFilter = ({
  ingredients,
  selectedIngredient,
  onIngredientSelect,
  disabled = false,
}: IngredientsFilterProps): ReactElement => {
  return (
    <Select
      searchable
      clearable
      placeholder="Select an ingredient"
      value={selectedIngredient}
      onChange={onIngredientSelect}
      data={ingredients.map(({ name }) => name)}
      disabled={disabled}
      radius="md"
      size="md"
      w="100%"
      test-id="ingredients-filter-select"
    />
  )
}
