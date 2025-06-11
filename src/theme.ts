import { createTheme, type MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = createTheme({
  primaryColor: 'yellow',
  black: '#1f1f1f',
  white: '#fdfdfd',
  fontFamily: "'Sora', sans-serif",

  components: {
    Paper: {
      defaultProps: {
        withBorder: true,
        radius: 'md',
        shadow: 'sm',
        w: '100%',
        h: '100%',
        px: '24px',
        py: '16px',
      },
    },
  },
})
