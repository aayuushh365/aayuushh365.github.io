import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, FolderOpen, Award } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'
import Button from '../shared/Button'
import AnimatedElement from '../shared/AnimatedElement'

const stats = [
  { icon: Briefcase, value: 1, suffix: '+', label: 'Year Experience' },
  { icon: FolderOpen, value: 10, suffix: '', label: 'Projects Shipped' },
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
      <SectionHeading label="About" title="Turning Ambiguity into Execution." />

      <div className="grid md:grid-cols-5 gap-16 md:gap-20 items-start">
        {/* Text — 3 cols */}
        <AnimatedElement className="md:col-span-3 order-2 md:order-1">
          <div className="space-y-6 text-text-secondary leading-[1.85] text-[15px]">
            <p>
              I didn't have a single "product moment" where fireworks went off.
              My interest started earlier, helping my father coordinate a school
              event and seeing how messy goals only become real when someone
              turns them into a plan. Budgets, vendors, schedules, and last-minute
              changes all moved at once. I stepped in, learned quickly, and helped
              align the pieces. That experience sparked something: I enjoy turning
              ambiguity into execution.
            </p>
            <p>
              Today, as a CAPM&reg; certified professional and Engineering
              Leadership &amp; Innovation Management graduate, I work at the
              intersection of technology, data, and delivery. At Modus Enterprise
              Transformation Platform, I operated at the business&ndash;delivery bridge,
              analyzing value chains, translating transformation goals into BRDs
              and user stories, and refining acceptance criteria within an Agile
              team.
            </p>
            <p>
              When requirements expanded beyond sprint capacity, I mapped
              requests back to business outcomes, narrowed scope to a core
              workflow, and wrote developer-ready user stories with clear edge
              cases. This eliminated 4&ndash;5 revision cycles, reduced delivery churn,
              and kept execution tied to measurable impact. Throughout my
              roles, I have increased client revenue by 10% through value chain
              optimization, reduced reporting workload by 25% via KPI dashboards,
              and accelerated delivery timelines by 20&ndash;30% by improving
              requirements clarity and stakeholder alignment. My biggest takeaway:
              clarity beats hustle. Teams move faster when ambiguity is removed
              early. I focus on defining success upfront, shaping small shippable
              slices, and making trade-offs explicit before execution begins.
            </p>
            <p>
              I combine project discipline with hands-on skills in Python, SQL,
              React, Flask, and data visualization to move from strategy to
              execution. I'm exploring opportunities in Product Management,
              Business Analysis, Product Operations, and Agile Delivery. If
              you're building products that require structured thinking and strong
              stakeholder alignment, I'd love to connect!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={20} className="mx-auto mb-3 text-accent" />
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-xs text-text-secondary mt-2 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5 mt-14">
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
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 blur-sm" />
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
