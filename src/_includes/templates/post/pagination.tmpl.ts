import type { Page, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default (
  { pagination: { previous, next } }: {
    pagination: { previous: Page; next: Page }
  },
  { url }: PageHelpers,
) =>
  previous || next
    ? html`<nav>
  <ul>
    ${
      previous
        ? html`<li>
           <a href="${
          url(previous.data.url)
        }" rel="prev">← ${previous.data.title}</a>
         </li>`
        : ''
    } ${
      next
        ? html`<li>
           <a href="${url(next.data.url)}" rel="next">${next.data.title} →</a>
         </li>`
        : ''
    }
  </ul>
</nav>`
    : ''
