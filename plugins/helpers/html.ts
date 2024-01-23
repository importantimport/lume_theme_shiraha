import { html } from '../../deps/hono_jsx.ts'

export default () => (site: Lume.Site) =>
  site.helper('html', html, { type: 'tag' })

/** Extends Data interface */
declare global {
  namespace Lume {
    export interface Helpers {
      html: typeof html
    }
  }
}
