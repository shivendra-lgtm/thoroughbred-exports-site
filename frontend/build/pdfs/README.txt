This folder holds the downloadable PDFs shown on the "Catalogues" page.

To publish a new document:
1. Rename your PDF to match the filenames listed in /app/frontend/src/data/site.js
   (e.g. fresh-produce-catalogue.pdf, spices-ingredients-catalogue.pdf,
    company-profile.pdf, season-circular-latest.pdf).
2. Drop the file here (locally) OR upload it to /public_html/pdfs/ on Bluehost
   via File Manager after the site is deployed.
3. If you add a NEW document, edit /app/frontend/src/data/site.js — add an entry
   to the CATALOGUES array with its title, description, category and file path.

That's all. No backend, no login. Files placed in /public_html/pdfs/ become
publicly downloadable from https://yourdomain.com/pdfs/<filename>.pdf.
