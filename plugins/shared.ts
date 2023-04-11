import type { Page, Site } from 'lume/core.ts'
import filterPages from 'lume/plugins/filter_pages.ts'
import metas from 'lume/plugins/metas.ts'
import date from 'lume/plugins/date.ts'
import sitemap from 'lume/plugins/sitemap.ts'
// import nav from 'lume/plugins/nav.ts'
// import pagefind from 'lume/plugins/pagefind.ts'

export default () => (site: Site) =>
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
    .use(date())
    .use(sitemap())
    // .use(nav())
    //     .use(pagefind({ binary: { extended: true } }))
    //     .preprocess(['.html'], page => {
    //       page.data.tmp.schemes = {}
    //     })
    .preprocess(['.md'], (page: Page) => {
      page.data.excerpt ??= (page.data.content as string).split(
        /<!--\s*more\s*-->/i,
      )[0]
    })
