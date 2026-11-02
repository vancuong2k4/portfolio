import React, { useState, useEffect, useRef } from 'react'
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
  
  // Track mobile menu state inside ref for clean scroll handler access
  const isMenuOpenRef = useRef(false)
  isMenuOpenRef.current = isMobileMenuOpen

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      // Close mobile menu immediately if user starts scrolling
      if (isMenuOpenRef.current) {
        setIsMobileMenuOpen(false)
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20
          setIsScrolled(prev => (prev !== scrolled ? scrolled : prev))

          const sections = navItems.map(item => item.href.substring(1))
          const scrollPosition = window.scrollY + 120

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i])
            if (el && el.offsetTop <= scrollPosition) {
              setActiveSection(prev => (prev !== sections[i] ? sections[i] : prev))
              break
            }
          }
          ticking = false
        })
        ticking = true
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out will-change-transform ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-white/85 dark:bg-[#0c0e14]/85 backdrop-blur-2xl border-b border-zinc-200/70 dark:border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.65)]'
          : 'py-3.5 sm:py-4 bg-white/70 dark:bg-[#0c0e14]/70 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/[0.05]'
      }`}
    >
      {/* Top subtle gloss sheen */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent pointer-events-none" />

      {/* Bottom luminous demarcation hairline */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/30 dark:via-white/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        
        {/* Brand Logo - Smooth Glass Framed Avatar */}
        <a
          href="#home"
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer shrink-0 select-none min-w-0"
        >
          <div 
            className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shadow-sm group-hover:scale-105 ring-1 ring-zinc-300 dark:ring-white/20 bg-zinc-100 dark:bg-zinc-800 shrink-0 transition-transform duration-300"
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

          <div className="flex flex-col min-w-0">
            <span className="font-bold text-xs sm:text-base tracking-tight text-zinc-900 dark:text-white font-mono leading-none group-hover:text-black dark:group-hover:text-zinc-200 transition-colors truncate">
              vancuong2k4
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400 leading-none truncate">
                Full-Stack Developer
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation - Fluid Glass Pills */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-zinc-100/60 dark:bg-white/[0.04] border border-zinc-200/50 dark:border-white/[0.06] backdrop-blur-md">
          {navItems.map(item => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-zinc-950 dark:text-white font-bold bg-white dark:bg-white/[0.12] shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/[0.06]'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-black dark:bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          {/* Theme Toggle - Glass Circle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 bg-zinc-100/80 dark:bg-white/[0.06] hover:bg-zinc-200 dark:hover:bg-white/[0.12] border border-zinc-200/80 dark:border-white/[0.08] transition-all duration-300 cursor-pointer shadow-xs active:scale-95"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-200 transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Resume Download Button - Sleek Liquid Pill */}
          <button
            onClick={handleDownloadCV}
            className="group flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold rounded-full text-white dark:text-zinc-950 bg-zinc-900 dark:bg-white hover:bg-black dark:hover:bg-zinc-100 shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile & Tablet Controls */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 bg-zinc-100/80 dark:bg-white/[0.06] border border-zinc-200/80 dark:border-white/[0.08] cursor-pointer active:scale-95 transition-transform"
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-200" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-700" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-zinc-900 dark:text-white bg-zinc-100/80 dark:bg-white/[0.06] border border-zinc-200/80 dark:border-white/[0.08] cursor-pointer active:scale-95 transition-transform"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu — Glass Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-zinc-200/60 dark:border-white/[0.06] bg-white/95 dark:bg-[#0c0e14]/95 backdrop-blur-2xl ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1.5">
          {navItems.map(item => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                  isActive
                    ? 'text-white bg-black dark:text-black dark:bg-white font-bold shadow-xs'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/[0.06]'
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
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-white dark:text-black bg-black dark:bg-white shadow-sm cursor-pointer active:scale-95 transition-transform"
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
