import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default ({ tags }: PageData, _helpers: PageHelpers) =>
  tags?.map((tag) =>
    html`<span>#<a href="/t/${tag}" class="p-category">${tag}</a></span>`
  )
