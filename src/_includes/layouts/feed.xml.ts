import { generateAtom } from '../../utils/feed/atom_feed.ts'

export default async (
  data: Lume.Data,
  helpers: Lume.Helpers,
) => await generateAtom(data, helpers)
