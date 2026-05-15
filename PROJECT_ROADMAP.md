# PROJECT ROADMAP — Nopparat Portfolio Resume Website

> **Single source of truth** for AI and developer reference.  
> Read this file before working on any part of the project.

---

## 1. Project Overview & Goals

A personal **Portfolio Resume Website** for **Nopparat Suwanna**, a 3rd-year Computer Science student at Sripatum University and Full Stack Developer.

**Primary goals:**
- Present professional identity, skills, and projects to potential employers
- Serve as a living resume that is easy to update
- Demonstrate frontend development skill through the site itself

**Target audience:** Recruiters, hiring managers, and collaborators

---

## 2. Scope

| In Scope | Out of Scope |
|---|---|
| Homepage (Landing Page) with all resume sections | Blog / MDX post system (was in starter, removed from homepage) |
| About Me page | Authentication / admin panel |
| Projects page (placeholder → real projects later) | CMS integration |
| Resume page (downloadable PDF + timeline) | E-commerce, payments |
| Contact page | |
| Responsive design (desktop + mobile) | |

---

## 3. Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v3 |
| **UI Components** | shadcn/ui (base-ui), custom components |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans + Geist Mono (local) |
| **Image handling** | next/image |
| **Hosting** | Vercel |
| **Package manager** | npm |

---

## 4. System Architecture

This is a **static / server-rendered frontend-only** site. No backend or database required.

```
Browser
  └── Next.js App Router (SSR / SSG)
        ├── layout.tsx        → global shell (Navbar + body wrapper)
        ├── page.tsx          → Home / Landing Page
        ├── about/page.tsx    → About Me
        ├── projects/page.tsx → Projects
        ├── resume/page.tsx   → Resume (timeline + PDF download)
        └── contact/page.tsx  → Contact form (static or mailto)
```

All data (skills, education, projects, etc.) is **hardcoded as constants** inside component files.  
No API calls, no database, no auth.

---

## 5. Key Features & Modules

### 5.1 Navbar (`resume-navbar.tsx`)
- Fixed top bar, frosted glass effect (`backdrop-blur-md`)
- Logo: `NopparatCSI`
- Nav links: **About Me · Projects · Resume · Contact**
- **Hire Me** CTA button (solid dark pill) → links to `/contact`
- Mobile: scrollable horizontal link row below main bar

### 5.2 Hero Section (`hero-motion.tsx`)
- Full name, role badge ("Full Stack Developer")
- Professional summary paragraph
- Contact info row: Email, Phone, Location, GitHub
- CTA buttons: **View Projects** + **Contact Me**
- Profile photo (`/public/profile.png`) — `object-cover object-top`
- **"Open to Work"** floating badge pinned to bottom-left of photo (dark pill + green ping dot)
- Framer Motion entrance animations (staggered fade-up)

### 5.3 Technical Skills (`skills-section.tsx`)
Four category cards with badge chips:
- **Frontend:** React, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS
- **Backend:** Node.js, Express.js, .NET
- **Database:** MySQL, MongoDB, Supabase
- **Tools & Others:** Git, GitHub, Docker, Vercel, REST API, JWT Authentication, Stripe

### 5.4 Projects (`projects-section.tsx`)
- 3 placeholder cards with "Coming Soon" ribbon
- Each card: icon, title, description
- Link to `/projects` page for full list
- **To be filled** with real projects later

### 5.5 Education (`education-section.tsx`)
- Sripatum University — Computer Science, Bachelor's Degree
- 3rd Year Student
- GPA: 3.54

### 5.6 Certificates (`certificates-section.tsx`)
- Empty state placeholder (dashed border card)
- Ready to accept real certificate cards in the future

### 5.7 Soft Skills (`soft-skills-section.tsx`)
Five cards with icon + description:
- Problem-solving · Communication · Teamwork · Fast Learner · AI Skills

---

## 6. Pages (Current Status)

| Route | File | Status |
|---|---|---|
| `/` | `app/page.tsx` | ✅ Done — full landing page |
| `/about` | `app/about/page.tsx` | 🔲 Placeholder |
| `/projects` | `app/projects/page.tsx` | 🔲 Placeholder |
| `/resume` | `app/resume/page.tsx` | 🔲 Placeholder |
| `/contact` | `app/contact/page.tsx` | 🔲 Placeholder |
| `/blog/*` | `app/blog/` | ⏸ Exists from starter, not linked in nav |
| `/experience` | `app/experience/` | ⏸ Exists from starter, not in use |

---

## 7. Folder Structure

```
d:\webport\
├── public/
│   └── profile.png              ← Profile photo (must exist)
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← Root layout (Navbar, fonts)
│   │   ├── globals.css          ← Tailwind base + CSS variables (light/dark tokens)
│   │   ├── page.tsx             ← Homepage (imports all sections)
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── resume/page.tsx
│   │   ├── contact/page.tsx
│   │   └── fonts/               ← Geist local font files
│   ├── components/
│   │   ├── resume-navbar.tsx    ← Global navigation bar
│   │   ├── hero-motion.tsx      ← Hero section (photo + intro)
│   │   ├── skills-section.tsx   ← Technical skills grid
│   │   ├── projects-section.tsx ← Projects placeholder cards
│   │   ├── education-section.tsx
│   │   ├── certificates-section.tsx
│   │   ├── soft-skills-section.tsx
│   │   └── ui/                  ← shadcn/ui primitives (button, etc.)
│   ├── lib/
│   │   ├── utils.ts             ← cn() helper
│   │   └── content.ts           ← MDX blog helpers (not used on homepage)
│   └── mdx-components.tsx       ← MDX component overrides
├── content/posts/               ← MDX blog posts (starter, not linked in nav)
├── tailwind.config.ts
├── next.config.mjs
└── PROJECT_ROADMAP.md           ← This file
```

---

## 8. Development Phases / Milestones

### Phase 1 — Landing Page ✅ (Current)
- [x] Navbar with correct links
- [x] Hero section with photo + "Open to Work" badge
- [x] Technical Skills section
- [x] Projects placeholder section
- [x] Education section
- [x] Certificates placeholder
- [x] Soft Skills section

### Phase 2 — Inner Pages 🔲
- [ ] `/about` — extended bio, photo, background story
- [ ] `/projects` — real project cards with tech stack tags, links, screenshots
- [ ] `/resume` — work timeline, downloadable PDF button
- [ ] `/contact` — contact form (mailto or form service like Formspree/Resend)

### Phase 3 — Polish 🔲
- [ ] Dark mode toggle
- [ ] Active nav link highlight (usePathname)
- [ ] SEO metadata per page
- [ ] Open Graph image
- [ ] Mobile hamburger menu
- [ ] Performance audit (Lighthouse)

---

## 9. Rules & Notes for Development

1. **No backend** — all data lives as TypeScript constants inside component files.
2. **Profile image** must be placed at `public/profile.png` (Next.js serves it as `/profile.png`).
3. **Color tokens** — always use Tailwind CSS variable classes (`bg-card`, `text-muted-foreground`, `border-border`, etc.) to support both light and dark modes automatically. Avoid hardcoded hex colors except for special cases (e.g., `bg-zinc-900` for the dark badge).
4. **Animations** — use `framer-motion` with `whileInView + viewport={{ once: true }}` for scroll-triggered sections. Use `initial/animate` only on the Hero (loads immediately).
5. **Images** — always use `next/image` with `fill` + explicit container size. Never use `<img>` tags.
6. **Icons** — use `lucide-react`. Note: `Github` icon does not exist in this version; use `ExternalLink` or `Link2` instead.
7. **Section layout pattern** — each section is a standalone component in `src/components/`, imported into `page.tsx`. Keep sections self-contained.
8. **Max width** — all sections use `max-w-6xl mx-auto px-6 lg:px-12` for consistent alignment with the navbar.
9. **Navbar height** — fixed at `h-16` (4rem). The layout wrapper applies `pt-20` to prevent content from being hidden under it.
10. **Responsive** — design mobile-first. Desktop enhancements use `lg:` or `md:` prefixes.

---

## 10. Personal Info Reference

| Field | Value |
|---|---|
| Full Name | Nopparat Suwanna |
| Email | nopparat.suws@gmail.com |
| Phone | 064-417-7206 |
| Location | Bangkok, Thailand |
| GitHub | NopparatCSI (https://github.com/NopparatCSI) |
| University | Sripatum University |
| Major | Computer Science |
| Year | 3rd Year, Bachelor's Degree |
| GPA | 3.54 |
| Role | Full Stack Developer |
