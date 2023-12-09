import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import authors from './post/authors.tmpl.ts'
import date from './post/date.tmpl.ts'
import tags from './post/tags.tmpl.ts'

export const article = (data: PageData, helpers: PageHelpers) =>
  html`<article class="h-entry">
    <h2>
      <a
        href="${helpers.url(data.url)}"
        class="u-url p-name">
        ${data.title}
      </a>
    </h2>
    ${
    data.summary
      ? html`<p class="p-summary">
        ${data.summary}
      </p>`
      : ''
  }
    <p class="chip-container-auto">
      ${authors(data, helpers)}
      ${date(data, helpers)}
      ${tags(data, helpers)}
    </p>
  </article>`
