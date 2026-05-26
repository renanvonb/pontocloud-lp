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
    <section id="perfis" className="py-24 bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-[64px] reveal">
          <h2 className="text-[42px] leading-tight font-normal tracking-[-0.03em] font-[family-name:var(--font-geist-sans)]">
            Cada perfil vê exatamente o que precisa para trabalhar melhor.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {profiles.map(({ icon: Icon, title, description, items }) => (
            <article key={title} className="reveal rounded-2xl bg-white p-8">
              <div className="w-12 h-12 rounded-xl bg-[#f5f6f8] text-primary flex items-center justify-center mb-5">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-medium tracking-[-0.02em] mb-3 font-[family-name:var(--font-geist-sans)]">{title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 font-[family-name:var(--font-geist-sans)]">{description}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="text-sm font-medium text-foreground flex gap-3 font-[family-name:var(--font-geist-sans)]">
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
