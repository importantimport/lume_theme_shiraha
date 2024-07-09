import unocss from 'lume/plugins/unocss.ts'
import lightningcss from 'lume/plugins/lightningcss.ts'
import options from '../../uno.config.ts'

/** @see {@link https://lume.land/plugins/?status=disabled&styles=on} */
export const styles = () => (site: Lume.Site) =>
  site
    .use(unocss({
      options,
      cssFile: '/uno.css',
      reset: 'tailwind',
    }))
    .use(lightningcss())
