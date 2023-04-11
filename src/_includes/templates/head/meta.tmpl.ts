import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default ({ tmp }: PageData, _helpers: PageHelpers) =>
  [
    html`<meta charset="utf-8" />`,
    html`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
    html`<meta name="color-scheme" content="light dark" />`,
    html`<meta name="view-transition" content="same-origin" />`,
  ].join('')
