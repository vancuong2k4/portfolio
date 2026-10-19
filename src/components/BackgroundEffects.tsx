import React, { useEffect, useState } from 'react'

export const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Smooth tracking with window percentages
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 transition-colors duration-500">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40" />

      {/* Interactive mouse-following soft glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 dark:opacity-20 transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(168,85,247,0.3) 50%, transparent 70%)',
        }}
      />

      {/* Ambient glowing orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-600/30 blur-[100px] animate-pulse" />
      <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-purple-500/20 to-pink-600/25 blur-[120px]" />
      <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-emerald-500/15 via-teal-500/15 to-transparent blur-[130px]" />
    </div>
  )
}
