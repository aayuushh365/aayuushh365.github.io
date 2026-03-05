import AnimatedElement from './AnimatedElement'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <AnimatedElement className="mb-20 md:mb-24 text-center">
      <span className="inline-block mb-5 text-xs font-medium tracking-[0.25em] uppercase text-accent font-body">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-text-primary font-heading leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl mx-auto text-text-secondary leading-relaxed text-base">
          {description}
        </p>
      )}
    </AnimatedElement>
  )
}
