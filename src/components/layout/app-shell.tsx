import { AppShell as MantineAppShell, Container } from '@mantine/core'
import type { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer.tsx'
import { Header } from './header.tsx'

export const AppShell = (): ReactElement => {
  return (
    <MantineAppShell header={{ height: 60 }}>
      <Header />

      <MantineAppShell.Main>
        <>
          <Container p="md" mih="calc(100vh - 60px - 56px)">
            <Outlet />
          </Container>

          <Footer />
        </>
      </MantineAppShell.Main>
    </MantineAppShell>
  )
}
