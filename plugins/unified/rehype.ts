import type { PluggableList } from 'lume/deps/remark.ts'
import rehypeSlug from 'npm:rehype-slug@5.1.0'
import rehypeAutolinkHeadings from 'npm:rehype-autolink-headings@7.1.0'
import rehypePrettyCode from 'npm:rehype-pretty-code@0.13.2'
// shiki transformers
import { transformerNotationDiff } from 'npm:@shikijs/transformers@1.10.3'
import { transformerTwoslash } from 'npm:@shikijs/twoslash@1.10.3'
import { transformerCopyButton } from 'npm:@rehype-pretty/transformers@0.13.2'

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
      transformers: [
        transformerNotationDiff(),
        transformerTwoslash({
          cache: undefined,
          explicitTrigger: true,
        }),
        transformerCopyButton(),
      ],
    },
  ],
]
