import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { personal } from '../data/resumeData'

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
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-16 pt-32 max-w-6xl mx-auto">

      {/* â”€â”€ Ambient glow â”€â”€ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div style={{ background: 'radial-gradient(ellipse 700px 400px at 60% 40%, rgba(200,255,87,0.055) 0%, transparent 70%)' }} className="absolute inset-0" />
      </div>

      {/* â”€â”€ Live badge row â”€â”€ */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="flex items-center justify-between mb-10 flex-wrap gap-4"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: 'var(--accent)' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent)' }} />
          </span>
          <span className="label">AVAILABLE FOR WORK</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="label">ðŸ“ DHAKA, BD</span>
          <span className="label font-mono-custom">{clock} (BST)</span>
        </div>
      </motion.div>

      {/* â”€â”€ Main headline â”€â”€ */}
      <motion.div variants={stagger} initial="hidden" animate="show" className="mb-10">
        <motion.p variants={rise} className="label-accent mb-4 tracking-widest2">
          FULL-STACK DEVELOPER &amp; ML ENTHUSIAST
        </motion.p>

        <motion.h1
          variants={rise}
          className="font-display font-bold text-page-text leading-[0.95] uppercase"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', letterSpacing: '-0.03em' }}
        >
          MEHEDI<br />
          HASSAN<br />
          <span style={{ color: 'var(--accent)' }}>SHOMIK.</span>
        </motion.h1>

        {/* Typewriter role line */}
        <motion.div variants={rise} className="mt-5 flex items-center gap-2 h-7">
          <span className="label-accent">â€º</span>
          <span className="font-mono-custom text-sm" style={{ color: 'var(--muted-2)' }}>
            {role}
          </span>
          <span className="blink" />
        </motion.div>
      </motion.div>

      {/* â”€â”€ Divider + description â”€â”€ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-col md:flex-row gap-6 md:gap-16 mb-10"
      >
        <div className="hidden md:block w-px self-stretch" style={{ background: 'var(--border)' }} />
        <p className="max-w-lg text-base md:text-lg leading-relaxed" style={{ color: 'var(--muted-2)' }}>
          CSE student at <span style={{ color: 'var(--text)' }}>United International University</span> (top 15% Â· Data Science major).
          Building full-stack web applications and ML solutions that ship to real users.
        </p>
      </motion.div>

      {/* â”€â”€ CTAs â”€â”€ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-wrap items-center gap-4"
      >
        <a href="#works" className="btn-accent">
          VIEW PROJECTS <FiArrowUpRight size={14} />
        </a>
        <a href={personal.resumePdf} download className="btn-ghost">
          DOWNLOAD CV
        </a>
      </motion.div>

      {/* â”€â”€ Bottom bar â”€â”€ */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
        className="mt-16 pt-6 flex items-center justify-between border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <span className="label">{personal.email}</span>
        <div className="flex gap-6">
          {[
            { l: 'GH', h: personal.github },
            { l: 'LI', h: personal.linkedin },
          ].map(({ l, h }) => (
            <a key={l} href={h} target="_blank" rel="noopener noreferrer"
              className="label hover:text-accent transition-colors duration-200 ul-link">
              {l}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
