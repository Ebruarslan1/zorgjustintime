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
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-zorg-green px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
              >
                Neem contact op
              </Link>
              <a
                href="#pgb-begeleiding"
                className="inline-flex items-center justify-center border-2 border-white/60 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Bekijk PGB-begeleiding
              </a>
            </div>
          </div>
        </section>

        {/* PGB-begeleiding */}
        <section id="pgb-begeleiding" className="py-16 sm:py-20 bg-zorg-green/5 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-4">
              PGB-begeleiding
            </h2>
            <p className="text-zorg-green-dark/90 max-w-2xl leading-relaxed mb-6">
              Begeleiding op basis van een persoonsgebonden budget: op maat, veilig en betrouwbaar. Je kunt rechtstreeks met mij afspreken of via een bemiddelingsbureau. Voor kinderen, jongeren en volwassenen, intensief of minder intensief.
            </p>
            <Link
              href="/pgb"
              className="inline-block text-zorg-green font-semibold hover:text-zorg-green-dark transition-colors"
            >
              Meer over PGB-begeleiding →
            </Link>
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

        {/* Expertise */}
        <section className="py-16 sm:py-20 bg-zorg-green/5">
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
                Combinatieproblematiek: autisme + trauma / hechtingsproblematiek, agressieregulatie, stemmingsproblematiek
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
            <p className="text-white/90 max-w-2xl mb-6 leading-relaxed">
              Wil je kennismaken of overleggen of mijn begeleiding past bij jouw situatie? Neem contact op via het contactformulier of bel direct.
            </p>
            <p className="text-white/90 max-w-2xl mb-8 leading-relaxed">
              Samen kijken we hoe begeleiding onder PGB bij jou past, veilig en betrouwbaar.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-zorg-green px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Neem contact op
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
