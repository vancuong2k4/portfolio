import React, { useState } from 'react'
import { profileData } from '../data/portfolioData'
import { 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Languages, 
  Award,
  Sparkles,
  Mail,
  User
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false)

  const pillars = [
    {
      icon: Zap,
      title: "High Performance & Speed",
      description: "Optimizing Core Web Vitals, shrinking bundle sizes, and achieving sub-100ms API response times."
    },
    {
      icon: Smartphone,
      title: "Seamless Cross-Platform",
      description: "Delivering consistent, fluid 60 FPS user experiences across Web and Mobile (iOS / Android)."
    },
    {
      icon: ShieldCheck,
      title: "Clean Code & Scalability",
      description: "Applying Clean Architecture, SOLID principles, comprehensive testing, and strict TypeScript types."
    },
    {
      icon: Users,
      title: "Product-Driven Mindset",
      description: "Beyond writing code, prioritizing solving core business problems and creating tangible user value."
    }
  ]

  const statsList = [
    { label: "Years Experience", value: `${profileData.stats.yearsExperience}+`, icon: Briefcase },
    { label: "Projects Completed", value: `${profileData.stats.projectsCompleted}+`, icon: Award },
    { label: "Tech Mastered", value: `${profileData.stats.technologiesMastered}+`, icon: Zap },
    { label: "Annual Commits", value: `${profileData.stats.commitsLastYear.toLocaleString()}+`, icon: Sparkles },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 mb-3">
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            About Me & Engineering Philosophy
          </h2>
          <div className="w-12 h-1 bg-zinc-400 dark:bg-zinc-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Grid: Avatar Profile Card + Bio & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Left Column: Avatar Profile Showcase Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center">
              
              {/* Avatar Frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mb-5 shadow-inner">
                {!imageError && profileData.avatarUrl ? (
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-950 text-zinc-400">
                    <User className="w-20 h-20 stroke-[1.5] mb-2 text-zinc-500" />
                    <span className="font-mono text-xs uppercase font-bold text-zinc-400">
                      {profileData.nickname}
                    </span>
                  </div>
                )}

                {/* Status Dot Overlay */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-black/80 dark:bg-black/90 text-white backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for work</span>
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-1">
                {profileData.name}
              </h3>
              <p className="text-xs font-mono text-zinc-500 mb-4">
                {profileData.role}
              </p>

              {/* Quick Info Tags */}
              <div className="w-full flex flex-wrap justify-center gap-2 mb-5">
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                  📍 Ho Chi Minh City
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                  ⚡ 1+ Years Exp
                </span>
              </div>

              {/* Social Connect Mini-Bar */}
              <div className="w-full pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-center gap-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Email Me"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  <Mail className="w-4 h-4 stroke-[2]" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Paragraphs, Details & Stat Cards */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Bio Narrative */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Software Engineer Passionate About Innovation & Optimization
              </h3>
              {profileData.aboutParagraphs.map((p, idx) => (
                <p key={idx} className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Details Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
                <span><strong>Location:</strong> {profileData.location}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <GraduationCap className="w-4 h-4 text-zinc-500 shrink-0" />
                <span><strong>Education:</strong> Van Hien University</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <Languages className="w-4 h-4 text-zinc-500 shrink-0" />
                <span><strong>Languages:</strong> Vietnamese (Native), English (B1)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <Briefcase className="w-4 h-4 text-zinc-500 shrink-0" />
                <span><strong>Work Model:</strong> Hybrid / Remote</span>
              </div>
            </div>

            {/* 4 Stat Cards in 4-column row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {statsList.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 flex flex-col items-center text-center group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div className="text-2xl font-black text-zinc-900 dark:text-white mb-0.5 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>

        {/* Bottom: 4 Value Pillars */}
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white text-center mb-8">
            Core Values Delivered To Every Project
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1 transition-all duration-200 flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
