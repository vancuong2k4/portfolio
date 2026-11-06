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
      {/* Subtle ambient backlight glow tailored for dark background */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[28rem] h-24 bg-gradient-to-r from-zinc-400/10 via-zinc-200/15 to-zinc-400/10 dark:from-white/5 dark:via-zinc-300/10 dark:to-white/5 blur-3xl rounded-full pointer-events-none -z-10" 
      />

      {/* Modern Glassmorphic Badge with Pulse Dot */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider bg-zinc-100/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-200 border border-zinc-200/90 dark:border-zinc-700/70 shadow-xs dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md mb-4 group hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 dark:bg-zinc-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
        </span>
        <span className="text-zinc-500 dark:text-zinc-400 font-bold">{badgeNumber}</span>
        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <span className="text-zinc-800 dark:text-zinc-200">{badgeLabel}</span>
      </div>

      {/* High-End Gradient Heading with Depth */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-700 dark:from-white dark:via-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent drop-shadow-xs dark:drop-shadow-[0_4px_24px_rgba(255,255,255,0.06)] leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3.5 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Modern Gradient Hairline Divider with Polished Center Bead */}
      <div className="flex items-center justify-center gap-2.5 mt-5">
        <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-zinc-400 dark:to-zinc-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-300 ring-2 ring-zinc-200 dark:ring-zinc-800/80 shadow-xs" />
        <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent via-zinc-300 dark:via-zinc-700 to-zinc-400 dark:to-zinc-500" />
      </div>
    </div>
  )
}

export default SectionHeader
