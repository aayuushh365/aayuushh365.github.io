import { Mail, Phone, MapPin, Github, Linkedin, BookOpen, Youtube, Instagram } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'
import AnimatedElement from '../shared/AnimatedElement'
import ContactForm from './ContactForm'
import { socialLinks } from '../../data/social'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aayushsingh365@gmail.com',
    href: 'mailto:aayushsingh365@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 814 280 2054',
    href: 'tel:+18142802054',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'State College, PA',
    href: undefined,
  },
]

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        label="Contact"
        title="Let's Build Something"
        description="Have a project in mind, a question, or just want to connect? Reach out."
      />

      <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
        {/* Form */}
        <AnimatedElement className="md:col-span-3">
          <ContactForm />
        </AnimatedElement>

        {/* Info */}
        <AnimatedElement direction="right" delay={0.2} className="md:col-span-2">
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wide mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-text-primary hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-text-primary">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs text-text-secondary uppercase tracking-wide mb-4">
              Find me on
            </p>
            <div className="flex flex-wrap gap-3">
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
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all duration-200"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                )
              })}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Section>
  )
}
