export interface Education {
  id: string
  degree: string
  institution: string
  duration: string
  courses: string[]
}

export interface WorkExperience {
  id: string
  title: string
  company: string
  duration: string
  description: string
}

export const education: Education[] = [
  {
    id: 'psu',
    degree: 'Master of Engineering in Leadership and Innovation Management',
    institution: 'Pennsylvania State University',
    duration: 'August 2024 — December 2025',
    courses: [
      'Project Management for Professionals',
      'Introduction to Mathematical Economics',
      'Engineering Leadership for Corporate Innovation',
      'Leadership Principles',
      'Entrepreneurship Business Basics',
      'Engineering Across Cultures and Nations',
      'ELIM Capstone Project',
      'Engineering Product Innovation',
    ],
  },
  {
    id: 'juet',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Jaypee University of Engineering and Technology',
    duration: 'September 2020 — May 2024',
    courses: [
      'Compiler Design',
      'Graph Algorithms And Applications',
      'Computer Organisation And Architecture',
      'Software Engineering',
      'Theory Of Computation',
      'Full Stack Development',
      'Operating Systems',
      'Artificial Intelligence & Applications',
      'Data Structures',
      'Database Systems',
    ],
  },
]

export const workExperience: WorkExperience[] = [
  {
    id: 'modus',
    title: 'Management Consultant Intern',
    company: 'Modus Enterprises and Transformation Platform',
    duration: 'March 2024 — May 2024',
    description:
      'Strategically decoded client inefficiencies at Modus to design leaner value chains and power a 10% revenue boost with insights sharper than a pivot table.',
  },
  {
    id: 'rrcat',
    title: 'Project Trainee',
    company: 'Raja Rammanna Center for Advanced Technology',
    duration: 'June 2023 — August 2023',
    description:
      'Engineered a real-time data visualizer from scratch using React and Flask, doubling performance and turning complex vacuum systems into sleek dashboards of clarity.',
  },
  {
    id: 'cojective',
    title: 'Project Associate (Web)',
    company: 'Cojective',
    duration: 'February 2022 — August 2022',
    description:
      'Led Agile launch of 10+ client websites, streamlining feedback cycles and driving 20% faster, user-aligned deliveries.',
  },
]
