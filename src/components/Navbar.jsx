import { ShoppingCart, Gem } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-20 w-full"
    >
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between rounded-2xl backdrop-blur-xl bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_40px_rgba(189,147,128,0.25)] border border-white/30">
        <div className="flex items-center gap-3">
          <div className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#F7F2ED] via-[#FDE9E6] to-[#E9D6C3] shadow-[0_10px_30px_rgba(233,201,180,0.5)]">
            <Gem className="w-5 h-5 text-[#C6926E] drop-shadow" />
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/50" />
          </div>
          <div className="leading-tight">
            <p className="text-sm tracking-[0.25em] uppercase text-[#C6926E]">Petals & Pearls</p>
            <p className="text-xl font-semibold text-[#2A1F1A]">Haute Joaillerie</p>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <a href="#shop" className="text-[#2A1F1A] hover:text-[#C6926E] transition-colors">Shop</a>
          <a href="#contact" className="text-[#2A1F1A] hover:text-[#C6926E] transition-colors">Contact</a>
          <button className="relative group">
            <span className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-white/60 to-white/10 blur-md opacity-0 group-hover:opacity-100 transition" />
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFF9F6] via-[#F8EDE7] to-[#E9D6C3] border border-white/60 shadow-[0_8px_30px_rgba(201,164,139,0.35)] grid place-items-center">
              <ShoppingCart className="w-6 h-6 text-[#B7845E]" />
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-rose-200 to-rose-300 border border-white grid place-items-center text-[10px] text-[#6B3E2E] font-semibold">3</div>
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
