# eric031.github.io

Personal site of Dušan Erić: technical project manager and web developer.

Built with [Astro](https://astro.build), with no client-side JavaScript. English is served at `/` and Serbian at `/sr/`; all copy lives in `src/i18n/content.ts`. Every push to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```
