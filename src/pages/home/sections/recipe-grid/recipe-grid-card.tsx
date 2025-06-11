import {
  ActionIcon,
  Anchor,
  Badge,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core'
import {
  IconBrandYoutube,
  IconCategory,
  IconHeart,
  IconHeartFilled,
  IconMapPin,
} from '@tabler/icons-react'
import { type ReactElement, useState } from 'react'
import type { Recipe } from '../../../../types'

import './recipe-grid-card.css'
import { useNavigate } from 'react-router-dom'
import { isFavorite, toggleFavorite } from '../../../../utils/favorite-utils.ts'

interface RecipeGridCardProps {
  recipe: Recipe
}

export const RecipeGridCard = ({
  recipe,
}: RecipeGridCardProps): ReactElement => {
  const { recipeId } = recipe

  const navigate = useNavigate()

  const [favorite, setFavorite] = useState<boolean>((): boolean =>
    isFavorite({ recipeId }),
  )

  return (
    <Card
      shadow="sm"
      py={0}
      px={0}
      radius="md"
      withBorder
      className="hover-card"
      onClick={() => {
        void navigate(`/recipe/${recipe.recipeId}`)
      }}
    >
      <Card.Section
        pos="relative"
        style={{
          overflow: 'hidden',
        }}
      >
        <Image
          src={recipe.imageUrl}
          fallbackSrc="https://placehold.co/400x200?text=Placeholder"
          height={220}
          alt={recipe.title}
          className="hover-image"
        />

        <Tooltip
          label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          position="top"
          withArrow
        >
          <ActionIcon
            variant="filled"
            color="yellow"
            size="lg"
            pos="absolute"
            top="24px"
            right="24px"
            aria-label="Favorite"
            className="hover-icon"
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
            style={{
              zIndex: 10,
            }}
          >
            {favorite ? (
              <IconHeartFilled size="20px" />
            ) : (
              <IconHeart size="20px" />
            )}
          </ActionIcon>
        </Tooltip>
      </Card.Section>

      <Stack gap="8px" px="16px" py="8px">
        <Text fw={600} size="lg" lineClamp={2}>
          {recipe.title}
        </Text>

        {recipe.category || recipe.area ? (
          <Group gap="4px">
            {recipe.category && (
              <Badge
                variant="light"
                color="teal"
                leftSection={<IconCategory size="12px" />}
              >
                {recipe.category}
              </Badge>
            )}

            {recipe.area && (
              <Badge
                variant="light"
                color="blue"
                leftSection={<IconMapPin size="12px" />}
              >
                {recipe.area}
              </Badge>
            )}
          </Group>
        ) : null}

        {recipe.videoUrl && (
          <Anchor
            href={recipe.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            c="red.6"
            size="sm"
            fw={500}
          >
            <Group gap="4px" wrap="nowrap">
              <IconBrandYoutube size="16px" />
              <span>Watch on YouTube</span>
            </Group>
          </Anchor>
        )}
      </Stack>
    </Card>
  )
}
