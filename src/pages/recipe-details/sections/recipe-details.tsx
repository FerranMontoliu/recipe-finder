import type { ReactElement } from 'react'
import { Anchor, Group, Paper, SimpleGrid, Stack, Text } from '@mantine/core'
import { IconBrandYoutube } from '@tabler/icons-react'

interface RecipeDetailsProps {
  category: string | null
  cuisine: string | null
  videoUrl: string | null
  numIngredients: number
  numSteps: number
}

export const RecipeDetails = ({
  category,
  cuisine,
  numIngredients,
  numSteps,
  videoUrl,
}: RecipeDetailsProps): ReactElement => (
  <Stack h="100%">
    <SimpleGrid
      cols={{
        base: 2,
        sm: 4,
      }}
      h="100%"
    >
      <RecipeDetailsItem label="Category" value={category} />

      <RecipeDetailsItem label="Cuisine" value={cuisine} />

      <RecipeDetailsItem label="Ingredients" value={numIngredients} />

      <RecipeDetailsItem label="Steps" value={numSteps} />
    </SimpleGrid>

    {videoUrl && (
      <Paper
        h="100%"
        style={{
          alignContent: 'center',
        }}
      >
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

type RecipeDetailsItemProps = {
  label: string
  value: string | number | null
}
const RecipeDetailsItem = ({
  label,
  value,
}: RecipeDetailsItemProps): ReactElement => (
  <Paper
    h="100%"
    style={{
      alignContent: 'center',
    }}
  >
    <Stack gap="8px" align="center">
      <Text fw={500}>{label}</Text>
      <Text c="yellow.8" fw="bold">
        {value ? value : 'N/A'}
      </Text>
    </Stack>
  </Paper>
)
