export interface Recipe {
  recipeId: string
  title: string
  category: string | null
  area: string | null
  instructions: string[]
  imageUrl: string | null
  videoUrl: string | null
  ingredients: {
    name: string
    measure: string
  }[]
}

export interface Ingredient {
  ingredientId: string
  name: string
}

export interface Cuisine {
  name: string
}

export interface Category {
  name: string
}
