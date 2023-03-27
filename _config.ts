import lume from 'lume/mod.ts'
import shiraha from './mod.ts'

export default lume({
  src: './src',
  location: new URL('https://importantimport.github.io/lume_theme_shiraha/'),
})
  .use(shiraha())
