import { motion } from 'framer-motion'

const items = [
  {
    id: 1,
    name: 'Aurora Pearl Necklace',
    price: '$4,250',
    img: 'https://images.unsplash.com/photo-1617038260897-3b1d6975ee8e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Rose Gold Halo Ring',
    price: '$3,900',
    img: 'https://images.unsplash.com/photo-1603575449153-3dd01a5ea1b8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Celestial Diamond Studs',
    price: '$2,780',
    img: 'https://images.unsplash.com/photo-1612916628905-57f26657b50b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Seraphim Pearl Bracelet',
    price: '$2,320',
    img: 'https://images.unsplash.com/photo-1636987090780-6bd0e54222c0?q=80&w=1200&auto=format&fit=crop',
  },
]

function Card({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-rose-50/70 border border-white/60 shadow-[0_30px_100px_rgba(198,146,110,0.25)] backdrop-blur-xl"
    >
      <div className="relative aspect-[4/5]">
        <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A1F1A]/60 via-transparent to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="relative p-4 rounded-2xl bg-white/70 border border-white/80 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm tracking-widest uppercase text-[#C6926E]">Premium</p>
              <h3 className="text-xl font-semibold text-[#2A1F1A]">{item.name}</h3>
            </div>
            <div className="text-[#7A5741] font-bold">{item.price}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedCollection() {
  return (
    <section id="shop" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6),rgba(253,234,229,0.4),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#2A1F1A] to-[#7A5741]">Featured Items</h2>
            <p className="text-[#6B3E2E] mt-2">Curated selection from our Premium Collection.</p>
          </div>
          <a className="hidden sm:inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-br from-[#EFD8CB] to-[#C6926E] text-[#2A1F1A] font-semibold border border-white/70 shadow-[0_8px_24px_rgba(198,146,110,0.35)]">View All</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
