---
title: 'Part 1: Installation'
layout: 'layouts/article.tmpl.ts'
authors:
  - name: 藍+85CD
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEUICz3W29T///+5wccaSXtErbk4ODjz8OZVVVX/7MkVFRXtrpqTJiVHKxPZOjr/+/T/07d1TCNgERn59vb//OPSzMzuuwKZne20srL0mIyWGwVwQ6mkAAAA9UlEQVQoz1WOCbLDIAxDMQYngMna9i/3P2hlGjpEMB7QQzbukoeIrLqbPDHDRCV/91d2TPCDAxn8iWOkCSIGGcF/oBWEkBqB9Z5onazcAfrjPa+WAhlGEMPBTtxBCMEAAzG7lBwBwLzAZL3cT0gp4MEAiG2d8fGITDdA1ixBWweXT8eyKG/bptSB31tARBdbxwDshzLPs/6pHgOoTAYkI/D85Q6ir5UZgSwA51MYIMboopEGsqrKmRl+B7uI5Jr1pTNO8L8AAQBU2/6bKMUCGP/CD0RKaTPgJ6js+aPNLggZKCWVKjKbBOcC0Fr5WmqFfxHfhrwBRawLyITR1qYAAAAASUVORK5CYII='
    url: https://kwaa.dev
tags:
  - 'Lume_Theme_Shiraha'
---

## Setup Deno & Lume

As this is a Lume theme, please follow the [Deno installation instructions](https://deno.com/manual@v1.34.2/getting_started/installation) and [Lume documentation](https://lume.land/docs/overview/installation/) to install them first.

## Install Lume Theme Shiraha

Now that you should have a basic Lume blog, modify `_config.ts` to use the Shiraha theme:

```diff caption='_config.ts'
import lume from 'lume/mod.ts'
+ import lts from 'https://deno.land/x/lume_theme_shiraha/mod.ts'

- const site = lume()
+ const site = lume().use(lts())

export default site
```
