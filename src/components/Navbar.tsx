import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Menu, X, FileDown } from 'lucide-react'
import confetti from 'canvas-confetti'

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      // Close mobile menu when user scrolls
      setIsMobileMenuOpen(false)

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
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        {/* Floating Capsule Bar */}
        <div
          className={`relative px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-2xl sm:rounded-full transition-all duration-300 flex items-center justify-between border ${
            isScrolled
              ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border-zinc-300/80 dark:border-zinc-700/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.8)]'
              : 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-zinc-200/80 dark:border-zinc-700/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
          }`}
        >
          {/* Subtle ambient backlight aura */}
          <div className="absolute -inset-1 rounded-2xl sm:rounded-full bg-gradient-to-r from-zinc-500/10 via-zinc-400/15 dark:via-zinc-500/15 to-zinc-500/10 blur-xl pointer-events-none -z-10" />

          {/* Top Edge Luminous Hairline */}
          <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/30 dark:via-white/20 to-transparent pointer-events-none" />

          {/* Brand Logo - Protected Non-Interactive Avatar */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer shrink-0"
          >
            <div 
              className="relative w-9 h-9 rounded-xl overflow-hidden shadow-xs group-hover:scale-105 transition-transform duration-200 border border-zinc-200 dark:border-zinc-700/80 bg-zinc-100 dark:bg-zinc-800 shrink-0 select-none"
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src="/logo.png"
                alt="vancuong2k4 logo"
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="eager"
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
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-zinc-900 dark:text-white font-mono leading-none mb-0.5">
                vancuong2k4
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400 leading-none">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-950/60 p-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md">
            {navItems.map(item => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
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
          <div className="hidden lg:flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200 dark:border-zinc-700/60 cursor-pointer"
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
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full text-white dark:text-black bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile & Tablet Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
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
              className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu — animated slide-down */}
        <div
          className={`lg:hidden transition-all duration-200 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="mt-2 p-4 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-700/80 shadow-2xl flex flex-col gap-1">
            {navItems.map(item => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-white bg-black dark:text-black dark:bg-white'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
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
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white dark:text-black bg-black dark:bg-white shadow-sm cursor-pointer"
              >
                <FileDown className="w-4 h-4 stroke-[2.5]" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
