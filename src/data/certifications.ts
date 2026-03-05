export interface Certification {
  id: string
  name: string
  fullName: string
  issuer: string
  image: string
  verifyUrl: string
}

export const certifications: Certification[] = [
  {
    id: 'capm',
    name: 'CAPM',
    fullName: 'Certified Associate in Project Management',
    issuer: 'Project Management Institute (PMI)',
    image: '/images/capm-badge.png',
    verifyUrl:
      'https://www.credly.com/badges/f6cf1881-f64a-4ab8-82d0-35e6c0f431b6/public_url',
  },
  {
    id: 'lean-sigma',
    name: 'Lean Six Sigma Yellow Belt',
    fullName: 'CPE 1204 Lean-Sigma Process Improvement Yellow Belt',
    issuer: 'Centrestar Academy',
    image: '/images/centrestar-logo.png',
    verifyUrl:
      'https://centrestar.com/index.php?option=com_guru&view=guruOrders&task=printcertificate&opt=1626&cn=CPE%201204%20Lean-Sigma%20Process%20Improvement%20Yellow%20Belt&an=Dr.%20Wesley%20E.%20Donahue,%20PE,%20PMP&cd=2025-02-10&id=1626&ci=64&ct=7360',
  },
  {
    id: 'siemens',
    name: 'Project Manager Simulation',
    fullName: 'Siemens Mobility - Project Manager Job Simulation',
    issuer: 'Forage / Siemens',
    image: '/images/forage-cert.png',
    verifyUrl:
      'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/YtWaumzWHmKiqP63y/zSefEeEKvojiQqiaH_YtWaumzWHmKiqP63y_ifLoAEXLWHHSAQCwf_1740088150452_completion_certificate.pdf',
  },
  {
    id: 'psu-idp',
    name: 'Project Management Series',
    fullName: 'IDP: Project Management Series (PJT-100)',
    issuer: 'Penn State Great Valley',
    image: '/images/penn-state-idp.png',
    verifyUrl:
      'https://drive.google.com/file/d/19RCN7jfzIrTpG3uka3gfPdx1om5SSWCE/view?usp=sharing',
  },
  {
    id: 'google-pm',
    name: 'Foundations of Project Management',
    fullName: 'Foundations of Project Management | Google',
    issuer: 'Coursera / Google',
    image: '/images/foundation-of-pm.png',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/2GN3CY4XW8F0',
  },
  {
    id: 'prompt-eng',
    name: 'Prompt Engineering',
    fullName: 'Prompt Engineering for ChatGPT',
    issuer: 'Coursera / Vanderbilt',
    image: '/images/prompt-engineering.png',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/6HO7ZRUN3UNA',
  },
]
