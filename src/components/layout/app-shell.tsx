import { useDisclosure } from '@mantine/hooks'
import {
  Anchor,
  AppShell as MantineAppShell,
  Burger,
  Center,
  Container,
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
    <MantineAppShell header={{ height: 60 }}>
      <MantineAppShell.Header>
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
        <Stack gap="sm">{navLinks}</Stack>
      </Drawer>

      <MantineAppShell.Main>
        <>
          <Container p="md" mih="calc(100vh - 60px - 56px)">
            <Outlet />
          </Container>

          <Center bg="gray.1" py="16px" px="24px">
            <Text size="sm" lh="24px">
              Made with ❤️ by Ferran
            </Text>
          </Center>
        </>
      </MantineAppShell.Main>
    </MantineAppShell>
  )
}

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
