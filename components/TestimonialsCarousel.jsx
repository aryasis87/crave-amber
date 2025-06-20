'use client'

const testimonials = [
  {
    name: 'Dina & Aji',
    text: 'We thought we knew closeness. This helped us find something even deeper — unspoken, electric.',
    image: '/images/p12.jpeg',
  },
  {
    name: 'Rina & Theo',
    text: 'It wasn’t just fun. It was freeing. Like we got to rewrite what intimacy meant for us.',
    image: '/images/p13.jpeg',
  },
  {
    name: 'Sarah & Eli',
    text: 'We discovered a side of each other we hadn’t seen in years. Like falling in love all over again.',
    image: '/images/p14.jpeg',
  },
  {
    name: 'Lana & Rafi',
    text: 'The soft guidance, the elegance — it didn’t just excite us. It made us feel safe. Held.',
    image: '/images/p15.jpeg',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-36 px-6 md:px-16 bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-[#fb923c1a] blur-[160px] rounded-full" />
        <div className="absolute bottom-[-30%] right-[5%] w-[500px] h-[500px] bg-[#d946ef1a] blur-[160px] rounded-full" />
      </div>

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
          What Real Connection Sounds Like
        </h2>
        <p className="mt-4 text-zinc-400 text-lg">
          Honest stories from couples redefining intimacy on their own terms.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 flex flex-col gap-6 shadow-lg transition duration-300 hover:shadow-[0_0_20px_#f97316] group"
          >
            {/* Accent gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fb923c0d] to-transparent rounded-3xl pointer-events-none" />

            {/* Avatar & Name */}
            <div className="flex items-center gap-4 relative z-10">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover ring-2"
                style={{ borderColor: '#fb923c' }}
              />
              <h4 className="text-white font-semibold">{t.name}</h4>
            </div>

            {/* Testimonial Text */}
            <p className="text-zinc-300 text-base leading-relaxed group-hover:text-white transition relative z-10">
              “{t.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
