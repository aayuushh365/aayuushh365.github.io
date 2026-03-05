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
    degree: 'Master of Engineering in Engineering Leadership and Innovation Management',
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
    degree: 'Bachelor of Science in Computer Science and Engineering',
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
    title: 'Management Consultant',
    company: 'Modus Enterprise Transformation Platform',
    duration: 'March 2024 — June 2024',
    description:
      'Led value chain analysis and digital workflow optimization for three client organizations, delivering transformation roadmaps that drove an average 10% revenue increase. Designed SQL-to-Excel KPI dashboards and led end-to-end user journey analysis to reduce expenses by ~20%.',
  },
  {
    id: 'rrcat',
    title: 'Project Trainee, Product Development',
    company: 'Raja Ramanna Centre for Advanced Technology (RRCAT)',
    duration: 'June 2023 — August 2023',
    description:
      'Directed a cross-functional team of four to build a React and Flask data visualization platform, reducing researcher workload by 30% and increasing user satisfaction by 35%. Led stakeholder sessions across five teams, accelerating delivery timelines by 30%.',
  },
  {
    id: 'cojective',
    title: 'Project Associate',
    company: 'Cojective',
    duration: 'February 2022 — August 2022',
    description:
      'Streamlined requirements and client feedback workflows across 10+ client websites, reducing review cycles by 30% and accelerating launches by an average of two weeks. Implemented Scrum with one-week sprints, improving on-time completion by 15%.',
  },
]
