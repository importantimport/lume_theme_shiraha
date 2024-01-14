export default ({ children, comp: { Head }, metas }: Lume.Data, {}: Lume.Helpers) => (
  // TODO: remove metas?.lang
  <html lang={metas?.lang as string ?? 'en'} prefix="og: https://ogp.me/ns#">
    <Head />
    <body class="prose max-w-none bg-surface color-onsurface">
      {children}
    </body>
  </html>
)
