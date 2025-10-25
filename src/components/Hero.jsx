import React from 'react'
import { motion } from 'framer-motion'
import { Megaphone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute top-40 -right-32 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl" />
      </div>

      {/* Floating coconut trees */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -2, 0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute right-6 top-10 opacity-70"
      >
        <CoconutTree />
      </motion.div>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 2, 0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute left-6 bottom-10 opacity-70"
      >
        <CoconutTree small />
      </motion.div>

      {/* Balloons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [-10 - i * 10, -80 - i * 10], opacity: [0.3, 0.9, 0] }}
          transition={{ repeat: Infinity, duration: 6 + i, delay: i * 0.6 }}
          className="absolute left-[var(--x)] top-[var(--t)]"
          style={{
            ['--x']: `${10 + i * 12}%`,
            ['--t']: `${60 + (i % 3) * 8}%`,
          }}
        >
          <Balloon color={i % 2 === 0 ? '#f43f5e' : '#f59e0b'} />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 py-20 md:py-28 items-center">
          {/* Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 70, damping: 16 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-emerald-900"
            >
              A digital rally on wheels for your campaign
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-slate-700"
            >
              Election Cart brings Keralas election flavor to screens: jeep rallies, megaphones, caricature leaders, and memes that move voters.
            </motion.p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <motion.a
                href="#packages"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                <Megaphone size={18} /> Explore Packages
              </motion.a>
              <motion.a
                href="#campaigns"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-700 bg-white px-5 py-3 font-semibold text-emerald-800"
              >
                See Campaigns
              </motion.a>
            </div>

            {/* Mundu border hint */}
            <div className="mt-8 h-2 w-48 rounded-full bg-white ring-1 ring-amber-600 overflow-hidden">
              <div className="h-full w-6 bg-amber-500" />
            </div>
          </div>

          {/* Art side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 70, damping: 16 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-md">
                <CaricaturePanel />
                <MovingJeep />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaricaturePanel() {
  return (
    <div className="relative rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-xl">
      <div className="grid grid-cols-3 gap-4">
        <FaceCard name="Sarathy" accent="#ef4444" />
        <FaceCard name="Latha" accent="#10b981" />
        <FaceCard name="Varghese" accent="#f59e0b" />
      </div>
    </div>
  )
}

function FaceCard({ name, accent }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-white p-3 text-center ring-1 ring-slate-200"
    >
      <div className="mx-auto h-20 w-20">
        <svg viewBox="0 0 80 80" className="h-20 w-20">
          <circle cx="40" cy="40" r="30" fill={accent} opacity="0.15" />
          <circle cx="40" cy="40" r="24" fill="#fde68a" />
          <circle cx="32" cy="38" r="3.5" fill="#111827" />
          <circle cx="48" cy="38" r="3.5" fill="#111827" />
          <path d="M30 48q10 8 20 0" stroke="#b45309" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M28 30q12-12 24 0" stroke="#111827" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-700">{name}</p>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: Math.random() * 1.5 }}
        className="absolute -right-2 -top-2 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white"
      >
        Vote!
      </motion.span>
    </motion.div>
  )
}

function MovingJeep() {
  return (
    <motion.div
      initial={{ x: -10 }}
      animate={{ x: [ -10, 10, -10 ] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2"
    >
      <div className="relative">
        <svg viewBox="0 0 120 48" className="h-16 w-auto text-emerald-700" fill="currentColor">
          <rect x="10" y="22" width="70" height="16" rx="3"/>
          <rect x="26" y="14" width="26" height="10" rx="2"/>
          <rect x="82" y="24" width="18" height="8" rx="2"/>
          <circle cx="30" cy="40" r="6" fill="#111827"/>
          <circle cx="70" cy="40" r="6" fill="#111827"/>
          <rect x="100" y="22" width="10" height="4" rx="1"/>
        </svg>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="absolute -right-4 -top-2"
        >
          <MegaphoneBurst />
        </motion.div>
      </div>
    </motion.div>
  )
}

function MegaphoneBurst() {
  return (
    <svg viewBox="0 0 40 20" className="h-6 w-10" fill="none">
      <path d="M2 12V8h4l6-4v12L6 12H2z" fill="#f43f5e"/>
      <circle cx="26" cy="10" r="2" fill="#f59e0b"/>
      <circle cx="32" cy="10" r="3" fill="#10b981"/>
    </svg>
  )
}

function CoconutTree({ small }) {
  return (
    <svg viewBox="0 0 60 120" className={small ? 'h-24 w-auto' : 'h-36 w-auto'}>
      <rect x="28" y="40" width="4" height="70" fill="#16a34a" />
      <path d="M30 42c-12-10-20-8-26-2 10-2 18 4 26 10" stroke="#16a34a" strokeWidth="3" fill="none"/>
      <path d="M30 42c12-10 20-8 26-2-10-2-18 4-26 10" stroke="#16a34a" strokeWidth="3" fill="none"/>
      <circle cx="30" cy="56" r="4" fill="#7c3aed"/>
      <circle cx="24" cy="54" r="3.5" fill="#a855f7"/>
    </svg>
  )
}

function Balloon({ color }) {
  return (
    <svg viewBox="0 0 24 32" className="h-6 w-6">
      <ellipse cx="12" cy="10" rx="8" ry="10" fill={color} />
      <path d="M12 20c-2 0-2 3 0 4" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M12 24v6" stroke={color} strokeWidth="1" />
    </svg>
  )
}
