import { useQuery } from '@tanstack/react-query'
import {
  fetchRecipesByCategory,
  fetchRecipesByCuisine,
  fetchRecipesByIngredient,
  fetchRecipesByQuery,
} from '../../../api'

export const useGetRecipes = (args: {
  query: string
  cuisine: string | null
  ingredient: string | null
  category: string | null
}) => {
  const { query, cuisine, ingredient, category } = args
  return useQuery({
    queryKey: ['recipes', args],
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
  })
}
