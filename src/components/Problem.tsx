'use client'

import { useState } from 'react'

const tabs = [
  {
    label: 'Aplicativo móvel',
    title: 'App do colaborador',
    description: 'Registro de ponto, solicitações, histórico e comprovantes no celular — disponível para Android e iOS.',
  },
  {
    label: 'Aplicativo Web',
    title: 'Gestão via navegador',
    description: 'Dashboard completo para gestores e DP. Apuração, relatórios e ajustes sem instalação.',
  },
]

export default function Problem() {
  const [active, setActive] = useState(0)

  return (
    <section id="recursos" className="relative z-20 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center reveal mb-12">
          <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-6 font-[family-name:var(--font-geist-sans)]">
            Registro de ponto digital
            <br />com integração perfeita entre dispositivos
          </h2>
        </div>

        {/* Image block */}
        <div className="relative reveal rounded-xl overflow-hidden h-[520px]">

          {/* Background — Aplicativo móvel (foto) */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: active === 0 ? 1 : 0,
              backgroundImage: 'url(/imgs/app-mobile.png)',
              backgroundSize: 'cover',
              backgroundPosition: '55% center',
            }}
          >
            {/* dark overlay para legibilidade */}
            <div className="absolute inset-0 bg-black/15" />
          </div>

          {/* Background — Aplicativo Web (gradiente) */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: active === 1 ? 1 : 0,
              background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 50%, #0EA5E9 100%)',
            }}
          />

          {/* Glass info card — top right */}
          {tabs.map((tab, i) => (
            <div
              key={tab.label}
              className="absolute top-6 right-6 bottom-6 w-[340px] bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-6 flex flex-col justify-end"
              style={{
                opacity: i === active ? 1 : 0,
                transform: `translateY(${(i - active) * 8}px)`,
                transition: 'opacity 0.35s ease, transform 0.35s ease',
                pointerEvents: i === active ? 'auto' : 'none',
              }}
            >
              <h3 className="text-white font-medium text-lg mb-2 tracking-[-0.02em] font-[family-name:var(--font-geist-sans)]">
                {tab.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-[family-name:var(--font-geist-sans)]">
                {tab.description}
              </p>
            </div>
          ))}

          {/* Toggle pills — bottom left */}
          <div className="absolute bottom-5 left-5 flex items-center gap-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-1">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`text-[16px] font-medium font-inter py-[10px] px-[14px] rounded-md transition-all duration-300 ${
                  i === active
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
