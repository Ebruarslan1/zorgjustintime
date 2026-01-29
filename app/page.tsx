import Link from 'next/link'
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
          <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">
            <p className="text-zorg-green-light text-sm font-medium uppercase tracking-wider mb-4">
              Justin Smits – Zorgbemiddeling met ervaring
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
              Zorg die past, wanneer het nodig is
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
              Welkom. Ik help u graag verder met zorgbemiddeling en ondersteuning – met jaren ervaring in verslavingszorg, jongeren en complexe problematiek. Uw vraag staat centraal.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-zorg-green px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
              >
                Stel uw vraag
              </Link>
              <a
                href="#over-mij"
                className="inline-flex items-center justify-center border-2 border-white/60 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Meer over mij
              </a>
            </div>
          </div>
        </section>

        {/* Wat we doen */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-4">
              Wat ik voor u doe
            </h2>
            <p className="text-zorg-green-dark/80 max-w-2xl mb-10 leading-relaxed">
              Mijn focus ligt op <strong className="text-zorg-green">PGB (persoonsgebonden budget)</strong>, niet op WLZ. Ik bemiddel tussen u en de juiste zorg of ondersteuning – persoonlijk en met oog voor uw situatie.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-zorg-green/5 border border-zorg-green/10 hover:border-zorg-green/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zorg-green/10 flex items-center justify-center text-zorg-green font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-semibold text-zorg-green mb-2">Zorgbemiddeling</h3>
                <p className="text-zorg-green-dark/80 text-sm leading-relaxed">
                  Snelle, betrouwbare koppeling tussen zorgvragers en de juiste zorg of ondersteuning – met ervaring in complexe situaties.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-zorg-green/5 border border-zorg-green/10 hover:border-zorg-green/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zorg-green/10 flex items-center justify-center text-zorg-green font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-semibold text-zorg-green mb-2">PGB & ondersteuning</h3>
                <p className="text-zorg-green-dark/80 text-sm leading-relaxed">
                  Ondersteuning bij persoonsgebonden budget: zodat u precies krijgt wat u nodig heeft, op uw moment.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-zorg-green/5 border border-zorg-green/10 hover:border-zorg-green/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zorg-green/10 flex items-center justify-center text-zorg-green font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-semibold text-zorg-green mb-2">Samenwerking</h3>
                <p className="text-zorg-green-dark/80 text-sm leading-relaxed">
                  Voor instellingen en zorgbemiddelaars: samenwerken aan betere zorg en korte lijnen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ervaring */}
        <section className="py-16 sm:py-20 bg-zorg-green/5">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-4">
              Waar ik ervaring mee heb
            </h2>
            <p className="text-zorg-green-dark/80 max-w-2xl mb-8 leading-relaxed">
              Ik werk al een aantal jaar via zorgbemiddeling bij instellingen. Daarbij heb ik veel gewerkt met:
            </p>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-zorg-green-dark/90">
              <li className="flex items-center gap-3 p-4 rounded-xl bg-white border border-zorg-green/10">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0" aria-hidden />
                Verslavingszorg
              </li>
              <li className="flex items-center gap-3 p-4 rounded-xl bg-white border border-zorg-green/10">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0" aria-hidden />
                Jongeren
              </li>
              <li className="flex items-center gap-3 p-4 rounded-xl bg-white border border-zorg-green/10">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0" aria-hidden />
                Psychisch zware problematiek
              </li>
              <li className="flex items-center gap-3 p-4 rounded-xl bg-white border border-zorg-green/10">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0" aria-hidden />
                Maatschappelijke zorg (MBO)
              </li>
              <li className="flex items-center gap-3 p-4 rounded-xl bg-white border border-zorg-green/10 sm:col-span-2 md:col-span-1">
                <span className="w-2 h-2 rounded-full bg-zorg-green flex-shrink-0" aria-hidden />
                PGB – persoonsgebonden budget
              </li>
            </ul>
          </div>
        </section>

        {/* Over mij */}
        <section id="over-mij" className="py-16 sm:py-20 bg-white scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-6">
              Over mij
            </h2>
            <div className="flex flex-col sm:flex-row gap-10 items-start">
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-zorg-green flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-lg">
                JS
              </div>
              <div className="space-y-4">
                <p className="text-zorg-green-dark/90 leading-relaxed">
                  Ik ben <strong className="text-zorg-green">Justin Smits</strong>. Ik heb maatschappelijke zorg op het MBO gedaan en werk al een aantal jaar als zorgbemiddelaar bij instellingen. Daarbij heb ik veel ervaring opgedaan met <strong>verslavingszorg</strong>, <strong>jongeren</strong> en <strong>psychisch zware problematiek</strong>. Ik sta ook open voor <strong>leidende functies</strong>.
                </p>
                <p className="text-zorg-green-dark/90 leading-relaxed">
                  Een eigenschap die mij kenmerkt: ik blijf <strong>kalm</strong>, maakt niet uit wat er gebeurt. Dat helpt in complexe situaties – voor cliënten, collega’s en samenwerking.
                </p>
                <p className="text-zorg-green-dark/90 leading-relaxed">
                  Met Zorg Just In Time help ik zorgvragers en aanbieders graag verder. Mijn focus ligt op <strong>PGB (persoonsgebonden budget)</strong>, niet op WLZ. Of u nu zorg zoekt voor uzelf of een naaste, of als instelling of zorgbemiddelaar wilt samenwerken – ik denk graag met u mee. Uw vraag staat centraal.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-4 text-zorg-green font-semibold hover:text-zorg-green-dark transition-colors"
                >
                  Neem contact met mij op →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact sectie */}
        <section id="contact" className="py-16 sm:py-20 bg-zorg-green text-white scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Neem gerust contact op
            </h2>
            <p className="text-white/90 max-w-xl mb-4 leading-relaxed">
              Bent u een <strong>zorgvrager</strong> of <strong>zorgbemiddelaar</strong>? Stel uw vraag via het formulier – ik neem zo snel mogelijk contact met u op. Geen vraag is te klein.
            </p>
            <p className="text-white/80 text-sm mb-8">
              <a href="mailto:zorgjustintime@gmail.com" className="hover:text-white underline transition-colors">zorgjustintime@gmail.com</a> · <a href="tel:+31614840145" className="hover:text-white underline transition-colors">06 14 84 01 45</a> · Almelo
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-zorg-green px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Stel uw vraag
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
