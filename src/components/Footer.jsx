import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi'
import { useData } from '../context/DataContext'

const QUICK_LINKS = [
  { label: 'ABOUT',    href: '#about' },
  { label: 'STACK',    href: '#arsenal' },
  { label: 'WORK',     href: '#works' },
  { label: 'CONTACT',  href: '#contact' },
]

export default function Footer() {
  const { data } = useData()
  const { personal } = data

  const SOCIALS = [
    { icon: FiGithub,   label: 'GITHUB',   href: personal.github },
    { icon: FiLinkedin, label: 'LINKEDIN', href: personal.linkedin },
    { icon: FiMail,     label: 'EMAIL',    href: `mailto:${personal.email}` },
  ]

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="px-6 md:px-10 pt-16 pb-8" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">

        {/* ── Logo row ── */}
        <div className="mb-12">
          <a href="#" className="font-display font-black text-2xl uppercase tracking-tight"
             style={{ color: 'var(--text)' }}>
            MH.<span style={{ color: 'var(--accent)' }}>SHOMIK</span>
          </a>
          <p className="mt-1 text-xs" style={{ color: 'var(--muted)' }}>MEHEDI HASSAN SHOMIK</p>
        </div>

        {/* ── Three columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Col 1 — Contact */}
          <div>
            <p className="label mb-4" style={{ color: 'var(--muted)' }}>CONTACT</p>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${personal.email}`}
                 className="flex items-center gap-2 text-xs ul-link"
                 style={{ color: 'var(--muted-2)' }}>
                <FiMail size={12} /> {personal.email}
              </a>
              <a href={`tel:${personal.phone}`}
                 className="flex items-center gap-2 text-xs ul-link"
                 style={{ color: 'var(--muted-2)' }}>
                <FiPhone size={12} /> {personal.phone}
              </a>
              <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted-2)' }}>
                <FiMapPin size={12} /> {personal.location}
              </span>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="label mb-4" style={{ color: 'var(--muted)' }}>QUICK LINKS</p>
            <div className="flex flex-col gap-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <a key={label} href={href}
                   className="text-xs ul-link"
                   style={{ color: 'var(--muted-2)' }}>
                  {label}
                </a>
              ))}
              <a href={personal.resumePdf} download
                 className="text-xs"
                 style={{ color: 'var(--accent)' }}>
                ↓ DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Col 3 — Socials */}
          <div>
            <p className="label mb-4" style={{ color: 'var(--muted)' }}>SOCIALS</p>
            <div className="flex flex-col gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-xs ul-link"
                   style={{ color: 'var(--muted-2)' }}>
                  <Icon size={12} /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3"
             style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © {new Date().getFullYear()} Mehedi Hassan Shomik · Built with React &amp; Vite
          </p>
          <button onClick={scrollTop}
                  className="flex items-center gap-1.5 text-xs ul-link"
                  style={{ color: 'var(--muted-2)' }}>
            BACK TO TOP <FiArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  )
}
