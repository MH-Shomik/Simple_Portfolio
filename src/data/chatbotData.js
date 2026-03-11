/**
 * Chatbot Training Data — sourced entirely from Mehedi Hassan Shomik's resume
 * Format: { tag, patterns: string[], answers: string[] }
 *
 * The TF-IDF engine matches user queries to the best-fitting intent
 * and returns a random answer from that intent's answers array.
 */

export const chatbotIntents = [
  // ─── Greetings ────────────────────────────────────────────────────────────
  {
    tag: 'greeting',
    patterns: [
      'hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening',
      'howdy', 'whats up', 'greetings', 'hiya', 'sup', 'how are you',
      'nice to meet you', 'yo', 'hola', 'what is up',
    ],
    answers: [
      "Hi there! 👋 I'm Mehedi's AI assistant — trained entirely on his resume. Ask me about his skills, projects, education, experience, or how to contact him!",
      "Hello! 😊 Great to see you. I know everything about Mehedi Hassan Shomik. What would you like to know?",
      "Hey! I'm Mehedi's personal portfolio bot. Ask away — skills, projects, education, contact info, you name it!",
    ],
  },

  // ─── Farewell ─────────────────────────────────────────────────────────────
  {
    tag: 'farewell',
    patterns: [
      'bye', 'goodbye', 'see you', 'see ya', 'later', 'take care',
      'good night', 'farewell', 'cya', 'adios', 'exit', 'quit', 'close', 'peace',
    ],
    answers: [
      "Goodbye! 👋 Feel free to come back anytime if you have more questions about Mehedi.",
      "Thanks for stopping by! Hope the info was helpful. See you around! 😊",
      "Catch you later! Don't hesitate to reach out if you want to know more about Mehedi. ✌️",
    ],
  },

  // ─── Thanks ───────────────────────────────────────────────────────────────
  {
    tag: 'thanks',
    patterns: [
      'thank you', 'thanks', 'thank', 'appreciate it', 'awesome', 'great answer',
      'nice', 'cool', 'wonderful', 'perfect', 'helpful', 'good job', 'well done',
      'that helps', 'got it', 'understood', 'makes sense',
    ],
    answers: [
      "You're welcome! 😊 Anything else you'd like to know about Mehedi?",
      "Happy to help! Feel free to ask more questions.",
      "Glad I could help! Let me know if you need anything else. 🙌",
    ],
  },

  // ─── Identity / About ─────────────────────────────────────────────────────
  {
    tag: 'identity',
    patterns: [
      'who are you', 'who is mehedi', 'tell me about yourself', 'introduce yourself',
      'who is this', 'about mehedi', 'what do you do', 'who is mehedi hassan shomik',
      'tell me about mehedi', 'introduce mehedi', 'who is the developer',
      'about this person', 'describe mehedi', 'overview', 'summary', 'bio', 'profile',
      'background', 'about you', 'your bio', 'yourself',
    ],
    answers: [
      "Mehedi Hassan Shomik is a Computer Science & Engineering student at United International University (top 15% of batch), majoring in Data Science. He specialises in frontend development and has hands-on experience building backends and ML solutions.\n\nHis tagline: \"Turning data into insight, ideas into products.\" 💡\n\nFrom interactive 3D restaurant systems to student dropout predictors, he loves combining clean UI with intelligent backends. He also contributes to open-source and participates in coding competitions! 🚀",
    ],
  },

  // ─── Education ────────────────────────────────────────────────────────────
  {
    tag: 'education',
    patterns: [
      'education', 'university', 'degree', 'study', 'student', 'school',
      'college', 'academic', 'qualification', 'institution', 'uiu',
      'united international university', 'data science major', 'cse',
      'computer science', 'major', 'cgpa', 'gpa', 'batch', 'where did you study',
      'what are you studying', 'engineering degree', 'bachelor', 'bsc', 'b.eng',
      'graduating', 'graduation', 'semester', 'university ranking',
    ],
    answers: [
      "🎓 Education:\n\nB.Eng. in Computer Science and Engineering\nMajor: Data Science\nInstitution: United International University, Dhaka, Bangladesh\nPeriod: 2022 – Present\n\nStanding: Top 15% of his competitive CSE batch. 📚",
    ],
  },

  // ─── Skills (general) ─────────────────────────────────────────────────────
  {
    tag: 'skills',
    patterns: [
      'skills', 'technologies', 'tech stack', 'what can you do', 'abilities',
      'expertise', 'proficiency', 'competencies', 'toolset', 'what technologies',
      'tools', 'what do you know', 'technical skills', 'programming languages',
      'frameworks', 'libraries', 'all skills', 'list skills', 'skill set',
    ],
    answers: [
      "Mehedi's skill set spans four categories:\n\n🎨 Frontend: React (88%), HTML5 (92%), CSS3 (85%), JavaScript (86%), TypeScript (72%), Tailwind CSS (88%)\n\n⚙️ Backend & DB: Node.js (75%), PHP (78%), Python (85%), MySQL (82%), Firebase (76%), SQL (84%)\n\n🤖 Data & ML: Machine Learning (78%), scikit-learn (76%), pandas (82%), NumPy (80%), Statistics (78%), Flask (72%)\n\n🔧 Tools & Languages: Java (75%), C/C++ (72%), Git & GitHub (84%), Three.js (60%), Bootstrap (80%), Figma (60%)",
    ],
  },

  // ─── Frontend Skills ──────────────────────────────────────────────────────
  {
    tag: 'frontend',
    patterns: [
      'frontend', 'front end', 'react', 'html', 'css', 'javascript', 'typescript',
      'tailwind', 'tailwindcss', 'ui', 'user interface', 'web design', 'threejs',
      'three js', 'bootstrap', 'framer motion', 'responsive design',
      'jsx', 'components', 'reactjs', 'html5', 'css3', 'js skills', 'ts skills',
      'figma', 'ux', 'design',
    ],
    answers: [
      "Mehedi excels in frontend development! 🎨\n\n⚛️ React (88%) — hooks, JSX, component architecture\n🌐 HTML5 (92%) & CSS3 (85%)\n✨ JavaScript (86%) & TypeScript (72%)\n💨 Tailwind CSS (88%) & Bootstrap (80%)\n🎭 Three.js (60%) — 3D interactive web experiences\n🎨 Figma (60%) — UI/UX prototyping\n\nHe's passionate about building beautiful, responsive interfaces! 🚀",
    ],
  },

  // ─── Backend Skills ───────────────────────────────────────────────────────
  {
    tag: 'backend',
    patterns: [
      'backend', 'back end', 'server', 'nodejs', 'node js', 'php',
      'database', 'mysql', 'firebase', 'sql', 'api', 'rest', 'flask',
      'web server', 'python backend', 'server side', 'node', 'db',
    ],
    answers: [
      "Mehedi's backend skills:\n\n🟢 Node.js (75%) — server-side JavaScript\n🐘 PHP (78%) — used in production web apps\n🐍 Python (85%) — scripting, backends, ML APIs\n🗄️ MySQL (82%) & SQL (84%) — relational databases\n🔥 Firebase (76%) — real-time NoSQL database\n🌶️ Flask (72%) — Python web framework for ML APIs\n\nHe's built full-stack apps from scratch! 💪",
    ],
  },

  // ─── ML / Data Science Skills ─────────────────────────────────────────────
  {
    tag: 'ml_ai',
    patterns: [
      'machine learning', 'ml', 'ai', 'artificial intelligence', 'data science',
      'sklearn', 'scikit learn', 'scikit-learn', 'pandas', 'numpy', 'random forest',
      'classifier', 'model', 'prediction', 'deep learning', 'neural network',
      'statistics', 'data analysis', 'data scientist', 'nlp', 'training',
      'algorithm', 'regression', 'classification', 'data processing',
    ],
    answers: [
      "Mehedi is an ML & Data Science enthusiast! 🤖\n\n🌲 Machine Learning (78%) — classification, regression, model evaluation\n🔬 scikit-learn (76%) — end-to-end ML pipelines\n🐼 pandas (82%) — data wrangling & analysis\n🔢 NumPy (80%) — numerical computing\n📊 Statistics (78%) — the math behind the models\n🌶️ Flask (72%) — deploying ML models as REST APIs\n\nReal example: his Student Dropout Predictor uses a Random Forest Classifier to predict academic risk! 🎯",
    ],
  },

  // ─── Projects (overview) ──────────────────────────────────────────────────
  {
    tag: 'projects',
    patterns: [
      'projects', 'portfolio', 'work', 'what have you built', 'apps',
      'applications', 'websites', 'builds', 'what did you make',
      'show me your work', 'demos', 'products', 'all projects', 'list projects',
      'project list', 'things you built', 'deployed', 'live projects',
    ],
    answers: [
      "Mehedi has 3 featured projects (25+ total deployed):\n\n🍽️ The Nocturne — Restaurant management with 3D table reservations (React, TypeScript, Three.js, Firebase)\n\n🎓 Student Dropout Predictor — Random Forest ML web app (Python, Flask, scikit-learn)\n\n💚 Inner Strength — Real-world child care management system (PHP, MySQL) — currently live for an actual organization!\n\nAsk me about any specific project for full details! 🚀",
    ],
  },

  // ─── The Nocturne ─────────────────────────────────────────────────────────
  {
    tag: 'nocturne',
    patterns: [
      'nocturne', 'restaurant', 'restaurant management', 'table reservation',
      'threejs project', 'three js project', '3d reservation', 'kitchen display',
      'kds', 'nocturne rms', 'the nocturne', 'drag and drop orders',
      'restaurant app', 'restaurant system',
    ],
    answers: [
      "🍽️ The Nocturne — Restaurant Management System\n\nFeatures:\n• Interactive 3D table reservation map powered by Three.js\n• Guest-facing digital menus with live updates\n• Drag-and-drop Kitchen Display System (KDS) for real-time order management\n\nTech Stack: React · TypeScript · Tailwind CSS · Three.js · Firebase\n\n🔗 Live demo: nocturne-rms.netlify.app\n🐙 Code: github.com/MH-Shomik",
    ],
  },

  // ─── Student Dropout Predictor ────────────────────────────────────────────
  {
    tag: 'dropout_predictor',
    patterns: [
      'dropout', 'student dropout', 'predictor', 'dropout predictor',
      'random forest', 'flask app', 'ml project', 'machine learning project',
      'student risk', 'academic prediction', 'dropout risk', 'classification project',
      'risk prediction', 'student predictor',
    ],
    answers: [
      "🎓 Student Dropout Predictor — ML Web Application\n\nFeatures:\n• Predicts student dropout risk using a Random Forest Classifier\n• Processes academic metrics, attendance, and personal factors\n• Delivers real-time risk probability scores via a clean, responsive UI\n\nTech Stack: Python · Flask · scikit-learn · pandas · Tailwind CSS\n\n🐙 Code: github.com/MH-Shomik\n\nA great showcase of Mehedi's end-to-end ML skills — from data processing to model deployment! 🤖",
    ],
  },

  // ─── Inner Strength ───────────────────────────────────────────────────────
  {
    tag: 'inner_strength',
    patterns: [
      'inner strength', 'child development', 'care management', 'dhaka organization',
      'innerstrength', 'innerstrength site', 'care system', 'child care',
      'appointments system', 'billing system', 'client records', 'php project',
      'production app', 'real app', 'live app', 'real world project',
    ],
    answers: [
      "💚 Inner Strength — Child Development Care Management System\n\nThis is a real-world production application for a Dhaka-based child development care organization.\n\nFeatures:\n• Full company workflow management\n• Client records & appointment scheduling\n• Staff management & billing\n• Fully responsive UI\n\nTech Stack: PHP · HTML · CSS · JavaScript · MySQL · Bootstrap\n\n🔗 Live: innerstrength.site\n\nThis isn't a demo — it's actively used by a real organization! 🌟",
    ],
  },

  // ─── Experience ───────────────────────────────────────────────────────────
  {
    tag: 'experience',
    patterns: [
      'experience', 'work experience', 'career', 'freelance', 'job', 'employment',
      'work history', 'previous work', 'professional experience', 'internship',
      'what have you worked on', 'professional background', 'roles', 'positions',
      'freelance work', 'client work', 'professional', 'job history',
    ],
    answers: [
      "Mehedi's experience:\n\n💼 Freelance Frontend Developer — Remote (Jan 2024 – Present)\n• Builds responsive websites for small businesses using React, Tailwind, JavaScript, and MySQL\n• Completed multiple data entry projects with 100% accuracy and timely delivery\n• Works directly with clients to gather requirements and deliver tailored solutions\n\n🏫 University Coursework & Lab Projects — UIU (2022 – Present)\n• Mini-projects using Python, SQL, and Java\n• Regular code reviews, debugging sessions, and project presentations\n• Maintains top-15% academic standing in a competitive CSE batch",
    ],
  },

  // ─── Contact ──────────────────────────────────────────────────────────────
  {
    tag: 'contact',
    patterns: [
      'contact', 'email', 'phone', 'reach', 'hire', 'connect', 'get in touch',
      'how to contact', 'contact info', 'contact details', 'call', 'message',
      'how can i reach', 'reach out', 'contact mehedi', 'how to hire',
      'available for work', 'hire mehedi', 'email address', 'phone number',
    ],
    answers: [
      "📬 How to reach Mehedi:\n\n📧 Email: mh70357@gmail.com\n📱 Phone: 01778973299\n📍 Location: Dhaka, Bangladesh\n\n🐙 GitHub: github.com/MH-Shomik\n💼 LinkedIn: linkedin.com/in/mehedi-hassan-shomik-08a3a7367\n\nHe's open to freelance projects, collaborations, and full-time opportunities! 🚀",
    ],
  },

  // ─── GitHub ───────────────────────────────────────────────────────────────
  {
    tag: 'github',
    patterns: [
      'github', 'repository', 'repo', 'open source', 'source code',
      'contributions', 'github profile', 'git', 'commits', 'pull requests',
      'github link', 'code repository', 'coding profile',
    ],
    answers: [
      "🐙 Mehedi's GitHub: github.com/MH-Shomik\n\n📈 150+ contributions and actively participating in open-source communities.\n\nAll three featured projects have source code available there. He's passionate about building in public! 💻",
    ],
  },

  // ─── LinkedIn ─────────────────────────────────────────────────────────────
  {
    tag: 'linkedin',
    patterns: [
      'linkedin', 'linkedin profile', 'professional network', 'linkedin page',
      'professional page', 'networking', 'linkedin link',
    ],
    answers: [
      "💼 Mehedi's LinkedIn:\nlinkedin.com/in/mehedi-hassan-shomik-08a3a7367\n\nGreat place for professional connections, endorsements, and viewing his career journey! 🤝",
    ],
  },

  // ─── Location ─────────────────────────────────────────────────────────────
  {
    tag: 'location',
    patterns: [
      'location', 'where are you', 'dhaka', 'bangladesh', 'where do you live',
      'country', 'city', 'based', 'timezone', 'where is mehedi', 'remote work',
      'where from', 'nationality', 'origin',
    ],
    answers: [
      "📍 Mehedi is based in Dhaka, Bangladesh.\n\nTimezone: Asia/Dhaka (UTC+6)\n\nHe's available for remote freelance work globally and open to relocation opportunities! 🌍",
    ],
  },

  // ─── Certifications ───────────────────────────────────────────────────────
  {
    tag: 'certifications',
    patterns: [
      'certifications', 'certificates', 'courses', 'certified', 'udemy',
      'online learning', 'online courses', 'credential', 'course completion',
      'training courses', 'professional development',
    ],
    answers: [
      "📜 Mehedi's certifications:\n\n🐍 Python Complete Course — Udemy\n🐘 PHP & MySQL for Web Development — Udemy\n📊 Data Entry Course — Nation IT BD\n\nHe's a continuous learner, always upskilling! 📚",
    ],
  },

  // ─── Achievements ─────────────────────────────────────────────────────────
  {
    tag: 'achievements',
    patterns: [
      'achievements', 'accomplishments', 'awards', 'competition', 'coding competition',
      'contest', 'award', 'recognition', 'honors', 'top 10', 'inter university',
      'competitive programming', 'hackathon', 'winner', 'ranked', 'ranking',
      '500 participants', 'coding contest',
    ],
    answers: [
      "🏆 Mehedi's key achievements:\n\n🚀 Deployed 25+ academic and personal projects across Java, PHP, React, and MySQL\n\n🏆 Secured top-10 among 500+ participants in inter-university coding competitions\n\n🌐 150+ GitHub contributions — active in open-source and technical communities\n\n🎓 Top 15% of his CSE batch at United International University\n\nConstantly pushing his limits! 💪",
    ],
  },

  // ─── Stats / Numbers ──────────────────────────────────────────────────────
  {
    tag: 'stats',
    patterns: [
      'stats', 'statistics', 'numbers', 'how many projects', 'how many years',
      'years experience', 'years coding', 'project count', 'contributions count',
      'technologies count', 'how many technologies', 'portfolio numbers', 'by the numbers',
    ],
    answers: [
      "📊 Mehedi by the numbers:\n\n📦 25+ Projects Deployed\n🛠️ 15+ Technologies Used\n⏳ 3+ Years Coding\n🐙 150+ GitHub Contributions\n\nAll built alongside his university studies! 💡",
    ],
  },

  // ─── Availability / Hiring ────────────────────────────────────────────────
  {
    tag: 'availability',
    patterns: [
      'available', 'hiring', 'open to work', 'looking for job', 'job opportunities',
      'work opportunities', 'collaboration', 'collaborate', 'open for projects',
      'freelance availability', 'full time', 'part time', 'are you available',
      'can i hire you', 'hire you', 'working together', 'partnership',
    ],
    answers: [
      "✅ Mehedi is open to:\n\n💼 Freelance projects\n🤝 Collaborations & open-source contributions\n🚀 Internships & full-time opportunities\n\nHe especially loves:\n• Frontend development (React, TypeScript, Tailwind)\n• Full-stack web applications\n• ML / Data Science projects\n\n📧 Reach him at: mh70357@gmail.com 🚀",
    ],
  },

  // ─── Resume / CV ──────────────────────────────────────────────────────────
  {
    tag: 'resume',
    patterns: [
      'resume', 'cv', 'curriculum vitae', 'download resume', 'get resume',
      'view resume', 'resume pdf', 'download cv', 'full resume', 'resume link',
    ],
    answers: [
      "📄 You can download Mehedi's full resume (PDF) directly from this portfolio!\n\nLook for the Download Resume / CV button on the page. It includes everything — education, projects, skills, experience, certifications, and more. 💼",
    ],
  },

  // ─── Python ───────────────────────────────────────────────────────────────
  {
    tag: 'python',
    patterns: [
      'python', 'python skills', 'python projects', 'python development',
      'python expert', 'python level', 'how good python', 'python proficiency',
    ],
    answers: [
      "🐍 Python is one of Mehedi's strongest languages (85% proficiency)!\n\nHe uses it for:\n• Machine Learning (scikit-learn, pandas, NumPy)\n• Web backends with Flask\n• Data analysis and preprocessing\n• University data science coursework\n\nHis Student Dropout Predictor is a great real-world Python + ML project! 🤖",
    ],
  },

  // ─── Java ─────────────────────────────────────────────────────────────────
  {
    tag: 'java',
    patterns: [
      'java', 'java skills', 'java projects', 'java development', 'java level',
      'java proficiency', 'object oriented', 'oop',
    ],
    answers: [
      "☕ Mehedi knows Java at 75% proficiency. He uses it primarily for academic OOP projects and competitive programming. It's part of his versatile multi-language skill set!",
    ],
  },

  // ─── C / C++ ──────────────────────────────────────────────────────────────
  {
    tag: 'cpp',
    patterns: [
      'c plus plus', 'cpp', 'c language', 'c programming', 'c skills',
      'c level', 'systems programming',
    ],
    answers: [
      "💻 Mehedi has C/C++ at 72% proficiency, used mainly for algorithms, data structures, and competitive programming in university coursework.",
    ],
  },

  // ─── Fun fact ─────────────────────────────────────────────────────────────
  {
    tag: 'fun_fact',
    patterns: [
      'fun fact', 'interesting fact', 'something interesting', 'surprise me',
      'cool fact', 'did you know', 'tell me something', 'random fact',
    ],
    answers: [
      "🎉 Fun fact about Mehedi: He secured a top-10 finish among 500+ participants in inter-university coding competitions — all while maintaining a top-15% academic standing! 🏆 Talk about performing under pressure!",
    ],
  },
]
