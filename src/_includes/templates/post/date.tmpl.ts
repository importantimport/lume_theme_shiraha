import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default (
  { date, created, updated, published }: PageData,
  { date: dateHelper }: PageHelpers,
) => {
  const dtPublished = dateHelper(published ?? created ?? date)
  const dtUpdated = dateHelper(updated ?? published ?? created ?? date)
  const publishedTmpl = html`
    <span class="chip chip-tonal">
      <span class="material-symbols-outlined">calendar_month</span>
      <time 
        class="dt-published"
        datetime="${dtPublished}">
        ${dtPublished}
      </time>
    </span>
  `
  const updatedTmpl = html`
  <span class="chip chip-tonal">
    <span class="material-symbols-outlined">update</span>
    <time 
      class="dt-published"
      datetime="${dtUpdated}">
      ${dtUpdated}
    </time>
  </span>
  `
  if (dtPublished === dtUpdated) return publishedTmpl
  else return publishedTmpl + updatedTmpl
}
