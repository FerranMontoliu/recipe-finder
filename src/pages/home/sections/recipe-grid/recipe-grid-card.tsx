import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import type { ReactElement } from 'react'
import type { Recipe } from '../../../../types.ts'

type RecipeGridCardProps = {
  recipe: Recipe
}

export const RecipeGridCard = ({}: RecipeGridCardProps): ReactElement => (
  <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Card.Section>
      <Image src="" height={160} alt="Recipe image" />
    </Card.Section>

    <Group justify="space-between" mt="md" mb="xs">
      <Text fw={500}>Recipe title</Text>
      <Badge color="pink">Video</Badge>
    </Group>

    <Text size="sm" c="dimmed">
      Recipe description goes here
    </Text>

    <Button color="blue" fullWidth mt="md" radius="md">
      More info
    </Button>
  </Card>
)
