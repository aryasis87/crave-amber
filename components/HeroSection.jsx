'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="relative isolate overflow-hidden bg-[#0B090A] text-white min-h-screen flex items-center px-6 md:px-12"
    >
      {/* Glow Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#FF6B2C]/20 rounded-full blur-[160px] mix-blend-screen z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#FFA94D]/25 rounded-full blur-[140px] mix-blend-screen z-0" />

      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none z-0" />

      {/* Content */}
      <div className="z-10 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-20">
        
        {/* Text Area */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-[#FFA94D] to-[#FF6B2C]"
          >
            Designed <span className="inline-block md:block">For Deeper Desire.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-lg md:text-xl text-[#FFE3CC] max-w-xl mx-auto md:mx-0"
          >
            Redefining modern intimacy with elegant form, discreet innovation, and immersive experience — where passion meets precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button className="group inline-flex items-center gap-2 px-7 py-3 bg-[#FF6B2C] text-white rounded-full font-semibold shadow-lg hover:bg-[#e55e1d] transition active:scale-[0.98]">
              Begin Journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-7 py-3 border border-[#FF6B2C]/40 text-white rounded-full bg-white/5 hover:bg-white/10 transition active:scale-[0.98]">
              Discover More
            </button>
          </motion.div>
        </div>

        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="relative flex-1 w-full h-[360px] md:h-[500px] lg:h-[600px] drop-shadow-[0_20px_60px_rgba(255,107,44,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B2C]/10 to-[#FFA94D]/10 z-10 rounded-xl pointer-events-none" />
          <Image
            src="/images/w2.jpeg"
            alt="Featured premium intimacy product floating"
            fill
            className="object-cover rounded-xl z-20"
            priority
          />
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF6B2C]/40 via-white/10 to-[#FF6B2C]/40 opacity-50" />
    </motion.section>
  )
}
