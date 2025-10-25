import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Jeep Rally Microsite',
    color: 'bg-emerald-100',
    details: 'Real-time route map, horn bursts, and volunteer join button',
  },
  {
    title: 'Door-to-Door Drive',
    color: 'bg-amber-100',
    details: 'Printables, checklists, QR feedback and ward-wise stats',
  },
  {
    title: 'Meme Storm',
    color: 'bg-rose-100',
    details: 'Daily topical memes with local punchlines and trends',
  },
  {
    title: 'Rally Live Studio',
    color: 'bg-blue-100',
    details: 'Animated lower-thirds, ticker, and reaction balloons',
  },
]

export default function Campaigns() {
  return (
    <section id="campaigns" className="py-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">Campaigns</h2>
          <p className="mt-2 text-slate-600">Colorful ideas that travel from coconut groves to timelines.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: i * 0.05 }}
              whileHover={{ y: -6, rotate: Math.random() > 0.5 ? 0.8 : -0.8 }}
              className={`relative overflow-hidden rounded-3xl ${c.color} p-5 ring-1 ring-slate-200`}
            >
              <motion.div
                initial={{ x: -10 }}
                animate={{ x: [ -10, 10, -10 ] }}
                transition={{ repeat: Infinity, duration: 5 + i }}
                className="absolute -right-6 -top-6 opacity-30"
              >
                <CampaignIcon variant={i} />
              </motion.div>
              <h3 className="text-lg font-bold text-slate-800">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{c.details}</p>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="mt-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-600"
              >
                View demo
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CampaignIcon({ variant }) {
  if (variant === 0) {
    return (
      <svg viewBox="0 0 120 60" className="h-20 w-28" fill="currentColor">
        <rect x="10" y="26" width="70" height="14" rx="3"/>
        <rect x="24" y="18" width="26" height="10" rx="2"/>
        <rect x="82" y="28" width="18" height="8" rx="2"/>
        <circle cx="30" cy="40" r="6"/>
        <circle cx="70" cy="40" r="6"/>
      </svg>
    )
  }
  if (variant === 1) {
    return (
      <svg viewBox="0 0 80 60" className="h-20 w-20" fill="currentColor">
        <rect x="10" y="20" width="20" height="26" rx="3"/>
        <rect x="34" y="20" width="20" height="26" rx="3"/>
        <rect x="58" y="20" width="12" height="26" rx="3"/>
      </svg>
    )
  }
  if (variant === 2) {
    return (
      <svg viewBox="0 0 80 60" className="h-20 w-20" fill="currentColor">
        <circle cx="20" cy="20" r="8"/>
        <circle cx="40" cy="30" r="10"/>
        <circle cx="60" cy="18" r="6"/>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 80 60" className="h-20 w-20" fill="currentColor">
      <rect x="10" y="30" width="60" height="6" rx="3"/>
      <circle cx="20" cy="15" r="6"/>
      <circle cx="60" cy="15" r="6"/>
    </svg>
  )
}
