import { Hono, serveStatic } from './deps/hono_server.ts'

const server = new Hono()
  .get('*', serveStatic({ root: './site' }))

if (import.meta.main) {
  Deno.serve(server.fetch)
}

export { server, server as default }
