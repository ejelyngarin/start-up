# START-UP Website — Fixed GitHub Pages Package

**Five Minds. Different Specializations. One Creative Vision.**

This package is arranged so that `index.html` and the `assets/` folder sit together at the published site root. This matters for the project URL `https://ejelyngarin.github.io/start-up/`.

## Included pages
- `index.html` — Home
- `about.html` — About START-UP
- `members.html` — Members directory
- `cyjaye.html`, `ejelyn.html`, `kim.html`, `shadin.html`, `zjay.html` — Individual member profiles
- `showcase.html` — Team showcase
- `contact.html` — Contact information

## Publish to GitHub Pages
1. Extract this ZIP.
2. Open the extracted `START-UP-Website-Fixed` folder.
3. Upload **everything inside this folder** to the **root of the `start-up` GitHub repository**. Do not upload the enclosing folder as a nested directory.
4. Confirm the repository root contains `index.html`, `about.html`, `.nojekyll`, and the `assets` folder.
5. In GitHub, open **Settings → Pages** and confirm the publishing source points to the branch and folder where these files were uploaded (usually `main` and `/ (root)`).
6. Wait for the Pages deployment to finish, then hard-refresh the site with `Ctrl + Shift + R`.

The stylesheet and scripts use relative paths (`assets/css/style.css`, `assets/js/...`), which resolve correctly when the files are published together at the repository root under `/start-up/`.

## Edit locally
Open this folder in Visual Studio Code and use Live Server to preview `index.html`.

## Where to edit
- Profile content: `assets/js/profiles.js`
- Shared navigation, footer, and interactions: `assets/js/main.js`
- Visual styling: `assets/css/style.css`
- Photos and logo: `assets/images/`
- Content overview: `content-manifest.json`

All original pages, profile content, images, styles, and scripts from the supplied project are retained in this package.
