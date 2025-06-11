import { useQuery } from '@tanstack/react-query'
import { getRecipesResponseDecoder } from '../../../types/decoders.ts'
import type { Recipe } from '../../../types/types.ts'

const API_BASE = 'https://www.themealdb.com/api/json/v1/1'

const decodeResult = async (res: Response): Promise<Recipe[]> => {
  const json = await res.json()
  const decoded = getRecipesResponseDecoder.validate(json)

  if (decoded.type === 'error') {
    console.error('Decoding failed:', decoded.error)
    return []
  }

  return decoded.data
}

const fetchRecipesByQuery = async (query: string): Promise<Recipe[]> => {
  const url = `${API_BASE}/search.php?s=${query}`
  const recipes = await fetch(url).then((result) => decodeResult(result))

  return recipes
}

const fetchRecipesByCuisine = async (
  cuisine: string,
): Promise<Recipe[]> => {
  const url = `${API_BASE}/filter.php?a=${cuisine}`
  const recipes = await fetch(url).then((result) => decodeResult(result))

  return recipes
}

const fetchRecipesByIngredient = async (
  query: string,
): Promise<Recipe[]> => {
  const url = `${API_BASE}/filter.php?i=${query}`
  const recipes = await fetch(url).then((result) => decodeResult(result))

  return recipes
}

const fetchRecipesByCategory = async (
  query: string,
): Promise<Recipe[]> => {
  const url = `${API_BASE}/filter.php?c=${query}`
  const recipes = await fetch(url).then((result) => decodeResult(result))

  return recipes
}

export const useGetRecipes = ({
  query,
  cuisine,
  ingredient,
  category,
}: {
  query: string
  cuisine: string | null
  ingredient: string | null
  category: string | null
}) => {
  return useQuery({
    queryKey: ['recipes', { query, cuisine, ingredient, category }],
    queryFn: () => {
      if (cuisine !== null) {
        return fetchRecipesByCuisine(cuisine)
      }

      if (ingredient !== null) {
        return fetchRecipesByIngredient(ingredient)
      }

      if (category !== null) {
        return fetchRecipesByCategory(category)
      }

      return fetchRecipesByQuery(query)
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
