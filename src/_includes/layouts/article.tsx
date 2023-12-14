export const layout = 'layouts/body.tsx'
export default ({ children, comp: { Container, Tags }, date, title, url: dataUrl, readingTime, tags }: Lume.Data, { url, slug }: Lume.Helpers) => (
  <Container className="h-entry">
    <article>
      <data class="u-url u-uid" value={url(dataUrl, true)} />
      <h1 class="p-name" style={`--name: article-title-${slug(dataUrl)}`}>{title}</h1>
      <p class="lts-date" style={`--name: article-date-${slug(dataUrl)}`}>
        <time class="dt-published" datetime={date.toISOString()}>
          {date.toLocaleDateString()}
        </time>
        <span> · </span>
        <span>{readingTime.text}</span>
      </p>
      <section class="e-content mt-12 flex flex-col gap-6 children:m-0" style={`--name: article-content-${slug(dataUrl)}`}>
        {children}
      </section>
      <Tags tags={tags} />
    </article>
  </Container>
)
