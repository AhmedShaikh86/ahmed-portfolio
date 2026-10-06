/* =====================================================================
   PORTFOLIO DATA — saara content isi file mein hai.
   Text, projects, skills badalne hon to sirf yahan edit karein.
   Naya project: neeche `projects` array mein ek object copy-paste karein
   (README.md mein step-by-step guide hai).
   ===================================================================== */

export const profile = {
  firstName: "Ahmed",
  lastName: "Shaikh",
  fullName: "Muhammad Ahmed Shaikh",
  title: "Full Stack Developer",
  roles: ["Full Stack Developer", "React & Next.js", "Node.js & .NET", "Problem Solver"],
  location: "Karachi, Pakistan — Open to remote",
  photo: "/profile.webp",
  resume: "/Ahmed_Shaikh_Resume.pdf", // apni CV is naam se public/ folder mein rakh dein
  heroWord: "DEVELOPER", // hero ke peeche bada halka lafz
  taglineTop: "Code that performs.",
  taglineBottom: "Interfaces that convert.",
  intro:
    "I turn ideas into fast, responsive web products — from pixel-perfect React interfaces to the APIs and databases that power them.",
  bio: [
    "Full Stack Developer and Computer Science graduate from Dawood University of Engineering & Technology. I build responsive, production-ready web applications with React, Next.js, Node.js, Express and ASP.NET Core — backed by MongoDB, MySQL and SQL Server.",
    "Before writing code full-time I coordinated web projects: scoping requirements, estimating work and keeping delivery on track. That taught me to think like the client — I care about shipping things that actually solve the problem, not just things that look good.",
  ],
};

export const contact = {
  email: "ahmedshaikh2682@gmail.com",
  phone: "+92 332 2496651",
  whatsapp: "923322496651",
  linkedin: "https://linkedin.com/in/shaikh02",
  github: "https://github.com/AhmedShaikh86",
};

/* Hero ke upar chalne wale lafz aur marquee */
export const marqueeWords = [
  "React", "Next.js", "Node.js", "Express", "ASP.NET Core", "MongoDB",
  "SQL Server", "TypeScript", "Tailwind CSS", "Laravel", "REST APIs", "Git",
];

export const services = [
  { title: "Frontend Development", text: "Responsive, accessible interfaces in React & Next.js with smooth motion." },
  { title: "Full-Stack Web Apps", text: "End-to-end products — auth, dashboards, carts, admin panels." },
  { title: "API & Database Design", text: "REST APIs with Node/Express or ASP.NET Core on MongoDB, MySQL, SQL Server." },
  { title: "Deployment & Delivery", text: "Git-based workflows, Vercel deployments and clean, maintainable code." },
];

/* ---------------------------------------------------------------- PROJECTS
  featured: true  => bara slide with thumbnail ("Selected Works" section)
  featured: false => "More on GitHub" wale chhote cards
  image: "/projects/naam.webp"  (public/projects/ folder mein rakhein)
         khali "" chhorein to live site ka screenshot khud load ho jayega
*/
export const projects = [
  {
    title: "SmartStock",
    subtitle: "AI Business Portal",
    category: "Full Stack · AI",
    featured: true,
    image: "/projects/smart-stock.webp",
    description:
      "AI-powered portal on top of an ERP: customer storefront, live sales dashboard, low-stock alerts, demand forecasting and an “ask your data” chatbot.",
    tags: ["Next.js", "TypeScript", "Prisma", "ERPNext", "AI"],
    live: "https://smart-stock-nine-orcin.vercel.app/",
    code: "https://github.com/AhmedShaikh86/Smart-Stock",
    year: "2026",
  },
  {
    title: "NOVA",
    subtitle: "Tech E-Commerce Store",
    category: "E-Commerce",
    featured: true,
    image: "/projects/nova-ecommerce.webp",
    description:
      "Full-stack store with search & filters, persistent cart, checkout, JWT accounts and an admin dashboard with revenue stats and low-stock alerts.",
    tags: ["Next.js", "React 19", "Express", "MongoDB", "Tailwind"],
    live: "https://nova-ecommerce-kappa.vercel.app/",
    code: "https://github.com/AhmedShaikh86/Nova-ecommerce",
    year: "2026",
  },
  {
    title: "DUET",
    subtitle: "University Website",
    category: "Website",
    featured: true,
    image: "/projects/duet-university.webp",
    description:
      "A modern, fully responsive rebuild of the Dawood University website with dark/light mode, animated stats and a clean course & faculty layout.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    live: "https://duet-university-website.vercel.app/",
    code: "https://github.com/AhmedShaikh86/duet-university-website",
    year: "2025",
  },
  {
    title: "Agency.ai",
    subtitle: "Agency Landing Page",
    category: "Landing Page",
    featured: true,
    image: "/projects/agency-ai.webp",
    description:
      "Animated agency landing page with stat counters, testimonials carousel, scroll interactions and theme toggle.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Animations"],
    live: "https://my-first-react-project-sable.vercel.app/",
    code: "https://github.com/AhmedShaikh86/My-First-React-Project",
    year: "2026",
  },

  // ---- More projects (chhote cards) ----
  {
    title: "Enterprise HRMS",
    category: "Full Stack",
    featured: false,
    description: "HR & Payroll system with attendance, leave, PDF payslips, role-based dashboards and audit log. Clean Architecture + Docker.",
    tags: ["ASP.NET Core 8", "EF Core", "JWT", "React"],
    live: "",
    code: "https://github.com/AhmedShaikh86/EnterpriseHRMS",
  },
  {
    title: "ShopSphere",
    category: "Full Stack",
    featured: false,
    description: "Multi-vendor fashion marketplace with customer, seller and admin roles, inventory, orders and Stripe payments.",
    tags: ["Laravel", "Next.js", "Stripe", "MySQL"],
    live: "",
    code: "https://github.com/AhmedShaikh86/Shop-Sphere",
  },
  {
    title: "WorkFlow",
    category: "Full Stack",
    featured: false,
    description: "Linear/Notion-style team SaaS: workspaces, invites, roles, projects, tasks, comments and real-time updates.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    live: "",
    code: "https://github.com/AhmedShaikh86/Workflow",
  },
  {
    title: "Expense Tracker",
    category: "Mobile",
    featured: false,
    description: "Offline-first Android app with budgets, recurring expenses, charts, CSV export and optional cloud sync.",
    tags: ["React Native", "Expo", "SQLite"],
    live: "",
    code: "https://github.com/AhmedShaikh86/Expense-Tracker-mobileapp-",
  },
  {
    title: "AURA Firewall",
    category: "AI / ML · FYP",
    featured: false,
    description: "Final Year Project — Streamlit dashboard for real-time threat monitoring over ensemble ML and a FastAPI backend.",
    tags: ["Python", "Streamlit", "FastAPI", "ML"],
    live: "",
    code: "",
  },
  {
    title: "YT Backend",
    category: "Backend",
    featured: false,
    description: "Video-platform style REST API with MongoDB — API design, error handling and module structure.",
    tags: ["Node.js", "Express", "MongoDB"],
    live: "",
    code: "https://github.com/AhmedShaikh86",
  },
];

export const skills = [
  { title: "Frontend", items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Responsive Design"] },
  { title: "Backend", items: ["Node.js", "Express.js", "ASP.NET Core", ".NET Framework", "Laravel / PHP", "REST APIs", "JWT Auth"] },
  { title: "Database", items: ["MongoDB", "MySQL", "SQL Server", "Entity Framework Core", "Prisma", "Mongoose"] },
  { title: "Tools", items: ["Git & GitHub", "Postman", "Vercel", "Docker", "WordPress", "VS Code"] },
];

export const experience = [
  {
    period: "Sep 2025",
    role: "SEO Executive Intern",
    company: "OviTech",
    text: "Off-page SEO with keyword research and analytics tracking; monitored performance metrics across multiple web projects.",
  },
  {
    period: "Apr — Sep 2024",
    role: "Project Coordinator",
    company: "OviTech",
    text: "Analysed requirements across React, Node.js and WordPress/PHP projects to prepare bids and estimates; managed timelines between clients and developers.",
  },
  {
    period: "May — Jul 2022",
    role: "Front-End Developer Intern",
    company: "BSY Enterprise",
    text: "Built responsive interfaces with HTML, CSS, Tailwind and JavaScript; turned design mockups into code and integrated React components.",
  },
];

export const education = [
  { period: "2022 — 2026", degree: "BS Computer Science", school: "Dawood University of Engineering & Technology", note: "Degree awaiting" },
  { period: "2019 — 2022", degree: "Diploma in Software Engineering", school: "Aligarh Institute of Technology" },
  { period: "2017 — 2019", degree: "Matriculation", school: "St. Patrick's High School" },
];

export const philosophy = [
  { label: "The Approach", title: "Clean Code.", text: "Readable, well-structured code is a feature. I build things the next developer — including future me — can understand and extend." },
  { label: "The Vision", title: "Real Impact.", text: "My coordination background taught me to start with the client's goal. A beautiful site that doesn't solve the problem isn't finished." },
  { label: "The Method", title: "User First.", text: "Fast load times, responsive layouts and simple flows. Great software should feel effortless for the people using it." },
];
