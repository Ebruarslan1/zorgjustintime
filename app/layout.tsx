import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import CookieBanner from './components/CookieBanner'
import WhatsAppButton from './components/WhatsAppButton'
import JsonLd from './components/JsonLd'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zorgjustintime.nl'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zorg Just In Time | Justin Smits – Begeleiding kinderen, jongeren en volwassenen',
    template: '%s | Zorg Just In Time',
  },
  description:
    'Betrouwbare begeleiding voor kinderen, jongeren en volwassenen. Rust, structuur en ondersteuning op maat. PGB-zorg, Overijssel. Justin Smits, Almelo.',
  keywords: [
    'PGB begeleiding',
    'begeleiding kinderen',
    'begeleiding jongeren',
    'zorg Overijssel',
    'Almelo',
    'Justin Smits',
    'Zorg Just In Time',
    'persoonsgebonden budget',
    'jeugdzorg',
    'GGZ begeleiding',
  ],
  authors: [{ name: 'Justin Smits', url: siteUrl }],
  creator: 'Zorg Just In Time',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: siteUrl,
    siteName: 'Zorg Just In Time',
    title: 'Zorg Just In Time | Begeleiding kinderen, jongeren en volwassenen',
    description:
      'Betrouwbare begeleiding voor kinderen, jongeren en volwassenen. Rust, structuur en ondersteuning op maat. PGB-zorg, Overijssel.',
    images: [{ url: '/justin.png', width: 400, height: 400, alt: 'Justin Smits' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zorg Just In Time | Begeleiding op maat',
    description: 'Betrouwbare begeleiding voor kinderen, jongeren en volwassenen. PGB-zorg, Overijssel.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={plusJakarta.variable}>
      <body className="antialiased min-h-screen bg-white text-zorg-green-dark font-sans">
        <JsonLd />
        {children}
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  )
}
