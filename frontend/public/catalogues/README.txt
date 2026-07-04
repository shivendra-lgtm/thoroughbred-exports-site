Catalogue PDFs go in this folder.

The dropdown on the /catalogues page reads its list from
  /app/frontend/src/data/site.js  (CATALOGUE_FILES array)

Default filenames it looks for (drop these into public_html/catalogues/ on Bluehost):
  table-grapes.pdf
  pomegranates.pdf
  bananas.pdf
  indian-mangoes.pdf

To add a new catalogue: edit CATALOGUE_FILES in site.js — add
  { name: "Your Catalogue Name", file: "/catalogues/your-file.pdf" }
Then drop the matching PDF file here.
