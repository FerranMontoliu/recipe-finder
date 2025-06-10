import '@mantine/core/styles.css'

import { type ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { router } from './router/router.tsx'
import { theme } from './theme.ts'

export const App = (): ReactElement => (
  <MantineProvider theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>
)
