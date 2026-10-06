# Ahmed Shaikh — Portfolio

Personal portfolio built with **React 19 + Vite + Framer Motion + Lenis** (smooth scroll).
Black & orange theme, fully responsive, with scroll-driven animations.

## Chalane ka tareeqa

```bash
npm install      # pehli dafa
npm run dev      # http://localhost:5173 par khulegi, save karte hi refresh
npm run build    # production build (dist/ folder)
```

## Folder structure

```
portfolio/
├── public/
│   ├── profile.webp              ← aapki photo
│   ├── Ahmed_Shaikh_Resume.pdf   ← apni CV is naam se yahan rakhein (button khud aa jayega)
│   └── projects/                 ← project thumbnails
├── src/
│   ├── data.js        ← ✏️ SAARA CONTENT YAHAN HAI (sirf isay edit karein)
│   ├── styles.css     ← design; rang sab se upar :root mein
│   ├── App.jsx        ← sections ki tarteeb
│   └── components/    ← Hero, About, Projects, Skills, Contact...
└── index.html
```

## Naya project add karna

1. Website ka screenshot (1440×900 best) `public/projects/` mein rakhein, e.g. `my-site.webp`.
2. `src/data.js` mein `projects` array ke andar ek block copy-paste karke badlein:

```js
{
  title: "My Site",
  subtitle: "Short Tagline",
  category: "Full Stack",
  featured: true,                    // true = bara slide, false = chhota card
  image: "/projects/my-site.webp",   // khali "" chhorein to live screenshot khud load hoga
  description: "What it does in 1–2 lines.",
  tags: ["React.js", "Node.js"],
  live: "https://my-site.vercel.app/",
  code: "https://github.com/AhmedShaikh86/my-site",
  year: "2026",
},
```

3. `git add . && git commit -m "Add my-site" && git push` — Vercel khud update kar dega.

## Rang badalna

`src/styles.css` ke shuru mein `--orange` aur `--bg` badal dein — poori site ka rang badal jayega.

## Vercel par deploy

vercel.com → **Add New Project** → is repo ko select karein → Framework **Vite** khud detect hoga → **Deploy**.
