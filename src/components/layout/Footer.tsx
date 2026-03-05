import { Github, Linkedin, BookOpen, Youtube, Instagram } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { socialLinks } from '../../data/social'

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Social links */}
          <div className="flex gap-5">
            {socialLinks.map((link) => {
              const iconMap: Record<string, LucideIcon> = { Github, Linkedin, BookOpen, Youtube, Instagram }
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all duration-200"
                >
                  {Icon && <Icon size={15} />}
                </a>
              )
            })}
          </div>

          <p className="text-sm text-text-secondary">
            Designed & Built by Aayush Kumar Singh
          </p>

          <p className="text-xs text-text-secondary/60">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
