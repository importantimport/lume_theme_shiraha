import { toJSONFeedItem } from '../../../deps/fff.ts'

/** @see {@link https://github.com/lumeland/lume/blob/main/plugins/feed.ts} */
export const clean = (obj: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([, value]) => value !== undefined && value !== null)
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)),
  )

export const generateObject = async (
  data: Lume.Data,
  { md, url, htmlUrl }: Lume.Helpers,
) =>
  clean({
    version: 'https://jsonfeed.org/version/1.1',
    title: data.lts.site.title,
    home_page_url: url('', true),
    feed_url: url(data.url, true),
    next_url: data.pagination?.next
      ? url(data.pagination.next, true)
      : undefined,
    description: data.lts.site.description,
    authors: [data.lts.author],
    items: await Promise.all(
      data.results?.map(async (item) =>
        clean({
          ...toJSONFeedItem(item, {
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

/** @see {@link https://github.com/lumeland/lume/blob/main/plugins/feed.ts} */
export const generateJson = async (
  data: Lume.Data,
  helpers: Lume.Helpers,
) => JSON.stringify(await generateObject(data, helpers))
