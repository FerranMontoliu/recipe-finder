import * as D from 'schemawax'
import type { Cuisine } from '../types'

const cuisineDecoder: D.Decoder<Cuisine> = D.object({
  required: {
    strArea: D.string,
  },
}).andThen(
  (decoded): Cuisine => ({
    name: decoded.strArea,
  }),
)

const cuisineListDecoder: D.Decoder<Array<Cuisine>> = D.array(cuisineDecoder)

export const getCuisinesResponseDecoder: D.Decoder<Array<Cuisine>> = D.object({
  required: {
    meals: D.nullable(cuisineListDecoder),
  },
}).andThen((decoded) => decoded.meals ?? [])
