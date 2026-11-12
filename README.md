# eric031.github.io

Personal site of Dušan Erić: frontend development and project management. Live at **https://dusan-eric.is-a.dev**.

The site is one planning tool: an interactive roadmap of the work, case studies written as tickets, the BAT DEV studio, a Plan / Build / Run skills board and a changelog of experience.

Built with [Astro](https://astro.build) and one small client script (roadmap tooltips, reveals, the Belgrade clock, copy-to-clipboard). English is served at `/` and Serbian at `/sr/`. All copy and project dates live in `src/site/copy.ts`; the roadmap layout is computed in `src/site/data.ts`. Every push to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```
