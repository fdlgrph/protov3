export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  { icon: "Layers", title: "Brand Identity", copy: "Logo systems, visual language and guidelines built to hold up across every touchpoint." },
  { icon: "Sparkles", title: "Content Creation", copy: "Scroll-stopping short-form and campaign content, shaped around platform-native storytelling." },
  { icon: "Camera", title: "Photography", copy: "Editorial, product and event photography with intentional light, colour and composition." },
  { icon: "Video", title: "Videography", copy: "Wedding films, brand videos and social edits — shot, graded and cut in-house." },
  { icon: "Plane", title: "Drone Footage", copy: "Aerial coverage for events, venues and real estate, licensed and insured." },
  { icon: "Palette", title: "Graphic Design", copy: "Print, digital and motion graphics that stay consistent with brand systems." },
  { icon: "Globe", title: "Website Development", copy: "Fast, accessible, production-grade websites — from landing pages to full platforms." },
  { icon: "Share2", title: "Social Media Management", copy: "Content calendars, growth strategy and community management that compounds." },
  { icon: "Bot", title: "AI Automation", copy: "Bots and internal tools that remove repetitive work from creative operations." },
] as const;

export const PORTFOLIO = [
  { title: "Visivine Creative Hub", cat: "Web / Branding", desc: "Full brand site for a wedding videography & content studio — video hero, filterable portfolio, booking flow.", tech: "Next.js · Framer Motion · Tailwind" },
  { title: "ReminderBot Donation Page", cat: "Web / Product", desc: "Dynamic QRIS donation flow for an open-source Telegram bot, built on the EMVCo/QRIS TLV spec.", tech: "Node.js · QRIS · Glassmorphism UI" },
  { title: "Info Event Soloraya", cat: "Web / Platform", desc: "Public event listing site with a password-protected admin CMS and dual light/dark theming.", tech: "HTML · Tailwind · jsonbin.io" },
  { title: "Difa Store", cat: "Web / Commerce", desc: "Guest-checkout storefront shipped in two stacks — vanilla SPA and a Next.js App Router build.", tech: "Next.js · QRIS · Bank Transfer" },
  { title: "Concert Ticketing Site", cat: "Web / Events", desc: "Dark navy ticketing experience with a ticket-stub card system and interactive seat/tier selection.", tech: "JavaScript · Tailwind CSS" },
  { title: "FDHLBOT WhatsApp Suite", cat: "Automation", desc: "Multi-user WhatsApp bot with downloaders, reminders and scheduled jobs, deployed on Pterodactyl.", tech: "Baileys · node-cron" },
] as const;

export const CATS = ["All", ...Array.from(new Set(PORTFOLIO.map((p) => p.cat)))];

export const SKILL_GROUPS = [
  {
    group: "Frontend",
    items: [
      { name: "Next.js", level: 92 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 94 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    group: "Design",
    items: [
      { name: "Adobe Photoshop", level: 88 },
      { name: "Illustrator", level: 82 },
      { name: "Lightroom", level: 90 },
      { name: "Premiere Pro", level: 86 },
      { name: "After Effects", level: 78 },
    ],
  },
  {
    group: "Production",
    items: [
      { name: "Photography", level: 88 },
      { name: "Videography", level: 90 },
      { name: "Drone Operation", level: 75 },
      { name: "Social Media Strategy", level: 84 },
      { name: "Brand Strategy", level: 80 },
    ],
  },
] as const;

export const EXPERIENCE = [
  { year: "2024 — Now", role: "Founder & Creative Director", org: "Visivine Creative Hub", copy: "Leading a wedding videography and brand content studio across the Klaten–Jogja–Solo region." },
  { year: "2023 — Now", role: "Independent Developer", org: "fdhldesign", copy: "Building bots, storefronts and web platforms for local businesses and open-source communities." },
  { year: "2022 — 2023", role: "Content & Social Media Specialist", org: "Freelance", copy: "Ran content calendars and growth strategy for regional creative and F&B brands." },
  { year: "2021 — 2022", role: "Photographer & Videographer", org: "Freelance", copy: "Started shooting events and portraits, building the visual foundation for FDHLGRPHY." },
] as const;

export const STATS = [
  { label: "Projects Delivered", value: 60, suffix: "+" },
  { label: "Happy Clients", value: 40, suffix: "+" },
  { label: "Hours of Content Produced", value: 1200, suffix: "+" },
  { label: "Years of Experience", value: 4, suffix: "+" },
] as const;

export const TESTIMONIALS = [
  { name: "Ratna S.", role: "Bride, Visivine Client", quote: "Our wedding film felt like it was directed, not just recorded. Every detail we cared about made the final cut." },
  { name: "Bima W.", role: "F&B Brand Owner", quote: "Fadhil rebuilt our whole online presence — content, visuals and the website — in a way that finally matched the quality of our food." },
  { name: "Dewi A.", role: "Event Organizer", quote: "The drone coverage and same-week edit turnaround made our launch event look far bigger than it was." },
] as const;

export const FAQS = [
  { q: "What areas do you cover?", a: "I'm based in Klaten and primarily serve the Klaten–Jogja–Solo region, with travel available for larger productions." },
  { q: "Do you work on both brand and personal projects?", a: "Yes — from full brand systems and web platforms to weddings, portraits and individual content packages." },
  { q: "Can you handle a project end-to-end, from shoot to website?", a: "That's the core of how I work: strategy, production and development under one roof, so nothing gets lost in handoffs." },
  { q: "How do we start a project?", a: "Reach out through the contact section — a short call or WhatsApp chat is usually enough to scope timeline and budget." },
] as const;
