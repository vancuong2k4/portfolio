import React, { useEffect, useState, useRef } from 'react'

export const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 })
  const [isTouchDevice] = useState(() => typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches)
  const lastUpdate = useRef(0)

  useEffect(() => {
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now()
      // Throttle to ~30fps (every 33ms) to reduce unnecessary React re-renders
      if (now - lastUpdate.current < 33) return
      lastUpdate.current = now
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isTouchDevice])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 transition-colors duration-500">
      {/* Subtle technical grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-35" />

      {/* Top ambient spotlight tailored for light and dark modes */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[350px] sm:h-[400px] opacity-60 dark:opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(228,228,231,0.7) 0%, rgba(244,244,245,0.2) 50%, transparent 80%)',
        }}
      />

      {/* Mouse interactive soft spotlight — only rendered on non-touch devices with sm+ screen */}
      {!isTouchDevice && (
        <div
          className="hidden sm:block absolute w-[500px] h-[500px] max-w-[100vw] rounded-full blur-[140px] opacity-50 dark:opacity-25 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            background: 'radial-gradient(circle, rgba(228,228,231,0.5) 0%, rgba(212,212,216,0.15) 40%, transparent 70%)',
            transition: 'left 0.1s ease-out, top 0.1s ease-out',
            willChange: 'left, top',
          }}
        />
      )}
    </div>
  )
}
