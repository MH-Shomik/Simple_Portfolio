import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import * as SiIcons from 'react-icons/si'
import { skillCategories, techStack } from '../data/resumeData'

function TechIcon({ name, icon, color }) {
  const Icon = SiIcons[icon]
  return (
    <motion.div
      whileHover={{ scale: 1.15, y: -4 }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl card-surface cursor-default group"
      title={name}
    >
      {Icon ? (
        <Icon size={32} style={{ color }} className="transition-all duration-200" />
      ) : (
        <span className="text-2xl">{name[0]}</span>
      )}
      <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">{name}</span>
    </motion.div>
  )
}

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="skill-bar-fill"
          style={{
            width: inView ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, #06b6d4)`,
          }}
        />
      </div>
    </div>
  )
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">What I work with</p>
          <h2 className="section-heading text-white">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Tech icon grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
          className="mb-14"
        >
          <p className="text-slate-400 text-sm text-center mb-6 font-mono">— Tech Stack —</p>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.03 * i + 0.3, duration: 0.4 }}
              >
                <TechIcon {...tech} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill bars with category tabs */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={2}
        >
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === i
                    ? 'text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-200 card-surface'
                }`}
                style={
                  activeTab === i
                    ? { background: cat.color, boxShadow: `0 4px 20px ${cat.color}40` }
                    : {}
                }
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 max-w-3xl mx-auto p-8 rounded-2xl card-surface">
            {skillCategories[activeTab].skills.map(skill => (
              <SkillBar
                key={skill.name}
                {...skill}
                color={skillCategories[activeTab].color}
                inView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
