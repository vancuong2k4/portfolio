import React from 'react'

interface TechStyle {
  bg: string
  text: string
  border: string
  dot: string
}

const TECH_STYLES: Record<string, TechStyle> = {
  // Core Full-Stack & Frontend
  'React': {
    bg: 'bg-sky-500/20 dark:bg-sky-500/25',
    text: 'text-sky-800 dark:text-sky-200',
    border: 'border-sky-500/50 dark:border-sky-400/50',
    dot: 'bg-[#00d8ff]',
  },
  'React 19': {
    bg: 'bg-sky-500/20 dark:bg-sky-500/25',
    text: 'text-sky-800 dark:text-sky-200',
    border: 'border-sky-500/50 dark:border-sky-400/50',
    dot: 'bg-[#00d8ff]',
  },
  'Next.js': {
    bg: 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950',
    text: 'text-white dark:text-zinc-950',
    border: 'border-zinc-900 dark:border-white',
    dot: 'bg-white dark:bg-black',
  },
  'React Native': {
    bg: 'bg-cyan-500/20 dark:bg-cyan-500/25',
    text: 'text-cyan-800 dark:text-cyan-200',
    border: 'border-cyan-500/50 dark:border-cyan-400/50',
    dot: 'bg-[#61dafb]',
  },
  'TypeScript': {
    bg: 'bg-blue-600/20 dark:bg-blue-600/25',
    text: 'text-blue-800 dark:text-blue-200',
    border: 'border-blue-600/50 dark:border-blue-500/50',
    dot: 'bg-[#3178c6]',
  },
  'Node.js': {
    bg: 'bg-emerald-600/20 dark:bg-emerald-600/25',
    text: 'text-emerald-800 dark:text-emerald-200',
    border: 'border-emerald-600/50 dark:border-emerald-500/50',
    dot: 'bg-[#5fa04e]',
  },
  'PostgreSQL': {
    bg: 'bg-indigo-600/20 dark:bg-indigo-600/25',
    text: 'text-indigo-800 dark:text-indigo-200',
    border: 'border-indigo-600/50 dark:border-indigo-500/50',
    dot: 'bg-[#336791]',
  },
  'Docker': {
    bg: 'bg-blue-500/20 dark:bg-blue-500/25',
    text: 'text-blue-800 dark:text-sky-200',
    border: 'border-blue-500/50 dark:border-blue-400/50',
    dot: 'bg-[#2496ed]',
  },
  'Git': {
    bg: 'bg-orange-500/20 dark:bg-orange-500/25',
    text: 'text-orange-800 dark:text-orange-200',
    border: 'border-orange-500/50 dark:border-orange-400/50',
    dot: 'bg-[#f05032]',
  },

  // Project & Framework Highlights
  'Tailwind CSS': {
    bg: 'bg-teal-500/20 dark:bg-teal-500/25',
    text: 'text-teal-800 dark:text-teal-200',
    border: 'border-teal-500/50 dark:border-teal-400/50',
    dot: 'bg-[#06b6d4]',
  },
  'Tailwind CSS v4': {
    bg: 'bg-teal-500/20 dark:bg-teal-500/25',
    text: 'text-teal-800 dark:text-teal-200',
    border: 'border-teal-500/50 dark:border-teal-400/50',
    dot: 'bg-[#06b6d4]',
  },
  'Laravel': {
    bg: 'bg-red-500/20 dark:bg-red-500/25',
    text: 'text-red-800 dark:text-red-200',
    border: 'border-red-500/50 dark:border-red-400/50',
    dot: 'bg-[#ff2d20]',
  },
  'PHP': {
    bg: 'bg-indigo-500/20 dark:bg-indigo-500/25',
    text: 'text-indigo-800 dark:text-indigo-200',
    border: 'border-indigo-500/50 dark:border-indigo-400/50',
    dot: 'bg-[#777bb4]',
  },
  'MySQL': {
    bg: 'bg-sky-600/20 dark:bg-sky-600/25',
    text: 'text-sky-800 dark:text-sky-200',
    border: 'border-sky-600/50 dark:border-sky-400/50',
    dot: 'bg-[#4479a1]',
  },
  'Python': {
    bg: 'bg-amber-500/20 dark:bg-amber-500/25',
    text: 'text-amber-900 dark:text-amber-200',
    border: 'border-amber-500/50 dark:border-amber-400/50',
    dot: 'bg-[#ffc331]',
  },
  'FastAPI': {
    bg: 'bg-emerald-600/20 dark:bg-emerald-600/25',
    text: 'text-emerald-800 dark:text-emerald-200',
    border: 'border-emerald-600/50 dark:border-emerald-500/50',
    dot: 'bg-[#059669]',
  },
  'Redis': {
    bg: 'bg-rose-500/20 dark:bg-rose-500/25',
    text: 'text-rose-800 dark:text-rose-200',
    border: 'border-rose-500/50 dark:border-rose-400/50',
    dot: 'bg-[#dc382d]',
  },
  'Express': {
    bg: 'bg-zinc-700/20 dark:bg-zinc-700/30',
    text: 'text-zinc-900 dark:text-zinc-100',
    border: 'border-zinc-500/50 dark:border-zinc-500/50',
    dot: 'bg-zinc-500',
  },
  'PostGIS': {
    bg: 'bg-emerald-700/20 dark:bg-emerald-700/25',
    text: 'text-emerald-900 dark:text-emerald-200',
    border: 'border-emerald-700/50 dark:border-emerald-500/50',
    dot: 'bg-[#2b7b51]',
  },
  'RESTful API': {
    bg: 'bg-blue-500/20 dark:bg-blue-500/25',
    text: 'text-blue-800 dark:text-blue-200',
    border: 'border-blue-500/50 dark:border-blue-400/50',
    dot: 'bg-[#3b82f6]',
  },
  'Gemini AI': {
    bg: 'bg-purple-500/20 dark:bg-purple-500/25',
    text: 'text-purple-800 dark:text-purple-200',
    border: 'border-purple-500/50 dark:border-purple-400/50',
    dot: 'bg-[#a855f7]',
  },
  'Vite': {
    bg: 'bg-purple-600/20 dark:bg-purple-600/25',
    text: 'text-purple-800 dark:text-purple-200',
    border: 'border-purple-600/50 dark:border-purple-500/50',
    dot: 'bg-[#bd34fe]',
  },
  'Lucide Icons': {
    bg: 'bg-rose-500/20 dark:bg-rose-500/25',
    text: 'text-rose-800 dark:text-rose-200',
    border: 'border-rose-500/50 dark:border-rose-400/50',
    dot: 'bg-[#f43f5e]',
  },
  'Vercel': {
    bg: 'bg-black text-white dark:bg-white dark:text-black',
    text: 'text-white dark:text-black',
    border: 'border-black dark:border-white',
    dot: 'bg-white dark:bg-black',
  },
  'RAG': {
    bg: 'bg-indigo-600/20 dark:bg-indigo-600/25',
    text: 'text-indigo-800 dark:text-indigo-200',
    border: 'border-indigo-600/50 dark:border-indigo-500/50',
    dot: 'bg-[#6366f1]',
  },
  'LangChain': {
    bg: 'bg-emerald-600/20 dark:bg-emerald-600/25',
    text: 'text-emerald-800 dark:text-emerald-200',
    border: 'border-emerald-600/50 dark:border-emerald-500/50',
    dot: 'bg-[#10b981]',
  },
  'Vector DB': {
    bg: 'bg-violet-600/20 dark:bg-violet-600/25',
    text: 'text-violet-800 dark:text-violet-200',
    border: 'border-violet-600/50 dark:border-violet-500/50',
    dot: 'bg-[#8b5cf6]',
  },
  'Team Project (4 Members)': {
    bg: 'bg-emerald-500/20 dark:bg-emerald-500/25',
    text: 'text-emerald-800 dark:text-emerald-200',
    border: 'border-emerald-500/50 dark:border-emerald-400/50',
    dot: 'bg-[#10b981]',
  },
  'HTML5': {
    bg: 'bg-orange-600/20 dark:bg-orange-600/25',
    text: 'text-orange-900 dark:text-orange-200',
    border: 'border-orange-600/50 dark:border-orange-500/50',
    dot: 'bg-[#e34f26]',
  },
  'CSS3': {
    bg: 'bg-blue-600/20 dark:bg-blue-600/25',
    text: 'text-blue-900 dark:text-blue-200',
    border: 'border-blue-600/50 dark:border-blue-500/50',
    dot: 'bg-[#1572b6]',
  },
  'JavaScript': {
    bg: 'bg-yellow-400/25 dark:bg-yellow-400/25',
    text: 'text-yellow-900 dark:text-yellow-200',
    border: 'border-yellow-500/50 dark:border-yellow-400/50',
    dot: 'bg-[#eab308]',
  },
  'GitHub Pages': {
    bg: 'bg-zinc-800/20 dark:bg-zinc-800/35',
    text: 'text-zinc-900 dark:text-zinc-100',
    border: 'border-zinc-500/50 dark:border-zinc-500/50',
    dot: 'bg-zinc-600 dark:bg-zinc-400',
  },
  'Responsive Design': {
    bg: 'bg-indigo-500/20 dark:bg-indigo-500/25',
    text: 'text-indigo-800 dark:text-indigo-200',
    border: 'border-indigo-500/50 dark:border-indigo-400/50',
    dot: 'bg-[#6366f1]',
  },
  'Responsive': {
    bg: 'bg-indigo-500/20 dark:bg-indigo-500/25',
    text: 'text-indigo-800 dark:text-indigo-200',
    border: 'border-indigo-500/50 dark:border-indigo-400/50',
    dot: 'bg-[#6366f1]',
  },
  'UI/UX': {
    bg: 'bg-fuchsia-500/20 dark:bg-fuchsia-500/25',
    text: 'text-fuchsia-800 dark:text-fuchsia-200',
    border: 'border-fuchsia-500/50 dark:border-fuchsia-400/50',
    dot: 'bg-[#d946ef]',
  },
  'Web Design': {
    bg: 'bg-teal-500/20 dark:bg-teal-500/25',
    text: 'text-teal-800 dark:text-teal-200',
    border: 'border-teal-500/50 dark:border-teal-400/50',
    dot: 'bg-[#14b8a6]',
  },
}

const defaultStyle: TechStyle = {
  bg: 'bg-zinc-200/60 dark:bg-zinc-800',
  text: 'text-zinc-900 dark:text-zinc-100',
  border: 'border-zinc-300 dark:border-zinc-700',
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
  const trimmed = name.trim()
  const style = TECH_STYLES[trimmed] || defaultStyle
  const sizeClasses = size === 'xs'
    ? 'px-2 py-0.5 text-[11px]'
    : 'px-2.5 py-1 text-xs'

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-bold rounded-md border transition-all duration-200 shadow-2xs hover:scale-105 hover:shadow-xs select-none ${sizeClasses} ${style.bg} ${style.text} ${style.border} ${className}`}
    >
      {showDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${style.dot}`}
          style={{
            boxShadow: '0 0 6px currentColor'
          }}
        />
      )}
      <span>{trimmed}</span>
    </span>
  )
}

export default TechBadge
