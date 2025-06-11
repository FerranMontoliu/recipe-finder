import { useQuery } from '@tanstack/react-query'
import { getIngredientsResponseDecoder } from '../../../types/decoders.ts'
import type { Ingredient } from '../../../types/types.ts'

const API_BASE = 'https://www.themealdb.com/api/json/v1/1'

const decodeResult = async (res: Response): Promise<Ingredient[]> => {
  const json: unknown = await res.json()
  const decoded = getIngredientsResponseDecoder.validate(json)

  if (decoded.type === 'error') {
    console.error('Decoding failed:', decoded.error)
    return []
  }

  return decoded.data
}

const fetchIngredients = async (): Promise<Ingredient[]> => {
  const url = `${API_BASE}/list.php?i=list`
  const ingredients = await fetch(url).then((result) => decodeResult(result))

  return ingredients
}

export const useGetIngredients = () => {
  return useQuery({
    queryKey: ['ingredients'],
    queryFn: () => fetchIngredients(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
