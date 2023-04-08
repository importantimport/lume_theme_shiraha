import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

// TODO: Remove Baseline Theme
export default (data: PageData, _helpers: PageHelpers) =>
  [
    ...(data.shiraha
      ? [
        html`<script>window.shiraha = ${JSON.stringify(data.shiraha)}</script>`,
      ]
      : []),
    ...(data.shiraha.colors !== false
      ? [
        html`<script type="module" src="https://esm.run/shiraha-colors"></script>`,
      ]
      : []),
    html`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shiraha/dist/shiraha.css" />`,
    html`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shiraha/dist/themes/baseline.css" />`,
  ].join('')

// <script type="module" src="https://cdn.jsdelivr.net/npm/shiraha-colors@0.0.2/dist/index.js"></script>
