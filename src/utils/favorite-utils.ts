/**
 * Get favorites from localStorage
 *
 * @returns {Record<string, true>} An object where keys are recipe IDs and values are true
 */
const getFavorites = (): Record<string, true> => {
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
  recipeId,
}: {
  recipeId: string
}): Promise<void> => {
  const favorites = getFavorites()

  if (favorites[recipeId]) {
    delete favorites[recipeId]
  } else {
    favorites[recipeId] = true
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
