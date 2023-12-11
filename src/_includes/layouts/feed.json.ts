/** @see {@link https://github.com/lumeland/lume/blob/main/plugins/feed.ts} */
const clean = (obj: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, value]) =>
      value !== undefined && value !== null
    ),
  )

export default (
  data: Lume.Data,
  { url }: Lume.Helpers,
  // { md, url, htmlUrl }: Lume.Helpers,
) =>
  JSON.stringify(
    clean({
      version: 'https://jsonfeed.org/version/1.1',
      title: data.site.title,
      home_page_url: url('', true),
      feed_url: url(data.url, true),
      next_url: data.pagination?.next
        ? url(data.pagination.next, true)
        : undefined,
      description: data.site?.description,
      items: data.results?.map((result) => {
        const item = result as unknown as Lume.Data
        return clean({
          // TOOD: fix toJSONFeedItem
          // ...toJSONFeedItem(item as FFFFlavoredFrontmatter),
          id: url(item.url, true),
          url: url(item.url, true),
          date_published: new Date(item.published ?? item.created ?? item.date)
            .toISOString(),
          date_modified: new Date(
            item.updated ?? item.published ?? item.created ?? item.date,
          ).toISOString(),
          // content_html: item.content
          //   ? htmlUrl(md(item.content as string), true)
          //   : undefined,
        })
      }) as object[],
    }),
  )
