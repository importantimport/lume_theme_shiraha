export const layout = 'layouts/body.tsx'
export default ({ comp: { Container, Hero, Pagination }, pagination, results, url }: Lume.Data, { slug }: Lume.Helpers) => (
  <Container>
    {url === '/' && <Hero />}
    {/* TODO: p-name, u-url, u-photo */}
    <ol class="flex flex-col gap-8 list-none pl-0 my-0">
      {results?.map((data) => (
        <li>
          <a class="no-underline" href={data.url}>
            <h2 class="p-name m-0 transition" style={`--name: article-title-${slug(data.url)}`}>
              {data.title ?? 'no title'}
            </h2>
            <p class="lts-date" style={`--name: article-date-${slug(data.url)}`}>
              <time class="dt-published" datetime={data.date.toISOString()}>
                {data.date.toLocaleDateString()}
              </time>
            </p>
            {data.summary && <p class="p-summary" style={`--name: article-content-${slug(data.url)}`}>{data.summary}</p>}
          </a>
        </li>
      ))}
    </ol>
    <Pagination pagination={pagination} />
  </Container>
)
