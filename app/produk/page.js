import ProductDetailPage from '@/components/ProductDetailPage'

export const metadata = {
  title: 'Produk Pilihan — Positive Crave',
  description: 'Rincian produk Positive Crave: material medical-grade bebas BPA, kemasan polos tanpa merek.',
  alternates: { canonical: 'https://crave-amber-mu.vercel.app/produk' },
}

export default function ProdukRoute() {
  return <ProductDetailPage />
}
