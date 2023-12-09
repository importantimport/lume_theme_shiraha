// import { getGitDate } from 'lume/core/utils/date.ts'
import filterPages from 'lume/plugins/filter_pages.ts'
import metas from 'lume/plugins/metas.ts'
// import date from 'lume/plugins/date.ts'
import sitemap from 'lume/plugins/sitemap.ts'
// import minifyHTML from 'lume/plugins/minify_html.ts'
// import nav from 'lume/plugins/nav.ts'
// import pagefind from 'lume/plugins/pagefind.ts'
import unocss from 'lume/plugins/unocss.ts'

export default () => (site: Lume.Site) =>
  site
    .use(
      filterPages({
        fn: ({ data }) =>
          !(
            Deno.env.get('DENO_ENV') === 'prod' &&
            // https://fff.js.org/concepts/flags.html
            data.flags?.some((flag: string) =>
              ['private', 'draft'].includes(flag)
            )
          ),
      }),
    )
    .use(metas())
    // .use(date())
    .use(sitemap())
    .use(unocss({
      // config: {
      //   preflights: undefined,
      // },
      cssFile: '/uno.css',
      // cssFileTransformers: [
      //   transformerVariantGroup(),
      //   transformerDirectives(),
      // ],
    }))
// .use(minifyHTML({ extensions: ['.html', '.css', '.js'] }))
// .use(nav())
// .preprocess(['.md'], (pages) =>
//   pages.forEach((page) => {
//     page.data.excerpt ??= (page.data.content as string).split(
//       /<!--\s*more\s*-->/i,
//     )[0]
//     if (!page.data.updated) {
//       page.data.updated = getGitDate('modified', page.src.entry.src)
//     }
//   }))
