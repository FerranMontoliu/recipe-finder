import { useQuery } from '@tanstack/react-query'
import { fetchCategories } from '../../../../../../api'

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  })
}
