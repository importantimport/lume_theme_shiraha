// import date from 'lume/plugins/date.ts'
import fff from 'lume/plugins/fff.ts'
import readInfo from '../patched/reading_info.ts'

/** @see {@link https://lume.land/plugins/?status=disabled&utils=on} */
export const utils = () => (site: Lume.Site) =>
  site
    // .use(date())
    .use(fff({
      date: 'created', // TODO: published
      getGitDate: true,
    }))
    .use(readInfo())
