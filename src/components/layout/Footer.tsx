import { Github, Linkedin, Mail } from 'lucide-react'
import { siteData } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="relative z-20 border-t-2 border-ink bg-ink px-4 py-10 text-paper sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="pixel-font text-2xl font-black uppercase text-pixel">KVL Khyati</p>
          <p className="mt-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-paper/45">
            Code / Creativity / Data Science
          </p>
        </div>
        <div className="flex gap-3">
          {[
            { icon: Github, href: siteData.contact.github, label: 'GitHub' },
            { icon: Linkedin, href: siteData.contact.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${siteData.contact.email}`, label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-11 w-11 place-items-center border-2 border-paper/20 bg-paper/5 text-paper transition-colors hover:border-pixel hover:text-pixel"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
