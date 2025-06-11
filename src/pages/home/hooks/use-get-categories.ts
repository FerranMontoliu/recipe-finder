import { useQuery } from '@tanstack/react-query'
import { getCategoriesResponseDecoder } from '../../../types/decoders.ts'
import type { Category } from '../../../types/types.ts'

const API_BASE = 'https://www.themealdb.com/api/json/v1/1'

const decodeResult = async (res: Response): Promise<Category[]> => {
  const json = await res.json()
  const decoded = getCategoriesResponseDecoder.validate(json)

  if (decoded.type === 'error') {
    console.error('Decoding failed:', decoded.error)
    return []
  }

  return decoded.data
}

const fetchCategories = async (): Promise<Category[]> => {
  const url = `${API_BASE}/list.php?c=list`
  const ingredients = await fetch(url).then((result) => decodeResult(result))

  return ingredients
}

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
