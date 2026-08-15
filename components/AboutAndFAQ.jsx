'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const tanya = [
  {
    q: 'Saya harus mulai dari tingkat berapa?',
    a: 'Kalau ini yang pertama, mulai dari Tingkat I — minyak pijat atau pelumas, dipakai berdua tanpa alat. Tingkat II baru masuk akal setelah Anda berdua tahu apa yang dicari.',
  },
  {
    q: 'Apa bedanya tingkat II dan III?',
    a: 'Terutama daya dan jumlah pola. Tingkat III bukan versi "lebih bagus", melainkan lebih spesifik — dan biasanya kurang cocok jadi pembelian pertama.',
  },
  {
    q: 'Kemasannya seperti apa?',
    a: 'Kotak cokelat polos tanpa cetakan, dengan keterangan isi "perlengkapan pribadi". Nama Positive Crave tidak muncul di resi maupun mutasi rekening.',
  },
  {
    q: 'Materialnya aman untuk kulit sensitif?',
    a: 'Alat kami memakai silikon medical-grade bebas BPA yang tidak berpori. Untuk pelumas, pilih yang berbahan air — paling jarang memicu iritasi dan mudah dibilas.',
  },
  {
    q: 'Boleh dipakai bersama pelumas apa saja?',
    a: 'Untuk alat berbahan silikon, gunakan pelumas berbahan air. Pelumas berbahan silikon dapat merusak permukaannya.',
  },
  {
    q: 'Kalau ternyata tidak cocok?',
    a: 'Untuk alasan higienis, barang yang sudah dibuka tidak dapat ditukar. Karena itu kami lebih suka menyarankan tingkat yang lebih rendah lebih dulu.',
  },
]

export default function AboutAndFAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="tanya" className="relative overflow-hidden bg-night-2 py-20 md:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="micro mb-5 text-amber">Tanya Jawab</p>
          <h2 className="text-[2rem] leading-[1.12] md:text-[2.7rem]">
            Enam hal yang paling sering ditanyakan
          </h2>
          <p className="mt-5 leading-relaxed text-smoke">
            Sebagian besar tentang cara memulai, bukan tentang spesifikasi.
          </p>
        </div>

        <dl className="border-t border-cream/12">
          {tanya.map((t, i) => {
            const terbuka = open === i
            return (
              <div key={t.q} className="border-b border-cream/12">
                <dt>
                  <button
                    onClick={() => setOpen(terbuka ? null : i)}
                    aria-expanded={terbuka}
                    aria-controls={`a-jwb-${i}`}
                    className="flex w-full items-start gap-5 py-6 text-left"
                  >
                    <span aria-hidden="true" className="micro mt-1.5 shrink-0 text-amber">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-base font-bold text-cream md:text-lg">{t.q}</span>
                    <Plus
                      size={18}
                      strokeWidth={2}
                      aria-hidden="true"
                      className={`mt-1 shrink-0 text-cream transition-transform duration-300 ${
                        terbuka ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {terbuka && (
                    <motion.dd
                      id={`a-jwb-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-11 text-sm leading-relaxed text-smoke">{t.a}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
