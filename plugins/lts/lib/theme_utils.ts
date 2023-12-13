import {
  argbFromHex,
  argbFromRgb,
  Hct,
  hexFromArgb,
  QuantizerCelebi,
  SchemeContent,
  SchemeTonalSpot,
  Score,
} from 'npm:@material/material-color-utilities@0.2.7'

import { type Scheme, scheme } from 'npm:mcu-extra@0.1.1'

import {
  createCanvas,
  Image,
} from 'https://deno.land/x/skia_canvas@0.5.5/mod.ts'
// import { log } from 'lume/core/utils/log.ts'

export type Theme = {
  dark: Scheme
  light: Scheme
}

export const sourceColorFromImage = (
  src: Uint8Array,
): number => {
  // Convert Image data to Pixel Array
  // const imageBytes = await new Promise<Uint8ClampedArray>(
  //   (resolve, reject) => {
  //     const image = new Image(src)
  //     if (image) {
  //       log.info(`width: ${image.width}\nheight: ${image.height}`)
  //     }
  //     const canvas = createCanvas(image.width, image.height)
  //     const context = canvas.getContext('2d')
  //     if (!context) {
  //       reject(new Error('Could not get canvas context'))
  //       return
  //     }
  //     try {
  //       context.drawImage(image, 0, 0)
  //     } catch (err) {
  //       log.error(err)
  //     }
  //     resolve(context.getImageData(0, 0, image.width, image.height).data)
  //   },
  // )
  const image = new Image(src)
  const canvas = createCanvas(image.width, image.height)
  const context = canvas.getContext('2d')
  context.drawImage(image, 0, 0, 256, 256)

  const { data: imageBytes } = context.getImageData(
    0,
    0,
    256,
    256,
    // image.width,
    // image.height,
  )

  // Convert Image data to Pixel Array
  const pixels: number[] = []
  for (let i = 0; i < imageBytes.length; i += 4) {
    const r = imageBytes[i]
    const g = imageBytes[i + 1]
    const b = imageBytes[i + 2]
    const a = imageBytes[i + 3]
    if (a < 255) {
      continue
    }
    const argb = argbFromRgb(r, g, b)
    pixels.push(argb)
  }

  // Convert Pixels to Material Colors
  const result = QuantizerCelebi.quantize(pixels, 128)
  const ranked = Score.score(result)
  const top = ranked[0]
  return top
}

export const themeFromArgb = (argb: number) =>
  Object.fromEntries(
    ['light', 'dark'].map((suffix) => [
      suffix,
      scheme(
        // new SchemeContent(
        //   Hct.fromInt(argb),
        //   suffix === 'dark',
        //   0,
        // ),
        new SchemeTonalSpot(
          Hct.fromInt(argb),
          suffix === 'dark',
          0,
        ),
      ),
    ]),
  ) as Theme

export const themeFromHex = (hex: string) => themeFromArgb(argbFromHex(hex))

export const cssFromTheme = (theme: Theme) =>
  `:root{${
    Object.entries(theme)
      .map(([suffix, scheme]) =>
        Object.entries(scheme).map(([key, value]) =>
          `--md-sys-color-${
            key.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
          }-${suffix}: ${hexFromArgb(value)}`
        ).join(';')
      )
  }}`
