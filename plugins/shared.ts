import htmlHelper from './helpers/html.ts'
import slugHelper from './helpers/slug.ts'
import data from './lts/data.ts'
import jsx from './lts/jsx.ts'
import theme from './lts/theme.ts'
import { html } from './shared/html.ts'
import { styles } from './shared/styles.ts'
import { urls } from './shared/urls.ts'
import { navigation } from './shared/navigation.ts'
import { utils } from './shared/utils.ts'

export default () => (site: Lume.Site) =>
  site
    .use(htmlHelper())
    .use(slugHelper())
    .use(data())
    .use(jsx())
    .use(theme({
      color: '#099ad9',
      filename: '/styles/tokens.css',
    }))
    .use(html())
    .use(navigation())
    .use(styles())
    .use(urls())
    .use(utils())
// .preprocess(['.md'], (pages) =>
//   pages.forEach((page) => {
//     page.data.excerpt ??= (page.data.content as string).split(
//       /<!--\s*more\s*-->/i,
//     )[0]
//     if (!page.data.updated) {
//       page.data.updated = getGitDate('modified', page.src.entry.src)
//     }
//   }))
