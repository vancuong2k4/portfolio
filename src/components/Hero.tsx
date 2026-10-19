import React, { useState, useEffect } from 'react'
import { profileData } from '../data/portfolioData'
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Send, 
  CheckCircle2, 
  Code2, 
  Smartphone, 
  Layers, 
  Zap,
  Flame
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import confetti from 'canvas-confetti'

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })

  // Typewriter effect
  useEffect(() => {
    const currentTitle = profileData.titles[titleIndex]
    const typingSpeed = isDeleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1800)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % profileData.titles.length)
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        )
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, titleIndex])

  // Mouse tilt for 3D card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMouseOffset({ x: x * 20, y: -y * 20 })
  }

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 })
  }

  const handleDownloadCV = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    })
  }

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              <span>{profileData.status}</span>
            </div>

            {/* Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Xin chào, tôi là{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>

            {/* Animated Typewriter Subheading */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 font-mono flex items-center">
                <span>&gt; </span>
                <span className="text-indigo-600 dark:text-indigo-400 ml-2">{displayText}</span>
                <span className="w-2.5 h-6 sm:h-7 bg-indigo-500 ml-1 inline-block animate-bounce" />
              </span>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
              {profileData.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Xem Dự Án</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-indigo-500" />
                <span>Tải CV Cá Nhân</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span>Liên hệ ngay</span>
              </a>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Kết nối:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${profileData.email}`}
                    aria-label="Email Me"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-rose-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  {profileData.telegram && (
                    <a
                      href={profileData.telegram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Telegram"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Quick Tech Badges */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                  React 19 & Next.js
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-500" />
                  React Native
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Creative 3D Interactive Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${mouseOffset.y}deg) rotateY(${mouseOffset.x}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-md cursor-pointer select-none"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />

              {/* Main 3D Card */}
              <div className="relative rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xl p-6 backdrop-blur-xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                      developer.config.ts
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 font-medium">
                    v2026.1
                  </span>
                </div>

                {/* Code Snippet */}
                <div className="font-mono text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 space-y-1.5 mb-6">
                  <p className="text-slate-400">// Khởi tạo Kỹ sư Phần mềm</p>
                  <p>
                    <span className="text-pink-600 dark:text-pink-400">const</span>{' '}
                    <span className="text-indigo-600 dark:text-indigo-400">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">name:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"{profileData.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">role:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Full-Stack & Mobile"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">exp:</span>{' '}
                    <span className="text-amber-600 dark:text-amber-400">{profileData.stats.yearsExperience}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">loves:</span> [
                    <span className="text-emerald-600 dark:text-emerald-400">"Clean Code"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Speed"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"UX"</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">readyToWork:</span>{' '}
                    <span className="text-blue-500">true</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Interactive Status & Live Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>Dự án bàn giao</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      {profileData.stats.projectsCompleted}+
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <Flame className="w-3.5 h-3.5 text-rose-500" />
                      <span>Năm kinh nghiệm</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      {profileData.stats.yearsExperience}+ Năm
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Interactive Badge 1: Top Right */}
              <div className="absolute -top-5 -right-5 px-3 py-2 rounded-xl bg-white/95 dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-2 transform hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400">Architecture</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Microservices & SSR</span>
                </div>
              </div>

              {/* Floating Interactive Badge 2: Bottom Left */}
              <div className="absolute -bottom-5 -left-5 px-3 py-2 rounded-xl bg-white/95 dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-2 transform hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400">Chất lượng</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Pixel-Perfect UI</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
