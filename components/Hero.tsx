'use client'

import { motion } from 'framer-motion'

const WA_URL =
  'https://wa.me/5598988393399?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20Dermos.'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
  { value: '9', label: 'Dermatologistas' },
  { value: '10+', label: 'Anos de experiência' },
  { value: 'Convênios', label: 'Aceitos' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-bg flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid lg:grid-cols-[58fr_42fr] min-h-screen">

        {/* Left column */}
        <motion.div
          className="flex flex-col justify-center py-32 lg:py-0 lg:pt-24 pr-0 lg:pr-20 z-10 min-w-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-teal"
          >
            Dermatologia · São Luís, MA
          </motion.p>

          <motion.div variants={item} className="mt-4 w-10 h-px bg-gold" />

          <motion.h1 variants={item} className="mt-5 font-serif leading-[1.05]">
            <span className="block text-6xl sm:text-7xl lg:text-8xl font-light italic text-dark">
              Ciência e cuidado
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-8xl font-semibold text-dark">
              para a sua pele.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 font-sans font-light text-muted text-base leading-relaxed max-w-md"
          >
            Uma equipe de 9 dermatologistas especialistas em cuidado clínico, cirúrgico e estético — com tecnologia de ponta e atendimento humanizado.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 font-display font-light text-[0.65rem] tracking-[0.2em] uppercase text-teal/80"
          >
            Dermatologia Clínica · Cirúrgica · Estética
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal hover:bg-teal-light text-white font-display font-light text-[0.65rem] tracking-[0.22em] uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#equipe"
              className="border border-teal text-teal hover:bg-teal hover:text-white font-display font-light text-[0.65rem] tracking-[0.22em] uppercase px-8 py-4 rounded-full transition-all duration-300"
            >
              Conhecer a equipe
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-14 flex gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-serif text-2xl font-light text-dark">{s.value}</span>
                <span className="font-display font-light text-[0.55rem] tracking-[0.2em] uppercase text-muted/70 mt-0.5">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — abstract visual */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Main panel */}
          <div className="relative w-full h-[80vh] max-h-[720px] rounded-3xl overflow-hidden bg-gradient-to-br from-teal via-teal/90 to-dark/80">

            {/* Decorative large circle */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full border border-white/10" />

            {/* Grid texture overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.3) 39px, rgba(255,255,255,.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.3) 39px, rgba(255,255,255,.3) 40px)',
              }}
            />

            {/* Large decorative D letter */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
              <span className="font-serif text-[22rem] font-bold text-white/5 leading-none">D</span>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-10">
              {/* Top tag */}
              <div className="flex justify-end">
                <span className="bg-white/10 backdrop-blur-sm text-white font-display font-light text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/20">
                  Referência em Dermatologia
                </span>
              </div>

              {/* Center content */}
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3m-4.22-6.22-2.12 2.12M8.34 15.66l-2.12 2.12m12.02 0-2.12-2.12M8.34 8.34 6.22 6.22" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-white/60">Clínica Dermos</p>
                  <p className="font-serif text-3xl font-light italic text-white mt-2">Sua pele em boas mãos.</p>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: '9', desc: 'Especialistas' },
                  { val: 'Seg–Sáb', desc: 'Atendimento' },
                  { val: '100%', desc: 'Dedicação' },
                ].map((s) => (
                  <div
                    key={s.desc}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10"
                  >
                    <p className="font-serif text-xl font-light text-white">{s.val}</p>
                    <p className="font-display font-light text-[0.55rem] tracking-[0.15em] uppercase text-white/60 mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient blend to left */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="font-display font-light text-[0.55rem] tracking-[0.3em] uppercase text-muted/50">
          Rolar
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-muted/30 to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
