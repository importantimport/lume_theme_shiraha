import type { FFFFlavoredFrontmatter } from 'fff/src/types.ts'
import { toJSONFeedItem } from 'fff/src/utils/feed.ts'

/** @see {@link https://github.com/lumeland/lume/blob/main/plugins/feed.ts} */
const clean = (obj: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([, value]) => value !== undefined && value !== null)
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)),
  )

export default async (
  data: Lume.Data,
  { md, url, htmlUrl }: Lume.Helpers,
) =>
  JSON.stringify({
    version: 'https://jsonfeed.org/version/1.1',
    ...clean({
      title: data.site.title,
      home_page_url: url('', true),
      feed_url: url(data.url, true),
      next_url: data.pagination?.next
        ? url(data.pagination.next, true)
        : undefined,
      description: data.site?.description,
    }),
    items: await Promise.all(
      data.results?.map(async (item) =>
        clean({
          ...toJSONFeedItem(item as FFFFlavoredFrontmatter, {
            id: url(item.url, true),
            url: url(item.url, true),
            content_html: item.content
              ? htmlUrl(await md(item.content as string), true)
              : undefined,
          }),
          date_published: new Date(
            item.published ?? item.created ?? item.date,
          )
            .toISOString(),
          date_modified: item.updated
            ? new Date(item.updated).toISOString()
            : undefined,
        })
      ) as object[],
    ),
  })
