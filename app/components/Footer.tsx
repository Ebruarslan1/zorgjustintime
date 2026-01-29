import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zorg-green text-white mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">Zorg Just In Time</p>
            <p className="text-sm text-white/80 mt-0.5">Justin Smits – ZZP in de zorg</p>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/#over-mij" className="hover:text-white transition-colors">Over mij</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
        <p className="text-center sm:text-right text-sm text-white/60 mt-8 pt-6 border-t border-white/10">
          © {new Date().getFullYear()} Zorg Just In Time – Justin Smits
        </p>
      </div>
    </footer>
  )
}
