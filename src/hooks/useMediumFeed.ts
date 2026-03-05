import { useState, useEffect } from 'react'

export interface BlogPost {
  title: string
  link: string
  pubDate: string
  description: string
}

const FEED_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aayushsingh365'

export function useMediumFeed(limit = 6) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const cached = sessionStorage.getItem('medium-feed')
    if (cached) {
      setPosts(JSON.parse(cached))
      setLoading(false)
      return
    }

    fetch(FEED_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'ok') {
          const items: BlogPost[] = data.items.slice(0, limit).map(
            (item: { title: string; link: string; pubDate: string; description: string }) => ({
              title: item.title,
              link: item.link,
              pubDate: item.pubDate,
              description: stripHtml(item.description).split(' ').slice(0, 20).join(' ') + '...',
            })
          )
          setPosts(items)
          sessionStorage.setItem('medium-feed', JSON.stringify(items))
        } else {
          setError('Failed to load blog posts')
        }
      })
      .catch(() => setError('Failed to load blog posts'))
      .finally(() => setLoading(false))
  }, [limit])

  return { posts, loading, error }
}

function stripHtml(html: string): string {
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}
