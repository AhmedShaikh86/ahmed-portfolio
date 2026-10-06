/* =====================================================================
   PORTFOLIO DATA — saara content isi file mein hai.
   Website ka koi bhi text, project ya skill badalna ho to sirf yahan edit karein.
   Naya project add karna ho to neeche `projects` array mein ek naya object
   copy-paste karein (README.md mein step-by-step guide hai).
   ===================================================================== */

const PORTFOLIO = {
  // ---------------------------------------------------------------- PROFILE
  profile: {
    name: "Muhammad Ahmed Shaikh",
    shortName: "Ahmed",
    initials: "AS",
    title: "Full Stack Developer",
    roles: [
      "Full Stack Developer",
      "React & Next.js Developer",
      "Node.js / Express Developer",
      ".NET Core Enthusiast",
    ],
    location: "Karachi, Pakistan",
    photo: "assets/profile.webp",
    resume: "assets/Ahmed_Shaikh_Resume.pdf", // apni CV is naam se assets/ folder mein rakh dein
    available: true, // false karne par "Open to work" badge chhup jayega
    tagline:
      "I build fast, responsive and production-ready web apps — from pixel-perfect React interfaces to REST APIs and databases behind them.",
    about: [
      "I'm a Computer Science graduate from Dawood University of Engineering & Technology with a broad, hands-on background across frontend, backend and full-stack development.",
      "On the frontend I work with React.js, Next.js, JavaScript (ES6+) and Tailwind CSS. On the backend I build with Node.js, Express.js, PHP/Laravel and ASP.NET Core, backed by MySQL, SQL Server and MongoDB.",
      "Before writing code full-time I coordinated web projects — scoping requirements, estimating work and keeping delivery on track. That gave me a practical, business-aware mindset: I care about shipping things that actually solve the client's problem.",
    ],
  },

  // ----------------------------------------------------------------- CONTACT
  contact: {
    email: "ahmedshaikh2682@gmail.com",
    phone: "+92 332 2496651",
    phoneRaw: "+923322496651",
    whatsapp: "923322496651",
    linkedin: "https://linkedin.com/in/shaikh02",
    github: "https://github.com/AhmedShaikh86",
  },

  // ------------------------------------------------------------------- STATS
  // value = number (animate hota hai), suffix = "+" etc.
  stats: [
    { value: 10, suffix: "+", label: "Projects built" },
    { value: 4, suffix: "", label: "Live deployments" },
    { value: 3, suffix: "", label: "Industry roles" },
    { value: 15, suffix: "+", label: "Technologies" },
  ],

  // ------------------------------------------------------------------ SKILLS
  skills: [
    {
      title: "Frontend",
      icon: "layout",
      items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend",
      icon: "server",
      items: ["Node.js", "Express.js", "ASP.NET Core", ".NET Framework", "Laravel", "PHP", "REST APIs", "JWT Auth"],
    },
    {
      title: "Databases",
      icon: "database",
      items: ["MongoDB", "MySQL", "SQL Server", "Entity Framework Core", "Prisma", "Mongoose"],
    },
    {
      title: "Languages",
      icon: "code",
      items: ["JavaScript", "TypeScript", "C#", "PHP", "Python", "SQL"],
    },
    {
      title: "Tools & Workflow",
      icon: "tool",
      items: ["Git & GitHub", "Postman", "Vercel", "Docker", "VS Code", "WordPress"],
    },
    {
      title: "Currently Exploring",
      icon: "spark",
      items: ["Microservices", "Clean Architecture", "React Native", "AI / ML integration"],
    },
  ],

  // ---------------------------------------------------------------- PROJECTS
  /*
    Har project ke fields:
      title       : Project ka naam
      category    : Filter button ke liye (e.g. "Full Stack", "Frontend", "Backend", "Mobile")
      featured    : true = bara card with thumbnail (live projects ke liye)
      image       : Thumbnail ka path (assets/projects/... ). Agar khali chhor dein ("")
                    to website khud live link ka screenshot load kar legi.
      description : 1–2 line description
      tags        : Tech stack
      live        : Live website link ("" agar live nahi)
      code        : GitHub repo link ("" agar private hai)
      year        : Saal
  */
  projects: [
    {
      title: "SmartStock — AI Business Portal",
      category: "Full Stack",
      featured: true,
      image: "assets/projects/smart-stock.webp",
      description:
        "AI-powered portal on top of an ERP: customer storefront, live sales dashboard, low-stock alerts, demand forecasting and an “ask your data” chatbot.",
      tags: ["Next.js", "TypeScript", "Prisma", "ERPNext", "AI"],
      live: "https://smart-stock-nine-orcin.vercel.app/",
      code: "https://github.com/AhmedShaikh86/Smart-Stock",
      year: "2026",
    },
    {
      title: "NOVA — Tech E-Commerce Store",
      category: "Full Stack",
      featured: true,
      image: "assets/projects/nova-ecommerce.webp",
      description:
        "Full-stack store for laptops, audio and desk gear with search & filters, persistent cart, checkout, JWT accounts and an admin dashboard with stock alerts.",
      tags: ["Next.js", "React 19", "Express", "MongoDB", "Tailwind"],
      live: "https://nova-ecommerce-kappa.vercel.app/",
      code: "https://github.com/AhmedShaikh86/Nova-ecommerce",
      year: "2026",
    },
    {
      title: "DUET University Website",
      category: "Frontend",
      featured: true,
      image: "assets/projects/duet-university.webp",
      description:
        "A modern, fully responsive rebuild of the Dawood University website with dark/light mode, animated stats and a clean course & faculty layout.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "Dark Mode"],
      live: "https://duet-university-website.vercel.app/",
      code: "https://github.com/AhmedShaikh86/duet-university-website",
      year: "2025",
    },
    {
      title: "Agency.ai — Agency Website",
      category: "Frontend",
      featured: true,
      image: "assets/projects/agency-ai.webp",
      description:
        "Animated agency landing page with stat counters, a testimonials carousel, scroll interactions and theme toggle — deployed on Vercel.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Animations"],
      live: "https://my-first-react-project-sable.vercel.app/",
      code: "https://github.com/AhmedShaikh86/My-First-React-Project",
      year: "2026",
    },

    // ---- Non-featured projects (chhote cards, bina thumbnail) ----
    {
      title: "Enterprise HRMS",
      category: "Full Stack",
      featured: false,
      image: "",
      description:
        "HR & Payroll system: employees, attendance, leave, payroll with PDF payslips, role-based dashboards and audit log. Clean Architecture with Docker support.",
      tags: ["ASP.NET Core 8", "EF Core", "JWT", "React", "Docker"],
      live: "",
      code: "https://github.com/AhmedShaikh86/EnterpriseHRMS",
      year: "2026",
    },
    {
      title: "ShopSphere Marketplace",
      category: "Full Stack",
      featured: false,
      image: "",
      description:
        "Multi-vendor fashion marketplace with customer, seller and admin roles, inventory & order management and Stripe payments.",
      tags: ["Laravel", "Next.js", "Stripe", "MySQL"],
      live: "",
      code: "https://github.com/AhmedShaikh86/Shop-Sphere",
      year: "2026",
    },
    {
      title: "WorkFlow — Team SaaS",
      category: "Full Stack",
      featured: false,
      image: "",
      description:
        "Multi-workspace project management app (Linear/Notion-style): workspaces, invites, roles, projects, tasks, comments and real-time updates.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Real-time"],
      live: "",
      code: "https://github.com/AhmedShaikh86/Workflow",
      year: "2026",
    },
    {
      title: "Expense Tracker App",
      category: "Mobile",
      featured: false,
      image: "",
      description:
        "Offline-first Android expense tracker with budgets, recurring expenses, charts, CSV export and optional cloud sync.",
      tags: ["React Native", "Expo", "SQLite", "Supabase"],
      live: "",
      code: "https://github.com/AhmedShaikh86/Expense-Tracker-mobileapp-",
      year: "2026",
    },
    {
      title: "AURA — AI Behavioral Firewall",
      category: "AI / ML",
      featured: false,
      image: "",
      description:
        "Final Year Project. Built the Streamlit dashboard for real-time threat monitoring on top of ensemble ML (Random Forest, Isolation Forest, LSTM) and a FastAPI backend.",
      tags: ["Python", "Streamlit", "FastAPI", "Machine Learning"],
      live: "",
      code: "",
      year: "2026",
    },
    {
      title: "YT Complete Backend",
      category: "Backend",
      featured: false,
      image: "",
      description:
        "Video-platform style REST API with MongoDB integration — practiced API design, error handling and module structure.",
      tags: ["Node.js", "Express.js", "MongoDB", "REST API"],
      live: "",
      code: "https://github.com/AhmedShaikh86",
      year: "2026",
    },
  ],

  // -------------------------------------------------------------- EXPERIENCE
  experience: [
    {
      role: "SEO Executive Intern",
      company: "OviTech",
      period: "Sep 2025",
      points: [
        "Implemented off-page SEO strategies using keyword research and analytics tracking to improve search rankings and organic visibility.",
        "Monitored performance metrics across multiple web projects to optimise digital presence.",
      ],
    },
    {
      role: "Project Coordinator",
      company: "OviTech",
      period: "Apr 2024 – Sep 2024",
      points: [
        "Analysed technical requirements across React.js, Node.js and WordPress/PHP projects to prepare accurate bids and estimates.",
        "Bridged clients and development teams; managed timelines with structured workflows for consistent, high-quality delivery.",
      ],
    },
    {
      role: "Front-End Developer Intern",
      company: "BSY Enterprise",
      period: "May 2022 – Jul 2022",
      points: [
        "Developed responsive, user-friendly interfaces with HTML, CSS, Tailwind CSS and JavaScript using Git-based workflows.",
        "Translated design mockups into functional code with senior developers and integrated React.js components.",
      ],
    },
  ],

  // --------------------------------------------------------------- EDUCATION
  education: [
    {
      degree: "BS in Computer Science",
      school: "Dawood University of Engineering & Technology",
      period: "2022 – 2026",
      note: "Degree awaiting",
    },
    {
      degree: "Diploma in Software Engineering",
      school: "Aligarh Institute of Technology",
      period: "2019 – 2022",
      note: "",
    },
    {
      degree: "Matriculation",
      school: "St. Patrick's High School",
      period: "2017 – 2019",
      note: "",
    },
  ],

  // ------------------------------------------------------------------ THEME
  // Default theme: "wine" | "midnight" | "emerald" | "ivory"
  defaultTheme: "wine",
};
