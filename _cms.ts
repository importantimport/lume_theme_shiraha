import lumeCMS from 'lume/cms.ts'

export default lumeCMS()
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
