'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const bootLines = ['boot: pixel-ui', 'mount: portfolio', 'sync: creative-core', 'ready: kvl-khyati']

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem('khyati-loader')) {
      setVisible(false)
      return
    }

    const interval = window.setInterval(() => {
      setProgress((value) => {
        const next = Math.min(100, value + 11)
        if (next === 100) {
          window.clearInterval(interval)
          window.setTimeout(() => {
            sessionStorage.setItem('khyati-loader', 'true')
            setVisible(false)
          }, 500)
        }
        return next
      })
    }, 115)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-ink px-6 text-paper"
          exit={{ opacity: 0, y: '-5%', transition: { duration: 0.72, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="absolute inset-0 retro-grid opacity-10" />
          <motion.div
            aria-hidden="true"
            className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-pixel/20 to-transparent"
            animate={{ y: ['-30vh', '110vh'] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'linear' }}
          />

          <div className="relative w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="terminal-panel pixel-cut p-5 sm:p-7"
            >
              <div className="mb-6 flex items-center justify-between border-b-2 border-pixel/80 pb-3">
                <div className="window-dots flex gap-2">
                  <span className="bg-pixel" />
                  <span className="bg-cyan" />
                  <span className="bg-violet" />
                </div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pixel">
                  loading.exe
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs uppercase text-paper/70">
                {bootLines.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.13 }}
                  >
                    <span className="text-pixel">&gt;</span> {line}
                  </motion.p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-12 gap-1">
                {Array.from({ length: 24 }).map((_, index) => (
                  <motion.span
                    key={index}
                    className="h-5 border border-pixel/40 bg-pixel"
                    initial={{ opacity: 0.12 }}
                    animate={{ opacity: index < Math.ceil(progress / 4.2) ? 1 : 0.12 }}
                  />
                ))}
              </div>

              <div className="mt-5 flex items-end justify-between">
                <h1 className="pixel-font text-3xl font-black uppercase leading-none text-pixel sm:text-5xl">
                  KVL
                </h1>
                <p className="font-mono text-lg font-black text-cyan">{progress}%</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
