import lume from 'lume/mod.ts'
// import { shiraha } from './mod.ts'
import sharedPlugins from './plugins/shared.ts'
import remarkPlugins from './plugins/remark.ts'
// import multilanguage from 'lume/plugins/multilanguage.ts'
// Experimental
import optimizeImg from './plugins/lts/optimize-img.ts'

const site = lume({
  src: './src',
  location: new URL('https://lume.shiraha.js.org/'),
}, { markdown: {} })
  .use(sharedPlugins())
  .use(remarkPlugins())
  // Experimental
  .use(optimizeImg())
// .use(
//   multilanguage({
//     languages: ['en', 'zh', 'ja'],
//   }),
// )

export default site
