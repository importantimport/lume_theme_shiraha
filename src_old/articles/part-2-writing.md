---
title: 'Part 2: Writing'
layout: 'layouts/article.tmpl.ts'
authors:
  - name: 藍+85CD
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEUICz3W29T///+5wccaSXtErbk4ODjz8OZVVVX/7MkVFRXtrpqTJiVHKxPZOjr/+/T/07d1TCNgERn59vb//OPSzMzuuwKZne20srL0mIyWGwVwQ6mkAAAA9UlEQVQoz1WOCbLDIAxDMQYngMna9i/3P2hlGjpEMB7QQzbukoeIrLqbPDHDRCV/91d2TPCDAxn8iWOkCSIGGcF/oBWEkBqB9Z5onazcAfrjPa+WAhlGEMPBTtxBCMEAAzG7lBwBwLzAZL3cT0gp4MEAiG2d8fGITDdA1ixBWweXT8eyKG/bptSB31tARBdbxwDshzLPs/6pHgOoTAYkI/D85Q6ir5UZgSwA51MYIMboopEGsqrKmRl+B7uI5Jr1pTNO8L8AAQBU2/6bKMUCGP/CD0RKaTPgJ6js+aPNLggZKCWVKjKbBOcC0Fr5WmqFfxHfhrwBRawLyITR1qYAAAAASUVORK5CYII='
    url: https://kwaa.dev
tags:
  - 'Lume_Theme_Shiraha'
---

It's time to create your first article!

Here I use [lume cli](https://lume.land/docs/core/archetypes/#run-archetypes) to create the posts, you can also create the files manually.

```bash
deno task lume new article my-first-article
```

This will generate `./articles/my-first-article.md`:

```yaml caption='./articles/my-first-article.md'
---
title: my-first-article
layout: layouts/article.tmpl.ts
---
```

I assume you already know what Frontmatter is.

Here you can use the [Lume Standard Variables](https://lume.land/docs/creating-pages/page-data/#standard-variables) and part of the [FFF Flavored Frontmatter](https://fff.js.org/version/1.0.html) (depending on the progress of theme development, most will be supported eventually)

For example, to change the generated directory without changing the filename:

```diff caption='./articles/my-first-article.md'
---
title: my-first-article
layout: layouts/article.tmpl.ts
+ url: /articles/my-second-article/index.html
---
```

That's it!
