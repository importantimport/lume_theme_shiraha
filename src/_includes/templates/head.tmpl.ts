import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'
import link from './head/link.tmpl.ts'
import meta from './head/meta.tmpl.ts'
import shiraha from './head/shiraha.tmpl.ts'

export default (data: PageData, helpers: PageHelpers) =>
  [
    html`<title>
      ${data.title ? `${data.title} - ${data.site.title}` : data.site.title}
    </title>`,
    link(data, helpers),
    meta(data, helpers),
    shiraha(data, helpers),
  ].join('')

// <link rel="alternate" type="application/feed+json" href="/feed.json" />
