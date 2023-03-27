import type { PageData, PageHelpers } from 'lume/core.ts'

export default (data: PageData, { url }: PageHelpers) =>
  `
    <title>${
      data.metas?.site ? `${data.title} - ${data.metas.site}` : data.title
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
    <script type="module" src="https://cdn.jsdelivr.net/npm/shiraha-colors/dist/index.js" />
  `
