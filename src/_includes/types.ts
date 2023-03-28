import type { Page as LumePage, PageData as LumePageData } from 'lume/core.ts'

export interface PageData extends LumePageData {
  shiraha?: {
    colors?: Record<string, unknown>
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
