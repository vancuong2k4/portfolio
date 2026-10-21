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
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'backend', label: 'Backend & APIs' },
  { key: 'database', label: 'Databases' },
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 mb-3">
            <span>02. SKILLS & TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Core Technical Stack
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base max-w-xl mx-auto">
            A modern engineering ecosystem optimized for high-performance web & mobile architectures, reliability, and scale.
          </p>
          <div className="w-12 h-1 bg-zinc-400 dark:bg-zinc-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Categories - Monochrome Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-12">
          {categories.map(cat => {
            const isActive = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill: Skill, idx: number) => {
            const IconComponent = iconMap[skill.iconName] || Code
            return (
              <div
                key={idx}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComponent className="w-4 h-4 stroke-[2]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-900 dark:text-white text-sm">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {skill.highlight && (
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700">
                        Core
                      </span>
                    )}
                  </div>

                  {skill.description && (
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Progress Level Bar - Minimalist Line */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                    <span className="text-zinc-500">Proficiency</span>
                    <span className="text-zinc-900 dark:text-white font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-zinc-900 dark:bg-white transition-all duration-500"
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
