export default ({ children, comp: { Head }, head, lts, metas, title }: Lume.Data, {}: Lume.Helpers) => (
  // TODO: remove metas?.lang
  <html lang={metas?.lang as string ?? 'en'} class="h-feed">
    <Head>
      <title>{title ? `${title} - ${lts.site.title}` : lts.site.title}</title>
      {head?.metas?.map((meta, key) => (<meta key={key} {...meta} />))}
      {head?.links?.map((link, key) => (<link key={key} {...link} />))}
    </Head>
    <body class="prose max-w-none bg-surface color-onsurface">
      {children}
    </body>
  </html>
)
