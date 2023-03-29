import type { PageData } from '../types.ts'

export const layout = 'layouts/root.tmpl.ts'
export default ({ content, summary, title }: PageData) =>
  `<main>
    <article class="h-entry">
      <h1 class="p-name">${title}</h1>
      ${summary ? `<meta class="p-summary" content=${summary}></meta>` : ''}
      <div class="e-content">${content}</div>
    </article>
  </main>`
