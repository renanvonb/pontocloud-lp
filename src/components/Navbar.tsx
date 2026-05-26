'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Planos', href: '#planos' },
  { label: 'Revenda', href: '#revenda' },
]

const NAVBAR_HEIGHT = 80

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function scrollToSection(href: string) {
  const id = href.replace('#', '')
  const target = document.getElementById(id)
  if (!target) return

  const targetY = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
  const startY = window.scrollY
  const distance = targetY - startY
  const duration = Math.min(Math.max(Math.abs(distance) * 0.4, 400), 900)
  let startTime: number | null = null

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out pt-1 pb-1',
        scrolled ? 'bg-white/60 shadow-sm backdrop-blur-md' : 'bg-transparent',
        mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      )}
    >
      <nav className="relative max-w-7xl mx-auto px-6 h-[72px] flex items-center">
        <div className="flex items-center">
          <Link href="#">
            <Logo />
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-[4px] absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollToSection(l.href)}
                className="inline-flex items-center text-[16px] font-medium font-inter text-foreground transition-all py-[10px] px-[14px] rounded-md hover:bg-white/20 hover:backdrop-blur-md cursor-pointer"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex items-center justify-end gap-3">
          <Button
            variant="ghost"
            className={`hidden md:inline-flex text-[16px] h-auto py-[10px] px-[14px] font-medium font-inter text-foreground hover:text-foreground border transition-colors duration-500 ${
              scrolled
                ? 'border-black/10 bg-transparent hover:bg-black/5'
                : 'border-black/10 bg-transparent hover:bg-white/20'
            }`}
            asChild
          >
            <Link href="#contact">Área da revenda</Link>
          </Button>
          <Button className="hidden md:inline-flex text-[16px] h-auto py-[10px] px-[14px] font-medium font-inter" asChild>
            <Link href="#contact">Acessar</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {links.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => scrollToSection(l.href)}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {l.label}
                  </button>
                ))}
                <Button variant="ghost" className="mt-4 border-0 bg-white/20 backdrop-blur-md hover:bg-white/30 text-foreground hover:text-foreground" asChild>
                  <Link href="#contact">Revenda</Link>
                </Button>
                <Button asChild>
                  <Link href="#contact">Acessar</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
