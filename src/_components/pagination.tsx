export default ({ pagination }: Lume.Data, {}: Lume.Helpers) => (
  <>
    {pagination && pagination?.totalPages > 1 && (
      <nav>
        <ul class='flex gap-4 p-0 children:p-2 justify-between border-t-1 border-outline-variant list-none'>
          <li>
            {pagination.previous
              ? (
                <a rel='prev' href={pagination.previous}>
                  <span class='i-material-symbols:arrow-back'>prev</span>
                </a>
              )
              : (
                <a rel='prev' class='color-on-surface opacity-38' disabled>
                  <span class='i-material-symbols:arrow-back'>prev</span>
                </a>
              )}
          </li>
          <li class='border-t-2 border-primary -mt-1px'>
            <span>{pagination.page}</span>
          </li>
          <li>
            {pagination.next
              ? (
                <a rel='next' href={pagination.next}>
                  <span class='i-material-symbols:arrow-forward'>next</span>
                </a>
              )
              : (
                <a rel='next' class='color-on-surface opacity-38' disabled>
                  <span class='i-material-symbols:arrow-forward'>next</span>
                </a>
              )}
          </li>
        </ul>
      </nav>
    )}
  </>
)
