import Link from 'next/link'

const kolom = [
  {
    judul: 'Jelajahi',
    tautan: [
      { label: 'Panduan Intensitas', href: '/#panduan' },
      { label: 'Koleksi', href: '/#produk' },
      { label: 'Produk Pilihan', href: '/produk' },
    ],
  },
  {
    judul: 'Ketenangan',
    tautan: [
      { label: 'Jaminan Mutu', href: '/#jaminan' },
      { label: 'Tanya Jawab', href: '/#tanya' },
      { label: 'Bantuan', href: '/#kontak' },
    ],
  },
  {
    judul: 'Akun',
    tautan: [
      { label: 'Masuk', href: '/masuk' },
      { label: 'Pemesanan', href: '/checkout' },
    ],
  },
]

export default function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-night">
      <div aria-hidden="true" className="candle absolute inset-x-0 bottom-0 h-64 opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,0.7fr))]">
          <div>
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full bg-amber" />
              <span className="text-base font-bold tracking-tight text-cream">
                Positive<span className="text-amber">Crave</span>
              </span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-smoke">
              Perlengkapan keintiman untuk pasangan, dengan panduan yang menemani dari tingkat
              paling lembut.
            </p>
          </div>

          {kolom.map((k) => (
            <nav key={k.judul} aria-label={k.judul}>
              <h2 className="micro mb-5 text-cream">{k.judul}</h2>
              <ul className="space-y-3">
                {k.tautan.map((t) => (
                  <li key={t.href}>
                    <Link href={t.href} className="text-sm text-smoke transition-colors hover:text-amber">
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="micro text-smoke/45">© {tahun} Positive Crave</p>
          <p className="micro text-smoke/45">Khusus dewasa 18+</p>
        </div>
      </div>
    </footer>
  )
}
