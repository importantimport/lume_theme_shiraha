export default ({}: Lume.Data, { url }: Lume.Helpers) => (
  <header class="bg-surface-container w-full rounded-full px-4 h-12 flex place-items-center gap-4">
    <a href={url('/')}><div class="i-material-symbols:home w-6 h-6" /></a>
    <div class="flex-1"></div>
  </header>
)
