import { type Cuisine, getCuisinesResponseDecoder } from '../types'
import { API_BASE } from './consts.ts'

const decodeResult = async (res: Response): Promise<Array<Cuisine>> => {
  const json: unknown = await res.json()
  const decoded = getCuisinesResponseDecoder.validate(json)

  if (decoded.type === 'error') {
    console.error('Decoding failed:', decoded.error)
    return []
  }

  return decoded.data
}

export const fetchCuisines = async (): Promise<Array<Cuisine>> => {
  const url = `${API_BASE}/list.php?a=list`
  const cuisines = await fetch(url).then((result) => decodeResult(result))

  return cuisines
}
