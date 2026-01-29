import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zorg Just In Time | Justin Smits – ZZP in de zorg',
  description: 'Zorg Just In Time – Persoonlijke zorgbemiddeling en ondersteuning. Justin Smits, ZZPer in de zorg. Neem contact op als zorgvrager of zorgbemiddelaar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="antialiased min-h-screen bg-white text-zorg-green-dark font-sans">
        {children}
      </body>
    </html>
  )
}
