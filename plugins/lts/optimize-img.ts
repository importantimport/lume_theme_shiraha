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

                const images = document.querySelectorAll('img')

                for await (const img of Array.from(images)) {
                    if (img.src) {
                        const arr = await read(img.src, true)
                        const image = new Image(arr)

                        // set height, width
                        const { height, width } = image
                        img.setAttribute('height', String(height))
                        img.setAttribute('width', String(width))

                        // generate thumbhash
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

                        img.replaceWith(img)
                    }
                }
            }))
        },
    )
