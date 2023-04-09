import lume from 'lume/mod.ts'
// import { shiraha } from './mod.ts'
import sharedPlugins from './plugins/shared.ts'
// import multilanguage from 'lume/plugins/multilanguage.ts'

export default lume({
  src: './src',
  location: new URL('https://importantimport.github.io/lume_theme_shiraha/'),
})
  .use(sharedPlugins())
// .use(
//   multilanguage({
//     languages: ['en', 'zh', 'ja'],
//   }),
// )
