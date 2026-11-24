# Kriscent Website (kriscent.in)

Company website built with **Next.js + TypeScript** as a **statically generated (SSG) site**. It is hosted on cPanel, which has no Node.js service, so the site is exported as plain HTML/CSS/JS and uploaded manually. The backend (API and admin panel) is **Laravel**, hosted separately.

> This README covers only project-specific decisions and gotchas. Generic Next.js knowledge is not repeated here.

---

## 1. Run and Build

```bash
npm install
npm run dev     # dev server
npm run build   # generates the out/ folder
```

### SSG limitations (why things work differently here)
Static export (`output: 'export'`) causes many errors if you use server features. In this project you **cannot** use:
- `metadata` exports (see SEO section for the workaround)
- `searchParams`
- dynamic routes
- API routes (the Laravel backend is used instead)

---

## 2. Deployment

1. Run `npm run build`. The `out/` folder is created.
2. **Test on staging first** (see below).
3. Select **all files inside** `out/` and compress them into a **`.zip`** (not `.rar`, cPanel does not support it).
4. Send the zip to **Kapil sir**.
5. He uploads it to the `public_html` root of kriscent.in and extracts it. The site is now updated.

### Staging server (safest approach)
- Staging site: https://kriscent.kriscenttechnohub.in/ (a subdomain on the staging server)
- cPanel: https://kriscenttechnohub.in/cpanel (credentials from Kapil sir)
- Deploy and test the build here **before** giving the final zip to Kapil sir.

### Rollback
If something breaks after a deploy, use either option:
- Ask Kapil sir to restore the **backup of the old code** that he keeps.
- Check out the **`old-code-backup`** branch, then build and deploy it.

### `.htaccess`
- There is **no `.htaccess` in this project, and none should be added.**
- The one on the cPanel root handles the paths needed to load the site's CSS, JS and other assets. Routes do not depend on it.
- Edit that file **very carefully**. A mistake can break the whole site.

---

## 3. SEO

Static export cannot use `metadata` exports, so SEO is handled manually.

- **`seo.tsx`** is a wrapper used by every page. It contains the `<head>` and `<body>` tags, so **`layout.tsx` must not contain them.** It holds meta tags, schema, analytics, scripts, domain verification and per-page settings (see comments in the file).
- Per-page titles and descriptions come from **`variables.ts`**.

### Adding a new page
1. Wrap the page in the SEO component.
2. Add the page's metadata in `variables.ts`.
3. Pass that metadata to the SEO component where the page is wrapped.

The page gets all its SEO data automatically. No manual tags needed.

---

## 4. Static content (edit the data file, no backend)

| Section | File | Notes |
|---|---|---|
| Portfolio (`/portfolio`) | `projectData.tsx` | See below. Read all comments in the file before editing. |
| Clients | `clientData.ts` | See below. |
| Case studies | `case-studies-data.ts` | Each case study also needs its own page. See below. |
| Terms, Privacy Policy | respective page code | Static |
| Reviews / Testimonials | respective code files | Static |
| FAQ | respective code file | Static |

### Portfolio
- Every project follows the `ProjectData` interface in `projectData.tsx`. Field-level instructions are in the comments.
- **The layout depends on position:** every **4th project** is shown as a big tile. One project in the wrong position breaks the pattern of the whole page.
- `cardHighlight` decides the cover image used:
  - `website` uses the first item of `websites[]`
  - `appCarousel` uses the first item of `applications[]`
  - Make sure that first item exists and has a good image.
- Display order is controlled by `StructuredProjectData` and `StructuredAdditionalProjectData` (below the type). Reorder projects there instead of moving data around.

### Clients
`clientData.ts` has two objects:
- **`premiumClients`**: big-project clients
  - Level 1: big projects, still working with us
  - Level 2: lower than level 1
- **`allClients`**: basic-service or very old clients (always level 3)

The levels decide the display hierarchy on the clients page.

### Case studies
- Data is in `case-studies-data.ts` (add, remove or edit there).
- Each case study has its **own route** using shared reusable components.
- **To add a new case study, create a new page for it.** Dynamic routes are not possible in this site.

---

## 5. Images (ImageKit CDN)

- All decorative images, icons and backgrounds are served from **ImageKit**. You need its login credentials to make changes.
- **Why ImageKit:** images used to be served from our own server, but they loaded slowly and hurt website performance. ImageKit is a free CDN that fixed this.
- Everything lives in the **`tempAssets`** folder on ImageKit. `ASSETS_BASE_URL` in `variables.ts` points to it.
- To add or change an image: upload it to the right ImageKit folder, then reference it through `ASSETS_BASE_URL`. Examples:
  - project banners: `tempAssets/projectImages/banners`
  - client logos: `tempAssets/clientsImages`
- **Never hard-code image links.**
- **Never put images in the `public` folder.** They end up in `out/`, and unneeded files on cPanel have to be deleted manually, one by one.
- Next.js `<Image />` is not useful in a static export. Use normal image tags.

---

## 6. Dynamic data (Laravel API + admin panel)

The API base URL is `API_ENDPOINT` in `variables.ts`.

| Page | Source | How to change |
|---|---|---|
| Career | API | Add or remove jobs from the **admin panel** |
| Gallery | API | Managed from the **admin panel** |
| Contact | Separate API | Basic form. Entries appear in the admin panel. |
| Quotation | Separate API | Detailed form. Entries appear in the admin panel. |

**Gallery images are the only images stored on our own server.** They include photos of employees and the company, so they are kept private on our server instead of a third-party CDN.

---

## 7. Blog

- `/blog` is a **separate WordPress site**, only linked from this website. There is **no blog code in this project.**
- To make changes, log into the **WordPress panel** (credentials required).

---

## 8. Do NOT

- Do **not** create a `/products` route. A `products` folder already exists on the server root and would conflict.
- Do **not** create a `/blog` page. It is linked to the external WordPress blog.
- Do **not** add `.htaccess` to this project.
- Do **not** hard-code colors. The theme and colors are defined in `global.css`.
- Do **not** use dynamic routes, `searchParams`, API routes or `metadata` exports. They do not work in a static export.
- Do **not** add `<head>` or `<body>` to `layout.tsx`. `seo.tsx` handles them.
- Do **not** upload `.rar` files to cPanel. Use `.zip`.
- Do **not** send a build to production without testing it on staging.
- Do **not** store credentials in this repo. Keep ImageKit, WordPress, admin panel and cPanel logins in the company's secure password store.

---

## 9. Access needed

| Access | Used for |
|---|---|
| cPanel, production and staging (via Kapil sir) | Deployment |
| ImageKit | Images |
| Admin panel (Laravel) | Careers, gallery, contact and quotation entries |
| WordPress panel | Blog |