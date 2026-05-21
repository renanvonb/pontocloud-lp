'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const heroSection = ref.current?.closest('section')
    if (heroSection) {
      const elements = heroSection.querySelectorAll('.reveal')
      elements.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 80 + i * 200)
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative pt-48 bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 pointer-events-none"
        style={{ backgroundImage: 'url(/imgs/lp-header-bg.avif)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-[2.75rem] md:text-[3.75rem] lg:text-[4.25rem] font-medium text-foreground leading-[1.05] mb-6">
          Ponto simples de registrar,{' '}
          <br />
          rápido de fechar
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          Controle de ponto eletrônico para PMEs que precisam de clareza na jornada.
          <br className="hidden md:block" />
          Fácil para seus colaboradores, completo para gestores e DP.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <Button size="lg" shape="pill" className="w-full sm:w-auto h-12 px-8 text-base font-inter" asChild>
            <a href="#contact">Começar teste grátis</a>
          </Button>
          <Button size="lg" variant="outline" shape="pill" className="w-full sm:w-auto h-12 px-8 text-base font-inter border-black/[.08] hover:bg-black/5" asChild>
            <a href="#features">Ver funcionalidades</a>
          </Button>
        </div>
      </div>

      <div
        className="reveal max-w-[1200px] mx-auto px-6 relative z-10 -mb-16 md:-mb-32 transition-transform [transition-duration:400ms] ease-out"
        style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
      >
        <div className="relative">
          <Image
            src="/imgs/home-pontocloud-v3.png"
            alt="Interface do PontoCloud com dashboard de controle de ponto"
            width={1400}
            height={900}
            className="w-full h-auto rounded-[12px] ring-[12px] ring-white/20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none rounded-[12px]" />
        </div>
      </div>
    </section>
  )
}
