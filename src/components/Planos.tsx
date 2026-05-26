import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
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
    name: 'Empresarial',
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
  return (
    <section id="planos" className="py-24 bg-[#f5f6f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-4 font-[family-name:var(--font-geist-sans)]">
            Planos por quantidade
            <br />de colaboradores
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-[family-name:var(--font-geist-sans)]">
            Preços previsíveis conforme sua equipe cresce. Sem surpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-start mb-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`reveal rounded-2xl p-8 ${plan.highlight ? 'bg-foreground text-white' : 'bg-white'}`}
            >
              {plan.badge && (
                <span className="inline-block text-xs font-semibold text-sky-400 bg-sky-400/10 rounded-full px-3 py-1 mb-5 font-[family-name:var(--font-geist-sans)]">
                  {plan.badge}
                </span>
              )}

              <p className={`text-sm font-medium mb-1 font-[family-name:var(--font-geist-sans)] ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>
                {plan.licenses}
              </p>
              <h3 className="text-2xl font-medium tracking-[-0.02em] mb-6 font-[family-name:var(--font-geist-sans)]">
                {plan.name}
              </h3>

              <div className="flex items-end gap-1.5 mb-3">
                <span className={`text-sm font-[family-name:var(--font-geist-sans)] ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>R$</span>
                <span className="text-5xl font-normal tracking-[-0.04em] leading-none font-[family-name:var(--font-geist-sans)]">
                  {plan.price.toLocaleString('pt-BR')}
                </span>
                <span className={`text-sm mb-0.5 font-[family-name:var(--font-geist-sans)] ${plan.highlight ? 'text-white/50' : 'text-muted-foreground'}`}>/mês</span>
              </div>

              <p className={`text-sm leading-relaxed mb-8 font-[family-name:var(--font-geist-sans)] ${plan.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>
                {plan.description}
              </p>

              <Button
                className={`w-full mb-8 h-auto py-[10px] text-[16px] font-medium font-inter ${
                  plan.highlight
                    ? 'bg-white text-foreground hover:bg-white/90'
                    : ''
                }`}
                variant={plan.highlight ? 'secondary' : 'default'}
              >
                Começar agora
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex gap-3 text-sm font-[family-name:var(--font-geist-sans)] ${plan.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>
                    <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-sky-400' : 'text-primary'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="reveal rounded-2xl bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1 font-[family-name:var(--font-geist-sans)]">Mais de 300 colaboradores</p>
            <h3 className="text-2xl font-medium tracking-[-0.02em] mb-1.5 font-[family-name:var(--font-geist-sans)]">Enterprise</h3>
            <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
              Infraestrutura dedicada, SLA personalizado e suporte estratégico para grandes operações.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 h-auto py-[10px] px-6 text-[16px] font-medium font-inter" asChild>
            <a href="#revenda">Falar com nossa equipe</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
