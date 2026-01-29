'use client'

import { useState } from 'react'
import Link from 'next/link'

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
      <header className="bg-zorg-green text-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90">
            Zorg Just In Time
          </Link>
          <Link
            href="/"
            className="text-sm text-white/90 hover:text-white transition-colors"
          >
            ← Terug
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">
        <h2 className="text-2xl font-bold text-zorg-green mb-2">Contact</h2>
        <p className="text-zorg-green-dark/90 mb-8">
          Vul het formulier in. We reageren zo snel mogelijk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-zorg-green mb-2">
              Ik neem contact op als
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="aanleiding"
                  value="zorgvrager"
                  checked={aanleiding === 'zorgvrager'}
                  onChange={() => setAanleiding('zorgvrager')}
                  className="text-zorg-green focus:ring-zorg-green"
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
                  className="text-zorg-green focus:ring-zorg-green"
                />
                <span className="text-zorg-green-dark">Zorgbemiddelaar</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="naam" className="block text-sm font-medium text-zorg-green mb-1">
              Naam *
            </label>
            <input
              id="naam"
              type="text"
              required
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              className="w-full px-4 py-2 border border-zorg-green/30 rounded-lg focus:ring-2 focus:ring-zorg-green focus:border-zorg-green outline-none"
              placeholder="Uw naam"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zorg-green mb-1">
              E-mail *
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-zorg-green/30 rounded-lg focus:ring-2 focus:ring-zorg-green focus:border-zorg-green outline-none"
              placeholder="uw@email.nl"
            />
          </div>

          <div>
            <label htmlFor="telefoon" className="block text-sm font-medium text-zorg-green mb-1">
              Telefoon
            </label>
            <input
              id="telefoon"
              type="tel"
              value={telefoon}
              onChange={(e) => setTelefoon(e.target.value)}
              className="w-full px-4 py-2 border border-zorg-green/30 rounded-lg focus:ring-2 focus:ring-zorg-green focus:border-zorg-green outline-none"
              placeholder="06 12345678"
            />
          </div>

          <div>
            <label htmlFor="bericht" className="block text-sm font-medium text-zorg-green mb-1">
              Bericht *
            </label>
            <textarea
              id="bericht"
              required
              rows={5}
              value={bericht}
              onChange={(e) => setBericht(e.target.value)}
              className="w-full px-4 py-2 border border-zorg-green/30 rounded-lg focus:ring-2 focus:ring-zorg-green focus:border-zorg-green outline-none resize-y"
              placeholder="Beschrijf uw vraag of verzoek..."
            />
          </div>

          {status === 'success' && (
            <p className="text-zorg-green font-medium">
              Bedankt! Uw bericht is verstuurd. We nemen zo snel mogelijk contact op.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600">
              Er ging iets mis bij het versturen. Probeer het later opnieuw of neem telefonisch contact op.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-zorg-green text-white py-3 rounded-lg font-medium hover:bg-zorg-green-dark disabled:opacity-60 transition-colors"
          >
            {status === 'sending' ? 'Versturen...' : 'Verstuur bericht'}
          </button>
        </form>
      </main>

      <footer className="bg-zorg-green text-white mt-auto">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-white/90">
          © {new Date().getFullYear()} Zorg Just In Time – Justin Smits
        </div>
      </footer>
    </div>
  )
}
