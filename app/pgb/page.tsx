import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zorgjustintime.nl'

export const metadata = {
  title: 'PGB-begeleiding',
  description:
    'PGB-begeleiding voor kinderen, jongeren en volwassenen. Rust, structuur en ondersteuning op maat. Rechtstreeks of via bemiddelingsbureau. Justin Smits, Zorg Just In Time.',
  alternates: { canonical: `${siteUrl}/pgb` },
}

export default function PGBPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-zorg-green mb-4">PGB-begeleiding</h1>
          <p className="text-zorg-green-dark/80 text-lg leading-relaxed mb-10">
            Begeleiding op basis van een persoonsgebonden budget (PGB): op maat, veilig en betrouwbaar. Voor kinderen, jongeren en volwassenen, complex of minder complex.
          </p>

          <div className="space-y-8 text-zorg-green-dark/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-zorg-green mb-3">Wat bied ik aan?</h2>
              <p>
                Eén-op-één begeleiding en langdurige trajecten, afgestemd op wat haalbaar en helpend is voor jouw kind of cliënt. Ook groepsbegeleiding en inzet in woonvoorzieningen behoren tot de mogelijkheden. Je kunt rechtstreeks met mij afspreken, of via een bemiddelingsbureau. Ik werk met PGB-zorg.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mb-3">Voor wie?</h2>
              <p>
                Voor kinderen, jongeren, jongvolwassenen en volwassenen. Zowel bij complexe zorgvragen (autisme, trauma, hechtingsproblematiek, suïcidaliteit, psychische ontregeling) als bij minder intensieve begeleiding. VG-profielen (o.a. VG7) en LVB-jeugd: daar heb ik ervaring mee.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mb-3">Werkgebied en inzet</h2>
              <p>
                Ik werk in Overijssel en omstreken (ongeveer 80 km rond Almelo). Langdurige trajecten, PGB-zorg en samenwerking via bemiddelingsbureaus zijn mogelijk. Ik heb een AGB-code. BHV en Medicatieveiligheid zijn up-to-date.
              </p>
            </section>

            <section className="rounded-2xl bg-zorg-green/5 border border-zorg-green/15 p-6">
              <h2 className="text-xl font-semibold text-zorg-green mb-3">Kennismaken?</h2>
              <p className="mb-4">
                Wil je kennismaken of overleggen of mijn begeleiding past bij jouw situatie? Neem contact op via het contactformulier of bel direct. Samen kijken we hoe ik jouw kind of cliënt kan ondersteunen, veilig en betrouwbaar.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-zorg-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-zorg-green-dark transition-colors"
              >
                Neem contact op
              </Link>
            </section>
          </div>

          <p className="mt-12 pt-8 border-t border-zorg-green/20">
            <Link href="/" className="text-zorg-green font-medium hover:text-zorg-green-dark transition-colors">
              ← Terug naar home
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
