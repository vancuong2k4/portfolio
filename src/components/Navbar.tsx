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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-zinc-200/90 dark:border-zinc-800/90 bg-white/90 dark:bg-[#121216]/90 backdrop-blur-xl ${
        isScrolled
          ? 'py-3 shadow-md shadow-black/5 dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
          : 'py-4 shadow-xs dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
      }`}
    >
      {/* Bottom Edge Luminous Separator Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/40 dark:via-zinc-500/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
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
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/70 border border-zinc-200/60 dark:border-zinc-800/80">
          {navItems.map(item => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-zinc-900 dark:text-white bg-white dark:bg-zinc-800 shadow-2xs font-bold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-black dark:bg-white rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
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
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold rounded-xl text-white dark:text-black bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
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
            className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
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
            className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu — animated slide-down */}
      <div
        className={`lg:hidden transition-all duration-200 ease-in-out overflow-hidden border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-[#121216]/95 backdrop-blur-xl ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navItems.map(item => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'text-white bg-black dark:text-black dark:bg-white font-bold'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                }`}
              >
                <span>{item.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
              </a>
            )
          })}
          <div className="pt-2 mt-1 border-t border-zinc-200 dark:border-zinc-800">
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
    </header>
  )
}
