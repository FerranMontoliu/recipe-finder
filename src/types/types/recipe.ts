export interface Recipe {
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
