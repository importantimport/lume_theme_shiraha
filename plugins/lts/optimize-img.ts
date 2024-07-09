import { read } from 'lume/core/utils/read.ts'

import { rgbaToThumbHash } from 'npm:thumbhash@0.1.1'

import { createCanvas, Image } from '../../deps/skia_canvas.ts'

/**
 * Optimize Image Plugin
 */
export default () => (site: Lume.Site) =>
  site.process(
    ['.html'],
    async (pages) => {
      await Promise.all(pages.map(async (page) => {
        const { document } = page
        if (!document) return

        for await (const img of Array.from(document.querySelectorAll('img'))) {
          const src = img.getAttribute('src')
          if (!src) return

          const arr = await read(src, true)
          const image = new Image(arr)

          // set height, width
          img.setAttribute('height', String(image.height))
          img.setAttribute('width', String(image.width))

          // set loading=lazy, decoding=async
          img.setAttribute('loading', 'lazy')
          img.setAttribute('decoding', 'async')

          // set data-sizes=auto (unlazy)
          img.setAttribute('data-sizes', 'auto')

          // set data-thumbhash (unlazy)
          // https://github.com/evanw/thumbhash/blob/main/examples/browser/index.html
          const scale = 100 / Math.max(image.width, image.height)
          const canvas = createCanvas(
            Math.round(image.width * scale),
            Math.round(image.height * scale),
          )
          const context = canvas.getContext('2d')
          context.drawImage(
            image,
            0,
            0,
            canvas.width,
            canvas.height,
          )
          const pixels = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height,
          )
          const binaryThumbHash = rgbaToThumbHash(
            pixels.width,
            pixels.height,
            pixels.data,
          )
          const base64Thumbhash = btoa(
            String.fromCharCode(...binaryThumbHash),
          )
          img.setAttribute('data-thumbhash', base64Thumbhash)
        }
      }))
    },
  )
