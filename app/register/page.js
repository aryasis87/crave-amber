import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Daftar — Positive Crave',
  description: 'Buat akun Positive Crave yang mengingat tingkat yang pernah Anda coba. Nama panggilan pun boleh.',
  alternates: { canonical: 'https://crave-amber-mu.vercel.app/register' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="daftar" />
}
