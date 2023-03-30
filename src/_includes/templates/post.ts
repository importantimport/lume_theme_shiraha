import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'

export const article = (data: PageData, _helpers: PageHelpers) =>
  html`<article class="h-entry">
    <h2>
      <a class="u-url p-name" href="${data.url}">${data.title}</a>
    </h2>
    ${data.summary
      ? `<meta class="p-summary" content=${data.summary}></meta>`
      : ''}
    <div class="e-content">${data.children}</div>
  </article>`
