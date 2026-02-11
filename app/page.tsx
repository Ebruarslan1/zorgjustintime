import Link from 'next/link'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-zorg-green text-white">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.15)_0%,transparent_50%)]" aria-hidden />
          <div className="relative max-w-5xl mx-auto px-6 py-16 sm:py-24">
            <p className="text-zorg-green-light text-sm font-medium uppercase tracking-wider mb-3">
              Zorg Just In Time
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
              Betrouwbare begeleiding voor kinderen, jongeren en volwassenen
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-xl leading-relaxed">
              Rust, structuur en ondersteuning op maat.
            </p>
          </div>
        </section>

        {/* PGB-begeleiding en Samenwerking */}
        <section id="pgb-begeleiding" className="py-16 sm:py-20 bg-zorg-green/5 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-4">
                  PGB-begeleiding
                </h2>
                <p className="text-zorg-green-dark/90 leading-relaxed mb-6">
                  Begeleiding op basis van een persoonsgebonden budget: cliënten of ouders (voor hun kind) kunnen rechtstreeks bij mij inkopen. Op maat, veilig en betrouwbaar. Voor kinderen, jongeren en volwassenen, intensief of minder intensief.
                </p>
                <Link
                  href="/pgb"
                  className="inline-block text-zorg-green font-semibold hover:text-zorg-green-dark transition-colors"
                >
                  Meer over PGB-begeleiding →
                </Link>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-4">
                  Samenwerking
                </h2>
                <p className="text-zorg-green-dark/90 leading-relaxed mb-6">
                  Voor bemiddelingsbureaus en zorginstellingen die met mij willen samenwerken: ik zet me in op basis van jullie vraag.
                </p>
                <Link
                  href="#samenwerking"
                  className="inline-block text-zorg-green font-semibold hover:text-zorg-green-dark transition-colors"
                >
                  Lees meer over samenwerking →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Over mij */}
        <section id="over-mij" className="py-16 sm:py-20 bg-white scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-6">
              Over mij
            </h2>
            <div className="flex flex-col sm:flex-row gap-10 items-start">
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-lg relative">
                <Image
                  src="/justin.png"
                  alt="Justin Smits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 96px, 128px"
                  priority
                />
              </div>
              <div className="space-y-4">
                <p className="text-zorg-green-dark/90 leading-relaxed">
                  Mijn naam is <strong className="text-zorg-green">Justin</strong>, zelfstandig zorgprofessional in Overijssel (woonachtig in Almelo). Ik begeleid kinderen, jongeren, jongvolwassenen én volwassenen, zowel individueel als in samenwerking met ouders, instellingen en bemiddelingsbureaus. Ik heb ervaring met zowel complexe zorgvragen (autisme, trauma, hechtingsproblematiek, suïcidaliteit, psychische ontregeling) als minder intensieve begeleiding. Mijn manier van werken is duidelijk, rustig en betrokken, met oog voor veiligheid en continuïteit.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-2 text-zorg-green font-semibold hover:text-zorg-green-dark transition-colors"
                >
                  Neem contact met mij op →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Samenwerking (uitgebreid) */}
        <section id="samenwerking" className="py-16 sm:py-20 bg-zorg-green/5 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-10">
              Samenwerking
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-zorg-green mb-4">
                  Bemiddelingsbureaus
                </h3>
                <div className="space-y-4 text-zorg-green-dark/90 leading-relaxed">
                  <p>
                    Ik werk graag samen met bemiddelingsbureaus binnen de gehandicaptenzorg en aanverwante zorgsectoren. Door mijn brede werkervaring binnen verschillende organisaties en doelgroepen ben ik flexibel inzetbaar en kan ik mij snel aanpassen aan nieuwe teams, werkwijzen en zorgvragen.
                  </p>
                  <p>
                    Ik ben inzetbaar voor uiteenlopende opdrachten, variërend van intensieve begeleidingsvragen tot stabiliserende en ondersteunende zorg. Binnen mijn werk staat professionaliteit, betrouwbaarheid en duidelijke communicatie centraal. Ik werk transparant en hecht veel waarde aan het nakomen van afspraken en het waarborgen van continuïteit van zorg.
                  </p>
                  <p>
                    Bent u als bemiddelingsbureau op zoek naar een zelfstandige en ervaren zorgprofessional, dan kom ik graag in contact om de mogelijkheden te bespreken.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-2 text-zorg-green font-semibold hover:text-zorg-green-dark transition-colors"
                  >
                    Neem contact op →
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-zorg-green mb-4">
                  Zorginstellingen
                </h3>
                <div className="space-y-4 text-zorg-green-dark/90 leading-relaxed">
                  <p>
                    Ook zorginstellingen kunnen rechtstreeks contact met mij opnemen voor samenwerking. Ik ben beschikbaar voor tijdelijke inzet, ondersteuning binnen teams en begeleiding van cliënten met uiteenlopende zorgvragen.
                  </p>
                  <p>
                    Mijn kracht ligt in het opbouwen van vertrouwen, het bieden van structuur en duidelijkheid en het aansluiten bij de individuele behoeften van cliënten en hun netwerk. Ik denk graag mee over passende begeleiding en het creëren van een veilige en stabiele leefomgeving.
                  </p>
                  <p>
                    Heeft uw organisatie behoefte aan een betrokken en ervaren zorgprofessional, dan nodig ik u van harte uit om contact met mij op te nemen via het contactformulier op de website.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-2 text-zorg-green font-semibold hover:text-zorg-green-dark transition-colors"
                  >
                    Naar contactformulier →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-6">
              Expertise
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-zorg-green-dark/90 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Eén-op-één begeleiding en langdurige trajecten
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Groepsbegeleiding en woonvoorzieningen
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Combinatieproblematiek: autisme, ADHD, trauma / hechtingsproblematiek, agressieregulatie, stemmingsproblematiek
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Cliënten die tijdelijk in acute psychose of ontregeling belanden
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                VG-profielen (o.a. VG7) en LVB-jeugd
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Minder intensieve begeleiding met focus op vertrouwen en stabiliteit
              </li>
              <li className="flex items-start gap-3 sm:col-span-2">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Samenwerking met ouders en betrokken professionals
              </li>
            </ul>
          </div>
        </section>

        {/* Mijn manier van werken */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-6">
              Mijn manier van werken
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-zorg-green-dark/90 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Rustig, duidelijk en betrokken
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Open communicatie met ouders en betrokkenen
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Afstemming op wat haalbaar en helpend is voor de cliënt
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Veiligheid en continuïteit centraal
              </li>
            </ul>
          </div>
        </section>

        {/* Praktische informatie */}
        <section className="py-16 sm:py-20 bg-zorg-green/5">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-6">
              Praktische informatie
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-zorg-green-dark/90 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Werkgebied: Overijssel (ongeveer 80 km vanaf Almelo)
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Inzet: langdurige trajecten, PGB-zorg, samenwerking via bemiddelingsbureaus
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                Intensieve én minder intensieve begeleiding
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                AGB-code aanwezig
              </li>
              <li className="flex items-start gap-3 sm:col-span-2">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0 mt-2" aria-hidden />
                BHV en Medicatieveiligheid: altijd up-to-date
              </li>
            </ul>
          </div>
        </section>

        {/* Contact sectie */}
        <section id="contact" className="py-16 sm:py-20 bg-zorg-green text-white scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Neem gerust contact op
            </h2>
            <p className="text-white/90 max-w-2xl mb-8 leading-relaxed">
              Wil je kennismaken of overleggen of mijn begeleiding past bij jouw situatie? Samen kijken we hoe begeleiding onder PGB bij jou past, veilig en betrouwbaar.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 border border-white/20">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-zorg-green mb-4" aria-hidden>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <h3 className="font-semibold text-white mb-2">Telefonisch contact</h3>
                <a
                  href="tel:+31614840145"
                  className="inline-flex items-center justify-center gap-2 bg-white text-zorg-green px-5 py-2.5 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg w-full sm:w-auto"
                >
                  Bel 06 14 84 01 45
                </a>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 border border-white/20">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-zorg-green mb-4" aria-hidden>
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <h3 className="font-semibold text-white mb-2">Stuur meteen een WhatsApp</h3>
                <a
                  href="https://wa.me/31614840145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-zorg-green px-5 py-2.5 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg w-full sm:w-auto"
                >
                  Open WhatsApp
                </a>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 border border-white/20">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-zorg-green mb-4" aria-hidden>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <h3 className="font-semibold text-white mb-2">Vul contactformulier in</h3>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-zorg-green px-5 py-2.5 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg w-full sm:w-auto"
                >
                  Naar formulier
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
