import mdx from 'lume/plugins/mdx.ts'
import { rehypePlugins, remarkPlugins } from './shared/unified.ts'

export default () => (site: Lume.Site) =>
  site
    .use(mdx({
      remarkPlugins,
      rehypePlugins,
    }))
