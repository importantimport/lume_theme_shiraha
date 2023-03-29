import type { PageData, PageHelpers } from '../../types.ts'

export default ({ authors }: PageData, _helpers: PageHelpers) =>
  authors
    ? authors
        .map((author) =>
          author.url
            ? `<a class="h-card p-author u-url" href="${author.url}">${author.name}</a>`
            : `<span class="h-card p-author">${author.name}</span>`
        )
        .join(', ')
    : ''
