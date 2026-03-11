import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { personal } from '../data/resumeData'
import profileImg from '../profile.png'

function useClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = () => new Date().toLocaleTimeString('en-US', {
      timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit', hour12: true
    })
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function useTypewriter(words, speed = 75, pause = 2000) {
  const [text, setText]   = useState('')
  const [idx, setIdx]     = useState(0)
  const [phase, setPhase] = useState('typing')
  useEffect(() => {
    const word = words[idx % words.length]
    if (phase === 'typing') {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), speed)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('deleting'), pause)
      return () => clearTimeout(t)
    }
    if (phase === 'deleting') {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), speed / 2)
        return () => clearTimeout(t)
      }
      setIdx(i => i + 1); setPhase('typing')
    }
  }, [text, phase, idx, words, speed, pause])
  return text
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const rise = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const clock = useClock()
  const role  = useTypewriter(personal.roles)

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-end">

      {/* ── Full-screen background photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={profileImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: '65% 65%' }}
        />
        {/* Dark overlay — heavy at bottom, lighter at top so face is visible */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(6,8,15,0.45) 0%, rgba(6,8,15,0.55) 40%, rgba(6,8,15,0.88) 70%, rgba(6,8,15,0.98) 100%)'
        }} />
        {/* Subtle teal tint from the right */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 70% at 80% 30%, rgba(61,217,208,0.08) 0%, transparent 65%)'
        }} />
      </div>

      {/* ── Foreground content ── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-10 pt-4 pb-14 flex flex-col min-h-screen">

        

        {/* Push content to bottom */}
        <div className="mt-auto pt-16">

          {/* Sub-label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="label-accent mb-4 tracking-widest2"
          >
            FRONTEND DEVELOPER &amp; ML ENTHUSIAST
          </motion.p>

          {/* Big name */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-page-text uppercase leading-[0.92] mb-6"
            style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', letterSpacing: '-0.03em' }}
          >
            MEHEDI<br />
            HASSAN<br />
            <span style={{ color: 'var(--accent)' }}>SHOMIK.</span>
          </motion.h1>

          {/* Typewriter + description row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
          >
            {/* Typewriter */}
            <div className="flex items-center gap-2 h-7">
              <span className="label-accent">›</span>
              <span className="font-mono-custom text-sm" style={{ color: 'var(--muted-2)' }}>{role}</span>
              <span className="blink" />
            </div>

            {/* Short bio — right-aligned on desktop */}
            <p className="max-w-sm text-sm leading-relaxed md:text-right" style={{ color: 'rgba(232,240,245,0.65)' }}>
              CSE @ <span className="text-page-text">United International University</span> · top 15% · Data Science major
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a href="#works" className="btn-accent">
              VIEW PROJECTS <FiArrowUpRight size={14} />
            </a>
            <a href={personal.resumePdf} download className="btn-ghost">
              DOWNLOAD CV
            </a>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <span className="label hidden sm:block">{personal.email}</span>
            <div className="flex gap-6">
              {[
                { l: 'GITHUB',   h: personal.github },
                { l: 'LINKEDIN', h: personal.linkedin },
              ].map(({ l, h }) => (
                <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                  className="label hover:text-accent transition-colors duration-200 ul-link">
                  {l}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
