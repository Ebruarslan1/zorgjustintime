import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zorg Just In Time | Justin Smits – Zorgbemiddeling PGB',
  description: 'Zorg Just In Time – Zorgbemiddeling met ervaring in verslavingszorg, jongeren en psychisch zware problematiek. Justin Smits, MBO maatschappelijke zorg. Focus op PGB. Open voor leidende functies. Neem gerust contact op.',
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
      </body>
    </html>
  )
}
