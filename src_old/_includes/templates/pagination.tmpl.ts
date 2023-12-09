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
          <a role="button" href="${url(pagination.previous)}" rel="prev">
            <span class="material-symbols-outlined">arrow_back</span>
            Previous
          </a>
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
          <a role="button" href="${url(pagination.next)}" rel="next">
            Next
            <span class="material-symbols-outlined">arrow_forward</span>
          </a>
         </li>`
      : ''
  }
  </ul>
</nav>`
