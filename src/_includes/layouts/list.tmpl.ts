import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import * as post from '../templates/post.ts'
import pagination from '../templates/pagination.tmpl.ts'

export const layout = 'layouts/root.tmpl.ts'
export default (data: PageData, helpers: PageHelpers) =>
  html`<main class="h-feed">
    ${
    data.results
      ?.map(({ data: item }) =>
        post[
          item.layout ? (item.layout?.slice(8, -8) as 'article') : 'article'
        ](item as PageData, helpers)
      )
      .join('')
  } ${data.pagination?.totalPages !== 1 ? pagination(data, helpers) : ''}
  </main>`
