import type { ReactElement } from 'react'
import { Stack, Title } from '@mantine/core'

export const Header = (): ReactElement => (
  <Stack gap="8px" justify="center" align="center" test-id="header">
    <Title order={1} ta="center" test-id="header-title">
      Favorite recipes
    </Title>
  </Stack>
)
