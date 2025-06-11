import type { ReactElement } from 'react'
import { List, Paper, Stack, Title } from '@mantine/core'

interface InstructionsListProps {
  instructions: Array<string>
}

export const InstructionsList = ({
  instructions,
}: InstructionsListProps): ReactElement => (
  <Paper>
    <Stack gap="16px">
      <Title order={2}>Instructions</Title>

      <List type="ordered" spacing="16px">
        {instructions.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    </Stack>
  </Paper>
)
