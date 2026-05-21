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
    q: 'Quais relatórios fiscais estão previstos na plataforma?',
    a: 'A landing comunica os relatórios fiscais oficiais do escopo atual: AFD, AEJ, espelho de ponto, comprovantes de marcação e atestado REP-P.',
  },
  {
    q: 'O teste grátis depende de falar com um consultor?',
    a: 'Nesta versão da página, o formulário coleta os dados para qualificar o lead e iniciar o contato. Depois do envio, a equipe pode orientar o próximo passo do teste.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
              Dúvidas
              <br />
              frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Respostas diretas sobre o uso do PontoCloud por gestores, DP e colaboradores.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="reveal space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
