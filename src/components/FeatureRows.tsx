import { BarChart2, Bell, CalendarDays, Clock3, FileText, MessageSquare, Smartphone, SlidersHorizontal } from 'lucide-react'

const managerFeatures = [
  { icon: BarChart2, label: 'Dashboard em tempo real' },
  { icon: SlidersHorizontal, label: 'Ajuste de marcações' },
  { icon: Clock3, label: 'Banco de horas' },
  { icon: FileText, label: 'Relatórios fiscais' },
]

const employeeFeatures = [
  { icon: Smartphone, label: 'Registro via app' },
  { icon: MessageSquare, label: 'Solicitações digitais' },
  { icon: CalendarDays, label: 'Espelho de ponto' },
  { icon: Bell, label: 'Notificações' },
]

export default function FeatureRows() {
  return (
    <section className="bg-[#f5f6f8] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-28 space-y-24">

        {/* Row 1 — texto esquerda, placeholder direita */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center reveal">
          <div>
            <span className="inline-flex text-xs font-semibold font-inter text-primary bg-primary/10 rounded-full px-3 py-1 tracking-[0.08em] uppercase mb-5">
              Apuração e gestão
            </span>
            <h3 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-5 font-[family-name:var(--font-geist-sans)]">
              Apure o ponto e feche a folha com segurança.
            </h3>
            <p className="text-muted-foreground text-[17px] leading-relaxed mb-8 font-inter tracking-[-0.01em]">
              Visualize marcações, corrija inconsistências e aplique ajustes com rastreabilidade total. O fechamento que levava dias passa a levar horas.
            </p>
            <div className="flex flex-wrap gap-2">
              {managerFeatures.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 text-sm text-foreground border border-border rounded-[12px] px-4 py-2 font-[family-name:var(--font-geist-sans)]">
                  <Icon size={14} className="text-muted-foreground" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-[#e8eaed] flex items-center justify-center" style={{ minHeight: '520px' }}>
            <span className="text-sm text-muted-foreground/50 font-inter select-none">Imagem em breve</span>
          </div>
        </div>

        {/* Row 2 — placeholder esquerda, texto direita */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center reveal">
          <div className="rounded-2xl bg-[#e8eaed] flex items-center justify-center" style={{ minHeight: '520px' }}>
            <span className="text-sm text-muted-foreground/50 font-inter select-none">Imagem em breve</span>
          </div>
          <div>
            <span className="inline-flex text-xs font-semibold font-inter text-primary bg-primary/10 rounded-full px-3 py-1 tracking-[0.08em] uppercase mb-5">
              Para o colaborador
            </span>
            <h3 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-5 font-[family-name:var(--font-geist-sans)]">
              Registro e acompanhamento completo pelo app.
            </h3>
            <p className="text-muted-foreground text-[17px] leading-relaxed mb-8 font-inter tracking-[-0.01em]">
              Ponto via app ou web, solicitações digitais, espelhos e comprovantes — tudo acessível pelo colaborador sem depender de e-mails ou processos manuais.
            </p>
            <div className="flex flex-wrap gap-2">
              {employeeFeatures.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 text-sm text-foreground border border-border rounded-[12px] px-4 py-2 font-[family-name:var(--font-geist-sans)]">
                  <Icon size={14} className="text-muted-foreground" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
