import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/resumeData'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-2xl overflow-hidden card-surface border border-white/5 hover:border-primary/30 transition-all duration-300"
      whileHover={{ y: -8, scale: 1.01 }}
    >
      {/* Gradient banner */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6">
          <p className="text-white/60 text-xs font-mono uppercase tracking-widest mb-1">{project.subtitle}</p>
          <h3 className="text-white text-2xl font-black">{project.title}</h3>
        </div>
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-medium rounded-lg font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
          >
            <FiGithub size={15} /> Source
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-secondary hover:text-secondary-light text-sm font-medium transition-colors ml-auto"
            >
              Live Demo <FiExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Things I've built</p>
          <h2 className="section-heading text-white">Featured Projects</h2>
          <p className="section-subheading">Real-world applications — from concept to deployment.</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/MH-Shomik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-primary/40 rounded-xl text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 hover:bg-primary/5"
          >
            <FiGithub size={16} />
            See all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
