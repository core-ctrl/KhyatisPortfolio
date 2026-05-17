'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { SiNextdotjs, SiReact, SiSocketdotio, SiTypescript } from 'react-icons/si'
import { siteData } from '@/lib/data'
import { Button } from '@/components/ui/button'

const floatingIcons = [
  { Icon: SiReact, label: 'React', className: 'left-[4%] top-[24%] hidden lg:flex', delay: 0 },
  { Icon: SiNextdotjs, label: 'Next', className: 'right-[9%] top-[20%] hidden lg:flex', delay: 0.2 },
  { Icon: SiTypescript, label: 'TS', className: 'left-[12%] bottom-[18%] hidden xl:flex', delay: 0.4 },
  { Icon: SiSocketdotio, label: 'IO', className: 'right-[14%] bottom-[24%] hidden xl:flex', delay: 0.6 }
]

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 70, damping: 22 })
  const springY = useSpring(mouseY, { stiffness: 70, damping: 22 })
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 900], [0, 210])
  const posterRotate = useTransform(scrollY, [0, 700], [-3, 5])

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set(event.clientX - rect.left)
      mouseY.set(event.clientY - rect.top)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <section id="hero" ref={ref} className="relative z-10 min-h-[92svh] overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:pt-32">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute h-72 w-72 bg-pixel/35 blur-3xl"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />

      <div className="absolute inset-0 -z-10 retro-grid opacity-85" />
      <div className="absolute left-6 top-28 -z-10 h-24 w-24 border-[16px] border-pixel opacity-80" />
      <div className="absolute bottom-20 right-6 -z-10 h-20 w-20 border-[12px] border-violet opacity-35" />

      {floatingIcons.map(({ Icon, label, className, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 16, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.8 + delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute z-20 h-20 w-20 items-center justify-center border-2 border-ink bg-paper shadow-[6px_6px_0_#111111] ${className}`}
        >
          <Icon className="text-3xl text-ink" />
          <span className="absolute -bottom-3 -right-3 bg-pixel px-2 py-1 font-mono text-[10px] font-black text-ink">
            {label}
          </span>
        </motion.div>
      ))}

      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.72fr)]"
        style={{ y: heroY }}
      >
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-3 border-2 border-ink bg-paper/80 px-3 py-2 shadow-[5px_5px_0_#111111] backdrop-blur"
          >
            <span className="h-3 w-3 bg-pixel shadow-[10px_0_0_#00FFC6,20px_0_0_#8B5CF6]" />
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-ink">
              Frontend.exe / DataScience.mode
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="pixel-font glitch-text max-w-5xl text-6xl font-black uppercase leading-[0.82] text-ink sm:text-7xl md:text-8xl lg:text-9xl"
          >
            KVL
            <br />
            Khyati
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-3xl"
          >
            <p className="font-mono text-sm font-black uppercase tracking-[0.16em] text-ink sm:text-base">
              {siteData.role}
            </p>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-ink/70 sm:text-xl">
              {siteData.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Project <ExternalLink size={15} />
            </Button>
            <Button
              variant="terminal"
              onClick={() => document.getElementById('creative')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Creative Wall
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href={siteData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center border-2 border-ink bg-paper shadow-[4px_4px_0_#111111] transition-transform hover:-translate-y-1"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={siteData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center border-2 border-ink bg-cyan shadow-[4px_4px_0_#111111] transition-transform hover:-translate-y-1"
            >
              <FaLinkedinIn size={17} />
            </a>
            <div className="ml-2 hidden font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink/50 sm:block">
              Interactive portfolio system online
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.25, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto w-full max-w-[460px] lg:ml-auto"
          style={{ rotate: posterRotate }}
        >
          <div className="pixel-panel pixel-cut bg-pixel p-3">
            <div className="border-2 border-ink bg-paper p-2">
              <img
                src={siteData.assets.hero}
                alt="Open source pixel icons poster aesthetic reference"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] font-black uppercase tracking-[0.12em] text-ink">
              <span>poster.ref</span>
              <span>pixel-icons</span>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-5 hidden w-48 border-2 border-ink bg-ink p-4 text-paper shadow-[6px_6px_0_#D7F041] sm:block">
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.16em] text-pixel">University</p>
            <p className="mt-2 text-sm font-bold leading-5">KL University, Vaddeswaram</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-ink/60"
      >
        Scroll
        <ArrowDown size={16} className="animate-bounce text-ink" />
      </motion.button>
    </section>
  )
}
