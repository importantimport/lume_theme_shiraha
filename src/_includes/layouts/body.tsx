export default ({ title, children, metas }: Lume.Data, { html, url }: Lume.Helpers) => (
  <html lang={metas?.lang ?? 'en'} prefix="og: https://ogp.me/ns#">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="view-transition" content="same-origin" />
      <meta name="supported-color-schemes" content="light dark" />
      {/* <meta name="theme-color" content="#fffbfe" media="(prefers-color-scheme: light)" /> */}
      {/* <meta name="theme-color" content="#1c1b1f" media="(prefers-color-scheme: dark)" /> */}
      <title>{title}</title>
      <link rel="preload" href={url('/uno.css')} as="style" />
      <link rel="preload" href={url('/styles.css')} as="style" />
      <link rel="preload" href={url('/styles/tokens.css')} as="style" />
      <link rel="stylesheet" href={url('/uno.css')} />
      <link rel="stylesheet" href={url('/styles.css')} />
      {/* <link rel="stylesheet" href={url('/styles/tokens.css')} /> */}
      {/* {html`<script async type="module" src="https://esm.run/shiraha-colors"></script>`} */}
      <link rel="preload" href="https://esm.run/quicklink" as="script" />
      {html`<script async type="module">
        import { listen } from 'https://esm.run/quicklink'
        listen()
      </script>`}
    </head>
    <body class="prose max-w-none bg-surface color-onsurface">
      {children}
    </body>
  </html>
)
