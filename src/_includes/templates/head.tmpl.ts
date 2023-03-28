import type { PageData, PageHelpers } from '../types.ts'
import meta from './head/meta.tmpl.ts'
import shiraha from './head/shiraha.tmpl.ts'

export default (data: PageData, helpers: PageHelpers) =>
  [
    `<title>${
      data.title ? `${data.title} - ${data.metas!.site}` : data.metas!.site
    }</title>`,
    meta(data, helpers),
    shiraha(data, helpers),
  ].join('')

// <link rel="alternate" type="application/feed+json" href="/feed.json" />
