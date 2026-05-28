'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Iniciante',
    description: 'Para equipes pequenas que precisam de controle simples e confiável.',
    price: 179,
    licenses: 'Até 30 colaboradores',
    highlight: false,
    badge: null,
    features: [
      'Registro via web e app',
      'Múltiplos métodos de marcação',
      'Dashboard de resumo',
      'Relatórios padrão',
      'Suporte por e-mail',
    ],
  },
  {
    name: 'Profissional',
    description: 'Para empresas em crescimento com necessidades avançadas de apuração.',
    price: 449,
    licenses: 'Até 100 colaboradores',
    highlight: true,
    badge: 'Mais popular',
    features: [
      'Tudo do Starter',
      'Apuração avançada por colaborador',
      'Banco de horas automatizado',
      'Relatórios fiscais (AFD, AEJ, REP-P)',
      'Múltiplas unidades e departamentos',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Premium',
    description: 'Para operações maiores que exigem escala, integrações e SLA garantido.',
    price: 999,
    licenses: 'Até 300 colaboradores',
    highlight: false,
    badge: null,
    features: [
      'Tudo do Profissional',
      'API de integração',
      'Multi-empresa (CNPJ consolidado)',
      'Exportação para folha de pagamento',
      'SLA garantido',
      'Gerente de conta dedicado',
    ],
  },
]

export default function Planos() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

  function slideText(text: string, key: string) {
    const hovered = hoveredPlan === key
    return (
      <span style={{ display: 'block', height: '1.3em', overflow: 'hidden', lineHeight: '1.3' }}>
        <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hovered ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{text}</span>
        <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hovered ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{text}</span>
      </span>
    )
  }

  return (
    <section id="planos" className="py-24" style={{ background: 'linear-gradient(to top, #e8eaed 0%, #f5f6f8 50%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] font-[family-name:var(--font-geist-sans)]">
            Planos simples e acessíveis,
            <br />trabalho sério
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`reveal rounded-2xl p-8 ${plan.highlight ? 'bg-foreground text-white' : 'bg-white'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-2xl font-medium tracking-[-0.02em] font-[family-name:var(--font-geist-sans)]">
                  {plan.name}
                </h3>
                {plan.badge && (
                  <span className="text-xs font-semibold text-sky-400 bg-sky-400/15 rounded-full px-3 py-1 font-inter">
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className={`text-sm font-medium mb-8 font-[family-name:var(--font-geist-sans)] ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>
                {plan.licenses}
              </p>

              <div className="flex items-end gap-1.5 mb-8">
                <span className="text-5xl font-normal tracking-[-0.04em] leading-none font-[family-name:var(--font-geist-sans)]">
                  R$ {plan.price.toLocaleString('pt-BR')}
                </span>
                <span className={`text-sm mb-0.5 font-[family-name:var(--font-geist-sans)] ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>/mês</span>
              </div>

              <Button
                className={`w-full h-auto py-[12px] px-[16px] text-[16px] font-medium font-inter ${
                  plan.highlight ? 'bg-white text-foreground hover:bg-white/90' : ''
                }`}
                variant={plan.highlight ? 'secondary' : 'default'}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {slideText('Começar agora', plan.name)}
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
