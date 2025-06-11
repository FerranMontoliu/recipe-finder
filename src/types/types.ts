export type Recipe = {
  recipeId: string
  title: string
  category: string | null
  area: string | null
  instructions: Array<string>
  imageUrl: string | null
  videoUrl: string | null
  ingredients: Array<{
    name: string
    measure: string
  }>
}

export type Ingredient = {
  ingredientId: string
  name: string
}

export type Cuisine = {
  name: string
}

export type Category = {
  name: string
}
