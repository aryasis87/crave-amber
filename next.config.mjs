/** @type {import('next').NextConfig} */
const nextConfig = {
  // /produk dulu satu halaman produk tunggal; kini katalog ada di /koleksi.
  async redirects() {
    return [{ source: '/produk', destination: '/koleksi', permanent: true }]
  },
};

export default nextConfig;
