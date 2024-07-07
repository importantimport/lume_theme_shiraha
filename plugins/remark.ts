import remark from 'lume/plugins/remark.ts'
import { remarkPlugins } from './unified/remark.ts'
import { rehypePlugins } from './unified/rehype.ts'

export default () => (site: Lume.Site) =>
  site
    .use(remark({
      remarkPlugins,
      rehypePlugins,
    }))
