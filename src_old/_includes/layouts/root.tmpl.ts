import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import headTmpl from '../templates/head.tmpl.ts'
import footerTmpl from '../templates/footer.tmpl.ts'

export default (data: PageData, helpers: PageHelpers) =>
  html`<html lang="${data.metas?.lang ?? 'en'}">
    <head prefix="og: https://ogp.me/ns#">
      ${headTmpl(data, helpers)}
    </head>
    <body>
      ${data.content}
      ${footerTmpl(data, helpers)}
    </body>
  </html>`
