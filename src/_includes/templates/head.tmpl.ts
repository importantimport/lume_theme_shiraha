import type { PageData, PageHelpers } from 'lume/core.ts'

export default (data: PageData, _helpers: PageHelpers) =>
  `
    <title>${
      data.title
        ? `${data.title} - ${data.metas!.site}`
        : data.metas!.site
    }</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/shiraha/dist/shiraha.css"
    />
    ${
      data.shiraha
        ? `<script>
            window.shiraha = ${JSON.stringify(data.shiraha)}
          </script>`
        : ''
    }
    <script type="module" src="https://cdn.jsdelivr.net/npm/shiraha-colors/dist/index.js"></script>
  `
