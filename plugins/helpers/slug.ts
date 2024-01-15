import { slug } from 'npm:github-slugger@2.0.0'

export default () => (site: Lume.Site) =>
  site.helper('slug', slug, { type: 'tag' })

/** Extends Data interface */
declare global {
  namespace Lume {
    export interface Helpers {
      slug: typeof slug
    }
  }
}
