import React, { useEffect, useState } from 'react'

export const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
      {/* Subtle technical grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-35" />

      {/* Top ambient spotlight in pure white / neutral */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-30 dark:opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.2) 0%, rgba(161,161,170,0.05) 50%, transparent 80%)',
        }}
      />

      {/* Mouse interactive soft spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-40 dark:opacity-25 transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(161,161,170,0.04) 40%, transparent 70%)',
        }}
      />
    </div>
  )
}
