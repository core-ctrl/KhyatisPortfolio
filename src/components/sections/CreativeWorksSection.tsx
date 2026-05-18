'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import { siteData, type CreativeWork } from '@/lib/data'

export default function CreativeWorksSection() {
  const [active, setActive] = useState<CreativeWork | null>(null)

  return (
    <section id="creative" className="relative z-20 overflow-hidden px-4 py-24 sm:px-6 lg:py-32">
      <div className="absolute inset-0 retro-grid opacity-75" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.28em] text-ink/55">
            05 / Creative Works
          </p>
          <h2 className="pixel-font max-w-5xl text-5xl font-black uppercase leading-[0.9] text-ink sm:text-6xl lg:text-8xl">
            Poster gallery wall
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {siteData.assets.creativeWorks.map((work, index) => (
            <SectionReveal key={work.title} delay={100 + index * 90}>
              <motion.button
                drag
                dragConstraints={{ left: -18, right: 18, top: -18, bottom: 18 }}
                whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? -2 : 2 }}
                onClick={() => setActive(work)}
                className="group w-full border-2 border-ink bg-paper p-3 text-left shadow-[8px_8px_0_#111111]"
              >
                <div className="overflow-hidden border-2 border-ink bg-pixel">
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={1200}
                    height={900}
                    sizes="(min-width: 1024px) 50vw, 92vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-ink/45">
                      {work.type}
                    </p>
                    <h3 className="mt-1 font-mono text-lg font-black uppercase tracking-[0.08em] text-ink">
                      {work.title}
                    </h3>
                  </div>
                  <span className="border-2 border-ink bg-pixel px-3 py-2 font-mono text-[10px] font-black uppercase">
                    Open
                  </span>
                </div>
              </motion.button>
            </SectionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[300] grid place-items-center bg-ink/80 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="relative max-w-4xl border-2 border-pixel bg-paper p-3 shadow-[10px_10px_0_#D7F041]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute -right-3 -top-3 grid h-10 w-10 place-items-center border-2 border-ink bg-pixel text-ink"
                aria-label="Close image preview"
              >
                <X size={18} />
              </button>
              <Image
                src={active.image}
                alt={active.title}
                width={1400}
                height={1050}
                sizes="92vw"
                className="max-h-[78vh] w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
