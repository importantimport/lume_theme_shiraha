// import nav from 'lume/plugins/nav.ts'
import pagefind from 'lume/plugins/pagefind.ts'
import sitemap from 'lume/plugins/sitemap.ts'

/** @see {@link https://lume.land/plugins/?status=disabled&nav=on} */
export const navigation = () => (site: Lume.Site) =>
    site
        // .use(nav())
        .use(sitemap())
        .use(pagefind({
            outputPath: '/search',
            ui: { resetStyles: false },
        }))
