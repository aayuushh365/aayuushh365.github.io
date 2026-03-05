import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects, type Project } from '../../data/projects'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Technical', value: 'technical' },
  { label: 'Management', value: 'management' },
  { label: 'Case Studies', value: 'case-study' },
] as const

type FilterValue = (typeof filters)[number]['value']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <Section id="portfolio">
      <SectionHeading
        label="Work"
        title="Projects & Case Studies"
        description="A curated selection of product, technical, and strategic projects."
      />

      {/* Filter bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeFilter === f.value
                ? 'text-white'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {activeFilter === f.value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-accent rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f.label}</span>
          </button>
        ))}
      </div>

      {/* Project grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  )
}
