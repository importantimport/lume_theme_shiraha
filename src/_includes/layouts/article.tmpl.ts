import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import authors from '../templates/post/authors.tmpl.ts'

export const layout = 'layouts/root.tmpl.ts'
export default (data: PageData, helpers: PageHelpers) =>
  html`<main>
    <article class="h-entry">
      <h1 class="p-name">${data.title}</h1>
      ${authors(data, helpers)}
      ${data.summary
        ? `<meta class="p-summary" content=${data.summary}></meta>`
        : ''}
      <div class="e-content">${data.content}</div>
    </article>
  </main>`
