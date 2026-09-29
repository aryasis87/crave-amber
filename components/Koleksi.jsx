'use client'

import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { PRODUK, TINGKAT } from '@/lib/katalog'

/* Koleksi Amber: satu penggeser "seberapa terang?" dari 1 sampai 10.
   Produk di atas batas tidak disembunyikan, hanya diredupkan — supaya
   pembeli tetap melihat jalan di depannya tanpa merasa didorong ke sana.
   Hash #tingkat-1..3 dari beranda mengatur batas ke ujung tingkat itu. */
export default function Koleksi() {
  const [batas, setBatas] = useState(10)

  useEffect(() => {
    const baca = () => {
      const m = window.location.hash.match(/^#tingkat-([123])$/)
      if (m) setBatas(TINGKAT[+m[1] - 1].rentang[1])
    }
    baca()
    window.addEventListener('hashchange', baca)
    return () => window.removeEventListener('hashchange', baca)
  }, [])

  const cocok = PRODUK.filter((p) => p.intensitas <= batas).length
  const t = TINGKAT.find((x) => batas >= x.rentang[0] && batas <= x.rentang[1])

  return (
    <>
      <div className="warm-edge rounded-[var(--radius-soft)] bg-night-2 p-6 sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <label htmlFor="batas" className="text-lg font-bold text-cream">
            Seberapa terang nyalanya?
          </label>
          <p className="text-sm text-smoke" aria-live="polite">
            Sampai tingkat <span className="font-bold text-amber">{t.romawi} · {t.nama}</span> — {cocok} dari {PRODUK.length} barang
          </p>
        </div>
        <input
          id="batas"
          type="range"
          min={1}
          max={10}
          step={1}
          value={batas}
          onChange={(e) => {
            setBatas(+e.target.value)
            history.replaceState(null, '', window.location.pathname)
          }}
          aria-valuetext={`Intensitas sampai ${batas} dari 10, tingkat ${t.nama}`}
          className="nyala-range mt-6 w-full"
        />
        <div className="mt-3 grid grid-cols-3 text-center">
          {TINGKAT.map((x) => (
            <button
              key={x.id}
              type="button"
              onClick={() => setBatas(x.rentang[1])}
              className={`micro min-h-10 rounded-full transition-colors ${t.id === x.id ? 'text-amber' : 'text-smoke hover:text-cream'}`}
            >
              {x.romawi} · {x.nama}
            </button>
          ))}
        </div>
      </div>

      {TINGKAT.map((x) => {
        const isi = PRODUK.filter((p) => p.intensitas >= x.rentang[0] && p.intensitas <= x.rentang[1])
        return (
          <section key={x.id} aria-labelledby={`rak-${x.id}`} className="mt-16">
            <div className="mb-8 flex flex-col gap-2 border-b border-cream/12 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 id={`rak-${x.id}`} className="text-[1.7rem] leading-[1.1] md:text-[2.1rem]">
                <span className="text-amber">Tingkat {x.romawi}</span> · {x.nama}
              </h2>
              <p className="micro text-smoke">{x.untuk}</p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
              {isi.map((p) => (
                <li key={p.slug}>
                  <ProductCard p={p} redup={p.intensitas > batas} />
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </>
  )
}
