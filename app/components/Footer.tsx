import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zorg-green text-white mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">Zorg Just In Time</p>
            <p className="text-sm text-white/80 mt-0.5">Justin Smits – Zorgbemiddeling PGB</p>
            <p className="text-sm text-white/70 mt-1">Almelo</p>
            <a href="mailto:zorgjustintime@gmail.com" className="text-sm text-white/80 hover:text-white transition-colors mt-0.5 block">
              zorgjustintime@gmail.com
            </a>
            <a href="tel:+31614840145" className="text-sm text-white/80 hover:text-white transition-colors mt-0.5 block">
              06 14 84 01 45
            </a>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/#over-mij" className="hover:text-white transition-colors">Over mij</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 text-sm text-white/60 text-center sm:text-right">
          <p>KVK 87265931 · Vestiging 000053185749</p>
          <p className="mt-1">© {new Date().getFullYear()} Zorg Just In Time – Justin Smits</p>
        </div>
      </div>
    </footer>
  )
}
