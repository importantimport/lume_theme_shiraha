import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import authors from './post/authors.tmpl.ts'
import date from './post/date.tmpl.ts'
import tags from './post/tags.tmpl.ts'

export const article = (data: PageData, helpers: PageHelpers) =>
  html`<article class="h-entry">
    <h2>
      <a class="u-url p-name" href="${data.url}">${data.title}</a>
    </h2>
    ${
    data.summary
      ? html`<meta class="p-summary" content=${data.summary}></meta>`
      : ''
  }
    ${authors(data, helpers)}
    ·
    ${date(data, helpers)}
    <div class="e-content">${data.children}</div>
    ${tags(data, helpers)}
  </article>`
