import type { Site } from 'lume/core.ts'
import metas from 'lume/plugins/metas.ts'
import date from 'lume/plugins/date.ts'
import sitemap from 'lume/plugins/sitemap.ts'
// import remark from 'lume/plugins/remark.ts'
// import jsx from 'lume/plugins/jsx.ts'
// import mdx from 'lume/plugins/mdx.ts'
import { core } from './mod.ts'

export type Options = Record<string, unknown>

export default (_options: Options = {}) =>
  (site: Site) => {
    site
      .use(core())
      .use(metas())
      .use(date())
      .use(sitemap())
      // .use(remark())
      // .use(jsx())
      // .use(mdx())
  }
