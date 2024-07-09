export default ({ children }: Lume.Data, { url }: Lume.Helpers) => (
  <head prefix="og: https://ogp.me/ns#">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="view-transition" content="same-origin" />
    <meta name="supported-color-schemes" content="light dark" />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-.1em%22 y=%22.9em%22 font-size=%2290%22>❄️</text></svg>" />
    <link rel="stylesheet" href={url('/uno.css')} />
    <link rel="stylesheet" href={url('/styles.css')} />
    <link rel="alternate" type="application/feed+json" href={url('/feed.json')} />
    {/* {html`<script async type="module">
        import { listen } from 'https://esm.run/quicklink'
        listen()
      </script>`} */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shikiji-twoslash@0.10.1/style-rich.min.css" />
    {/** @see {@link https://unlazy.byjohann.dev/guide/installation.html#without-a-build-step} */}
    <script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
    {children}
  </head>
)
