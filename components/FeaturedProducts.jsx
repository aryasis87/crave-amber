'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Velvet Echo Wand',
    description:
      'Crafted for deep resonance and a touch that lingers. Elegant in form, powerful in function.',
    price: '$149',
    image: '/images/p3.jpg',
    badge: 'Signature',
  },
  {
    id: 2,
    name: 'Obsidian Oil Set',
    description:
      'Infused with rare botanicals to elevate every sensation. Ideal for intimate rituals.',
    price: '$89',
    image: '/images/p6.jpg',
    badge: 'Limited Series',
  },
  {
    id: 3,
    name: 'Whisper Silk Kit',
    description:
      'Soft bondage meets high design. Experience luxury restraint with intention.',
    price: '$179',
    image: '/images/p5.jpg',
    badge: 'New Drop',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B090A] text-white py-32 px-6 md:px-12">
      {/* Glow Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#FF6B2C]/20 rounded-full blur-[160px] mix-blend-screen z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#FFB347]/25 rounded-full blur-[140px] mix-blend-screen z-0" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none z-0" />

      <div className="z-10 max-w-7xl mx-auto w-full space-y-32">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col-reverse md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-16`}
          >
            {/* Text */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <span className="text-sm uppercase tracking-widest text-[#FFA94D] font-semibold">
                {p.badge}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-[#FFA94D] to-[#FF6B2C]">
                {p.name}
              </h3>
              <p className="text-[#FFE3CC] text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                {p.description}
              </p>
              <div className="text-2xl font-semibold text-white/90">{p.price}</div>
            </div>

            {/* Image */}
            <div className="relative flex-1 w-full h-[360px] md:h-[480px] lg:h-[560px] drop-shadow-[0_20px_60px_rgba(255,107,44,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B2C]/10 to-[#FFB347]/10 z-10 rounded-xl pointer-events-none" />
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover rounded-xl z-20"
              />
              <button className="absolute top-4 right-4 bg-white/10 hover:bg-[#FF6B2C]/20 p-2 rounded-full backdrop-blur transition z-30">
                <Heart className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF6B2C]/40 via-white/10 to-[#FF6B2C]/40 opacity-50" />
    </section>
  )
}
