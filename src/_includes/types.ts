import type { Page as LumePage, PageData as LumePageData } from 'lume/core.ts'
// import type { FFFFlavoredFrontmatter } from 'fff/fff.ts'
import type { FFFFlavoredFrontmatter } from 'npm:fff-flavored-frontmatter'

export type PageData = LumePageData & FFFFlavoredFrontmatter & {
  shiraha?: {
    colors?: Record<string, unknown>
  }


  site: {
    icon?: string
  }

  tmp?: {
    schemes?: {
      light: Record<string, unknown>
      dark: Record<string, unknown>
    }
  }
}

export interface Page extends LumePage {
  data: PageData
}

export type { PageHelpers } from 'lume/core.ts'
