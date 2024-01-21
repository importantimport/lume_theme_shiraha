import type { FFFAuthor } from 'fff/src/types.ts'
import { merge } from 'lume/core/utils/object.ts'

export interface LTSData {
  author: FFFAuthor
  site: {
    title: string
    description: string
    icon: string
    lang: string
  }
}

const defaults: LTSData = {
  author: {
    avatar: 'https://ui-avatars.com/api/?name=John+Doe',
    name: 'John Doe',
    url: 'https://example.com',
  },
  site: {
    title: 'Lume Theme Shiraha',
    description: 'Material 3-inspired Lume Blog Theme.',
    icon:
      'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-.1em%22 y=%22.9em%22 font-size=%2290%22>❄️</text></svg>',
    lang: 'en-US',
  },
}

export default (user?: Partial<LTSData>) => (site: Lume.Site) =>
  site.data('lts', merge(defaults, user))

/** Extends Data interface */
declare global {
  namespace Lume {
    export interface Data {
      lts: LTSData
    }
  }
}
