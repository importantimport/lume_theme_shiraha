import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default (
  { date, created, updated, published }: PageData,
  { date: dateHelper }: PageHelpers,
) =>
  html`<time 
    class="dt-published"
    datetime="${dateHelper(published ?? created ?? date)}">
    ${dateHelper(published ?? created ?? date)}
  </time>
  <time
    class="dt-updated"
    style="display:none"
    datetime="${dateHelper(updated ?? published ?? created ?? date)}">
    ${dateHelper(updated ?? published ?? created ?? date)}
  </time>`
