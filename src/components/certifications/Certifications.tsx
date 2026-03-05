import { ShieldCheck } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'
import AnimatedElement from '../shared/AnimatedElement'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading label="Credentials" title="Certifications" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <AnimatedElement key={cert.id} delay={i * 0.05}>
            <div className="bg-bg-secondary rounded-xl p-7 border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 border-2 border-border overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold font-heading text-text-primary leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                {cert.fullName}
              </p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors mt-auto"
              >
                <ShieldCheck size={14} />
                Verify Credential
              </a>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  )
}
