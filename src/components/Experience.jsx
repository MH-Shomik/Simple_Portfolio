import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, education, certifications } from '../data/resumeData'

function TimelineItem({ item, index, side }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isLeft = side === 'left'

  return (
    <div ref={ref} className={`relative flex items-start gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-10`}>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
        className="flex-1 p-6 rounded-2xl card-surface border border-white/5 hover:border-primary/20 transition-all duration-300"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-white text-lg">{item.role}</h3>
            <p className="text-slate-400 text-sm">{item.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs text-slate-500 font-mono">{item.period}</span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: `${item.color}15`,
                color: item.color,
                border: `1px solid ${item.color}30`,
              }}
            >
              {item.type}
            </span>
          </div>
        </div>
        <ul className="space-y-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
              <span style={{ color: item.color }} className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
              {b}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Timeline dot — hidden on mobile, shown on md+ */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10 flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="w-4 h-4 rounded-full border-2 border-primary bg-bg-dark"
          style={{ boxShadow: `0 0 12px ${item.color}` }}
        />
      </div>
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6 bg-black/20">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">My journey</p>
          <h2 className="section-heading text-white">Experience & Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px timeline-line opacity-20" />

          {/* Experience entries — alternating */}
          {experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={i}
              side={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}

          {/* Education entries */}
          {education.map((edu, i) => {
            const item = {
              role: edu.degree,
              company: `${edu.institution} · ${edu.location}`,
              type: 'Education',
              period: edu.period,
              bullets: [
                `Major: ${edu.major}`,
                edu.highlight,
              ],
              color: '#f59e0b',
            }
            return (
              <TimelineItem
                key={edu.institution}
                item={item}
                index={experience.length + i}
                side={(experience.length + i) % 2 === 0 ? 'left' : 'right'}
              />
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <p className="text-center text-slate-400 text-sm font-mono mb-4">— Certifications —</p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map(cert => (
              <div
                key={cert.name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl card-surface border border-white/5 text-sm text-slate-300"
              >
                <span>{cert.icon}</span>
                <div>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-xs text-slate-500">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
