import type { ReactElement } from 'react'
import { Select } from '@mantine/core'
import { useGetCategories } from '../../hooks/use-get-categories.ts'
import type { Category } from '../../../../types/types.ts'

interface CategoriesFilterControllerProps {
  selectedCategory: string | null
  onCategorySelect: (category: string | null) => void
  disabled?: boolean
}
export const CategoriesFilterController = ({
  selectedCategory,
  onCategorySelect,
  disabled = false,
}: CategoriesFilterControllerProps): ReactElement => {
  const categoriesResult = useGetCategories()

  if (categoriesResult.isLoading || categoriesResult.isError) {
    return (
      <CategoriesFilter
        categories={[]}
        selectedCategory={null}
        onCategorySelect={() => {}}
        disabled
      />
    )
  }

  return (
    <CategoriesFilter
      categories={categoriesResult.data ?? []}
      selectedCategory={selectedCategory}
      onCategorySelect={onCategorySelect}
      disabled={disabled}
    />
  )
}

interface CategoriesFilterProps {
  categories: Category[]
  selectedCategory: string | null
  onCategorySelect: (category: string | null) => void
  disabled?: boolean
}
const CategoriesFilter = ({
  categories,
  selectedCategory,
  onCategorySelect,
  disabled = false,
}: CategoriesFilterProps): ReactElement => {
  return (
    <Select
      searchable
      clearable
      placeholder="Select a category"
      value={selectedCategory}
      onChange={onCategorySelect}
      data={categories.map(({ name }) => name)}
      disabled={disabled}
      radius="md"
      size="md"
      w="100%"
    />
  )
}
