export default (slug: string) => ({
  path: `/articles/${slug}.md`,
  content: {
    title: slug,
    layout: 'layouts/article.tsx',
  },
})
