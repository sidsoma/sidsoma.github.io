# Adding a New Project Page

## Quickstart

1. **Create a folder** for the new project at the repo root:
   ```
   mkdir my-new-project
   ```

2. **Copy the template** into that folder:
   ```
   cp project-page-template.html my-new-project/index.html
   ```

3. **Copy the CSS/JS** from an existing project page (the consumer-nlos page has the latest styles):
   ```
   cp consumer-nlos/app.css my-new-project/app.css
   ```

4. **Fill in all `TODO:` placeholders** in `index.html` — search for `TODO` to find every spot:
   - Page `<title>` and `<meta name="description">`
   - Hero: venue, title, description
   - TOC nav: update section labels and `href` anchors to match your sections
   - Paper info: full title, venue badge, authors, affiliations, paper/arXiv/code links
   - Abstract paragraphs
   - Method and Results section content
   - BibTeX citation block

5. **Add an `images/` subfolder** for your figures and videos:
   ```
   mkdir my-new-project/images
   ```

6. **Link to the new page** from [index.html](index.html) in the publications/projects section.

## Notes

- Google Analytics (ID: `G-YW92LE7MXD`) is already included in the template — no extra steps needed.
- The TOC nav auto-highlights the active section as the user scrolls. To add or remove sections, update both the `<nav class="toc-nav">` links and the corresponding `<section id="...">` tags so they match.
- Videos use `autoplay loop muted` and are managed by an IntersectionObserver in the script at the bottom — just drop in `<video>` tags and they'll be handled automatically.
- For a `@article` BibTeX entry (journal paper) instead of `@inproceedings`, change the `booktitle` field to `journal`.

## File Structure Reference

```
my-new-project/
├── index.html      ← copied and filled from project-page-template.html
├── app.css         ← copied from consumer-nlos/app.css (customize as needed)
└── images/
    ├── results/    ← videos and result figures
    └── ...
```
