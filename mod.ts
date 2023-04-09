import type { Site } from 'lume/core.ts'
// import { expandGlobSync } from 'fs/expand_glob.ts'
import basePlugins from './plugins/base.ts'

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
  src(['_data/authors.yml', '_data/metas.yml', '_data/shiraha.yml'])

export const pages = () => src(['index.tmpl.ts', 'tags.tmpl.ts'])

export const shirahaSrc = () => (site: Site) =>
  site.use(includes()).use(archetypes()).use(data()).use(pages())

export const shiraha = () => (site: Site) =>
  site.use(shirahaSrc()).use(basePlugins())

// for (const file of expandGlobSync('./src/_includes/*.ts')) {
//   console.log(file.path)
//   site.remoteFile(file.path.slice(6), import.meta.resolve(file.path))
// }

// default: shiraha (Src + Plugins)
// shirahaSrc (Src)
// shirahaMDX (Src + Plugins + JSX&MDX)
// includes (_includes)
// archetypes (_archetypes)
// data (_data.yml)
// index (index.tmpl.ts)

export default shiraha
