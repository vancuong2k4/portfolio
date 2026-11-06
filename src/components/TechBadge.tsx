import React from 'react'

interface TechStyle {
  bg: string
  text: string
  border: string
  dot: string
}

const TECH_STYLES: Record<string, TechStyle> = {
  // Core 8 requested
  'React': {
    bg: 'bg-sky-500/10 dark:bg-sky-400/15',
    text: 'text-sky-700 dark:text-sky-300',
    border: 'border-sky-500/30 dark:border-sky-400/30',
    dot: 'bg-[#00d8ff]',
  },
  'Next.js': {
    bg: 'bg-zinc-900/10 dark:bg-white/10',
    text: 'text-zinc-950 dark:text-zinc-100',
    border: 'border-zinc-400/40 dark:border-zinc-600/50',
    dot: 'bg-zinc-900 dark:bg-white',
  },
  'React Native': {
    bg: 'bg-cyan-500/10 dark:bg-cyan-400/15',
    text: 'text-cyan-700 dark:text-cyan-300',
    border: 'border-cyan-500/30 dark:border-cyan-400/30',
    dot: 'bg-[#61dafb]',
  },
  'TypeScript': {
    bg: 'bg-blue-600/10 dark:bg-blue-500/15',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-600/30 dark:border-blue-500/30',
    dot: 'bg-[#3178c6]',
  },
  'Node.js': {
    bg: 'bg-emerald-600/10 dark:bg-emerald-500/15',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-600/30 dark:border-emerald-500/30',
    dot: 'bg-[#5fa04e]',
  },
  'PostgreSQL': {
    bg: 'bg-indigo-600/10 dark:bg-indigo-500/15',
    text: 'text-indigo-700 dark:text-indigo-300',
    border: 'border-indigo-600/30 dark:border-indigo-500/30',
    dot: 'bg-[#336791]',
  },
  'Docker': {
    bg: 'bg-blue-500/10 dark:bg-blue-400/15',
    text: 'text-blue-700 dark:text-sky-400',
    border: 'border-blue-500/30 dark:border-blue-400/30',
    dot: 'bg-[#2496ed]',
  },
  'Git': {
    bg: 'bg-orange-500/10 dark:bg-orange-500/15',
    text: 'text-orange-700 dark:text-orange-400',
    border: 'border-orange-500/30 dark:border-orange-500/30',
    dot: 'bg-[#f05032]',
  },

  // Frequently used in projects
  'Tailwind CSS': {
    bg: 'bg-teal-500/10 dark:bg-teal-400/15',
    text: 'text-teal-700 dark:text-teal-300',
    border: 'border-teal-500/30 dark:border-teal-400/30',
    dot: 'bg-[#06b6d4]',
  },
  'Python': {
    bg: 'bg-amber-500/10 dark:bg-amber-400/15',
    text: 'text-amber-800 dark:text-amber-300',
    border: 'border-amber-500/30 dark:border-amber-400/30',
    dot: 'bg-[#eab308]',
  },
  'FastAPI': {
    bg: 'bg-emerald-600/10 dark:bg-emerald-500/15',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-600/30 dark:border-emerald-500/30',
    dot: 'bg-[#059669]',
  },
  'Redis': {
    bg: 'bg-red-500/10 dark:bg-red-500/15',
    text: 'text-red-700 dark:text-red-300',
    border: 'border-red-500/30 dark:border-red-500/30',
    dot: 'bg-[#dc382d]',
  },
  'Express': {
    bg: 'bg-zinc-700/10 dark:bg-zinc-700/25',
    text: 'text-zinc-800 dark:text-zinc-200',
    border: 'border-zinc-400/30 dark:border-zinc-600/30',
    dot: 'bg-[#71717a]',
  },
  'PostGIS': {
    bg: 'bg-emerald-700/10 dark:bg-emerald-600/15',
    text: 'text-emerald-800 dark:text-emerald-300',
    border: 'border-emerald-700/30 dark:border-emerald-600/30',
    dot: 'bg-[#10b981]',
  },
  'ChromaDB': {
    bg: 'bg-purple-600/10 dark:bg-purple-500/15',
    text: 'text-purple-700 dark:text-purple-300',
    border: 'border-purple-600/30 dark:border-purple-500/30',
    dot: 'bg-[#9333ea]',
  },
  'Groq AI': {
    bg: 'bg-orange-600/10 dark:bg-orange-500/15',
    text: 'text-orange-700 dark:text-orange-300',
    border: 'border-orange-600/30 dark:border-orange-500/30',
    dot: 'bg-[#f97316]',
  },
  'Llama 3.3': {
    bg: 'bg-violet-600/10 dark:bg-violet-500/15',
    text: 'text-violet-700 dark:text-violet-300',
    border: 'border-violet-600/30 dark:border-violet-500/30',
    dot: 'bg-[#8b5cf6]',
  },
  'RAG': {
    bg: 'bg-blue-600/10 dark:bg-blue-500/15',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-600/30 dark:border-blue-500/30',
    dot: 'bg-[#3b82f6]',
  },
  'Cloudinary': {
    bg: 'bg-sky-600/10 dark:bg-sky-500/15',
    text: 'text-sky-700 dark:text-sky-300',
    border: 'border-sky-600/30 dark:border-sky-500/30',
    dot: 'bg-[#0284c7]',
  },
}

const defaultStyle: TechStyle = {
  bg: 'bg-zinc-100 dark:bg-zinc-800/80',
  text: 'text-zinc-800 dark:text-zinc-200',
  border: 'border-zinc-300/60 dark:border-zinc-700/60',
  dot: 'bg-zinc-400 dark:bg-zinc-500',
}

interface TechBadgeProps {
  name: string
  size?: 'xs' | 'sm'
  showDot?: boolean
  className?: string
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  size = 'sm',
  showDot = true,
  className = '',
}) => {
  const style = TECH_STYLES[name] || defaultStyle
  const sizeClasses = size === 'xs'
    ? 'px-2 py-0.5 text-[11px]'
    : 'px-2.5 py-1 text-xs'

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-semibold rounded-md border transition-all duration-150 shadow-2xs hover:scale-105 select-none ${sizeClasses} ${style.bg} ${style.text} ${style.border} ${className}`}
    >
      {showDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${style.dot}`}
        />
      )}
      <span>{name}</span>
    </span>
  )
}

export default TechBadge
