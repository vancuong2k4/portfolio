import React, { useEffect, useState, useRef } from 'react'

export const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 })
  // Use a ref to track last update timestamp for throttling
  const lastUpdate = useRef(0)
  // Disable interactive spotlight on touch-primary devices to save GPU
  const isTouch = useRef(
    typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches
  )

  useEffect(() => {
    if (isTouch.current) return // skip listener on touch devices

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

      {/* Mouse interactive soft spotlight — only rendered on non-touch devices */}
      {!isTouch.current && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-40 dark:opacity-25 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(161,161,170,0.04) 40%, transparent 70%)',
            transition: 'left 0.1s ease-out, top 0.1s ease-out',
            willChange: 'left, top',
          }}
        />
      )}
    </div>
  )
}
