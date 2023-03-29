import type { Page, PageData } from './_includes/types.ts'
import { filter } from './_includes/utils/pages.ts'

export const layout = 'layouts/list.tmpl.ts'
export default function* ({ search, paginate }: PageData) {
  const pages = filter(search.pages('type!=root|list', 'date=desc') as Page[])
  for (const page of paginate(pages, {
    url: (n) => (n === 1 ? '/' : `/p/${n}/`),
    size: 5,
  })) {
    yield page
  }
}
