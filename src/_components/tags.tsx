export default ({ tags, url: dataUrl }: Lume.Data, { slug, url }: Lume.Helpers) => (
  <>
    {tags.length > 0 && (
      <div class="flex flex-wrap gap-2 mt-8 lts-tags" style={`--name: article-tags-${slug(dataUrl)}`}>
        {tags.map(tag => (
          <a class="p-category" href={url(`/t/${encodeURIComponent(tag)}`)}>
            #{tag}
          </a>
        ))}
      </div>
    )}
  </>
)
