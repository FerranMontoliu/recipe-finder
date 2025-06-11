import { getIngredientsResponseDecoder, type Ingredient } from '../types'
import { API_BASE } from './consts.ts'

const decodeResult = async (res: Response): Promise<Array<Ingredient>> => {
  const json: unknown = await res.json()
  const decoded = getIngredientsResponseDecoder.validate(json)

  if (decoded.type === 'error') {
    console.error('Decoding failed:', decoded.error)
    return []
  }

  return decoded.data
}

export const fetchIngredients = async (): Promise<Array<Ingredient>> => {
  const url = `${API_BASE}/list.php?i=list`
  const ingredients = await fetch(url).then((result) => decodeResult(result))

  return ingredients
}
