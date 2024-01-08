export type Props = {
  className: 'h-entry' | 'h-feed'
}

// export default ({ comp: { Footer, Header }, children, className }: Lume.Data & Props) => (
export default ({ children, className }: Lume.Data & Props, { url }: Lume.Helpers) => (
  <main class={`${className} w-full max-w-screen-md mx-auto p-8 flex flex-col gap-4`}>
    {/* <Header /> */}
    <header class="p-author h-card w-full h-12 flex place-items-center gap-4">
      <data class="u-photo hidden" value="https://kwaa.dev/assets/maskable@192.webp" />
      <img class="h-8 w-8 rounded-full" src="https://kwaa.dev/assets/maskable@192.webp" alt="藍+85CD" />
      <a rel="author" class="p-name u-url u-uid no-underline" href="https://kwaa.dev">藍+85CD</a>
      <div class="flex-1"></div>
      <a href={url('/')}>Home</a>
    </header>
    {children}
    {/* <Footer /> */}
    <footer class="h-12 mx-auto flex gap-1 place-items-center">
      <span>© 2023</span>
      <a href="https://kwaa.dev">藍+85CD</a>
      <span>Powered by</span>
      <a href="https://github.com/importantimport/lume_theme_shiraha">Shiraha</a>
      <span>&</span>
      <a href="https://lume.land">Lume</a>
    </footer>
  </main>
)
