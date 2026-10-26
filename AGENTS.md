# Project rules

- Import images from `src/assets` and keep `build.assetsInlineLimit` high in vite.config.ts — the cPanel host never received separate image files, so images must be embedded in the JS bundle.
- Keep `public/.htaccess` in the repo so SPA routing ships with every `dist` build.
