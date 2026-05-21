import { Building2, UserRound } from 'lucide-react'

const profiles = [
  {
    icon: Building2,
    title: 'Administrador e gestor',
    description:
      'Centraliza colaboradores, departamentos, unidades, jornadas, apuração, relatórios e configurações em uma visão feita para o fechamento do ponto.',
    items: ['Gestão completa da empresa', 'Correções e aprovações rastreáveis', 'Indicadores de atrasos, faltas e horas extras'],
  },
  {
    icon: UserRound,
    title: 'Colaborador',
    description:
      'Registra ponto, acompanha solicitações, consulta espelhos e baixa comprovantes sem depender de e-mails ou processos manuais.',
    items: ['Registro via web ou app', 'Solicitações digitais', 'Consulta de histórico, espelhos e ocorrências'],
  },
]

export default function UserProfiles() {
  return (
    <section id="perfis" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Perfis de usuário
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] max-w-3xl mx-auto">
            Cada perfil vê exatamente o que precisa para trabalhar melhor.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map(({ icon: Icon, title, description, items }) => (
            <article key={title} className="reveal rounded-xl bg-white border border-border p-8">
              <div className="w-12 h-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-5">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="text-sm font-medium text-foreground flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
