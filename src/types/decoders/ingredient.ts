import * as D from 'schemawax'
import type { Ingredient } from '../types'

const ingredientDecoder: D.Decoder<Ingredient> = D.object({
  required: {
    idIngredient: D.string,
    strIngredient: D.string,
  },
}).andThen(
  (decoded): Ingredient => ({
    ingredientId: decoded.idIngredient,
    name:
      decoded.strIngredient.charAt(0).toUpperCase() +
      decoded.strIngredient.slice(1),
  }),
)

const ingredientListDecoder: D.Decoder<Array<Ingredient>> =
  D.array(ingredientDecoder)

export const getIngredientsResponseDecoder: D.Decoder<Array<Ingredient>> =
  D.object({
    required: {
      meals: D.nullable(ingredientListDecoder),
    },
  }).andThen((decoded) => decoded.meals ?? [])
