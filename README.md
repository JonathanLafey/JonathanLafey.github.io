# dimitrisargyroudis.dev

My personal CV site — a single static page. No framework, no build step:
`index.html` + `styles.css` + a small `main.js`.

## Develop

```
python3 -m http.server 8000   # open http://localhost:8000
```

Edit on `development`; merging into `master` deploys to GitHub Pages via
`.github/workflows/deploy.yml`.
