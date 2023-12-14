export default ({}: Lume.Data, { url }: Lume.Helpers) => (
  <header class="p-author h-card w-full h-12 flex place-items-center gap-4">
    <img class="u-photo h-8 w-8 rounded-full" src="https://kwaa.dev/assets/maskable@192.webp" alt="藍+85CD" />
    <a rel="author" class="p-name u-url no-underline" href="https://kwaa.dev">藍+85CD</a>
    <div class="flex-1"></div>
    <a href={url('/')}>Home</a>
  </header>
)
