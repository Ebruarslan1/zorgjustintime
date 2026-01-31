import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zorgjustintime.nl'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met Zorg Just In Time. Vraag over PGB-begeleiding, kennismaken of overleggen? Bel of vul het contactformulier in. Justin Smits, Almelo.',
  openGraph: {
    title: 'Contact | Zorg Just In Time',
    description: 'Neem contact op met Justin Smits. Begeleiding voor kinderen, jongeren en volwassenen in Overijssel.',
  },
  alternates: { canonical: `${siteUrl}/contact` },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
