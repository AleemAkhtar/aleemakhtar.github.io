# Aleem Akhtar - Academic Profile Website

A professional, minimal, fast, and fully responsive single page academic profile
website for **Aleem Akhtar**, Computer Science Educator, Technology Enhanced
Learning researcher, and applied software development professional.

The site is a static website built with HTML5, CSS3, Bootstrap 5, and a small
amount of vanilla JavaScript. It is designed to be hosted on GitHub Pages at
`https://aleemakhtar.github.io`.

## Purpose

To present Aleem Akhtar as a serious academic and professional profile suitable
for international recruiters, PhD supervisors, universities, colleges, schools,
and research groups. Teaching and academic identity are primary; applied
software development is shown as supporting experience.

## Technology

- HTML5 (semantic sections)
- Bootstrap 5 (via CDN)
- Bootstrap Icons (via CDN)
- Inter font (via Google Fonts, with a system-font fallback)
- Custom CSS in `assets/css/style.css`
- Minimal vanilla JavaScript in `assets/js/main.js`

No back end, no database, and no build step are required.

## Project structure

```
index.html
README.md
assets/
  css/style.css
  js/main.js
  img/
    profile.svg           # profile photo placeholder
    banner.svg            # Open Graph / social share image placeholder
    clearn-thumbnail.svg  # CLEARN project thumbnail placeholder
  docs/
    Aleem_Akhtar_CV.pdf            # placeholder
    MS_Thesis_Summary_CLEARN.pdf   # placeholder
    Teaching_Portfolio.pdf         # placeholder
```

> Note: The images are lightweight SVG placeholders (no copyright, fast loading).
> See "Updating images" below to replace them with real photos.

## Run locally

No server is required. Either:

1. Double-click `index.html` to open it in your browser, or
2. (Optional) Serve the folder with any static server, for example:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

An internet connection is needed the first time so the browser can load
Bootstrap, Bootstrap Icons, and the Inter font from their CDNs.

## Deploy on GitHub Pages

This repository is intended to be the user site repository named
`aleemakhtar.github.io`.

1. Create (or use) a public repository named **`aleemakhtar.github.io`**.
2. Commit and push all files (with `index.html` at the repository root):

```bash
git add .
git commit -m "Publish academic profile website"
git push origin main
```

3. In the repository on GitHub, open **Settings -> Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   choose the `main` branch and the `/ (root)` folder, then save.
5. After a minute or two the site will be live at
   `https://aleemakhtar.github.io`.

All asset paths are relative, so the site works both locally and on GitHub Pages.

## How to update content

The HTML is organised into clearly commented sections (for example
`<!-- START HERO SECTION -->`). Edit the text directly inside `index.html`.

### Updating the CV, thesis summary, and teaching portfolio

Replace the placeholder PDFs in `assets/docs/` with the real files, keeping the
same file names:

- `assets/docs/Aleem_Akhtar_CV.pdf`
- `assets/docs/MS_Thesis_Summary_CLEARN.pdf`
- `assets/docs/Teaching_Portfolio.pdf`

If you prefer different file names, update the matching `href` values in
`index.html` (search for `assets/docs/`).

### Updating images

Replace the SVG placeholders in `assets/img/` with real images. You can either:

- Keep the `.svg` names and overwrite them, or
- Add real photos (for example `profile.jpg`, `banner.jpg`) and update the
  matching `src`/`og:image` paths in `index.html` (search for `assets/img/`).

Recommended sizes: profile image roughly square (for example 600x600), banner /
Open Graph image 1200x630.

### Updating publications and project links

- Publications are in the `<!-- START PUBLICATIONS SECTION -->` block. Each entry
  has a "View" button with a placeholder `href="#"`. Replace `#` with the real
  DOI, Google Scholar, or repository link.
- Supervised student projects are in the
  `<!-- START STUDENT PROJECTS AND SUPERVISION SECTION -->` block, with HTML
  comments showing where to add specific project titles.
- The Google Scholar links (hero, contact, footer) use a placeholder
  `https://scholar.google.com/`. Replace them with the real profile URL when
  available.

## Accessibility and performance

- Semantic HTML5, proper heading hierarchy, alt text, and ARIA labels.
- Keyboard navigation and visible focus styles.
- Respects the user's reduced-motion preference.
- Lightweight: SVG placeholders, no heavy frameworks, lazy-loaded non-critical
  images.

## License / content

All written content describes Aleem Akhtar's academic and professional profile.
No private identity documents are included.
