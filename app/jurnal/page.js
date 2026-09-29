import Link from 'next/link'
import Nyala from '@/components/Nyala'
import { CATATAN } from '@/lib/catatan'
import { TINGKAT } from '@/lib/katalog'

export const metadata = {
  title: 'Catatan Lilin — Positive Crave',
  description:
    'Tulisan pelan tentang keintiman: mulai dari tingkat paling lembut, menyiapkan ruangan, dan kapan sebaiknya naik — atau berhenti.',
  alternates: { canonical: 'https://crave-amber-mu.vercel.app/jurnal' },
}

export default function CatatanPage() {
  return (
    <section className="relative overflow-hidden bg-night pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 top-0 h-[34rem]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="micro mb-5 text-amber">Catatan Lilin</p>
          <h1 className="text-[2.5rem] leading-[1.06] md:text-[3.5rem]">
            Dibaca pelan-pelan,
            <br />
            <span className="text-amber">seperti nyalanya.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-smoke">
            Tulisan pendek untuk dibaca sebelum — atau sebagai ganti — membeli apa pun.
          </p>
        </div>

        <ol className="mt-16 space-y-6">
          {CATATAN.map((c, i) => {
            const t = TINGKAT[c.tingkat - 1]
            return (
              <li key={c.slug} className="warm-edge group relative overflow-hidden rounded-[var(--radius-soft)] bg-night-2 p-7 transition-colors hover:border-amber/40 sm:p-10">
                <div aria-hidden="true" className="candle absolute -top-24 -right-24 h-64 w-64 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative grid gap-6 sm:grid-cols-[5rem_minmax(0,1fr)]">
                  <p className="font-[family-name:var(--font-display)] text-5xl font-extrabold text-amber/80">{String(i + 1).padStart(2, '0')}</p>
                  <div>
                    <p className="micro flex flex-wrap items-center gap-3 text-smoke">
                      <Nyala n={t.rentang[1]} />
                      Tingkat {t.romawi} · {c.menit} menit
                    </p>
                    <h2 className="mt-4 text-2xl leading-[1.2] md:text-[1.9rem]">
                      <Link href={`/jurnal/${c.slug}`} className="after:absolute after:inset-0">{c.judul}</Link>
                    </h2>
                    <p className="mt-3 leading-relaxed text-smoke">{c.ringkas}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
