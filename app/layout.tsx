import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zorg Just In Time | Justin Smits – Werk in de zorg',
  description: 'Zorg Just In Time – Justin Smits werkt in de zorg, soms via zorgbemiddeling bij instellingen. Ervaring met maatschappelijke zorg, persoonsgebonden ondersteuning en open voor leidende functies. Almelo. Neem gerust contact op.',
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
