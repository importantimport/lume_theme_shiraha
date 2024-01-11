import type { PluggableList } from 'lume/deps/remark.ts'
// remark plugins
import remarkFFF from 'npm:remark-fff@1.2.0'
import remarkGfm from 'npm:remark-gfm@4.0.0'
import remarkSmartyPants from 'npm:remark-smartypants@2.1.0'
// rehype plugins
import rehypeAutolinkHeadings from 'npm:rehype-autolink-headings@7.1.0'
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
  remarkGfm,
  remarkSmartyPants,
]

export const rehypePlugins: PluggableList = [
  rehypeAutolinkHeadings,
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
