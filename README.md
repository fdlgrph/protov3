# Fadhil Graphy — Portfolio

Premium dark-mode portfolio for Ahmad Nur Fadhil, built with Next.js 15 (App Router),
TypeScript, Tailwind CSS and Framer Motion.

## 1. Setup

```bash
npm install
```

Edit `lib/site-config.ts` before running — this is the single place to update:

- `SITE.url` — your real production domain (used for metadata, sitemap, robots)
- `CONTACT.email`, `CONTACT.whatsappNumber`, `CONTACT.whatsappUrl`
- `CONTACT.instagram`, `CONTACT.tiktok`, `CONTACT.linkedin`, `CONTACT.github`
- `MASCOT_SRC` — swap to `/mascot.png` once you've added the file to `/public`
  (recommended: the current URL is an external hotlink and may not always load)

Also add, if you have them:
- `/public/resume.pdf` — used by the "Download CV" button
- `/public/og-image.jpg` — 1200x630 social preview image
- `/public/favicon.ico`

## 2. Run locally

```bash
npm run dev
```

Visit http://localhost:3000

## 3. Build

```bash
npm run build
npm run start
```

## 4. Deploy to Vercel

1. Push this project to a GitHub/GitLab repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Next.js (auto-detected). No extra config needed.
4. Deploy. Vercel builds with `npm run build` automatically.

## 5. Deploy to a VPS (with PM2, since you already use it for other projects)

```bash
git clone <your-repo-url> fadhil-graphy
cd fadhil-graphy
npm install
npm run build

# Start with PM2
pm2 start npm --name "fadhil-graphy" -- start
pm2 save
pm2 startup
```

Then put Nginx (or your reverse proxy of choice) in front of port 3000, and
point your domain at it. Example Nginx server block:

```nginx
server {
    listen 80;
    server_name fadhilgraphy.com www.fadhilgraphy.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Add HTTPS with `certbot --nginx`.

## Project structure

```
app/            Next.js App Router entry (layout, page, sitemap, robots, globals.css)
components/
  ui/           Reveal, Magnetic, Buttons, Eyebrow — shared primitives
  effects/      ApertureLoader, CursorGlow, ScrollIris (the aperture/lens motif)
  layout/       Navbar, Footer
  sections/     Hero, About, Services, Portfolio, Skills, Experience,
                Stats, Testimonials, FAQ, Contact
  whatsapp/     FloatingWhatsApp button + confirmation modal
  PageShell.tsx Client wrapper tying loader + sections + modal state together
lib/
  data.ts           Content: nav links, services, portfolio, skills, experience, etc.
  site-config.ts     Editable settings: URLs, contact info, mascot source
```

## Notes

- `app/sitemap.ts` and `app/robots.ts` auto-generate `/sitemap.xml` and
  `/robots.txt` at build/runtime — no manual files needed.
- Design tokens (colors, fonts) live in `tailwind.config.ts`.
- Reduced-motion and focus-visible styles are handled in `app/globals.css`.
