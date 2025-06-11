// hooks/useMealSearch.ts
import { useQuery } from '@tanstack/react-query'
import { getRecipesResponseDecoder } from '../../../types/decoders.ts'
import type { Recipe } from '../../../types/types.ts'

const API_BASE = 'https://www.themealdb.com/api/json/v1/1'

const decodeResult = async (res: Response): Promise<Recipe | null> => {
  const json = await res.json()
  const decoded = getRecipesResponseDecoder.validate(json)

  if (decoded.type === 'error') {
    console.error('Decoding failed:', decoded.error)
    return null
  }

  return decoded.data[0] ?? null
}

const fetchRecipeByIdQuery = async (
  recipeId: string,
): Promise<Recipe | null> => {
  const url = `${API_BASE}/lookup.php?i=${recipeId}`
  const recipe = await fetch(url).then((result) => decodeResult(result))

  return recipe
}

export const useGetRecipeById = (recipeId: string) => {
  return useQuery({
    queryKey: ['recipe-by-id', recipeId],
    queryFn: () => fetchRecipeByIdQuery(recipeId),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
