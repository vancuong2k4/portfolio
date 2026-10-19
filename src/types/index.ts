export interface Profile {
  name: string
  nickname: string
  role: string
  titles: string[]
  shortBio: string
  aboutParagraphs: string[]
  status: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  telegram?: string
  cvUrl: string
  stats: {
    yearsExperience: number
    projectsCompleted: number
    technologiesMastered: number
    commitsLastYear: number
  }
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'mobile' | 'database' | 'devops'

export interface Skill {
  name: string
  category: SkillCategory
  iconName: string
  level: number // 1 to 100
  highlight?: boolean
  description?: string
}

export type ProjectCategory = 'all' | 'fullstack' | 'mobile' | 'frontend' | 'backend'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  subtitle: string
  description: string
  fullDescription: string
  tags: string[]
  metrics?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  gradient: string
  iconName: string
  features: string[]
  architecture?: string[]
}

export interface Experience {
  id: string
  period: string
  role: string
  company: string
  companyUrl?: string
  location: string
  type: string // Full-time, Freelance, etc.
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  id: string
  period: string
  degree: string
  institution: string
  location: string
  description: string
  achievements?: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatarGradient: string
  content: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  badgeText: string
  verifyUrl?: string
}
