import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiSend, FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { personal } from '../data/resumeData'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID' // Replace with your Formspree endpoint

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 text-white placeholder-slate-500 text-sm transition-all duration-200'

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Get in touch</p>
          <h2 className="section-heading text-white">Let's Build Something Together</h2>
          <p className="section-subheading">Open to full-time roles, freelance projects, and collaborations.</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-slate-300 leading-relaxed">
              Whether you have a job opportunity, project idea, or just want to connect — my inbox is always open.
              I'll do my best to reply within 24 hours.
            </p>

            {/* Contact info */}
            {[
              { icon: FiMail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
              { icon: FiMapPin, label: 'Location', value: personal.location, href: null },
              { icon: FiGithub, label: 'GitHub', value: 'github.com/MH-Shomik', href: personal.github },
              { icon: FiLinkedin, label: 'LinkedIn', value: 'Connect with me', href: personal.linkedin },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href || undefined}
                target={href ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl card-surface hover:border-primary/30 border border-transparent transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="text-sm text-slate-200 font-medium">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4 p-8 rounded-2xl card-surface border border-white/5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">Subject *</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Job opportunity / Project inquiry"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message here..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <p className="text-emerald-400 text-sm bg-emerald-400/10 px-4 py-2 rounded-lg">
                ✓ Message sent! I'll reply as soon as possible.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm bg-red-400/10 px-4 py-2 rounded-lg">
                ✗ Something went wrong. Try emailing me directly at {personal.email}.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-light disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 glow"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
