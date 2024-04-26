export default ({}: Lume.Data, { url }: Lume.Helpers) => (
  <header class="bg-surface-container w-full rounded-full px-4 h-12 flex place-items-center gap-4 motion-safe:view-transition-header">
    <a href={url('/')}><div class="i-material-symbols:home-outline w-6 h-6" /></a>
    <div class="flex-1"></div>
    <a href={url('/search')}><div class="i-material-symbols:search w-6 h-6" /></a>
  </header>
)
