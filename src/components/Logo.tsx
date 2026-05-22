import Image from 'next/image'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/imgs/logotipo-pontocloud.png"
        alt="PontoCloud"
        width={160}
        height={32}
        className="h-[30px] w-auto"
        priority
      />
    </span>
  )
}

