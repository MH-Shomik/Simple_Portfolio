# Product Requirements Document (PRD)
## Developer Portfolio Website — Simple, Animated, Hirer-Focused

**Version:** 1.0  
**Date:** March 9, 2026  
**Status:** Draft

---

## 1. Overview

A single-page personal portfolio website designed to impress technical recruiters and hiring managers. The site communicates skills, personality, and real project work — instantly and memorably. It is built with vanilla HTML, CSS, and JavaScript (no frameworks required), prioritizes performance, and uses tasteful animations over visual noise.

---

## 2. Goals & Success Metrics

| Goal | Metric |
|------|--------|
| First impression in < 3 seconds | Hero section renders fully above the fold |
| Recruiter can identify skills in < 10 seconds | Skills section visible on first scroll |
| At least 1 contact attempt per unique visit | Contact section CTA click-through rate |
| Load time | < 1.5s on a 4G connection |
| Mobile friendly | 100% responsive across 320px – 1920px |
| Unique/memorable | Stands out from standard Bootstrap portfolio templates |

---

## 3. Target Audience

**Primary:** Technical recruiters and hiring managers at software companies  
**Secondary:** Freelance clients, open-source collaborators, other developers  

### What Hirers Actually Look For (Research-Backed)
1. **Proof of skills** — not just a list; they want to SEE the tech in use
2. **Clean, readable code** — source code should be viewable (GitHub link)
3. **Real project descriptions** — problem → solution → tech stack → result
4. **Easy contact** — one-click email, LinkedIn, GitHub always visible
5. **Fast load** — slow site signals poor engineering judgment
6. **Personality** — something that makes you human, not a resume printout
7. **Recency** — last updated date or current year visible

---

## 4. Unique Differentiators (What Makes This Stand Out)

| Feature | Description |
|---------|-------------|
| **Typing cursor hero** | Name/role typed out with cursor blink effect — developer aesthetic |
| **Custom animated cursor** | A glowing dot follows the mouse, reacts on hover |
| **Scroll-reveal animations** | Sections fade/slide in as user scrolls (IntersectionObserver API) |
| **Animated skill bars** | Progress bars animate fill % when scrolled into view |
| **Tilt-card projects** | Project cards tilt in 3D on mouse hover (CSS perspective) |
| **Theme toggle** | Light / Dark mode switch with smooth transition |
| **Floating social sidebar** | Social links pinned to the right side, always visible |
| **Active nav indicator** | Nav link highlight updates as user scrolls through sections |
| **Particle background (subtle)** | Lightweight CSS-only floating particle dots in hero — no canvas |

---

## 5. Site Architecture — Single Page

```
[Navbar]
    ↓
[Hero / Introduction]
    ↓
[About Me]
    ↓
[Skills]
    ↓
[Projects]
    ↓
[Experience / Timeline]  ← unique section
    ↓
[Contact]
    ↓
[Footer]
```

---

## 6. Section-by-Section Requirements

---

### 6.1 Navbar

**Purpose:** Navigation + first identity signal

| Requirement | Detail |
|-------------|--------|
| Sticky on scroll | Remains at top; gains backdrop-blur + shadow on scroll |
| Logo | First name initial in a styled badge (e.g., a monogram) |
| Nav links | About · Skills · Projects · Experience · Contact |
| Active state | Underline animation slides under active section link |
| Mobile | Hamburger menu; nav slides in from right with smooth transition |
| Dark/Light toggle | Sun/Moon icon in navbar |
| CTA button | "Hire Me" button → jumps to Contact section |

---

### 6.2 Hero Section

**Purpose:** Immediate impact — who you are and what you do in 3 seconds

| Requirement | Detail |
|-------------|--------|
| Headline | `Hi, I'm [Name]` — large, bold |
| Subheadline | Typewriter effect cycling through roles: `"Frontend Developer"` → `"UI/UX Enthusiast"` → `"Open Source Contributor"` |
| Description | 1–2 line punchy bio |
| CTAs | `View My Work` (scroll to Projects) + `Download CV` (PDF link) |
| Visual element | Developer SVG illustration OR stylized avatar/photo |
| Background | Subtle animated CSS gradient mesh or floating particle dots |
| Entry animation | Fade-up on load with staggered delay per element |

---

### 6.3 About Me Section

**Purpose:** Human connection — hirers want to know the person behind the code

| Requirement | Detail |
|-------------|--------|
| Photo | Profile photo (rounded, with subtle glow border) |
| Bio text | 2–3 short paragraphs: who you are, your dev journey, what drives you |
| Quick stats | Animated counters: `X+ Projects` · `Y+ Technologies` · `Z Years Experience` |
| Fun fact | One memorable personal detail (creates conversation in interview) |
| Entry animation | Slide-in from left (photo) + right (text) on scroll |

---

### 6.4 Skills Section

**Purpose:** Rapid scanning — recruiter must identify your stack in seconds

**Two sub-views:**

#### 6.4.1 Technology Icons Grid
- Grid of circular tech icons with labels (HTML, CSS, JS, React, Node, Python, Git, etc.)
- Icons use official SVG logos
- Hover: icon scales up + tooltip with proficiency label
- Entry animation: icons stagger-pop in on scroll

#### 6.4.2 Skill Category Cards
| Category | Examples |
|----------|----------|
| Frontend | HTML5, CSS3, JavaScript, React, TypeScript, Tailwind |
| Backend | Node.js, Express, Python, REST APIs |
| Database | MongoDB, PostgreSQL, Firebase |
| Tools & DevOps | Git, GitHub, Docker, VS Code, Figma |

- Animated fill bars per skill (e.g., JavaScript: 90%)
- Bars animate from 0% → actual value when scrolled into view

---

### 6.5 Projects Section

**Purpose:** Proof of skill — the most important section for hirers

| Requirement | Detail |
|-------------|--------|
| Card grid | 3 featured projects, 2–3 column responsive grid |
| Card content | Screenshot/mockup, project title, short description, tech tags, GitHub icon, Live Demo icon |
| Hover effect | Card lifts with 3D tilt (CSS transform perspective), overlay appears |
| Tech tags | Colored pill badges (e.g., React, Node.js) |
| Expandable | "View All Projects" button shows 3 additional cards |
| Entry animation | Cards fade-up staggered on scroll |

**Each project card must include:**
- Problem statement (1 sentence)
- Solution / what you built (1–2 sentences)
- Tech stack (tags)
- Links: GitHub repo + Live demo

---

### 6.6 Experience / Timeline Section

**Purpose:** Shows progression and professional credibility (unique vs typical portfolios)

| Requirement | Detail |
|-------------|--------|
| Layout | Vertical timeline, alternating left/right on desktop, single column on mobile |
| Timeline items | Job / internship / education entries |
| Each entry | Company/School logo, Title, Date range, 2–3 bullet point achievements |
| Entry animation | Items slide in from alternating sides on scroll |
| Visual | Glowing dot + connecting line for each timeline node |

---

### 6.7 Contact Section

**Purpose:** Make it effortless to reach out

| Requirement | Detail |
|-------------|--------|
| Section headline | `"Let's Build Something Together"` |
| Contact form | Name + Email + Subject + Message + Submit |
| Form service | Formspree (free, no backend required) |
| Form validation | Client-side required fields + email format check |
| Submit feedback | Success/error message shown inline |
| Direct email link | `mailto:` link for quick one-click email |
| Social links | GitHub · LinkedIn · Twitter/X · Email icons |
| Entry animation | Fade-up on scroll |

---

### 6.8 Footer

| Requirement | Detail |
|-------------|--------|
| Copyright | `© 2026 [Name]. All rights reserved.` |
| Back to top | Smooth scroll to top button (fixed bottom-right, appears after 300px scroll) |
| Short tagline | e.g., `"Designed & Built with ♥ by [Name]"` |

---

## 7. Shared / Global Components

---

### 7.1 Floating Social Sidebar (Desktop)
- Fixed on the right side, vertically centered
- Icons: GitHub, LinkedIn, Twitter/X, Email
- Hover: icon slides left slightly + tooltip label appears
- Hidden on mobile (integrated into footer instead)

---

### 7.2 Custom Cursor
- Replaces default cursor with a small glowing dot
- On hover over links/buttons: dot expands into a ring
- Implemented with JS + CSS (no library)
- Disabled on touch devices

---

### 7.3 Scroll Progress Bar
- Thin colored bar at the very top of the page
- Fills from 0% → 100% as user scrolls to bottom
- Color matches primary brand color

---

### 7.4 Dark / Light Mode
- Default: Dark mode (developer aesthetic)
- Toggle persists in `localStorage`
- Transition: 0.3s ease on all color properties
- Color tokens defined as CSS variables for both themes

---

### 7.5 Page Loader (Optional)
- Brief spinner/logo reveal on first load (< 800ms)
- Prevents layout flash on cold load

---

## 8. Design Tokens & Visual Language

### Color Palette — Dark Mode (Default)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0a0a0f` | Page background |
| `--color-surface` | `#111118` | Card / section backgrounds |
| `--color-primary` | `#7c3aed` | Accent, buttons, highlights (violet) |
| `--color-primary-glow` | `rgba(124,58,237,0.25)` | Glow shadows |
| `--color-secondary` | `#06b6d4` | Skill tags, links (cyan) |
| `--color-text` | `#e2e8f0` | Body text |
| `--color-text-muted` | `#64748b` | Secondary text |
| `--color-border` | `rgba(255,255,255,0.08)` | Card borders |

### Color Palette — Light Mode

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#fafafa` | Page background |
| `--color-surface` | `#ffffff` | Card / section backgrounds |
| `--color-primary` | `#6d28d9` | Accent (slightly darker violet) |
| `--color-secondary` | `#0891b2` | Skill tags, links |
| `--color-text` | `#0f172a` | Body text |
| `--color-text-muted` | `#475569` | Secondary text |

### Typography
| Role | Font | Weight | Size |
|------|------|--------|------|
| Display (name) | Inter / Space Grotesk | 800 | clamp(2.5rem, 6vw, 5rem) |
| Section headings | Inter | 700 | 2rem |
| Body | Inter | 400 | 1rem / 1.125rem |
| Code snippets | JetBrains Mono | 400 | 0.875rem |

### Spacing & Radius
- Base unit: `8px`
- Border radius: `12px` (cards), `9999px` (pills/badges), `50%` (icons)
- Section vertical padding: `5rem` desktop / `3rem` mobile

### Animations
| Type | Duration | Easing |
|------|----------|--------|
| Scroll-reveal fade-up | 600ms | `ease-out` |
| Stagger delay between items | 100ms per item | — |
| Hover transitions | 200–300ms | `ease` |
| Typewriter | 80ms per character | — |
| Skill bar fill | 1200ms | `ease-in-out` |
| Theme switch | 300ms | `ease` |

---

## 9. Technical Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Markup | HTML5 (semantic) | Accessibility + SEO |
| Styles | CSS3 + CSS Variables | No build step, full control |
| Behaviour | Vanilla JavaScript (ES6+) | No framework overhead, shows JS skill |
| Icons | SVG (inline or img) | Sharp at any size, no icon font flash |
| Fonts | Google Fonts (Inter + JetBrains Mono) | Free, fast CDN |
| Form | Formspree | Free, serverless form submission |
| Hosting | GitHub Pages / Netlify / Vercel | Free tier, custom domain support |
| Version control | Git + GitHub | Public repo = additional portfolio signal |

---

## 10. Folder Structure

```
Simple_Portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   ├── styles.css         # Main styles + CSS variables
│   │   ├── animations.css     # All keyframes + transitions
│   │   └── responsive.css     # Media queries
│   ├── js/
│   │   ├── app.js             # Init, scroll events, theme toggle
│   │   ├── typewriter.js      # Typewriter effect
│   │   ├── cursor.js          # Custom cursor
│   │   └── animations.js      # IntersectionObserver scroll reveals
│   ├── images/
│   │   ├── profile.jpg        # Your photo
│   │   └── projects/          # Project screenshots
│   └── icons/
│       └── tech/              # Technology SVG icons
├── resume.pdf                 # Downloadable CV
└── PRD.md                     # This document
```

---

## 11. Performance Requirements

| Requirement | Target |
|-------------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 90 |
| First Contentful Paint | < 1.0s |
| Time to Interactive | < 2.0s |
| Total page weight | < 800KB (uncompressed) |

**Techniques:**
- Lazy-load images (`loading="lazy"`)
- Minify CSS/JS before deploy
- Use WebP images for project screenshots
- Preload hero fonts
- Host on CDN (Netlify/Vercel = global CDN by default)

---

## 12. Accessibility Requirements

- All images have `alt` text
- Color contrast ratio ≥ 4.5:1 for normal text
- All interactive elements reachable by keyboard (`Tab` key)
- Focus indicators visible on all focusable elements
- ARIA labels on icon-only buttons
- `prefers-reduced-motion` media query: disable animations for users who prefer it
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

---

## 13. SEO Requirements

- `<title>`: `[Your Name] — Frontend Developer | Portfolio`
- `<meta name="description">`: 150-char summary
- Open Graph tags for social sharing preview
- `<link rel="canonical">` pointing to production URL
- Descriptive section IDs (`#about`, `#skills`, `#projects`, etc.)
- `sitemap.xml` (single URL, good practice)

---

## 14. Responsive Breakpoints

| Breakpoint | Target Device |
|------------|---------------|
| `≥ 1280px` | Desktop / large laptop |
| `1024px – 1279px` | Small laptop / tablet landscape |
| `768px – 1023px` | Tablet portrait |
| `480px – 767px` | Large phone |
| `< 480px` | Small phone (iPhone SE, etc.) |

---

## 15. Content Placeholders (To Be Filled by Owner)

The following content items are needed before the site can go live:

| Item | Notes |
|------|-------|
| Full name | Used in hero, navbar, footer |
| Professional title(s) | 2–3 rotating roles for typewriter |
| Bio paragraphs | 2–3 short paragraphs about yourself |
| Profile photo | 400×400px minimum, square crop |
| Skills list | With approximate proficiency % per skill |
| 3–6 projects | Title, description, screenshot, tech stack, links |
| Work/education history | For timeline section |
| Social media links | GitHub, LinkedIn, Twitter/X |
| Contact email | For form endpoint + mailto link |
| Resume PDF | For download button |

---

## 16. Out of Scope (v1.0)

- Backend / server (no Node.js server required)
- Blog / CMS integration
- Authentication
- Analytics dashboard
- Multi-language support
- Database of any kind

These may be added in v2.0.

---

## 17. Milestones

| Phase | Deliverable | Details |
|-------|-------------|---------|
| **Phase 1** | Project setup + base styles | Folder structure, CSS variables, typography, dark mode |
| **Phase 2** | Navbar + Hero | Responsive nav, typewriter, hero animation |
| **Phase 3** | About + Skills | Photo, stats counters, icon grid, skill bars |
| **Phase 4** | Projects + Experience | Cards with tilt effect, timeline |
| **Phase 5** | Contact + Footer | Form, social links, footer |
| **Phase 6** | Global polish | Custom cursor, scroll progress, particles, scroll-reveal on all sections |
| **Phase 7** | Responsive + a11y | All breakpoints, keyboard nav, ARIA |
| **Phase 8** | Performance + deploy | Minify, optimize images, deploy to Netlify/GitHub Pages |

---

## 18. Reference Inspiration

| Site | What to Borrow |
|------|----------------|
| [brittanychiang.com](https://brittanychiang.com) | Dark theme, sidebar nav, section layout |
| [jacekjeznach.com](https://jacekjeznach.com) | Smooth animations, unique hero |
| [findmatthew.com](https://findmatthew.com) | Cursor effect, micro-interactions |
| awwwards.com/websites/portfolio | Current top-rated portfolio designs 2026 |

---

*Document authored based on web research of recruiter expectations, Awwwards portfolio trends (2026), and freeCodeCamp portfolio best practices.*
