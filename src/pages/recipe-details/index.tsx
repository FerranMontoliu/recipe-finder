import type { ReactElement } from 'react'
import { Alert, Center, Grid, Loader, Stack } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'
import { useParams } from 'react-router-dom'
import { useGetRecipeById } from './hooks/use-get-recipe-by-id.ts'
import { IngredientsList } from './sections/ingredients-list.tsx'
import { StepsList } from './sections/steps-list.tsx'
import { RecipeImage } from './sections/recipe-image.tsx'
import { RecipeDetails } from './sections/recipe-details.tsx'
import { RecipeHeader } from './sections/recipe-header.tsx'
import { useWindowTitle } from '../../hooks/use-window-title.ts'

export const RecipeDetailsPage = (): ReactElement => {
  const { recipeId } = useParams() as { recipeId: string }

  const getRecipeResult = useGetRecipeById(recipeId)

  const recipe = getRecipeResult.data ?? null

  useWindowTitle(recipe?.title ?? 'Recipe finder')

  return (
    <Stack
      justify="center"
      align="center"
      gap="16px"
      test-id="recipe-details-page"
    >
      {getRecipeResult.isLoading ? (
        <Center w="100%" h="300px">
          <Loader />
        </Center>
      ) : getRecipeResult.isError ? (
        <Alert
          variant="light"
          color="red"
          title="Error"
          icon={<IconInfoCircle />}
        >
          There was an error fetching the recipe. Please try again later.
        </Alert>
      ) : recipe !== null ? (
        <>
          <RecipeHeader title={recipe.title} recipe={recipe} />

          <Grid>
            <Grid.Col
              span={{
                base: 12,
                sm: 8,
              }}
            >
              <RecipeDetails
                category={recipe.category}
                cuisine={recipe.cuisine}
                videoUrl={recipe.videoUrl}
                numIngredients={recipe.ingredients.length}
                numSteps={recipe.steps.length}
              />
            </Grid.Col>

            <Grid.Col
              span={{
                base: 12,
                sm: 4,
              }}
            >
              <RecipeImage imageUrl={recipe.imageUrl} title={recipe.title} />
            </Grid.Col>

            <Grid.Col
              span={{
                base: 12,
                sm: 4,
              }}
            >
              <IngredientsList ingredients={recipe.ingredients} />
            </Grid.Col>

            <Grid.Col
              span={{
                base: 12,
                sm: 8,
              }}
            >
              <StepsList steps={recipe.steps} />
            </Grid.Col>
          </Grid>
        </>
      ) : null}
    </Stack>
  )
}
