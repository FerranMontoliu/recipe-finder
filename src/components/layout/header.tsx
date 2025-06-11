import type { ReactElement } from 'react'
import {
  Anchor,
  AppShell,
  Burger,
  Drawer,
  Group,
  Stack,
  Text,
} from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { RoutePaths } from '../../router/types.ts'
import { IconChefHat } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'

const navLinks: ReactElement = (
  <>
    <Anchor component={NavLink} to={RoutePaths.Home}>
      Home
    </Anchor>
    <Anchor component={NavLink} to={RoutePaths.Favorites}>
      Favorites
    </Anchor>
  </>
)

export const Header = (): ReactElement => {
  const [opened, { toggle, close }] = useDisclosure()

  return (
    <>
      <AppShell.Header>
        <Group justify="space-between" h="100%" px="md">
          <Anchor
            component={NavLink}
            to={RoutePaths.Home}
            style={{
              textDecoration: 'none',
            }}
          >
            <Group gap="xs">
              <IconChefHat size={24} color="var(--mantine-color-yellow-6)" />
              <Text fw={700} size="lg" c="black">
                Recipe finder
              </Text>
            </Group>
          </Anchor>

          {/* Hamburger Menu for mobile */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />

          {/* Inline links for desktop */}
          <Group visibleFrom="sm">
            <Group gap="sm">{navLinks}</Group>
          </Group>
        </Group>
      </AppShell.Header>

      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        hiddenFrom="sm"
        padding="md"
        position="top"
        h="fit-content"
      >
        <Stack gap="sm">{navLinks}</Stack>
      </Drawer>
    </>
  )
}
