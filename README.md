# Marissa Chappell — academic website

A static site (plain HTML/CSS, no build step) for GitHub Pages.

## Publish
1. Push these files to the `main` branch of `mdchappell/website`.
2. On GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site appears at https://mdchappell.github.io/website/ within a few minutes.

If you later use a custom domain, update the URLs in `index.html` (canonical, og:*, JSON-LD), `robots.txt`, and `sitemap.xml`.

## Edit
- All content is in `index.html`; styles in `assets/css/site.css`.
- Name sign: `assets/img/namesign.gif` (animated) and `namesign-still.png` (paused frame).
- Footer credit: off. Discovery marker + schema.org structured data: on (see `<head>`).

## After editing CSS or JS
Bump the `?v=` value on the stylesheet and script tags in `index.html` so browsers load the new files instead of a cached copy.
