import sharedPlugins from './plugins/shared.ts'
import remarkPlugins from './plugins/remark.ts'

const src = (files: string[]) => (site: Lume.Site) =>
  files.forEach((file) =>
    site.remoteFile(file, import.meta.resolve(`./src/${file}`))
  )

export const archetypes = () => src(['_archetypes/article.ts'])

export const data = () =>
  src([
    '_data/authors.yml',
    '_data/date.yml',
    '_data/metas.yml',
    '_data/shiraha.yml',
    '_data/site.yml',
  ])

export const includes = () =>
  src([
    '_includes/layouts/root.page.ts',
    '_includes/layouts/post.page.ts',
    '_includes/layouts/list.page.ts',
    '_includes/layouts/article.page.ts',
  ])

export const pages = () =>
  src([
    '404.md',
    'categories.feed.json.page.ts',
    'categories.page.ts',
    'index.feed.json.page.ts',
    'index.page.ts',
    'styles.css.page.ts',
    'tags.feed.json.page.ts',
    'tags.page.ts',
  ])

export const templates = () => (site: Lume.Site) =>
  site.use(includes()).use(archetypes()).use(data()).use(pages())

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
