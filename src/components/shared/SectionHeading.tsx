import AnimatedElement from './AnimatedElement'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <AnimatedElement className="mb-16 text-center">
      <span className="inline-block mb-4 text-xs font-medium tracking-[0.2em] uppercase text-accent font-body">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-text-primary font-heading">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl mx-auto text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </AnimatedElement>
  )
}
