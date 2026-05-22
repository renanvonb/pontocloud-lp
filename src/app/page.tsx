'use client'

import { useScrollReveal } from '@/components/useScrollReveal'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import Problem from '@/components/Problem'
import ValueProposition from '@/components/ValueProposition'
import Features from '@/components/Features'
import MobileApp from '@/components/MobileApp'
import UserProfiles from '@/components/UserProfiles'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  useScrollReveal()

  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Clients />
      <Problem />
      <ValueProposition />
      <Features />
      <MobileApp />
      <UserProfiles />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
