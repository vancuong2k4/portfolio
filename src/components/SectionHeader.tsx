import React from 'react'

interface SectionHeaderProps {
  badgeNumber: string
  badgeLabel: string
  title: string
  subtitle?: string
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeNumber,
  badgeLabel,
  title,
  subtitle,
  className = "mb-14 sm:mb-16"
}) => {
  return (
    <div className={`text-center max-w-3xl mx-auto relative ${className}`}>
      {/* Subtle ambient backlight glow tailored for dark and light background */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[28rem] max-w-[90vw] h-24 bg-gradient-to-r from-zinc-200/40 via-zinc-300/30 to-zinc-200/40 dark:from-white/5 dark:via-zinc-300/10 dark:to-white/5 blur-3xl rounded-full pointer-events-none -z-10" 
      />

      {/* Modern Glassmorphic Badge with Pulse Dot */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider bg-white/95 dark:bg-zinc-900/90 text-zinc-950 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700/70 shadow-xs dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md mb-4 group hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 dark:bg-zinc-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
        </span>
        <span className="text-zinc-600 dark:text-zinc-400 font-bold">{badgeNumber}</span>
        <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
        <span className="text-zinc-950 dark:text-zinc-200 font-bold">{badgeLabel}</span>
      </div>

      {/* High-End Heading: Solid Deep Ink Black in Light Mode, Titanium Metallic Gradient in Dark Mode */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:via-zinc-100 dark:to-zinc-400 drop-shadow-xs dark:drop-shadow-[0_4px_24px_rgba(255,255,255,0.06)] leading-tight">
        {title}
      </h2>

      {/* Subtitle with High-Contrast Charcoal in Light Mode */}
      {subtitle && (
        <p className="mt-3.5 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

      {/* Modern Gradient Hairline Divider with Polished Center Bead */}
      <div className="flex items-center justify-center gap-2.5 mt-5">
        <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent via-zinc-400 dark:via-zinc-700 to-zinc-500 dark:to-zinc-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 dark:bg-zinc-300 ring-2 ring-zinc-200 dark:ring-zinc-800/80 shadow-xs" />
        <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent via-zinc-400 dark:via-zinc-700 to-zinc-500 dark:to-zinc-500" />
      </div>
    </div>
  )
}

export default SectionHeader
