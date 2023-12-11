import { Page } from 'lume/core/file.ts'
import { merge } from 'lume/core/utils/object.ts'
import {
  argbFromHex,
  Hct,
  hexFromArgb,
  SchemeTonalSpot,
} from 'npm:@material/material-color-utilities@0.2.7'
import { type Scheme, scheme } from 'npm:mcu-extra@0.1.1'

export interface Options {
  color: `#${string}`
  filename: string
}

export const defaults: Options = {
  color: '#6750a4',
  filename: '/tokens.css',
}

type Theme = {
  dark: Scheme
  light: Scheme
}

export default (userOptions?: Partial<Options>) => (site: Lume.Site) => {
  const options = merge(defaults, userOptions)

  const defaultTheme = Object.fromEntries(
    ['light', 'dark'].map((suffix) => [
      suffix,
      scheme(
        new SchemeTonalSpot(
          Hct.fromInt(argbFromHex(options.color)),
          suffix === 'dark',
          0,
        ),
      ),
    ]),
  ) as Theme

  site.addEventListener('beforeRender', ({ pages }) => {
    const tokens = Page.create({
      url: options.filename,
      content: `:root{${
        Object.entries(defaultTheme)
          .map(([suffix, scheme]) =>
            Object.entries(scheme).map(([key, value]) =>
              `--md-sys-color-${
                key.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
              }-${suffix}: ${hexFromArgb(value)}`
            ).join(';')
          )
      }}`,
    })

    // console.log(tokens.content)
    pages.push(tokens)
  })

  // const defaultTheme = {
  //   light: scheme(
  //     new SchemeTonalSpot(Hct.fromInt(argbFromHex(options.color)), false, 0),
  //   ),
  //   dark: scheme(
  //     new SchemeTonalSpot(Hct.fromInt(argbFromHex(options.color)), true, 0),
  //   ),
  // }

  // const tokens = site.getOrCreatePage('/tokens.css')
  // tokens.

  // site.process(
  //   ['.html'],
  //   (pages) =>
  //     pages.forEach((page) =>
  //       page.content = (page.content as string).replaceAll(
  //         '<script></script>',
  //         '',
  //       )
  //     ),
  // )
}
