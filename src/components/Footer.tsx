import React, { useState, useEffect } from 'react'
import { profileData } from '../data/portfolioData'
import { ArrowUp, Phone, Clock } from 'lucide-react'
import { GithubIcon, GmailIcon } from './SocialIcons'

const CURRENT_YEAR = new Date().getFullYear()

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

  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          
          {/* Brand & Live Local Time */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div 
                className="relative w-8 h-8 rounded-lg overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shrink-0 select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src="/logo.png"
                  alt="vancuong2k4 logo"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="lazy"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none',
                  }}
                />
                {/* Transparent protection shield */}
                <div 
                  className="absolute inset-0 select-none"
                  onContextMenu={(e) => e.preventDefault()} 
                />
              </div>
              <span className="font-bold text-base text-zinc-950 dark:text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mb-3">
              {profileData.role} — Crafting high-performance digital products with a minimalist engineering mindset.
            </p>

            {/* Live local time indicator */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-400 max-w-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <Clock className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 shrink-0" />
              <span>Ho Chi Minh City:</span>
              <span className="font-bold text-zinc-950 dark:text-white shrink-0">
                {timeString ? `${timeString} (GMT+7)` : 'GMT+7'}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-400">
            <a href="#home" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-zinc-800 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all cursor-pointer shadow-2xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 stroke-[2.5] text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {CURRENT_YEAR} {profileData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`tel:${profileData.phone}`}
              aria-label="Phone"
              className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
              title={`Call: ${profileData.phone}`}
            >
              <Phone className="w-4 h-4 stroke-[2]" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email"
              className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
              title={`Gmail: ${profileData.email}`}
            >
              <GmailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
