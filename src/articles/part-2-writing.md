---
title: 'Part 2: Writing'
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
