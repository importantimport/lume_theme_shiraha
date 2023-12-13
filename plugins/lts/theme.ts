import { Page } from 'lume/core/file.ts'
import { read } from 'lume/core/utils/read.ts'
import { merge } from 'lume/core/utils/object.ts'

import {
  cssFromTheme,
  sourceColorFromImage,
  themeFromArgb,
  themeFromHex,
} from './lib/theme_utils.ts'
import { log } from 'lume/core/utils/log.ts'
import { hexFromArgb } from 'npm:@material/material-color-utilities@0.2.7'

export interface Options {
  color: `#${string}`
  filename: string
}

export const defaults: Options = {
  color: '#6750a4',
  filename: '/tokens.css',
}

export default (userOptions?: Partial<Options>) => (site: Lume.Site) => {
  const options = merge(defaults, userOptions)

  const defaultTheme = themeFromHex(options.color)

  site.addEventListener('beforeRender', ({ pages }) => {
    const tokens = Page.create({
      url: options.filename,
      content: cssFromTheme(defaultTheme),
    })

    // console.log(tokens.content)
    pages.push(tokens)
  })

  site.process(
    ['.html'],
    async (pages) => {
      await Promise.all(pages.map(async (page) => {
        const document = page.document!

        // TODO: FFF Object Media
        if (page.data.image) {
          const image = await read(page.data.image, true)
          const color = sourceColorFromImage(image)
          const theme = themeFromArgb(color)

          const style = document.createElement('style')
          style.innerHTML = cssFromTheme(theme)
          page.document!.head.appendChild(style)

          const themeColorLight = document.createElement('meta')
          themeColorLight.setAttribute('name', 'theme-color')
          themeColorLight.setAttribute(
            'content',
            hexFromArgb(theme.light.primaryContainer),
          )
          themeColorLight.setAttribute('media', '(prefers-color-scheme: light)')
          page.document!.head.appendChild(themeColorLight)

          const themeColorDark = document.createElement('meta')
          themeColorDark.setAttribute('name', 'theme-color')
          themeColorDark.setAttribute(
            'content',
            hexFromArgb(theme.dark.primaryContainer),
          )
          themeColorDark.setAttribute('media', '(prefers-color-scheme: dark)')
          page.document!.head.appendChild(themeColorDark)
        } else {
          const link = document.createElement('link')
          link.setAttribute('rel', 'stylesheet')
          link.setAttribute('href', site.url(options.filename))
          page.document!.head.appendChild(link)

          const themeColorLight = document.createElement('meta')
          themeColorLight.setAttribute('name', 'theme-color')
          themeColorLight.setAttribute(
            'content',
            hexFromArgb(defaultTheme.light.primaryContainer),
          )
          themeColorLight.setAttribute('media', '(prefers-color-scheme: light)')
          page.document!.head.appendChild(themeColorLight)

          const themeColorDark = document.createElement('meta')
          themeColorDark.setAttribute('name', 'theme-color')
          themeColorDark.setAttribute(
            'content',
            hexFromArgb(defaultTheme.dark.primaryContainer),
          )
          themeColorDark.setAttribute('media', '(prefers-color-scheme: dark)')
          page.document!.head.appendChild(themeColorDark)
        }
      }))
    },
  )
}
