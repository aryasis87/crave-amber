import CheckoutPage from '@/components/CheckoutPage'

export const metadata = {
  title: 'Pemesanan — Positive Crave',
  description: 'Selesaikan pemesanan Anda. Paket dikirim dalam kotak polos tanpa nama merek.',
  alternates: { canonical: 'https://crave-amber.pintuweb.com/checkout' },
  robots: { index: false, follow: true },
}

export default function CheckoutRoute() {
  return <CheckoutPage />
}
