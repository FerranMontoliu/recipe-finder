import { getRecipesResponseDecoder, type Recipe } from '../types'
import { API_BASE } from './consts.ts'

const decodeResult = async (res: Response): Promise<Array<Recipe>> => {
  const json: unknown = await res.json()
  const decoded = getRecipesResponseDecoder.validate(json)

  if (decoded.type === 'error') {
    console.error('Decoding failed:', decoded.error)
    return []
  }

  return decoded.data
}

export const fetchRecipesByQuery = async (
  query: string,
): Promise<Array<Recipe>> => {
  const url = `${API_BASE}/search.php?s=${query}`
  const recipes = await fetch(url).then((result) => decodeResult(result))

  return recipes
}

export const fetchRecipesByCuisine = async (
  cuisine: string,
): Promise<Array<Recipe>> => {
  const url = `${API_BASE}/filter.php?a=${cuisine}`
  const recipes = await fetch(url).then((result) => decodeResult(result))

  return recipes
}

export const fetchRecipesByIngredient = async (
  query: string,
): Promise<Array<Recipe>> => {
  const url = `${API_BASE}/filter.php?i=${query}`
  const recipes = await fetch(url).then((result) => decodeResult(result))

  return recipes
}

export const fetchRecipesByCategory = async (
  query: string,
): Promise<Array<Recipe>> => {
  const url = `${API_BASE}/filter.php?c=${query}`
  const recipes = await fetch(url).then((result) => decodeResult(result))

  return recipes
}
