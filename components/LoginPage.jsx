'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <Image
            src="/images/w1.jpeg"
            alt="Sensual scene"
            fill
            className="object-cover object-center brightness-75 rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-xl" />
          <div className="absolute inset-0 z-10 flex flex-col justify-end px-12 py-16 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-4xl font-extrabold leading-tight"
            >
              Rediscover Intimacy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="text-[#FFE3CC] max-w-md text-base"
            >
              Private. Secure. Made for connection. Log in to continue your journey.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Form */}
        <div className="flex items-center justify-center py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md space-y-8"
          >
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-white">Welcome Back</h1>
              <p className="text-sm text-[#FFA94D]">Enter your credentials to continue</p>
            </div>

            <form className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-[#FFE3CC]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@pleasure.com"
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-[#FF6B2C] focus:outline-none transition"
                />
              </div>

              {/* Password */}
              <div className="space-y-2 relative">
                <label htmlFor="password" className="text-sm text-[#FFE3CC]">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-[#FF6B2C] focus:outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-9 right-3 text-zinc-400 hover:text-[#FFB347] transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Actions */}
              <div className="flex justify-between text-xs text-[#FFA94D]">
                <a href="/forgot" className="hover:text-[#FFB347] transition">
                  Forgot password?
                </a>
              </div>

              {/* CTA */}
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-lg bg-[#FF6B2C] hover:bg-[#FF5A1C] text-white font-semibold shadow-md hover:shadow-orange-600/40 transition-all"
              >
                Log In
              </motion.button>
            </form>

            <p className="text-center text-sm text-[#FFA94D]">
              Don’t have an account?{' '}
              <a href="/register" className="text-[#FFB347] hover:underline font-medium">
                Sign up
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
