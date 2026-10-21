import React, { useState } from 'react'
import { experiencesData, educationData } from '../data/portfolioData'
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react'

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 mb-3">
            <span>04. EXPERIENCE & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Professional Experience & Education
          </h2>
          <div className="w-12 h-1 bg-zinc-400 dark:bg-zinc-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab switchers */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-sm sm:w-auto">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center justify-center gap-1.5 flex-1 sm:flex-none sm:px-5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'work'
                  ? 'text-white bg-black dark:text-black dark:bg-white shadow-sm'
                  : 'text-zinc-500 hover:text-black dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4 stroke-[2] shrink-0" />
              <span>Work</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center justify-center gap-1.5 flex-1 sm:flex-none sm:px-5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'education'
                  ? 'text-white bg-black dark:text-black dark:bg-white shadow-sm'
                  : 'text-zinc-500 hover:text-black dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4 stroke-[2] shrink-0" />
              <span className="hidden sm:inline">Education &amp; Academic Background</span>
              <span className="sm:hidden">Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        {activeTab === 'work' ? (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-10">
            {experiencesData.map((exp) => (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-black border-4 border-black dark:border-white group-hover:scale-125 transition-transform shadow-sm" />

                {/* Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200">
                  
                  {/* Header info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 mt-1 mb-4">
                    <span className="text-zinc-900 dark:text-white font-bold flex items-center gap-1">
                      {exp.company}
                      {exp.companyUrl && <ExternalLink className="w-3 h-3 inline text-zinc-400" />}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-5">
                    {exp.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-zinc-100 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                    {exp.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-10">
            {educationData.map((edu) => (
              <div key={edu.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-black border-4 border-black dark:border-white group-hover:scale-125 transition-transform shadow-sm" />

                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white mt-1 mb-3">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span className="text-zinc-500 font-normal">{edu.location}</span>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {edu.achievements && (
                    <div className="space-y-2">
                      {edu.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-zinc-100 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
