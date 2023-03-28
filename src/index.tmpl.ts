import type { Page, PageData } from './_includes/types.ts'

export const layout = 'layouts/list.tmpl.ts'
export default function* ({ search, paginate }: PageData) {
  const pages = search.pages('type!=root|list|tag', 'date=desc') as Page[]
  for (const page of paginate(pages, {
    url: (n) => (n === 1 ? '/' : `/p/${n}/`),
    size: 5,
  })) {
    yield page
  }
}
