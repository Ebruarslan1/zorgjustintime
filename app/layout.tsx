import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import CookieBanner from './components/CookieBanner'
import WhatsAppButton from './components/WhatsAppButton'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zorg Just In Time | Justin Smits – Begeleiding kinderen, jongeren en volwassenen',
  description: 'Betrouwbare begeleiding voor kinderen, jongeren, jongvolwassenen en volwassenen – complex of minder complex. Rust, structuur en ondersteuning op maat. PGB-zorg, Overijssel. Justin Smits – Almelo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={plusJakarta.variable}>
      <body className="antialiased min-h-screen bg-white text-zorg-green-dark font-sans">
        {children}
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  )
}
