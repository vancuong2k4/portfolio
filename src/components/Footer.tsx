import React from 'react'
import { profileData } from '../data/portfolioData'
import { ArrowUp, Terminal, Phone } from 'lucide-react'
import { GithubIcon, GmailIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
                <Terminal className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-bold text-base text-zinc-900 dark:text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-zinc-500 max-w-sm">
              {profileData.role} — Crafting high-performance digital products with a minimalist engineering mindset.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-medium text-zinc-500">
            <a href="#home" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/40 transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 stroke-[2.5] text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} {profileData.name}. All rights reserved.
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
              className="text-zinc-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              title={`Call: ${profileData.phone}`}
            >
              <Phone className="w-4 h-4 stroke-[2]" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email"
              className="text-zinc-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
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
