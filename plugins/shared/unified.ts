import type { PluggableList } from 'lume/deps/remark.ts'
// remark plugins
import remarkFFF from 'npm:remark-fff@1.2.1'
import remarkSmartyPants from 'npm:remark-smartypants@2.1.0'
// rehype plugins
import rehypeSlug from 'npm:rehype-slug@5.1.0'
import rehypeAutolinkHeadings from 'npm:rehype-autolink-headings@7.1.0'
import rehypePrettyCode from 'npm:rehype-pretty-code@0.12.1'
// shikiji transformers
// import { transformerNotationDiff } from 'npm:shikiji-transformers@0.8.3'
// import { rendererRich, transformerTwoSlash } from 'npm:shikiji-twoslash@0.8.3'

export const remarkPlugins: PluggableList = [
  [
    remarkFFF,
    {
      presets: [],
      target: 'nuxt',
    },
  ],
  remarkSmartyPants,
]

export const rehypePlugins: PluggableList = [
  // deno-lint-ignore no-explicit-any
  rehypeSlug as any,
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
