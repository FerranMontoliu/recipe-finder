import type { ReactElement } from 'react'
import { Stack, Title } from '@mantine/core'

export const Header = (): ReactElement => (
  <Stack gap="8px" justify="center" align="center">
    <Title order={1}>Favorite recipes</Title>
  </Stack>
)
