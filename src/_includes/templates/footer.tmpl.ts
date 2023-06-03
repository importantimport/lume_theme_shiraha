import type { PageData, PageHelpers } from '../types.ts'
import { html } from '../utils/html.ts'

export default ({ authors }: PageData, { url }: PageHelpers) =>
  html`<footer>
    <p>
      <span>© ${authors?.map((author) => author.name).join(', ')}</span>
      <span>·</span>
      <span>Powered by</span>
      <a href="https://github.com/importantimport/lume_theme_shiraha">Lume Theme Shiraha</a>
      <span>|</span>
      <a href="${url('/feed.json')}">Feed</a>
    </p>
  </footer>`
