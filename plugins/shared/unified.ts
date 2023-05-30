// remark plugins
import remarkFFF from 'https://esm.sh/remark-fff'
// rehype plugins
import rehypeStarryNight from 'https://esm.sh/@microflash/rehype-starry-night'

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
