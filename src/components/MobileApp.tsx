import { Bell, FileDown, History, QrCode, Send, Smartphone } from 'lucide-react'

const appFeatures = [
  { icon: Smartphone, label: 'Registro por PIN, QR Code, código de barras, foto ou modo simples' },
  { icon: Send, label: 'Criação e acompanhamento de solicitações' },
  { icon: Bell, label: 'Notificações importantes da jornada' },
  { icon: History, label: 'Histórico completo de registros' },
  { icon: FileDown, label: 'Download de comprovantes e espelhos de ponto' },
  { icon: QrCode, label: 'Consulta das próprias ocorrências' },
]

export default function MobileApp() {
  return (
    <section id="app" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 reveal">
          <div className="mx-auto max-w-[280px] rounded-[2rem] border-[10px] border-foreground bg-foreground shadow-pricing">
            <div className="rounded-[1.35rem] bg-white p-4 min-h-[520px]">
              <div className="h-6 w-24 rounded-full bg-muted mx-auto mb-6" />
              <div className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-2">
                Hoje
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-6">Registrar ponto</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['PIN', 'QR Code', 'Foto', 'Simples'].map((method) => (
                  <div key={method} className="rounded-xl border border-border bg-muted/40 p-4 text-center text-sm font-semibold">
                    {method}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {['Entrada registrada', 'Solicitação em análise', 'Espelho disponível'].map((item) => (
                  <div key={item} className="rounded-xl border border-border p-3">
                    <div className="h-2 w-20 rounded-full bg-primary/20 mb-2" />
                    <p className="text-xs text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 reveal">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            App mobile
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-5">
            O ponto de contato diário do colaborador com a jornada.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            O app concentra registro, solicitações, comprovantes e acompanhamento em uma experiência rápida para quem usa todos os dias.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {appFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                <Icon size={19} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-muted-foreground leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
