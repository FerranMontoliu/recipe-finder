import { useDisclosure } from '@mantine/hooks'
import {
  AppShell as MantineAppShell,
  Burger,
  Drawer,
  Group,
  Stack,
  Text,
} from '@mantine/core'
import { IconChefHat } from '@tabler/icons-react'
import type { ReactElement } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { RoutePaths } from '../../router/types.ts'

export const AppShell = (): ReactElement => {
  const [opened, { toggle, close }] = useDisclosure()

  return (
    <MantineAppShell header={{ height: 60 }} padding="md">
      <MantineAppShell.Header>
        <Group justify="space-between" h="100%" px="md">
          <Group gap="xs">
            <IconChefHat size={24} color="var(--mantine-color-yellow-6)" />
            <Text fw={700} size="lg">
              Recipe finder
            </Text>
          </Group>

          {/* Hamburger Menu for mobile */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />

          {/* Inline links for desktop */}
          <Group visibleFrom="sm">
            <Group gap="sm">
              <NavLink to={RoutePaths.Home}>Home</NavLink>
              <NavLink to={RoutePaths.Favorites}>Favorite Recipes</NavLink>
            </Group>
          </Group>
        </Group>
      </MantineAppShell.Header>

      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        hiddenFrom="sm"
        padding="md"
        position="top"
        h="fit-content"
      >
        <Stack gap="sm">
          <NavLink to={RoutePaths.Home}>Home</NavLink>
          <NavLink to={RoutePaths.Favorites}>Favorite Recipes</NavLink>
        </Stack>
      </Drawer>

      <MantineAppShell.Main>
        <Outlet />
      </MantineAppShell.Main>
    </MantineAppShell>
  )
}
