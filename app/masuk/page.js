import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Masuk — Positive Crave',
  description: 'Masuk ke akun Positive Crave untuk melihat pesanan dan saran tingkat berikutnya.',
  alternates: { canonical: 'https://crave-amber-mu.vercel.app/masuk' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="masuk" />
}
