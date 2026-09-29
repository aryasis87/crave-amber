'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Nyala from '@/components/Nyala'
import { PRODUK, produkBySlug, rupiah, tingkatDari } from '@/lib/katalog'

const ONGKIR = 25000
const MEDAN = [
  { name: 'nama', label: 'Nama penerima', auto: 'name' },
  { name: 'telepon', label: 'Telepon', auto: 'tel', type: 'tel' },
  { name: 'surel', label: 'Surel', auto: 'email', type: 'email', lebar: true },
]

export default function CheckoutPage() {
  const q = useSearchParams()
  const p = produkBySlug(q.get('produk')) ?? PRODUK.find((x) => x.unggulan)
  const t = tingkatDari(p.intensitas)
  const [kartu, setKartu] = useState(true)
  const [proses, setProses] = useState(false)
  const [selesai, setSelesai] = useState(false)

  const kirim = (e) => {
    e.preventDefault()
    setProses(true)
    setTimeout(() => {
      setProses(false)
      setSelesai(true)
    }, 1000)
  }

  return (
    <section className="relative overflow-hidden bg-night pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 top-0 h-[30rem]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <p className="micro mb-4 text-amber">Pemesanan</p>
        <h1 className="text-[2.2rem] leading-[1.06] md:text-[2.9rem]">Hampir menyala</h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          {selesai ? (
            <div role="status" className="warm-edge rounded-[var(--radius-soft)] bg-night-2 px-8 py-16 text-center">
              <span aria-hidden="true" className="mx-auto mb-6 block h-4 w-4 rounded-full bg-amber shadow-[0_0_30px_rgb(232_163_61/0.9)]" />
              <h2 className="text-2xl text-cream">Terima kasih</h2>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-smoke">
                Ini purwarupa desain untuk kontes — tidak ada pesanan atau pembayaran yang diproses. Di toko
                sungguhan, {p.nama} dikirim dalam kotak polos{kartu ? ' bersama kartu panduan tingkat ' + t.romawi : ''}.
              </p>
              <button onClick={() => setSelesai(false)} className="micro mt-8 text-amber hover:text-cream">Kembali ke formulir</button>
            </div>
          ) : (
            <form onSubmit={kirim} className="warm-edge space-y-5 rounded-[var(--radius-soft)] bg-night-2 p-6 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                {MEDAN.map((f) => (
                  <div key={f.name} className={f.lebar ? 'sm:col-span-2' : ''}>
                    <label htmlFor={f.name} className="micro mb-2.5 block text-smoke">{f.label} <span className="text-amber">*</span></label>
                    <input id={f.name} name={f.name} type={f.type ?? 'text'} autoComplete={f.auto} required className="w-full rounded-full border border-cream/15 bg-night px-5 py-3.5 text-sm text-cream focus:border-amber focus:outline-none" />
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="alamat" className="micro mb-2.5 block text-smoke">Alamat pengiriman <span className="text-amber">*</span></label>
                <textarea id="alamat" name="alamat" rows={3} required autoComplete="street-address" className="w-full resize-y rounded-[1.25rem] border border-cream/15 bg-night px-5 py-3.5 text-sm text-cream focus:border-amber focus:outline-none" />
              </div>

              <label className="flex cursor-pointer items-start gap-4 rounded-[var(--radius-soft)] bg-amber/10 p-5">
                <input type="checkbox" checked={kartu} onChange={(e) => setKartu(e.target.checked)} className="mt-1 h-4 w-4 accent-[#e8a33d]" />
                <span>
                  <span className="block text-sm font-bold text-cream">Sertakan kartu panduan tingkat {t.romawi} — gratis</span>
                  <span className="mt-1 block text-sm text-smoke">Tiga kartu kecil tanpa logo: cara memulai, tanda untuk melambat, dan satu pertanyaan untuk berdua.</span>
                </span>
              </label>

              <button type="submit" disabled={proses} className="w-full rounded-full bg-amber py-4 text-sm font-bold text-night transition-colors hover:bg-cream disabled:opacity-70">
                {proses ? 'Memproses…' : `Pesan · ${rupiah(p.harga + ONGKIR)}`}
              </button>
              <p className="micro text-center leading-[1.7] text-smoke">Purwarupa desain — tidak ada pembayaran maupun data yang tersimpan.</p>
            </form>
          )}

          <aside className="warm-edge h-fit overflow-hidden rounded-[var(--radius-soft)] bg-night-2">
            <div className="warm-photo relative aspect-[16/10]">
              <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <p className="micro text-amber">Tingkat {t.romawi} · {t.nama}</p>
              <p className="mt-2 text-xl font-bold text-cream">{p.nama}</p>
              <Nyala n={p.intensitas} className="mt-3" />
              <dl className="mt-6 divide-y divide-cream/12 border-t border-cream/12">
                {[[p.nama, rupiah(p.harga)], ['Pengiriman, kotak polos', rupiah(ONGKIR)], ...(kartu ? [['Kartu panduan', 'Gratis']] : [])].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-smoke">{k}</dt>
                    <dd className="font-bold text-cream">{v}</dd>
                  </div>
                ))}
                <div className="flex justify-between gap-4 py-4">
                  <dt className="font-bold text-cream">Total</dt>
                  <dd className="text-lg font-bold text-amber">{rupiah(p.harga + ONGKIR)}</dd>
                </div>
              </dl>
              <Link href={`/produk/${p.slug}`} className="micro mt-2 inline-block text-amber hover:text-cream">← Kembali ke produk</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
