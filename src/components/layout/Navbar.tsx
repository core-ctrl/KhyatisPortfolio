'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#projects' },
  { label: 'Creative', href: '#creative' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )

    navLinks.forEach(({ href }) => {
      const element = document.querySelector(href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const goTo = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-[120] px-4 py-4"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between border-2 border-ink px-3 py-3 transition-all duration-300 sm:px-5 ${
          scrolled ? 'bg-paper/80 shadow-[6px_6px_0_#111111] backdrop-blur-xl' : 'bg-paper/35 backdrop-blur-md'
        }`}
      >
        <button
          aria-label="Go to hero"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="magnetic flex items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center border-2 border-ink bg-pixel font-mono text-sm font-black text-ink shadow-[4px_4px_0_#111111]">
            KVL
          </span>
          <span className="hidden font-mono text-xs font-black uppercase tracking-[0.16em] text-ink sm:block">
            Khyati.OS
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1)
            return (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="magnetic relative px-3 py-2 font-mono text-[11px] font-black uppercase tracking-[0.12em] text-ink transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pixel"
                    className="absolute inset-0 -z-10 border border-ink bg-pixel"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                {link.label}
              </button>
            )
          })}
        </nav>

        <a
          href="#contact"
          onClick={(event) => {
            event.preventDefault()
            goTo('#contact')
          }}
          className="magnetic hidden border-2 border-ink bg-ink px-4 py-2 font-mono text-[11px] font-black uppercase tracking-[0.14em] text-pixel shadow-[4px_4px_0_#D7F041] transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Start
        </a>

        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center border-2 border-ink bg-pixel text-ink shadow-[4px_4px_0_#111111] lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-7xl border-2 border-ink bg-paper p-3 shadow-[6px_6px_0_#111111] lg:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="block w-full border-b border-ink/10 px-3 py-3 text-left font-mono text-xs font-black uppercase tracking-[0.14em] text-ink last:border-b-0"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
