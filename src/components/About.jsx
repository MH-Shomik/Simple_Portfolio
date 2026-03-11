import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiAcademicCap } from 'react-icons/hi'
import { personal, stats, education, certifications, achievements } from '../data/resumeData'

function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = target / 50
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 30)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="text-4xl font-black text-gradient">
      {count}{suffix}
    </span>
  )
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Get to know me</p>
          <h2 className="section-heading text-white">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — avatar + quick info */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            {/* Avatar placeholder */}
            <div className="relative">
              <div className="w-52 h-52 rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 border-2 border-primary/30 glow flex items-center justify-center text-7xl font-black text-white/30 select-none animate-glow-pulse">
                {personal.initials}
              </div>
              <span className="absolute -bottom-3 -right-3 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-2xl glow-cyan">
                💻
              </span>
            </div>

            {/* Quick info chips */}
            <div className="flex flex-col gap-2 w-full">
              {[
                { icon: FiMapPin, text: personal.location },
                { icon: FiMail, text: personal.email },
                { icon: FiGithub, text: 'MH-Shomik', href: personal.github },
                { icon: FiLinkedin, text: 'mehedi-hassan-shomik', href: personal.linkedin },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href || undefined}
                  target={href ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl card-surface text-slate-300 text-sm hover:text-primary transition-colors"
                >
                  <Icon className="text-primary shrink-0" size={15} />
                  {text}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — bio + education */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            {/* Bio */}
            <div className="space-y-4 mb-8">
              {personal.bio.map((para, i) => (
                <p key={i} className="text-slate-300 leading-relaxed">
                  {para}
                </p>
              ))}
              <p className="text-slate-400 italic text-sm">{personal.funFact}</p>
            </div>

            {/* Education */}
            {education.map(edu => (
              <div key={edu.institution} className="p-5 rounded-xl card-surface border-l-2 border-primary mb-6">
                <div className="flex items-start gap-3">
                  <HiAcademicCap className="text-primary mt-0.5 shrink-0" size={22} />
                  <div>
                    <p className="font-semibold text-white">{edu.degree}</p>
                    <p className="text-slate-400 text-sm">{edu.institution} · {edu.location}</p>
                    <p className="text-slate-500 text-xs mt-1">{edu.period} · Major: {edu.major}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full font-medium">
                      {edu.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {certifications.map(cert => (
                <span
                  key={cert.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium"
                >
                  {cert.icon} {cert.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map(s => (
            <div key={s.label} className="p-6 rounded-xl card-surface text-center card-surface-hover">
              <AnimatedCounter target={s.value} suffix={s.suffix} />
              <p className="text-slate-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.45 }}
          className="grid md:grid-cols-3 gap-4 mt-6"
        >
          {achievements.map(a => (
            <div key={a.text} className="flex items-start gap-3 p-5 rounded-xl card-surface card-surface-hover">
              <span className="text-2xl">{a.icon}</span>
              <p className="text-slate-300 text-sm leading-relaxed">{a.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
