import type { PageData, PageHelpers } from '../types.ts'
import {
  type FFFFlavoredFrontmatter,
  toJSONFeedItem,
} from 'npm:fff-flavored-frontmatter'

export default (data: PageData, { md, url, htmlUrl, date }: PageHelpers) =>
  JSON.stringify(
    {
      version: 'https://jsonfeed.org/version/1.1',
      title: data.site.title,
      home_page_url: url('', true),
      feed_url: url(data.url, true),
      next_url: url(data.pagination?.next, true) ?? undefined,
      description: data.site?.description,
      items: data.results?.map(async ({ data: item }) => ({
        ...toJSONFeedItem(item as FFFFlavoredFrontmatter),
        id: url(item.url, true),
        url: url(item.url, true),
        date_published: date(
          item.published ?? item.created ?? item.date,
          'ATOM',
        ),
        date_modified: date(
          item.updated ?? item.published ?? item.created ?? item.date,
          'ATOM',
        ),
        content_html: htmlUrl(await md(item.content), true),
      })),
    },
    null,
    2,
  )
