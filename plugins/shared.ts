import html from './helpers/html.ts'
import slug from './helpers/slug.ts'
import data from './lts/data.ts'
import jsx from './lts/jsx.ts'
import theme from './lts/theme.ts'
import readInfo from './patched/reading_info.ts'
// import { getGitDate } from 'lume/core/utils/date.ts'
// import filterPages from 'lume/plugins/filter_pages.ts'
import metas from 'lume/plugins/metas.ts'
import fff from 'lume/plugins/fff.ts'
// import date from 'lume/plugins/date.ts'
import sitemap from 'lume/plugins/sitemap.ts'
import minifyHTML from 'lume/plugins/minify_html.ts'
// import nav from 'lume/plugins/nav.ts'
import pagefind from 'lume/plugins/pagefind.ts'
import unocss from 'lume/plugins/unocss.ts'
import options from '../uno.config.ts'
import lightningcss from 'lume/plugins/lightningcss.ts'

export default () => (site: Lume.Site) =>
  site
    .use(html())
    .use(slug())
    .use(data())
    .use(jsx())
    .use(theme({
      color: '#099ad9',
      filename: '/styles/tokens.css',
    }))
    .use(readInfo())
    .use(metas())
    .use(fff({
      date: 'created', // TODO: published
      getGitDate: true,
    }))
    // .use(date())
    .use(sitemap())
    .use(unocss({
      options,
      cssFile: '/uno.css',
      reset: 'tailwind',
    }))
    .use(lightningcss())
    .use(minifyHTML({ extensions: ['.html', '.css', '.js'] }))
    // .use(nav())
    .use(pagefind({
      outputPath: '/search',
      ui: { resetStyles: false },
    }))
// .preprocess(['.md'], (pages) =>
//   pages.forEach((page) => {
//     page.data.excerpt ??= (page.data.content as string).split(
//       /<!--\s*more\s*-->/i,
//     )[0]
//     if (!page.data.updated) {
//       page.data.updated = getGitDate('modified', page.src.entry.src)
//     }
//   }))
