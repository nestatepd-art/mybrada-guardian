# Project rules

- Import images from `src/assets` and keep `build.assetsInlineLimit` high in vite.config.ts — the cPanel host never received separate image files, so images must be embedded in the JS bundle.
- Keep `public/.htaccess` in the repo so SPA routing ships with every `dist` build.
- Use compressed WebP photo imports and defer gallery imports until near the viewport; this keeps images embedded for cPanel while reducing the initial download.
- Load brand fonts from the HTML head without blocking first paint; remote CSS imports add a render-blocking request chain.
- Cache fingerprinted assets immutably and revalidate HTML in Apache; compression reduces embedded-image script transfers without serving stale releases.
