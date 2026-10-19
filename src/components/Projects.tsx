import React, { useState } from 'react'
import { projectsData } from '../data/portfolioData'
import type { Project, ProjectCategory } from '../types'
import { ProjectModal } from './ProjectModal'
import { 
  Sparkles, 
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
  { key: 'all', label: 'Tất Cả' },
  { key: 'fullstack', label: 'Full-Stack SaaS' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'frontend', label: 'Frontend & UI' },
  { key: 'backend', label: 'Backend & APIs' },
]

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SẢN PHẨM & DỰ ÁN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Các Dự Án Tiêu Biểu Đã Triển Khai
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
            Khám phá các sản phẩm thực tế từ giải pháp SaaS đa người dùng, ứng dụng di động cho tới hệ thống microservices chịu tải cao.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterCategories.map(cat => {
            const isActive = activeFilter === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-500/25 scale-105'
                    : 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => {
            const IconComponent = iconMap[project.iconName] || Layers
            return (
              <div
                key={project.id}
                className="group rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Visual Header / Banner */}
                <div className={`relative h-48 bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between text-white overflow-hidden`}>
                  {/* Backdrop mesh/glow */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                  
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {project.featured && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                        Nổi bật
                      </span>
                    )}
                  </div>

                  {/* Bottom Metrics */}
                  <div className="relative z-10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-white leading-snug line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Performance / Impact Pill */}
                    {project.metrics && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4 border border-emerald-500/20">
                        <Zap className="w-3.5 h-3.5" />
                        <span className="line-clamp-1">{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 4).map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer group-hover:translate-x-1 transition-transform"
                    >
                      <span>Chi tiết dự án</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub Repository"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
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
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
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
