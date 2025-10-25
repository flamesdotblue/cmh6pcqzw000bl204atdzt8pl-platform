import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const packages = [
  {
    name: 'Starter Rally',
    price: '₹9,999',
    color: 'from-emerald-50 to-white',
    accent: 'emerald',
    features: [
      'Caricature candidate pack',
      '2 social jingles',
      'Poster kit (10 variants)',
      'Local language captions',
    ],
  },
  {
    name: 'Street Thunder',
    price: '₹24,999',
    color: 'from-amber-50 to-white',
    accent: 'amber',
    popular: true,
    features: [
      'Animated jeep rally (SVG)',
      'Meme ops (weekly)',
      'Booth-level WhatsApp kit',
      'Live event overlays',
    ],
  },
  {
    name: 'Victory Parade',
    price: '₹54,999',
    color: 'from-rose-50 to-white',
    accent: 'rose',
    features: [
      'Multi-lingual video pack',
      'Data-led content calendar',
      'Influencer micro-collabs',
      '24/7 war-room dashboards',
    ],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">Packages</h2>
          <p className="mt-2 text-slate-600">Pick your parade. Every tier comes with witty Kerala vibes baked in.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packages.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, rotate: -0.5 }}
              className={`relative rounded-3xl bg-gradient-to-b ${p.color} p-6 ring-1 ring-slate-200 shadow-sm`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow">Popular</span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-slate-800">{p.name}</h3>
                <span className="text-2xl font-extrabold text-slate-900">{p.price}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-700">
                    <CheckIcon accent={p.accent} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="mt-6 w-full rounded-full border-2 border-emerald-700 bg-white px-4 py-2.5 font-semibold text-emerald-800 hover:bg-emerald-50"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CheckIcon({ accent }) {
  const color = accent === 'emerald' ? 'text-emerald-600' : accent === 'amber' ? 'text-amber-600' : 'text-rose-600'
  return <CheckCircle size={16} className={`mt-0.5 ${color}`} />
}
