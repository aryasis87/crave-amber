import Link from 'next/link'

const spek = [
  ['Material', 'Silikon medical-grade, bebas BPA'],
  ['Ketahanan air', 'Tahan percik — tidak untuk direndam'],
  ['Daya', 'Isi ulang USB-C, ±2 jam pemakaian'],
  ['Kebisingan', 'Di bawah 45 dB pada mode terendah'],
  ['Isi paket', 'Alat, kabel, kantong simpan, panduan'],
  ['Garansi', '12 bulan untuk kerusakan bukan akibat salah pakai'],
]

const galeri = ['/images/p5.jpg', '/images/p9.jpeg', '/images/p10.jpeg']

export default function ProductDetailPage() {
  return (
    <section className="relative overflow-hidden bg-void pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 top-0 h-72" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <nav aria-label="Remah roti" className="micro mb-10 flex flex-wrap items-center gap-2 text-ash/55">
          <Link href="/" className="transition-colors hover:text-neon">
            Beranda
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-chalk">Ember Wand</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <div className="relative aspect-square overflow-hidden border border-chalk/10 bg-void-2">
              <img src={galeri[0]} alt="Ember Wand" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {galeri.map((g, i) => (
                <div key={g} className="relative aspect-square overflow-hidden border border-chalk/10 bg-void-2">
                  <img src={g} alt={`Ember Wand tampilan ${i + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="micro mb-4 text-neon">Tingkat II — sedang</p>
            <h1 className="text-[2.2rem] leading-[1.06] md:text-[2.9rem]">Ember Wand</h1>

            <p className="mt-5 leading-relaxed text-ash">
              Enam pola getaran dengan daya menengah — cukup terasa tanpa berlebihan. Ini tingkat
              kedua, yang biasanya masuk akal setelah Anda berdua tahu apa yang dicari.
            </p>

            <p className="mt-8 text-2xl font-bold text-chalk">Rp 1.150.000</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/checkout"
                className="inline-flex flex-1 items-center justify-center bg-neon px-8 py-4 text-sm font-bold text-void transition-colors duration-300 hover:bg-chalk"
              >
                Pesan Sekarang
              </Link>
              <Link
                href="/#kontak"
                className="inline-flex items-center justify-center border border-chalk/25 px-8 py-4 text-sm font-bold text-chalk transition-colors duration-300 hover:border-chalk/60"
              >
                Tanya Dulu
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3.5 border border-chalk/10 bg-void-2 px-5 py-4">
              <span aria-hidden="true" className="h-8 w-8 shrink-0 bg-kraft" />
              <p className="text-sm leading-relaxed text-chalk/85">
                Belum yakin ini tingkat yang tepat? Buka panduan tingkat dulu — tidak apa-apa mulai
                dari yang lebih lembut.
              </p>
            </div>

            <dl className="mt-10 divide-y divide-chalk/10 border-t border-chalk/10">
              {spek.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="micro text-ash/55">{k}</dt>
                  <dd className="text-sm text-chalk sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="micro mt-8 leading-[1.7] text-ash/45">
              Spesifikasi dan harga di atas adalah contoh untuk keperluan purwarupa desain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
