export default ({ title, children, head, metas }: Lume.Data, { html, url }: Lume.Helpers) => (
  <html lang={metas?.lang ?? 'en'} prefix="og: https://ogp.me/ns#">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="view-transition" content="same-origin" />
      <meta name="supported-color-schemes" content="light dark" />
      {head?.metas?.map((meta, key) => (<meta key={key} {...meta} />))}
      <title>{title}</title>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-.1em%22 y=%22.9em%22 font-size=%2290%22>❄️</text></svg>" />
      <link rel="stylesheet" href={url('/uno.css')} />
      <link rel="stylesheet" href={url('/styles.css')} />
      {head?.links?.map((link, key) => (<meta key={key} {...link} />))}
      {/* {html`<script async type="module">
        import { listen } from 'https://esm.run/quicklink'
        listen()
      </script>`} */}
    </head>
    <body class="prose max-w-none bg-surface color-onsurface">
      {children}
    </body>
  </html>
)
