export type Recipe = {
  recipeId: string
  title: string
  category: string
  area: string
  instructions: Array<string>
  imageUrl: string | null
  videoUrl: string | null
  ingredients: Array<{
    name: string
    measure: string
  }>
}
