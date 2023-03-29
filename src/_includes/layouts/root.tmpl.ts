import type { PageData, PageHelpers } from '../types.ts'
import Head from '../templates/head.tmpl.ts'

export default (data: PageData, helpers: PageHelpers) =>
  `<html lang="${data.metas?.lang ?? 'en'}">
    <head prefix="og: https://ogp.me/ns#">
      ${Head(data, helpers)}
    </head>
    <body>
      ${data.content}
    </body>
  </html>`
