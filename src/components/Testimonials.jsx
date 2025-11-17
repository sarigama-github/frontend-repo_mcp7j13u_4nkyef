import { motion } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Isabella M.',
    text: 'The craftsmanship is beyond exquisite. My necklace catches the light like a constellation.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Arjun K.',
    text: 'Understated, opulent, timeless. The ring feels like it was made just for me.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Chloé R.',
    text: 'This is couture jewelry. The pearls are luminous and absolutely perfect.',
    rating: 5,
  },
]

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-br from-[#FFD9C7] to-[#C6926E] shadow-[0_4px_12px_rgba(198,146,110,0.5)]" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.65),rgba(250,238,236,0.45),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#2A1F1A] to-[#7A5741]">Happy Clients</h2>
          <p className="text-[#6B3E2E] mt-2">Stories in light, love, and craftsmanship.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-3xl bg-gradient-to-br from-white/80 to-rose-50/70 border border-white/70 backdrop-blur-xl shadow-[0_25px_80px_rgba(198,146,110,0.25)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#2A1F1A] font-semibold">{r.name}</p>
                  <p className="text-[#7A5741] text-sm">Verified Buyer</p>
                </div>
                <Stars />
              </div>
              <p className="mt-4 text-[#6B3E2E] leading-relaxed">“{r.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
