'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Clock,
  MessageSquare,
  AlertCircle,
  CalendarDays,
  History,
  FileCheck,
} from 'lucide-react'

const tabs = [
  {
    label: 'Aplicativo móvel',
    title: 'Aplicativo',
    features: [
      { icon: Clock, label: 'Registro de ponto' },
      { icon: MessageSquare, label: 'Solicitações' },
      { icon: AlertCircle, label: 'Ocorrências' },
      { icon: CalendarDays, label: 'Espelho de ponto' },
      { icon: History, label: 'Histórico de marcações' },
      { icon: FileCheck, label: 'Comprovantes de marcações' },
    ],
    description: undefined,
  },
  {
    label: 'Aplicativo Web',
    title: 'Gestão via\nnavegador',
    features: undefined,
    description: 'Dashboard completo para gestores e DP. Apuração, relatórios e ajustes sem instalação.',
  },
]

export default function Problem() {
  const [active, setActive] = useState(0)
  const blockRef = useRef<HTMLDivElement>(null)
  const bgImgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!blockRef.current || !bgImgRef.current) return
      const rect = blockRef.current.getBoundingClientRect()
      // progress: 0 quando seção entra pelo rodapé, 1 quando sai pelo topo
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      const scale = 1 + Math.max(0, Math.min(progress, 1)) * 0.14
      bgImgRef.current.style.transform = `scale(${scale})`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="recursos" className="relative z-20 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section title */}
        <div className="max-w-2xl mx-auto text-center reveal mb-8">
          <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-0 font-[family-name:var(--font-geist-sans)]">
            Registro de ponto digital com
            <br />integração perfeita entre dispositivos
          </h2>
        </div>

        {/* Tabs — entre título e imagem */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-1 bg-foreground/5 border border-border rounded-lg p-1">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`text-[13px] font-medium font-inter py-[6px] px-[12px] rounded-md transition-all duration-300 ${
                  i === active
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image block */}
        <div ref={blockRef} className="relative reveal rounded-xl overflow-hidden h-[600px]">

          {/* Background — Aplicativo móvel (foto) */}
          <div
            ref={bgImgRef}
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: active === 0 ? 1 : 0,
              backgroundImage: 'url(/imgs/app-mobile.png)',
              backgroundSize: '120%',
              backgroundPosition: '5% 43%',
              transformOrigin: 'center center',
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
            {/* gradiente esquerda → direita */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 65%)' }} />
          </div>

          {/* Background — Aplicativo Web (gradiente) */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: active === 1 ? 1 : 0,
              background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 50%, #0EA5E9 100%)',
            }}
          />

          {/* Painel esquerdo — título + cards */}
          {tabs.map((tab, i) => (
            <div
              key={tab.label + '-panel'}
              className="absolute top-8 left-8 bottom-8 w-[300px] flex flex-col"
              style={{
                opacity: i === active ? 1 : 0,
                transform: `translateY(${(i - active) * 8}px)`,
                transition: 'opacity 0.35s ease, transform 0.35s ease',
                pointerEvents: i === active ? 'auto' : 'none',
              }}
            >
              {/* Título */}
              <h3 className="text-white text-[32px] leading-tight font-normal tracking-[-0.03em] whitespace-pre-line font-[family-name:var(--font-geist-sans)]">
                {tab.title}
              </h3>

              {/* Espaço igual ao padding do bloco */}
              <div className="h-8 shrink-0" />

              {/* Cards em 2 colunas preenchendo o restante */}
              {tab.features ? (
                <div className="grid grid-cols-2 gap-2 flex-1">
                  {tab.features.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col justify-between bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 transition-colors duration-200 cursor-default"
                    >
                      <Icon size={20} className="text-white/70" />
                      <span className="text-white/90 text-[14px] leading-snug font-[family-name:var(--font-geist-sans)]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-1 bg-white/15 backdrop-blur-md border border-white/10 rounded-lg px-5 py-4">
                  <p className="text-white/80 text-sm leading-relaxed font-[family-name:var(--font-geist-sans)]">
                    {tab.description}
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
