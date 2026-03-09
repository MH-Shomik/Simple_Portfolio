import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal, education, experience, certifications, achievements, stats } from '../data/resumeData'

const rise = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay } },
})

function JourneyCard({ tag, title, subtitle, period, bullets, color }) {
  return (
    <div className="flex gap-4 group">
      <div className="flex flex-col items-center gap-1 pt-1">
        <div className="tl-dot" style={{ background: color || 'var(--accent)', boxShadow: `0 0 8px ${color || 'var(--accent)'}` }} />
        <div className="flex-1 w-px" style={{ background: 'var(--border)' }} />
      </div>
      <div className="pb-8 flex-1">
        <span className="label" style={{ color: color || 'var(--accent)' }}>{tag}</span>
        <h3 className="font-display font-semibold text-page-text text-base mt-1">{title}</h3>
        <p className="text-sm mt-0.5" style={{ color: 'var(--muted-2)' }}>{subtitle}</p>
        {period && (
          <p className="font-mono-custom text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
            {period}
          </p>
        )}
        {bullets && bullets.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--muted-2)' }}>
                <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--muted)' }} />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function StatBox({ value, suffix, label }) {
  return (
    <div className="p-5 card text-center">
      <p className="font-display font-bold text-3xl" style={{ color: 'var(--accent)' }}>
        {value}{suffix}
      </p>
      <p className="label mt-1">{label}</p>
    </div>
  )
}

export default function Chronicle() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Section header ── */}
        <motion.div
          variants={rise(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="label-accent">CHRONICLE</span>
            <div className="flex-1" style={{ borderTop: '1px solid var(--border)' }} />
          </div>
          <h2 className="section-title">MY JOURNEY</h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed" style={{ color: 'var(--muted-2)' }}>
            Building foundations through academic excellence, industry experience, and relentless learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── LEFT — Timeline ── */}
          <motion.div
            variants={rise(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            {/* Education */}
            {education.map(edu => (
              <JourneyCard
                key={edu.institution}
                tag="EDUCATION"
                title={edu.degree}
                subtitle={`${edu.institution} · ${edu.location}`}
                period={edu.period}
                bullets={[`Major: ${edu.major}`, edu.highlight]}
                color="var(--accent)"
              />
            ))}

            {/* Experience */}
            {experience.map(exp => (
              <JourneyCard
                key={exp.id}
                tag={exp.type.toUpperCase()}
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
                bullets={exp.bullets}
                color={exp.color}
              />
            ))}

            {/* Certifications */}
            {certifications.map(c => (
              <JourneyCard
                key={c.name}
                tag="CERTIFICATION"
                title={c.name}
                subtitle={c.issuer}
                color="#888"
              />
            ))}

            {/* Achievements */}
            {achievements.map((a, i) => (
              <JourneyCard
                key={i}
                tag="ACHIEVEMENT"
                title={a.text}
                subtitle=""
                color="#f59e0b"
              />
            ))}
          </motion.div>

          {/* ── RIGHT — Bio + Stats ── */}
          <motion.div
            variants={rise(0.2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Avatar block */}
            <div className="flex items-center gap-5">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-display font-black shrink-0 border"
                style={{ background: 'var(--surface-2)', borderColor: 'var(--border-hover)', color: 'var(--accent)' }}
              >
                {personal.initials}
              </div>
              <div>
                <p className="font-display font-semibold text-page-text text-lg">{personal.name}</p>
                <p className="label mt-1">{personal.location}</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              {personal.bio.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--muted-2)' }}>{p}</p>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(s => (
                <StatBox key={s.label} {...s} />
              ))}
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="btn-ghost py-2 px-5 text-xs">GITHUB</a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="btn-ghost py-2 px-5 text-xs">LINKEDIN</a>
              <a href={`mailto:${personal.email}`}
                className="btn-ghost py-2 px-5 text-xs">EMAIL</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
