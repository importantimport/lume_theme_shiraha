import sharedPlugins from './plugins/shared.ts'
import remarkPlugins from './plugins/remark.ts'

const src = (path = '/', files: string[]) => () => (site: Lume.Site) =>
  files.forEach((file) =>
    site.remoteFile(
      `${path}${file}`,
      import.meta.resolve(`./src${path}${file}`),
    )
  )

export const archetypes = src('/_archetypes/', ['article.ts'])

export const components = src('/_components/', [
  'container.tsx',
  'footer.tsx',
  'head.tsx',
  'header.tsx',
  'hero.tsx',
  'pagination.tsx',
  'posts.tsx',
  'tags.tsx',
])

export const data = src('/', [
  '_data/lts.yml',
  '_data/metas.yml',
  'articles/_data.yml',
])

export const includes = src('/_includes/', [
  'layouts/article-list.tsx',
  'layouts/article.tsx',
  'layouts/body.tsx',
  'layouts/feed.json.ts',
  'layouts/feed.xml.ts',
  'styles/theme.dark.css',
  'styles/theme.light.css',
])

export const pages = src('/', [
  'index.feed.json.page.ts',
  'index.feed.xml.page.ts',
  'index.page.ts',
  'styles.css',
  // '404.md',
  // 'categories.feed.json.page.ts',
  // 'categories.page.ts',
  // 'index.feed.json.page.ts',
  // 'index.page.ts',
  // 'styles.css.page.ts',
  // 'tags.feed.json.page.ts',
  // 'tags.page.ts',
])

export const templates = () => (site: Lume.Site) =>
  site
    .use(archetypes())
    .use(components())
    .use(data())
    .use(includes())
    .use(pages())

export const lts = () => (site: Lume.Site) =>
  site.use(templates()).use(sharedPlugins()).use(remarkPlugins())

// --- templates ---
// archetypes (_archetypes)
// data (_data)
// includes (_includes)
// pages (*.page.ts)
// *templates* (archetypes + data + includes + pages)

// --- plugins ---
// base (plugins/shared)
// remark (plugins/remark)
// mdx (plugins/mdx) (TODO)
// extra (plugins/extra) (TODO)

// --- default ---
// lts (templates + plugins/base + plugins/remark)

export default lts
