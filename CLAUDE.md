# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal CV site. **No framework, no build step, no dependencies** — just
hand-authored `index.html`, `styles.css`, and a tiny `main.js`. (It was previously a
Svelte + Vite + Tailwind app; that toolchain was removed in favour of plain static files.)

## Files

- `index.html` — all content and structure (semantic HTML, three `<section>`s: home / experience / contact).
- `styles.css` — one hand-written stylesheet. Plain modern CSS: custom-property tokens in `:root`,
  fluid `clamp()` type, and a timeline whose left/right alternation is done purely with
  `:nth-child` (no per-item markup). The dark gradient look lives on `body`.
- `main.js` — the only JavaScript: an `IntersectionObserver` scroll-spy that toggles
  `aria-current` on the nav link for the centred section, plus the footer year. Pure progressive
  enhancement — the site works fully without it.
- `assets/` — `profile.avif`/`.webp` (portrait), `og.jpg` (social card), social SVG icons,
  and self-hosted `fonts/poppins-400.woff2` & `poppins-600.woff2` (latin subset).
- `resume.svg` — favicon. `CNAME` — custom domain. `.nojekyll` — disables Jekyll on Pages.

## Branch model & deploy

- **`development`** — edit here, commit as much as you like.
- **`master`** (default) — the live branch. Merging `development` → `master` is the "go live" event.
- `.github/workflows/deploy.yml` publishes to GitHub Pages on every push to `master`
  (Pages source must be set to **GitHub Actions** in repo settings). `CNAME` and `.nojekyll`
  stay at the repo root so the custom domain and asset paths are preserved.

## Local preview

No build. From the repo root:

```
python3 -m http.server 8000   # then open http://localhost:8000
```

## Regenerating assets

The portrait/font/og assets were derived from the original `profile.png` and Google Fonts.
If they ever need regenerating: AVIF/WebP/JPEG via Pillow + `pillow-avif-plugin`; the Poppins
woff2 files are the latin subset downloaded from Google Fonts (`fonts.gstatic.com`).
