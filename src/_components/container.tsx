export type Props = {
  className?: 'h-entry'
}

export default ({ comp: { Footer, Header }, children, className }: Lume.Data & Props) => (
  <main class={`${className ?? ''} w-full max-w-screen-md min-h-screen mx-auto p-8 flex flex-col gap-8 md:border-x border-outline-variant`}>
    <Header />
    {children}
    <Footer />
  </main>
)
