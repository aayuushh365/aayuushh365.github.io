import { ExternalLink } from 'lucide-react'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'
import AnimatedElement from '../shared/AnimatedElement'
import { useMediumFeed } from '../../hooks/useMediumFeed'

function SkeletonCard() {
  return (
    <div className="bg-bg-secondary rounded-xl p-6 border border-border min-w-[300px] animate-pulse">
      <div className="h-3 w-20 bg-bg-tertiary rounded mb-4" />
      <div className="h-5 w-full bg-bg-tertiary rounded mb-2" />
      <div className="h-5 w-3/4 bg-bg-tertiary rounded mb-4" />
      <div className="h-3 w-full bg-bg-tertiary rounded mb-1" />
      <div className="h-3 w-2/3 bg-bg-tertiary rounded" />
    </div>
  )
}

export default function Blog() {
  const { posts, loading, error } = useMediumFeed()

  return (
    <Section id="blog">
      <SectionHeading
        label="Blog"
        title="Writing & Thoughts"
        description="I write about product strategy, engineering leadership, and building things people love."
      />

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {error && (
        <p className="text-center text-text-secondary">
          {error}.{' '}
          <a
            href="https://medium.com/@aayushsingh365"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            Visit my Medium profile
          </a>
        </p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedElement key={post.link} delay={i * 0.05}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-bg-secondary rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <time className="text-xs font-medium tracking-wide text-text-secondary">
                  {new Date(post.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="text-base font-semibold font-heading text-text-primary mt-3 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-accent font-medium group-hover:gap-2 transition-all">
                  Read on Medium <ExternalLink size={12} />
                </span>
              </a>
            </AnimatedElement>
          ))}
        </div>
      )}

      <AnimatedElement className="text-center mt-12">
        <a
          href="https://medium.com/@aayushsingh365"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
        >
          View all posts on Medium <ExternalLink size={14} />
        </a>
      </AnimatedElement>
    </Section>
  )
}
