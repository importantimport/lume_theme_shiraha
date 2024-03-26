export const layout = 'layouts/feed.xml.ts'
export default function* ({ search, paginate }: Lume.Data) {
  const pages = search.pages('type=article', 'date=desc')
    .filter((page) => !page.tags.includes('unlisted'))

  for (
    const page of paginate(pages, {
      url: (n) => (n === 1 ? '/feed.xml' : `/p/${n}/feed.xml`),
      size: 5,
    })
  ) {
    yield page
  }
}
