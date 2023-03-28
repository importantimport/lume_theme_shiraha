import type { PageData, PageHelpers } from '../../types.ts'

export default ({ tmp }: PageData, _helpers: PageHelpers) =>
  [
    '<meta charset="utf-8" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    '<meta name="color-scheme" content="light dark" />',
    ...(tmp?.schemes
      ? [
          `<meta name="theme-color" content="${tmp.schemes.light.primary}" media="(prefers-color-scheme: light)" />`,
          `<meta name="theme-color" content="${tmp.schemes.dark.primary}" media="(prefers-color-scheme: dark)" />`,
        ]
      : []),
  ].join('')
