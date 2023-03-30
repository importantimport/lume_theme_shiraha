import type { Page, PageData } from './_includes/types.ts'
import { filter } from './_includes/utils/pages.ts'

export const layout = 'layouts/list.tmpl.ts'
export default function* ({ search, paginate }: PageData) {
  const tags = search.tags() as string[]
  for (const tag of tags) {
    const pages = filter(
      search.pages(`type!=root|list '${tag}'`, 'date=desc') as Page[],
    )
    for (
      const page of paginate(pages, {
        url: (n) => (n === 1 ? `/t/${tag}/` : `/t/${tag}/${n}/`),
        size: 5,
      })
    ) {
      yield page
    }
  }
}
