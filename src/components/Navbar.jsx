import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const NAV = [
  { id: 'about',   label: 'ABOUT' },
  { id: 'arsenal', label: 'STACK' },
  { id: 'works',   label: 'WORK' },
  { id: 'contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.45 }
    )
    NAV.forEach(n => { const el = document.getElementById(n.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const linkCls = id =>
    `label transition-colors duration-200 hover:text-accent ${
      active === id ? 'text-accent' : 'text-muted-2'
    }`

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          className="font-display font-bold text-sm tracking-widest uppercase"
          style={{ color: 'var(--text)' }}
        >
          MH.<span style={{ color: 'var(--accent)' }}>SHOMIK</span>
        </motion.a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n, i) => (
            <motion.a
              key={n.id} href={`#${n.id}`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 + 0.2 }}
              className={`${linkCls(n.id)} ul-link`}
            >
              {n.label}
            </motion.a>
          ))}
        </nav>

        {/* Resume + Hamburger */}
        <div className="flex items-center gap-4">
          <motion.a
            href="/Updated_Resume.pdf" download
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="hidden md:inline-flex btn-ghost py-2 px-5 text-xs"
          >
            RESUME
          </motion.a>
          <button
            className="md:hidden hover:text-accent transition-colors"
            style={{ color: 'var(--muted-2)' }}
            onClick={() => setOpen(v => !v)} aria-label="Menu"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}
            className="md:hidden nav-scrolled px-6 py-6 flex flex-col gap-5"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
                className={`${linkCls(n.id)} text-base`}
              >{n.label}</a>
            ))}
            <a href="/Updated_Resume.pdf" download
               className="btn-accent self-start mt-2 text-xs px-5 py-2.5">
              DOWNLOAD RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
