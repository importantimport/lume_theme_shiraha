import type { Page, PageData } from './_includes/types.ts'
import { query } from './_includes/utils/search.ts'

export const layout = 'layouts/feed.json.tmpl.ts'
export default function* ({ search, paginate }: PageData) {
  const tags = search.tags() as string[]
  for (const tag of tags) {
    const pages = search.pages(
      [...query, `tags*=${tag}`],
      'date=desc',
    ) as Page[]
    for (
      const page of paginate(pages, {
        url: (n) => (n === 1 ? `/t/${tag}/feed.json` : `/t/${tag}/${n}/feed.json`),
        size: 5,
      })
    ) {
      yield page
    }
  }
}
