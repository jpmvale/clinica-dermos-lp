'use client'

import { motion } from 'framer-motion'

const WA_URL =
  'https://wa.me/5598988393399?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20Dermos.'

export default function CTAFinal() {
  return (
    <section id="contato" className="bg-dark py-28 lg:py-44 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/3" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-gold/70">
            Agende sua Consulta
          </p>
          <div className="mt-4 w-10 h-px bg-gold/40 mx-auto" />

          <h2 className="mt-6 font-serif leading-tight">
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-light italic text-white">
              Cuide da sua pele
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-light text-white/80 mt-1">
              com quem entende.
            </span>
          </h2>

          <p className="mt-8 font-sans font-light text-muted text-sm leading-relaxed max-w-xl mx-auto">
            9 dermatologistas especializados, comprometidos com segurança, ética e cuidado genuinamente humano. Agende agora e dê o primeiro passo.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-teal hover:bg-teal-light text-white font-display font-light text-[0.65rem] tracking-[0.22em] uppercase px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar pelo WhatsApp
            </a>
            <a
              href="tel:+559831906700"
              className="border border-muted/40 text-muted hover:border-white/60 hover:text-white font-display font-light text-[0.65rem] tracking-[0.22em] uppercase px-8 py-4 rounded-full transition-all duration-300"
            >
              (98) 3190-6700
            </a>
          </div>

          <p className="mt-10 font-display font-light text-[0.6rem] tracking-[0.2em] uppercase text-muted/40">
            Seg–Sex 08h–20h · Sáb 08h–12h · São Luís, MA
          </p>
        </motion.div>
      </div>
    </section>
  )
}
