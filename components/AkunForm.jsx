'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nyala from '@/components/Nyala'

/* Cangkang /masuk, /register, /forgot untuk Amber. Sudut pandangnya: akun
   berguna karena mengingat tingkat yang pernah Anda coba, sehingga saran
   berikutnya naik perlahan — bukan melompat. Purwarupa tanpa autentikasi. */

const MODE = {
  masuk: {
    eyebrow: 'Akun',
    judul: 'Selamat datang kembali',
    lead: 'Masuk untuk melihat pesanan dan saran tingkat berikutnya yang disesuaikan dengan yang sudah pernah Anda coba.',
    tombol: 'Masuk',
    medan: [
      { name: 'surel', label: 'Surel', type: 'email', auto: 'email' },
      { name: 'sandi', label: 'Kata sandi', type: 'password', auto: 'current-password' },
    ],
    selesai: 'Di toko sungguhan, Anda kini masuk dan melihat saran dari tingkat terakhir. Ini purwarupa, jadi tidak ada akun yang diperiksa.',
  },
  daftar: {
    eyebrow: 'Akun baru',
    judul: 'Mulai dari tingkat Anda sendiri',
    lead: 'Akun menyimpan tingkat yang pernah dicoba — hanya Anda yang bisa melihatnya. Nama boleh nama panggilan.',
    tombol: 'Buat akun',
    medan: [
      { name: 'sapaan', label: 'Nama panggilan', type: 'text', auto: 'nickname', wajib: false },
      { name: 'surel', label: 'Surel', type: 'email', auto: 'email' },
      { name: 'sandi', label: 'Kata sandi', type: 'password', auto: 'new-password' },
    ],
    selesai: 'Di toko sungguhan, akun Anda kini aktif dan dimulai dari tingkat I. Ini purwarupa, tidak ada data yang tersimpan.',
  },
  lupa: {
    eyebrow: 'Akun',
    judul: 'Lupa kata sandi?',
    lead: 'Tidak apa-apa. Kami kirim tautan untuk mengatur ulang ke surel Anda — subjeknya polos, tanpa nama merek.',
    tombol: 'Kirim tautan',
    medan: [{ name: 'surel', label: 'Surel', type: 'email', auto: 'email' }],
    selesai: 'Di toko sungguhan, tautan atur ulang sudah terkirim dan berlaku 30 menit. Ini purwarupa.',
  },
}

const RIWAYAT = [
  ['Tingkat I', 'Minyak Pijat Hangat', 1],
  ['Tingkat I', 'Paket Tingkat I', 3],
  ['Saran berikutnya', 'Glow Mini', 4],
]

export default function AkunForm({ mode }) {
  const m = MODE[mode]
  const [proses, setProses] = useState(false)
  const [ok, setOk] = useState(false)

  const kirim = (e) => {
    e.preventDefault()
    setProses(true)
    setTimeout(() => {
      setProses(false)
      setOk(true)
    }, 900)
  }

  return (
    <section className="relative overflow-hidden bg-night pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="candle absolute inset-0" />
      <div className="relative z-10 mx-auto grid max-w-5xl items-start gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="warm-edge rounded-[var(--radius-soft)] bg-night-2 p-7 sm:p-10">
          <p className="micro mb-4 text-amber">{m.eyebrow}</p>
          <h1 className="text-[2rem] leading-[1.08] md:text-[2.5rem]">{m.judul}</h1>
          <p className="mt-4 leading-relaxed text-smoke">{m.lead}</p>

          {ok ? (
            <p role="status" className="mt-8 rounded-[var(--radius-soft)] bg-amber/10 p-5 text-sm leading-relaxed text-cream">{m.selesai}</p>
          ) : (
            <form onSubmit={kirim} className="mt-8 space-y-5">
              {m.medan.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="micro mb-2.5 block text-smoke">
                    {f.label}
                    {f.wajib !== false && <span className="ml-1 text-amber">*</span>}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.auto}
                    required={f.wajib !== false}
                    className="w-full rounded-full border border-cream/15 bg-night px-5 py-3.5 text-sm text-cream focus:border-amber focus:outline-none"
                  />
                </div>
              ))}
              <button type="submit" disabled={proses} className="w-full rounded-full bg-amber py-4 text-sm font-bold text-night transition-colors hover:bg-cream disabled:opacity-70">
                {proses ? 'Memproses…' : m.tombol}
              </button>
            </form>
          )}

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-cream/12 pt-6">
            {mode !== 'masuk' && <Link href="/masuk" className="micro text-amber hover:text-cream">Sudah punya akun — masuk</Link>}
            {mode !== 'daftar' && <Link href="/register" className="micro text-amber hover:text-cream">Buat akun</Link>}
            {mode === 'masuk' && <Link href="/forgot" className="micro text-smoke hover:text-cream">Lupa kata sandi</Link>}
          </div>
          <p className="micro mt-6 leading-[1.7] text-smoke">Purwarupa desain — tidak ada autentikasi sungguhan.</p>
        </div>

        <aside className="lg:pt-6">
          <p className="micro text-amber">Contoh isi akun</p>
          <h2 className="mt-3 text-[1.6rem] leading-[1.15]">Naik pelan-pelan, tercatat rapi</h2>
          <ol className="mt-8 space-y-4">
            {RIWAYAT.map(([t, n, i], k) => (
              <li key={n} className={`warm-edge rounded-[var(--radius-soft)] p-5 ${k === RIWAYAT.length - 1 ? 'bg-amber/10' : 'bg-night-2'}`}>
                <p className="micro text-smoke">{t}</p>
                <p className="mt-1.5 font-bold text-cream">{n}</p>
                <Nyala n={i} className="mt-3" />
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-smoke">
            Riwayat ini tidak pernah dipakai untuk iklan dan bisa dihapus kapan saja. Belanja tanpa akun juga bisa.
          </p>
        </aside>
      </div>
    </section>
  )
}
