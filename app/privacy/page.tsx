import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacyverklaring | Zorg Just In Time',
  description: 'Privacyverklaring van Zorg Just In Time – hoe wij omgaan met uw gegevens.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-zorg-green mb-2">Privacyverklaring</h1>
          <p className="text-zorg-green-dark/70 text-sm mb-10">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="max-w-none text-zorg-green-dark/90 leading-relaxed space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">1. Wie zijn wij?</h2>
              <p>
                Zorg Just In Time is verantwoordelijk voor de verwerking van uw persoonsgegevens op deze website. Justin Smits voert de activiteiten uit. U kunt ons bereiken via zorgjustintime@hotmail.com of 06 14 84 01 45. Ons adres: Almelo. KVK 87265931, vestiging 000053185749.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">2. Welke gegevens verwerken wij?</h2>
              <p>
                Wij verwerken alleen persoonsgegevens die u zelf aan ons verstrekt, bijvoorbeeld via het contactformulier. Dat kunnen zijn: uw naam, e-mailadres, telefoonnummer, het onderwerp van uw bericht (zorgvrager of zorgbemiddelaar) en de inhoud van uw bericht.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">3. Waarvoor gebruiken wij uw gegevens?</h2>
              <p>
                Wij gebruiken uw gegevens uitsluitend om op uw bericht te reageren en om contact met u te onderhouden in het kader van uw vraag of een mogelijke samenwerking. Wij verkopen uw gegevens niet en verstrekken deze niet aan derden voor commerciële doeleinden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">4. Grondslag voor de verwerking</h2>
              <p>
                Wij verwerken uw gegevens op basis van uw toestemming (door het formulier in te vullen en te versturen) of, als het contact uitmondt in een opdracht of samenwerking, voor de uitvoering van die overeenkomst.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">5. Hoe lang bewaren wij uw gegevens?</h2>
              <p>
                Wij bewaren uw gegevens niet langer dan nodig. Berichten via het contactformulier bewaren wij in principe tot één jaar na het laatste contact, tenzij wij ze langer moeten bewaren vanwege een wettelijke verplichting. U kunt ons ook vragen uw gegevens eerder te verwijderen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">6. Uw rechten</h2>
              <p>
                U heeft het recht om uw gegevens in te zien, te laten corrigeren of te laten verwijderen. U kunt ook een verzoek doen om uw gegevens over te dragen of bezwaar maken tegen de verwerking. Stuur daarvoor een e-mail naar zorgjustintime@hotmail.com. Als u een klacht heeft over hoe wij met uw gegevens omgaan, kunt u zich wenden tot de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">7. Cookies</h2>
              <p>
                Deze website gebruikt geen cookies voor tracking of advertenties. Als er technisch noodzakelijke cookies worden gebruikt (bijvoorbeeld voor het goed laten functioneren van de site), doen wij dat alleen om de website te kunnen aanbieden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">8. Beveiliging</h2>
              <p>
                Wij nemen passende maatregelen om uw persoonsgegevens te beschermen tegen verlies, misbruik of ongeautoriseerde toegang. Gegevens die via het contactformulier worden verstuurd, worden via een beveiligde verbinding verzonden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">9. Wijzigingen</h2>
              <p>
                Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen. De actuele versie staat altijd op deze pagina, met de datum van de laatste wijziging. Wij raden u aan deze pagina af en toe te bekijken.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">10. Vragen?</h2>
              <p>
                Heeft u vragen over deze privacyverklaring of over het gebruik van uw gegevens? Neem dan contact met ons op via <a href="mailto:zorgjustintime@hotmail.com" className="text-zorg-green underline hover:text-zorg-green-dark">zorgjustintime@hotmail.com</a> of bel 06 14 84 01 45.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zorg-green mt-8 mb-3">11. Wat staat er verder op de website?</h2>
              <p>
                Op deze website vindt u deze <strong>privacyverklaring</strong> en een <strong>cookiebanner</strong>. De cookiebanner informeert bezoekers dat wij geen tracking- of advertentiecookies gebruiken en verwijst naar deze pagina. Algemene voorwaarden zijn voor een eenvoudige contactwebsite niet wettelijk verplicht. Als u in het kader van uw werk opdrachten of overeenkomsten aangaat, kunnen algemene voorwaarden wel handig zijn; dat is aan u.
              </p>
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
