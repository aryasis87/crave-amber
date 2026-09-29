import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nyala from '@/components/Nyala'
import { CATATAN, catatanBySlug } from '@/lib/catatan'
import { TINGKAT } from '@/lib/katalog'

const SITE = 'https://crave-amber-mu.vercel.app'

export function generateStaticParams() {
  return CATATAN.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const c = catatanBySlug(slug)
  if (!c) return {}
  return {
    title: `${c.judul} — Catatan Lilin`,
    description: c.ringkas,
    alternates: { canonical: `${SITE}/jurnal/${c.slug}` },
    openGraph: { type: 'article' },
  }
}

function Blok({ b, pertama }) {
  if (b.h) return <h2 className="mt-14 text-[1.6rem] leading-[1.2] md:text-[1.85rem]">{b.h}</h2>
  if (b.kutip)
    return (
      <blockquote className="relative my-14 rounded-[var(--radius-soft)] px-6 py-10 text-center">
        <div aria-hidden="true" className="candle absolute inset-0 rounded-[var(--radius-soft)]" />
        <p className="relative font-[family-name:var(--font-display)] text-[1.55rem] leading-snug font-bold text-cream md:text-[1.9rem]">
          &ldquo;{b.kutip}&rdquo;
        </p>
      </blockquote>
    )
  if (b.langkah)
    return (
      <ol className="mt-7 space-y-4">
        {b.langkah.map((x, i) => (
          <li key={x} className="flex gap-4">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber/15 text-sm font-bold text-amber">{i + 1}</span>
            <span className="pt-1 leading-relaxed text-cream/90">{x}</span>
          </li>
        ))}
      </ol>
    )
  if (b.catatan)
    return (
      <aside className="mt-12 flex gap-4 rounded-[var(--radius-soft)] bg-amber/10 p-6">
        <span aria-hidden="true" className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-amber shadow-[0_0_14px_rgb(232_163_61/0.8)]" />
        <p className="text-sm leading-relaxed text-cream">{b.catatan}</p>
      </aside>
    )
  return (
    <p
      className={`mt-6 text-[1.075rem] leading-[1.85] text-smoke ${
        pertama
          ? 'first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-[family-name:var(--font-display)] first-letter:text-[3.6rem] first-letter:leading-[0.85] first-letter:font-extrabold first-letter:text-amber'
          : ''
      }`}
    >
      {b.p}
    </p>
  )
}

export default async function CatatanArtikel({ params }) {
  const { slug } = await params
  const c = catatanBySlug(slug)
  if (!c) notFound()
  const t = TINGKAT[c.tingkat - 1]
  const lain = CATATAN.filter((x) => x.slug !== c.slug)
  const iPertama = c.isi.findIndex((b) => b.p)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.judul,
    description: c.ringkas,
    author: { '@type': 'Organization', name: 'Positive Crave' },
    mainEntityOfPage: `${SITE}/jurnal/${c.slug}`,
  }

  return (
    <article className="relative overflow-hidden bg-night pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 top-0 h-[34rem]" />
      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <header className="text-center">
          <Link href="/jurnal" className="micro text-amber hover:text-cream">Catatan Lilin</Link>
          <h1 className="mt-6 text-[2.2rem] leading-[1.08] md:text-[3rem]">{c.judul}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85">{c.ringkas}</p>
          <p className="micro mt-8 flex items-center justify-center gap-3 text-smoke">
            <Nyala n={t.rentang[1]} /> Tingkat {t.romawi} · {c.menit} menit baca
          </p>
        </header>

        <div className="mt-14 border-t border-cream/12 pt-6">
          {c.isi.map((b, k) => <Blok key={k} b={b} pertama={k === iPertama} />)}
        </div>

        <footer className="mt-20 border-t border-cream/12 pt-10">
          <p className="micro text-center text-smoke">Catatan lainnya</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {lain.map((x) => (
              <li key={x.slug}>
                <Link href={`/jurnal/${x.slug}`} className="warm-edge block h-full rounded-[var(--radius-soft)] p-6 transition-colors hover:border-amber/40">
                  <span className="block text-lg leading-snug font-bold text-cream">{x.judul}</span>
                  <span className="micro mt-3 block text-smoke">{x.menit} menit baca</span>
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  )
}
