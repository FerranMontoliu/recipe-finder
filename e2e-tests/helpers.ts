import type { Page } from '@playwright/test'
import type { Locator } from 'playwright'

export const getByTestId = (
  pageOrLocator: Page | Locator,
  testId: string,
): Locator => pageOrLocator.locator(`[test-id="${testId}"]`)
