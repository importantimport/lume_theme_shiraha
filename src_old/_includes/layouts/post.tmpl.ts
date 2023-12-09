import type { Page, PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import { query } from '../utils/search.ts'
import paginationTmpl from '../templates/post/pagination.tmpl.ts'

export const layout = 'layouts/root.tmpl.ts'
export default (data: PageData, helpers: PageHelpers) =>
  html`
  <nav>
    <ol>
      <span class="material-symbols-outlined">chevron_left</span>
      <li>
        <a href="${helpers.url('/')}">${data.site.title}</a>
      </li>
    </ol>
  </nav>
  <main>
    ${data.content}
    ${
    paginationTmpl({
      pagination: {
        previous: data.search.previousPage(
          data.url as string,
          query,
        ) as Page,
        next: data.search.nextPage(
          data.url as string,
          query,
        ) as Page,
      },
    }, helpers)
  }
  </main>`
