import Link from 'next/link'

/* ============================================================================
   Bagian penanda varian ini: "Skala Intensitas".
   Menjawab kebingungan yang paling umum bagi pembeli pertama — harus mulai
   dari mana. Produk dipetakan pada satu garis, dari yang paling lembut ke
   yang paling kuat, lengkap dengan saran titik mulai.
   ========================================================================== */

const tingkat = [
  {
    level: 'I',
    nama: 'Lembut',
    posisi: 12,
    untuk: 'Baru pertama mencoba',
    contoh: 'Minyak pijat, pelumas berbahan air',
    catatan: 'Dipakai berdua tanpa alat. Cara paling aman untuk memulai percakapan.',
  },
  {
    level: 'II',
    nama: 'Sedang',
    posisi: 45,
    untuk: 'Sudah pernah, ingin menambah',
    contoh: 'Vibrator ringan, set pasangan',
    catatan: 'Getaran rendah dengan beberapa pilihan pola. Ukurannya masih ringkas.',
  },
  {
    level: 'III',
    nama: 'Kuat',
    posisi: 82,
    untuk: 'Tahu persis yang dicari',
    contoh: 'Perangkat bertenaga, kit lengkap',
    catatan: 'Daya lebih besar dan pilihan pola lebih banyak. Sebaiknya bukan yang pertama dibeli.',
  },
]

export default function IntensityScale() {
  return (
    <section id="panduan" className="relative overflow-hidden bg-night py-20 md:py-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 top-0 h-[30rem]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="micro mb-5 text-amber">Panduan</p>
          <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">
            Tidak perlu langsung ke yang paling kuat
          </h2>
          <p className="mt-5 leading-relaxed text-smoke">
            Sebagian besar orang berhenti di keranjang bukan karena harga, tapi karena tidak tahu
            harus mulai dari mana. Ini peta sederhananya — pilih satu tingkat, bukan satu produk.
          </p>
        </div>

        {/* Pita skala */}
        <div className="mb-12">
          <div className="relative">
            <div aria-hidden="true" className="intensity-track h-2 w-full rounded-full" />
            {tingkat.map((t) => (
              <span
                key={t.level}
                aria-hidden="true"
                className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-night bg-cream"
                style={{ left: `${t.posisi}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <span className="micro text-smoke/60">Lembut</span>
            <span className="micro text-amber">Kuat</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tingkat.map((t) => (
            <article
              key={t.level}
              className="warm-edge flex flex-col rounded-[var(--radius-soft)] bg-night-2 p-7"
            >
              <div className="mb-5 flex items-baseline gap-3">
                <span className="micro text-amber">Tingkat {t.level}</span>
              </div>

              <h3 className="text-xl">{t.nama}</h3>
              <p className="micro mt-3 text-smoke/60">{t.untuk}</p>

              <p className="mt-5 text-sm leading-relaxed text-cream/80">{t.catatan}</p>

              <dl className="mt-6 border-t border-cream/12 pt-5">
                <dt className="micro text-smoke/55">Contoh</dt>
                <dd className="mt-2 text-sm text-cream">{t.contoh}</dd>
              </dl>
            </article>
          ))}
        </div>

        <div className="warm-edge mt-10 flex flex-col gap-5 rounded-[var(--radius-soft)] bg-night-2 px-7 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-smoke">
            Masih ragu? Ceritakan sedikit soal apa yang Anda cari — kami sarankan satu titik mulai,
            tanpa dorongan untuk membeli yang lebih mahal.
          </p>
          <Link
            href="/#kontak"
            className="micro shrink-0 rounded-full bg-amber px-6 py-3.5 text-center text-night transition-colors hover:bg-cream"
          >
            Minta Saran
          </Link>
        </div>
      </div>
    </section>
  )
}
