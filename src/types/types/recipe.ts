export interface Recipe {
  recipeId: string
  title: string
  category: string | null
  cuisine: string | null
  steps: Array<string>
  imageUrl: string | null
  videoUrl: string | null
  ingredients: Array<{
    name: string
    measure: string
  }>
}
