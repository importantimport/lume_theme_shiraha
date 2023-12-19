import readInfo, { type ReadingInfo } from 'lume/plugins/reading_info.ts'

export default () => (site: Lume.Site) => site.use(readInfo())

/** Extends Data interface */
declare global {
  namespace Lume {
    export interface Data {
      readingInfo?: ReadingInfo
    }
  }
}
