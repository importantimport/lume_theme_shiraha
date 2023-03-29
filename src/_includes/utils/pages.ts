import type { Page } from '../types.ts'

export const filter = (pages: Page[]) =>
  pages.filter(({ data }) => !data.flags?.includes('unlisted'))
