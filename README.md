# Muhammad Ahmed Shaikh — Portfolio

Plain HTML + CSS + JavaScript. Koi build step nahi, koi `npm install` nahi.
`index.html` ko browser mein kholein aur site chal jayegi.

## Folder structure

```
portfolio/
├── index.html            ← page ka dhancha (structure)
├── css/style.css         ← design + 4 themes
├── js/data.js            ← ✏️ SAARA CONTENT YAHAN HAI (sirf isay edit karein)
├── js/main.js            ← data.js se page banata hai (edit ki zaroorat nahi)
└── assets/
    ├── profile.webp      ← aapki photo
    ├── Ahmed_Shaikh_Resume.pdf   ← apni CV is naam se yahan rakhein
    └── projects/         ← project thumbnails
```

## Naya project add karna

1. `js/data.js` kholein aur `projects: [` array dhoondein.
2. Kisi bhi project ka `{ ... },` block copy karke list mein paste karein aur values badlein:

```js
{
  title: "My New Website",
  category: "Frontend",            // naya category likhenge to filter button khud ban jayega
  featured: true,                  // true = bara card with thumbnail
  image: "assets/projects/my-new-website.webp",
  description: "Short description of what it does.",
  tags: ["React.js", "Tailwind CSS"],
  live: "https://my-new-website.vercel.app/",
  code: "https://github.com/AhmedShaikh86/my-new-website",
  year: "2026",
},
```

3. **Thumbnail:** live site ka screenshot le kar (1440×900 best hai) `assets/projects/` mein rakhein
   aur `image` mein uska path likhein.
   - Agar `image: ""` khali chhor dein to site **khud live link ka screenshot** online load kar legi
     (microlink.io se). Ye kaam karta hai, lekin apni image rakhna zyada fast aur reliable hai.

Stats (`10+ Projects built` etc.), skills, experience, education — sab kuch isi file mein hai.

## Theme

4 themes built-in hain — navbar mein 🎨 button se switch hoti hain:

| Theme | Style |
|---|---|
| `wine` (default) | Dark + wine/burgundy + champagne gold — aapke suit se match |
| `midnight` | Dark + indigo/cyan — classic developer look |
| `emerald` | Dark + green/lime — techy |
| `ivory` | Light + wine — clean, professional |

Default theme badalni ho to `js/data.js` mein `defaultTheme: "wine"` badal dein.

## Vercel par deploy

1. Is folder ko GitHub repo mein push karein (e.g. `My-Porfolio-Website`).
2. vercel.com → **Add New Project** → repo select → Framework: **Other** → Deploy.
   Build command ki zaroorat nahi.

Har baar naya project add karke `git push` karein, Vercel khud update kar dega.
