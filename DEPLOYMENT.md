# Deploying Thoroughbred Exports to Bluehost

Your site is a **pure static React build** — no Node.js, no PHP, no
Python needed on the server. Any Apache-based shared hosting works
(Bluehost, HostGator, GoDaddy cPanel, etc.).

Total upload size: ~18 MB (~14 MB zipped).

---

## 1. Configure the contact form (one-time, 2 minutes)

The enquiry form uses **Web3Forms** (free, no backend, no login).

1. Go to <https://web3forms.com/>.
2. Enter your email (`shivendra@thoroughbredexports.com`) → click **Create Access Key**.
3. Check your inbox for the key (it looks like `abc12345-def6-7890-...`).
4. In your project, open `frontend/src/data/site.js` and replace the placeholder:
   ```js
   export const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";
   ```
   with your real key. Save.

Every submission on `/contact` will be delivered to your email inbox — no server involved.

---

## 2. Build the site

From the `frontend/` directory:

```bash
yarn install     # first time only
yarn build
```

This creates a `build/` folder. Everything you need to deploy sits inside it.

---

## 3. Upload to Bluehost — the easy way

1. Sign in to **Bluehost** → open the **cPanel** for your domain.
2. Open **File Manager** → navigate to `public_html/` (or the sub-folder
   for your specific domain, e.g. `public_html/thoroughbredexports.com/`).
3. If there's anything there from a previous WordPress install, delete
   its contents (keep the folder itself).
4. Click **Upload** (top toolbar).
5. Upload the file `thoroughbred-exports-site.zip` (the one I packaged
   for you at `/app/thoroughbred-exports-site.zip`).
6. Back in File Manager, right-click the uploaded zip → **Extract** →
   confirm the destination is `public_html/` (or your sub-folder).
7. Delete the zip afterwards (it's no longer needed).
8. **Important — enable hidden files:** In File Manager click
   **Settings** (top-right) → tick **Show Hidden Files (dotfiles)** →
   Save. You should now see `.htaccess` in the folder. If it isn't
   there, upload it manually from your local `build/.htaccess`.

Visit your domain — the site should be live within seconds.

### Why `.htaccess` matters

The included `.htaccess` tells Apache to rewrite all unknown URLs
(`/services`, `/licenses`, etc.) back to `index.html` so that React
Router deep-links work. If a visitor refreshes `/contact` and gets a
404, `.htaccess` is missing — re-upload it.

---

## 4. Drop your PDFs into `/licenses/` and `/catalogues/`

Both dropdowns on the site are wired to look for files at fixed paths.
Just upload the PDFs to Bluehost — no rebuild needed.

### Certificates (Licenses page)
Upload to `public_html/licenses/`:

| Certificate               | Filename        |
| ------------------------- | --------------- |
| IEC — Importer Exporter Code | `iec.pdf`   |
| APEDA Registration        | `apeda.pdf`     |
| FSSAI License             | `fssai.pdf`     |

### Catalogues (Catalogues page)
Upload to `public_html/catalogues/`:

| Catalogue      | Filename              |
| -------------- | --------------------- |
| Table Grapes   | `table-grapes.pdf`    |
| Pomegranates   | `pomegranates.pdf`    |
| Bananas        | `bananas.pdf`         |
| Indian Mangoes | `indian-mangoes.pdf`  |
| Writeups       | `writeups.pdf`        |
| Circulars      | `circulars.pdf`       |

If a filename doesn't match exactly, the Download button on the site
will 404 — filenames are case-sensitive on most shared hosts.

> Tip: If you want a different filename, edit `frontend/src/data/site.js`
> (the `CERTIFICATES` and `CATALOGUE_FILES` arrays), rebuild, and re-upload.

---

## 5. Adding / editing content later

Almost everything editable lives in a single file:

```
frontend/src/data/site.js
```

Change contact details, add a new certificate row, add a new catalogue
row, tweak the Web3Forms key → save → `yarn build` → re-upload the
`build/` contents.

Text content (paragraphs on the /services About Us and /licenses pages,
the "A quick note" text on /catalogues) lives directly inside the
respective files in `frontend/src/pages/`.

---

## 6. Troubleshooting

| Symptom | Fix |
| --- | --- |
| **404 when refreshing `/services`** | `.htaccess` isn't uploaded (or hidden files aren't shown in cPanel). Re-upload it. |
| **Fonts not loading** | Site must be served over HTTPS. Bluehost gives a free SSL — enable it in **cPanel → SSL/TLS Status → Run AutoSSL**. |
| **Contact form errors out** | Web3Forms key hasn't been replaced in `site.js`, or the key is inactive. Log in to Web3Forms to check. |
| **PDF Download 404** | Filename on the server doesn't exactly match the entry in `site.js` (case-sensitive). |
| **Site looks unstyled / blank** | Delete browser cache. If persistent, ensure the `static/` folder was uploaded intact. |

---

## Ready-made zip

You'll find a fresh build here (rebuild anytime with `yarn build`):

```
/app/thoroughbred-exports-site.zip   ← ~14 MB, contains everything
```

Download this file (right-click → Save from Emergent's file panel, or
your terminal/SFTP), then follow **Step 3** above.

---

That's it. From key + zip in hand, you're 5 minutes away from live.
