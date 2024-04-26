const field = (
  name: string,
  type: string,
  params?: Record<string, unknown>,
) => ({
  name,
  type,
  label: name[0].toUpperCase() + name.slice(1),
  ...params,
})

const site = field('site', 'object', {
  fields: [
    field('title', 'text'),
    field('description', 'textarea'),
    field('icon', 'url'),
    field('lang', 'text', { label: 'Language' }),
  ],
})

const author = field('author', 'object', {
  fields: [
    field('name', 'text'),
    field('avatar', 'url'),
    field('bio', 'textarea'),
    field('links', 'object-list', {
      fields: [
        'icon: text',
        'href: url',
      ],
    }),
  ],
})

export const data = [
  site,
  author,
]
