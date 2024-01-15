export type Props = {
  className?: 'h-entry'
}

export default ({ comp: { Footer, Header }, children, className }: Lume.Data & Props) => (
  <main class={`${className} w-full max-w-screen-md mx-auto p-8 flex flex-col gap-4`}>
    <Header />
    {children}
    <Footer />
  </main>
)
