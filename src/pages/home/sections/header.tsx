import type { ReactElement } from 'react'
import { Stack, Text, Title } from '@mantine/core'

export const Header = (): ReactElement => (
  <Stack gap="8px" justify="center" align="center">
    <Title order={1}>Recipe finder</Title>

    <Stack gap={0} justify="center" align="center">
      <Text c="gray.7">
        Discover delicious recipes by searching for recipe names, ingredients,
        categories, or areas.
      </Text>
      <Text c="gray.7">
        Save your favorites and cook something amazing today!
      </Text>
    </Stack>
  </Stack>
)
