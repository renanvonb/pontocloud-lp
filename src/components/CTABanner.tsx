'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CTABanner() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && phone && companySize) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="py-24 cta-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-32 rounded-xl border border-white/10 bg-white/5 hidden lg:block ml-8" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-32 rounded-xl border border-white/10 bg-white/5 hidden lg:block mr-8" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 text-left reveal text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.02em] mb-6">
            Comece seu teste grátis do PontoCloud.
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Conte para a gente o tamanho da sua operação e veja como simplificar o registro, a apuração e o fechamento do ponto.
          </p>
          <ul className="space-y-4 text-white/90 font-medium">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">✓</span>
              Visão em tempo real da jornada
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">✓</span>
              Registro simples para colaboradores
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">✓</span>
              Apuração clara para gestores e DP
            </li>
          </ul>
        </div>

        <div className="lg:col-span-6 reveal">
          <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 md:p-8 text-white shadow-pricing">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-2">Teste grátis solicitado!</h3>
                <p className="text-white/80">
                  Obrigado pelo contato. Um consultor vai retornar para orientar os próximos passos.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold mb-2">Solicite seu teste grátis</h3>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-white/70 mb-1">Nome completo</label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/10 border-white/20 placeholder:text-white/50 text-white rounded-[8px] focus-visible:ring-white/35"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-white/70 mb-1">E-mail corporativo</label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="seu.nome@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 placeholder:text-white/50 text-white rounded-[8px] focus-visible:ring-white/35"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-white/70 mb-1">Celular / WhatsApp</label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white/10 border-white/20 placeholder:text-white/50 text-white rounded-[8px] focus-visible:ring-white/35"
                    />
                  </div>
                  <div>
                    <label htmlFor="companySize" className="block text-xs font-semibold text-white/70 mb-1">Nº colaboradores</label>
                    <select
                      id="companySize"
                      required
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      className="w-full h-10 px-3 bg-white/10 border border-white/20 text-white rounded-[8px] text-sm focus-visible:ring-white/35 focus:outline-none"
                    >
                      <option className="text-black" value="">Selecione...</option>
                      <option className="text-black" value="1-9">1 a 9</option>
                      <option className="text-black" value="10-49">10 a 49</option>
                      <option className="text-black" value="50-199">50 a 199</option>
                      <option className="text-black" value="200+">Mais de 200</option>
                    </select>
                  </div>
                </div>
                <Button type="submit" size="lg" shape="pill" className="w-full mt-4 bg-white text-primary hover:bg-white/95 hover:text-primary/90 font-inter" style={{ color: '#0454ff' }}>
                  Começar teste grátis
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
