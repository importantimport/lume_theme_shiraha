export const layout = 'layouts/feed.json.ts'
export default function* ({ search, paginate }: Lume.Data) {
  const pages = search.pages('type=article', 'date=desc')
  for (
    const page of paginate(pages, {
      url: (n) => (n === 1 ? '/feed.json' : `/p/${n}/feed.json`),
      size: 5,
    })
  ) {
    yield page
  }
}
