import lumeCMS from 'lume/cms/mod.ts'
import { fffPreset } from './cms/fff.ts'
import { data } from './cms/data.ts'

const cms = lumeCMS()

const fff = fffPreset()

export const ltsCMS = (lumeCMS: typeof cms) =>
  lumeCMS
    // .upload('uploads', 'src:public')
    .upload('uploads: Images', 'src:*.{.jpg,.png,.webp,.avif}')
    // TODO:
    .document('Settings', 'src:_data/lts.yml', data)
    .collection('Articles', 'src:articles/*.md', fff.article())

export default ltsCMS(lumeCMS())
