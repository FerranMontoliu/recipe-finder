import * as D from 'schemawax'
import type { Recipe } from '../types'

export const recipeDecoder: D.Decoder<Recipe> = D.object({
  required: {
    idMeal: D.string,
    strMeal: D.string,
  },
  optional: {
    strCategory: D.nullable(D.string),
    strArea: D.nullable(D.string),
    strInstructions: D.nullable(D.string),
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
    name: decoded[`strIngredient${i + 1}` as keyof typeof decoded],
    measure: decoded[`strMeasure${i + 1}` as keyof typeof decoded],
  }))
    .filter(
      (ingredient): ingredient is Recipe['ingredients'][number] =>
        ingredient.name !== undefined &&
        ingredient.name !== null &&
        ingredient.name.length > 0 &&
        ingredient.measure !== undefined &&
        ingredient.measure !== null &&
        ingredient.measure.length > 0,
    )
    .map(({ name, measure }) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      measure,
    }))

  const instructions = (decoded.strInstructions ?? '')
    .split(/[\r\n]+/)
    .filter((line) => line.trim().length > 0)

  return {
    recipeId: decoded.idMeal,
    title: decoded.strMeal,
    category: decoded.strCategory ?? null,
    area: decoded.strArea ?? null,
    instructions,
    imageUrl: decoded.strMealThumb ?? null,
    videoUrl: decoded.strYoutube ?? null,
    ingredients,
  } satisfies Recipe
})

export const recipeListDecoder: D.Decoder<Array<Recipe>> =
  D.array(recipeDecoder)

export const getRecipesResponseDecoder: D.Decoder<Array<Recipe>> = D.object({
  required: {
    meals: D.nullable(recipeListDecoder),
  },
}).andThen((decoded) => decoded.meals ?? [])
