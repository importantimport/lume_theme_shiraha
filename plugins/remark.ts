import type { Site } from 'lume/core.ts'
// import remark from 'lume/plugins/remark.ts'
import remark from './patch/remark.ts'
import { rehypePlugins, remarkPlugins } from './shared/unified.ts'

export default () => (site: Site) =>
  site
    .use(remark({
      remarkPlugins,
      rehypePlugins,
    }))
