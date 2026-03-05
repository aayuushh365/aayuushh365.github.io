export interface SocialLink {
  id: string
  label: string
  url: string
  icon: string
  hoverColor: string
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/aayuushh365',
    icon: 'Github',
    hoverColor: '#f0f0f5',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aayush-singh-027184160/',
    icon: 'Linkedin',
    hoverColor: '#0A66C2',
  },
  {
    id: 'medium',
    label: 'Medium',
    url: 'https://medium.com/@aayushsingh365',
    icon: 'BookOpen',
    hoverColor: '#f0f0f5',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com/@AayushOF',
    icon: 'Youtube',
    hoverColor: '#FF0000',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/_aayushehe_/',
    icon: 'Instagram',
    hoverColor: '#E4405F',
  },
]
