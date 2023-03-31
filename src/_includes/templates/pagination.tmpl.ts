import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'

export default (
  { pagination }: PageData,
  { url }: PageHelpers,
) =>
  html`<nav>
  <ul>
    ${
    pagination?.previous
      ? html`<li>
           <a href="${url(pagination.previous)}" rel="prev">← Previous</a>
         </li>`
      : ''
  } ${
    pagination?.page
      ? html`<li>
           ${pagination.page}
         </li>`
      : ''
  } ${
    pagination?.next
      ? html`<li>
           <a href="${url(pagination.next)}" rel="next">Next →</a>
         </li>`
      : ''
  }
  </ul>
</nav>`
