import { motion } from 'framer-motion'
import Badge from '../shared/Badge'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const isFeatured = project.featured

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`group cursor-pointer ${isFeatured ? 'md:col-span-2' : ''}`}
      onClick={onClick}
    >
      <div className="relative h-full bg-bg-secondary rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
        {isFeatured ? (
          /* Featured: horizontal layout */
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative overflow-hidden aspect-video md:aspect-auto">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/60 to-transparent md:bg-gradient-to-r" />
            </div>
            <div className="p-7 md:p-9 flex flex-col justify-center">
              <Badge variant="filled" className="mb-4 self-start">
                {project.subcategory}
              </Badge>
              <h3 className="text-xl font-semibold font-heading text-text-primary mb-4">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Standard: vertical layout */
          <>
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent" />
            </div>
            <div className="p-7">
              <Badge variant="filled" className="mb-4">
                {project.subcategory}
              </Badge>
              <h3 className="text-lg font-semibold font-heading text-text-primary mb-3">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}
