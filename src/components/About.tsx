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
  Phone,
  User
} from 'lucide-react'
import { GithubIcon, GmailIcon } from './SocialIcons'

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false)

  const pillars = [
    {
      icon: Zap,
      title: "High Performance & Speed",
      description: "Optimizing Core Web Vitals, shrinking bundle sizes, and achieving sub-100ms API response times.",
      colorClass: "text-amber-500 dark:text-amber-400",
      bgClass: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/25",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:border-amber-500/40"
    },
    {
      icon: Smartphone,
      title: "Seamless Cross-Platform",
      description: "Delivering consistent, fluid 60 FPS user experiences across Web and Mobile (iOS / Android).",
      colorClass: "text-sky-500 dark:text-sky-400",
      bgClass: "bg-sky-500/10 dark:bg-sky-500/15 border-sky-500/25",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] group-hover:border-sky-500/40"
    },
    {
      icon: ShieldCheck,
      title: "Clean Code & Scalability",
      description: "Applying Clean Architecture, SOLID principles, comprehensive testing, and strict TypeScript types.",
      colorClass: "text-emerald-500 dark:text-emerald-400",
      bgClass: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/25",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:border-emerald-500/40"
    },
    {
      icon: Users,
      title: "Product-Driven Mindset",
      description: "Beyond writing code, prioritizing solving core business problems and creating tangible user value.",
      colorClass: "text-indigo-500 dark:text-indigo-400",
      bgClass: "bg-indigo-500/10 dark:bg-indigo-500/15 border-indigo-500/25",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] group-hover:border-indigo-500/40"
    }
  ]

  const statsList = [
    { 
      label: "Years Experience", 
      value: `${profileData.stats.yearsExperience}+`, 
      icon: Briefcase,
      colorClass: "text-blue-500 dark:text-blue-400",
      bgClass: "bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/25"
    },
    { 
      label: "Projects Completed", 
      value: `${profileData.stats.projectsCompleted}+`, 
      icon: Award,
      colorClass: "text-amber-500 dark:text-amber-400",
      bgClass: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/25"
    },
    { 
      label: "Tech Mastered", 
      value: `${profileData.stats.technologiesMastered}+`, 
      icon: Zap,
      colorClass: "text-emerald-500 dark:text-emerald-400",
      bgClass: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/25"
    },
    { 
      label: "Annual Commits", 
      value: `${profileData.stats.commitsLastYear.toLocaleString()}+`, 
      icon: Sparkles,
      colorClass: "text-purple-500 dark:text-purple-400",
      bgClass: "bg-purple-500/10 dark:bg-purple-500/15 border-purple-500/25"
    },
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
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center">
              
              {/* Avatar Frame - Responsive sizing */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mb-5 shadow-inner">
                {!imageError && profileData.avatarUrl ? (
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    loading="lazy"
                    decoding="async"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-950 text-zinc-400">
                    <User className="w-16 h-16 sm:w-20 sm:h-20 stroke-[1.5] mb-2 text-zinc-500" />
                    <span className="font-mono text-xs uppercase font-bold text-zinc-400">
                      {profileData.nickname}
                    </span>
                  </div>
                )}

                {/* Status Dot Overlay */}
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-black/85 dark:bg-black/90 text-white backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-md">
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
              <div className="w-full flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                  📍 Ho Chi Minh City
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                  ⚡ 1+ Years Exp
                </span>
              </div>

              {/* Direct Contact Info (Phone & Gmail) */}
              <div className="w-full p-3 mb-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 space-y-2 text-xs font-mono text-left">
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black dark:group-hover:text-white shrink-0 transition-colors" />
                  <span className="font-semibold">{profileData.phone}</span>
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors group"
                >
                  <GmailIcon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black dark:group-hover:text-white shrink-0 transition-colors" />
                  <span className="truncate font-semibold">{profileData.email}</span>
                </a>
              </div>

              {/* Social Connect Mini-Bar */}
              <div className="w-full pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-center gap-2.5">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${profileData.phone}`}
                  aria-label="Call Phone"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  title={`Call: ${profileData.phone}`}
                >
                  <Phone className="w-4 h-4 stroke-[2]" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Email Me"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  title={`Gmail: ${profileData.email}`}
                >
                  <GmailIcon className="w-4 h-4" />
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
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/40 transition-colors group">
                <MapPin className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform shrink-0" />
                <span><strong>Location:</strong> {profileData.location}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/40 transition-colors group">
                <GraduationCap className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform shrink-0" />
                <span><strong>Education:</strong> Van Hien University (VHU)</span>
              </div>
              <a
                href={`tel:${profileData.phone}`}
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform shrink-0" />
                <span><strong>Phone:</strong> <span className="font-mono text-zinc-900 dark:text-white font-semibold">{profileData.phone}</span></span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/50 hover:bg-red-500/5 transition-all group cursor-pointer"
              >
                <GmailIcon className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform shrink-0" />
                <span className="truncate"><strong>Email:</strong> <span className="font-mono text-zinc-900 dark:text-white font-semibold">{profileData.email}</span></span>
              </a>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-violet-500/40 transition-colors group">
                <Languages className="w-4 h-4 text-violet-500 group-hover:scale-110 transition-transform shrink-0" />
                <span><strong>Languages:</strong> Vietnamese (Native), English (B1)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/40 transition-colors group">
                <Briefcase className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform shrink-0" />
                <span><strong>Work Model:</strong> Hybrid / Remote</span>
              </div>
            </div>

            {/* 4 Stat Cards in 4-column row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              {statsList.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center group"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform ${stat.bgClass}`}>
                      <Icon className={`w-4 h-4 stroke-[2.2] ${stat.colorClass}`} />
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white mb-0.5 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
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
                  className={`group p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:-translate-y-1.5 transition-all duration-300 flex flex-col ${pillar.glowClass}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-xs transition-transform duration-300 group-hover:scale-110 ${pillar.bgClass}`}>
                    <Icon className={`w-6 h-6 stroke-[2.2] ${pillar.colorClass}`} />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
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
