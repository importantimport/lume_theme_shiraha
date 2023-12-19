export default ({ tags }: Lume.Data, { url }: Lume.Helpers) =>
  tags.map(tag => (
    <a class="p-category" href={url(`/t/${encodeURIComponent(tag)}`)}>
      #{tag}
    </a>
  ))
