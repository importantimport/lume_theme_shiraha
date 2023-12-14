export default ({ tags }: Lume.Data, { url }: Lume.Helpers) => (
  <div class="mt-8">
    {tags.map(tag => (
      <a class="p-category" href={url(`/t/${encodeURIComponent(tag)}`)}>
        #{tag}
      </a>
    ))}
  </div>
)
