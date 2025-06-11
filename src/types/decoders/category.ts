import * as D from 'schemawax'
import type { Category } from '../types'

const categoryDecoder: D.Decoder<Category> = D.object({
  required: {
    strCategory: D.string,
  },
}).andThen(
  (decoded): Category => ({
    name: decoded.strCategory,
  }),
)

const categoryListDecoder: D.Decoder<Array<Category>> = D.array(categoryDecoder)

export const getCategoriesResponseDecoder: D.Decoder<Array<Category>> =
  D.object({
    required: {
      meals: D.nullable(categoryListDecoder),
    },
  }).andThen((decoded) => decoded.meals ?? [])
