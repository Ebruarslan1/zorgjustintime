'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'zorgjustintime-cookie-accepted'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) setIsVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-5 bg-white border-t-2 border-zorg-green shadow-[0_-4px_20px_rgba(26,77,62,0.12)]"
      role="dialog"
      aria-label="Cookie-informatie"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-zorg-green-dark/90 text-sm sm:text-base leading-relaxed">
          Deze website gebruikt geen tracking- of advertentiecookies. Alleen wat technisch nodig is om de site te laten werken. Meer hierover in onze{' '}
          <Link href="/privacy" className="text-zorg-green font-medium underline hover:text-zorg-green-dark transition-colors">
            privacyverklaring
          </Link>.
        </p>
        <button
          type="button"
          onClick={accept}
          className="flex-shrink-0 px-5 py-2.5 bg-zorg-green text-white text-sm font-semibold rounded-xl hover:bg-zorg-green-dark transition-colors shadow-sm"
        >
          Begrepen
        </button>
      </div>
    </div>
  )
}
