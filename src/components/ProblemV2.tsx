import { AlertTriangle, Clock3, EyeOff, FileWarning, ShieldAlert } from 'lucide-react'

const pains = [
  {
    icon: Clock3,
    title: 'Fechamento de folha lento',
    description: 'Marcações espalhadas tornam o fechamento mensal demorado e sujeito a erros.',
  },
  {
    icon: AlertTriangle,
    title: 'Sistemas difíceis de operar',
    description: 'Ferramentas complexas criam dependência e tornam ajustes simples trabalhosos.',
  },
  {
    icon: EyeOff,
    title: 'Pouca visibilidade da jornada',
    description: 'Sem clareza sobre atrasos e ausências, decisões chegam tarde demais.',
  },
  {
    icon: FileWarning,
    title: 'Risco de inconformidade',
    description: 'Sem controle preciso das horas, a empresa fica exposta a passivos trabalhistas.',
  },
  {
    icon: ShieldAlert,
    title: 'Ajustes sem rastreabilidade',
    description: 'Correções manuais sem histórico dificultam auditorias e geram insegurança no fechamento.',
  },
]

export default function ProblemV2() {
  return (
    <section id="recursos" className="relative z-20 pt-12 pb-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-[64px] reveal">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 font-[family-name:var(--font-geist-sans)]">Recursos</p>
          <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-6 font-[family-name:var(--font-geist-sans)]">
            Funcionalidades completas
            <br />para simplificar sua rotina de
            <br />registro e controle de ponto
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-[family-name:var(--font-geist-sans)]">
            Do registro da marcação ao fechamento da folha, reunimos
            <br />tudo que o RH precisa em um só lugar.
          </p>
        </div>

        {/* Linha 1 — 3 cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {pains.slice(0, 3).map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="reveal flex flex-col items-center text-center rounded-2xl bg-[#f5f6f8] p-8 min-h-[280px]"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                <Icon size={22} aria-hidden="true" />
              </div>

              <div className="flex-1" />

              <div className="flex flex-col items-center gap-3">
                <h3 className="text-xl font-medium tracking-[-0.02em] font-[family-name:var(--font-geist-sans)]">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 font-[family-name:var(--font-geist-sans)]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Linha 2 — 2 cards centralizados */}
        <div className="grid md:grid-cols-2 gap-4">
          {pains.slice(3).map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="reveal flex flex-col items-center text-center rounded-2xl bg-[#f5f6f8] p-8 min-h-[280px]"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                <Icon size={22} aria-hidden="true" />
              </div>

              <div className="flex-1" />

              <div className="flex flex-col items-center gap-3">
                <h3 className="text-xl font-medium tracking-[-0.02em] font-[family-name:var(--font-geist-sans)]">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 font-[family-name:var(--font-geist-sans)]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
