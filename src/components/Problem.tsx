import { AlertTriangle, Clock3, EyeOff } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const pains = [
  {
    icon: Clock3,
    title: 'Fechamento de folha lento',
    description:
      'Quando marcações, ajustes e conferências ficam espalhados, o RH perde tempo todos os meses e ainda corre o risco de fechar com erros.',
  },
  {
    icon: AlertTriangle,
    title: 'Sistemas difíceis de operar',
    description:
      'Ferramentas densas exigem treinamento, criam dependência de poucos usuários e tornam qualquer ajuste simples mais trabalhoso do que deveria.',
  },
  {
    icon: EyeOff,
    title: 'Pouca visibilidade da jornada',
    description:
      'Sem uma visão clara de atrasos, ausências, horas extras e solicitações abertas, gestores tomam decisões tarde demais.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="relative z-20 py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12 reveal">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            O problema
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
            O ponto eletrônico não precisa travar a rotina do RH.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O PontoCloud foi pensado para empresas que precisam tratar a jornada com clareza, sem transformar cada fechamento em retrabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="reveal border-border shadow-none">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-accent text-primary flex items-center justify-center mb-3">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
