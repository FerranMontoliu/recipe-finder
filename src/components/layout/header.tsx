import type { ReactElement } from 'react'
import {
  Anchor,
  AppShell,
  Burger,
  Group,
  Paper,
  Stack,
  Text,
  Transition,
} from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { RoutePaths } from '../../router/types.ts'
import { IconChefHat } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'

const navLinks: ReactElement = (
  <>
    <Anchor
      component={NavLink}
      to={RoutePaths.Home}
      test-id="app-shell-header-home-link"
    >
      Home
    </Anchor>
    <Anchor
      component={NavLink}
      to={RoutePaths.Favorites}
      test-id="app-shell-header-favorites-link"
    >
      Favorites
    </Anchor>
  </>
)

export const Header = (): ReactElement => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <>
      <AppShell.Header test-id="app-shell-header">
        <Group justify="space-between" h="100%" px="md">
          <Anchor
            component={NavLink}
            to={RoutePaths.Home}
            style={{
              textDecoration: 'none',
            }}
            test-id="app-shell-header-title"
          >
            <Group gap="xs">
              <IconChefHat size={24} color="var(--mantine-color-yellow-6)" />
              <Text fw={700} size="lg" c="black">
                Recipe finder
              </Text>
            </Group>
          </Anchor>

          {/* Burger for mobile */}
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            test-id="app-shell-header-burger-button"
          />

          {/* Desktop nav */}
          <Group visibleFrom="sm">
            <Group gap="sm" test-id="app-shell-header-links">
              {navLinks}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      {/* Mobile Overlay Menu */}
      <Transition
        mounted={opened}
        transition="pop-top-right"
        duration={200}
        timingFunction="ease"
      >
        {(styles) => (
          <Paper
            style={{
              ...styles,
              zIndex: 1000,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            hiddenFrom="sm"
            pos="absolute"
            top={60}
            left={0}
            w="100%"
            h="fit-content"
            bg="white"
            p="lg"
            withBorder
          >
            <Stack gap="lg" align="flex-start" test-id="app-shell-header-links">
              {navLinks}
            </Stack>
          </Paper>
        )}
      </Transition>
    </>
  )
}
