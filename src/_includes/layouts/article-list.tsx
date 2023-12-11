export const layout = 'layouts/body.tsx'
export default ({ comp: { Container }, results }: Lume.Data, { slug }: Lume.Helpers) => (
  <Container className="h-feed">
    {/* TODO: p-name, u-url, u-photo */}
    <ol class="list-none pl-0">
      {results?.map((data) => (
        <li>
          <a class="no-underline" href={data.url}>
            <h2 class="p-name" style={`--name: article-title-${slug(data.url)}`}>
              {data.title ?? 'no title'}
            </h2>    
          </a>
        </li>
      ))}
    </ol>
  </Container>
)
