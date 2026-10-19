import React, { useState, useEffect } from 'react'
import { profileData } from '../data/portfolioData'
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Send, 
  Layers, 
  Zap,
  CheckCircle2
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
    const typingSpeed = isDeleting ? 35 : 75

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
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
    setMouseOffset({ x: x * 18, y: -y * 18 })
  }

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 })
  }

  const handleDownloadCV = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#a1a1aa', '#52525b', '#000000']
    })
  }

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Pill - Minimalist Monochrome */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20" />
              <span>{profileData.status}</span>
            </div>

            {/* Greeting & Name - High Contrast Monochrome */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.12] mb-4">
              Xin chào, tôi là{' '}
              <span className="text-zinc-900 dark:text-white underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-8">
                {profileData.name}
              </span>
            </h1>

            {/* Animated Typewriter Subheading */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-lg sm:text-2xl font-mono font-medium text-zinc-700 dark:text-zinc-300 flex items-center">
                <span className="text-zinc-400 dark:text-zinc-500">&gt; </span>
                <span className="text-black dark:text-white font-semibold ml-2">{displayText}</span>
                <span className="w-2 h-5 sm:h-6 bg-black dark:bg-white ml-1 inline-block animate-pulse" />
              </span>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8 font-normal">
              {profileData.shortBio}
            </p>

            {/* Action Buttons - High Contrast Black & White */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white dark:text-black bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 shadow-md shadow-black/10 dark:shadow-white/5 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Xem Dự Án</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-zinc-900 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/80 shadow-sm transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 stroke-[2]" />
                <span>Tải CV Cá Nhân</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center px-5 py-3.5 rounded-xl font-semibold text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <span>Liên hệ ngay</span>
              </a>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                  Kết nối:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors border border-zinc-200 dark:border-zinc-800"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors border border-zinc-200 dark:border-zinc-800"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${profileData.email}`}
                    aria-label="Email Me"
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors border border-zinc-200 dark:border-zinc-800"
                  >
                    <Mail className="w-4 h-4 stroke-[2]" />
                  </a>
                  {profileData.telegram && (
                    <a
                      href={profileData.telegram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Telegram"
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors border border-zinc-200 dark:border-zinc-800"
                    >
                      <Send className="w-4 h-4 stroke-[2]" />
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Monochrome 3D Interactive Card */}
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
              {/* Subtle ambient shadow (No rainbow colors) */}
              <div className="absolute -inset-1 bg-gradient-to-b from-zinc-700/20 to-zinc-900/40 rounded-3xl blur-xl opacity-50" />

              {/* Main 3D Card - Deep Black & White */}
              <div className="relative rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 backdrop-blur-xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 ml-2">
                      developer.config.ts
                    </span>
                  </div>
                </div>

                {/* Code Snippet - High Contrast Technical Typography */}
                <div className="font-mono text-xs sm:text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-1.5 mb-6">
                  <p className="text-zinc-400 dark:text-zinc-500">// Khởi tạo Kỹ sư Phần mềm</p>
                  <p>
                    <span className="text-zinc-500 dark:text-zinc-400 font-bold">const</span>{' '}
                    <span className="text-zinc-900 dark:text-white font-semibold">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-500">name:</span>{' '}
                    <span className="text-zinc-900 dark:text-zinc-100 font-medium">"{profileData.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-500">role:</span>{' '}
                    <span className="text-zinc-900 dark:text-zinc-100 font-medium">"Full-Stack & Mobile"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-500">exp:</span>{' '}
                    <span className="text-zinc-900 dark:text-white font-bold">{profileData.stats.yearsExperience}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-500">loves:</span> [
                    <span className="text-zinc-700 dark:text-zinc-300">"Clean Code"</span>,{' '}
                    <span className="text-zinc-700 dark:text-zinc-300">"Speed"</span>,{' '}
                    <span className="text-zinc-700 dark:text-zinc-300">"UX"</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-500">readyToWork:</span>{' '}
                    <span className="text-emerald-500 font-semibold">true</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Status & Live Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                      <Zap className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Dự án bàn giao</span>
                    </div>
                    <div className="text-2xl font-black text-zinc-900 dark:text-white font-mono">
                      {profileData.stats.projectsCompleted}+
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Năm kinh nghiệm</span>
                    </div>
                    <div className="text-2xl font-black text-zinc-900 dark:text-white font-mono">
                      {profileData.stats.yearsExperience}+ Năm
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-2.5 transform hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500">Architecture</span>
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">Microservices & SSR</span>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-2.5 transform hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500">Chất lượng</span>
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">Pixel-Perfect UI</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
