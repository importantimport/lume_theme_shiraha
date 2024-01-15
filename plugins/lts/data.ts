import type { FFFAuthor } from 'fff/src/types.ts'
import { merge } from 'lume/core/utils/object.ts'

export interface LTSData {
  author: FFFAuthor
}

const defaults: LTSData = {
  author: {
    avatar: 'https://ui-avatars.com/api/?name=John+Doe',
    name: 'John Doe',
    url: 'https://example.com',
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
