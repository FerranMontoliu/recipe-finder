import { type ReactElement, useState } from 'react'
import { Button, Group, Text, Title } from '@mantine/core'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import type { Recipe } from '../../../types'
import { isFavorite, toggleFavorite } from '../../../utils/favorite-utils.ts'

interface RecipeHeaderProps {
  recipe: Recipe
  title: string
}

export const RecipeHeader = ({
  recipe,
  title,
}: RecipeHeaderProps): ReactElement => {
  const { recipeId } = recipe

  const [favorite, setFavorite] = useState<boolean>((): boolean =>
    isFavorite({ recipeId }),
  )

  return (
    <Group justify="space-between" align="center" w="100%">
      <Title order={1}>{title}</Title>

      <Button
        onClick={(event) => {
          event.stopPropagation()

          toggleFavorite({ recipe })
            .then(() => {
              setFavorite((prev) => !prev)
            })
            .catch(() => {
              console.error('Failed to toggle favorite')
            })
        }}
      >
        {favorite ? (
          <Group wrap="nowrap" gap="4px">
            <IconHeartFilled size="20px" />

            <Text>Favorited</Text>
          </Group>
        ) : (
          <Group wrap="nowrap" gap="4px">
            <IconHeart size="20px" />
            <Text>Add to favorites</Text>
          </Group>
        )}
      </Button>
    </Group>
  )
}
