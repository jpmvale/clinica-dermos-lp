'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fotos = [
  { src: '/clinica/IMG_4826.jpeg', alt: 'Recepção da Clínica Dermos' },
  { src: '/clinica/IMG_4831.jpeg', alt: 'Sala de espera da Clínica Dermos' },
  { src: '/clinica/IMG_4830.jpeg', alt: 'Dermos Café' },
  { src: '/clinica/IMG_4828.jpeg', alt: 'Área externa da Clínica Dermos' },
  { src: '/clinica/IMG_4832.jpeg', alt: 'Centro cirúrgico da Clínica Dermos' },
  { src: '/clinica/IMG_4933.jpeg', alt: 'Sala de procedimentos da Clínica Dermos' },
]

export default function Estrutura() {
  return (
    <section id="estrutura" className="bg-cream py-24 lg:py-36">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-teal">
            Nossa Estrutura
          </p>
          <div className="mt-4 w-10 h-px bg-gold mx-auto" />
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl font-light text-dark">
            Um ambiente pensado para você
          </h2>
          <p className="mt-6 font-sans font-light text-muted leading-relaxed text-sm max-w-2xl mx-auto">
            Localizada no Renascença Medical Center, a Clínica Dermos foi projetada para oferecer conforto e acolhimento em cada detalhe — da recepção ao consultório.
          </p>
        </motion.div>
      </div>

      {/* Photos — full viewport width, always 6 columns on desktop */}
      <motion.div
        className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 px-6 lg:px-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        {fotos.map((foto, i) => (
          <motion.div
            key={foto.src}
            className="relative rounded-2xl overflow-hidden aspect-[3/4]
                       hover:shadow-xl transition-shadow duration-500 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              unoptimized
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
