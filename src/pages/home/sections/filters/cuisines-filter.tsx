import type { ReactElement } from 'react'
import { Select } from '@mantine/core'
import { useGetCuisines } from '../../hooks/use-get-cuisines.ts'
import type { Cuisine } from '../../../../types/types.ts'

type CuisinesFilterControllerProps = {
  selectedCuisine: string | null
  onCuisineSelect: (ingredient: string | null) => void
  disabled?: boolean
}
export const CuisinesFilterController = ({
  selectedCuisine,
  onCuisineSelect,
  disabled = false,
}: CuisinesFilterControllerProps): ReactElement => {
  const cuisinesResult = useGetCuisines()

  if (cuisinesResult.isLoading || cuisinesResult.isError) {
    return (
      <CuisinesFilter
        cuisines={[]}
        selectedCuisine={null}
        onCuisineSelect={() => {}}
        disabled
      />
    )
  }

  return (
    <CuisinesFilter
      cuisines={cuisinesResult.data ?? []}
      selectedCuisine={selectedCuisine}
      onCuisineSelect={onCuisineSelect}
      disabled={disabled}
    />
  )
}

type CuisinesFilterProps = {
  cuisines: Array<Cuisine>
  selectedCuisine: string | null
  onCuisineSelect: (cuisine: string | null) => void
  disabled?: boolean
}
const CuisinesFilter = ({
  cuisines,
  selectedCuisine,
  onCuisineSelect,
  disabled = false,
}: CuisinesFilterProps): ReactElement => {
  return (
    <Select
      searchable
      clearable
      placeholder="Select a cuisine"
      value={selectedCuisine}
      onChange={onCuisineSelect}
      data={cuisines.map(({ name }) => name)}
      disabled={disabled}
      radius="md"
      size="md"
      w="100%"
    />
  )
}
