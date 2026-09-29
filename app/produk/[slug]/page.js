import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nyala from '@/components/Nyala'
import ProductCard from '@/components/ProductCard'
import { PRODUK, produkBySlug, rupiah, tingkatDari } from '@/lib/katalog'

const SITE = 'https://crave-amber-mu.vercel.app'
// Urutan pita: dari intensitas terendah ke tertinggi.
const PITA = [...PRODUK].sort((a, b) => a.intensitas - b.intensitas)

export function generateStaticParams() {
  return PRODUK.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = produkBySlug(slug)
  if (!p) return {}
  const t = tingkatDari(p.intensitas)
  return {
    title: `${p.nama} · Tingkat ${t.romawi} — Positive Crave`,
    description: `${p.ringkas} Intensitas ${p.intensitas} dari 10, tingkat ${t.nama.toLowerCase()}.`,
    alternates: { canonical: `${SITE}/produk/${p.slug}` },
    openGraph: { images: [{ url: p.image }] },
  }
}

export default async function ProdukPage({ params }) {
  const { slug } = await params
  const p = produkBySlug(slug)
  if (!p) notFound()
  const t = tingkatDari(p.intensitas)
  const i = PITA.findIndex((x) => x.slug === p.slug)
  const lembut = PITA[i - 1]
  const kuat = PITA[i + 1]
  const setingkat = PRODUK.filter((x) => x.slug !== p.slug && tingkatDari(x.intensitas).id === t.id)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.nama,
    description: p.ringkas,
    image: `${SITE}${p.image}`,
    offers: { '@type': 'Offer', priceCurrency: 'IDR', price: p.harga, availability: 'https://schema.org/InStock' },
  }

  return (
    <>
      <section className="relative overflow-clip bg-night pt-28 pb-20 md:pt-36 md:pb-24">
        <div aria-hidden="true" className="candle absolute inset-x-0 top-0 h-[30rem]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <nav aria-label="Remah roti" className="micro mb-10 flex flex-wrap items-center gap-2 text-smoke">
            <Link href="/" className="hover:text-amber">Beranda</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/koleksi#tingkat-${t.id}`} className="hover:text-amber">Tingkat {t.romawi}</Link>
            <span aria-hidden="true">/</span>
            <span className="text-cream" aria-current="page">{p.nama}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="warm-photo relative aspect-[4/5] overflow-hidden rounded-[var(--radius-soft)]">
                <Image src={p.image} alt={p.nama} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>

            <div>
              <p className="micro mb-4 text-amber">Tingkat {t.romawi} · {t.nama} · {t.untuk}</p>
              <h1 className="text-[2.4rem] leading-[1.04] md:text-[3.1rem]">{p.nama}</h1>
              <Nyala n={p.intensitas} besar className="mt-5" />
              <p className="micro mt-2 text-smoke">Intensitas {p.intensitas} dari 10</p>

              <div className="mt-7 space-y-4 leading-relaxed text-smoke">
                {p.cerita.map((c) => <p key={c.slice(0, 24)}>{c}</p>)}
              </div>

              <p className="mt-8 text-3xl font-extrabold tracking-tight text-cream">{rupiah(p.harga)}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href={`/checkout?produk=${p.slug}`} className="inline-flex flex-1 items-center justify-center rounded-full bg-amber px-8 py-4 text-sm font-bold text-night transition-colors hover:bg-cream">
                  Pesan
                </Link>
                <Link href="/panduan" className="warm-edge inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold text-cream transition-colors hover:border-cream/35">
                  Cocok untuk saya?
                </Link>
              </div>

              <aside className="mt-8 flex gap-4 rounded-[var(--radius-soft)] bg-amber/10 p-6">
                <span aria-hidden="true" className="mt-1 h-3 w-3 shrink-0 rounded-full bg-amber shadow-[0_0_14px_rgb(232_163_61/0.8)]" />
                <p className="text-sm leading-relaxed text-cream">
                  <span className="font-bold">Saran kami: </span>
                  {p.tips}
                </p>
              </aside>

              <dl className="mt-10 divide-y divide-cream/12 border-t border-cream/12">
                {p.spek.map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <dt className="micro text-smoke">{k}</dt>
                    <dd className="text-sm text-cream sm:text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="micro mt-8 leading-[1.7] text-smoke">
                Nama, harga, dan spesifikasi adalah contoh untuk keperluan purwarupa desain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posisi di pita — ciri khas halaman produk Amber */}
      <section aria-labelledby="pita-judul" className="border-t border-cream/10 bg-night-2 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="pita-judul" className="text-[1.8rem] leading-[1.1] md:text-[2.3rem]">
            Di mana {p.nama} berada di pita
          </h2>
          <div className="relative mt-12">
            <div aria-hidden="true" className="intensity-track h-2 w-full rounded-full" />
            <ol className="absolute inset-x-0 top-1/2">
              {PITA.map((x) => (
                <li key={x.slug} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(x.intensitas - 0.5) * 10}%` }}>
                  <Link
                    href={`/produk/${x.slug}`}
                    aria-label={`${x.nama}, intensitas ${x.intensitas}`}
                    aria-current={x.slug === p.slug ? 'page' : undefined}
                    className={`block rounded-full border-2 border-night transition-transform hover:scale-125 ${
                      x.slug === p.slug ? 'h-7 w-7 bg-amber shadow-[0_0_22px_rgb(232_163_61/0.9)]' : 'h-4 w-4 bg-cream'
                    }`}
                  />
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-5 flex justify-between">
            <span className="micro text-smoke">Paling lembut</span>
            <span className="micro text-amber">Paling kuat</span>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {lembut ? (
              <Link href={`/produk/${lembut.slug}`} className="warm-edge group rounded-[var(--radius-soft)] p-6 transition-colors hover:border-cream/35">
                <p className="micro text-smoke">← Sedikit lebih lembut</p>
                <p className="mt-2 text-lg font-bold text-cream group-hover:text-amber">{lembut.nama}</p>
                <Nyala n={lembut.intensitas} className="mt-3" />
              </Link>
            ) : (
              <p className="warm-edge rounded-[var(--radius-soft)] p-6 text-sm text-smoke">Ini titik paling lembut di koleksi — tempat yang baik untuk mulai.</p>
            )}
            {kuat ? (
              <Link href={`/produk/${kuat.slug}`} className="warm-edge group rounded-[var(--radius-soft)] p-6 text-right transition-colors hover:border-cream/35">
                <p className="micro text-smoke">Sedikit lebih kuat →</p>
                <p className="mt-2 text-lg font-bold text-cream group-hover:text-amber">{kuat.nama}</p>
                <Nyala n={kuat.intensitas} className="mt-3" />
              </Link>
            ) : (
              <p className="warm-edge rounded-[var(--radius-soft)] p-6 text-right text-sm text-smoke">Ini ujung pita. Tidak ada yang lebih kuat — dan tidak perlu.</p>
            )}
          </div>
        </div>
      </section>

      {setingkat.length > 0 && (
        <section className="bg-night py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-10 text-[1.8rem] leading-[1.1] md:text-[2.3rem]">
              Juga di <span className="text-amber">tingkat {t.romawi}</span>
            </h2>
            <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
              {setingkat.slice(0, 3).map((x) => (
                <li key={x.slug}><ProductCard p={x} /></li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
