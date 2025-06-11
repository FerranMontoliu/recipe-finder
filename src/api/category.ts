import { type Category, getCategoriesResponseDecoder } from '../types'
import { API_BASE } from './consts.ts'

const decodeResult = async (res: Response): Promise<Array<Category>> => {
  const json: unknown = await res.json()
  const decoded = getCategoriesResponseDecoder.validate(json)

  if (decoded.type === 'error') {
    console.error('Decoding failed:', decoded.error)
    return []
  }

  return decoded.data
}

export const fetchCategories = async (): Promise<Array<Category>> => {
  const url = `${API_BASE}/list.php?c=list`
  const ingredients = await fetch(url).then((result) => decodeResult(result))

  return ingredients
}
