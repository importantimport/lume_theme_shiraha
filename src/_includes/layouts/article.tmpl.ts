import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import authors from '../templates/post/authors.tmpl.ts'
import date from '../templates/post/date.tmpl.ts'
import tags from '../templates/post/tags.tmpl.ts'

export const layout = 'layouts/post.tmpl.ts'
export default (data: PageData, helpers: PageHelpers) =>
  html`<article class="h-entry">
    <h1 class="p-name">${data.title}</h1>
    <p class="chip-container-wrap">
      ${authors(data, helpers)}
      ${date(data, helpers)}
    </p>
    ${
    data.summary
      ? `<meta class="p-summary" content=${data.summary}></meta>`
      : ''
  }
    <div class="e-content">${data.content}</div>
    <p class="chip-container-wrap">
      ${tags(data, helpers)}
    </p>
  </article>`
