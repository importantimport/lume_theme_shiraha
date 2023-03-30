import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import Head from '../templates/head.tmpl.ts'

export default (data: PageData, helpers: PageHelpers) =>
  html`<html lang="${data.metas?.lang ?? 'en'}">
    <head prefix="og: https://ogp.me/ns#">
      ${Head(data, helpers)}
    </head>
    <body>
      ${data.content}
    </body>
  </html>`
