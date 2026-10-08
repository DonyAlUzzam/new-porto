# Dony Al-Uzzam — Portfolio

Personal portfolio site for **Dony Al-Uzzam (M. Khairi Usman)**, Full Stack Developer.
Built with the Next.js App Router, Tailwind CSS, and Framer Motion.

**Live:** <https://donyaluzzam.vercel.app>

## Stack

| Layer     | Tech                                              |
| --------- | ------------------------------------------------- |
| Framework | Next.js 13 (App Router)                           |
| Styling   | Tailwind CSS 3                                    |
| Animation | Framer Motion                                      |
| Icons     | Font Awesome (`@fortawesome/react-fontawesome`)   |
| Analytics | Vercel Analytics                                  |
| Data      | `json/data.json` (single source of truth)         |

## Commands

```bash
npm install          # install dependencies
npm run dev          # development server → http://localhost:3000
npm run build        # production build (+ auto-generates public/sitemap.xml)
npm start            # serve the production build
npm run lint         # ESLint (next/core-web-vitals)
npm run generate-sitemap   # regenerate public/sitemap.xml manually
```

## Structure

```
app/
  (root)/page.jsx        Landing page: hero, about, featured work, skills, experience, contact
  about/                 About page (bio, strengths, photos)
  projects/              Project grid (data.json → cards)
    [slug]/              Case study page, statically generated per project (SSG + metadata)
    archive/             Older/smaller work (2019 → present)
  layout.jsx             Root layout: navbar, top progress bar, chat widget, analytics
  not-found.jsx          404 page
components/              Button, Footer, Navbar, TopProgressbar, Chat
json/data.json           All project content (title, tech, images, role, impact, links)
public/                  Images, CV (docs/), robots.txt, sitemap.xml
generate-sitemap.js      Sitemap generator (runs as postbuild)
```

## Content

- **Project data** lives in `json/data.json`. Each entry drives the project card,
  the statically generated case-study page, and its metadata.
  Set `"featured": true` to surface a project on the landing page.
- **CV** is served from `public/docs/CV-Dony_Al-Uzzam.pdf`.
- **Sitemap** is generated from `data.json` on every `npm run build`
  (see `postbuild` in `package.json`), and referenced by `public/robots.txt`.

## Environment

Only Vercel Analytics and the third-party chat widget are used — no env vars are
required to build or run the site locally.
