export const layout = 'layouts/body.tsx'
export default ({ children, comp: { Container, Tags }, date, title, url: dataUrl, readingInfo, tags }: Lume.Data, { url, slug }: Lume.Helpers) => (
  <Container className="h-entry">
    <article data-pagefind-body>
      <a class="u-url" value={url(dataUrl, true)}></a>
      <a class="u-author" rel="author" href={url('/')}></a>
      <h1 class="p-name" style={`--name: article-title-${slug(dataUrl)}`}>{title}</h1>
      <p class="lts-date" style={`--name: article-date-${slug(dataUrl)}`}>
        <time class="dt-published" datetime={date.toISOString()}>
          {date.toLocaleDateString()}
        </time>
        {readingInfo && (
          <>
            <span> · </span>
            <span>
              {Intl.NumberFormat(undefined, {
                style: 'unit',
                unit: 'minute',
                // unitDisplay: 'long',
              }).format(readingInfo.minutes)}
            </span>
          </>
        )}
      </p>
      <section class="e-content mt-12 flex flex-col gap-6 children:m-0" style={`--name: article-content-${slug(dataUrl)}`}>
        {children}
      </section>
      <Tags tags={tags} url={dataUrl} />
    </article>
  </Container>
)
