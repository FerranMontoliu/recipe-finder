import { useQuery } from '@tanstack/react-query'
import { fetchIngredients } from '../../../../../../api'

export const useGetIngredients = () => {
  return useQuery({
    queryKey: ['ingredients'],
    queryFn: () => fetchIngredients(),
  })
}
