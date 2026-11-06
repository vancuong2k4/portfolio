import React, { useState } from 'react'
import { skillsData } from '../data/portfolioData'
import type { SkillCategory, Skill } from '../types'
import { techMap } from './TechIcons'
import { SectionHeader } from './SectionHeader'
import { Code } from 'lucide-react'

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
        <SectionHeader
          badgeNumber="02."
          badgeLabel="SKILLS & TECHNOLOGIES"
          title="Core Technical Stack"
          subtitle="A modern engineering ecosystem optimized for high-performance web & mobile architectures, reliability, and scale."
          className="mb-12 sm:mb-14"
        />

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
                    ? 'text-white bg-black dark:text-black dark:bg-white shadow-xs'
                    : 'text-zinc-700 dark:text-zinc-400 bg-white dark:bg-zinc-900 hover:text-black dark:hover:text-white border border-zinc-300 dark:border-zinc-800 shadow-2xs'
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
            const meta = techMap[skill.iconName] || {
              Icon: Code,
              badgeBg: "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700",
              accentColor: "#FFFFFF"
            }
            const SkillIcon = meta.Icon

            return (
              <div
                key={idx}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-start justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      {/* Brand Icon Badge */}
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center p-2 border border-zinc-200 dark:border-zinc-700/80 bg-zinc-100 dark:bg-zinc-800 shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
                        <SkillIcon className="w-6 h-6 shrink-0" />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-950 dark:text-white text-sm group-hover:text-black dark:group-hover:text-white transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 font-semibold uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {skill.highlight && (
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md border border-zinc-200 dark:border-zinc-700 bg-black text-white dark:bg-white dark:text-black shadow-xs">
                        Core
                      </span>
                    )}
                  </div>

                  {skill.description && (
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 line-clamp-2 mb-4 leading-relaxed font-normal">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Progress Level Bar - High Contrast Monochrome */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                    <span className="text-zinc-600 dark:text-zinc-400 font-semibold">Proficiency</span>
                    <span className="font-black text-zinc-950 dark:text-white">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-black dark:bg-white transition-all duration-700 ease-out"
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
