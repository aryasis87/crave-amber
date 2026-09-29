import { Suspense } from 'react'
import CheckoutPage from '@/components/CheckoutPage'

export const metadata = {
  title: 'Pemesanan — Positive Crave',
  description: 'Selesaikan pemesanan Anda. Dikirim dalam kotak polos, dengan kartu panduan tingkat gratis.',
  alternates: { canonical: 'https://crave-amber-mu.vercel.app/checkout' },
  robots: { index: false, follow: true },
}

// useSearchParams (?produk=…) butuh batas Suspense agar halaman tetap bisa diprerender.
export default function CheckoutRoute() {
  return (
    <Suspense fallback={<section className="min-h-screen bg-night" />}>
      <CheckoutPage />
    </Suspense>
  )
}
