import type { Engine, Helper } from 'lume/core/renderer.ts'
import loader from 'lume/core/loaders/module.ts'
import { merge } from 'lume/core/utils/object.ts'

import { jsx, type JSXNode } from '../../deps/hono_jsx.ts'

export interface Options {
  /** The list of extensions this plugin applies to */
  extensions?: string[]

  /** Optional sub-extension for page files */
  pageSubExtension?: string

  /**
   * Custom includes path
   * @default `site.options.includes`
   */
  includes?: string
}

// Default options
export const defaults: Options = {
  extensions: ['.jsx', '.tsx'],
}

export class HonoJsxEngine implements Engine {
  jsxImportSource = 'hono/jsx'
  helpers: Record<string, Helper> = {}
  basePath: string
  includes: string

  constructor(basePath: string, includes: string) {
    this.basePath = basePath
    this.includes = includes
  }

  deleteCache() {}

  async render(
    content: unknown,
    data: Partial<Lume.Data> & Record<string, unknown> = {},
    // filename?: string | undefined,
  ) {
    // The content is a string, so we have to convert it to a element
    if (typeof content === 'string') {
      // content = jsx('div', {
      //   dangerouslySetInnerHTML: { __html: content },
      // })
      content = jsx('script', {
        dangerouslySetInnerHTML: { __html: `</script>${content}<script>` },
      })
    }

    // Create the children property
    let children = data.content

    // If the children is a string, convert it to a element
    if (typeof children === 'string') {
      // children = jsx('div', {
      //   dangerouslySetInnerHTML: { __html: children },
      // })
      children = jsx('script', {
        dangerouslySetInnerHTML: { __html: `</script>${children}<script>` },
      })
    }

    const element = typeof content === 'object'
      ? content
      : (typeof content === 'function'
        ? await content({ ...data, children }, this.helpers)
        : content)

    return element
  }

  renderComponent(
    content: unknown,
    data: Partial<Lume.Data> & Record<string, unknown> = {},
  ) {
    const element = typeof content === 'function'
      ? content(data, this.helpers)
      : content

    return element
  }

  addHelper(name: string, fn: Helper) {
    this.helpers[name] = fn
  }
}

/** Register the plugin to support JSX and TSX files */
export default (userOptions?: Partial<Options>) => (site: Lume.Site) => {
  const options = merge(
    { ...defaults, includes: site.options.includes },
    userOptions,
  )
  const engine = new HonoJsxEngine(
    site.src('/'),
    options.includes,
  )

  site.loadPages(options.extensions, {
    loader,
    engine,
    pageSubExtension: options.pageSubExtension,
  })

  site.process(
    ['.html'],
    (pages) =>
      pages.forEach((page) =>
        page.content = (page.content as string).replaceAll(
          '<script></script>',
          '',
        )
      ),
  )
}

/** Extends Data interface */
declare global {
  namespace Lume {
    export interface Data {
      /**
       * The JSX children elements
       * @see https://lume.land/plugins/jsx/
       */
      children?: JSXNode | JSXNode[]
    }
  }
}
