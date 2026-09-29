const suara = [
  {
    kutipan:
      'Kami kira harus langsung beli yang mahal biar berasa. Ternyata disuruh mulai dari tingkat satu dulu, dan itu memang lebih masuk akal.',
    nama: 'A. & M.',
    ket: 'Yogyakarta',
  },
  {
    kutipan:
      'Halaman panduannya yang bikin saya berani nanya. Bahasanya biasa saja, tidak menggurui, tidak juga norak.',
    nama: 'P.',
    ket: 'Tangerang',
  },
  {
    kutipan:
      'Paketnya benar-benar polos. Saya sempat lupa sudah pesan apa karena di kotaknya memang tidak ada tulisan apa-apa.',
    nama: 'H. & L.',
    ket: 'Semarang',
  },
]

export default function TestimonialsCarousel() {
  return (
    <section id="suara" className="relative overflow-hidden bg-night py-20 md:py-28">
      <div aria-hidden="true" className="candle absolute inset-x-0 bottom-0 h-72 opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="micro mb-5 text-amber">Catatan Pembeli</p>
          <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">
            Kebanyakan cerita soal mulainya, bukan barangnya
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {suara.map((s) => (
            <figure
              key={s.nama}
              className="warm-edge flex flex-col rounded-[var(--radius-soft)] bg-night-2 p-7"
            >
              <span aria-hidden="true" className="mb-6 block h-1 w-10 rounded-full bg-amber" />
              <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-cream/90">
                {s.kutipan}
              </blockquote>
              <figcaption className="mt-7 border-t border-cream/12 pt-5">
                <span className="block text-sm font-bold text-cream">{s.nama}</span>
                <span className="micro mt-1.5 block text-smoke">{s.ket}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="micro mt-8 leading-[1.7] text-smoke">
          Nama disingkat atas permintaan. Kutipan di atas adalah ilustrasi untuk purwarupa desain.
        </p>
      </div>
    </section>
  )
}
