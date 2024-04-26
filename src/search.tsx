export const layout = 'layouts/page.tsx'
export const url = '/search/'

export default ({ }: Lume.Data, { html: css }: Lume.Helpers) => (
  <>
    <style>
      {css`
        #search {
          --pagefind-ui-primary: var(--md-sys-color-primary);
          --pagefind-ui-text: var(--md-sys-color-on-surface);
          --pagefind-ui-background: var(--md-sys-color-surface-container);
          --pagefind-ui-border: var(--md-sys-color-outline-variant);
          --pagefind-ui-tag: var(--md-sys-color-on-surface-variant);
          /* --pagefind-ui-border-width: 2px;
          --pagefind-ui-border-radius: 8px;
          --pagefind-ui-image-border-radius: 8px;
          --pagefind-ui-image-box-ratio: 3 / 2; */
          --pagefind-ui-font: inherit;
        }
      `}
    </style>
    <div id="search"></div>
  </>
)
