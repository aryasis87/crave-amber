import Link from 'next/link'
import KuisTingkat from '@/components/KuisTingkat'
import Nyala from '@/components/Nyala'
import { PRODUK, TINGKAT } from '@/lib/katalog'

export const metadata = {
  title: 'Panduan Intensitas — Positive Crave',
  description:
    'Tidak tahu harus mulai dari mana? Tiga pertanyaan singkat memberi Anda satu tingkat dan satu titik mulai — termasuk saran jujur untuk belum membeli apa pun.',
  alternates: { canonical: 'https://crave-amber-mu.vercel.app/panduan' },
}

const ATURAN = [
  ['Naik satu tingkat, bukan dua', 'Dari tingkat I, coba barang di batas bawah tingkat II dulu. Perbedaannya terasa jelas tanpa mengagetkan.'],
  ['Naik karena penasaran, bukan bosan', 'Kalau yang lama terasa hambar, yang perlu diubah biasanya suasananya — bukan alatnya.'],
  ['Turun itu bukan mundur', 'Banyak pasangan di tingkat III tetap paling sering kembali ke minyak pijat. Di sanalah mereka belajar bicara.'],
]

export default function PanduanPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-night pt-28 pb-16 md:pt-36 md:pb-20">
        <div aria-hidden="true" className="candle absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="micro mb-5 text-amber">Panduan intensitas</p>
            <h1 className="text-[2.5rem] leading-[1.04] md:text-[3.6rem]">
              Pilih satu tingkat,
              <br />
              <span className="text-amber">bukan satu produk.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-smoke">
              Tiga pertanyaan, tidak perlu mendaftar, tidak ada yang tersimpan. Hasilnya satu tingkat dan
              satu titik mulai — kadang sarannya justru belum membeli apa-apa.
            </p>
          </div>
          <div className="mt-14">
            <KuisTingkat />
          </div>
        </div>
      </section>

      <section aria-labelledby="tiga-tingkat" className="bg-night-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="tiga-tingkat" className="max-w-2xl text-[2rem] leading-[1.12] md:text-[2.7rem]">
            Tiga tingkat, dijelaskan tanpa basa-basi
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TINGKAT.map((t) => {
              const isi = PRODUK.filter((p) => p.intensitas >= t.rentang[0] && p.intensitas <= t.rentang[1])
              return (
                <article key={t.id} className="warm-edge flex flex-col rounded-[var(--radius-soft)] bg-night p-7">
                  <p className="micro text-amber">Tingkat {t.romawi} · intensitas {t.rentang[0]}–{t.rentang[1]}</p>
                  <h3 className="mt-3 text-2xl">{t.nama}</h3>
                  <Nyala n={t.rentang[1]} className="mt-4" />
                  <p className="micro mt-5 text-smoke">{t.untuk}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/85">{t.catatan}</p>
                  <ul className="mt-6 space-y-2 border-t border-cream/12 pt-5">
                    {isi.map((p) => (
                      <li key={p.slug}>
                        <Link href={`/produk/${p.slug}`} className="flex justify-between gap-3 text-sm text-cream hover:text-amber">
                          {p.nama} <span className="text-smoke">{p.intensitas}/10</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="aturan" className="bg-night py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="micro mb-5 text-amber">Aturan main</p>
            <h2 id="aturan" className="text-[2rem] leading-[1.12] md:text-[2.5rem]">Pita ini peta, bukan tangga</h2>
            <p className="mt-5 leading-relaxed text-smoke">
              Tidak ada yang wajib sampai ke ujung. Tiga aturan yang kami pegang saat memberi saran:
            </p>
            <Link href="/jurnal/kapan-naik-kapan-cukup" className="micro mt-6 inline-block text-amber hover:text-cream">
              Baca selengkapnya di Catatan Lilin →
            </Link>
          </div>
          <ol className="space-y-5">
            {ATURAN.map(([j, d], i) => (
              <li key={j} className="warm-edge flex gap-5 rounded-[var(--radius-soft)] bg-night-2 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber text-sm font-bold text-night">{i + 1}</span>
                <div>
                  <h3 className="text-lg">{j}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-smoke">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
