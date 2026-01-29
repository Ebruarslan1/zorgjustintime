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
              Justin Smits – Werk in de zorg
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
              Zorg die past, wanneer het nodig is
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
              Welkom. Ik werk in de zorg en kom soms via zorgbemiddeling bij instellingen terecht. Graag maak ik kennis – of u nu een vraag heeft over ondersteuning, samenwerking of een leidende rol.
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

        {/* Mijn werk */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-zorg-green mb-6">
              Mijn werk
            </h2>
            <p className="text-zorg-green-dark/80 max-w-2xl mb-10 leading-relaxed">
              Ik werk in de zorg en kom regelmatig via zorgbemiddeling bij instellingen terecht. Daar doe ik ondersteuning en begeleiding – in situaties waar mensen met een eigen budget voor zorg en ondersteuning de juiste hulp zoeken. Ik werk graag samen met teams en sta open voor een leidende rol waar dat past.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-zorg-green/5 border border-zorg-green/10 hover:border-zorg-green/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zorg-green/10 flex items-center justify-center text-zorg-green font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-semibold text-zorg-green mb-2">Werk via instellingen</h3>
                <p className="text-zorg-green-dark/80 text-sm leading-relaxed">
                  Soms kom ik via zorgbemiddeling bij organisaties. Daar lever ik ondersteuning en begeleiding waar het nodig is.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-zorg-green/5 border border-zorg-green/10 hover:border-zorg-green/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zorg-green/10 flex items-center justify-center text-zorg-green font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-semibold text-zorg-green mb-2">Persoonsgebonden ondersteuning</h3>
                <p className="text-zorg-green-dark/80 text-sm leading-relaxed">
                  Mijn werk speelt zich af waar mensen met een eigen budget de juiste zorg en ondersteuning zoeken – op maat en op het juiste moment.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-zorg-green/5 border border-zorg-green/10 hover:border-zorg-green/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zorg-green/10 flex items-center justify-center text-zorg-green font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-semibold text-zorg-green mb-2">Samenwerking & leiding</h3>
                <p className="text-zorg-green-dark/80 text-sm leading-relaxed">
                  Ik werk graag in teams en sta open voor leidende functies. Korte lijnen en duidelijke afstemming vind ik belangrijk.
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
                  Ik ben <strong className="text-zorg-green">Justin Smits</strong>. Ik heb de opleiding maatschappelijke zorg op het MBO gedaan en werk al een aantal jaar in de zorg – soms via zorgbemiddeling bij instellingen. In die tijd heb ik gewerkt op plekken waar jongeren, mensen in de verslavingszorg en mensen met zware psychische problematiek ondersteuning krijgen. In dat soort omgevingen voel ik me thuis.
                </p>
                <p className="text-zorg-green-dark/90 leading-relaxed">
                  Wat anderen vaak opvalt: ik blijf kalm, wat er ook gebeurt. In drukke of emotionele situaties helpt dat – voor cliënten en voor het team. Ik sta open voor leidende functies en denk graag mee over hoe we zorg en ondersteuning goed organiseren.
                </p>
                <p className="text-zorg-green-dark/90 leading-relaxed">
                  Met Zorg Just In Time wil ik een duidelijk gezicht bieden. Heeft u een vraag over samenwerking, een opdracht of een rol in de zorg – neem gerust contact op. Uw vraag staat centraal.
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
            <p className="text-white/90 max-w-xl mb-8 leading-relaxed">
              Heeft u een vraag over samenwerking, een opdracht of een rol in de zorg? Stel uw vraag via het formulier – ik neem zo snel mogelijk contact met u op. Geen vraag is te klein.
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
