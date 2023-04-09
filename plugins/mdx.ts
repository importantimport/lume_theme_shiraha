import type { Site } from 'lume/core.ts'
import remark from './remark.ts'
import jsx from 'lume/plugins/jsx.ts'
import mdx from 'lume/plugins/mdx.ts'
import { rehypePlugins, remarkPlugins } from './shared/unified.ts'

export default () => (site: Site) =>
  site
    .use(remark())
    .use(jsx())
    .use(mdx({
      remarkPlugins,
      rehypePlugins,
    }))
