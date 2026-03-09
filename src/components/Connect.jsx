import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'
import { personal } from '../data/resumeData'

const INFO_ITEMS = [
  { icon: FiMail,    label: 'EMAIL',    value: personal.email,    href: `mailto:${personal.email}` },
  { icon: FiPhone,   label: 'PHONE',    value: personal.phone,    href: `tel:${personal.phone}` },
  { icon: FiMapPin,  label: 'LOCATION', value: personal.location, href: null },
  { icon: FiGithub,  label: 'GITHUB',   value: 'MH-Shomik',       href: personal.github },
  { icon: FiLinkedin,label: 'LINKEDIN', value: 'mehedi-hassan-shomik', href: personal.linkedin },
]

const FADE = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Connect() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [status,  setStatus]  = useState('idle') // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', subject: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
    if (status !== 'sent') setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-10" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ── */}
        <motion.div {...FADE(0)} className="mb-14">
          <div className="flex items-center gap-4 mb-3">
            <span className="label-accent">CONTACT</span>
            <div className="flex-1" style={{ borderTop: '1px solid var(--border)' }} />
          </div>
          <h2 className="section-title">LET'S CONNECT</h2>
          <p className="mt-3 max-w-sm text-base leading-relaxed" style={{ color: 'var(--muted-2)' }}>
            Open to collaborations, full-time roles, and interesting projects. Let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* ── Left — Info ── */}
          <motion.div {...FADE(0.1)} className="lg:col-span-2 flex flex-col gap-5">
            {/* Available badge */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: 'var(--accent)' }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5"
                      style={{ backgroundColor: 'var(--accent)' }} />
              </span>
              <span className="label" style={{ color: 'var(--accent)' }}>AVAILABLE FOR WORK</span>
            </div>

            {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href || undefined}
                target={href && !href.startsWith('mailto') && !href.startsWith('tel') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card p-4 flex items-start gap-4 group transition-all duration-200"
                style={{ cursor: href ? 'pointer' : 'default' }}
              >
                <span className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: 'var(--surface-2)', color: 'var(--muted-2)' }}>
                  <Icon size={15} />
                </span>
                <div className="min-w-0">
                  <p className="label mb-0.5" style={{ color: 'var(--muted)' }}>{label}</p>
                  <p className="text-sm font-medium truncate"
                     style={{ color: 'var(--text)' }}>{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* ── Right — Form ── */}
          <motion.div {...FADE(0.2)} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-8 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="label" style={{ color: 'var(--muted)' }}>NAME</label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    required placeholder="Your name"
                    className="field text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="label" style={{ color: 'var(--muted)' }}>EMAIL</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    required placeholder="your@email.com"
                    className="field text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="label" style={{ color: 'var(--muted)' }}>SUBJECT</label>
                <input
                  name="subject" value={form.subject} onChange={handleChange}
                  required placeholder="What's this about?"
                  className="field text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label" style={{ color: 'var(--muted)' }}>MESSAGE</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  required rows={5} placeholder="Tell me about your project or opportunity..."
                  className="field text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-accent self-start py-3.5 px-8 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' && 'SENDING...'}
                {status === 'sent'    && <><FiCheck size={13} /> SENT!</>}
                {status === 'error'   && 'ERROR — TRY AGAIN'}
                {status === 'idle'    && <><FiSend size={13} /> SEND MESSAGE</>}
              </button>

              {status === 'sent' && (
                <p className="text-xs" style={{ color: 'var(--accent)' }}>
                  Thanks! I'll get back to you within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="text-xs text-red-400">
                  Something went wrong. Email me directly at {personal.email}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
