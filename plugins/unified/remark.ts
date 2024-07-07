import type { PluggableList } from 'lume/deps/remark.ts'
import remarkSmartyPants from 'npm:remark-smartypants@2.1.0'

export const remarkPlugins: PluggableList = [
    remarkSmartyPants,
]
