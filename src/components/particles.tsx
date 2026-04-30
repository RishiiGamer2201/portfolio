'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const PARTICLE_COUNT = 80
    const CONNECTION_DISTANCE = 120
    const mouse = { x: null as number | null, y: null as number | null }

    function resizeCanvas() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.radius = Math.random() * 2 + 0.5
        this.opacity = Math.random() * 0.5 + 0.1
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y!
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            const force = (100 - dist) / 100
            this.x += (dx / dist) * force * 2
            this.y += (dy / dist) * force * 2
          }
        }
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(0, 245, 212, ${this.opacity})`
        ctx!.fill()
      }
    }

    const particles: Particle[] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle())
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15
            ctx!.strokeStyle = `rgba(0, 245, 212, ${opacity})`
            ctx!.lineWidth = 0.5
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.stroke()
          }
        }
      }
    }

    let animationId: number
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      drawConnections()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}
