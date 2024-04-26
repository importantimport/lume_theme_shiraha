export const layout = 'layouts/body.tsx'
export default ({ children, comp: { Container, Tags }, date, title, url: dataUrl, readingInfo, tags }: Lume.Data, { url, slug }: Lume.Helpers) => (
  <Container>
    <section class="mt-12 flex flex-col gap-6 children:m-0" style={`--name: article-content-${slug(dataUrl)}`}>
      {children}
    </section>
  </Container>
)
