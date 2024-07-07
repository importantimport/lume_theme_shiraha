import metas from 'lume/plugins/metas.ts'
import minifyHTML from 'lume/plugins/minify_html.ts'

/** @see {@link https://lume.land/plugins/?status=disabled&html=on} */
export const html = () => (site: Lume.Site) =>
    site
        .use(metas())
        .use(minifyHTML({ extensions: ['.html', '.css', '.js'] }))
