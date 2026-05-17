'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, RadioTower } from 'lucide-react'
import { SiSocketdotio } from 'react-icons/si'
import SectionReveal from '@/components/ui/SectionReveal'
import { siteData } from '@/lib/data'

export default function ProjectsSection() {
  const project = siteData.project

  return (
    <section id="projects" className="relative z-20 overflow-hidden bg-ink px-4 py-24 text-paper sm:px-6 lg:py-32">
      <div className="absolute inset-0 retro-grid opacity-10" />
      <div className="absolute -right-28 top-28 h-80 w-80 rounded-full bg-pixel/20 blur-3xl" />
      <div className="absolute -left-28 bottom-20 h-72 w-72 rounded-full bg-violet/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.28em] text-pixel">
            04 / Featured Project
          </p>
          <h2 className="pixel-font max-w-5xl text-5xl font-black uppercase leading-[0.9] sm:text-6xl lg:text-8xl">
            Realtime arcade card
          </h2>
        </SectionReveal>

        <SectionReveal delay={110}>
          <motion.article
            whileHover={{ rotateX: 2, rotateY: -2, y: -7 }}
            className="mt-14 grid gap-0 overflow-visible lg:grid-cols-[0.9fr_1.1fr]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="terminal-panel pixel-cut p-5 lg:p-8">
              <div className="mb-6 flex items-center justify-between border-b-2 border-pixel/70 pb-4">
                <div className="window-dots flex gap-2">
                  <span className="bg-pixel" />
                  <span className="bg-cyan" />
                  <span className="bg-violet" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.16em] text-pixel">
                  socket.io
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center border-2 border-pixel bg-pixel text-ink shadow-[5px_5px_0_#00FFC6]">
                  <SiSocketdotio size={30} />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-cyan">
                    Main Build
                  </p>
                  <h3 className="mt-1 text-3xl font-black leading-tight text-paper sm:text-4xl">{project.title}</h3>
                </div>
              </div>

              <p className="mt-6 font-mono text-sm font-black uppercase tracking-[0.12em] text-pixel">
                {project.subtitle}
              </p>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-paper/70">{project.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag-pill bg-paper/10 text-paper">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-pixel bg-pixel px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.12em] text-ink shadow-[4px_4px_0_#00FFC6]"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-paper/20 bg-paper/10 px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.12em] text-paper transition-colors hover:border-cyan"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="border-2 border-ink bg-paper p-5 text-ink shadow-[8px_8px_0_#D7F041] lg:translate-y-10">
              <div className="mb-5 flex items-center justify-between border-b-2 border-ink pb-3">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.16em]">live.preview</span>
                <RadioTower size={18} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="relative min-h-32 border-2 border-ink bg-pixel/30 p-4 shadow-[4px_4px_0_#111111]"
                  >
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-ink/45">
                      #{String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-3 text-sm font-black leading-6">{highlight}</p>
                    <ArrowUpRight className="absolute bottom-3 right-3" size={16} />
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden border-2 border-ink bg-ink p-4 text-pixel">
                <pre className="overflow-hidden font-mono text-[11px] font-bold leading-6">
                  {`socket.on("share", payload => {
  room.broadcast(payload)
  ui.render("instant")
})`}
                </pre>
              </div>
            </div>
          </motion.article>
        </SectionReveal>
      </div>
    </section>
  )
}
