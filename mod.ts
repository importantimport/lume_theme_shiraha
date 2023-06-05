import type { Site } from 'lume/core.ts'
// import { expandGlobSync } from 'fs/expand_glob.ts'
import sharedPlugins from './plugins/shared.ts'

const src = (files: string[]) => (site: Site) =>
  files.forEach((file) =>
    site.remoteFile(file, import.meta.resolve(`./src/${file}`))
  )

export const includes = () =>
  src([
    '_includes/layouts/root.tmpl.ts',
    '_includes/layouts/post.tmpl.ts',
    '_includes/layouts/list.tmpl.ts',
    '_includes/layouts/article.tmpl.ts',
  ])

export const archetypes = () => src(['_archetypes/article.ts'])

export const data = () =>
  src([
    '_data/authors.yml',
    '_data/date.yml',
    '_data/metas.yml',
    '_data/shiraha.yml',
    '_data/site.yml',
  ])

export const pages = () =>
  src([
    '404.md',
    'categories.feed.json.tmpl.ts',
    'categories.tmpl.ts',
    'index.feed.json.tmpl.ts',
    'index.tmpl.ts',
    'styles.css.tmpl.ts',
    'tags.feed.json.tmpl.ts',
    'tags.tmpl.ts',
  ])

export const ltsSrc = () => (site: Site) =>
  site.use(includes()).use(archetypes()).use(data()).use(pages())

export const lts = () => (site: Site) => site.use(ltsSrc()).use(sharedPlugins())

// for (const file of expandGlobSync('./src/_includes/*.ts')) {
//   console.log(file.path)
//   site.remoteFile(file.path.slice(6), import.meta.resolve(file.path))
// }

// default: lts (Src + Plugins)
// ltsSrc (Src)
// ltsMDX (Src + Plugins + JSX&MDX)
// includes (_includes)
// archetypes (_archetypes)
// data (_data)
// pages (*.tmpl.ts)

export default lts
