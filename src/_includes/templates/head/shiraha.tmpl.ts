import type { PageData, PageHelpers } from '../../types.ts'

// TODO: Remove Baseline Theme
export default (data: PageData, _helpers: PageHelpers) =>
  [
    ...(data.shiraha
      ? [`<script>window.shiraha = ${JSON.stringify(data.shiraha)}</script>`]
      : []),
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shiraha/dist/shiraha.css" />',
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shiraha/dist/themes/baseline.css" />',
  ].join('')

// <script type="module" src="https://cdn.jsdelivr.net/npm/shiraha-colors@0.0.2/dist/index.js"></script>
