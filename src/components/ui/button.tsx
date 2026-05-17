import * as React from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'terminal'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary:
        'bg-pixel text-black shadow-[6px_6px_0_#111111] hover:shadow-[3px_3px_0_#111111] hover:-translate-y-0.5',
      ghost:
        'bg-white/70 text-ink border-black/20 shadow-[4px_4px_0_rgba(17,17,17,0.18)] hover:border-black/60',
      terminal:
        'bg-ink text-pixel border-pixel/60 shadow-[0_0_28px_rgba(215,240,65,0.25)] hover:bg-black'
    }

    return (
      <button
        ref={ref}
        className={cn(
          'magnetic inline-flex items-center justify-center gap-2 border px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan',
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
