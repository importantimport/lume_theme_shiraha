import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default ({ authors }: PageData, _helpers: PageHelpers) =>
  authors
    ?.map((author) =>
      author.url
        ? html`<a class="h-card p-author u-url" href="${author.url}">${author.name}</a>`
        : html`<span class="h-card p-author">${author.name}</span>`
    )
    .join(', ')
