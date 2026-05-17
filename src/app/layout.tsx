import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KVL Khyati - Frontend Developer + Data Science Student',
  description:
    'Premium retro-pixel and futuristic portfolio for KVL Khyati, a CSE Data Science student at KL University.',
  keywords: ['KVL Khyati', 'Frontend Developer', 'Data Science', 'KL University', 'React', 'Next.js'],
  authors: [{ name: 'KVL Khyati' }],
  openGraph: {
    title: 'KVL Khyati - Retro Pixel Portfolio',
    description: 'Interactive portfolio blending pixel art, futuristic UI, and modern frontend engineering.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
