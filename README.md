# VLA-Pro Static Project Page

This folder is a static GitHub Pages-ready website for the paper:

**VLA-Pro: Cross-Task Procedural Memory Transfer for Vision-Language-Action Models**

## Local Preview

Open `index.html` directly in a browser, or run a small static server from this folder.

## GitHub Pages Publishing

1. Create a new GitHub repository, for example `VLA-Pro`.
2. Upload everything in this folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `paper.pdf`
   - `assets/`
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save. The site will become available at:

```text
https://<your-github-username>.github.io/VLA-Pro/
```

For a personal homepage repository named `<your-github-username>.github.io`, the same files can be placed at the repository root and the URL will be:

```text
https://<your-github-username>.github.io/
```

## Updating Content

- Replace `paper.pdf` to update the paper button.
- Replace files in `assets/images/` or `assets/videos/` to update visual material.
- Edit `index.html` to update the author list, code link, abstract, results, or BibTeX.
