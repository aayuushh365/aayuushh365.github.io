import { useState } from 'react'
import { ExternalLink, CreditCard } from 'lucide-react'
import AnimatedElement from '../shared/AnimatedElement'

export default function DinqCard() {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <AnimatedElement delay={0.1}>
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <CreditCard size={16} className="text-accent" />
          </div>
          <div>
            <p className="text-xs text-text-secondary uppercase tracking-widest">Digital Business Card</p>
            <h3 className="text-sm font-semibold text-text-primary font-heading">My Dinq Card</h3>
          </div>
          <a
            href="https://dinq.me/aayush"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Open full card
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-border bg-bg-secondary shadow-lg"
          style={{ height: '520px' }}
        >
          {/* Loading skeleton */}
          {!loaded && !failed && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-bg-secondary">
              <div className="w-12 h-12 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
              <p className="text-sm text-text-secondary">Loading card…</p>
            </div>
          )}

          {/* Fallback if iframe is blocked */}
          {failed && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <CreditCard size={26} className="text-accent" />
              </div>
              <div>
                <p className="text-base font-semibold text-text-primary mb-1">Aayush Kumar Singh</p>
                <p className="text-sm text-text-secondary mb-1">Management Consultant · PM · Builder</p>
                <p className="text-xs text-text-secondary">New York, NY</p>
              </div>
              <a
                href="https://dinq.me/aayush"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                View Dinq Card
                <ExternalLink size={13} />
              </a>
            </div>
          )}

          <iframe
            src="https://dinq.me/aayush"
            title="Aayush Kumar Singh — Dinq Card"
            className={`w-full h-full border-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => { setFailed(true); setLoaded(false) }}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
      </div>
    </AnimatedElement>
  )
}
