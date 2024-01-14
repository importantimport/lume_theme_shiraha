export default ({ lts }: Lume.Data, { url }: Lume.Helpers) => (
  <header class="p-author h-card w-full h-12 flex place-items-center gap-4">
    <data class="u-photo hidden" value={lts.author.avatar} />
    <img class="h-8 w-8 rounded-full" src={lts.author.avatar} alt={lts.author.name} />
    <a rel="author" class="p-name u-url u-uid no-underline" href={lts.author.url}>{lts.author.name}</a>
    <div class="flex-1"></div>
    <a href={url('/')}>Home</a>
  </header>
)
