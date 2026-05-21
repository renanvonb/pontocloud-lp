import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const managerItems = [
  'Dashboard com visão imediata da equipe',
  'Apuração mensal por colaborador',
  'Ajustes de ponto com rastreabilidade',
  'Relatórios fiscais oficiais prontos para auditoria',
]

const employeeItems = [
  'Registro rápido pelo app ou pela web',
  'Solicitações digitais para ajustes',
  'Consulta de espelho e comprovantes',
  'Acompanhamento das próprias ocorrências',
]

export default function ValueProposition() {
  return (
    <section id="valor" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 reveal">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Proposta de valor
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-5">
            Simples para registrar. Poderoso para tratar.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            O PontoCloud combina uma experiência clara para seus colaboradores com as ferramentas que gestores e DP precisam para apurar, corrigir e fechar o ponto com mais segurança.
          </p>
          <Button size="lg" shape="pill" className="font-inter" asChild>
            <a href="#contact">Começar teste grátis</a>
          </Button>
        </div>

        <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
          <div className="reveal rounded-xl bg-white border border-border p-6">
            <h3 className="text-xl font-bold mb-5">Para o gestor</h3>
            <ul className="space-y-4">
              {managerItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-xl bg-foreground text-background p-6">
            <h3 className="text-xl font-bold mb-5">Para o colaborador</h3>
            <ul className="space-y-4">
              {employeeItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/80 leading-relaxed">
                  <CheckCircle2 size={18} className="text-sky-300 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
