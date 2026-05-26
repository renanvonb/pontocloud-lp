import { Bell, FileDown, History, QrCode, Send, Smartphone } from 'lucide-react'
import Image from 'next/image'

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
    <section id="app" className="pt-36 pb-0 bg-white overflow-visible relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-5 reveal flex justify-center">
          <Image
            src="/imgs/app-home.png"
            alt="App PontoCloud — tela inicial"
            width={560}
            height={900}
            className="w-full max-w-[380px] h-auto mb-[-160px]"
          />
        </div>

        <div className="lg:col-span-7 reveal pb-36">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 font-[family-name:var(--font-geist-sans)]">Sempre com você</p>
          <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] mb-5 font-[family-name:var(--font-geist-sans)]">
            O ponto de contato diário do colaborador com a jornada.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-[family-name:var(--font-geist-sans)]">
            O app concentra registro, solicitações, comprovantes e acompanhamento em uma experiência rápida para quem usa todos os dias.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {appFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex gap-3 rounded-2xl bg-[#f5f6f8] p-4">
                <Icon size={19} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
