import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { useScrollDirection } from '../../hooks/useScrollDirection'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollDirection, scrollY } = useScrollDirection()
  const hidden = scrollDirection === 'down' && scrollY > 400

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-colors duration-300 ${
          scrollY > 50
            ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-heading text-lg font-semibold tracking-wide text-text-primary hover:text-accent transition-colors"
          >
            AAYUSH
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="/images/resume.pdf"
              download="Resume_Aayush_Kumar_Singh.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide border-2 border-border text-text-secondary hover:border-accent hover:text-accent transition-all"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-text-primary"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 p-2 text-text-primary"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-2xl font-heading font-medium text-text-primary hover:text-accent transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="/images/resume.pdf"
                download="Resume_Aayush_Kumar_Singh.pdf"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 mt-6 rounded-xl text-sm font-semibold border-2 border-border text-text-secondary hover:border-accent hover:text-accent transition-all"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
