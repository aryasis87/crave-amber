/* Pengukur nyala: sepuluh titik, menyala sampai angka intensitas produk.
   Motif kecil yang dipakai di kartu, halaman produk, dan ringkasan checkout. */
export default function Nyala({ n, besar = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span aria-hidden="true" className="flex items-center gap-[3px]">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={`rounded-full ${besar ? 'h-2.5 w-2.5' : 'h-1.5 w-1.5'} ${
              i < n ? (i < 3 ? 'bg-cream' : i < 6 ? 'bg-amber' : 'bg-ember') : 'bg-cream/15'
            }`}
            style={i < n ? { boxShadow: `0 0 ${besar ? 8 : 5}px rgb(232 163 61 / ${0.25 + i * 0.05})` } : undefined}
          />
        ))}
      </span>
      <span className="sr-only">Intensitas {n} dari 10</span>
    </span>
  )
}
