import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default (data: PageData, _helpers: PageHelpers) =>
  [
    ...(data.shiraha
      ? [
        html`<script>window.shiraha = ${JSON.stringify(data.shiraha)}</script>`,
      ]
      : []),
    ...(data.shiraha?.colors
      ? [
        html`<script type="module" src="https://esm.run/shiraha-colors" async></script>`,
      ]
      : []),
    // html`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shiraha/dist/shiraha.css" />`,
    // html`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shiraha/dist/themes/yuki.css" />`,
    html`<link rel="stylesheet" href="https://shiraha.js.org/nightly/shiraha.css" />`,
    html`<link rel="stylesheet" href="https://shiraha.js.org/nightly/themes/baseline-tone-based.css" />`,
  ].join('')
