<div align="center">

# 🚀 Mehedi Hassan Shomik — Developer Portfolio

**Turning data into insight, ideas into products.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-3dd9d0?style=for-the-badge&logo=vercel&logoColor=white)](https://mh-shomik.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-MH--Shomik-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MH-Shomik)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mehedi-hassan-shomik-08a3a7367)

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer&logoColor=white)

</div>

---

## ✨ Overview

A blazing-fast, single-page personal portfolio built to impress recruiters and collaborators. Upgraded with an interactive **Local CMS Admin Panel**, premium glassmorphism aesthetics, advanced motion stagger reveals, and a fully client-side AI chatbot trained on resume data using **TF-IDF + Cosine Similarity** (no API key needed).

---

## 🔥 New Features: Admin CMS Panel
Manage your entire portfolio without touching a line of code!
- Accessed by navigating to `/admin`
- **Secured** behind Environment Variable authentication (`VITE_ADMIN_PASSWORD`).
- Update personal information, tagging lines, CVs, and hero profile photos.
- **Dynamic Projects & Skills Manager**: Add, edit, remove, and restyle your tech stack and projects directly locally.
- Instantly syncs across widgets using an intelligent **Global Data Context + LocalStorage** fallback ecosystem.

---

## 🤖 AI Chatbot — 100% Client-Side ML

> No API key · No backend · No cost · Runs entirely in the browser

The portfolio ships with a custom ML-powered chat assistant trained on resume data:

| Component | Details |
|---|---|
| **Algorithm** | TF-IDF vectorization + Cosine Similarity |
| **Training data** | 25 intent classes, ~200 patterns from real resume |
| **Inference** | Sub-second, fully offline |
| **Topics** | Skills, projects, education, experience, contact, achievements |

```
User: "What are his machine learning skills?"
Bot:  "Mehedi is an ML & Data Science enthusiast! 🤖
       scikit-learn (76%), pandas (82%), NumPy (80%)…"
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite 5 |
| **Routing** | React Router DOM v6 |
| **Styling** | Tailwind CSS 3.4 + Custom Tokens |
| **Animation** | Framer Motion 11 |
| **Icons** | react-icons 5, Devicon CDN |
| **AI / ML** | Custom TF-IDF engine (vanilla JS, zero dependencies) |

---

## 🎨 Design System

- **Background:** Deep navy-black `#070c16` paired with teal & orange aura layers.
- **Accent:** Electric Teal `#22f0cb`
- **Typography:** Sora (body) · Space Grotesk (display) · JetBrains Mono (labels/code)
- **Motion:** Spring-based page transitions, stagger reveals, lazy image loading.
- **Details:** Glassmorphism CMS panels, custom animated cursor, scroll progress bar, floating interactive UI components.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/MH-Shomik/Simple_Portfolio.git
cd Simple_Portfolio

# Install dependencies
npm install
```

### Important: Environment Variables
Before running the app, create a `.env` file at the root level and add your securely-chosen Admin password:
```env
VITE_ADMIN_PASSWORD=your_super_secret_password
```

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (Your Portfolio). 
Open [http://localhost:5173/admin](http://localhost:5173/admin) (Admin panel).

### Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # preview production build locally
```

Ensure you configure the `VITE_ADMIN_PASSWORD` securely in the dashboard settings of your hosting platform (like Vercel, Netlify).

---

<div align="center">

Made with ❤️ by **Mehedi Hassan Shomik**

*Computer Science & Engineering · United International University · Top 15% of batch*
</div>
