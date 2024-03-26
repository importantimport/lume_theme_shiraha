import jsonfeedToAtom from 'npm:jsonfeed-to-atom@1.2.4'

import { generateObject } from './json_feed.ts'

export const generateAtom = async (
  data: Lume.Data,
  helpers: Lume.Helpers,
) => {
  const json = await generateObject(data, helpers)

  return jsonfeedToAtom({
    ...json,
    /** {@link https://github.com/bcomnes/jsonfeed-to-atom/issues/28} */
    version: 'https://jsonfeed.org/version/1',
    author: (json.authors as unknown[])[0],
  })
}
