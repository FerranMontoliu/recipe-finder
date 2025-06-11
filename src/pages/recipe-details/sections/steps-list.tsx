import type { ReactElement } from 'react'
import { List, Paper, Stack, Title } from '@mantine/core'

interface StepsListProps {
  steps: Array<string>
}

export const StepsList = ({ steps }: StepsListProps): ReactElement => (
  <Paper test-id="recipe-steps-list">
    <Stack gap="16px">
      <Title order={2}>Steps</Title>

      <List type="ordered" spacing="16px">
        {steps.map((item, index) => (
          <List.Item key={index} test-id="recipe-steps-list-item">
            {item}
          </List.Item>
        ))}
      </List>
    </Stack>
  </Paper>
)
