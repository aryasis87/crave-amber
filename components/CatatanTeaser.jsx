import Link from 'next/link'
import { CATATAN } from '@/lib/catatan'

export default function CatatanTeaser() {
  const [utama, ...lain] = CATATAN
  return (
    <section id="catatan" className="relative overflow-hidden bg-night py-20 md:py-28">
      <div aria-hidden="true" className="candle absolute -left-40 top-10 h-[28rem] w-[28rem]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 text-amber">Catatan Lilin</p>
            <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">Dibaca dulu, dengan cahaya yang redup</h2>
          </div>
          <Link href="/jurnal" className="micro shrink-0 rounded-full border border-cream/20 px-5 py-3 text-cream transition-colors hover:border-amber hover:text-amber">
            Semua catatan
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <Link href={`/jurnal/${utama.slug}`} className="warm-edge group relative flex flex-col justify-end overflow-hidden rounded-[var(--radius-soft)] bg-night-2 p-8 transition-colors hover:border-amber/40 sm:p-10 lg:min-h-[22rem]">
            <div aria-hidden="true" className="candle absolute inset-0" />
            <span className="relative">
              <span className="micro block text-amber">{utama.menit} menit baca</span>
              <span className="mt-4 block font-[family-name:var(--font-display)] text-[1.7rem] leading-[1.15] font-bold text-cream group-hover:text-amber md:text-[2.1rem]">
                {utama.judul}
              </span>
              <span className="mt-4 block max-w-lg leading-relaxed text-smoke">{utama.ringkas}</span>
            </span>
          </Link>
          <ul className="grid gap-6">
            {lain.map((c) => (
              <li key={c.slug}>
                <Link href={`/jurnal/${c.slug}`} className="warm-edge group block h-full rounded-[var(--radius-soft)] bg-night-2 p-7 transition-colors hover:border-amber/40">
                  <span className="micro block text-smoke">{c.menit} menit baca</span>
                  <span className="mt-3 block text-lg leading-snug font-bold text-cream group-hover:text-amber">{c.judul}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
