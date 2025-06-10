import { type ReactElement } from 'react'
import { Alert, Center, Container, Loader, Stack } from '@mantine/core'
import { Header } from './sections/header.tsx'
import { SearchBar } from './sections/search-bar.tsx'
import { useGetRecipes } from '../../hooks/use-get-recipes.ts'
import { useDebouncedState } from '@mantine/hooks'
import { RecipeGrid } from './sections/recipe-grid/recipe-grid.tsx'
import { IconInfoCircle } from '@tabler/icons-react'

export const HomePage = (): ReactElement => {
  const [debouncedQueryString, setDebouncedQueryString] =
    useDebouncedState<string>('', 200)

  const getRecipesResult = useGetRecipes(debouncedQueryString)

  const recipes = getRecipesResult.data ?? []

  return (
    <Container>
      <Stack justify="center" align="center" gap="16px">
        <Header />

        <SearchBar
          query={debouncedQueryString}
          onQueryChange={setDebouncedQueryString}
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
    </Container>
  )
}
