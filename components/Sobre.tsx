'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const values = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: 'Excelência Clínica',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" />
      </svg>
    ),
    label: 'Diagnóstico preciso',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    label: 'Cuidado humanizado',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    label: 'Responsabilidade na entrega',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="bg-cream py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left — decorative visual */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-teal/20" />

          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-teal/10 to-teal/5 aspect-[4/5] flex items-center justify-center">
            {/* Abstract decorative elements */}
            <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-teal/10" />
            <div className="absolute bottom-8 right-8 w-48 h-48 rounded-full bg-gold/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-2 border-teal/20" />

            <div className="relative text-center px-12">
              <div className="font-serif text-8xl font-light text-teal/20 leading-none select-none">10</div>
              <div className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-teal mt-2">
                anos de experiência
              </div>
              <div className="mt-6 w-12 h-px bg-gold mx-auto" />
              <p className="mt-6 font-serif text-lg font-light italic text-dark/70 leading-snug">
                &ldquo;Cuidar da pele é cuidar de quem você é.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-teal">
            Sobre a Clínica
          </motion.p>
          <motion.div variants={fadeUp} className="mt-4 w-10 h-px bg-gold" />

          <motion.h2 variants={fadeUp} className="mt-5 font-serif text-4xl lg:text-5xl font-light text-dark leading-tight">
            Referência em dermatologia{' '}
            <em className="not-italic italic text-teal">no Maranhão</em>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-8 font-sans font-light text-muted leading-relaxed text-sm">
            A Clínica Dermos nasceu da percepção de uma necessidade real: oferecer dermatologia com grande capacidade de atendimento e alto poder de resolução. Idealizada pelos sócios Dra. Sabrina Beirão e Dr. Eduardo Lago, foi inaugurada em 16 de março de 2016 no coração do Renascença Medical Center, em São Luís.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-4 font-sans font-light text-muted leading-relaxed text-sm">
            O nome traduz essa essência: <em>Dermos</em> remete à derme, camada fundamental da pele, simbolizando o compromisso com um cuidado profundo, técnico e responsável. Hoje, com 9 dermatologistas e uma equipe multidisciplinar, mantemos o princípio que guiou nossa origem — responsabilidade na entrega em cada etapa da jornada do paciente.
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="mt-8 pl-6 border-l-2 border-gold"
          >
            <p className="font-serif text-xl lg:text-2xl font-light italic text-dark leading-snug">
              &ldquo;Responsabilidade na entrega — segurança, ética e cuidado genuinamente humano.&rdquo;
            </p>
          </motion.blockquote>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-3">
            {values.map((v) => (
              <div
                key={v.label}
                className="flex items-center gap-3 bg-bg rounded-xl px-4 py-3 border border-cream"
              >
                <span className="text-teal flex-shrink-0">{v.icon}</span>
                <span className="min-w-0 break-words font-display font-light text-[0.6rem] tracking-[0.15em] uppercase text-dark leading-relaxed">{v.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
