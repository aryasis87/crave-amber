import Image from 'next/image'
import Link from 'next/link'

const janji = [
  ['Kemasan', 'Polos, tanpa merek'],
  ['Material', 'Medical-grade, bebas BPA'],
  ['Panduan', 'Disusun untuk pemula'],
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-night pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden="true" className="candle absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="micro mb-7 text-amber">Positive Crave · Untuk pasangan</p>

          <h1 className="text-[2.5rem] leading-[1.04] sm:text-5xl lg:text-[3.8rem]">
            Deeper Desire,
            <br />
            <span className="text-amber">Softly Lit.</span>
          </h1>

          <p className="mt-7 max-w-lg leading-relaxed text-smoke">
            Keintiman tidak harus dimulai dengan yang paling berani. Kami menyusun koleksi dan
            panduannya supaya Anda berdua bisa mulai dari tingkat yang paling nyaman — lalu
            melangkah pelan-pelan dari sana.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/panduan"
              className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-sm font-bold text-night transition-colors duration-300 hover:bg-cream"
            >
              Mulai dari Panduan
            </Link>
            <Link
              href="/koleksi"
              className="warm-edge inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold text-cream transition-colors duration-300 hover:border-cream/35"
            >
              Lihat Koleksi
            </Link>
          </div>

          <dl className="mt-14 grid gap-7 border-t border-cream/12 pt-8 sm:grid-cols-3">
            {janji.map(([k, v]) => (
              <div key={k}>
                <dt className="micro text-smoke">{k}</dt>
                <dd className="mt-2.5 text-sm font-semibold text-cream">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-soft)] bg-night-2">
            <Image
              src="/images/w2.jpeg"
              alt="Momen tenang berdua"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent"
            />
          </div>

          <figcaption className="warm-edge absolute right-5 bottom-5 left-5 rounded-2xl bg-night/85 px-5 py-4 backdrop-blur-sm">
            <p className="micro text-amber">Mulai di sini</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/85">
              Tingkat I — lembut, tanpa alat, untuk yang baru pertama mencoba.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
