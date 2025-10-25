import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Campaigns from './components/Campaigns'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-rose-50 text-slate-800 selection:bg-yellow-200 selection:text-emerald-900">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Packages />
        <Campaigns />

        {/* About Us Section */}
        <section id="about" className="relative py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 top-10 w-24 h-24 rounded-full bg-emerald-200/40 blur-2xl" />
            <div className="absolute right-10 bottom-20 w-28 h-28 rounded-full bg-rose-200/40 blur-2xl" />
          </div>
          <div className="container mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 70, damping: 15 }}
                className="relative w-full md:w-1/2"
              >
                <div className="grid grid-cols-2 gap-6">
                  <TeamCaricature name="Ammu" color="#34d399" accessory="umbrella"/>
                  <TeamCaricature name="Babu" color="#fbbf24" accessory="megaphone"/>
                  <TeamCaricature name="Shaji" color="#60a5fa" accessory="mundu"/>
                  <TeamCaricature name="Mini" color="#f472b6" accessory="balloon"/>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 70, damping: 15 }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-900">About Election Cart</h2>
                <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                  We are a Kerala-born election service studio turning campaigns into memorable digital rallies. From jeep-jingled roadshows to meme-fueled momentum, we design witty, culturally rooted, and data-smart experiences that get voters smiling and showing up.
                </p>
                <ul className="mt-6 space-y-3 text-slate-700">
                  <li className="flex items-center gap-3"><span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"/>Mundu-grade ethics, coconut-grade resilience</li>
                  <li className="flex items-center gap-3"><span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500"/>Caricatures, jingles, and meme ops done right</li>
                  <li className="flex items-center gap-3"><span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500"/>Ground + digital synergy: from booth to byte</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-emerald-100 bg-white">
        <div className="container mx-auto px-6 md:px-10 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <svg viewBox="0 0 48 48" className="h-5 w-5 text-emerald-700" fill="currentColor"><path d="M7 36c0-5 7-9 17-9s17 4 17 9-7 9-17 9S7 41 7 36z" opacity=".2"/><path d="M14 21c0-7 5-13 10-13s10 6 10 13-5 11-10 11S14 28 14 21z"/></svg>
              </span>
              <div>
                <p className="font-bold text-emerald-900">Election Cart</p>
                <p className="text-sm text-slate-600">A witty way to win hearts (and votes)</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-slate-600">
              <AnimatedIcon label="Rally">
                <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M4 3h10l-1 3h7v7l-3-1v9h-2v-9l-3 1V6H4z"/></svg>
              </AnimatedIcon>
              <AnimatedIcon label="Megaphone">
                <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M2 10v4h3l7 4V6L5 10H2zm17-3v10h2V7h-2z"/></svg>
              </AnimatedIcon>
              <AnimatedIcon label="Umbrella">
                <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M12 2a9 9 0 0 0-9 9h18A9 9 0 0 0 12 2zm1 11v6a3 3 0 0 1-6 0h2a1 1 0 0 0 2 0v-6z"/></svg>
              </AnimatedIcon>
              <AnimatedIcon label="Coconut">
                <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M12 3c-3 0-7 3-7 8s4 10 7 10 7-5 7-10-4-8-7-8z"/></svg>
              </AnimatedIcon>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Election Cart. Made with laughter, laddus, and logistics.</p>
        </div>
      </footer>
    </div>
  )
}

function TeamCaricature({ name, color = '#34d399', accessory = 'megaphone' }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotate: -1 }}
      className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <CaricatureFace color={color} accessory={accessory} />
        <div>
          <p className="font-semibold text-slate-800">{name}</p>
          <p className="text-xs text-slate-500">Campaign Artist</p>
        </div>
      </div>
    </motion.div>
  )
}

function CaricatureFace({ color, accessory }) {
  return (
    <div className="relative h-16 w-16">
      <svg viewBox="0 0 80 80" className="h-16 w-16">
        <defs>
          <clipPath id="faceClip">
            <circle cx="40" cy="40" r="24" />
          </clipPath>
        </defs>
        <circle cx="40" cy="40" r="28" fill={color} opacity="0.15" />
        <circle cx="40" cy="40" r="24" fill="#fde68a" />
        <g clipPath="url(#faceClip)">
          <ellipse cx="40" cy="52" rx="12" ry="6" fill="#f59e0b" opacity="0.25" />
          <circle cx="32" cy="37" r="3" fill="#1f2937" />
          <circle cx="48" cy="37" r="3" fill="#1f2937" />
          <path d="M32 46q8 6 16 0" stroke="#b45309" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M28 30q12-10 24 0" stroke="#111827" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M29 44q5 4 22 0" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      </svg>
      {accessory === 'megaphone' && (
        <motion.div initial={{ rotate: -10 }} animate={{ rotate: [ -10, 0, -10 ] }} transition={{ repeat: Infinity, duration: 2.4 }} className="absolute -right-1 -bottom-1">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-rose-500" fill="currentColor"><path d="M2 10v4h3l7 4V6L5 10H2zm17-3v10h2V7h-2z"/></svg>
        </motion.div>
      )}
      {accessory === 'umbrella' && (
        <motion.div initial={{ y: 0 }} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2.2 }} className="absolute -right-1 -top-1">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-emerald-600" fill="currentColor"><path d="M12 2a9 9 0 0 0-9 9h18A9 9 0 0 0 12 2zm1 11v6a3 3 0 0 1-6 0h2a1 1 0 0 0 2 0v-6z"/></svg>
        </motion.div>
      )}
      {accessory === 'mundu' && (
        <div className="absolute -left-1 -bottom-1">
          <div className="h-4 w-6 rounded-sm bg-white ring-1 ring-amber-600">
            <div className="h-full w-1 bg-amber-500" />
          </div>
        </div>
      )}
      {accessory === 'balloon' && (
        <motion.div initial={{ y: 0 }} animate={{ y: [-4, 2, -4] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -right-2 -top-4">
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-rose-400" />
            <div className="h-4 w-px bg-rose-400 mx-auto" />
          </div>
        </motion.div>
      )}
    </div>
  )
}

function AnimatedIcon({ children, label }) {
  return (
    <motion.div whileHover={{ y: -3, rotate: -3 }} className="flex items-center gap-2">
      <span className="text-slate-700">{children}</span>
      <span className="text-xs text-slate-500">{label}</span>
    </motion.div>
  )
}
