export const layout = 'layouts/article-list.tsx'
export default function* ({ search, paginate }: Lume.Data) {
  const pages = search.pages('type=article', 'date=desc')
    .filter((page) => !page.tags.includes('unlisted'))

  for (
    const page of paginate(pages, {
      url: (n) => (n === 1 ? '/' : `/p/${n}/`),
      size: 5,
    })
  ) {
    yield page
  }
}
