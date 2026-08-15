'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'Panduan', href: '/#panduan' },
  { label: 'Koleksi', href: '/#produk' },
  { label: 'Jaminan', href: '/#jaminan' },
  { label: 'Tanya Jawab', href: '/#tanya' },
  { label: 'Bantuan', href: '/#kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'border-b border-cream/10 bg-night/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Positive Crave — beranda">
          <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full bg-amber" />
          <span className="text-base font-bold tracking-tight text-cream">
            Positive<span className="text-amber">Crave</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="micro text-smoke transition-colors hover:text-cream">
              {n.label}
            </Link>
          ))}
          <Link
            href="/masuk"
            className="micro rounded-full bg-amber px-5 py-3 text-night transition-colors hover:bg-cream"
          >
            Masuk
          </Link>
        </nav>

        <button
          className="-mr-2 p-2 text-cream md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <Menu size={22} strokeWidth={2} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-night/75 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 flex h-full w-[86%] max-w-sm flex-col rounded-l-[var(--radius-soft)] bg-night-2 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              <div className="flex items-center justify-between border-b border-cream/10 px-6 py-4">
                <span className="micro text-smoke/60">Menu</span>
                <button onClick={() => setOpen(false)} className="-mr-2 p-2 text-cream" aria-label="Tutup menu">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              <nav className="flex-1 px-6" aria-label="Navigasi mobile">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-cream/10 py-5 text-lg font-bold text-cream"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>

              <div className="p-6">
                <Link
                  href="/masuk"
                  onClick={() => setOpen(false)}
                  className="micro block rounded-full bg-amber py-4 text-center text-night"
                >
                  Masuk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
