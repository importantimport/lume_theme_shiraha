// remark plugins
import remarkFFF from 'npm:remark-fff'
// rehype plugins
import rehypeStarryNight from 'npm:@microflash/rehype-starry-night'

export const remarkPlugins = [
  [
    remarkFFF,
    {
      presets: [],
      target: 'nuxt',
    },
  ],
]

export const rehypePlugins = [
  rehypeStarryNight,
]
