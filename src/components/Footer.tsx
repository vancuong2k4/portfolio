import React from 'react'
import { profileData } from '../data/portfolioData'
import { ArrowUp, Terminal, Heart, Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200/80 dark:border-slate-800/80">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              {profileData.role} — Đam mê xây dựng những sản phẩm số tinh tế, hiệu năng vượt trội và giải quyết vấn đề thực tế.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Trang Chủ</a>
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Giới Thiệu</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Kỹ Năng</a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Dự Án</a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Kinh Nghiệm</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Liên Hệ</a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              aria-label="Cuộn lên đầu trang"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80 shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-4 h-4 text-indigo-500" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <span>© {currentYear} {profileData.name}. Xây dựng với</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
            <span>bằng React & Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email"
              className="hover:text-rose-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            {profileData.telegram && (
              <a
                href={profileData.telegram}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="hover:text-sky-500 transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </footer>
  )
}
