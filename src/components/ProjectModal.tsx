import React, { useEffect } from 'react'
import type { Project } from '../types'
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Zap
} from 'lucide-react'
import { GithubIcon } from './SocialIcons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl z-10 flex flex-col animate-in fade-in zoom-in-95 duration-150">
        
        {/* Banner with minimalist dark header */}
        <div className="relative min-h-[11rem] bg-zinc-900 dark:bg-black p-5 sm:p-6 flex flex-col justify-between text-white border-b border-zinc-200 dark:border-zinc-800">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-800/90 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer z-20 border border-zinc-700 active:scale-95"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>

          <div className="relative z-10 pr-12">
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-800 text-zinc-300 border border-zinc-700 mb-2">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          {project.metrics && (
            <div className="relative z-10 inline-flex items-center gap-2 self-start px-3 py-1 rounded-lg bg-zinc-800/90 text-xs font-mono font-semibold text-zinc-200 border border-zinc-700 mt-3">
              <Zap className="w-3.5 h-3.5 text-zinc-400" />
              <span>{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-6">
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Full description */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Project Overview
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
              <span>Key Features</span>
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-zinc-100 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture breakdown */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-zinc-500" />
                <span>Architecture & Engineering Highlights</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                {project.architecture.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-zinc-400 font-bold">•</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-800"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white dark:text-black bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}
