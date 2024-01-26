import { presetUno } from 'lume/deps/unocss.ts'
import type { UserConfig } from 'npm:@unocss/core@0.58.3'
import { presetTypography } from 'npm:@unocss/preset-typography@0.58.3'

export default {
  presets: [
    presetUno(),
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
          'text-decoration': 'none',
          'color': 'var(--md-sys-color-on-surface)',
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
          'padding': '1.25rem 0',
          'position': 'relative',
          // 'margin': 0,
          'overflow-y': 'hidden',
        },
        'pre:before': {
          'color': 'var(--md-sys-color-surface-container-highest)',
          'content': 'attr(data-language)',
          'display': 'grid',
          'line-height': 1,
          'right': 0,
          'top': 0,
          'padding': '0.25rem',
          'position': 'absolute',
          'place-items': 'center',
          'text-transform': 'uppercase',
          'font-size': '0.875rem',
          'font-weight': 600,
        },
        'pre,code': {
          'background-color': 'var(--md-sys-color-surface-container)',
          // 'background-color': 'var(--md-sys-color-surface-variant)',
        },
        // 'pre code': {
        //   padding: '1.25rem 0',
        // },
        'pre code span[data-line]': {
          // 'padding': '0 1.5rem',
          'padding': '0 1.25rem',
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
      onprimary: 'var(--md-sys-color-on-primary)',
      primarycontainer: 'var(--md-sys-color-primary-container)',
      onprimarycontainer: 'var(--md-sys-color-on-primary-container)',
      secondary: 'var(--md-sys-color-secondary)',
      onsecondary: 'var(--md-sys-color-on-secondary)',
      secondarycontainer: 'var(--md-sys-color-secondary-container)',
      onsecondarycontainer: 'var(--md-sys-color-on-secondary-container)',
      tertiary: 'var(--md-sys-color-tertiary)',
      ontertiary: 'var(--md-sys-color-on-tertiary)',
      tertiarycontainer: 'var(--md-sys-color-tertiary-container)',
      ontertiarycontainer: 'var(--md-sys-color-on-tertiary-container)',
      error: 'var(--md-sys-color-error)',
      onerror: 'var(--md-sys-color-on-error)',
      errorcontainer: 'var(--md-sys-color-error-container)',
      onerrorcontainer: 'var(--md-sys-color-on-error-container)',
      outline: 'var(--md-sys-color-outline)',
      background: 'var(--md-sys-color-background)',
      onbackground: 'var(--md-sys-color-on-background)',
      surface: 'var(--md-sys-color-surface)',
      onsurface: 'var(--md-sys-color-on-surface)',
      surfacevariant: 'var(--md-sys-color-surface-variant)',
      onsurfacevariant: 'var(--md-sys-color-on-surface-variant)',
      inversesurface: 'var(--md-sys-color-inverse-surface)',
      inverseonsurface: 'var(--md-sys-color-inverse-on-surface)',
    },
  },
} satisfies UserConfig
