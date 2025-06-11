import { type ReactElement } from 'react'
import { SearchBar } from './search-bar.tsx'
import { IngredientsFilterController } from './ingredients-filter.tsx'
import { SimpleGrid, Stack } from '@mantine/core'
import { CuisinesFilterController } from './cuisines-filter.tsx'
import { CategoriesFilterController } from './categories-filter.tsx'

interface FiltersProps {
  query: string
  onQueryChange: (query: string) => void

  ingredient: string | null
  onIngredientSelect: (ingredient: string | null) => void

  cuisine: string | null
  onCuisineSelect: (cuisine: string | null) => void

  category: string | null
  onCategorySelect: (category: string | null) => void

  disabled?: boolean
}
export const Filters = ({
  query,
  onQueryChange,
  ingredient,
  onIngredientSelect,
  cuisine,
  onCuisineSelect,
  category,
  onCategorySelect,
}: FiltersProps): ReactElement => {
  const disableSearchBar =
    ingredient !== null || cuisine !== null || category !== null
  const disableIngredientsFilter =
    query !== '' || cuisine !== null || category !== null
  const disableCuisinesFilter =
    query !== '' || ingredient !== null || category !== null
  const disableCategoriesFilter =
    query !== '' || ingredient !== null || cuisine !== null

  return (
    <Stack w="100%" gap="8px">
      <SearchBar
        query={query}
        onQueryChange={onQueryChange}
        disabled={disableSearchBar}
      />

      <SimpleGrid
        cols={{
          base: 1,
          sm: 3,
        }}
        w="100%"
        verticalSpacing="8px"
        spacing="8px"
      >
        <IngredientsFilterController
          selectedIngredient={ingredient}
          onIngredientSelect={onIngredientSelect}
          disabled={disableIngredientsFilter}
        />

        <CuisinesFilterController
          selectedCuisine={cuisine}
          onCuisineSelect={onCuisineSelect}
          disabled={disableCuisinesFilter}
        />

        <CategoriesFilterController
          selectedCategory={category}
          onCategorySelect={onCategorySelect}
          disabled={disableCategoriesFilter}
        />
      </SimpleGrid>
    </Stack>
  )
}
