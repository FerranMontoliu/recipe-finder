import { useQuery } from '@tanstack/react-query'
import { getCuisinesResponseDecoder } from '../../../types/decoders.ts'
import type { Cuisine } from '../../../types/types.ts'

const API_BASE = 'https://www.themealdb.com/api/json/v1/1'

const decodeResult = async (res: Response): Promise<Cuisine[]> => {
  const json: unknown = await res.json()
  const decoded = getCuisinesResponseDecoder.validate(json)

  if (decoded.type === 'error') {
    console.error('Decoding failed:', decoded.error)
    return []
  }

  return decoded.data
}

const fetchCuisines = async (): Promise<Cuisine[]> => {
  const url = `${API_BASE}/list.php?a=list`
  const cuisines = await fetch(url).then((result) => decodeResult(result))

  return cuisines
}

export const useGetCuisines = () => {
  return useQuery({
    queryKey: ['cuisines'],
    queryFn: () => fetchCuisines(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
