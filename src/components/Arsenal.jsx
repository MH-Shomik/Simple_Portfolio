import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

// Tech groups matching the resume data
const GROUPS = [
  {
    title: 'FRONTEND & FRAMEWORK',
    items: [
      { name: 'REACT',       src: `${DEVICON}/react/react-original.svg` },
      { name: 'TAILWIND',    src: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: 'HTML5',       src: `${DEVICON}/html5/html5-original.svg` },
      { name: 'CSS3',        src: `${DEVICON}/css3/css3-original.svg` },
      { name: 'BOOTSTRAP',   src: `${DEVICON}/bootstrap/bootstrap-original.svg` },
      { name: 'FRAMER',      src: `${DEVICON}/framermotion/framermotion-original.svg` },
    ],
  },
  {
    title: 'BACKEND & DATABASE',
    items: [
      { name: 'NODE.JS',     src: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: 'PHP',         src: `${DEVICON}/php/php-original.svg` },
      { name: 'FIREBASE',    src: `${DEVICON}/firebase/firebase-original.svg` },
      { name: 'MYSQL',       src: `${DEVICON}/mysql/mysql-original.svg` },
      { name: 'FLASK',       src: `${DEVICON}/flask/flask-original.svg` },
    ],
  },
  {
    title: 'DATA & ML',
    items: [
      { name: 'PYTHON',      src: `${DEVICON}/python/python-original.svg` },
      { name: 'PANDAS',      src: `${DEVICON}/pandas/pandas-original.svg` },
      { name: 'NUMPY',       src: `${DEVICON}/numpy/numpy-original.svg` },
      { name: 'SCIKIT',      src: `${DEVICON}/scikitlearn/scikitlearn-original.svg` },
    ],
  },
  {
    title: 'LANGUAGE & TOOLS',
    items: [
      { name: 'JAVASCRIPT',  src: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'TYPESCRIPT',  src: `${DEVICON}/typescript/typescript-original.svg` },
      { name: 'JAVA',        src: `${DEVICON}/java/java-original.svg` },
      { name: 'C++',         src: `${DEVICON}/cplusplus/cplusplus-original.svg` },
      { name: 'GIT',         src: `${DEVICON}/git/git-original.svg` },
      { name: 'THREE.JS',    src: `${DEVICON}/threejs/threejs-original.svg` },
    ],
  },
]

function TechCard({ name, src, delay }) {
  return (
    <motion.div
      className="tech-icon-card"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.06 }}
    >
      <img src={src} alt={name} width={30} height={30}
        onError={e => { e.target.style.display = 'none' }}
      />
      <span className="label" style={{ fontSize: '0.6rem', letterSpacing: '0.12em' }}>{name}</span>
    </motion.div>
  )
}

export default function Arsenal() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="arsenal" className="py-24 px-6 md:px-10" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="label-accent">CORE ARSENAL</span>
            <div className="flex-1" style={{ borderTop: '1px solid var(--border)' }} />
          </div>
          <h2 className="section-title">TECHNICAL STACK</h2>
          <p className="mt-3 max-w-md text-base leading-relaxed" style={{ color: 'var(--muted-2)' }}>
            Technologies I use to design, build, and ship scalable applications.
          </p>
        </motion.div>

        {/* ── Groups ── */}
        <div className="space-y-12">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: gi * 0.1 + 0.1 }}
            >
              {/* Group header */}
              <div className="flex items-center gap-4 mb-5">
                <span className="label">{g.title}</span>
                <div className="flex-1" style={{ borderTop: '1px solid var(--border)' }} />
              </div>

              {/* Icons grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {g.items.map((item, ii) => (
                  <TechCard key={item.name} {...item} delay={gi * 0.08 + ii * 0.04 + 0.15} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Marquee strip ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-6 overflow-hidden"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="marquee-track">
            {[...GROUPS.flatMap(g => g.items), ...GROUPS.flatMap(g => g.items)].map((item, i) => (
              <span key={i} className="label shrink-0" style={{ color: 'var(--muted)' }}>
                {item.name} <span style={{ color: 'var(--accent)', margin: '0 0.5rem' }}>·</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
