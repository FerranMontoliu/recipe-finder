// hooks/useMealSearch.ts
import { useQuery } from '@tanstack/react-query'
import { getRecipesResponseDecoder } from '../types/decoders.ts'
import type { Recipe } from '../types/types.ts'

const API_BASE = 'https://www.themealdb.com/api/json/v1/1'

const buildUrls = (query: string) => [
  `${API_BASE}/search.php?s=${query}`, // Name
  `${API_BASE}/filter.php?i=${query}`, // Ingredient
  `${API_BASE}/filter.php?c=${query}`, // Category
  `${API_BASE}/filter.php?a=${query}`, // Area
]

const decodeGetRecipesResult = async (
  res: Response,
): Promise<Recipe[] | null> => {
  const json = await res.json()
  const decoded = getRecipesResponseDecoder.validate(json)

  if (decoded.type === 'error') {
    console.error('Decoding failed:', decoded.error)
    return []
  }

  return decoded.data.meals
}

const fetchRecipesByQuery = async (query: string): Promise<Array<Recipe>> => {
  const urls = buildUrls(query)

  const allRecipes = await Promise.all(
    urls.map((url) =>
      fetch(url).then((result) => decodeGetRecipesResult(result)),
    ),
  )

  // Flatten and deduplicate by recipeId
  const dedupedRecipes: Array<Recipe> = Object.values(
    allRecipes.flat().reduce((acc: Record<string, Recipe>, recipe) => {
      if (recipe && !acc[recipe.recipeId]) {
        acc[recipe.recipeId] = recipe
      }
      return acc
    }, {}),
  )

  return dedupedRecipes
}

export const useGetRecipes = (query: string) => {
  return useQuery({
    queryKey: ['recipes', query],
    queryFn: () => fetchRecipesByQuery(query),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
