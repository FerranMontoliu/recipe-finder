import type { ReactElement } from 'react'
import {
  Anchor,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconBrandYoutube } from '@tabler/icons-react'

type RecipeDetailsProps = {
  title: string
  category: string | null
  area: string | null
  videoUrl: string | null
  numIngredients: number
  numSteps: number
}

export const RecipeDetails = ({
  title,
  category,
  area,
  numIngredients,
  numSteps,
  videoUrl,
}: RecipeDetailsProps): ReactElement => (
  <Stack>
    <Title order={1}>{title}</Title>

    <SimpleGrid cols={4}>
      <Paper>
        <Stack gap="8px" align="center">
          <Text fw={500}>Category</Text>
          <Text c="yellow.8" fw="bold">
            {category}
          </Text>
        </Stack>
      </Paper>

      <Paper>
        <Stack gap="8px" align="center">
          <Text fw={500}>Cuisine</Text>
          <Text c="yellow.8" fw="bold">
            {area}
          </Text>
        </Stack>
      </Paper>

      <Paper>
        <Stack gap="8px" align="center">
          <Text fw={500}>Ingredients</Text>
          <Text c="yellow.8" fw="bold">
            {numIngredients}
          </Text>
        </Stack>
      </Paper>

      <Paper>
        <Stack gap="8px" align="center">
          <Text fw={500}>Steps</Text>
          <Text c="yellow.8" fw="bold">
            {numSteps}
          </Text>
        </Stack>
      </Paper>
    </SimpleGrid>

    {videoUrl && (
      <Paper>
        <Group>
          <IconBrandYoutube size="24px" color="red" />

          <Stack gap={0}>
            <Text fw={500}>Video tutorial</Text>
            <Anchor
              fw={500}
              target="_blank"
              rel="noopener noreferrer"
              href={videoUrl}
            >
              Watch on YouTube
            </Anchor>
          </Stack>
        </Group>
      </Paper>
    )}
  </Stack>
)
