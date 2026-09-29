'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nyala from '@/components/Nyala'
import { TINGKAT, produkBySlug, rupiah } from '@/lib/katalog'

/* Kuis tiga pertanyaan → satu tingkat + satu titik mulai. Sengaja jujur:
   kalau obrolan berdua masih canggung, sarannya belum membeli apa pun. */

const TANYA = [
  {
    id: 'alat',
    q: 'Pernah memakai alat sebelumnya?',
    opsi: ['Belum pernah', 'Sekali-dua kali', 'Cukup sering'],
  },
  {
    id: 'bicara',
    q: 'Seberapa nyaman membicarakannya berdua?',
    opsi: ['Masih canggung', 'Lumayan', 'Sudah biasa'],
  },
  {
    id: 'cari',
    q: 'Yang paling dicari sekarang?',
    opsi: ['Suasana & kedekatan', 'Sesuatu yang baru', 'Yang lebih intens'],
  },
]

function hitung(j) {
  const skor = j.alat + j.bicara + j.cari
  let tingkat = skor <= 2 ? 1 : skor <= 4 ? 2 : 3
  const canggung = j.bicara === 0
  if (canggung) tingkat = 1
  const slug =
    tingkat === 1
      ? j.alat === 0 ? 'paket-tingkat-satu' : 'minyak-pijat-hangat'
      : tingkat === 2
        ? skor === 3 ? 'glow-mini' : 'ember-wand'
        : skor === 5 ? 'flare-remote' : 'set-nyala-penuh'
  return { tingkat: TINGKAT[tingkat - 1], produk: produkBySlug(slug), canggung }
}

export default function KuisTingkat() {
  const [jawab, setJawab] = useState({})
  const lengkap = TANYA.every((t) => jawab[t.id] !== undefined)
  const hasil = lengkap ? hitung(jawab) : null

  return (
    <div className="warm-edge overflow-hidden rounded-[var(--radius-soft)] bg-night-2">
      <div className="grid gap-px bg-cream/10 lg:grid-cols-3">
        {TANYA.map((t, i) => (
          <fieldset key={t.id} className="bg-night-2 p-6 sm:p-8">
            <legend className="float-left mb-5 w-full">
              <span className="micro block text-amber">Pertanyaan {i + 1} dari 3</span>
              <span className="mt-2 block text-lg font-bold text-cream">{t.q}</span>
            </legend>
            <div className="clear-both space-y-2.5">
              {t.opsi.map((o, k) => {
                const on = jawab[t.id] === k
                return (
                  <label
                    key={o}
                    className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-full border px-5 text-sm transition-colors ${
                      on ? 'border-amber bg-amber/15 text-cream' : 'border-cream/15 text-smoke hover:border-cream/35 hover:text-cream'
                    }`}
                  >
                    <input
                      type="radio"
                      name={t.id}
                      checked={on}
                      onChange={() => setJawab((p) => ({ ...p, [t.id]: k }))}
                      className="h-4 w-4 accent-[#e8a33d]"
                    />
                    {o}
                  </label>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div aria-live="polite" className="border-t border-cream/10 p-6 sm:p-10">
        {!hasil ? (
          <p className="text-center text-smoke">
            Jawab ketiganya — hasilnya muncul di sini, tanpa perlu mendaftar.
          </p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <p className="micro text-amber">Titik mulai Anda</p>
              <p className="mt-3 text-[2.2rem] leading-[1.05] font-extrabold tracking-tight text-cream">
                Tingkat {hasil.tingkat.romawi} · {hasil.tingkat.nama}
              </p>
              <p className="mt-4 leading-relaxed text-smoke">{hasil.tingkat.catatan}</p>
              {hasil.canggung && (
                <p className="mt-5 rounded-[var(--radius-soft)] bg-amber/10 p-5 text-sm leading-relaxed text-cream">
                  Jujur saja: selama membicarakannya masih canggung, Anda belum perlu membeli apa pun.
                  Mulai dari{' '}
                  <Link href="/jurnal/menyiapkan-ruangan" className="font-bold underline decoration-amber underline-offset-4 hover:text-amber">
                    menyiapkan ruangan
                  </Link>{' '}
                  — lalu kembali ke sini kapan pun siap.
                </p>
              )}
            </div>
            <Link
              href={`/produk/${hasil.produk.slug}`}
              className="warm-edge group flex items-center gap-5 rounded-[var(--radius-soft)] bg-night p-5 transition-colors hover:border-amber/50"
            >
              <span className="min-w-0 flex-1">
                <span className="micro block text-smoke">{hasil.canggung ? 'Kalau tetap ingin satu barang' : 'Satu barang untuk memulai'}</span>
                <span className="mt-2 block text-xl font-bold text-cream group-hover:text-amber">{hasil.produk.nama}</span>
                <Nyala n={hasil.produk.intensitas} className="mt-3" />
                <span className="mt-3 block text-sm text-smoke">{rupiah(hasil.produk.harga)}</span>
              </span>
              <span aria-hidden="true" className="text-2xl text-amber">→</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
