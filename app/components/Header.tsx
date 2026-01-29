import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zorg-green/10 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-zorg-green tracking-tight hover:text-zorg-green-dark transition-colors"
        >
          Zorg Just In Time
        </Link>
        <nav className="flex items-center gap-8" aria-label="Hoofdnavigatie">
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
            href="/contact"
            className="text-sm font-medium text-zorg-green-dark/80 hover:text-zorg-green transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
