import Link from 'next/link'

const saluran = [
  {
    label: 'Chat',
    nilai: 'Setiap hari 10.00–22.00 WIB',
    ket: 'Dijawab orang. Kalau menurut kami Anda belum perlu membeli, itu yang kami sampaikan.',
  },
  {
    label: 'Surel',
    nilai: 'halo@positivecrave.id',
    href: 'mailto:halo@positivecrave.id',
    ket: 'Untuk pertanyaan panjang atau klaim garansi.',
  },
  {
    label: 'Telepon',
    nilai: '+62 812 3456 7890',
    href: 'tel:+628123456789',
    ket: 'Sen–Jum 09.00–17.00 WIB.',
  },
]

export default function ContactSupport() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-night py-20 md:py-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 bottom-0 h-80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="micro mb-5 text-amber">Bantuan</p>
            <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">
              Ceritakan saja yang Anda cari
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-smoke">
              Sebutkan sedikit soal pengalaman Anda berdua sejauh ini, dan kami sarankan satu titik
              mulai — bukan daftar belanja.
            </p>

            <Link
              href="/panduan"
              className="micro mt-9 inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-night transition-colors duration-300 hover:bg-cream"
            >
              Buka Panduan Tingkat
            </Link>
          </div>

          <dl className="divide-y divide-cream/12 border-y border-cream/12">
            {saluran.map((s) => (
              <div key={s.label} className="py-6">
                <dt className="micro text-smoke">{s.label}</dt>
                <dd className="mt-2 text-base font-bold text-cream">
                  {s.href ? (
                    <a href={s.href} className="break-all transition-colors hover:text-amber">
                      {s.nilai}
                    </a>
                  ) : (
                    s.nilai
                  )}
                </dd>
                <dd className="mt-1.5 text-sm leading-relaxed text-smoke">{s.ket}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
