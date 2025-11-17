import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with pearl sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFAF7] via-[#FFF4F2] to-[#F4E7DD]" />

      {/* Floating pearl orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: -30, opacity: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute top-20 left-16 w-24 h-24 rounded-full bg-gradient-to-br from-white to-rose-100 shadow-[0_20px_60px_rgba(233,201,180,0.35)] border border-white/70"
        />
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute bottom-24 right-24 w-36 h-36 rounded-full bg-gradient-to-br from-rose-50 to-rose-200 shadow-[0_30px_80px_rgba(199,146,110,0.35)] border border-white/70"
        />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-white to-rose-100 shadow-[0_15px_50px_rgba(189,147,128,0.35)] border border-white/70"
        />
      </div>

      {/* Spline 3D diamond */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="relative h-[380px] sm:h-[460px] lg:h-[560px] rounded-[28px] overflow-hidden shadow-[0_40px_140px_rgba(199,146,110,0.35)] border border-white/50 bg-white/30 backdrop-blur-xl">
          <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* sheen overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#2A1F1A] to-[#7A5741]"
          >
            Petals & Pearls
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="mt-5 text-xl sm:text-2xl leading-relaxed text-[#6B3E2E]"
          >
            Where artistry meets light. Discover heirloom pieces sculpted in rose gold and crowned with perfect pearls.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#shop" className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-br from-[#EFD8CB] to-[#C6926E] text-[#2A1F1A] font-semibold shadow-[0_10px_30px_rgba(198,146,110,0.4)] border border-white/70 hover:shadow-[0_15px_45px_rgba(198,146,110,0.55)] transition">Shop the Collection</a>
            <a href="#contact" className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white/60 text-[#6B3E2E] font-semibold border border-white/80 hover:bg-white/80 transition">Book a Consultation</a>
          </motion.div>
        </div>
      </div>

      {/* soft gold divider */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D8B79C] to-transparent opacity-60" />
      </div>
    </section>
  )
}
