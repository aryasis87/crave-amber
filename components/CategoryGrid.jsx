'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Pulse Vibe',
    price: '$79',
    image: '/images/p2.jpg',
    desc: 'Explore new waves of pleasure with dual motor design.',
  },
  {
    id: 2,
    name: 'Silken Lube',
    price: '$29',
    image: '/images/p3.jpg',
    desc: 'Sensation-enhancing formula for natural glide.',
  },
  {
    id: 3,
    name: 'Intimacy Kit',
    price: '$119',
    image: '/images/p6.jpg',
    desc: 'Curated kit to spark romantic discovery.',
  },
]

export default function ImmersiveGallery() {
  const scrollRef = useRef(null)
  const router = useRouter()

  const { scrollXProgress } = useScroll({ container: scrollRef })
  const scale = useTransform(scrollXProgress, [0, 1], [1, 1.05])
  const titleY = useTransform(scrollXProgress, [0, 1], [0, -40])

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-[#0B090A] text-white">
      <div className="max-w-7xl mx-auto">
        {/* 🌀 Title with subtle parallax */}
        <motion.h2
          style={{ y: titleY }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-br from-white via-[#FFA94D] to-[#FF6B2C]"
        >
          Discover Pleasure as Art
        </motion.h2>

        {/* 🖼️ Scrollable Product Gallery */}
        <div
          ref={scrollRef}
          className="scrollbar-hidden flex gap-12 snap-x snap-mandatory overflow-x-auto pb-6 scroll-smooth touch-pan-x"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative min-w-[90%] sm:min-w-[85%] md:min-w-[480px] snap-center rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 group transition"
              whileHover={{ scale: 1.01 }}
            >
              {/* Product Image */}
              <motion.div
                className="relative w-full h-96 md:h-[28rem] overflow-hidden"
                style={{ scale }}
              >
                <Image
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition duration-700 ease-out"
                  priority={product.id === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              </motion.div>

              {/* Overlay Info */}
              <div className="absolute bottom-0 z-20 p-6 bg-[#1a1a1a]/80 backdrop-blur-xl w-full rounded-t-2xl text-white">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm text-zinc-300 mt-1 mb-3">{product.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#FF6B2C]">{product.price}</span>
                  <button
                    onClick={() => router.push(`/products/${product.id}`)}
                    className="flex items-center text-sm font-medium text-[#FFA94D] hover:text-orange-100 hover:underline transition"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          style={{ scaleX: scrollXProgress }}
          className="origin-left h-1 bg-gradient-to-r from-[#FF6B2C] via-[#FFA94D] to-[#FFB347] mt-6 rounded-full"
        />
      </div>
    </section>
  )
}
