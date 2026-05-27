import { AlertTriangle, Clock3, EyeOff, FileWarning, ShieldAlert } from 'lucide-react'

const items = [
  {
    icon: Clock3,
    number: '01',
    title: 'Fechamento de folha sem atraso',
    description:
      'O sistema consolida marcações, horas extras, banco de horas e ausências em uma visão clara por colaborador. O fechamento que levava dias passa a levar horas.',
  },
  {
    icon: AlertTriangle,
    number: '02',
    title: 'Operação simples para qualquer nível',
    description:
      'Interface desenhada para quem usa todos os dias. Sem treinamento extenso, sem dependência de TI para ajustes rotineiros. Gestores, DP e colaboradores operam com independência.',
  },
  {
    icon: EyeOff,
    number: '03',
    title: 'Visibilidade total da jornada',
    description:
      'Atrasos, ausências, horas extras e solicitações em aberto aparecem em tempo real. Decisões chegam na hora certa, não dias depois do ocorrido.',
  },
  {
    icon: FileWarning,
    number: '04',
    title: 'Conformidade trabalhista protegida',
    description:
      'Relatórios fiscais gerados automaticamente: AFD, AEJ, espelho de ponto e atestado REP-P. A empresa fica preparada para auditorias sem esforço extra.',
  },
  {
    icon: ShieldAlert,
    number: '05',
    title: 'Rastreabilidade em cada ajuste',
    description:
      'Toda correção manual fica registrada com data, hora e responsável. Auditorias internas e externas têm um histórico confiável para consultar a qualquer momento.',
  },
]

export default function ProblemV2() {
  return (
    <section id="funcionalidades" className="relative z-20 bg-[#f5f6f8] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-6 font-[family-name:var(--font-geist-sans)]">
            Funcionalidades completas
            <br />para simplificar sua rotina de
            <br />registro e controle de ponto
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-[family-name:var(--font-geist-sans)]">
            Do registro da marcação ao fechamento da folha, reunimos tudo que o RH precisa em um só lugar.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {items.slice(0, 3).map((item) => {
            const Icon = item.icon
            return (
              <div key={item.number} className="reveal bg-white rounded-2xl p-8">
                <p className="text-xs font-medium text-muted-foreground/40 mb-6 tracking-widest font-[family-name:var(--font-geist-sans)]">
                  {item.number}
                </p>
                <Icon size={22} className="text-primary mb-5" aria-hidden="true" />
                <h3 className="text-lg font-medium tracking-[-0.02em] mb-3 font-[family-name:var(--font-geist-sans)]">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-4 md:w-2/3 mx-auto">
          {items.slice(3).map((item) => {
            const Icon = item.icon
            return (
              <div key={item.number} className="reveal bg-white rounded-2xl p-8">
                <p className="text-xs font-medium text-muted-foreground/40 mb-6 tracking-widest font-[family-name:var(--font-geist-sans)]">
                  {item.number}
                </p>
                <Icon size={22} className="text-primary mb-5" aria-hidden="true" />
                <h3 className="text-lg font-medium tracking-[-0.02em] mb-3 font-[family-name:var(--font-geist-sans)]">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
