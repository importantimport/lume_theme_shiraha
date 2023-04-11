import type { PageData, PageHelpers } from '../types.ts'
import { toJSONFeedItem } from 'npm:fff-flavored-frontmatter'

export default (data: PageData, { md, url, htmlUrl }: PageHelpers) => JSON.stringify({
  version: 'https://jsonfeed.org/version/1.1',
  title: data.site.title,
  home_page_url: url('', true),
  feed_url: url(data.url, true),
  next_url: url(data.pagination.next, true),
  description: data.site?.description,
  items: data.results?.map(({ data }) => ({
    ...toJSONFeedItem(data),
    id: url(data.url, true),
    url: url(data.url, true),
    content_html: htmlUrl(md(data.content), true),
  }))
}, null, 2)
