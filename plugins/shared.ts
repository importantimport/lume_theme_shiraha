import type { Page, Site } from 'lume/core.ts'
import filterPages from 'lume/plugins/filter_pages.ts'
import metas from 'lume/plugins/metas.ts'
import date from 'lume/plugins/date.ts'
import sitemap from 'lume/plugins/sitemap.ts'
import minifyHTML from 'lume/plugins/minify_html.ts'
// import nav from 'lume/plugins/nav.ts'
// import pagefind from 'lume/plugins/pagefind.ts'
import partytown from './experimental/partytown/mod.ts'

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
    .use(partytown({
      config: {
        debug: true,
        forward: ['shiraha'],
        logCalls: true,
        logGetters: true,
        logSetters: true,
        logImageRequests: true,
        logMainAccess: true,
        logScriptExecution: true,
        logStackTraces: true,
      },
    }))
    .use(minifyHTML({ extensions: ['.html', '.css', '.js'] }))
    // .use(nav())
    .preprocess(['.md'], (page: Page) => {
      page.data.excerpt ??= (page.data.content as string).split(
        /<!--\s*more\s*-->/i,
      )[0]
    })
