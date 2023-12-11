export default ({}: Lume.Data, { url }: Lume.Helpers) => (
  <header class="w-full h-12 flex place-content-between place-items-center">
    <div class="p-author h-card flex place-items-center gap-4">
      <img class="h-8 w-8 rounded-full" src="https://kwaa.dev/assets/maskable@192.webp" alt="藍+85CD" />
      <a class="p-name u-url no-underline" href="https://kwaa.dev">藍+85CD</a>
    </div>
    <a href={url('/')}>Home</a>
  </header>
)
