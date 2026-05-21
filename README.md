# PontoCloud — Site Institucional

Landing page one-page em **Next.js 14 + Tailwind CSS**, pronta para deploy na Vercel.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Google Fonts: Geist + Inter

## Estrutura de seções
```
Navbar → Hero → Problema → Proposta de valor → Funcionalidades → App Mobile → Perfis de usuário → FAQ → CTA final → Footer
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse a URL indicada pelo Next.js no terminal.

## Conteúdo

A página comunica o PontoCloud como um sistema de ponto eletrônico para PMEs brasileiras: simples para o colaborador registrar, claro para gestores tratarem e rápido para o DP fechar.

## Pendências para produção

- [ ] Ligar o formulário da seção `#contact` a um serviço real de captura de leads
- [ ] Configurar URLs finais de privacidade, termos e redes sociais
- [ ] Revisar imagens finais do dashboard quando houver capturas oficiais atualizadas
- [ ] Criar configuração ESLint do projeto, se o time quiser rodar `npm run lint` sem o prompt inicial do Next.js
