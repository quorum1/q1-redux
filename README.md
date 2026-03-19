# Eleventy Starter Template

A generic starter template for building static sites with Eleventy, Vite, and Web Awesome.

## Stack

- **[Eleventy v3](https://www.11ty.dev/)** — static site generator
- **[Vite](https://vitejs.dev/)** — asset bundling via `@11ty/eleventy-plugin-vite`
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** — templating
- **[Web Awesome](https://backerkit.com/c/projects/web-awesome)** (`@awesome.me/webawesome`) — UI components
- **[eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/)** — hierarchical nav / breadcrumbs
- Deployed to **GitHub Pages** via GitHub Actions

## Development

```bash
npm install
npm run dev      # dev server at http://localhost:8080
npm run build    # production build → _site/
```

## Project Structure

```
src/
├── _data/           # Global data (site.json)
├── _includes/
│   ├── layouts/     # _shell.njk, base.njk
│   └── partials/    # site-header.njk, site-footer.njk
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   └── images/
├── index.md
├── about.md
├── features.md
└── contact.md
```

## Customization

- Update `src/_data/site.json` with your site title, description, and URL
- Edit `src/_includes/partials/site-header.njk` to update navigation links
- Add pages as `.md` files in `src/` using `layout: layouts/base.njk`

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys to GitHub Pages.

> **Note:** In your repository settings, Pages source must be set to **GitHub Actions** (not "Deploy from a branch") or the build will fail.
