import * as D from 'schemawax'
import type { Recipe } from './types.ts'

export const recipeDecoder: D.Decoder<Recipe> = D.object({
  required: {
    idMeal: D.string,
    strMeal: D.string,
    strCategory: D.string,
    strArea: D.string,
    strInstructions: D.string,
    strMealThumb: D.nullable(D.string),
    strYoutube: D.nullable(D.string),

    strIngredient1: D.nullable(D.string),
    strIngredient2: D.nullable(D.string),
    strIngredient3: D.nullable(D.string),
    strIngredient4: D.nullable(D.string),
    strIngredient5: D.nullable(D.string),
    strIngredient6: D.nullable(D.string),
    strIngredient7: D.nullable(D.string),
    strIngredient8: D.nullable(D.string),
    strIngredient9: D.nullable(D.string),
    strIngredient10: D.nullable(D.string),
    strIngredient11: D.nullable(D.string),
    strIngredient12: D.nullable(D.string),
    strIngredient13: D.nullable(D.string),
    strIngredient14: D.nullable(D.string),
    strIngredient15: D.nullable(D.string),
    strIngredient16: D.nullable(D.string),
    strIngredient17: D.nullable(D.string),
    strIngredient18: D.nullable(D.string),
    strIngredient19: D.nullable(D.string),
    strIngredient20: D.nullable(D.string),

    strMeasure1: D.nullable(D.string),
    strMeasure2: D.nullable(D.string),
    strMeasure3: D.nullable(D.string),
    strMeasure4: D.nullable(D.string),
    strMeasure5: D.nullable(D.string),
    strMeasure6: D.nullable(D.string),
    strMeasure7: D.nullable(D.string),
    strMeasure8: D.nullable(D.string),
    strMeasure9: D.nullable(D.string),
    strMeasure10: D.nullable(D.string),
    strMeasure11: D.nullable(D.string),
    strMeasure12: D.nullable(D.string),
    strMeasure13: D.nullable(D.string),
    strMeasure14: D.nullable(D.string),
    strMeasure15: D.nullable(D.string),
    strMeasure16: D.nullable(D.string),
    strMeasure17: D.nullable(D.string),
    strMeasure18: D.nullable(D.string),
    strMeasure19: D.nullable(D.string),
    strMeasure20: D.nullable(D.string),
  },
}).andThen((decoded): Recipe => {
  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    name: decoded[`strIngredient${i + 1}`],
    measure: decoded[`strMeasure${i + 1}`],
  })).filter(
    (ingredient) =>
      ingredient.name !== null &&
      ingredient.name.length > 0 &&
      ingredient.measure !== null &&
      ingredient.measure.length > 0,
  )

  const instructions = decoded.strInstructions
    .split(/[\r\n]+/)
    .filter((line) => line.trim().length > 0)

  return {
    recipeId: decoded.idMeal,
    title: decoded.strMeal,
    category: decoded.strCategory,
    area: decoded.strArea,
    instructions,
    imageUrl: decoded.strMealThumb,
    videoUrl: decoded.strYoutube,
    ingredients,
  } satisfies Recipe
})

export const recipeListDecoder: D.Decoder<Array<Recipe>> =
  D.array(recipeDecoder)

export const getRecipesResponseDecoder: D.Decoder<{
  meals: Array<Recipe>
}> = D.object({
  required: {
    meals: D.nullable(recipeListDecoder),
  },
}).andThen((decoded) => ({
  meals: decoded.meals ?? [],
}))
