import Link from 'next/link'

const produk = [
  {
    nama: 'Minyak Pijat Hangat',
    harga: 'Rp 165.000',
    tingkat: 'Tingkat I',
    desc: 'Menghangat perlahan saat digosok. Titik mulai yang paling sering kami sarankan.',
    image: '/images/p7.jpg',
  },
  {
    nama: 'Ember Wand',
    harga: 'Rp 1.150.000',
    tingkat: 'Tingkat II',
    desc: 'Enam pola getaran dengan daya menengah. Tahan percik, bukan tahan rendam.',
    image: '/images/p8.jpg',
  },
  {
    nama: 'Paket Tingkat I',
    harga: 'Rp 420.000',
    tingkat: 'Tingkat I',
    desc: 'Minyak pijat, pelumas berbahan air, dan pembersih alat dalam satu kotak.',
    image: '/images/p9.jpeg',
  },
]

export default function FeaturedProducts() {
  return (
    <section id="produk" className="relative overflow-hidden bg-night-2 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="micro mb-5 text-amber">Paling sering dipesan</p>
          <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">
            Tiga titik mulai yang paling nyaman
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {produk.map((p) => (
            <article
              key={p.nama}
              className="warm-edge group flex flex-col overflow-hidden rounded-[var(--radius-soft)] bg-night"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.nama}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="micro absolute top-4 left-4 rounded-full bg-night/85 px-3.5 py-1.5 text-amber backdrop-blur-sm">
                  {p.tingkat}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-cream">{p.nama}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-smoke">{p.desc}</p>

                <div className="mt-6 flex items-center justify-between border-t border-cream/12 pt-5">
                  <span className="text-base font-bold text-cream">{p.harga}</span>
                  <Link href="/produk" className="micro text-amber transition-colors hover:text-cream">
                    Rincian
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="micro mt-8 leading-[1.7] text-smoke/45">
          Harga dan nama barang di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  )
}
