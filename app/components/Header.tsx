'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zorg-green/10 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-zorg-green tracking-tight hover:text-zorg-green-dark transition-colors"
          onClick={closeMenu}
        >
          Zorg Just In Time
        </Link>

        {/* Desktop navigatie */}
        <nav className="hidden sm:flex items-center gap-6 sm:gap-8" aria-label="Hoofdnavigatie">
          <Link
            href="/"
            className="text-sm font-medium text-zorg-green-dark/80 hover:text-zorg-green transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#over-mij"
            className="text-sm font-medium text-zorg-green-dark/80 hover:text-zorg-green transition-colors"
          >
            Over mij
          </Link>
          <Link
            href="/#pgb-begeleiding"
            className="text-sm font-medium text-zorg-green-dark/80 hover:text-zorg-green transition-colors"
          >
            PGB-begeleiding
          </Link>
          <Link
            href="/#samenwerking"
            className="text-sm font-medium text-zorg-green-dark/80 hover:text-zorg-green transition-colors"
          >
            Samenwerking
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zorg-green-dark/80 hover:text-zorg-green transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-zorg-green-dark/80 hover:text-zorg-green hover:bg-zorg-green/5 focus:outline-none focus:ring-2 focus:ring-zorg-green focus:ring-offset-2 focus:ring-offset-white"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open navigatie</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="sm:hidden bg-white/98 border-t border-zorg-green/10 shadow-sm"
          aria-label="Hoofdnavigatie mobiel"
        >
          <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-2">
            <Link
              href="/"
              className="py-1 text-sm font-medium text-zorg-green-dark/90 hover:text-zorg-green transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/#over-mij"
              className="py-1 text-sm font-medium text-zorg-green-dark/90 hover:text-zorg-green transition-colors"
              onClick={closeMenu}
            >
              Over mij
            </Link>
            <Link
              href="/#pgb-begeleiding"
              className="py-1 text-sm font-medium text-zorg-green-dark/90 hover:text-zorg-green transition-colors"
              onClick={closeMenu}
            >
              PGB-begeleiding
            </Link>
            <Link
              href="/#samenwerking"
              className="py-1 text-sm font-medium text-zorg-green-dark/90 hover:text-zorg-green transition-colors"
              onClick={closeMenu}
            >
              Samenwerking
            </Link>
            <Link
              href="/contact"
              className="py-1 text-sm font-medium text-zorg-green-dark/90 hover:text-zorg-green transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
