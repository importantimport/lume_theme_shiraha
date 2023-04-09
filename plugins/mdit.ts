import type { Site } from 'lume/core.ts'
import { fffPlugin } from 'npm:markdown-it-fff'

export default () => (site: Site) =>
  site.hooks.addMarkdownItPlugin(fffPlugin, {
    presets: ['lume'],
  })
