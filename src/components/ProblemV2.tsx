'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertTriangle, Clock3, EyeOff, FileWarning, ShieldAlert } from 'lucide-react'

const items = [
  {
    icon: Clock3,
    number: '01',
    title: 'Fechamento de folha sem atraso',
    description:
      'O sistema consolida marcações, horas extras, banco de horas e ausências em uma visão clara por colaborador. O fechamento que levava dias passa a levar horas.',
    bg: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 100%)',
  },
  {
    icon: AlertTriangle,
    number: '02',
    title: 'Operação simples para qualquer nível',
    description:
      'Interface desenhada para quem usa todos os dias. Sem treinamento extenso, sem dependência de TI para ajustes rotineiros. Gestores, DP e colaboradores operam com independência.',
    bg: 'linear-gradient(135deg, #0369A1 0%, #0284C7 100%)',
  },
  {
    icon: EyeOff,
    number: '03',
    title: 'Visibilidade total da jornada',
    description:
      'Atrasos, ausências, horas extras e solicitações em aberto aparecem em tempo real. Decisões chegam na hora certa, não dias depois do ocorrido.',
    bg: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)',
  },
  {
    icon: FileWarning,
    number: '04',
    title: 'Conformidade trabalhista protegida',
    description:
      'Relatórios fiscais gerados automaticamente: AFD, AEJ, espelho de ponto e atestado REP-P. A empresa fica preparada para auditorias sem esforço extra.',
    bg: 'linear-gradient(135deg, #0284C7 0%, #1D4ED8 100%)',
  },
  {
    icon: ShieldAlert,
    number: '05',
    title: 'Rastreabilidade em cada ajuste',
    description:
      'Toda correção manual fica registrada com data, hora e responsável. Auditorias internas e externas têm um histórico confiável para consultar a qualquer momento.',
    bg: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
  },
]

export default function ProblemV2() {
  const stickyRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return
      const rect = stickyRef.current.getBoundingClientRect()
      const scrolled = Math.max(0, -rect.top)
      const scrollable = stickyRef.current.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      const progress = Math.min(1, scrolled / scrollable)
      setActiveIndex(Math.min(Math.floor(progress * items.length), items.length - 1))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="funcionalidades" className="relative z-20 bg-white">
      {/* Static header */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center reveal">
        <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-6 font-[family-name:var(--font-geist-sans)]">
          Funcionalidades completas
          <br />para simplificar sua rotina de
          <br />registro e controle de ponto
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed font-[family-name:var(--font-geist-sans)]">
          Do registro da marcação ao fechamento da folha, reunimos tudo que o RH precisa em um só lugar.
        </p>
      </div>

      {/* Sticky scroll area */}
      <div ref={stickyRef} style={{ height: `${items.length * 80}vh` }}>
        <div className="sticky top-[80px] h-[calc(100vh-80px)] flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div className="relative" style={{ minHeight: 300 }}>
              {items.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.number}
                    className="absolute inset-0 flex flex-col justify-center"
                    style={{
                      opacity: i === activeIndex ? 1 : 0,
                      transform: `translateY(${(i - activeIndex) * 20}px)`,
                      transition: 'opacity 0.45s ease, transform 0.45s ease',
                      pointerEvents: i === activeIndex ? 'auto' : 'none',
                    }}
                  >
                    <p className="text-xs font-medium text-muted-foreground/40 mb-5 tracking-widest font-[family-name:var(--font-geist-sans)]">
                      {item.number}&nbsp;/&nbsp;{String(items.length).padStart(2, '0')}
                    </p>
                    <h3 className="text-[32px] leading-tight font-normal tracking-[-0.03em] mb-5 font-[family-name:var(--font-geist-sans)]">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-[family-name:var(--font-geist-sans)]">
                      {item.description}
                    </p>
                    <div className="flex gap-1.5 mt-10">
                      {items.map((_, di) => (
                        <div
                          key={di}
                          className="h-[3px] rounded-full transition-all duration-400"
                          style={{
                            width: di === activeIndex ? 28 : 8,
                            backgroundColor: di <= activeIndex ? '#0284C7' : '#e2e8f0',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right — visual block */}
            <div className="relative h-[460px] rounded-2xl overflow-hidden hidden lg:block">
              {items.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.number}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: item.bg,
                      opacity: i === activeIndex ? 1 : 0,
                      transform: `scale(${i === activeIndex ? 1 : 1.03}) translateX(${(i - activeIndex) * 40}px)`,
                      transition: 'opacity 0.5s ease, transform 0.5s ease',
                    }}
                  >
                    <Icon size={100} className="text-white/20" aria-hidden="true" />
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>

      <div className="h-24" />
    </section>
  )
}
