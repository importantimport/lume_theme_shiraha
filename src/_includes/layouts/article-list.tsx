export const layout = 'layouts/body.tsx'
export default ({ comp: { Container, Pagination }, pagination, results }: Lume.Data, { slug }: Lume.Helpers) => (
  <Container>
    {/* TODO: p-name, u-url, u-photo */}
    <ol class="list-none pl-0">
      {results?.map((data) => (
        <li>
          <a class="no-underline" href={data.url}>
            <h2 class="p-name" style={`--name: article-title-${slug(data.url)}`}>
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
