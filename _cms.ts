import lumeCMS from 'lume/cms.ts'
import { fffPreset } from './cms/fff.ts'

const cms = lumeCMS()

const fff = fffPreset()

export const ltsCMS = (lumeCMS: typeof cms) =>
  lumeCMS
    // .upload('uploads', 'src:public')
    .upload('uploads: Images', 'src:*.{.jpg,.png,.webp,.avif}')
    // TODO:
    // .document('Settings', 'src:_data.yml', [])
    .collection('Articles', 'src:articles/*.md', fff.article())

export default ltsCMS(lumeCMS())
