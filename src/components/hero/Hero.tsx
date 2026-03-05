import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Badge from '../shared/Badge'
import Button from '../shared/Button'

const titles = ['Product Manager', 'Engineering Leader', 'Builder of Things That Matter']

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 animate-mesh-1 opacity-30">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-start/20 blur-[120px] top-1/4 left-1/5" />
        </div>
        <div className="absolute inset-0 animate-mesh-2 opacity-20">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-end/20 blur-[120px] top-1/5 right-1/5" />
        </div>
        <div className="absolute inset-0 animate-mesh-3 opacity-15">
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[100px] bottom-1/4 left-1/2" />
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Badge variant="default" className="mb-8 text-xs tracking-[0.15em]">
            Penn State '25 &nbsp;|&nbsp; Product & Engineering
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-text-primary mb-6"
        >
          Aayush Kumar Singh
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="h-10 md:h-12 flex items-center justify-center mb-10"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-text-secondary font-heading font-medium"
            >
              {titles[titleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#portfolio" onClick={handleScroll('#portfolio')}>
            View My Work
          </Button>
          <Button variant="outline" href="#contact" onClick={handleScroll('#contact')}>
            Get in Touch
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
