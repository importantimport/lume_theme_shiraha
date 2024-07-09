import { presetUno } from 'lume/deps/unocss.ts'
import { presetIcons } from 'npm:@unocss/preset-icons'
import type { UserConfig } from 'npm:@unocss/core@0.58.6'
import { presetTypography } from 'npm:@unocss/preset-typography@0.58.6'

export default {
  presets: [
    // deno-lint-ignore no-explicit-any
    presetUno() as any,
    presetIcons({ cdn: 'https://esm.sh/' }),
    presetTypography({
      cssExtend: {
        'h1,h2,h3,h4,h5,h6': {
          'color': 'var(--md-sys-color-on-surface)',
          'font-weight': 600,
          'text-wrap': 'balance',
        },
        'h6': {
          'opacity': '0.38',
        },
        'p': {
          'color': 'var(--md-sys-color-on-surface-variant)',
        },
        'a': {
          'color': 'var(--md-sys-color-primary)',
          'font-weight': 'inherit',
          'text-decoration': 'none',
        },
        // 'a:has(span[data-rehype-pretty-code-figure])': {
        //   'text-decoration': 'none',
        // },
        // 'a > span[data-rehype-pretty-code-figure] > code': {
        //   color: 'var(--md-sys-color-primary) !important',
        // },
        // 'a::hover > span[data-rehype-pretty-code-figure] > code': {
        //   color: 'var(--md-sys-color-on-primary-container) !important',
        //   'text-decoration':
        //     'underline var(--md-sys-color-on-primary-container) 2px !important',
        // },
        'mark': {
          'background-color': 'var(--md-sys-color-primary)',
          'color': 'var(--md-sys-color-on-primary)',
        },
        'pre': {
          'padding': '0.75rem 0',
          'position': 'relative',
          // 'margin': 0,
          'overflow-y': 'hidden',
        },
        'pre,code': {
          'background-color': 'var(--md-sys-color-surface-container)',
          // 'background-color': 'var(--md-sys-color-surface-variant)',
        },
        // 'pre code': {
        //   padding: '1.25rem 0',
        // },
        'pre code span[data-line]': {
          'padding': '0 0.75rem',
        },
        ':not(pre) > code': {
          'padding': '0.25rem 0.375rem',
          'border-radius': '0.375rem',
          // 'background-color': 'var(--md-sys-color-surface-container)',
          // color: 'var(--md-sys-color-on-surface)',
        },
        ':not(pre) > code::before,:not(pre) > code::after': {
          content: 'none',
        },
      },
    }),
  ],
  theme: {
    colors: {
      primary: 'var(--md-sys-color-primary)',
      onPrimary: 'var(--md-sys-color-on-primary)',
      primaryContainer: 'var(--md-sys-color-primary-container)',
      onPrimaryContainer: 'var(--md-sys-color-on-primary-container)',
      secondary: 'var(--md-sys-color-secondary)',
      onSecondary: 'var(--md-sys-color-on-secondary)',
      secondaryContainer: 'var(--md-sys-color-secondary-container)',
      onSecondaryContainer: 'var(--md-sys-color-on-secondary-container)',
      tertiary: 'var(--md-sys-color-tertiary)',
      onTertiary: 'var(--md-sys-color-on-tertiary)',
      tertiaryContainer: 'var(--md-sys-color-tertiary-container)',
      onTertiaryContainer: 'var(--md-sys-color-on-tertiary-container)',
      error: 'var(--md-sys-color-error)',
      onError: 'var(--md-sys-color-on-error)',
      errorContainer: 'var(--md-sys-color-error-container)',
      onErrorContainer: 'var(--md-sys-color-on-error-container)',
      outline: 'var(--md-sys-color-outline)',
      outlineVariant: 'var(--md-sys-color-outline-variant)',
      background: 'var(--md-sys-color-background)',
      onBackground: 'var(--md-sys-color-on-background)',
      surface: 'var(--md-sys-color-surface)',
      surfaceBright: 'var(--md-sys-color-surface-bright)',
      surfaceDim: 'var(--md-sys-color-surface-dim)',
      surfaceContainerLowest: 'var(--md-sys-color-surface-container-lowest)',
      surfaceContainerLow: 'var(--md-sys-color-surface-container-low)',
      surfaceContainer: 'var(--md-sys-color-surface-container)',
      surfaceContainerHigh: 'var(--md-sys-color-surface-container-high)',
      surfaceContainerHighest: 'var(--md-sys-color-surface-container-highest)',
      onSurface: 'var(--md-sys-color-on-surface)',
      surfaceVariant: 'var(--md-sys-color-surface-variant)',
      onSurfaceVariant: 'var(--md-sys-color-on-surface-variant)',
      inverseSurface: 'var(--md-sys-color-inverse-surface)',
      inverseOnSurface: 'var(--md-sys-color-inverse-on-surface)',
      inversePrimary: 'var(--md-sys-color-inverse-primary)',
      shadow: 'var(--md-sys-color-shadow)',
      scrim: 'var(--md-sys-color-scrim)',
    },
  },
} satisfies UserConfig
