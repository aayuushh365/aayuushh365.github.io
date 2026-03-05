import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

export default function Section({ id, children, className = '', fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      {fullWidth ? children : (
        <div className="max-w-6xl mx-auto px-6">
          {children}
        </div>
      )}
    </section>
  )
}
