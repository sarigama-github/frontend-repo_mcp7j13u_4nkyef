import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Gem } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#F1E2D6] via-[#FFF7F5] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="flex items-center gap-3">
            <div className="relative grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7F2ED] via-[#FDE9E6] to-[#E9D6C3] shadow-[0_10px_30px_rgba(233,201,180,0.5)]">
              <Gem className="w-6 h-6 text-[#C6926E] drop-shadow" />
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/50" />
            </div>
            <div className="leading-tight">
              <p className="text-sm tracking-[0.25em] uppercase text-[#C6926E]">Petals & Pearls</p>
              <p className="text-xl font-semibold text-[#2A1F1A]">Haute Joaillerie</p>
            </div>
          </div>

          <div className="justify-self-center">
            <div className="h-px w-64 bg-gradient-to-r from-transparent via-[#D8B79C] to-transparent" />
          </div>

          <div className="flex md:justify-end gap-4">
            <motion.a whileHover={{ y: -2 }} href="#" className="p-3 rounded-xl bg-white/70 border border-white/80 text-[#6B3E2E] hover:text-[#C6926E] shadow-[0_8px_24px_rgba(198,146,110,0.25)]">
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="p-3 rounded-xl bg-white/70 border border-white/80 text-[#6B3E2E] hover:text-[#C6926E] shadow-[0_8px_24px_rgba(198,146,110,0.25)]">
              <Facebook className="w-5 h-5" />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="p-3 rounded-xl bg-white/70 border border-white/80 text-[#6B3E2E] hover:text-[#C6926E] shadow-[0_8px_24px_rgba(198,146,110,0.25)]">
              <Twitter className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="mt-12 text-center text-[#7A5741] text-sm">
          © {new Date().getFullYear()} Petals & Pearls. All rights reserved.
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#C6926E]/20 to-transparent" />
    </footer>
  )
}
