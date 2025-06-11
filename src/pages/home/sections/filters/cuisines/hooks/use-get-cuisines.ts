import { useQuery } from '@tanstack/react-query'
import { fetchCuisines } from '../../../../../../api'

export const useGetCuisines = () => {
  return useQuery({
    queryKey: ['cuisines'],
    queryFn: () => fetchCuisines(),
  })
}
