import resolveUrls from 'lume/plugins/resolve_urls.ts'

/** @see {@link https://lume.land/plugins/?status=disabled&urls=on} */
export const urls = () => (site: Lume.Site) => site.use(resolveUrls())
