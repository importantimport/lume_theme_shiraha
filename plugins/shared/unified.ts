// remark plugins
import remarkFFF from 'https://esm.sh/remark-fff'
import remarkReadingTime from 'npm:remark-reading-time@2.0.1'
// rehype plugins
import rehypePrettyCode from 'npm:rehype-pretty-code@0.12.1'
// shikiji transformers
// import { transformerNotationDiff } from 'npm:shikiji-transformers@0.8.3'
// import { transformerTwoSlash } from 'npm:shikiji-twoslash@0.8.3'

export const remarkPlugins = [
  remarkReadingTime,
  [
    remarkFFF,
    {
      presets: [],
      target: 'nuxt',
    },
  ],
]

export const rehypePlugins = [
  [
    rehypePrettyCode,
    {
      defaultLang: 'plaintext',
      keepBackground: false,
      theme: {
        // light: 'material-theme-lighter',
        // dark: 'material-theme-darker',
        light: 'github-light',
        dark: 'github-dark',
      },
      // transformers: [
      //   transformerNotationDiff(),
      //   transformerTwoSlash(),
      // ],
    },
  ],
]
