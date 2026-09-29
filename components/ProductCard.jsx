import Image from 'next/image'
import Link from 'next/link'
import Nyala from '@/components/Nyala'
import { rupiah, tingkatDari } from '@/lib/katalog'

/* Kartu produk Amber: sudut membulat, foto bernada hangat (.warm-photo),
   dan pengukur nyala sebagai pengganti label kategori. `redup` dipakai
   penggeser di /koleksi untuk produk yang melebihi batas pilihan. */
export default function ProductCard({ p, redup = false, sizes = '(min-width: 1024px) 33vw, 50vw' }) {
  const t = tingkatDari(p.intensitas)
  return (
    <article
      className={`warm-edge group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-soft)] bg-night-2 transition-all duration-500 ${
        redup ? 'scale-[0.98] opacity-35 grayscale' : 'hover:border-amber/40'
      }`}
    >
      <div className="warm-photo relative aspect-[4/5] overflow-hidden">
        <Image src={p.image} alt={p.nama} fill sizes={sizes} className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        <span className="micro absolute top-3 left-3 z-10 rounded-full bg-night/85 px-3 py-1.5 text-amber backdrop-blur-sm sm:top-4 sm:left-4">
          Tingkat {t.romawi}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <Nyala n={p.intensitas} />
        <h3 className="mt-3 text-base font-bold text-cream sm:text-lg">
          <Link href={`/produk/${p.slug}`} className="after:absolute after:inset-0" tabIndex={redup ? -1 : undefined}>
            {p.nama}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-smoke sm:line-clamp-none sm:text-sm">{p.ringkas}</p>
        <div className="mt-4 flex items-center justify-between border-t border-cream/12 pt-4">
          <span className="text-sm font-bold text-cream sm:text-base">{rupiah(p.harga)}</span>
          <span aria-hidden="true" className="micro hidden text-amber sm:inline">Rincian</span>
        </div>
      </div>
    </article>
  )
}
