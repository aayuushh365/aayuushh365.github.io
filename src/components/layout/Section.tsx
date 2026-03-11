import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

export default function Section({ id, children, className = '', fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={`py-36 md:py-48 border-t border-border/40 ${className}`}>
      {fullWidth ? children : (
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
          {children}
        </div>
      )}
    </section>
  )
}
