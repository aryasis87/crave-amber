'use client'

import { useState } from 'react'
import {
  Lock,
  HeartHandshake,
  Scale,
  ShieldCheck,
  PackageCheck,
  MessageCircleQuestion,
  ThumbsUp,
} from 'lucide-react'

const faqs = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#FF6B2C]" />,
    question: 'Apakah pengiriman bersifat rahasia?',
    answer:
      'Ya. Kami selalu mengirim dalam kemasan polos tanpa label produk. Tidak ada yang tahu isi paket Anda kecuali Anda.',
  },
  {
    icon: <PackageCheck className="w-6 h-6 text-[#FF6B2C]" />,
    question: 'Bagaimana cara memilih produk yang cocok untuk pasangan kami?',
    answer:
      'Kami menyediakan panduan interaktif, kuis kecocokan, dan kurasi khusus seperti "For Couples", "Beginner Kits", dan lainnya.',
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-[#FF6B2C]" />,
    question: 'Apakah produk aman digunakan?',
    answer:
      'Produk kami dibuat dari material medical-grade, hypoallergenic, dan bebas BPA. Kami hanya memilih merek terpercaya yang lolos uji kualitas.',
  },
  {
    icon: <MessageCircleQuestion className="w-6 h-6 text-[#FF6B2C]" />,
    question: 'Apakah tersedia opsi pembayaran aman?',
    answer:
      'Semua transaksi diamankan dengan SSL 256-bit. Kami mendukung kartu kredit, e-wallet, dan transfer bank dengan privasi penuh.',
  },
]

export default function AboutAndFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-28 text-gray-800 dark:text-gray-100">

      {/* ✨ About Section */}
      <div className="grid md:grid-cols-2 items-center gap-14">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Redefining Intimacy with Elegance & Trust
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Positive Crave hadir untuk memperkuat hubungan melalui eksplorasi intim yang aman, elegan, dan bebas rasa malu. Setiap kurasi kami adalah simbol kepercayaan, kedekatan, dan kenyamanan.
          </p>
        </div>

        {/* 🔐 Icons Section */}
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[Lock, HeartHandshake, Scale].map((Icon, i) => {
            const titles = ['Discreet', 'Curated', 'Inclusive']
            const subtitles = [
              'Privasi Anda adalah prioritas. Selalu tanpa jejak.',
              'Kami pilih dengan cinta, untuk cinta.',
              'Untuk semua bentuk cinta dan ekspresi kasih sayang.',
            ]
            return (
              <div key={i} className="space-y-3 group transition">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#FFF3E6] dark:bg-[#FF8C3F]/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#FF6B2C]" />
                </div>
                <h4 className="text-lg font-semibold">{titles[i]}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{subtitles[i]}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ❓ FAQ Section */}
      <div>
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Jawaban atas pertanyaan yang paling sering ditanyakan pelanggan kami.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => toggle(i)}
              className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl p-6 space-y-3 ${
                openIndex === i
                  ? 'bg-[#FFF9F4] dark:bg-zinc-800/60 border-[#FFD5B3] dark:border-[#FFA366]'
                  : 'bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFF3E6] dark:bg-[#FF8C3F]/30">
                  {faq.icon}
                </div>
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </div>

              <div
                className={`text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndex === i
                    ? 'max-h-[300px] opacity-100 mt-2'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
