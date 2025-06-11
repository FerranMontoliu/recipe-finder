import type { ReactElement } from 'react'
import { TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

type SearchBarProps = {
  query: string
  onQueryChange: (query: string) => void
  disabled?: boolean
}
export const SearchBar = ({
  query,
  onQueryChange,
  disabled = false,
}: SearchBarProps): ReactElement => (
  <TextInput
    placeholder="Search by recipe name..."
    leftSection={<IconSearch size={16} />}
    radius="md"
    size="md"
    w="100%"
    defaultValue={query}
    onChange={(event) => {
      onQueryChange(event.currentTarget.value)
    }}
    disabled={disabled}
  />
)
