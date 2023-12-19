import type { PluggableList } from 'lume/deps/remark.ts'
// remark plugins
import remarkFFF from 'https://esm.sh/remark-fff'
// rehype plugins
import rehypePrettyCode from 'npm:rehype-pretty-code@0.12.1'
// shikiji transformers
// import { transformerNotationDiff } from 'npm:shikiji-transformers@0.8.3'
// import { rendererRich, transformerTwoSlash } from 'npm:shikiji-twoslash@0.8.3'

// deno-lint-ignore no-explicit-any
export const remarkPlugins: any[] = [
  [
    remarkFFF,
    {
      presets: [],
      target: 'nuxt',
    },
  ],
]

export const rehypePlugins: PluggableList = [
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
      //   transformerTwoSlash({
      //     explicitTrigger: true,
      //     renderer: rendererRich(),
      //   }),
      // ],
    },
  ],
]
