'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import { siteData } from '@/lib/data'

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative z-20 overflow-hidden bg-ink px-4 py-24 text-paper sm:px-6 lg:py-32">
      <div className="absolute inset-0 retro-grid opacity-10" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-pixel/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.28em] text-pixel">06 / Contact</p>
          <h2 className="pixel-font max-w-4xl text-5xl font-black uppercase leading-[0.9] sm:text-6xl lg:text-8xl">
            Start a creative transmission
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal delay={100}>
            <div className="terminal-panel pixel-cut p-5">
              <div className="mb-6 flex items-center justify-between border-b-2 border-pixel/70 pb-3">
                <div className="window-dots flex gap-2">
                  <span className="bg-pixel" />
                  <span className="bg-cyan" />
                  <span className="bg-violet" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.16em] text-pixel">
                  contact.cli
                </span>
              </div>

              <p className="text-base font-semibold leading-7 text-paper/70">
                Open to frontend builds, creative collaborations, student tech initiatives, and UI engineering work.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  { icon: Mail, label: 'Email', href: `mailto:${siteData.contact.email}`, text: siteData.contact.email },
                  { icon: Github, label: 'GitHub', href: siteData.contact.github, text: 'SocketIO Share repository' },
                  { icon: Linkedin, label: 'LinkedIn', href: siteData.contact.linkedin, text: 'Project launch post' }
                ].map(({ icon: Icon, label, href, text }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-paper/10 bg-paper/5 p-3 transition-colors hover:border-pixel"
                  >
                    <span className="grid h-10 w-10 place-items-center border border-pixel bg-pixel text-ink">
                      <Icon size={17} />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] font-black uppercase tracking-[0.16em] text-cyan">
                        {label}
                      </span>
                      <span className="block break-all text-sm font-semibold text-paper/70">{text}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={150}>
            <form onSubmit={handleSubmit} className="border-2 border-ink bg-paper p-5 text-ink shadow-[8px_8px_0_#D7F041]">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em]">Name</span>
                  <input
                    required
                    className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 font-mono text-sm outline-none focus:bg-pixel/30"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em]">Email</span>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 font-mono text-sm outline-none focus:bg-pixel/30"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.18em]">Message</span>
                <textarea
                  required
                  rows={6}
                  className="mt-2 w-full resize-none border-2 border-ink bg-paper px-4 py-3 font-mono text-sm outline-none focus:bg-pixel/30"
                  placeholder="Tell Khyati about the idea..."
                />
              </label>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 border-2 border-ink bg-pixel px-5 py-4 font-mono text-xs font-black uppercase tracking-[0.15em] text-ink shadow-[5px_5px_0_#111111]"
              >
                <Send size={15} />
                {sent ? 'Transmission queued' : 'Send message'}
              </motion.button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
