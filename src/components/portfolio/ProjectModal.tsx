import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, ExternalLink, Github, FileText, BookOpen } from 'lucide-react'
import Badge from '../shared/Badge'
import Button from '../shared/Button'
import type { Project } from '../../data/projects'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  const linkEntries = Object.entries(project.links).filter(
    (entry): entry is [string, string] => entry[1] !== undefined
  )

  const linkConfig: Record<string, { label: string; icon: typeof ExternalLink }> = {
    live: { label: 'Live Demo', icon: ExternalLink },
    github: { label: 'GitHub', icon: Github },
    documentation: { label: 'Documentation', icon: FileText },
    caseStudy: { label: 'Case Study', icon: BookOpen },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative z-10 bg-bg-secondary rounded-2xl border border-border max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-bg-tertiary/80 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 -mt-12 relative">
          <Badge variant="filled" className="mb-4">
            {project.subcategory}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
            {project.title}
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {/* Links */}
          {linkEntries.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
              {linkEntries.map(([key, url]) => {
                const config = linkConfig[key] || { label: key, icon: ExternalLink }
                const Icon = config.icon
                return (
                  <Button
                    key={key}
                    variant={key === 'live' || key === 'caseStudy' ? 'primary' : 'outline'}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={16} />
                    {config.label}
                  </Button>
                )
              })}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
