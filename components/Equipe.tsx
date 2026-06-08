'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'

const medicos = [
  { nome: 'Dra. Sabrina Beirão', crm: 'CRM-MA 6649', rqe: 'RQE 1278', role: 'Dermatologista', foto: '/equipe/Sabrina Beirão.png' },
  { nome: 'Dr. Eduardo Lago', crm: 'CRM-MA 5064', rqe: 'RQE 566', role: 'Dermatologista', foto: '/equipe/Eduardo Lago.png' },
  { nome: 'Dra. Gisele Campelo', crm: 'CRM-MA 6805', rqe: 'RQE 2981', role: 'Dermatologista', foto: '/equipe/Gisele Campelo.png' },
  { nome: 'Dra. Letícia Rezende', crm: 'CRM-MA 10873', rqe: 'RQE 6040', role: 'Dermatologista', foto: '/equipe/Letícia Rezende.png' },
  { nome: 'Dra. Ana Carolina Mascarenhas', crm: 'CRM-MA 9072', rqe: 'RQE 4082', role: 'Dermatologista', foto: '/equipe/Anna Carolina Mascarenhas.png' },
  { nome: 'Dra. Alanna Dominici', crm: 'CRM-MA 11487', rqe: 'RQE 7309', role: 'Dermatologista', foto: '/equipe/Alanna Dominici.png' },
  { nome: 'Dra. Jordana Cardoso', crm: 'CRM-MA 7020', rqe: 'RQE 2855', role: 'Dermatologista', foto: '/equipe/Jordana Cardoso.png' },
  { nome: 'Dra. Michelle Goiabeira', crm: 'CRM-MA 6820', rqe: 'RQE 3599', role: 'Dermatologista', foto: '/equipe/Michelle Goiabeira.png' },
  { nome: 'Dra. Thairine Lima', crm: 'CRM-MA 10557', rqe: 'RQE 5355', role: 'Dermatologista', foto: '/equipe/Thairine Lima.png' },
]

const CARD_WIDTH = 'min-w-[240px] sm:min-w-[260px] lg:min-w-[280px]'
const SNAP = { scrollSnapAlign: 'start' as const }

export default function Equipe() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    syncArrows()
    el.addEventListener('scroll', syncArrows, { passive: true })
    return () => el.removeEventListener('scroll', syncArrows)
  }, [syncArrows])

  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'next' ? el.clientWidth : -el.clientWidth, behavior: 'smooth' })
  }

  return (
    <section id="equipe" className="bg-bg py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-teal">
            Nossa Equipe
          </p>
          <div className="mt-4 w-10 h-px bg-gold mx-auto" />
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl font-light text-dark">
            Especialistas que cuidam de você
          </h2>
          <p className="mt-6 font-sans font-light text-muted leading-relaxed text-sm max-w-2xl mx-auto">
            Idealizada por Dra. Sabrina Beirão e Dr. Eduardo Lago, a Dermos reúne hoje 9 dermatologistas
            unidos pelo mesmo propósito: oferecer o melhor diagnóstico e tratamento com responsabilidade e cuidado humano.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative mt-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        {/* Prev */}
        <button
          onClick={() => scroll('prev')}
          disabled={atStart}
          aria-label="Anterior"
          className="absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 z-10
                     w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-md
                     flex items-center justify-center text-dark
                     transition-all duration-200 hover:bg-teal hover:text-white
                     disabled:opacity-0 disabled:pointer-events-none"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto px-6 lg:px-12 pb-2 [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
        >
          {medicos.map((m) => (
            <div
              key={m.nome}
              className={`group relative rounded-2xl overflow-hidden flex-shrink-0 aspect-[3/4]
                          hover:shadow-xl transition-shadow duration-500 ${CARD_WIDTH}`}
              style={SNAP}
            >
              <Image
                src={m.foto}
                alt={m.nome}
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, #f9f9ed 0%, #f9f9ed 12%, transparent 44%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                <div className="w-6 h-px bg-gold mb-3" />
                <h3 className="font-serif text-lg font-light text-dark leading-tight">{m.nome}</h3>
                <p className="mt-1 font-display font-light text-[0.6rem] tracking-[0.18em] uppercase text-teal">
                  {m.role}
                </p>
                <p className="mt-1.5 font-display font-light text-[0.55rem] tracking-[0.15em] uppercase text-muted/70">
                  {m.crm} · {m.rqe}
                </p>
              </div>
            </div>
          ))}

          {/* Equipe multidisciplinar */}
          <div
            className={`bg-teal rounded-2xl flex-shrink-0 aspect-[3/4]
                        flex flex-col items-center justify-center text-center
                        relative overflow-hidden ${CARD_WIDTH}`}
            style={SNAP}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
                backgroundSize: '10px 10px',
              }}
            />
            <div className="relative px-8">
              <p className="font-display font-light text-[0.6rem] tracking-[0.2em] uppercase text-white/70 mb-4">
                Equipe multidisciplinar
              </p>
              <p className="font-sans font-light text-white text-sm leading-relaxed">
                Fisioterapeutas e esteticistas completam nosso time de cuidado integral.
              </p>
            </div>
          </div>
        </div>

        {/* Next */}
        <button
          onClick={() => scroll('next')}
          disabled={atEnd}
          aria-label="Próximo"
          className="absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 z-10
                     w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-md
                     flex items-center justify-center text-dark
                     transition-all duration-200 hover:bg-teal hover:text-white
                     disabled:opacity-0 disabled:pointer-events-none"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </motion.div>
    </section>
  )
}
