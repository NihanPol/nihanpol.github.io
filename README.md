# nihanpol.github.io

Personal site for Nihan Pol — Assistant Professor of Astrophysics, Texas Tech University.

Live: https://nihanpol.github.io/

## Branches

- `main` — current source (this branch). Static React site, JSX transpiled in-browser via Babel standalone.
- `master-jekyll-archive` — previous Jekyll/al-folio source, kept as archive.
- `gh-pages` — built/published artifact served by GitHub Pages.

## Layout

```
index.html        entrypoint, loads React + Babel from CDN, mounts <App/>
src/*.jsx         components and content (data.jsx holds publications/news/etc.)
styles/           tokens.css (design tokens) + site.css
assets/           images referenced by the site (e.g. profile.jpg)
.nojekyll         tells GitHub Pages not to run Jekyll
.github/workflows/deploy.yml   pushes this branch's contents to gh-pages
```

## Local development

No build step required — just serve the directory.

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing content

All site content lives in `src/data.jsx`:
- `window.SITE` — name, role, contact, socials
- `window.NEWS` — news items
- `window.PUBS_LED` / `window.PUBS_COLL` — publications

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes
the working tree to the `gh-pages` branch. GitHub Pages serves from `gh-pages`.
