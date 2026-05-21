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
  { label: 'Funcionalidades', href: '#features' },
  { label: 'App', href: '#app' },
  { label: 'Perfis', href: '#perfis' },
  { label: 'Dúvidas', href: '#faq' },
]

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
        scrolled ? 'bg-white/80 shadow-sm backdrop-blur-md' : 'bg-transparent',
        mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[72px] grid grid-cols-[1fr_auto_1fr] items-center">
        <Link href="#" className="justify-self-start">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center gap-10 justify-self-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[15px] font-medium font-inter text-foreground hover:text-foreground/80 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="justify-self-end flex items-center gap-3">
          <Button variant="outline" className="hidden md:inline-flex font-inter rounded-[8px] border border-black/[.08] bg-transparent hover:bg-black/5 transition-colors" asChild>
            <Link href="#contact">Falar com consultor</Link>
          </Button>
          <Button variant="dark" className="hidden md:inline-flex font-inter rounded-[8px]" asChild>
            <Link href="#contact">Começar teste grátis</Link>
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
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
                <Button variant="outline" className="mt-4 font-inter rounded-[8px] border border-black/[.08] bg-transparent hover:bg-black/5 transition-colors" asChild>
                  <Link href="#contact">Falar com consultor</Link>
                </Button>
                <Button variant="dark" className="font-inter rounded-[8px]" asChild>
                  <Link href="#contact">Começar teste grátis</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
