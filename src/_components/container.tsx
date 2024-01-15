export default ({ comp: { Footer, Header }, children }: Lume.Data) => (
  <main class="w-full max-w-screen-md mx-auto p-8 flex flex-col gap-4">
    <Header />
    {children}
    <Footer />
  </main>
)
