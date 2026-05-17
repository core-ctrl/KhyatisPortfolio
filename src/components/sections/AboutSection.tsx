'use client'

import { motion } from 'framer-motion'
import { Braces, Database, Palette, Sparkles } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import { siteData } from '@/lib/data'

const profileRows = [
  ['University', siteData.university],
  ['Department', siteData.department],
  ['Specialization', siteData.specialization],
  ['Leadership', siteData.leadership]
]

const traits = [
  { icon: Braces, title: 'UI Engineering', copy: 'Pixel-sharp frontend systems with motion, hierarchy, and responsive structure.' },
  { icon: Database, title: 'Data Mindset', copy: 'Data Science specialization shaping analytical thinking and product decisions.' },
  { icon: Palette, title: 'Creative Systems', copy: 'Poster design, content leadership, and visual storytelling for digital communities.' }
]

export default function AboutSection() {
  return (
    <section id="about" className="relative z-20 overflow-hidden bg-ink px-4 py-24 text-paper sm:px-6 lg:py-32">
      <div className="absolute inset-0 retro-grid opacity-10" />
      <div className="absolute right-8 top-12 h-24 w-24 border-[14px] border-pixel/40" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.28em] text-pixel">01 / About</p>
          <h2 className="pixel-font max-w-4xl text-5xl font-black uppercase leading-[0.9] sm:text-6xl lg:text-8xl">
            Code with a creative operating system
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionReveal delay={80}>
            <motion.div
              whileHover={{ rotateX: 2, rotateY: -3, y: -6 }}
              className="terminal-panel pixel-cut p-4 sm:p-6"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="mb-5 flex items-center justify-between border-b-2 border-pixel/70 pb-3">
                <div className="window-dots flex gap-2">
                  <span className="bg-pixel" />
                  <span className="bg-cyan" />
                  <span className="bg-violet" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-pixel">
                  about.sys
                </span>
              </div>

              <p className="text-lg font-medium leading-8 text-paper/80">{siteData.bio}</p>

              <div className="mt-8 space-y-3">
                {profileRows.map(([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className="grid gap-1 border border-paper/10 bg-paper/5 p-3 sm:grid-cols-[150px_1fr]"
                  >
                    <span className="font-mono text-[10px] font-black uppercase tracking-[0.16em] text-cyan">
                      {label}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-paper/80">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </SectionReveal>

          <div className="space-y-5">
            <SectionReveal delay={120}>
              <div className="relative border-2 border-paper/15 bg-paper/10 p-5 backdrop-blur-xl">
                <div className="absolute -right-3 -top-3 border-2 border-ink bg-pixel px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.14em] text-ink">
                  profile.kernel
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {siteData.stats.map((stat) => (
                    <div key={stat.label} className="border border-paper/10 bg-ink/40 p-4">
                      <p className="pixel-font text-3xl font-black uppercase text-pixel">{stat.value}</p>
                      <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-paper/45">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {traits.map(({ icon: Icon, title, copy }, index) => (
                <SectionReveal key={title} delay={140 + index * 70}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="group flex gap-4 border-2 border-paper/10 bg-paper/[0.06] p-5 backdrop-blur-lg transition-colors hover:border-pixel/70"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center border-2 border-pixel bg-pixel text-ink shadow-[4px_4px_0_#00FFC6]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-mono text-sm font-black uppercase tracking-[0.14em] text-paper">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-paper/60">{copy}</p>
                    </div>
                  </motion.div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute -bottom-16 left-2 hidden items-center gap-3 text-pixel/30 lg:flex"
          animate={{ x: [0, 18, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <Sparkles size={22} />
          <div className="h-3 w-48 bg-pixel/25" />
        </motion.div>
      </div>
    </section>
  )
}
