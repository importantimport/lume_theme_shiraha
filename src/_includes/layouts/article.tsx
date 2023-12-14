export const layout = 'layouts/body.tsx'
export default ({ children, comp: { Container }, date, title, url: dataUrl, readingTime }: Lume.Data, { url, slug }: Lume.Helpers) => (
  <Container className="h-entry">
    <article>
      <h1 class="p-name" style={`--name: article-title-${slug(dataUrl)}`}>{title}</h1>
      <p class="lts-date" style={`--name: article-date-${slug(dataUrl)}`}>
        <a class="u-url u-uid" href={url(dataUrl)}>
          <time class="dt-published" datetime={date.toISOString()}>
            {date.toLocaleDateString()}
          </time>
        </a>
        <span> · </span>
        <span>{readingTime.text}</span>
      </p>
      <section class="e-content mt-12 flex flex-col gap-6 children:m-0" style={`--name: article-content-${slug(dataUrl)}`}>
        {children}
      </section>
    </article>
  </Container>
)
