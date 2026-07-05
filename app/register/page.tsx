import Link from 'next/link';

export const metadata = { title: 'Daftar Akun', description: 'Buat akun baru untuk mulai menjelajah.' };

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-neutral-900">Buat Akun</h1>
        <p className="mt-1 text-sm text-neutral-500">Isi data di bawah untuk memulai.</p>
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-700">Nama Lengkap</label>
            <input id="name" name="name" type="text" autoComplete="name" placeholder="Nama kamu" className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-700">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="kamu@email.com" className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200" />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-neutral-700">Kata Sandi</label>
            <input id="password" name="password" type="password" autoComplete="new-password" placeholder="••••••••" className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-neutral-900 py-3 font-semibold text-white transition hover:bg-neutral-800">Daftar</button>
        </form>
        <p className="mt-6 text-center text-sm text-neutral-500">
          Sudah punya akun? <Link href="/" className="font-medium text-pink-600 hover:underline">Masuk</Link>
        </p>
      </div>
    </main>
  );
}
