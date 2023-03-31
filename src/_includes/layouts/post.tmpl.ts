import type { Page, PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import paginationTmpl from '../templates/post/pagination.tmpl.ts'

export const layout = 'layouts/root.tmpl.ts'
export default (data: PageData, helpers: PageHelpers) =>
  html`<main>
    ${data.content}
    ${
    paginationTmpl({
      pagination: {
        previous: data.search.previousPage(data.url as string) as Page,
        next: data.search.nextPage(data.url as string) as Page,
      },
    }, helpers)
  }
  </main>`
