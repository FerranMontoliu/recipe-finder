import { Button, Center, Container, Stack, Text, Title } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import type { ReactElement } from 'react'
import { useWindowTitle } from '../../hooks/use-window-title.ts'

export const NotFoundPage = (): ReactElement => {
  useWindowTitle('Page not found')

  return (
    <Center
      style={{
        height: 'calc(100vh - 60px - 56px - 32px)',
        textAlign: 'center',
      }}
      test-id="not-found-page"
    >
      <Container size="xs">
        <Stack gap="xl" align="center">
          <Text size="96px" fw={700} c="red.6">
            404
          </Text>

          <Title order={2}>Page not found</Title>

          <Text c="dimmed" size="md" maw={300}>
            The page you're looking for doesn't exist. Maybe you mistyped the
            URL or followed a broken link.
          </Text>

          <Button
            component={Link}
            to="/"
            size="md"
            variant="light"
            leftSection={<IconArrowLeft size={18} />}
          >
            Back to Home
          </Button>
        </Stack>
      </Container>
    </Center>
  )
}
