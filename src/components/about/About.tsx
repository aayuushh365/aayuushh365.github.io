import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, FolderOpen, Award } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'
import Button from '../shared/Button'
import AnimatedElement from '../shared/AnimatedElement'

const stats = [
  { icon: Briefcase, value: 3, suffix: '+', label: 'Years Experience' },
  { icon: FolderOpen, value: 11, suffix: '', label: 'Projects Shipped' },
  { icon: Award, value: 6, suffix: '', label: 'Certifications' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let current = 0
    const step = Math.ceil(target / 30)
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setCount(current)
    }, 40)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <Section id="about">
      <SectionHeading label="About" title="I Inspect Element on Life." />

      <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        {/* Text — 3 cols */}
        <AnimatedElement className="md:col-span-3 order-2 md:order-1">
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              I'm the type of person who clicks 'Inspect Element' on life—curious by default,
              creative by accident, and caffeinated by design. I build things, break them
              (intentionally, I swear), and then rebuild them better—usually with fewer bugs and more
              personality.
            </p>
            <p>
              Whether it's crafting code, wrangling wild ideas into strategies, or turning chaos into
              clean UI, I'm in my element when I'm blending logic with a little mischief. I believe
              great work lives somewhere between a well-organized Notion board and a 2 a.m. 'what if
              we tried this?' moment.
            </p>
            <p>
              If I'm not iterating on something, I'm probably daydreaming the next thing I'll iterate
              on. Welcome to the rabbit hole.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={20} className="mx-auto mb-2 text-accent" />
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-xs text-text-secondary mt-1 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Button href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Hire Me
            </Button>
            <Button variant="outline" href="/images/resume.pdf" download="Resume_Aayush_Kumar_Singh.pdf">
              Download CV
            </Button>
          </div>
        </AnimatedElement>

        {/* Photo — 2 cols */}
        <AnimatedElement direction="right" delay={0.2} className="md:col-span-2 order-1 md:order-2">
          <div className="relative max-w-xs mx-auto md:max-w-none">
            {/* Decorative offset */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 blur-sm" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              <img
                src="/images/profile.jpg"
                alt="Aayush Kumar Singh"
                className="w-full rounded-2xl object-cover aspect-[3/4] border-2 border-border"
                loading="lazy"
              />
            </motion.div>
          </div>
        </AnimatedElement>
      </div>
    </Section>
  )
}
