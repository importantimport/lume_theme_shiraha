import lumeCMS from 'lume/cms.ts'

export default lumeCMS({
  site: {
    name: 'Lume Theme Shiraha',
  },
})
  .versioning('main')
  .upload('uploads', 'src:public')
  .collection('articles', 'src:articles/*.md', [
    'title: text',
    // 'date: date',
    'summary: text',
    // 'author: text',
    'draft: checkbox',
    'tags: list',
    'content: markdown',
  ])
