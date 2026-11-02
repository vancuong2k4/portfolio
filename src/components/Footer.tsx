import React, { useState, useEffect } from 'react'
import { profileData } from '../data/portfolioData'
import { 
  ArrowUp, 
  Terminal, 
  Phone, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Send,
  Code2
} from 'lucide-react'
import { GithubIcon, GmailIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const [timeString, setTimeString] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Ho_Chi_Minh',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date())
        setTimeString(formatted)
      } catch {
        setTimeString('')
      }
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#09090b] pt-16 pb-12 overflow-hidden transition-colors duration-300">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-48 bg-gradient-to-t from-zinc-200/40 dark:from-zinc-800/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-footer Call to Action Card */}
        <div className="relative overflow-hidden mb-16 p-8 sm:p-12 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          {/* Subtle accent corner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Full-time Roles & High-Impact Projects</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                Ready to build something extraordinary?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                Whether you need a dedicated Software Engineer or want to build a modern, high-performance web or mobile solution, my inbox is always open.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 stroke-[2.2]" />
                <span>Get In Touch</span>
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-zinc-200 dark:border-zinc-800/80">
          
          {/* Brand & Live Local Time (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold shadow-xs">
                <Terminal className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-black text-base tracking-tight text-zinc-900 dark:text-white block">
                  {profileData.name}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                  {profileData.role}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Engineering clean-code architectures, resilient backend services, and pixel-perfect web & mobile applications.
            </p>

            {/* Live Location & Local Time Widget */}
            <div className="inline-flex flex-wrap items-center gap-2.5 p-2.5 sm:px-3 sm:py-2 rounded-xl bg-zinc-100/80 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>Ho Chi Minh City, VN</span>
              </div>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>{timeString ? `${timeString} (GMT+7)` : 'GMT+7 (ICT)'}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Sitemap Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Sitemap
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <li>
                <a href="#home" className="hover:text-black dark:hover:text-white transition-colors">00. Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">01. About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">02. Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">03. Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">04. Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">05. Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Works (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Featured Works
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <li>
                <a
                  href="https://github.com/vancuong2k4/Smart-Classroom-Management-System"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">Smart Classroom</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vancuong2k4/TVC-Shop"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">TVC-Shop (E-Commerce)</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vancuong2k4/eduRAG"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">eduRAG (AI Engine)</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://vancuong2k4.github.io/DatAnHomestay/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">DatAn Homestay</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://vancuong2k4.github.io/travel-ngocdieu/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">Ngoc Dieu Travel</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Channels & Direct (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Connect
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <GmailIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>Gmail</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.phone}`}
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>Call / Phone</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tech Details & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>© {currentYear} {profileData.name} ({profileData.nickname}). All rights reserved.</span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-zinc-400 dark:text-zinc-600 inline-flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5" />
              <span>React 19 • TypeScript • Tailwind CSS • Vite</span>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all cursor-pointer shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.2] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  )
}
