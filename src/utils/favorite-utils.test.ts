import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  getFavoriteRecipes,
  isFavorite,
  toggleFavorite,
} from './favorite-utils.ts'

import type { Recipe } from '../types'

const mockRecipe: Recipe = {
  recipeId: 'abc123',
  title: 'Chocolate Cake',
  ingredients: [
    {
      name: 'chocolate',
      measure: '200g',
    },
    {
      name: 'flour',
      measure: '100g',
    },
    {
      name: 'sugar',
      measure: '150g',
    },
  ],
  category: 'Dessert',
  cuisine: 'French',
  videoUrl: 'https://example.com/video',
  imageUrl: 'https://example.com/image.jpg',
  steps: ['Mix', 'Bake at 180C for 30 minutes', 'Cool and serve'],
}

describe('favorite utils', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  describe('getFavoriteRecipes', () => {
    it('returns an empty array when localStorage is empty', () => {
      expect(getFavoriteRecipes()).toEqual([])
    })

    it('returns recipes from localStorage', () => {
      const favorites = { [mockRecipe.recipeId]: mockRecipe }
      localStorage.setItem('favorites', JSON.stringify(favorites))
      expect(getFavoriteRecipes()).toEqual([mockRecipe])
    })
  })

  describe('toggleFavorite', () => {
    it('adds a recipe if it is not a favorite', async () => {
      await toggleFavorite({ recipe: mockRecipe })
      const stored = JSON.parse(localStorage.getItem('favorites')!)
      expect(stored[mockRecipe.recipeId]).toEqual(mockRecipe)
    })

    it('removes a recipe if it is already a favorite', async () => {
      const favorites = { [mockRecipe.recipeId]: mockRecipe }
      localStorage.setItem('favorites', JSON.stringify(favorites))

      await toggleFavorite({ recipe: mockRecipe })
      const stored = JSON.parse(localStorage.getItem('favorites')!)
      expect(stored[mockRecipe.recipeId]).toBeUndefined()
    })
  })

  describe('isFavorite', () => {
    it('returns true if recipe is favorited', () => {
      const favorites = { [mockRecipe.recipeId]: mockRecipe }
      localStorage.setItem('favorites', JSON.stringify(favorites))
      expect(isFavorite({ recipeId: mockRecipe.recipeId })).toBe(true)
    })

    it('returns false if recipe is not favorited', () => {
      expect(isFavorite({ recipeId: 'nonexistent' })).toBe(false)
    })
  })
})
