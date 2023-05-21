import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default ({ site }: PageData, { url }: PageHelpers) =>
  [
    html`<link rel="icon" href="${site.icon}">`,
    html`<link rel="stylesheet" href="${url('/styles.css')}" />`,
  ].join('')
