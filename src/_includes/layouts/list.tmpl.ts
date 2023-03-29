import type { PageData, PageHelpers } from '../types.ts'
import * as post from '../templates/post.ts'

export const layout = 'layouts/root.tmpl.ts'
export default ({ results }: PageData, helpers: PageHelpers) =>
  `<main class="h-feed">
    ${results
      ?.map(({ data }) =>
        post[(data.layout?.slice(8, -8) as 'article') ?? 'article'](
          data,
          helpers
        )
      )
      .join('')}
  </main>`
