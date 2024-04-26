import { merge } from 'lume/core/utils/object.ts'

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

const defaults: LTSData = {
  author: {
    /** from {@link https://googlefonts.github.io/noto-emoji-animation/?icon.query=%3Asnowflake%3A} */
    avatar: 'https://fonts.gstatic.com/s/e/notoemoji/latest/2744_fe0f/512.webp',
    name: '❄️',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ipsum velit. Vestibulum volutpat sem malesuada ipsum elementum lacinia.',
    links: [
      {
        icon: 'i-simple-icons:github',
        href: 'https://github.com/importantimport/lume_theme_shiraha',
      },
      {
        icon: 'i-simple-icons:deno',
        href: 'https://deno.land/x/lume_theme_shiraha',
      },
      {
        href: 'https://lume.land/theme/shiraha',
      },
    ],
  },
  site: {
    title: 'Lume Theme Shiraha',
    description: 'Material 3-inspired Minimalist Lume Blog Theme.',
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
