'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Heart, ArrowRight, Info, Power, MessageCircle, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const product = {
  name: 'Pulse Vibe',
  price: '$79',
  images: ['/images/p7.jpg', '/images/p8.jpg', '/images/p2.jpg'],
  features: [
    { icon: Info, label: 'App-Controlled' },
    { icon: Zap, label: 'Waterproof' },
    { icon: MessageCircle, label: 'Long-Distance' },
    { icon: Power, label: 'USB Rechargeable' },
    { icon: Info, label: 'Body-Safe Silicone' },
  ],
  description:
    'Pulse Vibe mengirimkan gelombang sensual ke setiap sentuhan. Rasakan koneksi nyata, kapanpun dan di manapun.',
  specifications: [
    { key: 'Material', value: 'Medical Grade Silicone' },
    { key: 'Battery', value: '1.5h USB Rechargeable' },
    { key: 'Waterproof', value: 'IPX7 Rated' },
    { key: 'Noise', value: '< 40dB' },
  ],
  reviews: [
    { name: 'Alicia & Ben', comment: 'Sangat intim & menyenangkan!', rating: 5 },
    { name: 'Chris & Lee', comment: 'Desainnya keren dan fungsional.', rating: 4 },
  ],
}

const tabs = ['Description', 'Specifications', 'Reviews']

export default function ProductOrbitShowcase() {
  const [liked, setLiked] = useState(false)
  const [tab, setTab] = useState('Description')
  const [imgIndex, setImgIndex] = useState(0)

  return (
    <section className="relative bg-gradient-to-br from-[#0B090A] via-black to-[#1A0903] text-white min-h-screen overflow-hidden">
      {/* Orbit Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          className="absolute top-[-25%] left-[-20%] w-[120vw] h-[120vw] bg-[#FF7A45]/15 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
          className="absolute top-[30%] left-[60%] w-[100vw] h-[100vw] bg-[#FFB347]/20 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Image */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative w-72 h-96"
          >
            <Image
              src={product.images[imgIndex]}
              alt={`Pulse Vibe image ${imgIndex + 1}`}
              fill
              className="object-cover rounded-3xl shadow-2xl"
              priority
            />
            <button
              onClick={() => setLiked(!liked)}
              aria-label={liked ? 'Unlike product' : 'Like product'}
              className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-[#FF6B2C]/40 transition"
            >
              <Heart className={`w-6 h-6 ${liked ? 'text-[#FF7A45]' : 'text-white'}`} />
            </button>
          </motion.div>
        </div>

        {/* Right Panel */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-8 border border-white/10 shadow-xl">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl text-[#FFA94D] font-semibold">{product.price}</p>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4">
            {product.features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center text-sm text-center"
              >
                <f.icon className="w-6 h-6 mb-1 text-[#FFB347]" />
                <span>{f.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-4 flex-wrap">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  tab === t ? 'bg-[#FF6B2C] text-white' : 'bg-white/10 hover:bg-[#FF6B2C]/30'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Animated Tab Content */}
          <div className="relative h-40">
            <AnimatePresence mode="wait">
              {tab === 'Description' && (
                <motion.div
                  key="desc"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 text-[#FFE3CC]"
                >
                  {product.description}
                </motion.div>
              )}
              {tab === 'Specifications' && (
                <motion.ul
                  key="spec"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 space-y-2 text-[#FFE3CC] text-sm"
                >
                  {product.specifications.map((s, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{s.key}</span>
                      <span className="font-semibold">{s.value}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
              {tab === 'Reviews' && (
                <motion.div
                  key="rev"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 space-y-4 overflow-y-auto pr-2 text-[#FFE3CC] text-sm"
                >
                  {product.reviews.map((r, i) => (
                    <div
                      key={i}
                      className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10"
                    >
                      <p className="font-bold">{r.name}</p>
                      <p>{r.comment}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                aria-label={`View image ${i + 1}`}
                className={`w-16 h-10 rounded-lg overflow-hidden border-2 ${
                  imgIndex === i ? 'border-[#FFB347]' : 'border-white/30'
                }`}
              >
                <Image src={img} alt={`Thumbnail ${i + 1}`} width={64} height={64} className="object-cover" />
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex-1 px-6 py-3 bg-[#FF6B2C] rounded-full font-semibold text-white shadow-lg"
            >
              Add to Cart <ArrowRight className="inline ml-2 w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              className="px-6 py-3 border border-[#FFA94D] rounded-full font-semibold text-[#FFA94D]"
            >
              Wishlist
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
