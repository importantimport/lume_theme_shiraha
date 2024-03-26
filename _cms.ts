import lumeCMS from 'lume/cms.ts'

const cms = lumeCMS()

export const ltsCMS = (lumeCMS: typeof cms) =>
  lumeCMS
    .upload('uploads', 'src:public')
    // TODO:
    // .document('Settings', 'src:_data.yml', [])
    .collection('Articles', 'src:articles/*.md', [
      'title: text',
      // 'date: date',
      'summary: text',
      // 'author: text',
      'draft: checkbox',
      'tags: list',
      'content: markdown',
    ])

export default ltsCMS(lumeCMS())
