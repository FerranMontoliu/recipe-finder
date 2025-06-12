import { type ReactElement, useEffect, useState } from 'react'
import { ActionIcon, TextInput } from '@mantine/core'
import { IconSearch, IconX } from '@tabler/icons-react'

interface SearchBarProps {
  query: string
  onQueryChange: (query: string) => void
  disabled?: boolean
}

export const SearchBar = ({
  query,
  onQueryChange,
  disabled = false,
}: SearchBarProps): ReactElement => {
  const [inputValue, setInputValue] = useState(query)

  useEffect(() => {
    setInputValue(query)
  }, [query])

  const onChange = (newValue: string) => {
    setInputValue(newValue)
    onQueryChange(newValue)
  }

  const onClear = () => {
    setInputValue('')
    onQueryChange('')
  }

  return (
    <TextInput
      placeholder="Search by recipe name..."
      leftSection={<IconSearch size={16} />}
      rightSection={
        inputValue && !disabled ? (
          <ActionIcon
            variant="subtle"
            onClick={onClear}
            aria-label="Clear search"
          >
            <IconX size={16} />
          </ActionIcon>
        ) : null
      }
      radius="md"
      size="md"
      w="100%"
      value={inputValue}
      onChange={(event) => {
        onChange(event.currentTarget.value)
      }}
      disabled={disabled}
      test-id="search-bar-input"
    />
  )
}
