import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Menu, X, FileDown, Terminal } from 'lucide-react'
import confetti from 'canvas-confetti'

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: 'Trang Chủ', href: '#home' },
  { name: 'Giới Thiệu', href: '#about' },
  { name: 'Kỹ Năng', href: '#skills' },
  { name: 'Dự Án', href: '#projects' },
  { name: 'Kinh Nghiệm', href: '#experience' },
  { name: 'Liên Hệ', href: '#contact' },
]

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownloadCV = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#ffffff', '#a1a1aa', '#71717a', '#000000']
    })
    window.open('#contact', '_self')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800/80 shadow-md shadow-black/5 dark:shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Monochrome Black & White */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform duration-200 border border-zinc-800 dark:border-transparent">
            <Terminal className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-white font-mono">
              vancuong2k4
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400">
              Full-Stack & Mobile
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 p-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md">
          {navItems.map(item => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-black dark:text-black dark:bg-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60'
                }`}
              >
                {item.name}
              </a>
            )
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-800 cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-300 transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Resume Download Button - High Contrast Monochrome */}
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl text-white dark:text-black bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileDown className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Tải CV</span>
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-300" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col gap-2">
          {navItems.map(item => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-white bg-black dark:text-black dark:bg-white'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                {item.name}
              </a>
            )
          })}
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                handleDownloadCV()
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white dark:text-black bg-black dark:bg-white shadow-sm"
            >
              <FileDown className="w-4 h-4 stroke-[2.5]" />
              <span>Tải CV Cá Nhân</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
