import mdx from 'lume/plugins/mdx.ts'
import { remarkPlugins } from './unified/remark.ts'
import { rehypePlugins } from './unified/rehype.ts'

export default () => (site: Lume.Site) =>
  site
    .use(mdx({
      remarkPlugins,
      rehypePlugins,
    }))
