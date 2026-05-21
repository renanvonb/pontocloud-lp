import {
  BarChart3,
  Building2,
  CalendarClock,
  FileText,
  Fingerprint,
  Smartphone,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: BarChart3,
    title: 'Dashboard em tempo real',
    description:
      'Acompanhe registros, ausências, atrasos, horas extras, banco de horas e solicitações abertas em uma visão central.',
  },
  {
    icon: Fingerprint,
    title: 'Múltiplos métodos de registro',
    description:
      'Defina por colaborador os métodos permitidos na web e no app, incluindo reconhecimento facial, biometria, PIN, QR Code, código de barras e foto.',
  },
  {
    icon: CalendarClock,
    title: 'Apuração com ferramentas de ajuste',
    description:
      'Trate o ponto diário e o resumo mensal com ações como mover marcações, alterar turno, ajustar banco de horas, registrar folgas e aplicar solicitações.',
  },
  {
    icon: Smartphone,
    title: 'App completo para o colaborador',
    description:
      'Dê autonomia para registrar ponto, criar solicitações, consultar histórico, baixar comprovantes e acompanhar ocorrências.',
  },
  {
    icon: FileText,
    title: 'Relatórios fiscais oficiais',
    description:
      'Gere AFD, AEJ, espelho de ponto, comprovantes de marcação e atestado REP-P quando precisar apoiar auditorias e conferências.',
  },
  {
    icon: Building2,
    title: 'Gestão de múltiplas unidades',
    description:
      'Organize colaboradores por empresas, unidades, departamentos, cargos, centros de custo, feriados e jornadas de trabalho.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10" />
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
            Funcionalidades para registrar, tratar e fechar o ponto.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            O essencial para PMEs que precisam de profundidade funcional sem abrir mão de uma operação simples.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="reveal hover:shadow-card-hover transition-shadow duration-300 border-border"
            >
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-accent text-primary flex items-center justify-center mb-3">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-[15px] leading-relaxed">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
