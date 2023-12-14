export default ({ children, comp: { Head }, metas }: Lume.Data, {}: Lume.Helpers) => (
  <html lang={metas?.lang ?? 'en'} prefix="og: https://ogp.me/ns#">
    <Head />
    <body class="prose max-w-none bg-surface color-onsurface">
      {children}
    </body>
  </html>
)
