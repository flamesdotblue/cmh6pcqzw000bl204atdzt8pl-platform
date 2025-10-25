import React from 'react'
import { Megaphone, ShoppingCart, User, MapPin } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-emerald-100">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9">
              <JeepLogo />
              <div className="absolute -right-2 -top-2 text-emerald-600">
                <Megaphone size={16} />
              </div>
            </div>
            <div>
              <p className="font-extrabold tracking-tight text-emerald-900 leading-none">Election Cart</p>
              <p className="text-[10px] text-slate-500 -mt-0.5 flex items-center gap-1"><MapPin size={12}/> Kerala</p>
            </div>
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              { href: '#hero', label: 'Home' },
              { href: '#packages', label: 'Packages' },
              { href: '#campaigns', label: 'Campaigns' },
              { href: '#about', label: 'About' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="relative text-slate-700 hover:text-emerald-700 transition">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="relative inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-sm font-medium text-emerald-800 hover:shadow-sm">
              <ShoppingCart size={16} />
              <span>Cart</span>
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">2</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700">
              <User size={16} /> Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function JeepLogo() {
  return (
    <svg viewBox="0 0 64 32" className="h-9 w-9 text-emerald-700" fill="currentColor">
      <rect x="6" y="14" width="40" height="10" rx="2"/>
      <rect x="14" y="10" width="18" height="6" rx="1"/>
      <circle cx="18" cy="26" r="4" fill="#111827"/>
      <circle cx="38" cy="26" r="4" fill="#111827"/>
      <rect x="46" y="16" width="10" height="4" rx="1"/>
    </svg>
  )
}
