'use client'

import { useEffect, useRef, useState } from 'react'

const translate = (x: number, y: number) => `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`

export default function CustomCursor() {
  const blockRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    setVisible(true)
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let frameX = mouseX
    let frameY = mouseY
    let rafId = 0

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      if (blockRef.current) blockRef.current.style.transform = translate(mouseX, mouseY)
    }

    const animate = () => {
      frameX += (mouseX - frameX) * 0.16
      frameY += (mouseY - frameY) * 0.16
      if (frameRef.current) frameRef.current.style.transform = translate(frameX, frameY)
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      frameRef.current?.classList.add('scale-150', 'border-cyan', 'bg-cyan/10')
      blockRef.current?.classList.add('bg-cyan')
    }

    const onLeave = () => {
      frameRef.current?.classList.remove('scale-150', 'border-cyan', 'bg-cyan/10')
      blockRef.current?.classList.remove('bg-cyan')
    }

    const hoverables = document.querySelectorAll('a, button, input, textarea, [data-hover]')
    hoverables.forEach((element) => {
      element.addEventListener('mouseenter', onEnter)
      element.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      hoverables.forEach((element) => {
        element.removeEventListener('mouseenter', onEnter)
        element.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        ref={frameRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 border-2 border-ink mix-blend-difference transition-[transform,border-color,background-color] duration-200"
      />
      <div
        ref={blockRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 bg-pixel shadow-[0_0_18px_rgba(215,240,65,0.8)] mix-blend-difference"
      />
    </>
  )
}
