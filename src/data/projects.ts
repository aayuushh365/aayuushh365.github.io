export interface Project {
  id: string
  title: string
  category: 'technical' | 'management' | 'case-study'
  subcategory: string
  description: string
  image: string
  links: {
    live?: string
    github?: string
    documentation?: string
    caseStudy?: string
  }
  featured: boolean
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'sprintsense',
    title: 'SprintSense: The Agile Dashboard',
    category: 'technical',
    subcategory: 'Product Innovation & Management',
    description: 'An intelligent agile dashboard that provides real-time sprint analytics, team velocity tracking, and predictive insights for product managers and scrum masters.',
    image: '/images/sprintsense-logo.png',
    links: {
      live: 'https://sprintsense.streamlit.app/Overview',
      documentation: 'https://www.notion.so/Product-Requirement-Doc-PRD-v0-1-27ea000f28da800e8822d11a74d68331?source=copy_link',
    },
    featured: true,
    tags: ['Streamlit', 'Python', 'Agile', 'Dashboard'],
  },
  {
    id: 'webscraping-yc',
    title: 'Webscraping Ycombinator',
    category: 'technical',
    subcategory: 'Web Development',
    description: 'A web scraping tool built to extract and analyze startup data from Y Combinator listings, enabling market research and trend analysis.',
    image: '/images/webscrape.png',
    links: {
      github: 'https://github.com/aayuushh365/webscrap',
    },
    featured: false,
    tags: ['Python', 'Web Scraping', 'Data'],
  },
  {
    id: 'uber-analysis',
    title: 'Uber Trip Data Analysis',
    category: 'technical',
    subcategory: 'Data Analysis',
    description: 'Comprehensive analysis of Uber trip data to uncover patterns in ride frequency, peak hours, and geographic demand distribution.',
    image: '/images/uberanalysis.png',
    links: {
      github: 'https://github.com/aayuushh365/Uber_analysis',
    },
    featured: false,
    tags: ['Python', 'Data Analysis', 'Visualization'],
  },
  {
    id: 'aegis-voting',
    title: 'Aegis Voting System',
    category: 'technical',
    subcategory: 'Blockchain',
    description: 'A blockchain-based voting system ensuring transparent, tamper-proof elections with decentralized verification and audit trails.',
    image: '/images/aegisvoting.png',
    links: {
      github: 'https://github.com/Amanuttam1192/Aegis-Voting-System',
    },
    featured: false,
    tags: ['Blockchain', 'Security', 'Web3'],
  },
  {
    id: 'modgenix',
    title: 'ModGenix (AI Interviewer)',
    category: 'technical',
    subcategory: 'AI/ML',
    description: 'An AI-powered interview simulation platform that generates dynamic questions, evaluates responses, and provides actionable feedback.',
    image: '/images/modgenix.png',
    links: {
      github: 'https://github.com/Amanuttam1192/ModGenix-1',
    },
    featured: false,
    tags: ['AI/ML', 'NLP', 'Python'],
  },
  {
    id: 'baggage-buddy',
    title: 'Baggage Buddy (ACRP Design Challenge)',
    category: 'management',
    subcategory: 'Product Innovation & Management',
    description: 'A product concept designed for the ACRP Design Challenge to solve airport baggage tracking pain points through real-time tracking and smart notifications.',
    image: '/images/baggagebuddy.png',
    links: {
      caseStudy: 'https://dust-popcorn-2e9.notion.site/ACRP-Design-Challenge-Case-Study-1eda000f28da81c3aa68da2ab06214ef?pvs=4',
    },
    featured: true,
    tags: ['Product Design', 'UX Research', 'Aviation'],
  },
  {
    id: 'agrisave',
    title: 'AgriSave',
    category: 'management',
    subcategory: 'Product Innovation & Management',
    description: 'A platform connecting farmers with sustainable resources and financial tools to optimize agricultural operations and reduce waste.',
    image: '/images/agrisave.png',
    links: {
      live: 'https://agri-save-git-main-jomar-thomas-almontes-projects.vercel.app/',
      documentation: 'https://www.linkedin.com/in/aayush-singh-027184160/overlay/projects/1178747039/multiple-media-viewer/?profileId=ACoAACZ37x8BG54dhKECvMpU3VHTBzrFS4Vf3gk&treasuryMediaId=1734198051767',
    },
    featured: true,
    tags: ['Vercel', 'Product Strategy', 'AgriTech'],
  },
  {
    id: 'stone-valley',
    title: 'Stone Valley Boardwalk Trail Project',
    category: 'management',
    subcategory: 'Project Management',
    description: 'Led the project management lifecycle for a boardwalk trail replacement, from stakeholder alignment through execution and delivery.',
    image: '/images/stone-valley.png',
    links: {
      caseStudy: 'https://medium.com/@aayushsingh365/stone-valley-boardwalk-trail-replacement-b83718ce77fb',
    },
    featured: false,
    tags: ['Project Management', 'Stakeholders', 'Planning'],
  },
  {
    id: 'walmart-analysis',
    title: 'Walmart Strategic Analysis: A Case Study',
    category: 'case-study',
    subcategory: 'Case Study',
    description: 'A strategic product leadership analysis of Walmart, examining competitive positioning, supply chain innovation, and digital transformation.',
    image: '/images/walmart-analysis.png',
    links: {
      caseStudy: 'https://aayushsingh365.medium.com/walmart-strategic-analysis-through-a-product-leadership-lens-a5b1bcd6d020',
    },
    featured: false,
    tags: ['Strategy', 'Retail', 'Product Leadership'],
  },
  {
    id: 'linkedin-ghost-jobs',
    title: 'Addressing Ghost Job Listings on LinkedIn',
    category: 'case-study',
    subcategory: 'Product Case Study',
    description: 'A product case study proposing solutions to the ghost job listing problem on LinkedIn, with user research and feature recommendations.',
    image: '/images/linkedin-ghost-jobs.png',
    links: {
      caseStudy: 'https://www.canva.com/design/DAGp062Gqws/QfLBTpBPgne-GHdLP0qpBQ/view?utm_content=DAGp062Gqws&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc2d14f5ceb',
    },
    featured: false,
    tags: ['Product Strategy', 'UX Research', 'LinkedIn'],
  },
]
