import { type ReactElement, useState } from 'react'
import { Container, Stack } from '@mantine/core'
import { RecipeGrid } from './sections/recipe-grid/recipe-grid.tsx'
import { Header } from './sections/header.tsx'
import { SearchBar } from './sections/search-bar.tsx'

export const HomePage = (): ReactElement => {
  const [query, setQuery] = useState<string>('')

  return (
    <Container>
      <Stack justify="center" align="center" gap="16px">
        <Header />

        <SearchBar query={query} onQueryChange={setQuery} />

        <RecipeGrid recipes={[]} />
      </Stack>
    </Container>
  )
}
