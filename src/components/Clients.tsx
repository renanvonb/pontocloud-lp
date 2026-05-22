import Image from 'next/image'

const logos = Array.from({ length: 8 }, (_, i) => i)

export default function Clients() {
  const doubled = [...logos, ...logos]

  return (
    <section className="relative z-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center reveal">
        <h2 className="text-base md:text-lg font-medium tracking-[-0.01em] text-muted-foreground font-[family-name:var(--font-geist-sans)]">
          Empresas que confiam na PontoCloud
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        {/* Degrade esquerdo */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        {/* Degrade direito */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <div
          className="flex items-center gap-12 w-max px-6"
          style={{ animation: 'marquee 50s linear infinite' }}
        >
          {doubled.map((_, i) => (
            <Image
              key={i}
              src="/imgs/logo-pontocloud-placeholder.svg"
              alt="Cliente PontoCloud"
              width={140}
              height={40}
              className="h-8 w-auto opacity-50 grayscale select-none"
              draggable={false}
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <hr className="border-border" />
      </div>
    </section>
  )
}
