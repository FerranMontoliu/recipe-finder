import { type ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { router } from './router/router.tsx'
import { theme } from './theme.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
})

export const App = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </QueryClientProvider>
)
