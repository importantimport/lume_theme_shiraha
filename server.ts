import { Hono, serveStatic } from './deps/hono_server.ts'

export const server = new Hono()
  .get('*', serveStatic({ root: './_site' }))
  .notFound(({ redirect }) => redirect('/404.html', 307))

if (import.meta.main) {
  const { parseArgs } = await import('lume/deps/cli.ts')
  const { hostname, port } = parseArgs(Deno.args, {
    alias: { host: 'hostname' },
    string: ['hostname', 'port'],
    default: {
      hostname: '0.0.0.0',
      port: '8000',
    },
  })

  Deno.serve({ hostname, port: Number(port) || 8000 }, server.fetch)
}
