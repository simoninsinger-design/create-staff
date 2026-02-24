'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Particle {
  readonly id: number
  readonly targetX: number
  readonly targetY: number
  readonly startX: number
  readonly startY: number
  readonly size: number
  readonly delay: number
  readonly color: string
}

function generateHumanoidParticles(count: number, width: number, height: number): Particle[] {
  const particles: Particle[] = []
  const centerX = width * 0.5
  const centerY = height * 0.45
  const scale = Math.min(width, height) * 0.0028

  const colors = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#2563EB']

  for (let i = 0; i < count; i++) {
    const section = Math.random()
    let tx: number
    let ty: number

    if (section < 0.2) {
      // Head
      const angle = Math.random() * Math.PI * 2
      const r = (15 + Math.random() * 12) * scale
      tx = centerX + Math.cos(angle) * r
      ty = centerY - 100 * scale + Math.sin(angle) * r * 0.9
    } else if (section < 0.5) {
      // Torso
      const angle = Math.random() * Math.PI * 2
      const r = (18 + Math.random() * 14) * scale
      tx = centerX + Math.cos(angle) * r * 0.9
      ty = centerY - 40 * scale + Math.random() * 80 * scale
    } else if (section < 0.7) {
      // Arms
      const side = Math.random() > 0.5 ? 1 : -1
      const t = Math.random()
      tx = centerX + side * (30 + t * 50) * scale + (Math.random() - 0.5) * 10 * scale
      ty = centerY - 20 * scale + t * 40 * scale + (Math.random() - 0.5) * 10 * scale
    } else {
      // Legs
      const side = Math.random() > 0.5 ? 1 : -1
      const t = Math.random()
      tx = centerX + side * (8 + Math.random() * 10) * scale
      ty = centerY + 50 * scale + t * 80 * scale + (Math.random() - 0.5) * 5 * scale
    }

    particles.push({
      id: i,
      targetX: tx,
      targetY: ty,
      startX: Math.random() * width,
      startY: Math.random() * height,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    })
  }

  return particles
}

function generateConnectionLines(particles: Particle[], maxDistance: number): Array<{ x1: number; y1: number; x2: number; y2: number }> {
  const lines: Array<{ x1: number; y1: number; x2: number; y2: number }> = []

  for (let i = 0; i < particles.length && lines.length < 40; i++) {
    for (let j = i + 1; j < particles.length && lines.length < 40; j++) {
      const dx = particles[i].targetX - particles[j].targetX
      const dy = particles[i].targetY - particles[j].targetY
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < maxDistance && Math.random() < 0.15) {
        lines.push({
          x1: particles[i].targetX,
          y1: particles[i].targetY,
          x2: particles[j].targetX,
          y2: particles[j].targetY,
        })
      }
    }
  }

  return lines
}

interface HeroParticlesProps {
  readonly isDark?: boolean
}

export function HeroParticles({ isDark = true }: HeroParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 500, height: 600 })
  const [reducedMotion, setReducedMotion] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const parallaxX = useTransform(springX, [-1, 1], [-15, 15])
  const parallaxY = useTransform(springY, [-1, 1], [-10, 10])

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)

    function updateDimensions() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions, { passive: true })
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1)
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const isMobile = dimensions.width < 500
  const particleCount = isMobile ? 60 : 120

  const particles = useMemo(
    () => generateHumanoidParticles(particleCount, dimensions.width, dimensions.height),
    [particleCount, dimensions.width, dimensions.height]
  )

  const lines = useMemo(
    () => generateConnectionLines(particles, isMobile ? 40 : 60),
    [particles, isMobile]
  )

  if (reducedMotion) {
    return (
      <div ref={containerRef} className="relative h-full w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full bg-gradient-to-br from-blue-electric/20 to-blue-bright/10 blur-3xl" />
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="h-80 w-80 rounded-full bg-blue-electric/5 blur-[80px]"
        />
      </div>

      <motion.div style={{ x: parallaxX, y: parallaxY }}>
        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="absolute inset-0"
        >
          <defs>
            <radialGradient id="particleGlow">
              <stop offset="0%" stopColor={isDark ? '#60A5FA' : '#2563EB'} stopOpacity="0.8" />
              <stop offset="100%" stopColor={isDark ? '#2563EB' : '#1d4ed8'} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Connection lines */}
          {lines.map((line, i) => (
            <motion.line
              key={`line-${i}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={isDark ? '#2563EB' : '#93C5FD'}
              strokeWidth={0.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1, delay: 2 + i * 0.05 }}
            />
          ))}

          {/* Particles */}
          {particles.map((p) => (
            <motion.circle
              key={p.id}
              r={p.size}
              fill={p.color}
              initial={{
                cx: p.startX,
                cy: p.startY,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                cx: p.targetX,
                cy: p.targetY,
                opacity: [0, 0.9, 0.7],
                scale: 1,
              }}
              transition={{
                cx: { duration: 2, delay: p.delay, ease: [0.16, 1, 0.3, 1] },
                cy: { duration: 2, delay: p.delay, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 1.5, delay: p.delay },
                scale: { duration: 1, delay: p.delay },
              }}
              style={{ filter: 'blur(0.5px)' }}
            />
          ))}

          {/* Glow overlay particles (larger, more transparent) */}
          {particles
            .filter((_, i) => i % 5 === 0)
            .map((p) => (
              <motion.circle
                key={`glow-${p.id}`}
                r={p.size * 4}
                fill="url(#particleGlow)"
                initial={{
                  cx: p.startX,
                  cy: p.startY,
                  opacity: 0,
                }}
                animate={{
                  cx: p.targetX,
                  cy: p.targetY,
                  opacity: 0.3,
                }}
                transition={{
                  cx: { duration: 2, delay: p.delay, ease: [0.16, 1, 0.3, 1] },
                  cy: { duration: 2, delay: p.delay, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 2, delay: p.delay + 0.5 },
                }}
              />
            ))}
        </svg>
      </motion.div>

      {/* Floating ambient particles */}
      {Array.from({ length: isMobile ? 8 : 15 }).map((_, i) => (
        <motion.div
          key={`ambient-${i}`}
          className="absolute h-1 w-1 rounded-full bg-blue-electric/30"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
