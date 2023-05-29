import type { Page, PageData } from './_includes/types.ts'
import { query } from './_includes/utils/search.ts'

export const layout = 'layouts/list.tmpl.ts'
export default function* ({ search, paginate }: PageData) {
  const categories = search.values('categories') as string[]
  for (const category of categories) {
    const pages = search.pages(
      [...query, `categories*=${category}`],
      'date=desc',
    ) as Page[]
    for (
      const page of paginate(pages, {
        url: (n) => (n === 1 ? `/c/${category}/` : `/t/${category}/${n}/`),
        size: 5,
      })
    ) {
      yield page
    }
  }
}
