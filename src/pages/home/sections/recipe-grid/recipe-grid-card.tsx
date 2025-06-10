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
  IconMapPin,
} from '@tabler/icons-react'
import type { ReactElement } from 'react'
import type { Recipe } from '../../../../types/types.ts'

import './recipe-grid-card.css'
import { useNavigate } from 'react-router-dom'

type RecipeGridCardProps = {
  recipe: Recipe
}

export const RecipeGridCard = ({
  recipe,
}: RecipeGridCardProps): ReactElement => {
  const navigate = useNavigate()

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="hover-card"
      onClick={() => {
        navigate(`/recipe/${recipe.recipeId}`)
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

        <Tooltip label="Add to favorites" position="top" withArrow>
          <ActionIcon
            variant="light"
            color="red"
            size="lg"
            pos="absolute"
            top="8px"
            right="8px"
            aria-label="Favorite"
            className="hover-icon"
            onClick={(event) => {
              event.stopPropagation()

              console.log('Adding to favorites:', recipe.title)
            }}
          >
            <IconHeart size="20px" />
          </ActionIcon>
        </Tooltip>
      </Card.Section>

      <Stack mt="md" gap="8px">
        <Text fw={600} size="lg" lineClamp={2}>
          {recipe.title}
        </Text>

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
