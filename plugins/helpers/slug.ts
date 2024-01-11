import GithubSlugger, { type slug } from 'npm:github-slugger@2.0.0'

export default () => (site: Lume.Site) => {
  const slugger = new GithubSlugger()
  site.helper('slug', slugger.slug, { type: 'tag' })
}

/** Extends Data interface */
declare global {
  namespace Lume {
    export interface Helpers {
      slug: typeof slug
    }
  }
}
