import { type ReactElement, useState } from 'react'
import { Alert, Center, Loader, Stack } from '@mantine/core'
import { Header } from './sections/header.tsx'
import { useGetRecipes } from './hooks/use-get-recipes.ts'
import { useDebouncedState } from '@mantine/hooks'
import { RecipeGrid } from '../../components/recipe-grid/recipe-grid.tsx'
import { IconInfoCircle } from '@tabler/icons-react'
import { Filters } from './sections/filters/filters.tsx'

export const HomePage = (): ReactElement => {
  const [debouncedQueryString, setDebouncedQueryString] =
    useDebouncedState<string>('', 200)
  const [cuisine, setCuisine] = useState<string | null>(null)
  const [ingredient, setIngredient] = useState<string | null>(null)
  const [category, setCategory] = useState<string | null>(null)

  const getRecipesResult = useGetRecipes({
    query: debouncedQueryString,
    cuisine,
    ingredient,
    category,
  })

  const recipes = getRecipesResult.data ?? []

  return (
    <Stack justify="center" align="center" gap="16px">
      <Header />

      <Filters
        query={debouncedQueryString}
        onQueryChange={setDebouncedQueryString}
        cuisine={cuisine}
        onCuisineSelect={setCuisine}
        ingredient={ingredient}
        onIngredientSelect={setIngredient}
        category={category}
        onCategorySelect={setCategory}
      />

      {getRecipesResult.isLoading ? (
        <Center w="100%" h="300px">
          <Loader />
        </Center>
      ) : getRecipesResult.isError ? (
        <Alert
          variant="light"
          color="red"
          title="Error"
          icon={<IconInfoCircle />}
        >
          There was an error fetching the recipes. Please try again later.
        </Alert>
      ) : (
        <RecipeGrid recipes={recipes} />
      )}
    </Stack>
  )
}
