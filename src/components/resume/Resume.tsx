import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Building2, ChevronDown } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'
import AnimatedElement from '../shared/AnimatedElement'
import Badge from '../shared/Badge'
import { education, workExperience } from '../../data/experience'

function EducationCard({ item, index }: { item: typeof education[0]; index: number }) {
  const [showCourses, setShowCourses] = useState(false)

  return (
    <AnimatedElement delay={index * 0.1} direction="left">
      <div className="relative pl-8 pb-12 last:pb-0">
        {/* Timeline dot */}
        <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-accent bg-bg-primary z-10" />
        {/* Connector line */}
        {index < education.length - 1 && (
          <div className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-border" />
        )}

        <div className="bg-bg-secondary rounded-xl p-6 border border-border hover:border-accent/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap size={16} className="text-accent" />
            <span className="text-xs font-medium tracking-[0.1em] uppercase text-accent font-heading">
              {item.duration}
            </span>
          </div>
          <h3 className="text-lg font-semibold font-heading text-text-primary mb-1">
            {item.degree}
          </h3>
          <p className="text-text-secondary text-sm mb-4">{item.institution}</p>

          <button
            onClick={() => setShowCourses(!showCourses)}
            className="flex items-center gap-1 text-xs text-accent hover:text-accent-hover transition-colors cursor-pointer"
          >
            <span>{showCourses ? 'Hide' : 'Show'} Courses</span>
            <motion.div animate={{ rotate: showCourses ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} />
            </motion.div>
          </button>

          <motion.div
            initial={false}
            animate={{ height: showCourses ? 'auto' : 0, opacity: showCourses ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border">
              {item.courses.map((course) => (
                <Badge key={course}>{course}</Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedElement>
  )
}

function ExperienceCard({ item, index }: { item: typeof workExperience[0]; index: number }) {
  return (
    <AnimatedElement delay={index * 0.1} direction="right">
      <div className="relative pl-8 pb-12 last:pb-0">
        {/* Timeline dot */}
        <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-accent bg-bg-primary z-10" />
        {/* Connector line */}
        {index < workExperience.length - 1 && (
          <div className="absolute left-[7px] top-5 bottom-0 w-[2px] bg-border" />
        )}

        <div className="bg-bg-secondary rounded-xl p-6 border border-border hover:border-accent/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <Building2 size={16} className="text-accent" />
            <span className="text-xs font-medium tracking-[0.1em] uppercase text-accent font-heading">
              {item.duration}
            </span>
          </div>
          <h3 className="text-lg font-semibold font-heading text-text-primary mb-1">
            {item.title}
          </h3>
          <p className="text-text-secondary text-sm mb-3">{item.company}</p>
          <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </AnimatedElement>
  )
}

export default function Resume() {
  return (
    <Section id="resume">
      <SectionHeading label="Experience" title="Education & Career" />

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Education */}
        <div>
          <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-text-secondary mb-8 flex items-center gap-2">
            <GraduationCap size={16} />
            Education
          </h3>
          {education.map((item, i) => (
            <EducationCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-text-secondary mb-8 flex items-center gap-2">
            <Building2 size={16} />
            Work Experience
          </h3>
          {workExperience.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </Section>
  )
}
