'use client'

import type { ElementType } from 'react'
import { motion } from 'framer-motion'
import { Code2, KeyRound, ServerCog, Wand2 } from 'lucide-react'
import { FaAws, FaJava } from 'react-icons/fa6'
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTypescript
} from 'react-icons/si'
import SectionReveal from '@/components/ui/SectionReveal'
import { siteData } from '@/lib/data'

const categoryIcons = {
  frontend: Code2,
  backend: ServerCog,
  database: KeyRound,
  cloud: FaAws,
  creative: Wand2
}

const skillIcons: Record<string, ElementType> = {
  React: SiReact,
  'Vite React': SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  Java: FaJava,
  'Spring Boot': SiSpringboot,
  'Node.js': SiNodedotjs,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  AWS: FaAws
}

const categoryTone: Record<string, string> = {
  frontend: '#D7F041',
  backend: '#00FFC6',
  database: '#8B5CF6',
  cloud: '#F5F5F5',
  creative: '#D7F041'
}

function SkillCategory({
  id,
  title,
  skills,
  index
}: {
  id: keyof typeof siteData.skills
  title: string
  skills: string[]
  index: number
}) {
  const Icon = categoryIcons[id]
  const tone = categoryTone[id]

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: 12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -9, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
      className="terminal-panel pixel-cut min-h-full p-5"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="mb-5 flex items-center justify-between border-b border-paper/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border-2 border-ink bg-pixel text-ink shadow-[3px_3px_0_#00FFC6]">
            <Icon size={18} />
          </span>
          <h3 className="font-mono text-xs font-black uppercase tracking-[0.18em] text-paper">{title}</h3>
        </div>
        <span className="h-3 w-3" style={{ background: tone, boxShadow: `0 0 18px ${tone}` }} />
      </div>

      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => {
          const SkillIcon = skillIcons[skill]
          return (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05, x: 2 }}
              className="group flex items-center gap-2 border border-paper/10 bg-paper/[0.06] px-3 py-3 text-paper transition-colors hover:border-pixel hover:bg-pixel hover:text-ink"
            >
              {SkillIcon ? <SkillIcon className="shrink-0 text-base" /> : <span className="h-2 w-2 shrink-0 bg-cyan" />}
              <span className="truncate font-mono text-[10px] font-black uppercase tracking-[0.08em]">{skill}</span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const categories = [
    ['frontend', 'Frontend'],
    ['backend', 'Backend'],
    ['database', 'Database'],
    ['cloud', 'Cloud'],
    ['creative', 'Creative']
  ] as const
  const marquee = [...siteData.allSkills, ...siteData.allSkills]

  return (
    <section id="skills" className="relative z-20 overflow-hidden px-4 py-24 sm:px-6 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-ink/20" />
      <div className="absolute -right-24 top-40 h-72 w-72 bg-cyan/20 blur-3xl" />
      <div className="absolute -left-24 bottom-20 h-72 w-72 bg-violet/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.28em] text-ink/55">
                02 / Skills
              </p>
              <h2 className="pixel-font max-w-4xl text-5xl font-black uppercase leading-[0.9] text-ink sm:text-6xl lg:text-8xl">
                Developer terminal panels
              </h2>
            </div>
            <p className="max-w-md text-base font-semibold leading-7 text-ink/60">
              A compact skill interface mixing frontend precision, backend logic, database fluency, cloud awareness,
              and creative production.
            </p>
          </div>
        </SectionReveal>

        <div className="my-12 overflow-hidden border-y-2 border-ink bg-pixel py-4">
          <div className="marquee-track gap-3">
            {marquee.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-4 py-2 font-mono text-[11px] font-black uppercase tracking-[0.14em] text-ink shadow-[3px_3px_0_#111111]"
              >
                <span className="h-2 w-2 bg-ink" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {categories.map(([id, label], index) => (
            <SkillCategory key={id} id={id} title={label} skills={siteData.skills[id]} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
