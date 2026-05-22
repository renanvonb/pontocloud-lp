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
    title: 'Dashboard\nem tempo real',
    description:
      'Acompanhe registros, ausências, atrasos, horas extras e solicitações abertas em uma visão central.',
  },
  {
    icon: Fingerprint,
    title: 'Múltiplos métodos\nde registro',
    description:
      'Facial, biometria, PIN, QR Code, código de barras e foto — defina por colaborador os métodos permitidos.',
  },
  {
    icon: CalendarClock,
    title: 'Apuração com\nferramentas de ajuste',
    description:
      'Mova marcações, altere turnos, ajuste banco de horas, registre folgas e aplique solicitações com rastreabilidade.',
  },
  {
    icon: Smartphone,
    title: 'App completo\npara o colaborador',
    description:
      'Registro, solicitações, histórico, comprovantes e ocorrências em uma experiência rápida para o dia a dia.',
  },
  {
    icon: FileText,
    title: 'Relatórios\nfiscais oficiais',
    description:
      'AFD, AEJ, espelho de ponto, comprovantes e atestado REP-P prontos para auditorias e conferências.',
  },
  {
    icon: Building2,
    title: 'Gestão de\nmúltiplas unidades',
    description:
      'Organize por empresas, unidades, departamentos, cargos, centros de custo e jornadas de trabalho.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-[64px] reveal">
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.03em] mb-6 font-[family-name:var(--font-geist-sans)]">
            Tudo que você precisa para registrar, tratar e fechar o ponto
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-[family-name:var(--font-geist-sans)]">
            O essencial para PMEs que precisam de profundidade funcional sem abrir mão de uma operação simples.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="reveal flex flex-col items-center text-center rounded-2xl bg-white p-8 min-h-[300px]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f5f6f8] text-primary flex items-center justify-center">
                <Icon size={22} aria-hidden="true" />
              </div>

              <div className="flex-1" />

              <div className="flex flex-col items-center gap-3">
                <h3 className="text-xl font-medium tracking-[-0.02em] whitespace-pre-line font-[family-name:var(--font-geist-sans)]">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
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
