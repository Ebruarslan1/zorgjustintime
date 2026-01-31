const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zorgjustintime.nl'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Zorg Just In Time',
  description:
    'Betrouwbare begeleiding voor kinderen, jongeren en volwassenen. Rust, structuur en ondersteuning op maat. PGB-zorg in Overijssel.',
  url: siteUrl,
  telephone: '+31614840145',
  email: 'zorgjustintime@hotmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Almelo',
    addressRegion: 'Overijssel',
    addressCountry: 'NL',
  },
  areaServed: { '@type': 'State', name: 'Overijssel' },
  sameAs: [],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
