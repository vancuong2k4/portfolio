import React, { useState } from 'react'
import { skillsData } from '../data/portfolioData'
import type { SkillCategory, Skill } from '../types'
import {
  Code,
  Globe,
  Layers,
  Sparkles,
  Smartphone,
  Server,
  ShieldCheck,
  Terminal,
  Network,
  Radio,
  Database,
  Flame,
  CloudSun,
  Box,
  GitBranch,
  Cloud,
  Palette,
  FileCode,
  Cpu,
  Zap,
  FolderGit2
} from 'lucide-react'

// Icon mapping dictionary
const iconMap: Record<string, React.ElementType> = {
  Atom: Code,
  Globe,
  FileCode,
  Palette,
  Layers,
  Sparkles,
  Smartphone,
  Zap,
  Cpu,
  Server,
  ShieldCheck,
  Terminal,
  Network,
  Radio,
  Database,
  FolderGit2,
  Flame,
  CloudSun,
  Box,
  GitBranch,
  Cloud
}

interface CategoryOption {
  key: SkillCategory
  label: string
}

const categories: CategoryOption[] = [
  { key: 'all', label: 'Tất Cả' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'mobile', label: 'Mobile App' },
  { key: 'backend', label: 'Backend & APIs' },
  { key: 'database', label: 'Cơ Sở Dữ Liệu' },
  { key: 'devops', label: 'DevOps & Cloud' },
]

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all')

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NĂNG LỰC CHUYÊN MÔN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kỹ Năng & Công Nghệ Thực Chiến
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
            Bộ công cụ và công nghệ tôi sử dụng hàng ngày để xây dựng các giải pháp Web & Mobile chịu tải cao, mượt mà và an toàn.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(cat => {
            const isActive = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill: Skill, idx: number) => {
            const IconComponent = iconMap[skill.iconName] || Code
            return (
              <div
                key={idx}
                className="group relative p-5 rounded-2xl bg-white/80 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {skill.highlight && (
                      <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        Chủ lực
                      </span>
                    )}
                  </div>

                  {skill.description && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Progress Level Bar */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                    <span className="text-slate-500 dark:text-slate-400">Độ thành thạo</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
