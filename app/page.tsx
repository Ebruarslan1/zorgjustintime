import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-zorg-green text-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <h1 className="text-2xl font-bold tracking-tight">Zorg Just In Time</h1>
          <p className="text-zorg-green-light/90 text-sm mt-1">Justin Smits – ZZP in de zorg</p>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-zorg-green mb-4">
            Persoonlijke zorg, precies op tijd
          </h2>
          <p className="text-lg text-zorg-green-dark/90 leading-relaxed max-w-2xl">
            Zorg Just In Time biedt zorgbemiddeling en ondersteuning op maat. Of u nu zorg zoekt
            of als zorgbemiddelaar wilt samenwerken – neem gerust contact op.
          </p>
        </section>

        {/* CTA naar contact */}
        <section className="mb-14">
          <div className="bg-zorg-green/5 border border-zorg-green/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-zorg-green mb-4">Contact opnemen</h3>
            <p className="text-zorg-green-dark/90 mb-6">
              Bent u een <strong>zorgvrager</strong> of <strong>zorgbemiddelaar</strong>? Vul het
              contactformulier in en we nemen zo snel mogelijk contact met u op.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-zorg-green text-white px-6 py-3 rounded-lg font-medium hover:bg-zorg-green-dark transition-colors"
            >
              Naar contactformulier
            </Link>
          </div>
        </section>

        {/* Over Justin */}
        <section className="border-t border-zorg-green/20 pt-10">
          <h3 className="text-xl font-semibold text-zorg-green mb-3">Over Justin Smits</h3>
          <p className="text-zorg-green-dark/90 leading-relaxed">
            Justin Smits werkt als zelfstandig professional (ZZP) in de zorg. Met Zorg Just In Time
            richt hij zich op snelle, betrouwbare bemiddeling en ondersteuning, zodat zorgvragers
            en aanbieders elkaar vinden wanneer het nodig is.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zorg-green text-white mt-auto">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-white/90">
          © {new Date().getFullYear()} Zorg Just In Time – Justin Smits
        </div>
      </footer>
    </div>
  )
}
