import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default ({ authors }: PageData, { url }: PageHelpers) =>
  authors
    ?.map((author) =>
      author.url
        ? html`
        <a
          class="h-card p-author u-url chip chip-tonal"
          href="${url(author.url)}">
          ${
          author.avatar
            ? html`<img src="${author.avatar}" alt="${author.name}" class="h-photo" />`
            : ''
        }
          ${author.name}
        </a>
        `
        : html`
        <span class="h-card p-author chip chip-tonal">
          ${
          author.avatar
            ? html`<img src="${author.avatar}" alt="${author.name}" class="h-photo" />`
            : ''
        }
          ${author.name}
        </span>
        `
    )
    .join('')
