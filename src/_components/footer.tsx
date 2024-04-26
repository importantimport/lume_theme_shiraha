export default ({ lts }: Lume.Data, {}: Lume.Helpers) => (
  <footer class="h-12 mx-auto flex gap-1 place-items-center motion-safe:view-transition-footer">
    <span>© 2023 {lts.author.name}</span>
    <span> · </span>
    <span>Powered by</span>
    <a href="https://github.com/importantimport/lume_theme_shiraha">Shiraha</a>
    <span>&</span>
    <a href="https://lume.land">Lume</a>
  </footer>
)
