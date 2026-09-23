# The Manifest Digital

Landing page for The Manifest Digital — web development, redesigns, CRM setup, SEO, and SaaS
builds for small and medium businesses.

Live domain: `themanifestdigital.com`

## What's in this repo

- `index.html` — the page. Header/nav → hero → services → how it works → about → FAQ →
  contact form → footer.
- `styles.css` — all styles, including the color/font tokens at the top of the file.
- `script.js` — mobile nav toggle, footer year, contact form handling.
- `docs/` — internal SOP reference docs (cold-outreach playbook, sales-to-delivery
  workflow). Not part of the public site.

## Running it locally

No build step, no dependencies. Either:

- Open `index.html` directly in a browser, or
- Serve it with a local static server, e.g.:

  ```
  python3 -m http.server
  ```

  then visit `http://localhost:8000`.

## Editing

- Colors and fonts are CSS custom properties in `:root` at the top of `styles.css` — change
  them there rather than hardcoding values in individual rules.
- Copy is written in a personal, first-person-plural voice (sounds like a small studio
  talking directly to the client, not a corporate agency) — keep that tone when editing.

## Contact form

The form validates in the browser but does **not** send anywhere yet. Before launch, wire it
to a form backend such as [Web3Forms](https://web3forms.com/) (recommended — free, no
branding) by updating the `<form>`'s submission handling in `script.js`.

## Deployment

Static site — deployable to any static host. Current plan: connect this GitHub repo to
Hostinger's Git deployment (hPanel → Git) and point `themanifestdigital.com`'s DNS at it.
