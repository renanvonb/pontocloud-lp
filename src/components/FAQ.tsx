import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Para quais empresas o PontoCloud foi pensado?',
    a: 'Para pequenas e médias empresas brasileiras que precisam controlar jornada em mais de uma unidade, departamento ou equipe, com uma experiência simples para colaboradores e clara para gestores.',
  },
  {
    q: 'Quais métodos de registro de ponto podem ser usados?',
    a: 'O administrador define os métodos permitidos por colaborador. Na web, o sistema pode usar reconhecimento facial, biometria ou registro simples. No app, há opções como reconhecimento facial, biometria, PIN, QR Code, código de barras e foto.',
  },
  {
    q: 'O colaborador consegue acompanhar as próprias informações?',
    a: 'Sim. O colaborador pode consultar registros, solicitações, comprovantes, espelhos de ponto e ocorrências pela web ou pelo app, conforme as permissões configuradas.',
  },
  {
    q: 'Como funciona a apuração de ponto?',
    a: 'O gestor acompanha o resumo mensal por colaborador, acessa o ponto diário detalhado e aplica ajustes como mover marcações, alterar turno, ajustar banco de horas, registrar folgas e tratar solicitações.',
  },
  {
    q: 'Quais relatórios fiscais estão disponíveis?',
    a: 'AFD, AEJ, espelho de ponto, comprovantes de marcação e atestado REP-P para apoiar auditorias e conferências.',
  },
  {
    q: 'Como funciona o programa de revendas?',
    a: 'Revendedores PontoCloud recebem comissões recorrentes por cliente ativo, suporte dedicado e material de apoio comercial. Basta preencher o formulário de interesse e nossa equipe entrará em contato.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.03em] mb-4 font-[family-name:var(--font-geist-sans)]">
              Dúvidas
              <br />
              frequentes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-[family-name:var(--font-geist-sans)]">
              Respostas diretas sobre o uso do PontoCloud por gestores, DP e colaboradores.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="reveal space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger className="font-[family-name:var(--font-geist-sans)] font-medium tracking-[-0.01em]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-[family-name:var(--font-geist-sans)] text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
