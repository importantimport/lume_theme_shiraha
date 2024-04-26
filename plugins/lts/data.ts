import type { FFFAuthor } from '../../deps/fff.ts'

type Link = {
  icon?: `i-simple-icons:${string}`
  href: string
}

export interface LTSData {
  author: Omit<FFFAuthor, 'url'> & {
    bio?: string
    links?: Link[]
  }
  site: {
    title: string
    description: string
    icon: string
    lang: string
  }
}

export default () => (_site: Lume.Site) => {}

/** Extends Data interface */
declare global {
  namespace Lume {
    export interface Data {
      lts: LTSData
    }
  }
}
