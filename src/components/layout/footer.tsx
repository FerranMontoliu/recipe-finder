import type { ReactElement } from 'react'
import { Center, Text } from '@mantine/core'

export const Footer = (): ReactElement => (
  <Center bg="gray.1" py="16px" px="24px">
    <Text size="sm" lh="24px">
      Made with ❤️ by Ferran
    </Text>
  </Center>
)
