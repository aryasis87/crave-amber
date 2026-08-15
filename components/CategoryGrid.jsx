import Link from 'next/link'

const kategori = [
  {
    nama: 'Tingkat I — Lembut',
    desc: 'Minyak pijat dan pelumas. Dipakai berdua tanpa alat.',
    jumlah: '16 barang',
    image: '/images/p2.jpg',
  },
  {
    nama: 'Tingkat II — Sedang',
    desc: 'Getaran rendah dengan beberapa pola. Ukurannya masih ringkas.',
    jumlah: '22 barang',
    image: '/images/p3.jpg',
  },
  {
    nama: 'Tingkat III — Kuat',
    desc: 'Daya lebih besar dan pilihan pola lebih banyak.',
    jumlah: '13 barang',
    image: '/images/p5.jpg',
  },
]

export default function CategoryGrid() {
  return (
    <section id="kategori" className="relative overflow-hidden bg-night py-20 md:py-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 top-0 h-72 opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 text-amber">Kategori</p>
            <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">
              Pilih tingkatnya dulu, barangnya belakangan
            </h2>
          </div>
          <Link
            href="/produk"
            className="micro shrink-0 rounded-full border border-cream/20 px-5 py-3 text-cream transition-colors hover:border-amber hover:text-amber"
          >
            Lihat semua
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {kategori.map((k) => (
            <Link
              key={k.nama}
              href="/produk"
              className="warm-edge group block overflow-hidden rounded-[var(--radius-soft)] bg-night-2 transition-colors hover:border-amber/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={k.image}
                  alt={k.nama}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-bold text-cream">{k.nama}</h3>
                  <span className="micro text-smoke/55">{k.jumlah}</span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-smoke">{k.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
