'use client'

import { useState } from 'react'

const tabs = ['Aplicativo móvel', 'Aplicativo Web']

export default function Problem() {
  const [active, setActive] = useState(0)

  return (
    <section id="recursos" className="relative z-20 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center reveal mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 font-[family-name:var(--font-geist-sans)]">Recursos</p>
          <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-6 font-[family-name:var(--font-geist-sans)]">
            Registro de ponto digital
            <br />com integração perfeita entre dispositivos
          </h2>
        </div>

        {/* Image block */}
        <div className="relative reveal rounded-xl overflow-hidden h-[520px]"
          style={{ background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 50%, #0EA5E9 100%)' }}
        >
          {/* Toggle pills */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-1">
            {tabs.map((label, i) => (
              <button
                key={label}
                onClick={() => setActive(i)}
                className={`text-[16px] font-medium font-inter py-[10px] px-[14px] rounded-md transition-all duration-300 ${
                  active === i
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
