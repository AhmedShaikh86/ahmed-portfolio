/* =====================================================================
   MAIN SCRIPT — data.js se content le kar page banata hai.
   Aam taur par is file ko edit karne ki zaroorat nahi; content ke liye
   js/data.js edit karein.
   ===================================================================== */
(() => {
  const D = PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Icons (inline SVG, koi library nahi) ---------- */
  const ICONS = {
    github: '<svg viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24"><path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.4L3 21z"/><path d="M9.5 9.5c.3 2 2 3.7 4 4l1-1 1.5.8-.4 1.4c-3.2.2-6.4-3-6.2-6.2l1.4-.4.8 1.5z"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    cap: '<svg viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>',
    brief: '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><path d="M22 4 12 14l-3-3"/></svg>',
    external: '<svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>',
    folder: '<svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    layout: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    server: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>',
    database: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/></svg>',
    code: '<svg viewBox="0 0 24 24"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    tool: '<svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z"/></svg>',
    spark: '<svg viewBox="0 0 24 24"><path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/></svg>',
  };

  /* ---------- Simple text bindings: data-bind="name" etc. ---------- */
  $$("[data-bind]").forEach(el => {
    const v = D.profile[el.dataset.bind];
    if (v) el.textContent = v;
  });
  document.title = `${D.profile.name} — ${D.profile.title}`;
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Hero ---------- */
  $("#heroPhoto").src = D.profile.photo;
  if (!D.profile.available) $("#availBadge").style.display = "none";

  const resumeBtn = $("#resumeBtn");
  resumeBtn.href = D.profile.resume;
  // Agar CV file abhi upload nahi hui to button chhupa do (sirf live server par check hota hai)
  if (location.protocol.startsWith("http")) {
    fetch(D.profile.resume, { method: "HEAD" })
      .then(r => { if (!r.ok) resumeBtn.style.display = "none"; })
      .catch(() => {});
  }

  const C = D.contact;
  const socials = [
    { icon: "github", url: C.github, label: "GitHub" },
    { icon: "linkedin", url: C.linkedin, label: "LinkedIn" },
    { icon: "mail", url: `mailto:${C.email}`, label: "Email" },
    { icon: "whatsapp", url: `https://wa.me/${C.whatsapp}`, label: "WhatsApp" },
  ].filter(s => s.url);
  const socialHTML = socials
    .map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${s.label}" title="${s.label}">${ICONS[s.icon]}</a>`)
    .join("");
  $("#heroSocials").innerHTML = socialHTML;
  $("#footerSocials").innerHTML = socialHTML;

  /* ---------- Typing effect ---------- */
  (function typeLoop() {
    const el = $("#typed");
    const roles = D.profile.roles;
    let r = 0, i = 0, deleting = false;
    function tick() {
      const word = roles[r];
      el.textContent = word.slice(0, i);
      if (!deleting && i < word.length) { i++; return setTimeout(tick, 70); }
      if (!deleting && i === word.length) { deleting = true; return setTimeout(tick, 1800); }
      if (deleting && i > 0) { i--; return setTimeout(tick, 35); }
      deleting = false; r = (r + 1) % roles.length; setTimeout(tick, 300);
    }
    tick();
  })();

  /* ---------- Stats ---------- */
  $("#stats").innerHTML = D.stats
    .map(s => `<div class="stat"><b><span data-count="${s.value}">0</span><em>${esc(s.suffix)}</em></b><span>${esc(s.label)}</span></div>`)
    .join("");

  /* ---------- Marquee (skills se khud banta hai) ---------- */
  const allSkills = [...new Set(D.skills.flatMap(g => g.items))];
  const mq = allSkills.map(s => `<span>${esc(s)}</span>`).join("");
  $("#marquee").innerHTML = mq + mq;

  /* ---------- About ---------- */
  $("#aboutText").innerHTML = D.profile.about.map(p => `<p>${esc(p)}</p>`).join("");
  const latestEdu = D.education[0];
  const info = [
    { icon: "pin", label: "Based in", value: D.profile.location },
    { icon: "cap", label: "Education", value: "BS Computer Science" },
    { icon: "brief", label: "Experience", value: `${D.experience.length} industry roles` },
    { icon: "check", label: "Status", value: D.profile.available ? "Open to opportunities" : latestEdu.school },
  ];
  $("#infoCards").innerHTML = info
    .map(c => `<div class="info-card"><span class="ic">${ICONS[c.icon]}</span><div><small>${c.label}</small><b>${esc(c.value)}</b></div></div>`)
    .join("");

  /* ---------- Skills ---------- */
  $("#skillsGrid").innerHTML = D.skills
    .map((g, i) => `
      <div class="skill-card reveal" style="transition-delay:${(i % 3) * 80}ms">
        <div class="skill-head"><span class="ic">${ICONS[g.icon] || ICONS.code}</span><h3>${esc(g.title)}</h3></div>
        <div class="chips">${g.items.map(s => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      </div>`)
    .join("");

  /* ---------- Projects ---------- */
  const host = url => { try { return new URL(url).host; } catch { return url; } };
  // Agar project ka `image` khali ho to live site ka screenshot online service se aa jata hai
  const autoShot = url => `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900`;

  const tagsHTML = tags => `<div class="project-tags">${tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>`;

  const featuredCard = (p, i) => {
    const img = p.image || (p.live ? autoShot(p.live) : "");
    const thumbInner = img
      ? `<img src="${esc(img)}" alt="${esc(p.title)} screenshot" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'thumb-fallback',textContent:${esc(JSON.stringify(p.title))}}))">`
      : `<div class="thumb-fallback">${esc(p.title)}</div>`;
    return `
      <article class="project-card reveal" data-cat="${esc(p.category)}" style="transition-delay:${(i % 2) * 100}ms">
        <div class="browser">
          <div class="browser-bar"><i></i><i></i><i></i><span>${esc(p.live ? host(p.live) : p.title)}</span></div>
          <a class="thumb" href="${esc(p.live || p.code || "#")}" target="_blank" rel="noopener">${thumbInner}</a>
        </div>
        <div class="project-body">
          <div class="project-meta"><span class="project-cat">${esc(p.category)}</span><span class="project-year">${esc(p.year)}</span></div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          ${tagsHTML(p.tags)}
          <div class="project-links">
            ${p.live ? `<a class="btn btn-primary" href="${esc(p.live)}" target="_blank" rel="noopener">Live demo ${ICONS.external}</a>` : ""}
            ${p.code ? `<a class="btn btn-ghost" href="${esc(p.code)}" target="_blank" rel="noopener">${ICONS.github} Code</a>` : ""}
          </div>
        </div>
      </article>`;
  };

  const miniCard = (p, i) => `
    <article class="mini-card reveal" data-cat="${esc(p.category)}" style="transition-delay:${(i % 3) * 80}ms">
      <div class="mini-top">
        <span class="folder">${ICONS.folder}</span>
        <span class="links">
          ${p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener" aria-label="Source code">${ICONS.github}</a>` : ""}
          ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener" aria-label="Live site">${ICONS.external}</a>` : ""}
        </span>
      </div>
      <h4>${esc(p.title)}</h4>
      <p>${esc(p.description)}</p>
      ${tagsHTML(p.tags)}
    </article>`;

  const featured = D.projects.filter(p => p.featured);
  const others = D.projects.filter(p => !p.featured);
  $("#projectsGrid").innerHTML = featured.map(featuredCard).join("");
  $("#miniGrid").innerHTML = others.map(miniCard).join("");
  $("#ghAll").href = C.github + "?tab=repositories";

  // Filters — categories data se khud bante hain
  const cats = ["All", ...new Set(D.projects.map(p => p.category))];
  const count = c => (c === "All" ? D.projects.length : D.projects.filter(p => p.category === c).length);
  $("#filters").innerHTML = cats
    .map((c, i) => `<button class="${i === 0 ? "active" : ""}" data-filter="${esc(c)}">${esc(c)}<sup>${count(c)}</sup></button>`)
    .join("");
  $("#filters").addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    $$("#filters button").forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    $$(".project-card, .mini-card").forEach(card => {
      card.classList.toggle("hide", f !== "All" && card.dataset.cat !== f);
    });
  });

  /* ---------- Experience & Education ---------- */
  $("#timeline").innerHTML = D.experience
    .map(x => `
      <div class="tl-item reveal">
        <span class="tl-period">${esc(x.period)}</span>
        <h3>${esc(x.role)}</h3>
        <p class="tl-company">${esc(x.company)}</p>
        <ul>${x.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>`)
    .join("");
  $("#eduList").innerHTML = D.education
    .map(e => `
      <div class="edu-card reveal">
        <span class="tl-period">${esc(e.period)}</span>
        <h3>${esc(e.degree)}</h3>
        <p>${esc(e.school)}</p>
        ${e.note ? `<span class="note">${esc(e.note)}</span>` : ""}
      </div>`)
    .join("");

  /* ---------- Contact ---------- */
  const contactItems = [
    { icon: "mail", label: "Email", value: C.email, url: `mailto:${C.email}` },
    { icon: "phone", label: "Phone / WhatsApp", value: C.phone, url: `https://wa.me/${C.whatsapp}` },
    { icon: "linkedin", label: "LinkedIn", value: C.linkedin.replace(/^https?:\/\/(www\.)?/, ""), url: C.linkedin },
    { icon: "github", label: "GitHub", value: C.github.replace(/^https?:\/\/(www\.)?/, ""), url: C.github },
  ];
  $("#contactLinks").innerHTML = contactItems
    .map(c => `<a class="contact-link" href="${esc(c.url)}" target="_blank" rel="noopener"><span class="ic">${ICONS[c.icon]}</span><div><small>${c.label}</small><b>${esc(c.value)}</b></div></a>`)
    .join("");

  $("#contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(`Portfolio enquiry from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    location.href = `mailto:${C.email}?subject=${subject}&body=${body}`;
  });

  /* ---------- Theme switcher ---------- */
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch {}
  const setTheme = t => {
    root.dataset.theme = t;
    $$("[data-set-theme]").forEach(b => b.classList.toggle("current", b.dataset.setTheme === t));
  };
  setTheme(saved || D.defaultTheme);

  const themeBtn = $("#themeBtn"), themeMenu = $("#themeMenu");
  themeBtn.addEventListener("click", e => {
    e.stopPropagation();
    const open = themeMenu.classList.toggle("open");
    themeBtn.setAttribute("aria-expanded", open);
  });
  themeMenu.addEventListener("click", e => {
    const b = e.target.closest("[data-set-theme]");
    if (!b) return;
    setTheme(b.dataset.setTheme);
    try { localStorage.setItem("theme", b.dataset.setTheme); } catch {}
    themeMenu.classList.remove("open");
  });
  document.addEventListener("click", () => themeMenu.classList.remove("open"));

  /* ---------- Mobile menu ---------- */
  const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    navLinks.classList.remove("open");
  }));

  /* ---------- Scroll: nav style, active link, back-to-top ---------- */
  const nav = $("#nav"), toTop = $("#toTop");
  const sections = $$("main section[id]");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 30);
    toTop.classList.toggle("show", y > 700);
    let current = "";
    sections.forEach(s => { if (y >= s.offsetTop - 140) current = s.id; });
    $$("#navLinks a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll + counters ---------- */
  const animateCount = el => {
    const target = +el.dataset.count, dur = 1400, start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      $$("[data-count]", en.target).forEach(animateCount);
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach(el => io.observe(el));

  /* ---------- Cursor glow + skill card spotlight (desktop only) ---------- */
  if (matchMedia("(pointer: fine)").matches) {
    const glow = $(".cursor-glow");
    window.addEventListener("mousemove", e => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    }, { passive: true });
    $$(".skill-card").forEach(card => card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    }));
  }
})();
