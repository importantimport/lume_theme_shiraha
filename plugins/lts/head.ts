export interface DocumentMeta {
  content?: string
  httpEquiv?: string
  name?: string
  property?: string
  itemprop?: string
  media?: string
}

export interface DocumentLink {
  as?: string
  // crossorigin?: string
  crossorigin?: '' | 'anonymous' | 'use-credentials'
  disabled?: boolean
  href?: string
  hreflang?: string
  id?: string
  imagesizes?: string
  imagesrcset?: string
  integrity?: string
  media?: string
  prefetch?: string
  // referrerpolicy?: string
  referrerpolicy?:
    | ''
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
  rel?: string
  sizes?: string
  title?: string
  type?: string
}

// export interface DocumentStyle {
//   // TODO
// }

// export interface DocumentScript {
//   // TODO
// }

export type DocumentHead = {
  metas?: DocumentMeta[]
  links?: DocumentLink[]
  // styles?: DocumentStyle[]
  // scripts?: DocumentScript[]
}

// export default () => (site: Lume.Site) => {
//   site.process(
//     ['.html'],
//     (pages) =>
//       pages.forEach((page) => {
//         if (page.data.head) {
//           const head = page.data.head as DocumentHead

//           head.metas?.forEach((meta) => {
//             const el = page.document!.createElement('meta')
//             Object.entries(meta).forEach(([k, v]) => el.setAttribute(k, v))
//             page.document!.appendChild(el)
//           })

//           head.links?.forEach((link) => {
//             const el = page.document!.createElement('link')
//             Object.entries(link).forEach(([k, v]) => el.setAttribute(k, v))
//             page.document!.appendChild(el)
//           })
//         }
//       }),
//   )
// }

/** Extends Data interface */
declare global {
  namespace Lume {
    export interface Data {
      head?: DocumentHead
    }
  }
}
