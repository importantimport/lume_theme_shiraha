import type { Site } from 'lume/core.ts'
// import { expandGlobSync } from 'fs/expand_glob.ts'
import plugins from './plugins.ts'

export const core =
  () =>
  (site: Site) => {
    // for (const file of expandGlobSync('./src/_includes/*.ts')) {
    //   console.log(file.path)
    //   site.remoteFile(file.path.slice(6), import.meta.resolve(file.path))
    // }
    ;[
      '_includes/layouts/root.tmpl.ts',
      '_includes/layouts/article.tmpl.ts',
      '_includes/layouts/list.tmpl.ts',
    ].forEach((file) =>
      site.remoteFile(file, import.meta.resolve(`./src/${file}`))
    )
  }

export default plugins