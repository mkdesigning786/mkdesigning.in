import { useEffect, useRef } from 'react'

function Bubbles() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const count = 80
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      pulse: Math.random() * Math.PI * 2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouse.current.x
      const my = mouse.current.y

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.25
            const grad = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y
            )
            grad.addColorStop(0, `rgba(0, 212, 255, ${alpha})`)
            grad.addColorStop(1, `rgba(120, 80, 255, ${alpha})`)
            ctx.strokeStyle = grad
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Mouse proximity glow connections
      nodes.forEach((n) => {
        const dx = n.x - mx
        const dy = n.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          const alpha = (1 - dist / 200) * 0.5
          ctx.strokeStyle = `rgba(0, 255, 200, ${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(mx, my)
          ctx.stroke()
        }
      })

      // Draw nodes
      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.02
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1

        const glow = 0.6 + 0.4 * Math.sin(n.pulse)
        const dx = n.x - mx
        const dy = n.y - my
        const mouseDist = Math.sqrt(dx * dx + dy * dy)
        const boost = mouseDist < 200 ? 1.5 : 1

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * boost, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${glow})`
        ctx.shadowColor = '#00d4ff'
        ctx.shadowBlur = 12 * boost
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="iot-particles"
    />
  )
}

export default Bubbles
