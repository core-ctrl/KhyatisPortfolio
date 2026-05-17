'use client'

import { motion } from 'framer-motion'
import { Megaphone, PenTool, Radio, Sparkles } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import { siteData } from '@/lib/data'

const nodes = [
  { icon: PenTool, label: 'Design systems' },
  { icon: Megaphone, label: 'Content strategy' },
  { icon: Radio, label: 'Community voice' },
  { icon: Sparkles, label: 'Creative direction' }
]

export default function ExperienceSection() {
  const experience = siteData.experience

  return (
    <section id="experience" className="relative z-20 overflow-hidden bg-pixel px-4 py-24 text-ink sm:px-6 lg:py-32">
      <div className="absolute inset-0 retro-grid opacity-20" />
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-paper/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.28em] text-ink/60">
            03 / Experience
          </p>
          <h2 className="pixel-font max-w-5xl text-5xl font-black uppercase leading-[0.9] sm:text-6xl lg:text-8xl">
            Creative lead timeline
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionReveal delay={90}>
            <div className="pixel-panel pixel-cut bg-paper p-5">
              <div className="mb-6 flex items-center justify-between border-b-2 border-ink pb-3">
                <div className="window-dots flex gap-2">
                  <span className="bg-pixel" />
                  <span className="bg-cyan" />
                  <span className="bg-violet" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.16em]">kl-forge.log</span>
              </div>

              <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-ink/45">
                Organization
              </p>
              <h3 className="pixel-font mt-2 text-4xl font-black uppercase leading-none">{experience.organization}</h3>
              <p className="mt-4 text-xl font-bold">{experience.role}</p>
              <p className="mt-1 font-mono text-xs font-black uppercase tracking-[0.18em] text-ink/50">
                {experience.period}
              </p>
              <p className="mt-6 text-base font-semibold leading-7 text-ink/70">{experience.description}</p>
            </div>
          </SectionReveal>

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-1 bg-ink md:block" />
            <div className="space-y-5">
              {experience.highlights.map((highlight, index) => {
                const NodeIcon = nodes[index]?.icon ?? Sparkles
                return (
                  <SectionReveal key={highlight} delay={110 + index * 70}>
                    <motion.div
                      whileHover={{ x: 10, scale: 1.01 }}
                      className="group relative border-2 border-ink bg-paper p-5 shadow-[6px_6px_0_#111111] md:ml-16"
                    >
                      <div className="absolute -left-[4.65rem] top-5 hidden h-10 w-10 place-items-center border-2 border-ink bg-ink text-pixel shadow-[4px_4px_0_#F5F5F5] md:grid">
                        <NodeIcon size={18} />
                      </div>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-ink/45">
                            Step {String(index + 1).padStart(2, '0')}
                          </p>
                          <h4 className="mt-2 font-mono text-base font-black uppercase tracking-[0.1em]">
                            {highlight}
                          </h4>
                        </div>
                        <span className="w-fit border-2 border-ink bg-cyan px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.12em]">
                          Hover Expand
                        </span>
                      </div>
                      <p className="mt-4 max-w-2xl text-sm font-semibold leading-6 text-ink/60">
                        Built as part of Khyati&apos;s role at KL Forge, connecting visual taste with practical
                        communication and student community energy.
                      </p>
                    </motion.div>
                  </SectionReveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
