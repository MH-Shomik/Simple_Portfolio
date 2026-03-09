// ─── Resume Data ─────────────────────────────────────────────────────────────
// Sourced from: Updated_Resume.pdf  |  Last updated: March 2026

export const personal = {
  name: 'Mehedi Hassan Shomik',
  initials: 'MHS',
  tagline: 'Turning data into insight, ideas into products.',
  roles: [
    'Full-Stack Developer',
    'ML & Data Enthusiast',
    'React Specialist',
    'Computer Science Student',
    'Open Source Contributor',
  ],
  bio: [
    "I'm a Computer Science & Engineering student at United International University (top 15% of batch), majoring in Data Science. I build full-stack web applications and machine learning solutions that solve real problems.",
    'From interactive 3D restaurant systems to student dropout predictors — I love combining clean UI with intelligent backends. I thrive in both frontend aesthetics and backend logic.',
    "When I'm not coding, I contribute to open-source projects, participate in coding competitions, and explore new technologies to stay ahead of the curve.",
  ],
  funFact: '🏆 Secured top-10 among 500+ participants in inter-university coding competitions.',
  email: 'mh70357@gmail.com',
  phone: '01778973299',
  location: 'Dhaka, Bangladesh',
  github: 'https://github.com/MH-Shomik',
  linkedin: 'https://www.linkedin.com/in/mehedi-hassan-shomik-08a3a7367',
  twitter: '',
  resumePdf: '/Updated_Resume.pdf',
}

export const stats = [
  { label: 'Projects Deployed', value: 25, suffix: '+' },
  { label: 'Technologies Used', value: 15, suffix: '+' },
  { label: 'Years Coding', value: 3, suffix: '+' },
  { label: 'GitHub Contributions', value: 150, suffix: '+' },
]

export const education = [
  {
    institution: 'United International University',
    location: 'Dhaka, Bangladesh',
    degree: 'B.Eng. in Computer Science and Engineering',
    major: 'Data Science',
    period: '2022 – Present',
    highlight: 'Top 15% of the batch',
  },
]

// Skill proficiency is out of 100
export const skillCategories = [
  {
    title: 'Frontend',
    color: '#7c3aed',
    skills: [
      { name: 'React', level: 88 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 86 },
      { name: 'TypeScript', level: 72 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Backend & DB',
    color: '#06b6d4',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'PHP', level: 78 },
      { name: 'Python', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Firebase', level: 76 },
      { name: 'SQL', level: 84 },
    ],
  },
  {
    title: 'Data & ML',
    color: '#f59e0b',
    skills: [
      { name: 'Machine Learning', level: 78 },
      { name: 'scikit-learn', level: 76 },
      { name: 'pandas', level: 82 },
      { name: 'NumPy', level: 80 },
      { name: 'Statistics', level: 78 },
      { name: 'Flask', level: 72 },
    ],
  },
  {
    title: 'Languages & Tools',
    color: '#10b981',
    skills: [
      { name: 'Java', level: 75 },
      { name: 'C / C++', level: 72 },
      { name: 'Git & GitHub', level: 84 },
      { name: 'Three.js', level: 60 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Figma', level: 60 },
    ],
  },
]

// Tech icons for the icon grid (using react-icons Si names)
export const techStack = [
  { name: 'React', icon: 'SiReact', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'Python', icon: 'SiPython', color: '#3776AB' },
  { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
  { name: 'PHP', icon: 'SiPhp', color: '#777BB4' },
  { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
  { name: 'Firebase', icon: 'SiFirebase', color: '#FFCA28' },
  { name: 'Tailwind', icon: 'SiTailwindcss', color: '#06B6D4' },
  { name: 'Git', icon: 'SiGit', color: '#F05032' },
  { name: 'Three.js', icon: 'SiThreedotjs', color: '#ffffff' },
  { name: 'scikit-learn', icon: 'SiScikitlearn', color: '#F7931E' },
  { name: 'pandas', icon: 'SiPandas', color: '#150458' },
  { name: 'Java', icon: 'SiOpenjdk', color: '#ED8B00' },
  { name: 'Bootstrap', icon: 'SiBootstrap', color: '#7952B3' },
  { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
]

export const projects = [
  {
    id: 1,
    title: 'The Nocturne',
    subtitle: 'Restaurant Management System',
    description:
      'A full-stack restaurant platform featuring guest-facing menus, interactive 3D table reservations powered by Three.js, and a drag-and-drop Kitchen Display System for real-time order management.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Firebase'],
    live: 'https://nocturne-rms.netlify.app',
    github: 'https://github.com/MH-Shomik',
    gradient: 'from-violet-600 to-cyan-500',
    featured: true,
  },
  {
    id: 2,
    title: 'Student Dropout Predictor',
    subtitle: 'ML Web Application',
    description:
      'End-to-end machine learning web app predicting student dropout risk using a Random Forest Classifier. Processes academic metrics and delivers real-time risk probabilities through a clean, responsive UI.',
    tech: ['Python', 'Flask', 'scikit-learn', 'pandas', 'Tailwind CSS'],
    live: '',
    github: 'https://github.com/MH-Shomik',
    gradient: 'from-amber-500 to-orange-600',
    featured: true,
  },
  {
    id: 3,
    title: 'Inner Strength',
    subtitle: 'Child Development Care Management System',
    description:
      'A real-world web application for a Dhaka-based child development care organization. Manages the entire company workflow — client records, appointments, staff, and billing — with a fully responsive UI.',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
    live: 'https://www.innerstrength.site',
    github: 'https://github.com/MH-Shomik',
    gradient: 'from-emerald-500 to-teal-600',
    featured: true,
  },
]

export const experience = [
  {
    id: 1,
    role: 'Freelance Full-Stack Developer',
    company: 'Remote',
    type: 'Freelance',
    period: 'Jan 2024 – Present',
    bullets: [
      'Completed multiple freelance data entry projects with 100% accuracy and timely delivery.',
      'Built responsive websites for small businesses using React, Tailwind, JavaScript, and MySQL.',
      'Communicated with clients to gather requirements and delivered customized solutions.',
    ],
    color: '#7c3aed',
  },
  {
    id: 2,
    role: 'University Coursework & Lab Projects',
    company: 'United International University',
    type: 'Academic',
    period: '2022 – Present',
    bullets: [
      'Designed and implemented mini-projects using Python, SQL, and Java as part of coursework.',
      'Participated in regular debugging, code reviews, and project presentations.',
      'Maintained a top-15% academic standing in a competitive CSE batch.',
    ],
    color: '#06b6d4',
  },
]

export const certifications = [
  { name: 'Python Complete Course', issuer: 'Udemy', icon: '🐍' },
  { name: 'PHP & MySQL for Web Development', issuer: 'Udemy', icon: '🐘' },
  { name: 'Data Entry Course', issuer: 'Nation IT BD', icon: '📊' },
]

export const achievements = [
  {
    icon: '🚀',
    text: 'Deployed 25+ academic and personal projects across Java, PHP, React, and MySQL.',
  },
  {
    icon: '🏆',
    text: 'Secured top-10 among 500+ participants in inter-university coding competitions.',
  },
  {
    icon: '🌐',
    text: '150+ GitHub contributions — active in open-source and technical communities.',
  },
]
