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
              Justin Smits – ZZP in de zorg
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
              Persoonlijke zorg, precies op tijd
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
              Zorg Just In Time biedt zorgbemiddeling en ondersteuning op maat. Voor zorgvragers én zorgbemiddelaars.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-zorg-green px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
              >
                Neem contact op
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
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-10">
              Wat we doen
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-zorg-green/5 border border-zorg-green/10 hover:border-zorg-green/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zorg-green/10 flex items-center justify-center text-zorg-green font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-semibold text-zorg-green mb-2">Zorgbemiddeling</h3>
                <p className="text-zorg-green-dark/80 text-sm leading-relaxed">
                  Snelle, betrouwbare koppeling tussen zorgvragers en de juiste zorg of ondersteuning.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-zorg-green/5 border border-zorg-green/10 hover:border-zorg-green/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zorg-green/10 flex items-center justify-center text-zorg-green font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-semibold text-zorg-green mb-2">Ondersteuning op maat</h3>
                <p className="text-zorg-green-dark/80 text-sm leading-relaxed">
                  Persoonlijke begeleiding zodat u precies krijgt wat u nodig heeft, wanneer het nodig is.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-zorg-green/5 border border-zorg-green/10 hover:border-zorg-green/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zorg-green/10 flex items-center justify-center text-zorg-green font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-semibold text-zorg-green mb-2">Samenwerking</h3>
                <p className="text-zorg-green-dark/80 text-sm leading-relaxed">
                  Voor zorgbemiddelaars: samenwerken aan betere zorg en korte lijnen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Over mij */}
        <section id="over-mij" className="py-16 sm:py-20 bg-zorg-green/5 scroll-mt-20">
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
                  Ik ben <strong className="text-zorg-green">Justin Smits</strong> en werk als zelfstandig professional (ZZP) in de zorg. Met Zorg Just In Time richt ik me op snelle, betrouwbare bemiddeling en ondersteuning.
                </p>
                <p className="text-zorg-green-dark/90 leading-relaxed">
                  Mijn doel is simpel: ervoor zorgen dat zorgvragers en aanbieders elkaar vinden wanneer het nodig is. Of u nu zorg zoekt voor uzelf of een naaste, of als zorgbemiddelaar wilt samenwerken – ik denk graag met u mee.
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
              Contact
            </h2>
            <p className="text-white/90 max-w-xl mb-8 leading-relaxed">
              Bent u een <strong>zorgvrager</strong> of <strong>zorgbemiddelaar</strong>? Vul het contactformulier in en we nemen zo snel mogelijk contact met u op.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-zorg-green px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Naar contactformulier
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
