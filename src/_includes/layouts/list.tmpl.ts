import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import * as post from '../templates/post.ts'

export const layout = 'layouts/root.tmpl.ts'
export default ({ results }: PageData, helpers: PageHelpers) =>
  html`<main class="h-feed">
    ${results
      ?.map(({ data }) =>
        post[
          data.layout ? (data.layout?.slice(8, -8) as 'article') : 'article'
        ](data, helpers)
      )
      .join('')}
  </main>`
