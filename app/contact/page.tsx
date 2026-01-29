'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Aanleiding = 'zorgvrager' | 'zorgbemiddelaar'

export default function ContactPage() {
  const [aanleiding, setAanleiding] = useState<Aanleiding>('zorgvrager')
  const [naam, setNaam] = useState('')
  const [email, setEmail] = useState('')
  const [telefoon, setTelefoon] = useState('')
  const [bericht, setBericht] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          aanleiding,
          naam,
          email,
          telefoon,
          bericht,
        }),
      })
      if (!res.ok) throw new Error('Versturen mislukt')
      setStatus('success')
      setNaam('')
      setEmail('')
      setTelefoon('')
      setBericht('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-zorg-green mb-2">Neem contact op</h1>
            <p className="text-zorg-green-dark/80 leading-relaxed mb-6">
              Stel uw vraag via het formulier – ik neem zo snel mogelijk contact met u op. Geen vraag is te klein.
            </p>
            <div className="rounded-xl bg-zorg-green/5 border border-zorg-green/15 p-4 text-sm text-zorg-green-dark/90">
              <p className="font-semibold text-zorg-green mb-2">Contactgegevens</p>
              <p><a href="mailto:zorgjustintime@gmail.com" className="hover:text-zorg-green transition-colors underline">zorgjustintime@gmail.com</a></p>
              <p className="mt-1"><a href="tel:+31614840145" className="hover:text-zorg-green transition-colors underline">06 14 84 01 45</a></p>
              <p className="mt-1">Almelo</p>
              <p className="mt-1 text-zorg-green-dark/70">KVK 87265931 · Vestiging 000053185749</p>
            </div>
          </div>

          <div className="rounded-2xl border border-zorg-green/20 bg-white shadow-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-zorg-green mb-3">
                  Ik neem contact op als
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="aanleiding"
                      value="zorgvrager"
                      checked={aanleiding === 'zorgvrager'}
                      onChange={() => setAanleiding('zorgvrager')}
                      className="w-4 h-4 text-zorg-green focus:ring-zorg-green border-zorg-green/30"
                    />
                    <span className="text-zorg-green-dark">Zorgvrager</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="aanleiding"
                      value="zorgbemiddelaar"
                      checked={aanleiding === 'zorgbemiddelaar'}
                      onChange={() => setAanleiding('zorgbemiddelaar')}
                      className="w-4 h-4 text-zorg-green focus:ring-zorg-green border-zorg-green/30"
                    />
                    <span className="text-zorg-green-dark">Zorgbemiddelaar</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="naam" className="block text-sm font-semibold text-zorg-green mb-1.5">
                  Naam *
                </label>
                <input
                  id="naam"
                  type="text"
                  required
                  value={naam}
                  onChange={(e) => setNaam(e.target.value)}
                  className="w-full px-4 py-3 border border-zorg-green/25 rounded-xl focus:ring-2 focus:ring-zorg-green focus:border-zorg-green outline-none transition-shadow"
                  placeholder="Uw naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zorg-green mb-1.5">
                  E-mail *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-zorg-green/25 rounded-xl focus:ring-2 focus:ring-zorg-green focus:border-zorg-green outline-none transition-shadow"
                  placeholder="uw@email.nl"
                />
              </div>

              <div>
                <label htmlFor="telefoon" className="block text-sm font-semibold text-zorg-green mb-1.5">
                  Telefoon
                </label>
                <input
                  id="telefoon"
                  type="tel"
                  value={telefoon}
                  onChange={(e) => setTelefoon(e.target.value)}
                  className="w-full px-4 py-3 border border-zorg-green/25 rounded-xl focus:ring-2 focus:ring-zorg-green focus:border-zorg-green outline-none transition-shadow"
                  placeholder="06 12345678"
                />
              </div>

              <div>
                <label htmlFor="bericht" className="block text-sm font-semibold text-zorg-green mb-1.5">
                  Bericht *
                </label>
                <textarea
                  id="bericht"
                  required
                  rows={5}
                  value={bericht}
                  onChange={(e) => setBericht(e.target.value)}
                  className="w-full px-4 py-3 border border-zorg-green/25 rounded-xl focus:ring-2 focus:ring-zorg-green focus:border-zorg-green outline-none resize-y transition-shadow"
                  placeholder="Beschrijf uw vraag of verzoek..."
                />
              </div>

              {status === 'success' && (
                <p className="text-zorg-green font-medium rounded-xl bg-zorg-green/10 p-4">
                  Bedankt! Uw bericht is verstuurd. We nemen zo snel mogelijk contact op.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 rounded-xl bg-red-50 p-4">
                  Er ging iets mis bij het versturen. Probeer het later opnieuw of neem telefonisch contact op.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-zorg-green text-white py-3.5 rounded-xl font-semibold hover:bg-zorg-green-dark disabled:opacity-60 transition-all shadow-md hover:shadow-lg"
              >
                {status === 'sending' ? 'Versturen...' : 'Verstuur bericht'}
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-zorg-green-dark/70">
            <Link href="/" className="hover:text-zorg-green transition-colors">
              ← Terug naar home
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
