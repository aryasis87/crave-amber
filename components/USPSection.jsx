'use client'

import {
  HeartHandshake,
  ShieldCheck,
  PackageCheck,
  MessageCircleHeart,
} from 'lucide-react'
import { motion } from 'framer-motion'

const usps = [
  {
    title: 'Discreet & Secure',
    icon: ShieldCheck,
    description:
      'Arrives like a secret. Plain packaging, encrypted billing, your privacy respected.',
  },
  {
    title: 'Couples-First Philosophy',
    icon: HeartHandshake,
    description:
      'Crafted to deepen connection — emotional, physical, and everything in between.',
  },
  {
    title: 'Trusted Quality',
    icon: PackageCheck,
    description:
      'Elegant design meets safety. Every detail engineered for confidence.',
  },
  {
    title: 'Real Human Support',
    icon: MessageCircleHeart,
    description:
      'Talk to real intimacy experts. No bots. No awkward scripts. Just warmth.',
  },
]

export default function USPSection() {
  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden bg-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#7c2d121a] via-black to-black" />
      <div className="absolute inset-0 -z-10 bg-[url('/noise-light.png')] opacity-10" />

      <div className="absolute top-[-10%] left-[5%] w-[400px] h-[400px] bg-[#fb923c1a] blur-[120px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-[#facc151a] blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Not Just Features. Feelings.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Designed to touch more than just the surface.
          </p>
        </motion.div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-[0_0_20px_#f97316] transition-all"
            >
              {/* Glow on hover */}
              <div className="absolute -inset-1 rounded-[inherit] bg-[#ea580c1a] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon */}
              <div className="mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <usp.icon className="w-6 h-6 text-[#fb923c] group-hover:animate-pulse" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#fb923c] transition">
                {usp.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
