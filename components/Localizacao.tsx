'use client'

import { motion } from 'framer-motion'

const WA_URL =
  'https://wa.me/5598988393399?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20Dermos.'

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-bg py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-teal">
              Localização
            </p>
            <div className="mt-4 w-10 h-px bg-gold" />
            <h2 className="mt-5 font-serif text-4xl lg:text-5xl font-light text-dark">
              Onde nos encontrar
            </h2>

            <div className="mt-10 space-y-2">
              <p className="font-serif text-xl text-dark font-light">Clínica Dermos</p>
              <p className="font-display font-light text-[0.65rem] tracking-[0.18em] uppercase text-teal">
                Av. Colares Moreira, 555 · 6º andar
              </p>
              <p className="font-display font-light text-[0.6rem] tracking-[0.15em] uppercase text-muted">
                Ed. Renascença Medical Center · São Luís, MA · CEP 65075-441
              </p>
            </div>

            <div className="mt-8 w-full h-px bg-gold/30" />

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="font-display font-light text-[0.6rem] tracking-[0.2em] uppercase text-teal/80 mb-3">
                  Horários
                </p>
                <ul className="space-y-2">
                  {[
                    'Segunda–Sexta: 08h–20h',
                    'Sábado: 08h–12h',
                  ].map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-sans font-light text-muted text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-display font-light text-[0.6rem] tracking-[0.2em] uppercase text-teal/80 mb-3">
                  Contato
                </p>
                <ul className="space-y-2">
                  {([
                    { href: 'tel:+559831906700', label: '(98) 3190-6700' },
                    { href: 'tel:+5598988393399', label: '(98) 98839-3399' },
                    { href: 'https://wa.me/5598992266700', label: '(98) 9 9226-6700', note: 'WhatsApp · Dermos Estética' },
                  ] as { href: string; label: string; note?: string }[]).map((c) => {
                    const external = c.href.startsWith('http')
                    return (
                      <li key={c.label} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-2" />
                        <a
                          href={c.href}
                          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="font-sans font-light text-muted text-sm hover:text-teal transition-colors"
                        >
                          {c.note && (
                            <span className="block font-display text-[0.55rem] tracking-[0.15em] uppercase text-teal/70">
                              {c.note}
                            </span>
                          )}
                          {c.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="mt-8 w-full h-px bg-gold/30" />

            <div className="mt-8">
              <p className="font-display font-light text-[0.6rem] tracking-[0.2em] uppercase text-teal/80 mb-3">
                Convênios
              </p>
              <p className="font-sans font-light text-muted text-sm">
                Aceitamos convênios médicos. Entre em contato para verificar seu plano.
              </p>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-teal hover:bg-teal-light text-white font-display font-light text-[0.65rem] tracking-[0.22em] uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Agendar pelo WhatsApp
            </a>
          </motion.div>

          {/* Right — map */}
          <motion.div
            className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d-44.289138!3d-2.5008319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68c2dbe1c7cc9%3A0x40d4157046626fcd!2sCl%C3%ADnica%20Dermos%20-%20Medical%20Center!5e0!3m2!1spt-BR!2sbr!4v1717171717171!5m2!1spt-BR!2sbr"
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Clínica Dermos"
              className="w-full"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
