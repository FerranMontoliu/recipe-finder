const getFavorites = (): Record<string, true> => {
  const favorites = localStorage.getItem('favorites')
  return favorites ? JSON.parse(favorites) : {}
}

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

export const isFavorite = ({ recipeId }: { recipeId: string }): boolean => {
  const favorites = getFavorites()

  return favorites[recipeId] !== undefined
}
