import Link from 'next/link'
import { PRODUK, TINGKAT } from '@/lib/katalog'

/* ============================================================================
   Bagian penanda varian ini: "Skala Intensitas".
   Titik di pita adalah produk sungguhan dari katalog (lib/katalog.js), jadi
   peta ini selalu sama dengan /koleksi dan halaman produk. Tiap tingkat
   menaut ke rak tingkat itu di /koleksi.
   ========================================================================== */

export default function IntensityScale() {
  return (
    <section id="panduan" className="relative overflow-hidden bg-night py-20 md:py-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 top-0 h-[30rem]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="micro mb-5 text-amber">Panduan</p>
          <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">Tidak perlu langsung ke yang paling kuat</h2>
          <p className="mt-5 leading-relaxed text-smoke">
            Sebagian besar orang berhenti di keranjang bukan karena harga, tapi karena tidak tahu harus
            mulai dari mana. Ini peta sederhananya — setiap titik adalah satu barang di koleksi kami.
          </p>
        </div>

        {/* Pita skala dengan titik produk */}
        <div className="mb-12">
          <div className="relative">
            <div aria-hidden="true" className="intensity-track h-2 w-full rounded-full" />
            <ul>
              {PRODUK.map((p) => (
                <li key={p.slug} className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ left: `${(p.intensitas - 0.5) * 10}%` }}>
                  <Link
                    href={`/produk/${p.slug}`}
                    aria-label={`${p.nama}, intensitas ${p.intensitas} dari 10`}
                    className="block h-5 w-5 rounded-full border-2 border-night bg-cream transition-transform hover:scale-125 hover:bg-amber"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex justify-between">
            <span className="micro text-smoke">Lembut</span>
            <span className="micro text-amber">Kuat</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TINGKAT.map((t) => {
            const isi = PRODUK.filter((p) => p.intensitas >= t.rentang[0] && p.intensitas <= t.rentang[1])
            return (
              <article key={t.id} className="warm-edge group relative flex flex-col rounded-[var(--radius-soft)] bg-night-2 p-7 transition-colors hover:border-amber/40">
                <p className="micro flex justify-between text-amber">
                  Tingkat {t.romawi}
                  <span className="text-smoke">{isi.length} barang</span>
                </p>
                <h3 className="mt-5 text-xl">
                  <Link href={`/koleksi#tingkat-${t.id}`} className="after:absolute after:inset-0">{t.nama}</Link>
                </h3>
                <p className="micro mt-3 text-smoke">{t.untuk}</p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-cream/85">{t.catatan}</p>
                <p className="mt-6 border-t border-cream/12 pt-5 text-sm text-cream">
                  {isi.map((p) => p.nama).join(' · ')}
                </p>
              </article>
            )
          })}
        </div>

        <div className="warm-edge mt-10 flex flex-col gap-5 rounded-[var(--radius-soft)] bg-night-2 px-7 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-smoke">
            Masih ragu? Tiga pertanyaan singkat memberi satu titik mulai — kadang sarannya justru belum
            membeli apa pun.
          </p>
          <Link href="/panduan" className="micro shrink-0 rounded-full bg-amber px-6 py-3.5 text-center text-night transition-colors hover:bg-cream">
            Coba kuisnya
          </Link>
        </div>
      </div>
    </section>
  )
}
