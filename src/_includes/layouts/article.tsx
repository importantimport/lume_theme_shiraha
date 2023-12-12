export const layout = 'layouts/body.tsx'
export default ({ children, comp: { Container }, date, title, url, readingTime }: Lume.Data, { slug }: Lume.Helpers) => (
  <Container className="h-entry">
    <article>
      <h1 class="p-name" style={`--name: article-title-${slug(url)}`}>{title}</h1>
      <p class="lts-date" style={`--name: article-date-${slug(url)}`}>
        <time class="dt-published" datetime={date.toISOString()}>
          {date.toLocaleDateString()}
        </time>
        <span> · </span>
        <span>{readingTime.text}</span>
      </p>
      <section class="e-content mt-12 flex flex-col gap-6 children:m-0" style={`--name: article-content-${slug(url)}`}>
        {children}
      </section>
    </article>
  </Container>
)
