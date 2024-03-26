import { generateJson } from '../../utils/feed/json_feed.ts'

export default async (
  data: Lume.Data,
  helpers: Lume.Helpers,
) => await generateJson(data, helpers)
