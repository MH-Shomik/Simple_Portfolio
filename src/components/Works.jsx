import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi'
import { projects } from '../data/resumeData'

function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Row header — always visible ── */}
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full text-left py-6 flex items-center gap-6 group"
        style={{ borderBottom: open ? 'none' : '1px solid var(--border)' }}
      >
        {/* Number */}
        <span className="font-mono-custom text-xs shrink-0 w-8"
              style={{ color: 'var(--muted)' }}>
          0{index + 1}
        </span>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <span
            className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight transition-colors duration-200"
            style={{ color: open ? 'var(--accent)' : 'var(--text)' }}
          >
            {project.title}
          </span>
          <span className="hidden md:inline ml-4 label" style={{ color: 'var(--muted)' }}>
            {project.subtitle}
          </span>
        </div>

        {/* Tech pills — desktop */}
        <div className="hidden lg:flex gap-2 shrink-0">
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="chip">{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="chip">+{project.tech.length - 3}</span>
          )}
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 ml-2"
          style={{ color: 'var(--muted-2)' }}
        >
          <FiChevronDown size={18} />
        </motion.div>
      </button>

      {/* ── Expanded details ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div className="pb-8 grid md:grid-cols-3 gap-8">
              {/* Project preview */}
              <div className="rounded-xl h-44 md:col-span-1 overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <div className="text-center px-4">
                      <p className="font-display font-black text-2xl text-white/80 uppercase tracking-tight">
                        {project.title}
                      </p>
                      <p className="text-white/50 text-xs mt-1 font-mono-custom">{project.subtitle}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="md:col-span-2 flex flex-col justify-between gap-5">
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-2)' }}>
                  {project.description}
                </p>

                {/* All tech chips */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 label ul-link transition-colors duration-200 hover:text-accent">
                    <FiGithub size={13} /> SOURCE CODE
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 label-accent ul-link">
                      <FiExternalLink size={13} /> LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Works() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="works" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="label-accent">MY WORKS</span>
            <div className="flex-1" style={{ borderTop: '1px solid var(--border)' }} />
          </div>
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <p className="mt-3 max-w-md text-base leading-relaxed" style={{ color: 'var(--muted-2)' }}>
            Real solutions solving real problems — click each to expand details.
          </p>
        </motion.div>

        {/* ── Project rows ── */}
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* ── GitHub CTA ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 flex items-center gap-4"
        >
          <a href="https://github.com/MH-Shomik" target="_blank" rel="noopener noreferrer"
            className="btn-ghost py-3 px-7 text-xs">
            <FiGithub size={13} /> ALL PROJECTS ON GITHUB
          </a>
        </motion.div>
      </div>
    </section>
  )
}
