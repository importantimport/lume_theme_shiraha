export default ({}: Lume.Data, { url }: Lume.Helpers) => (
  <nav class="-mx-8 px-6 border-b-1 border-outline-variant">
    <ul class="flex gap-4 m-0 p-0 children:p-2 list-none overflow-x-auto">
      <li class="border-b-2 border-primary"><a class="whitespace-nowrap" href="#">📚 All</a></li>
      <li><a class="color-on-surface-variant whitespace-nowrap" href={url('/articles')}>📄 Articles</a></li>
      {/* <li><a class="color-on-surface-variant whitespace-nowrap" href={url('/notes')}>📔 Notes</a></li> */}
      {/* <li><a class="color-on-surface-variant whitespace-nowrap" href={url('/photos')}>📷 Photos</a></li> */}
      {/* <li><a class="color-on-surface-variant whitespace-nowrap" href={url('/videos')}>🎥 Videos</a></li> */}
      <li><a class="color-on-surface-variant whitespace-nowrap" href={url('/tags')}>🏷️ Tags</a></li>
    </ul>
  </nav>
)
