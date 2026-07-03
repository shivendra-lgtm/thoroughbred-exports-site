# Deploying Thoroughbred Exports to Bluehost

This site is a **pure static React build**. No Node.js, PHP or Python is
required on the server. Any Apache-based shared hosting (Bluehost, HostGator,
GoDaddy cPanel, etc.) will work.

---

## 1. Configure the contact form (one-time)

The contact form uses **Web3Forms** (free, no backend).

1. Go to <https://web3forms.com/> and enter your email address to get a free
   **access key**.
2. Open `frontend/src/data/site.js`.
3. Replace the placeholder:
   ```js
   export const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";
   ```
   with your actual key. Save the file.

Every enquiry submitted through the site will be delivered to the email you
registered with Web3Forms — no server hosting required.

---

## 2. Drop your logo

Save your logo image as `logo.png` (recommended: transparent PNG, ~256×256 px)
and place it at:

```
frontend/public/images/logo.png
```

The navbar automatically picks it up. If the file is missing the logo image
gracefully hides, leaving only the wordmark.

---

## 3. Add your PDFs

Place the PDF files listed in `frontend/src/data/site.js` inside:

```
frontend/public/pdfs/
```

Expected filenames (from the default configuration):
- `fresh-produce-catalogue.pdf`
- `spices-ingredients-catalogue.pdf`
- `company-profile.pdf`
- `season-circular-latest.pdf`

To add a **new** document, edit `frontend/src/data/site.js` and add a new
object to the `CATALOGUES` array with `title`, `description`, `category` and
`file` (e.g. `/pdfs/my-new-doc.pdf`).

> Tip: once the site is live on Bluehost, you can also drop new PDFs directly
> into `/public_html/pdfs/` via **cPanel → File Manager** without rebuilding
> the site. Just remember to also edit `site.js` and rebuild if you want the
> new file to appear on the Catalogues page.

---

## 4. Build the static site

From the `frontend/` directory:

```bash
yarn install
yarn build
```

This produces a `build/` folder containing the fully static site:
- `index.html`
- `.htaccess`  ← rewrite rules for React Router (already included)
- `static/`    ← hashed JS/CSS bundles
- `images/`    ← your photographs
- `pdfs/`      ← your documents

---

## 5. Upload to Bluehost

1. Log in to **Bluehost cPanel** → **File Manager**.
2. Open your `public_html/` folder (or the sub-directory for the specific
   domain, e.g. `public_html/thoroughbredexports.com/`).
3. Upload the **contents** of the `build/` folder (not the folder itself) into
   `public_html/`. The easiest way is to zip the `build/` folder locally,
   upload the zip, then use cPanel's **Extract** feature.
4. Ensure `.htaccess` was uploaded. In cPanel File Manager, click
   **Settings** → tick **Show Hidden Files (dotfiles)** if you don't see it.
5. Visit your domain — the site should be live.

### Deep-link routing
The included `.htaccess` rewrites all unknown URLs to `index.html` so that
React Router URLs like `/services`, `/contact`, etc. work when accessed
directly or shared. **Do not skip uploading `.htaccess`.**

---

## 6. Adding / editing content later

Almost all editable content lives in **one file**:

```
frontend/src/data/site.js
```

Change contact details, add licenses, add catalogues, tweak pillars — save the
file, run `yarn build` again, re-upload the `build/` folder.

---

## Troubleshooting

- **404 on `/services` after a page refresh** → `.htaccess` isn't uploaded or
  Apache `mod_rewrite` isn't enabled (Bluehost has it on by default).
- **Fonts not loading** → Check that the site is served over HTTPS. Google
  Fonts require it.
- **Contact form always errors** → The Web3Forms key hasn't been replaced in
  `site.js`, or the key is inactive. Log in to Web3Forms to verify.
- **PDFs 404** → Make sure the filename in `site.js` matches EXACTLY the
  filename on the server (case-sensitive on most shared hosts).
