interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'filled' | 'success'
  className?: string
}

const variants = {
  default: 'border border-border text-text-secondary',
  filled: 'bg-accent/10 text-accent border border-accent/20',
  success: 'bg-success/10 text-success border border-success/20',
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
