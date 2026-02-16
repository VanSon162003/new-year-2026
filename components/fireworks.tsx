'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: string
}

const COLORS = [
  '#FF0000', // Red
  '#FFD700', // Gold
  '#FFA500', // Orange
  '#FF69B4', // Hot Pink
  '#00CED1', // Turquoise
  '#FFFFFF', // White
  '#FF1493', // Deep Pink
]

export function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationIdRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const createFirework = (x: number, y: number) => {
      const particleCount = 50 + Math.random() * 50
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5)
        const velocity = 5 + Math.random() * 8
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity - 2,
          life: 1,
          maxLife: 1 + Math.random() * 0.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vy += 0.15 // gravity
        particle.life -= 1 / particle.maxLife / 60

        if (particle.life <= 0) return false

        const opacity = Math.max(0, particle.life)
        ctx.fillStyle = particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0')
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fill()

        return true
      })

      animationIdRef.current = requestAnimationFrame(animate)
    }

    // Create fireworks continuously
    const fireworkInterval = setInterval(() => {
      const x = Math.random() * canvas.width
      const y = Math.random() * (canvas.height * 0.6) // Only top 60% of screen
      createFirework(x, y)
    }, 500)

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(fireworkInterval)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}
