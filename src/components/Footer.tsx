import Link from 'next/link'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

const footerLinks = [
  {
    title: 'Produto',
    links: [
      { label: 'Funcionalidades', href: '#features' },
      { label: 'App mobile', href: '#app' },
      { label: 'Perfis de usuário', href: '#perfis' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Proposta de valor', href: '#valor' },
      { label: 'Contato', href: '#contact' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Dúvidas frequentes', href: '#faq' },
      { label: 'Teste grátis', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos', href: '#' },
    ],
  },
]

const socials = ['LinkedIn', 'YouTube']

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-12">
          <div className="col-span-2">
            <Logo />
            <p className="text-muted-foreground text-sm mt-4 mb-6 max-w-xs leading-relaxed">
              Controle de ponto eletrônico simples de registrar, fácil de tratar e rápido de fechar para PMEs brasileiras.
            </p>

            <div className="flex gap-2 mb-6">
              <Input type="email" placeholder="Seu e-mail" className="rounded-full" />
              <Button variant="dark" shape="pill" className="shrink-0">
                Assinar
              </Button>
            </div>

            <div className="flex gap-3">
              {socials.map((s) => (
                <Link
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-xs font-bold text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {s[0]}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h5 className="font-display font-bold text-sm mb-4">{section.title}</h5>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© PontoCloud® 2026. Todos os direitos reservados.</p>
          <p>Feito com carinho por Flowgen Studio</p>
        </div>
      </div>
    </footer>
  )
}
