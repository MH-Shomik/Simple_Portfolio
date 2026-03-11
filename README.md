# Mehedi Hassan Shomik — Portfolio

Personal portfolio website built with **React 18**, **Vite 5**, **Tailwind CSS 3**, and **Framer Motion 11**.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3.4 + CSS custom properties |
| Animation | Framer Motion 11 |
| Icons | react-icons 5, Devicon CDN |
| Forms | Formspree |
| Fonts | Space Grotesk · Inter · JetBrains Mono |

## Design

- **Color palette** extracted from profile photo — dark navy-black `#06080f` bg, teal-cyan `#3dd9d0` accent
- Full-screen hero with photo background and editorial bottom layout
- All-caps section labels with JetBrains Mono
- Custom cursor, scroll progress bar, noise texture overlay

## Sections

- **Hero** — full-screen photo background, name, typewriter roles, CTAs
- **Chronicle** — vertical timeline (education, experience, certifications, achievements) + bio
- **Arsenal** — tech stack grouped by category with Devicon icons
- **Works** — accordion-style numbered projects
- **Connect** — contact info + Formspree form
- **Footer** — 3-column editorial layout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deployment

```bash
npm run build
```

Output goes to `dist/`. Deploy anywhere that serves static files (Vercel, Netlify, GitHub Pages).

> **Note:** Replace `YOUR_FORM_ID` in `src/components/Connect.jsx` with your actual [Formspree](https://formspree.io) endpoint before deploying.
