import React, { useState } from 'react'
import { projectsData } from '../data/portfolioData'
import type { Project, ProjectCategory } from '../types'
import { ProjectModal } from './ProjectModal'
import { SectionHeader } from './SectionHeader'
import { 
  ExternalLink, 
  ArrowUpRight, 
  Zap, 
  LayoutDashboard, 
  Activity, 
  ShoppingBag, 
  MessageSquare, 
  TrendingUp, 
  Navigation,
  Layers
} from 'lucide-react'
import { GithubIcon } from './SocialIcons'

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Activity,
  ShoppingBag,
  MessageSquare,
  TrendingUp,
  Navigation
}

interface FilterCategory {
  key: ProjectCategory
  label: string
}

const filterCategories: FilterCategory[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'frontend', label: 'Frontend & UI' },
  { key: 'backend', label: 'Backend & AI' },
]

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => {
        if (activeFilter === 'mobile') {
          return p.category === 'mobile' || p.tags.some(t => t.toLowerCase().includes('react native') || t.toLowerCase().includes('mobile'))
        }
        return p.category === activeFilter
      })

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeNumber="03."
          badgeLabel="FEATURED PROJECTS"
          title="Featured Systems & Products"
          subtitle="Full-cycle software engineering solutions emphasizing seamless user experiences, lightning performance, and scalable architecture."
          className="mb-12 sm:mb-14"
        />

        {/* Filter Tabs - Monochrome */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-12 sm:mb-14">
          {filterCategories.map(cat => {
            const isActive = activeFilter === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                  isActive
                    ? 'text-white bg-black dark:text-black dark:bg-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 hover:text-black dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => {
            const IconComponent = iconMap[project.iconName] || Layers

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden"
              >
                {/* Visual Header / Banner - Minimalist Technical Header */}
                <div className="relative h-44 bg-zinc-100 dark:bg-zinc-950 p-6 flex flex-col justify-between border-b border-zinc-200 dark:border-zinc-800">
                  {/* Subtle technical corner accents */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-zinc-200/50 dark:from-zinc-800/50 to-transparent pointer-events-none" />
                  
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-white flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:border-transparent transition-all duration-300">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-black dark:bg-white text-white dark:text-black shadow-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Category */}
                  <div className="relative z-10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug line-clamp-1 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Performance / Impact Pill */}
                    {project.metrics && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-50 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-xs font-mono mb-4 border border-zinc-200 dark:border-zinc-700/60">
                        <Zap className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100 shrink-0 stroke-[2.2]" />
                        <span className="line-clamp-1">{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 4).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white hover:underline cursor-pointer transition-transform"
                    >
                      <span>Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub Repository"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Live Demo"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            )
          })}
        </div>

        {/* Modal for project details */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  )
}
