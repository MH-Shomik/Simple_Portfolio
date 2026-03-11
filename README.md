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

A blazing-fast, single-page personal portfolio built to impress recruiters and collaborators. Every pixel is intentional — dark editorial aesthetic, smooth Framer Motion animations, and a fully client-side AI chatbot trained on resume data using **TF-IDF + Cosine Similarity** (no API key needed).

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

**How it works:**
1. At build time, all training patterns are tokenized and TF-IDF vectors are computed per intent
2. On user input, the query is vectorized and cosine similarity is scored against every intent vector
3. The best-matching intent (above 0.10 confidence threshold) returns a curated answer

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite 5 |
| **Styling** | Tailwind CSS 3.4 + CSS custom properties |
| **Animation** | Framer Motion 11 |
| **Icons** | react-icons 5, Devicon CDN |
| **AI / ML** | Custom TF-IDF engine (vanilla JS, zero dependencies) |
| **Forms** | Formspree |
| **Fonts** | Space Grotesk · Inter · JetBrains Mono |

---

## 🎨 Design System

- **Background:** Deep navy-black `#06080f` — extracted from profile photo
- **Accent:** Teal-cyan `#3dd9d0`
- **Typography:** Space Grotesk (display) · Inter (body) · JetBrains Mono (labels/code)
- **Motion:** Spring-based page transitions, stagger reveals, scroll-triggered animations
- **Details:** Custom cursor, scroll progress bar, noise texture overlay, floating social sidebar

---

## 📄 Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen photo background, typewriter role animation, stats, CTAs |
| **Chronicle** | Vertical timeline — education, experience, certifications & achievements |
| **Arsenal** | Tech stack icon grid grouped by category using Devicon |
| **Works** | Accordion-style numbered project showcase with live links |
| **Connect** | Contact details + Formspree-powered message form |
| **Footer** | 3-column editorial layout |
| **AI Chatbot** | Floating chat widget (bottom-right) — ask anything about Mehedi |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx            # Full-screen landing section
│   ├── Chronicle.jsx       # Timeline section
│   ├── Arsenal.jsx         # Tech stack grid
│   ├── Works.jsx           # Projects accordion
│   ├── Connect.jsx         # Contact section
│   ├── ChatBot.jsx         # AI chatbot UI
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CustomCursor.jsx
│   └── ScrollProgress.jsx
├── data/
│   ├── resumeData.js       # Single source of truth for all content
│   └── chatbotData.js      # ML training intents (25 classes)
└── utils/
    └── chatbotEngine.js    # TF-IDF + cosine similarity engine
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/MH-Shomik/Simple_Portfolio.git
cd Simple_Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # preview production build locally
```

Deploy the `dist/` folder to **Netlify**, **Vercel**, or **GitHub Pages**.

> **Note:** Replace `YOUR_FORM_ID` in `src/components/Connect.jsx` with your actual [Formspree](https://formspree.io) endpoint before deploying.

---

## 🧩 Customization

All personal content lives in one file — **`src/data/resumeData.js`**. Update it and everything (hero, timeline, projects, skills, contact) rebuilds automatically.

To retrain the chatbot with new info, add or edit intents in **`src/data/chatbotData.js`**.

---

## 📬 Contact

| | |
|---|---|
| **Email** | mh70357@gmail.com |
| **LinkedIn** | [mehedi-hassan-shomik](https://www.linkedin.com/in/mehedi-hassan-shomik-08a3a7367) |
| **GitHub** | [MH-Shomik](https://github.com/MH-Shomik) |
| **Location** | Dhaka, Bangladesh |

---

<div align="center">

Made with ❤️ by **Mehedi Hassan Shomik**

*Computer Science & Engineering · United International University · Top 15% of batch*

</div>
