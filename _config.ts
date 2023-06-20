import lume from 'lume/mod.ts'
// import { shiraha } from './mod.ts'
import sharedPlugins from './plugins/shared.ts'
import remarkPlugins from './plugins/remark.ts'
// import multilanguage from 'lume/plugins/multilanguage.ts'

export default lume({
  src: './src',
  location: new URL('https://lume.shiraha.js.org/'),
})
  .use(sharedPlugins())
  .use(remarkPlugins())
// .use(
//   multilanguage({
//     languages: ['en', 'zh', 'ja'],
//   }),
// )
