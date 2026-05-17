'use client'

import { useEffect, useRef } from 'react'

type PixelParticle = {
  x: number
  y: number
  size: number
  vx: number
  vy: number
  color: string
  alpha: number
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let raf = 0
    let particles: PixelParticle[] = []
    const colors = ['#D7F041', '#00FFC6', '#8B5CF6', '#111111']
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const seed = () => {
      particles = Array.from({ length: Math.min(95, Math.max(36, Math.floor((width * height) / 18000))) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() > 0.82 ? 8 : 4,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.32 + 0.12
      }))
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle, index) => {
        ctx.globalAlpha = particle.alpha
        ctx.fillStyle = particle.color
        ctx.fillRect(Math.round(particle.x), Math.round(particle.y), particle.size, particle.size)

        if (index % 8 === 0) {
          ctx.globalAlpha = particle.alpha * 0.45
          ctx.strokeStyle = particle.color
          ctx.strokeRect(
            Math.round(particle.x - particle.size),
            Math.round(particle.y - particle.size),
            particle.size * 3,
            particle.size * 3
          )
        }

        if (!reduced) {
          particle.x += particle.vx
          particle.y += particle.vy
        }

        if (particle.x > width + 12) particle.x = -12
        if (particle.x < -12) particle.x = width + 12
        if (particle.y > height + 12) particle.y = -12
        if (particle.y < -12) particle.y = height + 12
      })

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 z-[1] pointer-events-none opacity-60" />
}
