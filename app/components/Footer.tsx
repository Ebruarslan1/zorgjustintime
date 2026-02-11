export default function Footer() {
  return (
    <footer className="bg-zorg-green text-white mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="text-sm text-white/60 text-center sm:text-right">
          <p>KVK 87265931 · Vestiging 000053185749</p>
          <p className="mt-1">
            <a href="/privacy" className="hover:text-white transition-colors underline">Privacyverklaring</a>
            {' · '}
            © {new Date().getFullYear()} Zorg Just In Time – Justin Smits
          </p>
        </div>
      </div>
    </footer>
  )
}
