'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CTABanner() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [region, setRegion] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [hovered, setHovered] = useState(false)

  function slideText(text: string) {
    return (
      <span style={{ display: 'block', height: '1.3em', overflow: 'hidden', lineHeight: '1.3' }}>
        <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hovered ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{text}</span>
        <span style={{ display: 'block', lineHeight: '1.3', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', transform: hovered ? 'translateY(-1.3em)' : 'translateY(0)', willChange: 'transform' }}>{text}</span>
      </span>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && phone && region) {
      setSubmitted(true)
    }
  }

  return (
    <section id="revenda" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top right, rgba(14,165,233,0.35) 0%, transparent 75%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        <div className="lg:col-span-7 text-left reveal text-white flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.03em] mb-6 font-[family-name:var(--font-geist-sans)]">
            Torne-se<br />uma revenda<br /><span style={{ color: '#0EA5E9' }}>PontoCloud</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed font-[family-name:var(--font-geist-sans)]">
            Oferte soluções completas com recursos de ponta a seus clientes<br />e construa uma receita recorrente com o suporte da nossa equipe.
          </p>
          <ul className="space-y-4 text-white/90">
            {[
              'Comissões recorrentes por cliente ativo',
              'Suporte e treinamento dedicados',
              'Material de vendas e apoio comercial',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-[family-name:var(--font-geist-sans)]">
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 reveal flex flex-col">
          <div className="flex-1 rounded-2xl p-6 md:p-8 text-white flex flex-col" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.10)' }}>
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-medium mb-2 font-[family-name:var(--font-geist-sans)]">Interesse registrado!</h3>
                <p className="text-white/70 font-[family-name:var(--font-geist-sans)]">
                  Obrigado pelo contato. Nossa equipe comercial vai retornar em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-6">
                <h3 className="text-xl font-medium mb-2 font-[family-name:var(--font-geist-sans)]">Preencha o formulário</h3>
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-white/70 mb-1 font-[family-name:var(--font-geist-sans)]">Nome completo</label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/10 border-0 placeholder:text-white/50 text-white rounded-md focus-visible:ring-white/35"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-white/70 mb-1 font-[family-name:var(--font-geist-sans)]">E-mail</label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="seu.nome@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-0 placeholder:text-white/50 text-white rounded-md focus-visible:ring-white/35"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-white/70 mb-1 font-[family-name:var(--font-geist-sans)]">Celular / WhatsApp</label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-10 bg-white/10 border-0 placeholder:text-white/50 text-white rounded-md focus-visible:ring-white/35"
                    />
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-xs font-medium text-white/70 mb-1 font-[family-name:var(--font-geist-sans)]">Região de atuação</label>
                    <select
                      id="region"
                      required
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full h-10 px-3 bg-white/10 border-0 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-white/35"
                    >
                      <option className="text-black" value="">Selecione...</option>
                      <option className="text-black" value="norte">Norte</option>
                      <option className="text-black" value="nordeste">Nordeste</option>
                      <option className="text-black" value="centro-oeste">Centro-Oeste</option>
                      <option className="text-black" value="sudeste">Sudeste</option>
                      <option className="text-black" value="sul">Sul</option>
                    </select>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full text-[16px] h-auto py-[12px] px-[16px] font-medium font-inter"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {slideText('Fale conosco')}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
