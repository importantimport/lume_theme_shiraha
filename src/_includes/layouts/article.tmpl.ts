import type { PageData } from 'lume/core.ts'

export const layout = 'layouts/root.tmpl.ts'
export default ({ content, summary, title }: PageData) => `
  <article class="h-entry">
    <h1 class="p-name">${title}</h1>
    ${summary ? `<meta class="p-summary" content=${summary}></meta>` : ''}
    ${content}
  </article>
`
