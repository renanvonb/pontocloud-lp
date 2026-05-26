import {
  BarChart3,
  Building2,
  CalendarClock,
  FileText,
  Fingerprint,
  Smartphone,
} from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Dashboard em tempo real',
    description:
      'Acompanhe registros, ausências, atrasos, horas extras e solicitações abertas em uma visão central.',
  },
  {
    icon: Fingerprint,
    title: 'Múltiplos métodos de registro',
    description:
      'Facial, biometria, PIN, QR Code, código de barras e foto — defina por colaborador os métodos permitidos.',
  },
  {
    icon: CalendarClock,
    title: 'Apuração com ferramentas de ajuste',
    description:
      'Mova marcações, altere turnos, ajuste banco de horas, registre folgas e aplique solicitações com rastreabilidade.',
  },
  {
    icon: Smartphone,
    title: 'App completo para o colaborador',
    description:
      'Registro, solicitações, histórico, comprovantes e ocorrências em uma experiência rápida para o dia a dia.',
  },
  {
    icon: FileText,
    title: 'Relatórios fiscais oficiais',
    description:
      'AFD, AEJ, espelho de ponto, comprovantes e atestado REP-P prontos para auditorias e conferências.',
  },
  {
    icon: Building2,
    title: 'Gestão de múltiplas unidades',
    description:
      'Organize por empresas, unidades, departamentos, cargos, centros de custo e jornadas de trabalho.',
  },
]

export default function Features() {
  return (
    <section id="features-detail" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-6 font-[family-name:var(--font-geist-sans)]">
            Tudo que você precisa para registrar, tratar e fechar o ponto
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-[family-name:var(--font-geist-sans)]">
            O essencial para PMEs que precisam de profundidade funcional sem abrir mão de uma operação simples.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="reveal border-t border-border py-8 lg:px-6 first:lg:pl-0 last:lg:pr-0"
            >
              <Icon size={20} className="text-primary mb-4" aria-hidden="true" />
              <h3 className="text-base font-medium tracking-[-0.02em] mb-2 font-[family-name:var(--font-geist-sans)]">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
