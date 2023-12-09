import remark from 'lume/plugins/remark.ts'
import { rehypePlugins, remarkPlugins } from './shared/unified.ts'

export default () => (site: Lume.Site) =>
  site
    .use(remark({
      remarkPlugins,
      rehypePlugins,
    }))
