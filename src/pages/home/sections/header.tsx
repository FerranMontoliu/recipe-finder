import type { ReactElement } from 'react'
import { Stack, Text, Title } from '@mantine/core'

export const Header = (): ReactElement => (
  <Stack gap="8px" justify="center" align="center" test-id="header">
    <Title order={1} ta="center" test-id="header-title">
      Recipe finder
    </Title>

    <Stack
      gap="4px"
      justify="center"
      align="center"
      test-id="header-description"
    >
      <Text c="gray.7" ta="center">
        Discover delicious recipes by searching for recipe names, ingredients,
        categories, or areas.
      </Text>
      <Text c="gray.7" ta="center">
        Save your favorites and cook something amazing today!
      </Text>
    </Stack>
  </Stack>
)
