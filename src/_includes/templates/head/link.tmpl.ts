import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default ({ site }: PageData, _helpers: PageHelpers) =>
  [
    html`<link rel="icon" href="${ site?.icon ?? 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-.1em%22 y=%22.9em%22 font-size=%2290%22>❄️</text></svg>'}">`,
  ].join('')
