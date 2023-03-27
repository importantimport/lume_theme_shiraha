import type { Page, PageData } from 'lume/core.ts'

export const layout = 'layouts/list.tmpl.ts'
export default function* ({ search, paginate }: PageData) {
  for (const post of paginate(
    search.pages('type!=root', 'date=desc') as Page[],
    {
      url: (n) => (n === 1 ? '/' : `/page/${n}`),
      size: 5,
    }
  )) {
    yield post
  }
}
