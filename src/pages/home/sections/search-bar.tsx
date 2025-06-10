import type { ReactElement } from 'react'
import { TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

type SearchBarProps = {
  query: string
  onQueryChange: (query: string) => void
}
export const SearchBar = ({
  query,
  onQueryChange,
}: SearchBarProps): ReactElement => (
  <TextInput
    placeholder="Search by recipe name or ingredient..."
    leftSection={<IconSearch size={16} />}
    radius="md"
    size="md"
    w="100%"
    value={query}
    onChange={(event) => {
      onQueryChange(event.currentTarget.value)
    }}
  />
)
