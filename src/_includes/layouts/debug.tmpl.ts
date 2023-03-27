import type { PageData, PageHelpers } from 'lume/core.ts'
import Head from '../templates/head.tmpl.ts'

export default (data: PageData, helpers: PageHelpers) => {
  console.log(data)
  return `<html>
    <head>
      <title>${data.title}</title>
      ${Head(data, helpers)}
    </head>
    <body>
      ${data.content}
    </body>
  </html>`
}
