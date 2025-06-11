import type { Recipe } from '../types'

/**
 * Get favorites from localStorage
 *
 * @returns {Record<string, Recipe>} An object where keys are recipe IDs and values are Recipe objects that are favorites
 */
const getFavorites = (): Record<string, Recipe> => {
  const favorites = localStorage.getItem('favorites')
  return favorites ? JSON.parse(favorites) : {}
}

/**
 * Toggle favorite status of a recipe
 *
 * @param recipeId - The ID of the recipe to toggle
 *
 * @returns {Promise<void>} A promise that resolves when the favorite status is toggled
 *
 */
export const toggleFavorite = async ({
  recipe,
}: {
  recipe: Recipe
}): Promise<void> => {
  const { recipeId } = recipe
  const favorites = getFavorites()

  if (favorites[recipeId]) {
    delete favorites[recipeId]
  } else {
    favorites[recipeId] = recipe
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

/**
 * Check if a recipe is a favorite
 *
 * @param recipeId - The ID of the recipe to check
 *
 * @returns {boolean} True if the recipe is a favorite, false otherwise
 */
export const isFavorite = ({ recipeId }: { recipeId: string }): boolean => {
  const favorites = getFavorites()

  return favorites[recipeId] !== undefined
}
