import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { personal } from '../data/resumeData'

const links = [
  { icon: FiGithub, href: personal.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
]

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="hidden lg:flex fixed right-6 bottom-0 z-40 flex-col items-center gap-4"
    >
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-2.5 rounded-lg border border-white/10 text-slate-400 hover:text-primary hover:border-primary/40 hover:-translate-x-1 transition-all duration-200 bg-black/30 backdrop-blur-sm"
        >
          <Icon size={18} />
        </a>
      ))}
      {/* Vertical line */}
      <div className="w-px h-20 bg-gradient-to-b from-white/10 to-transparent" />
    </motion.div>
  )
}
