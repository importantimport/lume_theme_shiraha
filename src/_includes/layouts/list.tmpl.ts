import type { PageData, PageHelpers } from 'lume/core.ts'

export const layout = 'layouts/root.tmpl.ts'
export default ({ results }: PageData, _helpers: PageHelpers) =>
  results?.map((result) => `<h2>${result.data.title}</h2>`)
