'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    num: '01',
    title: 'Equipe Especializada',
    text: '9 dermatologistas com formação especializada e atualização contínua, prontos para oferecer o melhor diagnóstico e tratamento para cada tipo de pele.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Tecnologia de Ponta',
    text: 'Equipamentos como FotoFinder, Laser CO2, Spectra, VelaShape II e criolipólise garantem resultados precisos com máxima segurança.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Atendimento Humanizado',
    text: 'Cada paciente é único. Dedicamos tempo para ouvir, entender e construir um plano de tratamento exclusivo, com respeito e cuidado em cada etapa.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Ciência + Estética',
    text: 'Unimos o rigor da dermatologia clínica com as melhores técnicas estéticas para cuidar da saúde e da beleza da sua pele de forma integrada.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-bg py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-teal">
            Por que a Dermos?
          </p>
          <div className="mt-4 w-10 h-px bg-gold" />
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl font-light text-dark max-w-lg">
            O que nos torna referência
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              className="bg-cream rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute top-6 right-8 font-serif text-7xl font-bold text-bg select-none leading-none group-hover:text-teal/5 transition-colors duration-300">
                {card.num}
              </span>
              <div className="text-teal mb-5">{card.icon}</div>
              <h3 className="font-serif text-xl lg:text-2xl font-light text-dark mb-3 pr-16 md:pr-0">{card.title}</h3>
              <p className="font-sans font-light text-muted text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
