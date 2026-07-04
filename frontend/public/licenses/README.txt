Certificate PDFs go in this folder.

The dropdown on the /licenses page reads its list from
  /app/frontend/src/data/site.js  (CERTIFICATES array)

Default filenames it looks for (drop these into public_html/licenses/ on Bluehost):
  iec.pdf, apeda.pdf, fssai.pdf, fieo.pdf,
  spices-board.pdf, msme.pdf, gst.pdf, pan.pdf

To add a new certificate: edit CERTIFICATES in site.js — add
  { name: "Your Cert Name", file: "/licenses/your-file.pdf" }
Then drop the matching PDF file here.
